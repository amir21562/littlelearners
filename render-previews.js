// render-previews.js — renders the ACTUAL templates against the REAL database
// and writes standalone static HTML files (with public/ copied alongside)
// into ~/workspace/previews-v2/. Admin pages use mock session data.
const express = require("express");
const fs = require("fs");
const path = require("path");

const OUT = path.join(process.env.HOME, "workspace", "previews-v2");
const PUB = path.join(__dirname, "public");

async function main() {
  const app = express();
  // mock admin session so the REAL dashboard handler runs with fake data
  app.use("/admin", (req, res, next) => { req.session = { admin: "preview@example.com" }; next(); });
  app.use("/admin", require("./routes/admin"));
  app.use("/", require("./routes/shop"));

  const server = app.listen(0);
  await new Promise((r) => server.on("listening", r));
  const base = `http://127.0.0.1:${server.address().port}`;

  const pages = [
    ["index.html", "/"],
    ["shop.html", "/shop"],
    ["shop-filtered.html", "/shop?subject=Phonics"],
    ["product-alphabet-tracing-a-z.html", "/product/alphabet-tracing-a-z"],
    ["product-ultimate-bundle.html", "/product/ultimate-bundle"],
    ["guides.html", "/guides"],
    ["guide-phase-2-sounds.html", "/guides/phase-2-sounds-in-order"],
    ["guide-what-is-phase-2.html", "/guides/what-is-phonics-phase-2"],
    ["guide-404.html", "/guides/does-not-exist"],
    ["privacy.html", "/privacy"],
    ["terms.html", "/terms"],
    ["refunds.html", "/refunds"],
    ["licence.html", "/licence"],
    ["contact.html", "/contact"],
    ["account-login.html", "/account/login"],
    ["account-signup.html", "/account/signup"],
    ["account-downloads.html", "/account/downloads"],
    ["cart.html", "/cart"],
    ["offer-launch.html", "/offer/launch"],
    ["notfound.html", "/404"],
    ["admin-login.html", "/admin/login"],
    ["admin-dashboard.html", "/admin/dashboard"],
  ];

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const STANDALONE = path.join(OUT, "standalone");
  fs.mkdirSync(STANDALONE, { recursive: true });
  // copy public assets alongside so images/CSS resolve
  fs.cpSync(PUB, OUT, { recursive: true });

  // standalone: inline CSS + base64 images so each file opens on its own
  const cssInline = fs.readFileSync(path.join(PUB, "css", "style.css"), "utf8");
  const imgCache = {};
  const dataUri = (p) => {
    if (imgCache[p]) return imgCache[p];
    const fp = path.join(PUB, p.replace(/^\//, ""));
    if (!fs.existsSync(fp)) return p;
    const ext = path.extname(p).toLowerCase();
    const mime = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml" }[ext] || "application/octet-stream";
    const uri = `data:${mime};base64,${fs.readFileSync(fp).toString("base64")}`;
    imgCache[p] = uri;
    return uri;
  };
  const toStandalone = (html) => html
    .replace('<link rel="stylesheet" href="/css/style.css">', `<style>${cssInline}</style>`)
    .replace(/((?:src|href)=")\/img\/([^"]+)"/g, (m, pre, name) => `${pre}${dataUri("/img/" + name)}"`);

  for (const [file, route] of pages) {
    const r = await fetch(base + route);
    if (!r.ok && !((file === "guide-404.html" || file === "notfound.html") && r.status === 404)) throw new Error(`GET ${route} -> ${r.status}`);
    const raw = await r.text();
    // standalone first (needs the original absolute /css/ and /img/ paths)
    fs.writeFileSync(path.join(STANDALONE, file), toStandalone(raw));
    // flat version: rewrite absolute asset paths to relative
    let html = raw
      .replace(/"\/css\//g, '"css/')
      .replace(/'\/css\//g, "'css/")
      .replace(/"\/img\//g, '"img/')
      .replace(/'\/img\//g, "'img/")
      .replace(/"\/littlelearners-free-sample\.pdf/g, '"littlelearners-free-sample.pdf');
    fs.writeFileSync(path.join(OUT, file), html);
    console.log("wrote", file, html.length, "bytes");
  }
  server.close();
  console.log("DONE ->", OUT);
}

main().catch((e) => { console.error(e); process.exit(1); });
