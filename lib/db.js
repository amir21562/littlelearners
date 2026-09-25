// SQLite store (node:sqlite, no native deps) — products, orders, admins, settings
const { DatabaseSync } = require("node:sqlite");
const path = require("path");
const fs = require("fs");

const DATA = path.join(__dirname, "..", "data");
fs.mkdirSync(DATA, { recursive: true });
fs.mkdirSync(path.join(DATA, "files"), { recursive: true });

const db = new DatabaseSync(path.join(DATA, "store.db"));

db.exec(`
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT DEFAULT '',
  description TEXT DEFAULT '',
  price_minor INTEGER NOT NULL,
  compare_price_minor INTEGER DEFAULT 0,
  pages INTEGER DEFAULT 0,
  pdf_file TEXT DEFAULT '',
  cover_image TEXT DEFAULT '',
  sample_images TEXT DEFAULT '[]',
  badge TEXT DEFAULT '',
  is_bundle INTEGER DEFAULT 0,
  bundle_items TEXT DEFAULT '[]',
  active INTEGER DEFAULT 1,
  sort INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,
  token TEXT UNIQUE NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  email TEXT DEFAULT '',
  name TEXT DEFAULT '',
  product_id INTEGER,
  amount_minor INTEGER DEFAULT 0,
  currency TEXT DEFAULT 'GBP',
  status TEXT DEFAULT 'pending',
  payoneer_payment_id TEXT DEFAULT '',
  FOREIGN KEY(product_id) REFERENCES products(id)
);
CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  pass_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT DEFAULT ''
);
`);

function getSetting(key, fallback = "") {
  const row = db.prepare("SELECT value FROM settings WHERE key = ?").get(key);
  return row ? row.value : fallback;
}
// One-off migrations for schema drift
try { db.exec("ALTER TABLE orders ADD COLUMN payoneer_notification_id TEXT DEFAULT ''"); }
catch (e) { /* column already exists */ }
// Payoneer secrets moved to environment variables (see PAYONEER_SETUP.md):
// drop any legacy plaintext copies from the settings table.
const legacy = db.prepare(
  "SELECT key FROM settings WHERE key IN ('payoneer_merchant_id','payoneer_api_key','payoneer_webhook_secret') AND value <> ''"
).all();
if (legacy.length) {
  db.prepare("DELETE FROM settings WHERE key IN ('payoneer_merchant_id','payoneer_api_key','payoneer_webhook_secret')").run();
  console.log("Removed legacy plaintext Payoneer secrets from settings (" +
    legacy.map((r) => r.key).join(", ") + ") - set them as env vars instead.");
}
function setSetting(key, value) {
  db.prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value")
    .run(key, String(value));
}
function getProductBySlug(slug) {
  return db.prepare("SELECT * FROM products WHERE slug = ? AND active = 1").get(slug);
}
function getProductById(id) {
  return db.prepare("SELECT * FROM products WHERE id = ?").get(id);
}
function listProducts(activeOnly = true) {
  return db.prepare(`SELECT * FROM products ${activeOnly ? "WHERE active = 1" : ""} ORDER BY sort, id`).all();
}
// Files included in an order (bundle expands to its items)
function orderFiles(order) {
  const p = getProductById(order.product_id);
  if (!p) return [];
  if (p.is_bundle) {
    const ids = JSON.parse(p.bundle_items || "[]");
    return ids.map(getProductById).filter(Boolean).map((x) => ({ name: x.name, file: x.pdf_file }));
  }
  return [{ name: p.name, file: p.pdf_file }];
}

module.exports = { db, DATA, getSetting, setSetting, getProductBySlug, getProductById, listProducts, orderFiles };
