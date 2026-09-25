# Deploying LittleLearners to Hostinger

## Requirements

- Hostinger **VPS or plan with Node.js support** (hPanel → Websites → Node.js).
- **Node.js 22.5+** on the server (`node:sqlite` is built in — no native modules to compile).
  In hPanel, set the Node.js version to **22 or higher** for the app.
- A domain pointed at the app (e.g. `littlelearners.site`).

## Steps (hPanel)

1. **Create the Node.js app**: hPanel → Websites → your domain → Node.js → Create Application.
   - Startup file: `server.js`
   - Node version: 22+
2. **Connect the GitHub repo** (`amir21562/littlelearners`, branch `main`) via the
   Git / Deployment section, or upload the release zip via File Manager.
3. **Install dependencies**: run `npm install` (hPanel terminal or deploy script).
4. **Seed the catalogue** (first deploy only): run `node seed.js` once in the app root.
   This creates `data/store.db` and copies the 8 product PDFs into `data/files/`.
   (On later boots, `server.js` also copies any missing PDFs from `assets/files/`.)
5. **Create the admin account**: open `https://<domain>/admin/setup` once, set the
   admin password. The setup page disables itself afterwards.
6. **Payoneer** (to accept payments): see `PAYONEER_SETUP.md`.
   Set these as **Environment variables** in the Node.js app settings, then restart:
   `PAYONEER_MERCHANT_ID`, `PAYONEER_API_KEY`, `PAYONEER_WEBHOOK_SECRET`,
   `PAYONEER_API_BASE_URL`, `PAYONEER_ENV=sandbox` (use `live` when going live).
   Then Admin → Settings → enable Payoneer Checkout.
7. **n8n**: import `n8n/littlelearners-sale-workflow.json` into your n8n, follow the
   sticky-note checklist inside it, and paste the production webhook URL into
   Admin → Settings → n8n webhook URL.

## Verify after deploy

- `https://<domain>/` loads, `/shop`, one `/product/<slug>`, `/guides`
- `/sitemap.xml` lists products + guides
- `/admin` login works
- With Payoneer in **sandbox**: buy the cheapest pack with a test card →
  success page → order shows as paid in `/admin` → download link works

## Notes

- `data/` (SQLite DB, session secret, uploaded files) is **not** in git — it is
  created on the server. Back it up regularly (download via File Manager).
- Never commit or paste real Payoneer keys into chat — env vars only.
