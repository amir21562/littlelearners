const express = require("express");
const session = require("express-session");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// persistent session secret (survives restarts)
const dataDir = path.join(__dirname, "data");
fs.mkdirSync(dataDir, { recursive: true });
// Ship product PDFs in the repo (assets/files); copy into data/files on boot
// so paid downloads work on a fresh deploy without manual file uploads.
const filesDir = path.join(dataDir, "files");
fs.mkdirSync(filesDir, { recursive: true });
const shipDir = path.join(__dirname, "assets", "files");
if (fs.existsSync(shipDir)) {
  for (const f of fs.readdirSync(shipDir)) {
    if (!f.toLowerCase().endsWith(".pdf")) continue;
    const dest = path.join(filesDir, path.basename(f));
    if (!fs.existsSync(dest)) fs.copyFileSync(path.join(shipDir, f), dest);
  }
}
const secretFile = path.join(dataDir, "session-secret");
let secret;
if (fs.existsSync(secretFile)) secret = fs.readFileSync(secretFile, "utf8");
else { secret = crypto.randomBytes(32).toString("hex"); fs.writeFileSync(secretFile, secret); }

app.use(express.json());
app.use(session({ secret, resave: false, saveUninitialized: false,
  cookie: { maxAge: 12 * 3600 * 1000, httpOnly: true } }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "7d" }));

app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/shop"));

app.use((req, res) => {
  try {
    const { listProducts } = require("./lib/db");
    const { build404 } = require("./lib/pages");
    res.status(404).send(build404(listProducts()));
  } catch (e) {
    res.status(404).send("Page not found");
  }
});

app.listen(PORT, () => console.log(`LittleLearners store on :${PORT}`));
