// Storefront page builders — used by routes/shop.js AND render-previews.js.
// Keep all copy honest: no fake ratings, reviews, sales counts, countdowns.
const {
  money, esc, siteHead, siteHeader, siteFooter, announcementBar, trustStrip,
  productCard, priceBlock, faqBlock, metaChips, shareButtons, bundleInfo,
} = require("./views");
const { META, SUBJECTS, AGE_GROUPS } = require("./product-meta");
const { PILLARS, GUIDES, pillarBySlug, guideBySlug, guidesForPillar, relatedGuidesForProduct } = require("./guides");

// "Parents also read" — two-way internal linking between products and guides.
// Only published (non-draft) guides are linked. Uses the shared guideCard.
function parentsAlsoRead(p) {
  const gs = relatedGuidesForProduct(p.slug).filter((g) => !g.draft);
  if (!gs.length) return "";
  return `<section class="psec"><h2>Parents also read</h2><div class="grid3">${gs.map(guideCard).join("")}</div></section>`;
}

const SITE = "https://littlelearners.site";
const SUPPORT_EMAIL = "hello@littlelearners.site";

function maxDiscountPct(products) {
  let best = 0;
  for (const p of products) {
    if (p.compare_price_minor > p.price_minor && p.compare_price_minor > 0) {
      best = Math.max(best, Math.round(((p.compare_price_minor - p.price_minor) / p.compare_price_minor) * 100));
    }
  }
  return best;
}

const ANTI_SUB = "Buy once. Yours forever. No subscription, no renewals.";

function headFoot({ title, description, canonical, jsonld, robots = "" }) {
  return {
    head: (body) =>
      siteHead({ title, description, canonical, jsonld, robots }) + `<body>${body}</body></html>`,
  };
}

// ---------------- home ----------------
function buildHome(products, query = {}) {
  const bi = bundleInfo(products);
  const singles = products.filter((p) => !p.is_bundle).slice(0, 8);
  const collage = [...singles].slice(0, 6);
  const maxDisc = maxDiscountPct(products);
  const saveLine = bi
    ? `All ${bi.singles.length} packs · ${bi.bundle.pages} pages · save ${money(bi.savings)} vs buying separately`
    : "";

  const body = `
${siteHeader()}
${announcementBar(maxDisc)}
<div class="wrap">
<div class="hero"><div>
<p class="eyebrow">UK EYFS &amp; KS1 printables · Ages 3–6</p>
<h1>Printable worksheets kids <span class="hl">actually enjoy</span> — made for the UK</h1>
<p class="lead">${ANTI_SUB} 100 ready-to-print pages: alphabet tracing, numbers, Phase 2 phonics, tricky words, early maths and more.</p>
<div class="cta-row">
<a class="btn btn-buy" href="/shop">Shop the collection</a>
<a class="btn btn-ghost" href="/littlelearners-free-sample.pdf">Get a free sample</a>
</div>
${trustStrip(["✓ Instant download after payment", "✓ Print-ready A4 PDFs", "✓ UK EYFS &amp; KS1 aligned", "✓ Buy once — no subscription"])}
</div>
<div class="hero-collage" aria-hidden="true">
${collage.map((p, i) => `<img class="hc${i}" src="${p.cover_image || "/img/bundle.webp"}" alt="">`).join("")}
</div></div>

<section><h2>Printable packs</h2><p class="sub">Eight packs · 100 pages · every one on launch sale. ${ANTI_SUB}</p>
<div class="grid4">${singles.map(productCard).join("")}</div></section>

${bi ? `<div class="bundle-banner"><div>
<p class="eyebrow">The complete collection</p>
<h2>${esc(bi.bundle.name)}</h2>
<p class="sub" style="text-align:left;margin:0 0 18px">${esc(saveLine)}. <strong>${money(bi.bundle.price_minor)}</strong>
${bi.bundle.compare_price_minor ? `<s>${money(bi.bundle.compare_price_minor)}</s>` : ""}</p>
<div class="cta-row"><a class="btn btn-buy" href="/product/ultimate-bundle">Get the bundle</a>
<a class="btn btn-ghost" href="/shop">Browse single packs</a></div>
</div><img src="${bi.bundle.cover_image || "/img/bundle.webp"}" alt="${esc(bi.bundle.name)}"></div>` : ""}

<section id="how"><h2>How it works</h2><p class="sub">From checkout to crayons in under two minutes.</p>
<div class="steps">
<div class="step"><h3>Pick a pack</h3><p>Choose single packs or the money-saving Ultimate Bundle. Pay once — the files are yours forever.</p></div>
<div class="step"><h3>Download instantly</h3><p>Secure checkout, then download links right away. No waiting, no shipping.</p></div>
<div class="step"><h3>Print &amp; learn</h3><p>Print at home on A4, as many times as you like. Laminate favourites for reuse.</p></div>
</div></section>

<section id="why"><h2>Why LittleLearners</h2><p class="sub">Built by a parent, for parents — without the subscription trap.</p>
<div class="grid3 why-grid">
<div class="card"><div class="why-icon">💷</div><h3>No subscription, ever</h3><p>Pay once and the files are yours forever. Nothing renews, nothing charges you again.</p></div>
<div class="card"><div class="why-icon">🇬🇧</div><h3>Made for the UK</h3><p>UK spellings, UK handwriting lines and the Letters &amp; Sounds phonics sequence taught in UK schools.</p></div>
<div class="card"><div class="why-icon">🖨️</div><h3>Print as many as you like</h3><p>Every pack includes unlimited personal and classroom printing — siblings, classes, all covered.</p></div>
<div class="card"><div class="why-icon">👶</div><h3>Right for ages 3–6</h3><p>Big traceable letters, bold outlines and gentle progression from EYFS into KS1.</p></div>
<div class="card"><div class="why-icon">🎒</div><h3>Classroom-friendly</h3><p>Print a full class set from one purchase — no extra seats or licences needed.</p></div>
<div class="card"><div class="why-icon">⚡</div><h3>Instant, always</h3><p>Download links seconds after checkout, with a backup copy in your email.</p></div>
</div></section>

<div class="sample-strip"><h2 style="margin-bottom:8px">Not sure yet?</h2>
<p class="sub">Download 7 pages free — no email needed.</p>
<a class="btn btn-ghost" href="/littlelearners-free-sample.pdf">Download free sample (PDF)</a></div>

<section id="guides-home"><h2>Free parent guides</h2>
<p class="sub">Plain-English explainers on how UK schools teach — phonics phases, number formation, school readiness. No email needed, no fluff.</p>
<div class="grid4">${["phase-2-sounds-in-order", "what-is-phonics-phase-2", "number-formation-1-to-20", "reception-readiness-checklist-uk"]
  .map((s) => guideBySlug(s)).filter(Boolean).map(guideCard).join("")}</div>
<p style="text-align:center;margin-top:18px"><a class="btn btn-ghost" href="/guides">Browse all guides</a></p></section>

<section id="faq"><h2>Frequently asked questions</h2>
<p class="sub">Straight answers, no fine print.</p>
${faqBlock([
  ["What's included in each pack?", "A print-ready A4 PDF — the page count is shown on every pack. All sheets are designed for ages 3–6 with UK handwriting lines, UK spellings and the Letters &amp; Sounds phonics sequence used in UK schools."],
  ["How do I get my files?", "Instantly: download links appear right after secure checkout, and a backup link is emailed to you. No waiting, no shipping."],
  ["How should I print them?", "Any home printer on A4 paper works. Print favourites as many times as you like — laminate them and use dry-wipe pens for reuse."],
  ["What can I use them for?", "Unlimited printing for your own children or your classroom. Please don't resell or redistribute the files."],
  ["Can I get a refund?", "Because these are instant digital downloads we can't take files back — but if anything is corrupted or not as described, email us within 14 days and we'll fix it or refund you."],
  ["Is this a subscription?", "No — never. " + ANTI_SUB],
])}</section>
</div>${siteFooter(products)}`;

  const jsonld = JSON.stringify([
    { "@context": "https://schema.org", "@type": "WebSite", name: "LittleLearners", url: SITE + "/" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      ["What's included in each pack?", "A print-ready A4 PDF for ages 3-6, UK curriculum aligned."],
      ["How do I get my files?", "Instant download links after secure checkout, plus an emailed backup."],
      ["Is this a subscription?", "No. Pay once, files are yours forever."],
    ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ]);
  return headFoot({
    title: "Printable Worksheets for Kids UK | LittleLearners",
    description: "Printable worksheets for ages 3–6, aligned with the UK EYFS & KS1 curriculum. Phonics, maths, tracing & more — buy once, no subscription.",
    canonical: SITE + "/", jsonld,
  }).head(body);
}

// ---------------- shop ----------------
function buildShop(products, query = {}) {
  const chips = [
    { label: "All", subject: "", age: "", bundle: "" },
    { label: "Bundle & save", subject: "", age: "", bundle: "1" },
    ...SUBJECTS.map((s) => ({ label: s, subject: s, age: "", bundle: "" })),
    ...AGE_GROUPS.map((a) => ({ label: `Ages ${a}`, subject: "", age: a, bundle: "" })),
  ];
  const normDash = (s) => String(s || "").replace(/[–—]/g, "-");
  const qSubject = query.subject || "", qAge = normDash(query.age), qBundle = query.bundle || "";
  const chipsHtml = chips.map((c) => {
    const active = c.subject === qSubject && normDash(c.age) === qAge && c.bundle === qBundle;
    return `<button class="fchip${active ? " active" : ""}" data-subject="${esc(c.subject)}" data-age="${esc(c.age)}" data-bundle="${esc(c.bundle)}" data-label="${esc(c.label)}">${esc(c.label)}</button>`;
  }).join("");

  const body = `${siteHeader()}
${announcementBar(maxDiscountPct(products))}
<div class="wrap">
<section><h1>Shop printable packs</h1>
<p class="sub">${ANTI_SUB} Every pack is a print-ready A4 PDF, aligned with the UK curriculum.</p>
<div class="fchips" id="fchips">${chipsHtml}</div>
<p class="muted" id="fcount" style="text-align:center;margin-bottom:14px"></p>
<div class="grid4" id="pgrid">${products.map(productCard).join("")}</div>
</section>
</div>${siteFooter(products)}
<script>
(function(){
  var grid = document.getElementById('pgrid'),
      cards = Array.prototype.slice.call(grid.querySelectorAll('.pcard')),
      chips = Array.prototype.slice.call(document.querySelectorAll('.fchip')),
      count = document.getElementById('fcount');
  function apply(subject, age, bundle){
    var n = 0;
    cards.forEach(function(c){
      var show = true;
      if (bundle === '1') show = c.dataset.bundle === '1';
      else {
        if (subject && c.dataset.subject !== subject) show = false;
        if (age && c.dataset.age.split(' ').indexOf(age) < 0) show = false;
      }
      c.style.display = show ? '' : 'none';
      if (show) n++;
    });
    count.textContent = n + (n === 1 ? ' pack' : ' packs');
  }
  chips.forEach(function(ch){
    ch.addEventListener('click', function(){
      chips.forEach(function(x){ x.classList.remove('active'); });
      ch.classList.add('active');
      apply(ch.dataset.subject, ch.dataset.age, ch.dataset.bundle);
      var url = new URL(location.href);
      url.search = '';
      if (ch.dataset.subject) url.searchParams.set('subject', ch.dataset.subject);
      if (ch.dataset.age) url.searchParams.set('age', ch.dataset.age);
      if (ch.dataset.bundle) url.searchParams.set('bundle', ch.dataset.bundle);
      history.replaceState(null, '', url);
    });
  });
  var init = document.querySelector('.fchip.active');
  apply(init ? init.dataset.subject : '', init ? init.dataset.age : '', init ? init.dataset.bundle : '');
})();
</script>`;

  return headFoot({
    title: "Shop Printable Packs | LittleLearners",
    description: "Browse printable worksheet packs for ages 3–6 — phonics, maths, tracing, colouring and the Ultimate Bundle. Buy once, no subscription.",
    canonical: SITE + "/shop",
  }).head(body);
}

// ---------------- product detail ----------------
function buildProduct(p, allProducts, query = {}) {
  const m = META[p.slug] || {};
  const allImgs = JSON.parse(p.sample_images || "[]");
  const imgs = allImgs.filter((s) => s !== p.cover_image); // cover is shown big already — only true sample pages here
  const others = allProducts.filter((x) => x.id !== p.id && !x.is_bundle).slice(0, 4);
  const bi = bundleInfo(allProducts);
  const isBundle = !!p.is_bundle;
  const pageUrl = `${SITE}/product/${p.slug}`;
  const descHtml = (p.description || "").split("\n")
    .map((t) => `<p class="ovp">${esc(t)}</p>`).join("");
  const inside = (m.whats_inside || []).map((b) => `<li>${esc(b)}</li>`).join("");
  const included = isBundle && bi
    ? bi.singles.map((s) => `<li><a href="/product/${s.slug}">${esc(s.name)}</a> <span class="muted">· ${s.pages} pages</span></li>`).join("")
    : "";

  const body = `${siteHeader()}
${announcementBar(maxDiscountPct(allProducts))}
<div class="wrap">
<nav class="crumbs"><a href="/">Home</a> / <a href="/shop">Shop</a> / <span>${esc(p.name)}</span></nav>

<div class="product-layout">
<div class="product-main">
${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
<img class="pcover" src="${p.cover_image || allImgs[0] || "/img/bundle.webp"}" alt="${esc(p.name)}">
<h1>${esc(p.name)}</h1>
<p class="lead">${esc(p.tagline || "")}</p>
${metaChips(p)}

<nav class="secnav">
<a href="#overview">Overview</a><a href="#inside">What's inside</a><a href="#howto">How to use</a><a href="#details">Details</a><a href="#related">You may also like</a>
</nav>

<section id="overview" class="psec"><h2>Overview</h2>${descHtml}</section>

${m.use_case ? `<section class="psec usecase"><h2>Is this the right pack for your child?</h2>
<p class="ovp">${esc(m.use_case)}</p>
${m.instead ? `<p class="ovp instead-line">Torn between packs? <a href="/product/${m.instead}">${esc(m.instead_label)}</a>.</p>` : ""}</section>` : ""}

<section id="inside" class="psec"><h2>What's inside</h2>
<ul class="inside-list">${inside}</ul>
${included ? `<h3 style="margin-top:22px">Included packs</h3><ul class="inside-list">${included}</ul>` : ""}
</section>

${m.how_to_use ? `<section id="howto" class="psec"><h2>How to use this pack at home</h2>
<ol class="howto-list">${m.how_to_use.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>` : ""}

${imgs.length ? `<section class="psec"><h2>Sample pages</h2><p class="sub" style="text-align:left">Actual pages from this pack.</p>
<div class="grid4">${imgs.map((s) => `<div class="card"><img src="${s}" alt="${esc(p.name)} sample page" loading="lazy"></div>`).join("")}</div></section>` : ""}

<section id="details" class="psec"><h2>Details</h2>
<div class="faq">
<details open><summary>File details</summary><p>${p.pages || m.pages || 0}-page print-ready A4 PDF. Prints best on regular A4 paper from any home printer.</p></details>
<details><summary>Licence</summary><p>Unlimited personal and classroom printing is included. Please don't resell or redistribute the files.</p></details>
<details><summary>Download &amp; printing</summary><p>Download links appear right after secure checkout, and a backup link is emailed to you. Print at home or at a print shop — laminate favourites for reuse with dry-wipe pens.</p></details>
</div></section>

${!isBundle && bi ? `<div class="upsell"><div>
<p class="eyebrow">Complete the collection</p>
<h3>All 8 packs for ${money(bi.bundle.price_minor)} — save ${money(bi.savings)}</h3>
<p class="muted">${bi.bundle.pages} pages total. ${ANTI_SUB}</p>
<a class="btn btn-buy" href="/product/ultimate-bundle">Get the bundle</a>
</div><img src="${bi.bundle.cover_image || "/img/bundle.webp"}" alt="${esc(bi.bundle.name)}"></div>` : ""}

${shareButtons(pageUrl, p.name)}

<section id="related" class="psec"><h2>You may also like</h2>
<div class="grid4">${others.map(productCard).join("")}</div></section>
${parentsAlsoRead(p)}
</div>

<aside class="buy-panel">
${p.badge ? `<span class="pbadge" style="position:static">${esc(p.badge)}</span>` : ""}
${priceBlock(p, true)}
<p class="ppages-line">${p.pages || m.pages || 0} pages · A4 PDF · Ages ${m.ages || "3–6"}</p>
<button class="btn btn-buy buy-full" id="buyBtn">Buy now — instant download</button>
<p id="buyNote" class="muted" style="margin-top:10px"></p>
<ul class="buy-trust">
<li>✓ Instant download after payment</li>
<li>✓ Secure checkout</li>
<li>✓ No subscription — pay once</li>
<li>✓ Print as many times as you like</li>
</ul>
</aside>
</div>
</div>${siteFooter(allProducts)}
<script>
document.getElementById('buyBtn').addEventListener('click', async () => {
  const btn = document.getElementById('buyBtn'), note = document.getElementById('buyNote');
  btn.disabled = true; btn.textContent = 'Opening secure checkout…';
  try {
    const r = await fetch('/api/create-checkout', { method: 'POST',
      headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: ${JSON.stringify(p.slug)} }) });
    const j = await r.json();
    if (j.checkoutUrl) { location.href = j.checkoutUrl; return; }
    note.textContent = 'Online checkout is being connected — grab the free sample meanwhile!';
  } catch (e) { note.textContent = 'Something went wrong — please try again in a moment.'; }
  btn.disabled = false; btn.textContent = 'Buy now — instant download';
});
</script>`;

  // safeJson + breadcrumbJson are defined below (hoisted function/const safe at call time)
  const jsonld = safeJson([
    {
      "@context": "https://schema.org", "@type": "Product", name: p.name,
      image: SITE + (p.cover_image || "/img/bundle.webp"), description: p.tagline,
      brand: { "@type": "Brand", name: "LittleLearners" },
      offers: { "@type": "Offer", url: pageUrl, priceCurrency: "GBP",
        price: (p.price_minor / 100).toFixed(2), availability: "https://schema.org/InStock" },
    },
    breadcrumbJsonLd([
      { name: "Home", url: SITE + "/" },
      { name: "Shop", url: SITE + "/shop" },
      { name: p.name, url: pageUrl },
    ]),
  ]);
  return headFoot({
    title: `${p.name} — ${money(p.price_minor)} | LittleLearners`,
    description: `${p.name}: ${p.pages}-page printable pack for ages ${m.ages || "3–6"}, UK curriculum aligned. Instant download — ${money(p.price_minor)}. No subscription.`,
    canonical: pageUrl, jsonld,
  }).head(body);
}

// ---------------- checkout pages ----------------
function buildSuccess(order, products) {
  let msg = "Your payment was successful. Your download links are on their way to your email inbox.";
  let extra = "";
  if (order && order.status === "paid") {
    extra = `<p style="margin-top:18px"><a class="btn btn-buy" href="/order/${order.token}">Download your files now</a></p>`;
  } else if (order) {
    msg = "Thanks! We're confirming your payment — your download link will arrive by email within a few minutes.";
  }
  const body = `${siteHeader()}<div class="wrap" style="text-align:center;padding:70px 20px">
<h1 style="color:var(--navy);margin-bottom:14px">Thank you! 🎉</h1>
<p style="color:var(--muted)">${esc(msg)}</p>${extra}</div>${siteFooter(products)}`;
  return headFoot({ title: "Order confirmed | LittleLearners", robots: "noindex, nofollow" }).head(body);
}

function buildCancel(products) {
  const body = `${siteHeader()}<div class="wrap" style="text-align:center;padding:70px 20px">
<h1 style="color:var(--navy);margin-bottom:14px">No problem</h1>
<p style="color:var(--muted)">Your checkout was cancelled and you were not charged.</p>
<p style="margin-top:26px"><a class="btn btn-ghost" href="/shop">Back to the shop</a></p></div>${siteFooter(products)}`;
  return headFoot({ title: "Checkout cancelled | LittleLearners" }).head(body);
}

function buildOrderDownloads(order, files, products) {
  const rows = files.map((f, i) =>
    `<li><strong>${esc(f.name)}</strong><br><a class="btn btn-ghost" style="margin-top:8px" href="/download/${order.token}/${i}">Download PDF</a></li>`).join("");
  const body = `${siteHeader()}<div class="wrap" style="padding:50px 20px;max-width:640px">
<h1 style="color:var(--navy)">Your files are ready 🎉</h1>
<p style="color:var(--muted)">Order #${order.id} — keep this page or your email safe; you can re-download any time.</p>
<ul class="includes" style="list-style:none">${rows}</ul></div>${siteFooter(products)}`;
  return headFoot({ title: "Your downloads | LittleLearners" }).head(body);
}

// safeJson: breakout-safe JSON for embedding in <script> blocks
const safeJson = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

// BreadcrumbList JSON-LD from [{name, url}] — breakout-safe via safeJson at call sites
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name,
      ...(it.url ? { item: it.url } : {}),
    })),
  };
}

// ---------------- guides ----------------
function guideCard(g) {
  const pil = pillarBySlug(g.pillar) || {};
  return `<a class="guide-card" href="/guides/${g.slug}">
${g.draft ? `<span class="draft-badge">DRAFT</span>` : ""}
<div class="gpillar">${pil.icon || ""} ${esc(pil.title || "")}</div>
<h3>${esc(g.title)}</h3><p>${esc(g.summary)}</p>
<p class="gmeta">${g.minutes} min read</p></a>`;
}

function buildGuides(products) {
  const pillarCards = PILLARS.map((pil) => {
    const gs = guidesForPillar(pil.slug);
    return `<div class="pillar-card" id="${pil.slug}">
<div class="pillar-icon">${pil.icon}</div>
<h3>${esc(pil.title)}</h3><p>${esc(pil.desc)}</p>
${gs.length
  ? `<ul class="pillar-guides">${gs.map((g) => `<li><a href="/guides/${g.slug}">${esc(g.title)}</a>${g.draft ? ' <span class="draft-badge sm">DRAFT</span>' : ""}</li>`).join("")}</ul>`
  : `<p class="muted">Guides coming soon — we're writing them now.</p>`}
</div>`;
  }).join("");

  const body = `${siteHeader()}
${announcementBar(maxDiscountPct(products))}
<div class="wrap">
<div class="guides-hero">
<p class="eyebrow">Parent guides · UK EYFS &amp; KS1</p>
<h1>Help your child learn — the way UK schools teach</h1>
<p class="lead">Straight answers to the questions parents actually ask: phonics phases, number formation, pencil grip, school readiness. Each guide covers one topic properly — no fluff, no keyword stuffing.</p>
</div>
<div class="pillar-grid">${pillarCards}</div>
<div class="sample-strip"><h2 style="margin-bottom:8px">Try before you buy</h2>
<p class="sub">Download 7 pages free — no email needed.</p>
<a class="btn btn-ghost" href="/littlelearners-free-sample.pdf">Download free sample (PDF)</a></div>
</div>${siteFooter(products)}`;
  return headFoot({
    title: "Parent Guides: Phonics, Early Maths & School Readiness | LittleLearners",
    description: "Free UK parent guides: Phase 2 phonics sounds, tricky words, number formation, pencil grip, scissor skills and Reception readiness checklists.",
    canonical: SITE + "/guides",
  }).head(body);
}

function articleCtaBox(p) {
  if (!p) return "";
  return `<div class="cta-box"><img src="${p.cover_image || "/img/bundle.webp"}" alt="${esc(p.name)}">
<div><p class="eyebrow">Practise this at home</p><h3>${esc(p.name)}</h3>
<p class="muted">${p.pages}-page printable pack · ${money(p.price_minor)} · ${ANTI_SUB}</p>
<a class="btn btn-buy" href="/product/${p.slug}">Get the pack</a></div></div>`;
}

function buildGuide(g, products) {
  const pil = pillarBySlug(g.pillar) || {};
  const pageUrl = `${SITE}/guides/${g.slug}`;
  const prod = (g.products || []).map((s) => products.find((p) => p.slug === s)).filter(Boolean);
  const related = GUIDES.filter((x) => x.slug !== g.slug && x.pillar === g.pillar)
    .concat(GUIDES.filter((x) => x.slug !== g.slug && x.pillar !== g.pillar)).slice(0, 3);

  const toc = g.sections.map((s, i) => `<li><a href="#s${i}">${esc(s.h)}</a></li>`).join("");
  const sections = g.sections.map((s, i) => {
    const cta = i === g.sections.length - 1 ? articleCtaBox(prod[0]) : ""; // one CTA, at the end
    return `<section class="psec" id="s${i}"><h2>${esc(s.h)}</h2>
${s.body.map((t) => `<p class="ovp">${esc(t)}</p>`).join("")}
${s.list ? `<ul class="inside-list">${s.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : ""}
${cta}</section>`;
  }).join("");

  const body = `${siteHeader()}
<div class="wrap article-wrap">
<nav class="crumbs"><a href="/">Home</a> / <a href="/guides">Guides</a> / <span>${esc(g.title)}</span></nav>
<article class="article">
${g.draft ? `<span class="draft-badge">DRAFT</span>` : ""}
<p class="eyebrow">${pil.icon || ""} ${esc(pil.title || "Guide")}</p>
<h1>${esc(g.title)}</h1>
<p class="gmeta byline">By the <a href="/about">LittleLearners team</a> · ${g.minutes} min read · Written for UK parents</p>
${g.draft ? `<div class="draft-note"><strong>This guide is a work in progress.</strong> The short answer below is complete and accurate; we're expanding the detail over the coming weeks.</div>` : ""}

<div class="answer-box"><p class="eyebrow">The short answer</p><p>${esc(g.answer)}</p></div>

<nav class="toc"><strong>On this page</strong><ul>${toc}</ul></nav>

${sections}

${shareButtons(pageUrl, g.title)}

<section class="psec"><h2>Parents also read</h2>
<div class="grid3">${related.map(guideCard).join("")}</div></section>

<section class="psec"><h2>Questions parents ask</h2>
${faqBlock(g.faqs)}</section>
</article>
</div>${siteFooter(products)}`;

  const jsonld = safeJson([
    {
      "@context": "https://schema.org", "@type": "Article",
      headline: g.title, description: g.summary, image: SITE + "/img/logo.webp",
      author: { "@type": "Organization", name: "LittleLearners", url: SITE + "/" },
      publisher: { "@type": "Organization", name: "LittleLearners" },
      datePublished: "2026-09-25", mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: g.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
    breadcrumbJsonLd([{ name: "Home", url: SITE + "/" }, { name: "Guides", url: SITE + "/guides" }, { name: g.title, url: pageUrl }]),
  ]);
  return headFoot({ title: `${g.title} | LittleLearners`, description: g.summary, canonical: pageUrl, jsonld, robots: g.draft ? "noindex, nofollow" : "" }).head(body);
}

// ---------------- legal ----------------
const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    updated: "25 September 2026",
    intro: "LittleLearners sells digital printable worksheets. This policy explains what personal data we collect, why, and your rights under UK data protection law.",
    sections: [
      ["What we collect", "When you buy a pack we collect your name and email address (to deliver your files and receipt), and your order details (what you bought, when, for how much). If you use our contact form, we collect whatever you write in it."],
      ["Payments", "Payments are processed by Payoneer. We never see or store your card number — that stays with the payment provider."],
      ["How we use it", "To deliver your downloads, send receipts and order updates, answer support messages, and keep the business accounts UK tax law requires. We do not send marketing emails and we do not sell your data."],
      ["Cookies", "The shop itself sets no tracking or advertising cookies. The admin area uses a single essential session cookie so we can stay logged in."],
      ["How long we keep it", "Order records are kept for six years to meet UK tax and accounting rules, then deleted. Support emails are kept for up to two years."],
      ["Your rights", "Under UK GDPR you can ask for a copy of your data, corrections, or deletion (where tax law allows). Email hello@littlelearners.site and we'll respond within 30 days."],
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "25 September 2026",
    intro: "These terms cover buying and using LittleLearners printable worksheets. By buying a pack, you agree to them.",
    sections: [
      ["What you're buying", "A digital download: a print-ready A4 PDF you can download instantly after payment. Nothing is posted. Prices are in pounds sterling (GBP) and there is no subscription — you pay once and the files are yours."],
      ["Delivery", "Download links appear immediately after successful checkout and a backup link is emailed to you. If a link doesn't work, email us and we'll sort it out."],
      ["Licence", "Every purchase includes our personal and classroom printing licence — print as many copies as you like for your own children or your class. Reselling, redistributing or uploading the files anywhere public is not allowed. See the full licence."],
      ["Refunds", "Because these are instant digital downloads, we can't take files back — but if anything is corrupted, incomplete or not as described, email us within 14 days and we'll fix it or refund you. See the refunds page."],
      ["Fair use", "Don't try to break the site, don't resell access to your download links, and don't use our content to mislead anyone. If you do, we may disable your download links."],
      ["Liability", "Our worksheets are learning aids, not a substitute for professional educational advice. To the extent the law allows, we're not liable for indirect losses from using them. Nothing here limits your statutory consumer rights."],
    ],
  },
  refunds: {
    title: "Refund Policy",
    updated: "25 September 2026",
    intro: "Digital downloads can't be returned like physical goods — but we still want you to be happy with every pack.",
    sections: [
      ["Our 14-day promise", "If a file is corrupted, incomplete, or simply not as described on its product page, email hello@littlelearners.site within 14 days of purchase with your order number. We'll fix the file or refund you in full — your choice."],
      ["Duplicate purchases", "Bought the same pack twice by accident, or bought a single pack and then the Ultimate Bundle? Email us within 14 days and we'll refund the duplicate."],
      ["What we can't refund", "Change of mind after successful download, or printing problems caused by your printer settings — though we'll always try to help you get a good print first."],
      ["How refunds are paid", "Refunds go back to the original payment method via Payoneer, usually within 5–10 working days."],
    ],
  },
  licence: {
    title: "Printing Licence",
    updated: "25 September 2026",
    intro: "Every LittleLearners purchase — single packs and the bundle — includes this licence. No tiers, no seat counts.",
    sections: [
      ["You may", "Print unlimited copies for your own children and family; print full class sets if you're a teacher, childminder or school; save backup copies of your PDFs; laminate pages for reuse."],
      ["You may not", "Resell or share the files themselves (printed or digital); upload them to websites, marketplaces, social media or file-sharing groups; email the PDFs to other families; remove or obscure our branding."],
      ["Printed pages", "Pages you print and hand out in your own classroom or home are fine — the licence travels with the printed sheet, not the file."],
      ["Copyright", "Copyright stays with LittleLearners. This licence doesn't transfer ownership of the artwork or content."],
    ],
  },
};

function buildLegal(kind, products) {
  const L = LEGAL[kind];
  if (!L) return null;
  const pageUrl = `${SITE}/${kind}`;
  const body = `${siteHeader()}
<div class="wrap legal">
<nav class="crumbs"><a href="/">Home</a> / <span>${esc(L.title)}</span></nav>
<h1>${esc(L.title)}</h1>
<p class="muted">Last updated: ${esc(L.updated)}</p>
<p class="lead">${esc(L.intro)}</p>
${L.sections.map(([h, t]) => `<h2>${esc(h)}</h2><p>${esc(t)}</p>`).join("")}
<p class="muted" style="margin-top:30px">Questions about this page? <a href="/contact">Contact us</a> — we reply within two working days.</p>
</div>${siteFooter(products)}`;
  const jsonld = safeJson(breadcrumbJsonLd([{ name: "Home", url: SITE + "/" }, { name: L.title, url: pageUrl }]));
  return headFoot({ title: `${L.title} | LittleLearners`, description: L.intro, canonical: pageUrl, jsonld }).head(body);
}

// ---------------- resources (curated partner page for outreach) ----------------
const RESOURCES = [
  { cat: "Understanding the curriculum", items: [
    ["GOV.UK — Early Years Foundation Stage (EYFS)", "The official framework every nursery and Reception class in England follows. If you want to know what “school readiness” actually means, start here.", "https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2"],
    ["BBC Bitesize — Early Years", "Free games and videos matched to the EYFS, made by the BBC.", "https://www.bbc.co.uk/bitesize/levels/z3g4d2p"],
  ]},
  { cat: "Phonics", items: [
    ["Twinkl — Free Phonics Resources", "The UK's biggest teacher-resource site; its free section includes Phase 2 sound mats and flashcards.", "https://www.twinkl.co.uk"],
    ["PhonicsPlay (free section)", "Interactive phonics games many UK schools use in class — good for ten minutes of tablet time that actually teaches.", "https://www.phonicsplay.co.uk"],
  ]},
  { cat: "Early maths", items: [
    ["NRICH Early Years (University of Cambridge)", "Free, research-backed maths activities for young children.", "https://nrich.maths.org/early-years"],
    ["White Rose Maths — 1-Minute Maths app", "A free app schools recommend for quick daily number practice.", "https://whiterosemaths.com"],
  ]},
  { cat: "Fine motor skills & writing", items: [
    ["NHS — Physical activity guidelines for under-5s", "Official guidance on the movement and play that builds writing muscles.", "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-children-under-five-years"],
  ]},
  { cat: "Parenting support", items: [
    ["Mumsnet — Primary Education Talk", "The UK's largest parenting community; honest threads on starting school and helping at home.", "https://www.mumsnet.com/talk/primary"],
    ["Netmums", "Articles and local parent meetups across the UK.", "https://www.netmums.com"],
  ]},
];

function buildResources(products) {
  const pageUrl = `${SITE}/resources`;
  const body = `${siteHeader()}
<div class="wrap legal">
<nav class="crumbs"><a href="/">Home</a> / <span>Resources</span></nav>
<h1>Helpful resources for UK parents of 3–6 year olds</h1>
<p class="lead">Learning doesn't have to mean subscriptions or screen time. These are the free and official resources we point parents to most — alongside our own printable packs.</p>
${RESOURCES.map((s) => `<h2>${esc(s.cat)}</h2><ul class="reslist">${s.items.map(([t, d, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener"><strong>${esc(t)}</strong></a><br><span class="muted">${esc(d)}</span></li>`).join("")}</ul>`).join("")}
<h2>Our guides &amp; free printables</h2>
<ul class="reslist">
<li><a href="/guides/phase-2-sounds-in-order"><strong>Phase 2 sounds in order</strong></a><br><span class="muted">The full Letters &amp; Sounds Phase 2 sequence with pronunciation tips for parents.</span></li>
<li><a href="/#free-sample"><strong>LittleLearners free sample pack</strong></a><br><span class="muted">A free printable sample — no signup, no email required. Print it tonight.</span></li>
</ul>
<p class="muted" style="margin-top:30px">Know a great free resource we've missed? Email <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> and we'll take a look. Last updated: September 2026.</p>
</div>${siteFooter(products)}`;
  const jsonld = safeJson(breadcrumbJsonLd([{ name: "Home", url: SITE + "/" }, { name: "Resources", url: pageUrl }]));
  return headFoot({ title: "Helpful Resources for UK Parents | LittleLearners", description: "Free, official UK resources for parents of 3–6 year olds: EYFS guidance, phonics, early maths, fine motor skills and parenting support.", canonical: pageUrl, jsonld }).head(body);
}

// ---------------- about ----------------
function buildAbout(products) {
  const pageUrl = `${SITE}/about`;
  const bi = bundleInfo(products);
  const body = `${siteHeader()}
<div class="wrap legal">
<nav class="crumbs"><a href="/">Home</a> / <span>About</span></nav>
<p class="eyebrow">About LittleLearners</p>
<h1>A small shop for printable learning pages</h1>
<p class="lead">LittleLearners makes printable worksheet packs for children aged 3–6, designed around the UK's EYFS framework and the phonics sequences taught in UK schools. No apps, no subscriptions — just PDFs you print at home.</p>

<h2>What we sell</h2>
<p>Eight printable packs — 100 pages in total — covering alphabet tracing, numbers 1–20, Phase 2 phonics, tricky words, early addition, scissor skills, shapes &amp; colours, and a colouring pack for quiet time. There's also an <a href="/product/ultimate-bundle">Ultimate Bundle</a> with everything in it. You pay once and the files are yours forever; every purchase includes unlimited printing for your own children or your classroom.</p>

<h2>How the packs are made</h2>
<p>Each pack is built around how UK schools actually teach: the Letters &amp; Sounds phonics order, UK spellings, UK handwriting lines, and the fine-motor progression the EYFS expects. The pages use big traceable shapes and bold outlines because small hands need big targets. Before a pack goes on sale, every page is printed and checked by hand — if a line is too faint or a shape too fiddly for a four-year-old, it doesn't ship.</p>

<h2>How buying works</h2>
<p>Checkout is handled securely by Payoneer. The moment your payment clears, download links appear on screen and a backup copy is emailed to you. Nothing is posted, so there's nothing to wait for. If a link ever stops working, email us and we'll sort it out — your purchases don't expire.</p>

<h2>Who we are</h2>
<p>LittleLearners is a small independent business. We don't have a customer-service department — when you email <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>, you reach the people who make the packs. We reply within two working days, usually faster. If something we sell isn't as described, our <a href="/refunds">refund policy</a> covers you for 14 days.</p>

<h2>What we're not</h2>
<p>We're not teachers and our packs aren't a curriculum — they're practice pages that sit alongside what your child's school teaches. If you're ever unsure what your child should be learning, your child's teacher knows better than any website. Our <a href="/guides">free parent guides</a> explain the UK phonics phases, number formation and school readiness in plain language, so you can help at home with confidence.</p>

${bi ? `<div class="sample-strip"><h2 style="margin-bottom:8px">Start with the free sample</h2>
<p class="sub">7 pages, no email needed — see the quality before you spend a penny.</p>
<a class="btn btn-ghost" href="/littlelearners-free-sample.pdf">Download free sample (PDF)</a></div>` : ""}
</div>${siteFooter(products)}`;
  const jsonld = safeJson(breadcrumbJsonLd([{ name: "Home", url: SITE + "/" }, { name: "About", url: pageUrl }]));
  return headFoot({
    title: "About LittleLearners | Printable Packs for Ages 3–6",
    description: "LittleLearners is a small independent shop making printable UK EYFS & KS1 worksheet packs for ages 3–6. Buy once, print forever — no subscription.",
    canonical: pageUrl, jsonld,
  }).head(body);
}

// ---------------- contact ----------------
function buildContact(products) {
  const body = `${siteHeader()}
<div class="wrap">
<nav class="crumbs"><a href="/">Home</a> / <span>Contact</span></nav>
<h1 style="color:var(--navy);margin-bottom:8px">Contact us</h1>
<p class="lead" style="color:var(--muted);margin-bottom:30px">We reply within two working days — usually faster.</p>
<div class="contact-grid">
<div class="card" style="text-align:left"><h3>Email us directly</h3>
<p><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p>
<p class="muted">Fastest for order help — include your order number and we'll find your purchase straight away.</p></div>
<form class="form" method="post" action="/contact">
<h3 style="color:var(--navy);margin-bottom:14px">Or send a message</h3>
<label>Your name<input name="name" required autocomplete="name"></label>
<label>Email<input name="email" type="email" required autocomplete="email"></label>
<label>Order number (if you have one)<input name="order" inputmode="numeric" placeholder="e.g. 12"></label>
<label>Message<textarea name="message" rows="5" required placeholder="How can we help?"></textarea></label>
<button class="btn btn-buy" type="submit">Send message</button>
</form>
</div></div>${siteFooter(products)}`;
  return headFoot({
    title: "Contact Us | LittleLearners",
    description: "Contact LittleLearners — help with orders, downloads and printing. We reply within two working days.",
    canonical: SITE + "/contact",
  }).head(body);
}

function buildContactThanks(products) {
  const body = `${siteHeader()}<div class="wrap" style="text-align:center;padding:70px 20px;max-width:640px">
<h1 style="color:var(--navy);margin-bottom:14px">Message received</h1>
<p style="color:var(--muted)">Thanks for getting in touch — we'll reply within two working days. If it's urgent (for example a download link that isn't working), email us directly at <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a> and we'll jump on it.</p>
<p style="margin-top:26px"><a class="btn btn-ghost" href="/shop">Back to the shop</a></p></div>${siteFooter(products)}`;
  return headFoot({ title: "Message sent | LittleLearners", robots: "noindex, nofollow" }).head(body);
}

// ---------------- account (honest stubs) ----------------
function accountShell(inner, products) {
  return `${siteHeader()}<div class="wrap account">${inner}</div>${siteFooter(products)}`;
}
function buildAccountLogin(products) {
  const body = accountShell(`<div class="account-card">
<h1>Log in</h1><p class="muted">Access your downloads any time.</p>
<form class="form" method="post" action="/account/login" style="border:none;padding:0">
<label>Email<input name="email" type="email" required autocomplete="email"></label>
<label>Password<input name="password" type="password" required autocomplete="current-password"></label>
<button class="btn btn-buy buy-full" type="submit">Log in</button></form>
<p class="muted" style="margin-top:16px">New here? <a href="/account/signup">Create an account</a></p>
</div>`, products);
  return headFoot({ title: "Log in | LittleLearners", canonical: SITE + "/account/login", robots: "noindex, nofollow" }).head(body);
}
function buildAccountSignup(products) {
  const body = accountShell(`<div class="account-card">
<h1>Create an account</h1><p class="muted">One account for all your packs and downloads.</p>
<form class="form" method="post" action="/account/signup" style="border:none;padding:0">
<label>Your name<input name="name" required autocomplete="name"></label>
<label>Email<input name="email" type="email" required autocomplete="email"></label>
<label>Password<input name="password" type="password" required minlength="8" autocomplete="new-password"></label>
<button class="btn btn-buy buy-full" type="submit">Create account</button></form>
<p class="muted" style="margin-top:16px">Already have one? <a href="/account/login">Log in</a></p>
</div>`, products);
  return headFoot({ title: "Create account | LittleLearners", canonical: SITE + "/account/signup", robots: "noindex, nofollow" }).head(body);
}
function buildAccountDownloads(products) {
  const body = accountShell(`<div class="account-card">
<h1>Find your downloads</h1><p class="muted">Enter the email you bought with and your order number — it's in your receipt email.</p>
<form class="form" method="post" action="/account/downloads" style="border:none;padding:0">
<label>Email<input name="email" type="email" required autocomplete="email"></label>
<label>Order number<input name="order" inputmode="numeric" required placeholder="e.g. 12"></label>
<button class="btn btn-buy buy-full" type="submit">Find my files</button></form>
</div>`, products);
  return headFoot({ title: "Your downloads | LittleLearners", canonical: SITE + "/account/downloads", robots: "noindex, nofollow" }).head(body);
}
function buildAccountNotice(title, message, products) {
  const body = accountShell(`<div class="account-card" style="text-align:center">
<h1>${esc(title)}</h1><p style="color:var(--muted)">${esc(message)}</p>
<p style="margin-top:22px"><a class="btn btn-ghost" href="/shop">Browse the packs</a></p></div>`, products);
  return headFoot({ title: `${title} | LittleLearners`, robots: "noindex, nofollow" }).head(body);
}

// ---------------- cart ----------------
function buildCart(products) {
  const data = products.filter((p) => p.active !== 0).map((p) => ({
    slug: p.slug, name: p.name, price: p.price_minor, cover: p.cover_image || "/img/bundle.webp",
  }));
  const body = `${siteHeader()}
<div class="wrap" style="max-width:760px">
<nav class="crumbs"><a href="/">Home</a> / <span>Cart</span></nav>
<h1 style="color:var(--navy);margin-bottom:6px">Your cart</h1>
<p class="muted" style="margin-bottom:26px">Your cart is saved in this browser. Checkout is per pack — pay once, download instantly, no subscription.</p>
<div id="cartList"></div>
<div id="cartEmpty" class="card" style="display:none"><h3>Your cart is empty</h3>
<p class="muted">Have a browse — every pack is on launch sale.</p>
<p style="margin-top:16px"><a class="btn btn-buy" href="/shop">Shop the collection</a></p></div>
</div>${siteFooter(products)}
<script>
(function(){
  var CATALOG = ${JSON.stringify(data)};
  var bySlug = {}; CATALOG.forEach(function(p){ bySlug[p.slug] = p; });
  function getCart(){ try { return JSON.parse(localStorage.getItem('ll_cart') || '[]'); } catch(e){ return []; } }
  function setCart(c){ localStorage.setItem('ll_cart', JSON.stringify(c)); }
  function money(m){ return '£' + (m/100).toFixed(2); }
  var list = document.getElementById('cartList'), empty = document.getElementById('cartEmpty');
  function render(){
    var cart = getCart().filter(function(s){ return bySlug[s]; });
    setCart(cart);
    if (!cart.length) { list.innerHTML = ''; empty.style.display = ''; return; }
    empty.style.display = 'none';
    var total = 0;
    list.innerHTML = cart.map(function(s){
      var p = bySlug[s]; total += p.price;
      return '<div class="cart-row"><img src="' + p.cover + '" alt="">' +
        '<div><strong>' + p.name.replace(/</g,'&lt;') + '</strong><br><span class="muted">' + money(p.price) + ' · instant download</span></div>' +
        '<button class="btn btn-buy" data-buy="' + s + '">Buy now</button>' +
        '<button class="linkbtn" data-rm="' + s + '">Remove</button></div>';
    }).join('') + '<div class="cart-total"><span>Total</span><strong>' + money(total) + '</strong></div>' +
    '<p class="muted">Each pack checks out individually through secure checkout. ' + 'Buy once, yours forever.</p>';
    list.querySelectorAll('[data-rm]').forEach(function(b){
      b.addEventListener('click', function(){ setCart(getCart().filter(function(s){ return s !== b.dataset.rm; })); render(); });
    });
    list.querySelectorAll('[data-buy]').forEach(function(b){
      b.addEventListener('click', async function(){
        b.disabled = true; b.textContent = 'Opening…';
        try {
          var r = await fetch('/api/create-checkout', { method:'POST',
            headers:{'Content-Type':'application/json'}, body: JSON.stringify({ slug: b.dataset.buy }) });
          var j = await r.json();
          if (j.checkoutUrl) { location.href = j.checkoutUrl; return; }
          alert('Online checkout is being connected — please try again soon.');
        } catch(e){ alert('Something went wrong — please try again.'); }
        b.disabled = false; b.textContent = 'Buy now';
      });
    });
  }
  render();
})();
</script>`;
  return headFoot({
    title: "Your cart | LittleLearners",
    description: "Your LittleLearners cart — printable packs for ages 3–6. Buy once, no subscription.",
    canonical: SITE + "/cart", robots: "noindex, nofollow",
  }).head(body);
}

// add-to-cart snippet used on product pages (localStorage only)
function addToCartScript(slug) {
  return `<script>
document.getElementById('cartBtn').addEventListener('click', function(){
  var c = []; try { c = JSON.parse(localStorage.getItem('ll_cart') || '[]'); } catch(e){}
  if (c.indexOf(${JSON.stringify(slug)}) < 0) c.push(${JSON.stringify(slug)});
  localStorage.setItem('ll_cart', JSON.stringify(c));
  var note = document.getElementById('buyNote');
  note.innerHTML = 'Added to cart — <a href="/cart">view cart</a>';
});
</script>`;
}

// ---------------- offer landing ----------------
const OFFERS = {
  launch: {
    title: "Launch Offer",
    headline: "Launch sale: up to {pct}% off every printable pack",
    sub: "Our opening offer on all 8 packs and the Ultimate Bundle. Buy once, yours forever — no subscription, ever.",
    endDate: null, // set a real date like "31 October 2026" to show it honestly; null = no urgency shown
  },
};
function buildOffer(offerSlug, products) {
  const o = OFFERS[offerSlug];
  if (!o) return null;
  const maxDisc = maxDiscountPct(products);
  const headline = o.headline.replace("{pct}", String(maxDisc));
  const singles = products.filter((p) => !p.is_bundle && p.active !== 0);
  const bi = bundleInfo(products);
  const urgency = o.endDate
    ? `<p class="offer-ends">Offer ends ${esc(o.endDate)}.</p>`
    : `<p class="offer-ends">Our opening offer — available while launch pricing lasts.</p>`;
  const body = `${siteHeader()}
${announcementBar(maxDiscountPct(products))}
<div class="wrap">
<div class="offer-hero">
<p class="eyebrow">${esc(o.title)}</p>
<h1>${esc(headline)}</h1>
<p class="lead">${esc(o.sub)}</p>
${urgency}
<div class="cta-row"><a class="btn btn-buy" href="/product/ultimate-bundle">Get the bundle</a>
<a class="btn btn-ghost" href="/shop">Browse single packs</a></div>
</div>
${bi ? `<div class="bundle-banner"><div>
<p class="eyebrow">Best value</p><h2>${esc(bi.bundle.name)}</h2>
<p class="sub" style="text-align:left;margin:0 0 18px">All ${bi.singles.length} packs · ${bi.bundle.pages} pages · save ${money(bi.savings)} vs buying separately. <strong>${money(bi.bundle.price_minor)}</strong></p>
<a class="btn btn-buy" href="/product/ultimate-bundle">Get the bundle</a>
</div><img src="${bi.bundle.cover_image || "/img/bundle.webp"}" alt="${esc(bi.bundle.name)}"></div>` : ""}
<section><h2>Every pack, on sale</h2><p class="sub">${ANTI_SUB}</p>
<div class="grid4">${singles.map(productCard).join("")}</div></section>
${trustStrip(["✓ Instant download after payment", "✓ Print-ready A4 PDFs", "✓ UK EYFS &amp; KS1 aligned", "✓ Buy once — no subscription"])}
</div>${siteFooter(products)}`;
  return headFoot({
    title: `${o.title} | LittleLearners`,
    description: headline + " " + o.sub,
    canonical: `${SITE}/offer/${offerSlug}`,
    robots: "noindex, follow", // marketing landing, not in sitemap — keep it out of the index
  }).head(body);
}

// ---------------- 404 ----------------
function build404(products) {
  const body = `${siteHeader()}<div class="wrap notfound">
<h1>Lost your crayons? 🖍️</h1>
<p class="lead">That page doesn't exist — but there's plenty to explore.</p>
<div class="cta-row" style="justify-content:center">
<a class="btn btn-buy" href="/shop">Shop the packs</a>
<a class="btn btn-ghost" href="/guides">Read the guides</a></div>
</div>${siteFooter(products)}`;
  return headFoot({ title: "Page not found | LittleLearners", robots: "noindex, nofollow" }).head(body);
}

module.exports = {
  buildHome, buildShop, buildProduct, buildSuccess, buildCancel, buildOrderDownloads,
  buildGuides, buildGuide, buildResources, buildAbout, buildLegal, buildContact, buildContactThanks,
  buildAccountLogin, buildAccountSignup, buildAccountDownloads, buildAccountNotice,
  buildCart, buildOffer, build404, guideCard, addToCartScript, OFFERS,
  maxDiscountPct, SITE, SUPPORT_EMAIL, ANTI_SUB,
};
