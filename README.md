# LittleLearners — Local Build & Publish Guide

## 1. Run the store locally (your machine)

```bash
cd littlelearners
npm install
npm start
```
Open http://localhost:3000 — homepage and http://localhost:3000/bundle/ product page.

## 2. Import the n8n workflow (your local n8n)

1. n8n me **Workflows → ⋯ → Import from file** → select `n8n/littlelearners-sale-workflow.json`
2. Two sticky notes on the canvas explain setup + testing — follow **SETUP CHECKLIST**:
   - **Credentials:** open each Gmail node → select/create Gmail OAuth2; open Log to Sheet → select/create Google Sheets credential
   - **Owner email:** in `Notify Owner`, replace `owner@example.com` with your email
   - **Google Sheet:** create a sheet with a tab named `Sales`, headers: `Date | Order ID | Name | Email | Product | Amount | Currency` → paste the Sheet ID into `Log to Sheet`
3. **Test:** Execute Workflow → copy the TEST webhook URL → POST the sample payload from the TESTING note (use your own email in it) → check: row appears in Sheet, you get welcome + owner emails
4. **Activate** the workflow

What it does: Lemon Squeezy `order_created` → parse → log sale to Sheet → welcome email to buyer → sale alert to you → wait 3 days → review request email.

## 3. Payoneer Checkout (critical path — approval takes days, start now)

See **PAYONEER_SETUP.md** (full guide). Short version:
1. Payoneer dashboard → enroll in **Payoneer Checkout** as a digital goods seller
2. Paste Merchant ID / API key / webhook secret into `server.js` → `enabled: true`
3. Fill the marked API TODO from Payoneer Checkout developer docs

## 4. Publish checklist

- [ ] Domain + Hostinger deploy (same flow as Droply: GitHub repo → hPanel Node.js app)
- [ ] In `server.js` / HTML: replace `https://littlelearners.site` with your real domain
- [ ] Payoneer Checkout credentials pasted, `enabled: true`
- [ ] Success/cancel URLs set in Payoneer dashboard
- [ ] Production webhook registered: `https://YOURDOMAIN/api/webhook/payoneer`
- [ ] `N8N_WEBHOOK_URL` env var points at the n8n production webhook
- [ ] Test payment end-to-end (Sheet + emails fire)
- [ ] Submit sitemap in Google Search Console, request indexing
- [ ] Pinterest: 5 pins per product page (use `public/img/` assets)
