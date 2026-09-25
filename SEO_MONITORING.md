# SEO Monitoring & Maintenance

## 1. Google Search Console setup (one-time)

1. Add the property `https://littlelearners.store/` (domain property preferred).
2. Verify ownership (DNS TXT record via the Hostinger hPanel DNS editor).
3. Submit `https://littlelearners.store/sitemap.xml` under Sitemaps.
4. Under Settings → Crawl stats, confirm Googlebot is fetching the site.
5. Use **URL Inspection** on each of the four guide URLs and click
   **Request indexing**:
   - `/guides/phase-2-sounds-in-order`
   - `/guides/what-is-phonics-phase-2`
   - `/guides/number-formation-1-to-20`
   - `/guides/reception-readiness-checklist-uk`
6. Also request indexing for `/`, `/shop` and `/guides` if not indexed yet.

## 2. What to track (weekly for the first 12 weeks, monthly after)

Per guide URL, from Search Console → Performance (filter by page):

| Metric | Healthy direction |
|---|---|
| Impressions | Rising as pages get discovered |
| Clicks | Rising after impressions |
| CTR | 2–5%+ for informational queries; rewrite titles/summaries if < 1.5% |
| Average position | Moving toward page 1 (≤ 10) for the primary intent |
| Top queries | Should match the intended intent (e.g. "phase 2 sounds order"); if a guide ranks for another guide's intent → cannibalisation (see §6) |
| Indexed? | Coverage report: "Indexed" — investigate "Discovered – not indexed" after 3–4 weeks |

Also track per guide: product-page clicks from the guide (server logs or
analytics events on the CTA box), and guide → product conversion rate.

## 3. Rank-tracking sheet

Keep a simple sheet (one row per guide per week):

| Date | Guide | Primary query | Position | Impressions | Clicks | CTR | Notes |
|---|---|---|---|---|---|---|---|
| … | Phase 2 sounds in order | phase 2 sounds in order | 14 | 320 | 9 | 2.8% | FAQ rich result showing |

Primary queries:
- A2: `phase 2 sounds in order`
- A1: `what is phonics phase 2`
- B1: `number formation 1-20`
- D1: `reception readiness checklist uk`

## 4. Content-refresh triggers

Refresh a guide (update `dateModified`, re-request indexing) when:
- Any curriculum fact changes (DfE framework updates, new screening-check
  arrangements, admissions code changes) — check gov.uk termly.
- Average position stalls outside the top 20 for 8+ weeks → re-read the
  top 3 rankers and close the gap (usually: a missing sub-intent or a
  weaker answer box).
- CTR < 1.5% with page-1 impressions → rewrite title/summary (keep ≤60 / ≤155).
- A competitor publishes something clearly better → match it, then exceed it
  (our honest-myth-bust angle is the moat; don't lose it chasing length).
- Seasonal: D1 (readiness) deserves a light refresh each June–August before
  the September intake; A1/A2 each August before the autumn term.

## 5. Recurring technical checks (monthly)

- [ ] Sitemap returns 200 and lists every published guide; no draft URLs.
- [ ] robots.txt returns 200 and points at the sitemap.
- [ ] Validate Article + FAQPage + BreadcrumbList JSON-LD on all guides
      (Search Console → URL Inspection → "Enhancements", or the Rich Results Test).
- [ ] One H1 per page; titles ≤ 60, meta descriptions ≤ 155 (spot-check).
- [ ] Noindex still present on: checkout success/cancel, cart, account pages,
      order/download pages, 404.
- [ ] Filtered shop URLs (`/shop?subject=…&age=…`) still canonicalise to `/shop`.
- [ ] Crawl for broken links (internal guide ↔ product links both ways).
- [ ] Canonicals self-referencing; single trailing-slash policy (no trailing
      slash) across sitemap, canonicals and internal links.

## 6. Cannibalisation checks (monthly)

Rule: **one intent = one article.** In Search Console → Performance, compare
the top queries of each guide:
- If two guides both rank for the same query, decide which one owns the
  intent and sharpen the other's focus (different angle, different queries).
- Never fix this by writing a third article on the same intent.
- The topical map (`TOPICAL_AUTHORITY.md`) is the source of truth for which
  intent each article owns. Update it when adding guides 5–12.

## 7. Monthly maintenance routine (30–45 min)

1. Search Console: coverage errors → fix; performance per guide → log in sheet.
2. Run the technical checklist (§5).
3. Cannibalisation check (§6).
4. Note any curriculum/news changes affecting A1/A2/B1/D1 facts.
5. Pick the weakest guide (lowest CTR or stalled position) → one concrete
   improvement for next month.
6. Backlink log: record new links earned (see link-building notes in
   `TOPICAL_AUTHORITY.md` or the marketing plan) — never buy links.

## 8. What success looks like (100-day view)

- All 4 guides indexed with FAQ/Article rich results eligible.
- Each guide ranking top 20 for its primary query; at least one on page 1.
- Guide → product CTR visible in analytics; guides contributing to bundle
  and single-pack sales.
- Zero coverage errors, zero cannibalisation flags, all checklists green.
