// Customer storefront routes — page HTML comes from lib/pages.js
const express = require("express");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const { db, DATA, getSetting, getProductBySlug, getProductById, listProducts, orderFiles } = require("../lib/db");
const { guideBySlug, GUIDES } = require("../lib/guides");
const { buildHome, buildShop, buildProduct, buildSuccess, buildCancel, buildOrderDownloads,
  buildGuides, buildGuide, buildResources, buildLegal, buildContact, buildContactThanks,
  buildAccountLogin, buildAccountSignup, buildAccountDownloads, buildAccountNotice,
  buildCart, buildOffer, build404 } = require("../lib/pages");
const {
  payoneerConfig, createListSession, verifyWebhookToken,
  orderIdFromTransactionId, SECURITY_HEADER,
} = require("../lib/payoneer");

const router = express.Router();
router.use(express.urlencoded({ extended: false })); // contact + account forms
const SITE = "https://littlelearners.store";

// ---------------- home ----------------
router.get("/", (req, res) => {
  res.send(buildHome(listProducts(), req.query));
});

// ---------------- shop ----------------
router.get("/shop", (req, res) => {
  res.send(buildShop(listProducts(), req.query));
});

// ---------------- product detail ----------------
router.get("/product/:slug", (req, res) => {
  const p = getProductBySlug(req.params.slug);
  if (!p) return res.status(404).send(build404(listProducts()));
  res.send(buildProduct(p, listProducts(), req.query));
});

// ---------------- checkout ----------------
router.post("/api/create-checkout", async (req, res) => {
  const p = getProductBySlug(req.body.slug);
  if (!p) return res.status(404).json({ error: "not_found" });
  if (getSetting("payoneer_enabled") !== "1") {
    return res.status(503).json({ error: "checkout_not_configured" });
  }
  const token = crypto.randomBytes(24).toString("hex");
  const order = db.prepare(`INSERT INTO orders (token, email, name, product_id, amount_minor, currency, status)
    VALUES (?, '', '', ?, ?, 'GBP', 'pending')`).run(token, p.id, p.price_minor);
  const orderId = order.lastInsertRowid;
  try {
    // Real Payoneer Checkout LIST session (see lib/payoneer.js). The buyer is
    // sent to the hosted payment page URL in links.self.
    const { checkoutUrl } = await createListSession(
      { id: orderId, token, amount_minor: p.price_minor, currency: "GBP" }, p);
    return res.json({ checkoutUrl });
  } catch (e) {
    console.error("create-checkout failed:", e.message);
    // Don't litter the DB with pending orders that will never complete
    db.prepare("DELETE FROM orders WHERE id = ?").run(orderId);
    return res.status(500).json({ error: "checkout_failed" });
  }
});

router.get("/checkout/success", (req, res) => {
  const order = req.query.order
    ? db.prepare("SELECT * FROM orders WHERE token = ?").get(req.query.order) : null;
  res.send(buildSuccess(order, listProducts()));
});

router.get("/checkout/cancel", (req, res) => {
  res.send(buildCancel(listProducts()));
});

// ---------------- order downloads ----------------
router.get("/order/:token", (req, res) => {
  const order = db.prepare("SELECT * FROM orders WHERE token = ?").get(req.params.token);
  if (!order || order.status !== "paid") return res.status(404).send("Not found");
  res.send(buildOrderDownloads(order, orderFiles(order), listProducts()));
});

router.get("/download/:token/:idx", (req, res) => {
  const order = db.prepare("SELECT * FROM orders WHERE token = ?").get(req.params.token);
  if (!order || order.status !== "paid") return res.status(404).send("Not found");
  const files = orderFiles(order);
  const f = files[Number(req.params.idx)];
  if (!f || !f.file) return res.status(404).send("Not found");
  const fp = path.join(DATA, "files", path.basename(f.file));
  if (!fs.existsSync(fp)) return res.status(404).send("File missing — contact support");
  res.download(fp, `${f.name.replace(/[^a-z0-9]+/gi, "-")}.pdf`);
});

// ---------------- Payoneer webhook ----------------
// Payoneer calls this as HTTPS POST (or GET) with the result appended as QUERY
// parameters: transactionId, longId, entity, statusCode, reasonCode,
// interactionCode, notificationId, timestamp, amount, currency, network...
// Security: Payoneer echoes back the custom "List-Security-Token" notification
// header we sent inside the LIST request. We verify it BEFORE trusting anything.
// A payment counts as paid when entity=payment AND statusCode=charged.
router.post("/api/webhook/payoneer", async (req, res) => {
  try {
    // Payoneer appends params to the query string; accept body params too.
    const params = { ...(req.query || {}), ...((req.body && typeof req.body === "object") ? req.body : {}) };
    const tid = String(params.transactionId || "");
    const orderId = orderIdFromTransactionId(tid);
    const order = orderId ? db.prepare("SELECT * FROM orders WHERE id = ?").get(orderId) : null;
    if (!order) {
      // Unknown/stale transaction: ack so Payoneer stops retrying.
      return res.status(200).json({ received: true, ignored: "unknown_transaction" });
    }
    // --- verify BEFORE trusting anything ---
    const cfg = payoneerConfig();
    const headerValue = req.get(SECURITY_HEADER) || "";
    if (!verifyWebhookToken(order.id, headerValue, cfg.webhookSecret)) {
      console.error(`payoneer webhook: bad ${SECURITY_HEADER} for order #${order.id}`);
      return res.status(401).json({ error: "bad_signature" });
    }
    // --- duplicate delivery? (Payoneer retries until it gets 2xx) ---
    const notificationId = String(params.notificationId || "");
    if (notificationId && order.payoneer_notification_id === notificationId) {
      return res.status(200).json({ received: true, duplicate: true });
    }

    const paid = String(params.entity || "") === "payment" && String(params.statusCode || "") === "charged";
    if (paid && order.status !== "paid") {
      db.prepare(`UPDATE orders SET status='paid', payoneer_payment_id=?, payoneer_notification_id=? WHERE id = ?`)
        .run(String(params.longId || ""), notificationId, order.id);
      const n8n = getSetting("n8n_webhook_url");
      if (n8n) {
        const p = getProductById(order.product_id);
        // Same normalized order_created payload the n8n workflow expects.
        await fetch(n8n, { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ meta: { event_name: "order_created" },
            data: { id: String(order.id), attributes: {
              order_number: order.id, user_email: order.email || "",
              user_name: order.name || "", total: order.amount_minor,
              currency: order.currency,
              first_order_item: { product_name: p ? p.name : "" },
              download_url: SITE + "/order/" + order.token } } }) })
          .catch((e) => console.error("n8n forward failed:", e.message));
      }
    } else if (notificationId && notificationId !== order.payoneer_notification_id) {
      // Remember non-payment notifications too, so replays stay idempotent.
      db.prepare("UPDATE orders SET payoneer_notification_id=? WHERE id = ?").run(notificationId, order.id);
    }
    res.status(200).json({ received: true });
  } catch (e) { console.error("webhook error:", e.message); res.status(200).json({ received: true }); }
});

// ---------------- guides ----------------
router.get("/guides", (req, res) => {
  res.send(buildGuides(listProducts()));
});
router.get("/guides/:slug", (req, res) => {
  const g = guideBySlug(req.params.slug);
  if (!g || g.draft) return res.status(404).send(build404(listProducts()));
  res.send(buildGuide(g, listProducts()));
});

// ---------------- resources ----------------
router.get("/resources", (req, res) => {
  res.send(buildResources(listProducts()));
});

// ---------------- legal ----------------
for (const kind of ["privacy", "terms", "refunds", "licence"]) {
  router.get("/" + kind, (req, res) => res.send(buildLegal(kind, listProducts())));
}

// ---------------- contact ----------------
router.get("/contact", (req, res) => {
  res.send(buildContact(listProducts()));
});
router.post("/contact", (req, res) => {
  // TODO: forward to email / n8n when the contact pipeline is connected.
  // For now we show an honest thank-you that points to direct email.
  console.log("contact form:", JSON.stringify({ name: req.body.name, email: req.body.email, order: req.body.order }).slice(0, 300));
  res.send(buildContactThanks(listProducts()));
});

// ---------------- account (honest: launches with next update) ----------------
router.get("/account", (req, res) => res.redirect("/account/login"));
router.get("/account/login", (req, res) => res.send(buildAccountLogin(listProducts())));
router.post("/account/login", (req, res) => res.send(buildAccountNotice(
  "Accounts are on their way",
  "Customer accounts launch with our next update. Until then, your download links live in your receipt email — search your inbox for “LittleLearners”.",
  listProducts())));
router.get("/account/signup", (req, res) => res.send(buildAccountSignup(listProducts())));
router.post("/account/signup", (req, res) => res.send(buildAccountNotice(
  "Accounts are on their way",
  "Customer accounts launch with our next update — nothing was created just now. Your past purchases are safe in your receipt emails.",
  listProducts())));
router.get("/account/downloads", (req, res) => res.send(buildAccountDownloads(listProducts())));
router.post("/account/downloads", (req, res) => res.send(buildAccountNotice(
  "Lookup isn't live yet",
  "Order lookup launches with customer accounts in our next update. For now, your download link is in your receipt email — search your inbox for “LittleLearners”. Still stuck? Email hello@littlelearners.store and we'll resend it.",
  listProducts())));

// ---------------- cart ----------------
router.get("/cart", (req, res) => {
  res.send(buildCart(listProducts()));
});

// ---------------- offer landing ----------------
router.get("/offer/:slug", (req, res) => {
  const html = buildOffer(req.params.slug, listProducts());
  if (!html) return res.status(404).send(build404(listProducts()));
  res.send(html);
});

// ---------------- 404 ----------------
router.get("/404", (req, res) => res.status(404).send(build404(listProducts())));

// ---------------- seo ----------------
router.get("/robots.txt", (req, res) => {
  res.type("text/plain").send(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
});
router.get("/sitemap.xml", (req, res) => {
  const guideUrls = GUIDES.filter((g) => !g.draft).map((g) => `/guides/${g.slug}`);
  const urls = ["/", "/shop", "/guides",
    ...guideUrls,
    "/privacy", "/terms", "/refunds", "/licence", "/contact", "/resources",
    ...listProducts().map((p) => `/product/${p.slug}`)];
  res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`);
});

module.exports = router;
