// Static product metadata — keyed by product slug. No DB schema change.
// whats_inside bullets are written from the real seed descriptions; keep them accurate.
// use_case / how_to_use / instead are unique per product: who it's for, how a parent
// should use it, and which sibling pack to pick instead when torn. This is what keeps
// the nine product pages from reading like one template with swapped keywords.
const META = {
  "alphabet-tracing-a-z": {
    subject: "Writing", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 27,
    whats_inside: [
      "A full page for every letter A–Z — giant traceable capital and lowercase",
      "Proper UK handwriting lines on every page",
      "A starter word to trace for each letter — Apple for A, Ball for B, Cat for C",
      "Builds pencil control, letter recognition and early writing confidence",
    ],
    use_case: "The 'first writing pack' of the shop — best for 3–5 year olds who are starting to notice letters: pointing at them on signs, trying to write their name. If your child already writes most letters confidently, skip this and pick the Tricky Words or Simple Addition pack instead.",
    how_to_use: [
      "One letter a day is plenty — say the sound as they trace ('sss'), not the letter name.",
      "Finger-trace first, then a chunky crayon, then a pencil — in that order.",
      "Stick finished pages on the fridge. Pride beats pressure every time.",
      "Lost interest? Stop and come back tomorrow. Forced tracing teaches nothing.",
    ],
    instead: "scissor-skills",
    instead_label: "not ready to sit and trace yet? Cutting builds the same hand muscles first",
  },
  "numbers-1-to-20": {
    subject: "Maths", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 21,
    whats_inside: [
      "A full page for every number from 1 to 20",
      "Giant traceable numeral plus a count-the-dots activity on each page",
      "The number word to trace underneath every numeral",
      "Builds number formation, counting to 20 and one-to-one correspondence",
    ],
    use_case: "For 3–6 year olds who can count out loud but write their numerals wobbly or backwards — the classic 'I can say twenty but my 3 looks like an E' stage. If they already write 1–20 neatly, move on to Simple Addition to 10.",
    how_to_use: [
      "Count the dots out loud together before tracing — the number has to mean something first.",
      "Learn the rhymes for tricky numerals ('around the tree, around the tree, that's the way to make a 3').",
      "Five numbers a week is a good pace; revisit the wobbly ones.",
      "Spot numbers in the wild — house numbers, bus numbers — and read them together.",
    ],
    instead: "simple-addition-1-10",
    instead_label: "already writes 1–20 neatly? Time for first sums",
  },
  "phonics-phase-2": {
    subject: "Phonics", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 6,
    whats_inside: [
      "Follows the Letters & Sounds Phase 2 sequence (s a t p, i n m d…) used in UK Reception classes",
      "Letter tracing for each sound set",
      "CVC word reading practice — sat, pin, tap",
      "Sits neatly alongside Little Wandle or Read Write Inc. lessons",
    ],
    use_case: "For Reception-age children (4–5) practising the sounds their school sends home — this pack follows the sounds, not the letter names. If your child hasn't started school yet and just likes letters, the Alphabet Tracing pack is the gentler start.",
    how_to_use: [
      "Only practise the sound set your child's school is currently teaching — ask the teacher if unsure.",
      "Say sounds purely: 'sss', never 'suh'. It makes blending possible.",
      "Blend by pointing at each letter, then sweeping your finger under the word: s-a-t… sat.",
      "Two minutes of flashcards plus two minutes of blending, daily, beats a weekly marathon.",
    ],
    instead: "tricky-words-phases-2-3",
    instead_label: "already blending CVC words? The rule-breaker words come next",
  },
  "shapes-and-colours": {
    subject: "Maths", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 7,
    whats_inside: [
      "Circle, square, triangle, rectangle, star and heart",
      "Trace each shape's name, then colour the big bold shape",
      "Builds shape recognition, vocabulary and pencil control",
    ],
    use_case: "The gentlest pack in the shop — made for 3–5 year olds, and a good first-ever printable: no reading required, just tracing shape names and colouring big bold shapes. If your child already names all six shapes confidently, try Numbers 1–20 instead.",
    how_to_use: [
      "Name the shape together before any tracing — 'can you find something round in this room?'",
      "Trace the word with a finger first; the letters don't need to be perfect.",
      "Colour however they like. Staying in the lines is a Year 1 skill, not a Reception one.",
      "Cut out finished shapes and sort them into groups — now it's a maths game.",
    ],
    instead: "mini-colouring-pack",
    instead_label: "just want colouring fun with zero learning agenda?",
  },
  "simple-addition-1-10": {
    subject: "Maths", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 12,
    whats_inside: [
      "Every addition fact to 10 on its own page",
      "Counting dots under each number, a big traceable equation and handwriting lines for the answer",
      "A mixed review page at the end to show off new skills",
      "Ideal for Reception and Year 1",
    ],
    use_case: "For 4–6 year olds who count to 10 confidently and are ready for 'how many altogether?' — the first sums. Not a first maths pack: if numeral formation is still wobbly, start with Numbers 1–20 and come back here in a few weeks.",
    how_to_use: [
      "Start with real objects — 3 raisins + 2 raisins — before touching the page.",
      "Count the dots under each number out loud; the dots are the bridge to mental maths.",
      "One new fact family a day. The review page at the end shows what's stuck.",
      "Wrong answers are data, not failure — go back to objects for the tricky ones.",
    ],
    instead: "numbers-1-to-20",
    instead_label: "numerals still wobbly? Secure 1–20 first",
  },
  "tricky-words-phases-2-3": {
    subject: "Phonics", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 11,
    whats_inside: [
      "The words that can't be sounded out: the, to, I, no, go, she, was, they, said, have and more",
      "Two words per page — trace it, read it, then write it yourself",
      "Matches the Letters & Sounds tricky word lists used in UK schools",
    ],
    use_case: "For 4–6 year olds bringing home reading books — the words that make them stall mid-sentence (the, was, said). Use alongside the Phonics Phase 2 pack, not instead of it: phonics teaches the sounds, this pack teaches the rule-breakers.",
    how_to_use: [
      "Learn the look-say-cover-write-check routine: look, say it, cover, write from memory, check.",
      "Two new words a week is plenty — old ones go on the fridge for spotting.",
      "Play 'tricky word hunt': sticky notes hidden around the house to find and read.",
      "Never ask them to sound these out — that's exactly what makes them tricky.",
    ],
    instead: "phonics-phase-2",
    instead_label: "still learning the sounds themselves? Start with Phase 2",
  },
  "scissor-skills": {
    subject: "Motor skills", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 9,
    whats_inside: [
      "Dashed cutting lines from straight to zigzag, wavy, curved and spiral",
      "Green “start here” dots on every line",
      "Shapes to cut out at the end",
      "Builds hand strength and coordination — a key EYFS fine-motor skill",
    ],
    use_case: "For 3–5 year olds — and the best first pack for a child who isn't ready to sit and trace yet. Cutting builds the hand strength that makes all writing easier later. Adult supervision required, obviously, and left-handers just mirror the grip.",
    how_to_use: [
      "Thumb up in the top loop, middle finger below — demonstrate, don't just describe.",
      "Start at the green dot every time; the dots teach direction, not just cutting.",
      "Short sessions: one line a day beats a whole frustrated page.",
      "Finished cut-outs become collage material — the cutting was the point, the picture is the prize.",
    ],
    instead: "alphabet-tracing-a-z",
    instead_label: "hands strong and ready to write? Move on to letter tracing",
  },
  "mini-colouring-pack": {
    subject: "Colouring", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 7,
    whats_inside: [
      "6 bold-outline colouring pages: a cute cat, a happy dog, a sun with a rainbow, a little fish, a rainbow and a bunch of balloons",
      "Big, easy shapes perfect for little hands",
      "Great for quiet time, travel and rainy days",
    ],
    use_case: "The only pack that's pure fun — no learning objective beyond happy quiet time. Buy it for travel, restaurants and rainy afternoons. If you're after pages that teach something, every other pack in the shop does that; this one is for recharging.",
    how_to_use: [
      "Keep a few printed in the car or changing bag — boredom emergencies happen.",
      "Crayons for travel (no lids to lose), felt tips at home for the satisfying bold lines.",
      "Colour alongside them sometimes. It's relaxing for adults too.",
      "Stick the best ones up — a gallery wall costs nothing and means everything.",
    ],
    instead: "shapes-and-colours",
    instead_label: "want colouring that sneaks in some learning?",
  },
  "halloween-fun-pack": {
    subject: "Seasonal", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 12,
    whats_inside: [
      "12 spooky-fun activity pages: pumpkin tracing, ghost colouring, bat counting",
      "An easy Halloween maze, a spider-web tracing page and a masquerade mask to colour",
      "Halloween I-spy, spot-the-difference and candy-corn counting to 5",
      "Word tracing (pumpkin, ghost, witch) on UK handwriting lines, plus a mini certificate",
    ],
    use_case: "For October half-term and Halloween week — the seasonal pack that makes practice feel like play. It sneaks real skills (tracing, counting to 10, pencil control) into pages kids actually ask for. A limited-time addition: it joins the shop each autumn.",
    how_to_use: [
      "Print the maze and I-spy pages first — they're the hooks that get kids asking for more.",
      "Use the word-tracing page after the colouring pages, when hands are warmed up.",
      "The mask page doubles as a costume accessory — cut out the eyes and add string.",
      "Save the certificate for the 31st; a little ceremony goes a long way.",
    ],
    instead: "mini-colouring-pack",
    instead_label: "after Halloween? The mini colouring pack keeps the quiet-time magic going",
  },
  "ultimate-bundle": {
    subject: "Bundle", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 112,
    whats_inside: [
      "All 9 printable packs in one download — 112 pages",
      "Alphabet tracing, numbers to 20, Phase 2 phonics, tricky words, early addition, scissor skills, shapes, colouring and the Halloween fun pack",
      "The complete EYFS & KS1 home-learning kit for ages 3–6",
      "Print everything as many times as you like — no subscription, ever",
    ],
    use_case: "For parents who want the whole shelf: every pack, one download, one price — cheaper than buying any three packs separately. But be honest with yourself: if you only need help with one skill, say tricky words, buy that single pack instead. The bundle is for families who'll genuinely use most of it.",
    how_to_use: [
      "Don't print all 112 pages at once — print what your child needs this month.",
      "A sensible order: scissor skills and shapes first (ages 3–4), alphabet and numbers next, phonics and tricky words when school starts, addition last.",
      "Reprint favourites as skills grow — the same page teaches something new the second time.",
      "Keep the PDFs in one folder so you're never hunting for 'that phonics page' again.",
    ],
    instead: "",
    instead_label: "",
  },
};

const SUBJECTS = ["Phonics", "Maths", "Writing", "Motor skills", "Colouring"];
const AGE_GROUPS = ["3–4", "4–5", "5–6"];

module.exports = { META, SUBJECTS, AGE_GROUPS };
