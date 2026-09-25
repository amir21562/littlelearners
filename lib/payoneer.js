// Payoneer Checkout (Open Payment Gateway) integration.
//
// How it works (per Payoneer's official Checkout docs + their WooCommerce plugin):
//  1. We POST {base}/lists with HTTP Basic auth (base64 of "merchant_code:api_token").
//     The body is a LIST session: transactionId (our order id), decimal amount,
//     currency, callback URLs and merchant-defined notificationHeaders.
//  2. Payoneer replies with JSON containing links.self -> the hosted payment page
//     URL. We send the customer there.
//  3. Payoneer calls our notificationUrl as HTTPS POST (or GET) with the result
//     appended as QUERY parameters (transactionId, longId, entity, statusCode,
//     reasonCode, interactionCode, notificationId, timestamp, amount, currency...).
//     A payment counts as paid when entity=payment AND statusCode=charged.
//  4. Webhook security is a SHARED SECRET, not an HMAC signature header:
//     we send a per-order secret token as a custom notificationHeader
//     ("List-Security-Token") inside the LIST request, and Payoneer echoes that
//     header back on every notification. We accept the notification only when
//     the echoed header matches what we derived for that order.
//
// Secrets come ONLY from environment variables - never from the DB, never in code:
//   PAYONEER_MERCHANT_ID   merchant code from the Checkout dashboard
//   PAYONEER_API_KEY       API token from the Checkout dashboard
//   PAYONEER_WEBHOOK_SECRET  any long random string WE generate (used to derive
//                            the per-order List-Security-Token)
//   PAYONEER_API_BASE_URL  API base URL from the Checkout dashboard
//                          (merchant-specific; differs for sandbox vs live)
//   PAYONEER_ENV           sandbox | live (default: sandbox, informational only)
const crypto = require("crypto");
const { getSetting } = require("./db");

const SITE = "https://littlelearners.site";
const SECURITY_HEADER = "List-Security-Token";

function env(name) {
  return (process.env[name] || "").trim();
}

function payoneerConfig() {
  return {
    enabled: getSetting("payoneer_enabled") === "1",
    merchantId: env("PAYONEER_MERCHANT_ID"),
    apiKey: env("PAYONEER_API_KEY"),
    webhookSecret: env("PAYONEER_WEBHOOK_SECRET"),
    baseUrl: env("PAYONEER_API_BASE_URL").replace(/\/+$/, ""),
    env: env("PAYONEER_ENV") || "sandbox",
  };
}

// Missing pieces, for a clear error instead of a cryptic API failure.
function missingConfig(cfg) {
  const missing = [];
  if (!cfg.enabled) missing.push("payoneer_enabled != 1 (Admin -> Settings)");
  if (!cfg.merchantId) missing.push("PAYONEER_MERCHANT_ID");
  if (!cfg.apiKey) missing.push("PAYONEER_API_KEY");
  if (!cfg.webhookSecret) missing.push("PAYONEER_WEBHOOK_SECRET");
  if (!cfg.baseUrl) missing.push("PAYONEER_API_BASE_URL");
  return missing;
}

// Per-order shared-secret token. Sent to Payoneer as a notificationHeader in
// the LIST request; Payoneer echoes it back as an HTTP header on notifications.
// Derived via HMAC so we never have to store it - the webhook secret alone
// lets us recompute and compare it.
function webhookTokenFor(orderId, webhookSecret) {
  return crypto
    .createHmac("sha256", webhookSecret)
    .update("littlelearners:order:" + orderId)
    .digest("hex");
}

// Constant-time comparison of the echoed header against our derived token.
function verifyWebhookToken(orderId, headerValue, webhookSecret) {
  if (!headerValue || !webhookSecret) return false;
  const expected = webhookTokenFor(orderId, webhookSecret);
  const a = Buffer.from(String(headerValue), "utf8");
  const b = Buffer.from(expected, "utf8");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Our merchant-side transaction id for an order. Unique per order row,
// and lets the webhook map transactionId -> order without trusting anything else.
function transactionIdFor(orderId) {
  return "LL-" + orderId;
}

function orderIdFromTransactionId(tid) {
  const m = /^LL-(\d+)$/.exec(String(tid || ""));
  return m ? Number(m[1]) : null;
}

// Create a Payoneer LIST (hosted checkout) session.
// Returns { checkoutUrl, listLongId }. Throws on any failure.
async function createListSession(order, product) {
  const cfg = payoneerConfig();
  const missing = missingConfig(cfg).filter((m) => m !== "payoneer_enabled != 1 (Admin -> Settings)");
  if (missing.length) throw new Error("Payoneer not configured: " + missing.join(", "));
  if (!cfg.enabled) throw new Error("Payoneer Checkout is disabled (payoneer_enabled != 1)");

  const amount = (order.amount_minor / 100).toFixed(2); // decimal, e.g. "4.99"
  const tid = transactionIdFor(order.id);
  const body = {
    integration: "HOSTED",
    transactionId: tid,
    country: "GB",
    customer: {},
    payment: {
      reference: "LittleLearners order #" + order.id,
      amount: Number(amount),
      currency: order.currency || "GBP",
      invoiceId: tid,
    },
    callback: {
      returnUrl: SITE + "/checkout/success?order=" + order.token,
      summaryUrl: SITE + "/product/" + product.slug,
      cancelUrl: SITE + "/checkout/cancel",
      notificationUrl: SITE + "/api/webhook/payoneer",
      notificationHeaders: [
        { name: SECURITY_HEADER, value: webhookTokenFor(order.id, cfg.webhookSecret) },
      ],
    },
    operationType: "CHARGE",
    products: [{ name: product.name, quantity: 1, amount: Number(amount) }],
    allowDelete: false,
  };

  const auth = Buffer.from(cfg.merchantId + ":" + cfg.apiKey, "utf8").toString("base64");
  let res;
  try {
    res = await fetch(cfg.baseUrl + "/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Basic " + auth,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(20000),
    });
  } catch (e) {
    throw new Error("Payoneer API unreachable (" + cfg.env + "): " + e.message);
  }
  let data = null;
  try { data = await res.json(); } catch (e) { /* non-JSON body */ }
  if (!res.ok) {
    const info = data && (data.resultInfo || data.message || data.error)
      ? " - " + JSON.stringify(data).slice(0, 300) : "";
    throw new Error("Payoneer API rejected LIST request (HTTP " + res.status + ")" + info);
  }
  const checkoutUrl = data && data.links && data.links.self;
  if (!checkoutUrl || typeof checkoutUrl !== "string" || !/^https:\/\//.test(checkoutUrl)) {
    throw new Error("Payoneer LIST response had no usable links.self checkout URL");
  }
  const listLongId = data.identification && data.identification.longId
    ? String(data.identification.longId) : "";
  return { checkoutUrl, listLongId };
}

module.exports = {
  SITE,
  SECURITY_HEADER,
  payoneerConfig,
  missingConfig,
  webhookTokenFor,
  verifyWebhookToken,
  transactionIdFor,
  orderIdFromTransactionId,
  createListSession,
};
