# Guides content schema

`lib/guides.js` holds the topical-authority content: `PILLARS` (the 4 topic
pillars) and `GUIDES` (the articles). Page templates live in `lib/pages.js`
(`buildGuides`, `buildGuide`, `guideCard`); routes in `routes/shop.js`.

## Article schema

```
{ slug,                       // URL: /guides/<slug>
  pillar,                     // one of the PILLARS slugs
  title,                      // <= 43 chars ("| LittleLearners" is appended in <title>)
  summary,                    // <= 155 chars, used as the meta description
  minutes,                    // reading time shown under the H1
  draft?,                      // optional: true = show DRAFT badge + noindex until finished
  products,                   // product slugs for the in-article CTA box (must match DB slugs)
  answer,                     // 40-60 words: the AEO "short answer" box under the H1
  sections,                   // [{ h, body: [paragraphs], list?: [bullets] }]
  faqs }                      // [[question, answer]...] -> accordion + FAQPage JSON-LD
```

## Rules (from TOPICAL_AUTHORITY.md)

- One search intent = one article. Never publish two articles answering the same intent.
- UK English, active voice, skimmable H2/H3 structure.
- No fake reviews, ratings, sales counts, countdowns or urgency claims.
- Every article links to its pillar listing and to 2-3 related guides;
  product pages link back via "Parents also read" (only non-draft guides).
- Drafts are noindexed and excluded from sitemap.xml until `draft` is removed.

## Content standards

- **Word count:** 1,200–1,800 words per guide (body + lists + answer + FAQs).
- **Tone:** parent-first, active voice, skimmable. No jargon without a
  plain-English definition.
- **Curriculum claims** (EYFS, Letters and Sounds, screening checks, school
  admissions) must be verifiable from official or reputable sources. When
  schemes differ between schools (e.g. phonics orders, number-rhyme sets), say
  so honestly instead of presenting one version as universal.
- **Exactly one product CTA** per guide — the template inserts the CTA box
  after the second section automatically. End the final section with a soft,
  natural mention of the same product; do not add more CTAs in the text.

## Publishing checklist

1. `<title>` ≤ 60 chars including " | LittleLearners"; meta description ≤ 155.
2. Self-referencing canonical, one H1, logical H2 order, answer box 40–60 words.
3. Article + FAQPage + BreadcrumbList JSON-LD present and valid.
4. `draft` removed; URL appears in sitemap.xml; internal links both ways
   (guide → product, product → guide).
5. Render the live page and re-check 1–4 — never assume the template did it.
