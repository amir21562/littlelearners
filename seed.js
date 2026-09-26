// Seed the store: ensure the 10 catalogue products exist (9 packs + Ultimate Bundle).
// Safe to run on every boot: only inserts slugs that are missing, never overwrites
// admin edits, and repairs the bundle's item list / page count.
// Run manually: node seed.js
const fs = require("fs");
const path = require("path");
const { db, DATA } = require("./lib/db");

const SRC = path.join(__dirname, "..", "kids-printables", "products");
const SHIP = path.join(__dirname, "assets", "files"); // PDFs shipped in the repo (production)
const FILES = path.join(DATA, "files");
fs.mkdirSync(FILES, { recursive: true });

const PRODUCTS = [
  { slug: "alphabet-tracing-a-z", name: "Alphabet Tracing A–Z", file: "01-alphabet-tracing-a-z.pdf",
    tagline: "26 pages of big, traceable letters on UK handwriting lines",
    description: "Help your little one master letter formation the UK way.\nEvery page features a giant traceable capital and lowercase letter on proper UK handwriting lines, plus a starter word to trace — Apple for A, Ball for B, Cat for C.\nBuilds pencil control, letter recognition and early writing confidence.",
    price_minor: 499, compare_price_minor: 799, pages: 27, badge: "", sort: 1 },
  { slug: "numbers-1-to-20", name: "Numbers 1–20: Trace & Count", file: "02-numbers-1-to-20.pdf",
    tagline: "Trace every numeral, count the dots, learn number words",
    description: "From wobbly lines to confident numerals.\nEach number gets a full page: a giant traceable numeral, a count-the-dots activity and the number word to trace.\nBuilds number formation, counting to 20 and one-to-one correspondence — core EYFS maths.",
    price_minor: 499, compare_price_minor: 799, pages: 21, badge: "", sort: 2 },
  { slug: "phonics-phase-2", name: "Phonics Phase 2 (Letters & Sounds)", file: "03-phonics-phase-2-uk.pdf",
    tagline: "Home practice that matches what UK schools teach",
    description: "Follows the Letters & Sounds Phase 2 sequence (s a t p, i n m d…) used in UK Reception classes.\nEach set has letter tracing plus CVC word reading — sat, pin, tap.\nPerfect alongside Little Wandle or Read Write Inc. lessons.",
    price_minor: 399, compare_price_minor: 599, pages: 6, badge: "", sort: 3 },
  { slug: "shapes-and-colours", name: "Shapes & Colours", file: "04-shapes-and-colours.pdf",
    tagline: "Trace shape names, colour big bold shapes",
    description: "Circle, square, triangle, rectangle, star and heart.\nLittle ones trace each shape's name, then colour the big bold shape any way they like.\nBuilds shape recognition, vocabulary and pencil control.",
    price_minor: 399, compare_price_minor: 599, pages: 7, badge: "", sort: 4 },
  { slug: "simple-addition-1-10", name: "Simple Addition to 10", file: "05-simple-addition-1-10.pdf",
    tagline: "First sums made visual, with counting dots",
    description: "Every addition fact to 10 gets a full page: counting dots under each number, a big traceable equation and handwriting lines for the answer.\nIncludes a mixed review page to show off new skills.\nIdeal for Reception and Year 1.",
    price_minor: 499, compare_price_minor: 799, pages: 12, badge: "NEW", sort: 5 },
  { slug: "tricky-words-phases-2-3", name: "Tricky Words: Phases 2 & 3", file: "06-tricky-words-phases-2-3.pdf",
    tagline: "20 must-know tricky words — trace, read, write",
    description: "The words that can't be sounded out: the, to, I, no, go, she, was, they, said, have and more.\nTwo words per page — trace it, read it, then write it yourself.\nMatches the Letters & Sounds tricky word lists used in UK schools.",
    price_minor: 499, compare_price_minor: 799, pages: 11, badge: "NEW", sort: 6 },
  { slug: "scissor-skills", name: "Scissor Skills: Cut Along the Lines", file: "07-scissor-skills.pdf",
    tagline: "Dashed cutting lines from straight to spiral",
    description: "Straight, zigzag, wavy, curved and spiral dashed lines with green 'start here' dots, ending with shapes to cut out.\nBuilds hand strength and coordination for safe, confident cutting — a key EYFS fine-motor skill.",
    price_minor: 399, compare_price_minor: 599, pages: 9, badge: "NEW", sort: 7 },
  { slug: "mini-colouring-pack", name: "Mini Colouring Pack", file: "08-mini-colouring-pack.pdf",
    tagline: "6 sweet colouring pages with bold, easy outlines",
    description: "A cute cat, a happy dog, a sun with a rainbow, a little fish — plus a rainbow and a bunch of balloons to colour.\nBold outlines are perfect for little hands.\nGreat for quiet time, travel and rainy days.",
    price_minor: 299, compare_price_minor: 499, pages: 7, badge: "", sort: 8 },
  { slug: "halloween-fun-pack", name: "Halloween Fun Pack", file: "09-halloween-fun-pack.pdf",
    tagline: "12 spooky-fun pages: tracing, counting, mazes & colouring",
    description: "Pumpkin tracing, a friendly ghost to colour, count-the-bats to 10, an easy Halloween maze, a spider-web tracing page and a masquerade mask.\nPlus Halloween I-spy, spot-the-difference, candy-corn counting and word tracing (pumpkin, ghost, witch) on UK handwriting lines.\nReal early-learning skills disguised as October fun — perfect for half-term.",
    price_minor: 399, compare_price_minor: 599, pages: 12, badge: "NEW", sort: 9 },
];

function copyPdf(file) {
  const dest = path.join(FILES, file);
  if (fs.existsSync(dest)) return;
  const src = path.join(SRC, file);
  const ship = path.join(SHIP, file);
  if (fs.existsSync(src)) fs.copyFileSync(src, dest);
  else if (fs.existsSync(ship)) fs.copyFileSync(ship, dest);
  else console.warn("MISSING PDF:", file);
}

function seedDatabase() {
  for (const p of PRODUCTS) {
    copyPdf(p.file);
    const exists = db.prepare("SELECT id FROM products WHERE slug = ?").get(p.slug);
    if (exists) continue;
    db.prepare(`INSERT INTO products (slug,name,tagline,description,price_minor,compare_price_minor,
      pages,pdf_file,cover_image,sample_images,badge,sort)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`).run(
      p.slug, p.name, p.tagline, p.description, p.price_minor, p.compare_price_minor,
      p.pages, p.file, `/img/products/${p.slug}.png`, JSON.stringify([`/img/products/${p.slug}.png`]),
      p.badge, p.sort);
    console.log("seeded:", p.slug);
  }
  // Ultimate Bundle = all 9 packs; repair its item list + page total every run so a
  // partially-seeded database converges to the full catalogue.
  const ids = db.prepare("SELECT id FROM products WHERE is_bundle = 0 AND slug != 'ultimate-bundle' ORDER BY sort").all().map((r) => r.id);
  const totalPages = db.prepare("SELECT COALESCE(SUM(pages),0) s FROM products WHERE is_bundle = 0 AND slug != 'ultimate-bundle'").get().s;
  const bundleTagline = "All 9 printable packs — 112 pages. Buy once, print forever.";
  const bundleDesc = "Everything in the shop, one price.\nAll 9 printable packs: alphabet tracing, numbers to 20, Phase 2 phonics, tricky words, early addition, scissor skills, shapes, colouring and the Halloween fun pack.\nThe complete EYFS & KS1 home-learning kit for ages 3–6 — cheaper than two months of a worksheet subscription.";
  const bundle = db.prepare("SELECT id FROM products WHERE slug = 'ultimate-bundle'").get();
  if (!bundle) {
    db.prepare(`INSERT INTO products (slug,name,tagline,description,price_minor,compare_price_minor,
      pages,pdf_file,cover_image,sample_images,badge,is_bundle,bundle_items,sort)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
      "ultimate-bundle", "Ultimate Early Learners Bundle",
      bundleTagline,
      bundleDesc,
      1999, 3499, totalPages, "", "/img/products/ultimate-bundle.png",
      JSON.stringify(["/img/products/alphabet-tracing-a-z.png", "/img/products/phonics-phase-2.png",
        "/img/products/mini-colouring-pack.png", "/img/products/simple-addition-1-10.png"]),
      "BEST VALUE", 1, JSON.stringify(ids), 0);
    console.log("seeded: ultimate-bundle");
  } else {
    db.prepare("UPDATE products SET bundle_items = ?, pages = ?, tagline = ?, description = ? WHERE slug = 'ultimate-bundle'")
      .run(JSON.stringify(ids), totalPages, bundleTagline, bundleDesc);
  }
}

if (require.main === module) {
  seedDatabase();
  console.log("DONE");
}

module.exports = { seedDatabase };
