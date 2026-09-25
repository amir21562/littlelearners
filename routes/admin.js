// Admin panel: login, dashboard, products, orders, settings
const express = require("express");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { db, DATA, getSetting, setSetting, getProductById, listProducts } = require("../lib/db");
const { money, esc, adminPage, adminHead } = require("../lib/views");

const router = express.Router();
const upload = multer({ dest: path.join(DATA, "tmp") });

function hashPass(pw, salt = crypto.randomBytes(16).toString("hex")) {
  const h = crypto.scryptSync(pw, salt, 64).toString("hex");
  return `${salt}:${h}`;
}
function checkPass(pw, stored) {
  const [salt, h] = stored.split(":");
  return crypto.timingSafeEqual(Buffer.from(h, "hex"), crypto.scryptSync(pw, salt, 64));
}
const requireAdmin = (req, res, next) =>
  req.session.admin ? next() : res.redirect("/admin/login");

// ---------------- first-run setup / login ----------------
router.get("/", (req, res) => {
  const n = db.prepare("SELECT COUNT(*) c FROM admins").get().c;
  res.redirect(n === 0 ? "/admin/setup" : req.session.admin ? "/admin/dashboard" : "/admin/login");
});
router.get("/setup", (req, res) => {
  if (db.prepare("SELECT COUNT(*) c FROM admins").get().c > 0) return res.redirect("/admin/login");
  res.send(`${adminHead("Set up admin")}<body><div class="wrap admin" style="max-width:440px;padding-top:80px">
<h1>Create admin account</h1><p class="muted">This only shows once.</p>
<form method="post" class="form">
<label>Email<input name="email" type="email" required></label>
<label>Password<input name="password" type="password" minlength="8" required></label>
<button class="btn btn-buy">Create &amp; log in</button></form></div></body></html>`);
});
router.post("/setup", express.urlencoded({ extended: false }), (req, res) => {
  if (db.prepare("SELECT COUNT(*) c FROM admins").get().c > 0) return res.redirect("/admin/login");
  db.prepare("INSERT INTO admins (email, pass_hash) VALUES (?, ?)")
    .run(req.body.email, hashPass(req.body.password));
  req.session.admin = req.body.email;
  res.redirect("/admin/dashboard");
});
router.get("/login", (req, res) => {
  res.send(`${adminHead("Admin login")}<body><div class="wrap admin" style="max-width:440px;padding-top:80px">
<h1>Admin login</h1><form method="post" class="form">
<label>Email<input name="email" type="email" required></label>
<label>Password<input name="password" type="password" required></label>
<button class="btn btn-buy">Log in</button></form></div></body></html>`);
});
router.post("/login", express.urlencoded({ extended: false }), (req, res) => {
  const a = db.prepare("SELECT * FROM admins WHERE email = ?").get(req.body.email);
  if (a && checkPass(req.body.password, a.pass_hash)) {
    req.session.admin = a.email;
    return res.redirect("/admin/dashboard");
  }
  res.send(`${adminHead("Admin login")}<body><div class="wrap admin" style="max-width:440px;padding-top:80px">
<h1>Admin login</h1><p class="err">Wrong email or password.</p>
<form method="post" class="form"><label>Email<input name="email" type="email" required></label>
<label>Password<input name="password" type="password" required></label>
<button class="btn btn-buy">Log in</button></form></div></body></html>`);
});
router.post("/logout", (req, res) => req.session.destroy(() => res.redirect("/admin/login")));

// ---------------- dashboard ----------------
router.get("/dashboard", requireAdmin, (req, res) => {
  const rev = db.prepare("SELECT COALESCE(SUM(amount_minor),0) s FROM orders WHERE status='paid'").get().s;
  const nOrders = db.prepare("SELECT COUNT(*) c FROM orders WHERE status='paid'").get().c;
  const nProducts = db.prepare("SELECT COUNT(*) c FROM orders".replace("orders", "products") + " WHERE active=1").get().c;
  const recent = db.prepare(`SELECT o.*, p.name pname FROM orders o LEFT JOIN products p ON p.id=o.product_id
    ORDER BY o.id DESC LIMIT 10`).all();
  const rows = recent.map((o) =>
    `<tr><td>#${o.id}</td><td>${o.created_at.slice(0, 16)}</td><td>${esc(o.email) || "—"}</td>
     <td>${esc(o.pname) || "—"}</td><td>${money(o.amount_minor)}</td>
     <td><span class="pill ${o.status}">${o.status}</span></td></tr>`).join("");
  const payoneerOk = getSetting("payoneer_enabled") === "1";
  res.send(adminPage("Dashboard", `
<h1>Dashboard</h1>
${payoneerOk ? "" : `<p class="warn">⚠ Payoneer Checkout is not connected — <a href="/admin/settings">connect it in Settings</a>.</p>`}
<div class="statgrid">
<div class="stat"><span>Revenue</span><strong>${money(rev)}</strong></div>
<div class="stat"><span>Paid orders</span><strong>${nOrders}</strong></div>
<div class="stat"><span>Live products</span><strong>${nProducts}</strong></div>
</div>
<h2>Recent orders</h2>
<table class="tbl"><tr><th>Order</th><th>Date</th><th>Email</th><th>Product</th><th>Amount</th><th>Status</th></tr>${rows || '<tr><td colspan="6">No orders yet.</td></tr>'}</table>`));
});

// ---------------- products ----------------
const prodFields = ["slug", "name", "tagline", "description", "price_minor", "compare_price_minor",
  "pages", "badge", "is_bundle", "active", "sort"];

router.get("/products", requireAdmin, (req, res) => {
  const ps = listProducts(false);
  const rows = ps.map((p) =>
    `<tr><td><img src="${esc(p.cover_image) || "/img/logo.webp"}" class="thumb"></td>
     <td><strong>${esc(p.name)}</strong><br><span class="muted">/${esc(p.slug)} · ${p.pages} pages</span></td>
     <td>${money(p.price_minor)}</td>
     <td><span class="pill ${p.active ? "paid" : "pending"}">${p.active ? "live" : "hidden"}</span></td>
     <td><a href="/admin/products/${p.id}/edit">Edit</a> ·
     <form method="post" action="/admin/products/${p.id}/toggle" style="display:inline">
     <button class="linkbtn">${p.active ? "Hide" : "Show"}</button></form> ·
     <form method="post" action="/admin/products/${p.id}/delete" style="display:inline"
       onsubmit="return confirm('Delete this product permanently? This cannot be undone.')">
     <button class="linkbtn" style="color:#c0392b">Delete</button></form></td></tr>`).join("");
  res.send(adminPage("Products", `
<h1>Products <a class="btn btn-ghost" style="font-size:14px;padding:8px 18px" href="/admin/products/new">+ New product</a></h1>
<table class="tbl"><tr><th></th><th>Product</th><th>Price</th><th>Status</th><th></th></tr>${rows}</table>`));
});

function productForm(p = {}, action) {
  const v = (k) => esc(p[k] ?? "");
  const all = listProducts(false).filter((x) => x.id !== p.id && !x.is_bundle);
  return `<form method="post" action="${action}" enctype="multipart/form-data" class="form">
<label>Slug (URL)<input name="slug" value="${v("slug")}" required pattern="[a-z0-9-]+"></label>
<label>Name<input name="name" value="${v("name")}" required></label>
<label>Tagline<input name="tagline" value="${v("tagline")}"></label>
<label>Description<textarea name="description" rows="6">${(p.description || "").replace(/</g, "&lt;")}</textarea></label>
<div class="frow"><label>Price (pence, e.g. 499 = £4.99)<input name="price_minor" type="number" value="${v("price_minor") || 499}" required></label>
<label>Was price (pence, 0 = none)<input name="compare_price_minor" type="number" value="${v("compare_price_minor") || 0}"></label>
<label>Pages<input name="pages" type="number" value="${v("pages") || 0}"></label></div>
<label>Badge (e.g. NEW, SAVE £3 — only truthful badges)<input name="badge" value="${v("badge")}"></label>
<label>PDF file<input type="file" name="pdf" accept="application/pdf">${p.pdf_file ? ` <span class="muted">current: ${p.pdf_file}</span>` : ""}</label>
<label>Cover image<input type="file" name="cover" accept="image/*">${p.cover_image ? ` <span class="muted">current set</span>` : ""}</label>
<label class="chk"><input type="checkbox" name="is_bundle" value="1" ${p.is_bundle ? "checked" : ""}> This is a bundle (no own PDF — pick items below)</label>
<label>Bundle items (for bundles)<select name="bundle_items" multiple size="8">${all.map((x) =>
  `<option value="${x.id}" ${(JSON.parse(p.bundle_items || "[]")).includes(x.id) ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select></label>
<label class="chk"><input type="checkbox" name="active" value="1" ${p.active !== 0 ? "checked" : ""}> Visible in shop</label>
<label>Sort order<input name="sort" type="number" value="${v("sort") || 0}"></label>
<button class="btn btn-buy">Save product</button> <a href="/admin/products">Cancel</a></form>`;
}

router.get("/products/new", requireAdmin, (req, res) =>
  res.send(adminPage("New product", `<h1>New product</h1>${productForm({}, "/admin/products/new")}`)));

function saveFiles(req, slug) {
  const out = {};
  if (req.files?.pdf?.[0]) {
    const dest = path.join(DATA, "files", `${slug}.pdf`);
    fs.renameSync(req.files.pdf[0].path, dest);
    out.pdf_file = `${slug}.pdf`;
  }
  if (req.files?.cover?.[0]) {
    const ext = path.extname(req.files.cover[0].originalname) || ".webp";
    const dest = path.join(__dirname, "..", "public", "img", "products", `${slug}${ext}`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(req.files.cover[0].path, dest);
    out.cover_image = `/img/products/${slug}${ext}`;
  }
  // cleanup any stray tmp files
  for (const arr of Object.values(req.files || {})) for (const f of arr)
    if (fs.existsSync(f.path)) fs.unlinkSync(f.path);
  return out;
}

router.post("/products/new", requireAdmin, upload.fields([{ name: "pdf", maxCount: 1 }, { name: "cover", maxCount: 1 }]), (req, res) => {
  const b = req.body;
  const files = saveFiles(req, b.slug);
  const items = Array.isArray(b.bundle_items) ? b.bundle_items.map(Number) : b.bundle_items ? [Number(b.bundle_items)] : [];
  db.prepare(`INSERT INTO products (slug,name,tagline,description,price_minor,compare_price_minor,pages,
    pdf_file,cover_image,badge,is_bundle,bundle_items,active,sort)
    VALUES (@slug,@name,@tagline,@description,@price_minor,@compare_price_minor,@pages,
    @pdf_file,@cover_image,@badge,@is_bundle,@bundle_items,@active,@sort)`).run({
    slug: b.slug, name: b.name, tagline: b.tagline || "", description: b.description || "",
    price_minor: Number(b.price_minor), compare_price_minor: Number(b.compare_price_minor) || 0,
    pages: Number(b.pages) || 0, pdf_file: files.pdf_file || "", cover_image: files.cover_image || "",
    badge: b.badge || "", is_bundle: b.is_bundle ? 1 : 0, bundle_items: JSON.stringify(items),
    active: b.active ? 1 : 0, sort: Number(b.sort) || 0,
  });
  res.redirect("/admin/products");
});

router.get("/products/:id/edit", requireAdmin, (req, res) => {
  const p = getProductById(req.params.id);
  if (!p) return res.status(404).send("Not found");
  res.send(adminPage("Edit product", `<h1>Edit: ${esc(p.name)}</h1>${productForm(p, `/admin/products/${p.id}/edit`)}`));
});

router.post("/products/:id/edit", requireAdmin, upload.fields([{ name: "pdf", maxCount: 1 }, { name: "cover", maxCount: 1 }]), (req, res) => {
  const p = getProductById(req.params.id);
  if (!p) return res.status(404).send("Not found");
  const b = req.body;
  const files = saveFiles(req, b.slug);
  const items = Array.isArray(b.bundle_items) ? b.bundle_items.map(Number) : b.bundle_items ? [Number(b.bundle_items)] : [];
  db.prepare(`UPDATE products SET slug=@slug,name=@name,tagline=@tagline,description=@description,
    price_minor=@price_minor,compare_price_minor=@compare_price_minor,pages=@pages,
    pdf_file=COALESCE(NULLIF(@pdf_file,''),pdf_file),cover_image=COALESCE(NULLIF(@cover_image,''),cover_image),
    badge=@badge,is_bundle=@is_bundle,bundle_items=@bundle_items,active=@active,sort=@sort WHERE id=@id`).run({
    id: p.id, slug: b.slug, name: b.name, tagline: b.tagline || "", description: b.description || "",
    price_minor: Number(b.price_minor), compare_price_minor: Number(b.compare_price_minor) || 0,
    pages: Number(b.pages) || 0, pdf_file: files.pdf_file || "", cover_image: files.cover_image || "",
    badge: b.badge || "", is_bundle: b.is_bundle ? 1 : 0, bundle_items: JSON.stringify(items),
    active: b.active ? 1 : 0, sort: Number(b.sort) || 0,
  });
  res.redirect("/admin/products");
});

router.post("/products/:id/toggle", requireAdmin, express.urlencoded({ extended: false }), (req, res) => {
  db.prepare("UPDATE products SET active = 1 - active WHERE id = ?").run(req.params.id);
  res.redirect("/admin/products");
});

router.post("/products/:id/delete", requireAdmin, express.urlencoded({ extended: false }), (req, res) => {
  const p = getProductById(req.params.id);
  if (p) {
    // remove uploaded files (basename-guarded against path traversal)
    if (p.pdf_file) {
      const f = path.join(DATA, "files", path.basename(p.pdf_file));
      if (fs.existsSync(f)) fs.unlinkSync(f);
    }
    if (p.cover_image) {
      const f = path.join(__dirname, "..", "public", "img", "products", path.basename(p.cover_image));
      if (fs.existsSync(f)) fs.unlinkSync(f);
    }
    db.prepare("DELETE FROM products WHERE id = ?").run(p.id);
  }
  res.redirect("/admin/products");
});

// ---------------- orders ----------------
router.get("/orders", requireAdmin, (req, res) => {
  const os = db.prepare(`SELECT o.*, p.name pname FROM orders o LEFT JOIN products p ON p.id=o.product_id
    ORDER BY o.id DESC LIMIT 100`).all();
  const rows = os.map((o) =>
    `<tr><td>#${o.id}</td><td>${o.created_at.slice(0, 16)}</td><td>${esc(o.email) || "—"}</td>
     <td>${esc(o.name) || "—"}</td><td>${esc(o.pname) || "—"}</td><td>${money(o.amount_minor)}</td>
     <td><span class="pill ${o.status}">${o.status}</span></td></tr>`).join("");
  res.send(adminPage("Orders", `<h1>Orders</h1>
<table class="tbl"><tr><th>Order</th><th>Date</th><th>Email</th><th>Name</th><th>Product</th><th>Amount</th><th>Status</th></tr>
${rows || '<tr><td colspan="7">No orders yet.</td></tr>'}</table>`));
});

// ---------------- settings ----------------
const SETTING_FIELDS = [
  ["payoneer_enabled", "Payoneer Checkout enabled (1 = yes)", "0"],
  ["n8n_webhook_url", "n8n sale webhook URL", ""],
  ["store_email", "Store contact email", "hello@littlelearners.site"],
];
// Payoneer secrets are NEVER stored in the DB - they come from environment
// variables only. The admin UI shows whether each one is set (never the value).
const PAYONEER_ENV_VARS = [
  ["PAYONEER_MERCHANT_ID", "Merchant code (Checkout dashboard)"],
  ["PAYONEER_API_KEY", "API token (Checkout dashboard)"],
  ["PAYONEER_WEBHOOK_SECRET", "Webhook shared secret (generate your own long random string)"],
  ["PAYONEER_API_BASE_URL", "API base URL (Checkout dashboard; sandbox vs live)"],
];
router.get("/settings", requireAdmin, (req, res) => {
  const fields = SETTING_FIELDS.map(([k, label]) =>
    `<label>${label}<input name="${k}" value="${getSetting(k).replace(/"/g, "&quot;")}" ${k === "payoneer_enabled" ? 'placeholder="0 or 1"' : ""}></label>`).join("");
  const envRows = PAYONEER_ENV_VARS.map(([k, label]) => {
    const set = Boolean((process.env[k] || "").trim());
    return `<tr><td>${label}<br><code style="font-size:12px">${k}</code></td>
      <td>${set ? '<span class="pill paid">Set</span>' : '<span class="pill pending">Not set</span>'}</td></tr>`;
  }).join("");
  res.send(adminPage("Settings", `<h1>Settings</h1>
<form method="post" class="form">${fields}<button class="btn btn-buy">Save settings</button></form>
<h2 style="margin-top:32px">Payoneer secrets (environment variables)</h2>
<p class="muted">Secrets are read from environment variables only - they are never stored
in the database and never shown here. Set them in hPanel: Node.js app &rarr; your app &rarr;
<strong>Environment variables</strong>, then restart the app. Full steps: <code>PAYONEER_SETUP.md</code>.</p>
<table class="tbl"><tr><th>Variable</th><th>Status</th></tr>${envRows}</table>`));
});
router.post("/settings", requireAdmin, express.urlencoded({ extended: false }), (req, res) => {
  for (const [k] of SETTING_FIELDS) setSetting(k, req.body[k] ?? "");
  res.redirect("/admin/settings");
});

module.exports = router;
