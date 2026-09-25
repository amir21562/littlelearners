# LittleLearners — Topical Authority Map

**Strategy: topics, not keywords.** Hum keywords ke peeche nahi bhagenge. Hum parents ke
asal sawalon (search intent) ko samjhenge aur har ek intent ko ek dedicated guide mein
poori tarah cover karenge. **One search intent = one article.** Koi do articles aik hi
sawal ka jawab nahi denge (no cannibalisation — Droply wala rule yahan bhi).

**URL structure:** `/guides/<slug>/` — har guide pillar page se aur relevant products se
link hogi. Har product page bhi relevant guides ko link karega (two-way internal linking).

**Honesty rules:** koi fake claims nahi, keyword stuffing nahi, har guide mein asal
printable se misaal, har guide ka ikhtatam relevant product ke soft CTA par
("practice pages yahan se print karein") — hard sell nahi.

---

## Pillar A — Phonics & Early Reading (UK, Letters & Sounds)

Parent intent: "mera bacha parhna kaise seekhega, Phase 2 kya hai?"

| # | Guide (one intent) | Parent ka asal sawal | Linked product |
|---|---|---|---|
| A1 | What Is Phonics Phase 2? A Parent's Guide (UK) | Phase 2 hota kya hai, mere bache ko kab parhaya jata hai? | Phonics Phase 2 pack |
| A2 | Phase 2 Sounds in Order — Full List with Pronunciation Tips | Sounds kis order mein aate hain, sahi awaz kaise nikalein? | Phonics Phase 2 pack |
| A3 | Tricky Words Phases 2–3: Complete List & How to Practise | Tricky words yaad kaise karayein, poori list kahan hai? | Tricky Words pack |
| A4 | How to Teach Phonics at Home: A 10-Minute Daily Routine | Ghar par roz 10 minute mein phonics kaise parhayein? | Phonics + Alphabet packs |

Pillar page: `/guides/phonics/` — overview + links to A1–A4.

## Pillar B — Early Maths (EYFS / KS1)

Parent intent: "Reception/Year 1 mein maths mein kya expect karna chahiye?"

| # | Guide (one intent) | Parent ka asal sawal | Linked product |
|---|---|---|---|
| B1 | Number Formation 1–20: Correct Formation & Rhymes | Bachay numbers ultay likhte hain — sahi formation kaise sikhayein? | Numbers 1–20 pack |
| B2 | Simple Addition for Ages 4–6: Concrete → Pictorial → Written | Addition ka concept chhotay bachay ko kaise samjhayein? | Simple Addition pack |
| B3 | Shapes & Colours: What Reception Expects Your Child to Know | Reception mein shapes/colours ka kya level expect hota hai? | Shapes & Colours pack |

Pillar page: `/guides/early-maths/`

## Pillar C — Writing & Fine Motor Skills

Parent intent: "likhne se pehle haath ki tayyari kaise karayein?"

| # | Guide (one intent) | Parent ka asal sawal | Linked product |
|---|---|---|---|
| C1 | Pre-Writing Skills: Lines, Curves & Shapes Before Letters | Letter tracing se pehle kin skills ki zaroorat hai? | Scissor Skills + Alphabet packs |
| C2 | Pencil Grip Guide for Parents: Ages 3–6 | Sahi pencil grip kaise sikhayein, galat grip fix kaise karein? | Alphabet Tracing pack |
| C3 | Scissor Skills Progression: Snip → Lines → Curves → Shapes | Kaichi chalana kis order mein sikhayein? | Scissor Skills pack |

Pillar page: `/guides/writing-skills/`

## Pillar D — School Readiness (Reception, UK)

Parent intent: "kya mera bacha Reception ke liye ready hai?"

| # | Guide (one intent) | Parent ka asal sawal | Linked product |
|---|---|---|---|
| D1 | Reception Readiness Checklist (UK): Skills That Actually Matter | School shuru hone se pehle bacha kya kya jaanta ho? | Ultimate Bundle |
| D2 | A Screen-Free Learning Routine for Ages 3–6 (Printable Plan) | Roz ka printables routine kaise banayein? | Ultimate Bundle |

Pillar page: `/guides/school-readiness/`

---

## Internal linking rules

1. Har cluster guide → apne pillar page ko link karegi (breadcrumb + in-text).
2. Har guide → 1–2 relevant products (in-text, natural jagah par).
3. Har product page → 1–2 relevant guides ("Parents also read" section — yeh section
   product template mein add karna hai).
4. Pillar pages → sab cluster guides + bundle.
5. Anchor text intent-based ho ("phase 2 sounds in order"), keyword-stuffed nahi.

## Publishing order (pehle 4 — highest parent demand)

1. A2 (Phase 2 sounds list) — sab se zyada searched parent intent
2. A1 (What is Phase 2)
3. B1 (Number formation)
4. D1 (Reception readiness checklist)

Baad mein baqi 8, phir naye intents jo Search Console mein nazar aayein.

## Status (updated 2026-09-25)

- [x] `/guides/` section built (routes `/guides` + `/guides/:slug`, listing page, article template with answer box, TOC, FAQ, JSON-LD)
- [x] First 4 guides published (A2, A1, B1, D1) — 1,200–1,800 words each, in `lib/guides.js`
  - A2 `/guides/phase-2-sounds-in-order` → CTA: Phonics Phase 2 pack
  - A1 `/guides/what-is-phonics-phase-2` → CTA: Phonics Phase 2 pack (+ tricky words pack)
  - B1 `/guides/number-formation-1-to-20` → CTA: Numbers 1–20 pack
  - D1 `/guides/reception-readiness-checklist-uk` → CTA: Ultimate Bundle
- [x] Product pages link back via "Parents also read" (two-way internal linking)
- [x] Sitemap includes all 4 guides; noindex on checkout/cart/account/404; canonicals consistent (no trailing slash)
- [ ] Guides publish hone ke baad Search Console mein sitemap submit + 4 guide URLs par "Request indexing" (see `SEO_MONITORING.md`)
- [ ] Baad mein baqi 8 guides, phir naye intents jo Search Console mein nazar aayein
