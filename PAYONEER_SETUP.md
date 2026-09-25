# Payoneer Checkout — Setup Guide (LittleLearners)

Money flow:

```
Customer clicks Buy → POST /api/create-checkout → our server creates a Payoneer
LIST session (POST {API base}/lists) → customer is sent to the Payoneer-hosted
payment page → customer pays (Visa/Mastercard) → Payoneer calls our webhook
(POST /api/webhook/payoneer with result in query params) → server verifies the
echoed List-Security-Token header → marks order paid → forwards normalized
order_created to n8n → Sheet + emails + review sequence → funds land in your
Payoneer (GBP, no conversion fee) → withdraw to Pakistani bank
```

How the integration works (matches Payoneer's official Checkout docs and their
official WooCommerce plugin):

- **Create session:** `POST {PAYONEER_API_BASE_URL}/lists`, header
  `Authorization: Basic base64(MERCHANT_CODE:API_TOKEN)`, JSON body with
  `integration: "HOSTED"`, `transactionId` (= `LL-<our order id>`), decimal
  `payment.amount` (e.g. `4.99`), `currency: "GBP"`, `operationType: "CHARGE"`,
  `callback.returnUrl/cancelUrl/notificationUrl`, and a custom
  `callback.notificationHeaders: [{ name: "List-Security-Token", value: <per-order token> }]`.
  The response's `links.self` is the hosted checkout page — the customer is sent there.
- **Webhook:** Payoneer calls `https://<domain>/api/webhook/payoneer` as HTTPS
  POST (query parameters appended): `transactionId`, `longId`, `entity`,
  `statusCode`, `reasonCode`, `interactionCode`, `notificationId`, `timestamp`,
  `amount`, `currency`, `network`. **Paid = `entity=payment` + `statusCode=charged`.**
  Security is a **shared secret, not a signature header**: Payoneer echoes our
  `List-Security-Token` header back, and we accept the notification only when it
  matches the per-order token we derived from `PAYONEER_WEBHOOK_SECRET`.
  `notificationId` is used to ignore duplicate deliveries.

---

## Step 1 — Enroll in Payoneer Checkout (your task, in Payoneer)

1. Log in at **myaccount.payoneer.com** → look for **Payoneer Checkout** (sometimes
   labelled "Online Checkout"). It is a **separate product** from the regular
   receiving account and needs its own application/approval — find the
   **"Register For Checkout"** section and apply as a **digital goods** seller.
2. Approval is a manual review and can take several days — start this now, it is
   the critical path.
3. Questions to confirm with Payoneer during enrollment (their docs do not spell
   these out publicly):
   - Is Checkout available for a **Pakistan-based** account selling digital goods
     to UK customers?
   - Is there any minimum volume / business-type requirement for your account?
   - UK VAT: Payoneer Checkout is **not** Merchant of Record, so VAT on UK sales
     stays **your** responsibility — confirm with your accountant once sales start.

## Step 2 — Collect your credentials (Payoneer Checkout dashboard)

After approval, in the Checkout section of your Payoneer account
(myaccount.payoneer.com → Checkout), find:

| Env var | Where to find it |
|---|---|
| `PAYONEER_MERCHANT_ID` | Merchant code shown next to your Checkout credentials |
| `PAYONEER_API_KEY` | API token (there are separate tokens for test/sandbox and live — use the **test** one first) |
| `PAYONEER_API_BASE_URL` | API base URL shown with your credentials (merchant-specific; different for sandbox vs live — copy it exactly, no trailing slash) |
| `PAYONEER_WEBHOOK_SECRET` | **You generate this yourself**: any long random string (e.g. 48+ random characters). It is never sent to Payoneer as-is — the server derives a per-order token from it. Keep it the same in sandbox and live, or rotate per environment. |
| `PAYONEER_ENV` | `sandbox` while testing, `live` when you go live (informational) |

Generate a secret locally, e.g.:

```bash
node -e "console.log(require('crypto').randomBytes(36).toString('hex'))"
```

## Step 3 — Set environment variables (Hostinger hPanel)

Secrets are **never** stored in the store's database and never typed into the
admin panel. On Hostinger:

1. hPanel → **Websites** → your domain → **Node.js** app → **Environment variables**
   (if your plan's Node.js panel has no env-var section, add the exports to the
   app's startup command / `.bashrc` of the app user instead).
2. Add all five variables from the table above.
3. **Restart** the Node.js app so the new variables take effect.
4. Open `https://<domain>/admin` → **Settings** → the "Payoneer secrets" table
   should show **Set** for all four secret variables (values are never displayed).
5. Set **Payoneer Checkout enabled** to `1` and save.

Local development: create a `.env` file (never commit it) or export the variables
in the shell before `npm start`:

```bash
export PAYONEER_MERCHANT_ID=... PAYONEER_API_KEY=... PAYONEER_WEBHOOK_SECRET=...
export PAYONEER_API_BASE_URL=... PAYONEER_ENV=sandbox
npm start
```

## Step 4 — Register the webhook (Payoneer Checkout dashboard)

In the Checkout dashboard → **Webhooks/notifications** (or pass it per LIST
request — the server already sends it per request, so dashboard config is a
backup), add:

```
https://littlelearners.store/api/webhook/payoneer
```

- Must be **HTTPS**.
- The server always sends `notificationUrl` inside every LIST request, so
  per-request registration already covers you.
- Subscribe to **payment** notifications (successes, and later chargebacks —
  the server currently only acts on `statusCode=charged` and safely ignores the rest).

The customer return URLs are sent per request by the server — no dashboard
setup needed:

- Success: `https://littlelearners.store/checkout/success?order=<token>`
- Cancel: `https://littlelearners.store/checkout/cancel`

## Step 5 — Sandbox test, end to end

1. In the Payoneer Checkout dashboard, make sure you are in **test/sandbox** mode
   and using the **test** API token as `PAYONEER_API_KEY`.
2. Payoneer's docs provide **test card numbers** for the sandbox — use those
   (never a real card in sandbox).
3. On the store, click **Buy** on the cheapest product → you should land on a
   Payoneer-hosted test payment page → pay with the test card.
4. Verify, in order:
   - Payoneer redirects you to `/checkout/success?order=...` showing the
     "confirming your payment" state, then the download button appears
     (webhook usually arrives within seconds; refreshing the page re-checks).
   - `/admin` → **Orders** shows the order as **paid** with a Payoneer payment id.
   - n8n: execution arrived → Google Sheet got a row → you got the sale alert email.
   - (For the 3-day review email: temporarily set the n8n Wait node to minutes,
     then set it back.)
5. Negative checks:
   - Cancel on the Payoneer page → back to `/checkout/cancel`, order stays pending,
     no charge.
   - Server logs show no secret values (only `create-checkout failed: ...` style
     messages if something is misconfigured).

## Step 6 — Go live checklist

- [ ] Payoneer approved the **live** Checkout account.
- [ ] `PAYONEER_API_KEY` = **live** token, `PAYONEER_API_BASE_URL` = **live** base URL,
      `PAYONEER_ENV=live` in hPanel env vars; app restarted.
- [ ] `/admin` → Settings shows all four variables **Set**; Payoneer Checkout enabled = `1`.
- [ ] Webhook URL registered and reachable over HTTPS (test with one real
      low-value purchase, e.g. the £2.99 pack, on your own card — then refund it
      in the Payoneer dashboard if you want).
- [ ] That live test order shows **paid** in `/admin` → Orders, the download page
      works, and the n8n flow fired.
- [ ] Accountant confirmed how you will handle UK VAT as a non-MoR seller.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `503 checkout_not_configured` | `payoneer_enabled` is not `1` in Admin → Settings |
| `500 checkout_failed`, log: "Payoneer not configured: …" | An env var is missing — check the Settings status table |
| `500`, log: "Payoneer API unreachable" | Wrong `PAYONEER_API_BASE_URL`, or sandbox URL used with live token |
| `500`, log: "rejected LIST request (HTTP 401/403)" | Wrong merchant code / API token, or test token against the live base URL |
| Webhook 401s in Payoneer dashboard | `PAYONEER_WEBHOOK_SECRET` differs between the app that created the LIST and the app receiving the webhook (e.g. changed secret without restart) |
| Order stays pending after successful test payment | Webhook not reaching the server (check HTTPS, Cloudflare rules, app logs); the customer can still get files from the success page once the webhook lands |

## Reference: exact API contract used by `lib/payoneer.js`

- `POST {base}/lists`, `Authorization: Basic base64(code:token)`
- Body: `integration: "HOSTED"`, `transactionId: "LL-<orderId>"`, `country: "GB"`,
  `payment: { reference, amount: <decimal>, currency: "GBP", invoiceId }`,
  `callback: { returnUrl, summaryUrl, cancelUrl, notificationUrl, notificationHeaders: [{ name: "List-Security-Token", value }] }`,
  `operationType: "CHARGE"`, `products: [{ name, quantity: 1, amount }]`
- Success response: `links.self` → hosted checkout URL (customer redirect)
- Webhook: query params; paid ⇔ `entity=payment` and `statusCode=charged`;
  authenticity ⇔ echoed `List-Security-Token` header matches
  `HMAC-SHA256(PAYONEER_WEBHOOK_SECRET, "littlelearners:order:<orderId>")`;
  dedup by `notificationId`; always answer 200 except 401 on bad token.
