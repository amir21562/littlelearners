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
  "phonics-phase-3": {
    subject: "Phonics", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 16,
    whats_inside: [
      "All 26 Phase 3 graphemes in Letters & Sounds teaching order — j, v, w, x through to er",
      "Big traceable letters on UK handwriting lines with a picture word for every sound",
      "Consonant digraphs (qu, ch, sh, th, ng) and vowel digraphs (ai, ee, igh, oa, oo, ar, or, ur, ow, oi, ear, air, ure, er)",
      "A tricky-words recap page, blending ladders and a Phase 3 completion certificate",
    ],
    use_case: "For 4–6 year olds who know their Phase 2 sounds and are ready for the next step — the digraphs UK Reception classes teach next. If Phase 2 letter sounds are still wobbly, start with the Phase 2 pack first; Phase 3 builds directly on it.",
    how_to_use: [
      "Follow the page order — it matches the Letters & Sounds teaching sequence schools use.",
      "Trace the new sound first, say the picture word, then read the 'now read' words at the bottom.",
      "Use the blending ladders page daily for a week — sound out slowly, then say the whole word fast.",
      "Grown-ups: say pure sounds ('sss' not 'suh') — the pack reminds you on every page.",
    ],
    instead: "tricky-words-phases-2-3",
    instead_label: "still tripping on common words? The tricky words pack fixes that",
  },
  "dot-marker-alphabet-numbers": {
    subject: "Motor skills", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 14,
    whats_inside: [
      "Big hollow bubble letters A–Z to fill with dot markers — 4 letters per page",
      "Bubble numerals 1–10 with count-and-dab dot rows and the number word",
      "A colour-dabbing page (dab red, blue, green, yellow — colour names labelled for B&W printing)",
      "AB pattern pages to continue with dots, plus a 'Great dotting!' certificate",
    ],
    use_case: "For 3–5 year olds who love making marks but aren't ready for careful tracing — dotting builds the same hand control with zero frustration. The trending format for a reason: one dab per circle is instantly satisfying, and the pages survive enthusiastic printing in black and white.",
    how_to_use: [
      "Any dot markers or bingo dabbers work — one colour per page keeps it calm, or go rainbow.",
      "Say the letter sound with each dab: 'sss' as they dot the S — phonics smuggled into art.",
      "Do the colour page first if they're new to dabbers; it's the easiest win.",
      "Finished pages make great wrapping paper — grandparents love receiving them.",
    ],
    instead: "alphabet-tracing-a-z",
    instead_label: "ready for proper letter formation? Move on to alphabet tracing",
  },
  "christmas-fun-pack": {
    subject: "Seasonal", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 12,
    whats_inside: [
      "A Christmas tree to trace and decorate, plus bauble colouring with colour-name labels",
      "Count-the-presents to 10, Christmas I-spy and a reindeer maze",
      "Word tracing (santa, star, gift) on UK handwriting lines",
      "Decorate-the-stocking, spot-the-difference, snowflake colouring and a guided letter to Santa",
    ],
    use_case: "For 3–6 year olds in the festive mood — December learning that doesn't feel like learning. The I-spy and counting pages sneak in early maths, the tracing pages keep handwriting practice going through the holidays, and the letter to Santa is the one every child actually wants to do.",
    how_to_use: [
      "Start with the letter to Santa — it motivates everything else.",
      "The I-spy page is a great quiet-time activity while you're wrapping presents.",
      "Colour the baubles together and talk about the colour names as you go.",
      "Everything prints in black and white — the colour names are labelled, not colour-dependent.",
    ],
    instead: "halloween-fun-pack",
    instead_label: "missed October? The Halloween fun pack works any spooky day",
  },
  "first-mazes-pack": {
    subject: "Motor skills", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 12,
    whats_inside: [
      "2 follow-the-path pages for little hands (trace the dotted line)",
      "8 proper mazes from easy 4×4 grids up to tricky 8×8 with dead ends",
      "A story on every page: bee to flower, bunny to carrot, rocket to planet",
      "Maze Champion certificate to celebrate at the end",
    ],
    use_case: "For 3–6 year olds who love a challenge — mazes are pencil-control practice disguised as play. Start the youngest on the follow-the-path pages, let confident 5–6 year olds tackle the 8×8. Every maze builds concentration and problem-solving alongside hand control.",
    how_to_use: [
      "Do the pages in order — the difficulty builds gently from Level 1 to Level 10.",
      "Let them trace with a finger first, then a crayon — it builds confidence.",
      "Bumping into dead ends is the point: don't show them the route, let them find it.",
      "Print favourites again — mazes are even better the second time, when they remember the trick.",
    ],
    instead: "scissor-skills",
    instead_label: "want more hands-on practice? Try the scissor skills pack",
  },
  "colour-by-number-1-to-10": {
    subject: "Colouring", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 12,
    whats_inside: [
      "10 colour-by-number pictures: fish, flower, butterfly, apple, sun, house, rocket, boat, cat and rainbow",
      "Each picture split into numbered squares with a colour key (numbers 1–10)",
      "Pixel-art style — the picture appears like magic as they colour",
      "Colour by Number Star certificate to celebrate at the end",
    ],
    use_case: "For 3–6 year olds who love colouring with a purpose — colour by number turns a free colouring session into number recognition practice. Younger children work on matching and fine motor control; older ones get confident with numbers to 10 while producing pictures they're proud to display.",
    how_to_use: [
      "Start with the fish or apple — fewer colours, quicker wins.",
      "Colour one number at a time across the whole picture: it's counting practice in disguise.",
      "Read the colour names together — it's vocabulary work too.",
      "Display finished pictures — the 'reveal' moment is the motivation.",
    ],
    instead: "mini-colouring-pack",
    instead_label: "prefer free colouring? Try the mini colouring pack",
  },
  "nursery-rhymes-pack": {
    subject: "Rhymes", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 12,
    whats_inside: [
      "10 classic nursery rhymes: Twinkle Twinkle, Baa Baa Black Sheep, Humpty Dumpty, Incy Wincy Spider and more",
      "A colouring illustration for every rhyme",
      "First words to trace in grey on each page — early writing woven into rhyme time",
      "Rhyme Time Star certificate to celebrate at the end",
    ],
    use_case: "For 3–6 year olds who learn through rhythm and repetition — nursery rhymes are one of the strongest predictors of later reading success, and this pack turns rhyme time into a three-step routine: sing it, colour it, trace the first words. Younger children join in with the singing and colouring; older ones trace and start recognising the words they sing.",
    how_to_use: [
      "Sing the rhyme together first — the rhythm is the memory hook.",
      "Colour the illustration while chatting about the story: why did Humpty fall?",
      "Trace the grey words, then say each one out loud — connecting print to speech.",
      "Revisit favourites weekly — repetition is where the language learning happens.",
    ],
    instead: "mini-colouring-pack",
    instead_label: "just want colouring? Try the mini colouring pack",
  },
  "cvc-word-families": {
    subject: "Phonics", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 12,
    whats_inside: [
      "10 activity pages covering all five short vowels: a, e, i, o, u",
      "Read-and-trace pages for cat, pen, pig, dog, sun and 15 more CVC words",
      "Missing-vowel puzzles, circle-the-word listening games and unscrambling",
      "Word-matching pages that build visual word recognition",
      "CVC Word Star certificate to celebrate at the end",
    ],
    use_case: "For 4–6 year olds who know their letter sounds and are ready to read real words. CVC words (consonant-vowel-consonant, like cat and dog) are the first words children can truly decode — each letter makes one sound, so blending actually works. This pack turns that breakthrough moment into ten pages of satisfying practice. If your child is still learning single letter sounds, start with the Phase 2 phonics pack first.",
    how_to_use: [
      "Work through one vowel at a time — short 'a' first, then e, i, o, u in order.",
      "Always read the word aloud before tracing: say the sounds, blend them, then trace.",
      "For circle-the-word pages, you read the word and your child listens and circles — it's a listening game, not a test.",
      "Unscramble pages are hardest — do them together the first time, then let them try solo.",
    ],
    instead: "phonics-phase-2",
    instead_label: "still on letter sounds? Start with Phase 2 phonics",
  },
  "ultimate-bundle": {
    subject: "Bundle", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 202,
    whats_inside: [
      "All 16 printable packs in one download — 202 pages",
      "Alphabet tracing, numbers to 20, Phase 2 phonics, Phase 3 phonics, tricky words, early addition, scissor skills, shapes, colouring, dot marker fun, Halloween, Christmas, first mazes, colour by number, nursery rhymes and CVC word families",
      "The complete EYFS & KS1 home-learning kit for ages 3–6",
      "Print everything as many times as you like — no subscription, ever",
    ],
    use_case: "For parents who want the whole shelf: every pack, one download, one price — cheaper than buying any three packs separately. But be honest with yourself: if you only need help with one skill, say tricky words, buy that single pack instead. The bundle is for families who'll genuinely use most of it.",
    how_to_use: [
      "Don't print all 202 pages at once — print what your child needs this month.",
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
