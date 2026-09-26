// Shared HTML templates — customer storefront + admin panel
const { META, SUBJECTS, AGE_GROUPS } = require("./product-meta");
const { PILLARS } = require("./guides");

const money = (minor) => "£" + (Number(minor) / 100).toFixed(2);

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function siteHead({ title, description, canonical, jsonld, robots = "", extra = "" }) {
  return `<!DOCTYPE html><html lang="en-GB"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
${description ? `<meta name="description" content="${esc(description)}">` : ""}
${canonical ? `<link rel="canonical" href="${canonical}">` : ""}
${robots ? `<meta name="robots" content="${esc(robots)}">` : ""}
<meta property="og:title" content="${esc(title)}">
${description ? `<meta property="og:description" content="${esc(description)}">` : ""}
<link rel="icon" href="/img/logo.webp">
<link rel="stylesheet" href="/css/style.css">
${jsonld ? `<script type="application/ld+json">${jsonld}</script>` : ""}${extra}
</head>`;
}

function siteHeader() {
  return `<header class="site"><div class="wrap">
<a class="brand" href="/"><img src="/img/logo.webp" alt="LittleLearners logo">LittleLearners</a>
<nav class="main"><a href="/shop">Shop</a><a href="/guides">Guides</a><a href="/product/ultimate-bundle">Bundle</a><a href="/#how">How it works</a><a href="/#faq">FAQ</a><a href="/cart">Cart</a></nav>
</div></header>`;
}

// Launch-offer announcement bar (discount % computed from real prices by caller)
function announcementBar(maxDiscPct) {
  return `<div class="announce"><div class="wrap">
🎉 <strong>Launch offer</strong> — up to ${maxDiscPct}% off every pack · Buy once, yours forever · No subscription
</div></div>`;
}

function trustStrip(items) {
  return `<div class="truststrip">${items.map((t) => `<span>${t}</span>`).join("")}</div>`;
}

// Etsy-style sale price: green sale price + strikethrough original
function priceBlock(p, big = false) {
  const cls = big ? "pprice big" : "pprice";
  const onSale = p.compare_price_minor && p.compare_price_minor > p.price_minor;
  return `<div class="${cls}">
${onSale
  ? `<strong class="sale">${money(p.price_minor)}</strong><s>${money(p.compare_price_minor)}</s>`
  : `<strong>${money(p.price_minor)}</strong>`}
</div>`;
}

function metaLine(slug, p) {
  const m = META[slug] || {};
  return `${p.pages || m.pages || 0} pages · Ages ${m.ages || "3–6"} · ${m.subject || ""}`;
}

function productCard(p) {
  const imgs = JSON.parse(p.sample_images || "[]");
  const img = p.cover_image || imgs[0] || "/img/bundle.webp";
  const m = META[p.slug] || {};
  const subject = m.subject || "";
  const ageGroups = (m.ageGroups || []).join(" ");
  return `<a class="pcard" href="/product/${p.slug}" data-subject="${esc(subject)}" data-age="${esc(ageGroups)}" data-bundle="${p.is_bundle ? 1 : 0}">
${p.badge ? `<span class="pbadge">${esc(p.badge)}</span>` : ""}
<img src="${img}" alt="${esc(p.name)}" loading="lazy">
<h3>${esc(p.name)}</h3>
<p class="pmeta-line">${esc(metaLine(p.slug, p))}</p>
${priceBlock(p)}
</a>`;
}

// Computed bundle savings vs buying every single pack at its current price
function bundleInfo(products) {
  const singles = products.filter((p) => !p.is_bundle && p.active !== 0);
  const bundle = products.find((p) => p.is_bundle);
  if (!bundle) return null;
  const singlesTotal = singles.reduce((s, p) => s + p.price_minor, 0);
  const savings = singlesTotal - bundle.price_minor;
  return { bundle, singles, singlesTotal, savings };
}

function faqBlock(items) {
  return `<div class="faq">${items.map(([q, a]) =>
    `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
}

function metaChips(p) {
  const m = META[p.slug] || {};
  const chips = [
    `📄 ${p.pages || m.pages || 0} pages · A4 PDF`,
    `👶 Ages ${m.ages || "3–6"}`,
    `📚 ${m.subject || "Printable pack"}`,
  ];
  return `<div class="mchips">${chips.map((c) => `<span class="mchip">${c}</span>`).join("")}</div>`;
}

// Share buttons: X, Facebook, Pinterest, WhatsApp, Email
function shareButtons(pageUrl, title) {
  const u = encodeURIComponent(pageUrl);
  const t = encodeURIComponent(title);
  const links = [
    ["X", `https://twitter.com/intent/tweet?text=${t}&url=${u}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ["Pinterest", `https://pinterest.com/pin/create/button/?url=${u}&description=${t}`],
    ["WhatsApp", `https://wa.me/?text=${t}%20${u}`],
    ["Email", `mailto:?subject=${t}&body=${u}`],
  ];
  return `<div class="share"><span class="share-label">Share this pack:</span>
${links.map(([n, href]) => `<a class="sharebtn" href="${href}" target="_blank" rel="noopener">${n}</a>`).join("")}</div>`;
}

function seoFooter(products) {
  const packs = products.filter((p) => !p.is_bundle);
  const packLinks = packs
    .map((p) => `<li><a href="/product/${p.slug}">${esc(p.name)}</a></li>`).join("");
  const subjectLinks = SUBJECTS
    .map((s) => `<li><a href="/shop?subject=${encodeURIComponent(s)}">${esc(s)} printables</a></li>`).join("");
  const guideLinks = PILLARS
    .map((g) => `<li><a href="/guides#${g.slug}">${esc(g.title)}</a></li>`).join("");
  return `<footer class="site"><div class="wrap fcols">
<div class="fcol fbrand"><strong>LittleLearners</strong>
<p>Printable worksheets for ages 3–6, aligned with the UK EYFS &amp; KS1 curriculum. Buy once, print forever — no subscription, ever.</p>
<p class="fcontact">Contact: <a href="mailto:hello@littlelearners.site">hello@littlelearners.site</a></p></div>
<div class="fcol"><strong>Printable packs</strong><ul>${packLinks}
<li><a href="/product/ultimate-bundle">Ultimate Early Learners Bundle</a></li></ul></div>
<div class="fcol"><strong>Parent guides</strong><ul><li><a href="/guides">All guides</a></li>${guideLinks}</ul></div>
<div class="fcol"><strong>Shop by subject</strong><ul>${subjectLinks}</ul></div>
<div class="fcol"><strong>Help &amp; legal</strong><ul>
<li><a href="/shop">All packs</a></li>
<li><a href="/#how">How it works</a></li>
<li><a href="/#faq">FAQ</a></li>
<li><a href="/contact">Contact us</a></li>
<li><a href="/about">About us</a></li>
<li><a href="/resources">Parent resources</a></li>
<li><a href="/privacy">Privacy</a></li>
<li><a href="/terms">Terms</a></li>
<li><a href="/refunds">Refunds</a></li>
<li><a href="/licence">Licence</a></li>
<li><a href="/littlelearners-free-sample.pdf">Free sample (PDF)</a></li>
</ul></div>
</div>
<div class="wrap fbottom"><span>© 2026 LittleLearners. Personal &amp; classroom printing licence included.</span></div>
</footer>`;
}

// ---------------- admin ----------------
function adminHead(title) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} · LittleLearners Admin</title>
<link rel="stylesheet" href="/css/style.css"></head>`;
}
function adminNav() {
  return `<header class="adminbar"><div class="wrap">
<a class="brand" href="/admin"><img src="/img/logo.webp" alt="">Admin</a>
<nav class="main">
<a href="/admin">Dashboard</a><a href="/admin/products">Products</a>
<a href="/admin/orders">Orders</a><a href="/admin/settings">Settings</a>
<a href="/" target="_blank">View store</a>
<form method="post" action="/admin/logout" style="display:inline"><button class="linkbtn">Log out</button></form>
</nav></div></header>`;
}
function adminPage(title, body) {
  return `${adminHead(title)}<body>${adminNav()}<div class="wrap admin">${body}</div></body></html>`;
}

module.exports = {
  money, esc, siteHead, siteHeader, siteFooter: seoFooter, announcementBar, trustStrip,
  productCard, priceBlock, faqBlock, metaChips, shareButtons, bundleInfo, metaLine,
  adminPage, adminHead,
};
