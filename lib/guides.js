// Guides data — topical authority pillars + articles.
// One search intent = one article. No keyword stuffing, no fake claims.
// Schema (see GUIDES_CONTENT_README.md):
// { slug, pillar, title (<=43 chars; "| LittleLearners" is appended),
//   summary (<=155 chars, used as meta description), minutes, draft?,
//   products [product slugs for the CTA box], answer (40-60 words, AEO box),
//   sections [{ h, body [paragraphs], list? [bullets] }], faqs [[q, a]...] }
const PILLARS = [
  {
    slug: "phonics",
    title: "Phonics & Early Reading",
    icon: "🔤",
    desc: "Letters & Sounds Phase 2, tricky words and blending — how UK schools teach children to read, explained for parents.",
  },
  {
    slug: "early-maths",
    title: "Early Maths",
    icon: "🔢",
    desc: "Number formation, counting to 20 and first steps in addition — matched to Reception and Year 1 expectations.",
  },
  {
    slug: "writing-skills",
    title: "Writing & Fine Motor Skills",
    icon: "✏️",
    desc: "Pencil grip, pre-writing patterns, letter formation and scissor skills — the physical foundations of writing.",
  },
  {
    slug: "school-readiness",
    title: "School Readiness",
    icon: "🎒",
    desc: "Practical checklists and calm daily routines to prepare your 3–6 year old for Reception.",
  },
];

const GUIDES = [
  {
    slug: "phase-2-sounds-in-order",
    pillar: "phonics",
    title: "Phase 2 Phonics Sounds in Order",
    summary:
      "Phase 2 sounds in teaching order — all five sets with pure-sound pronunciation tips, first blending words and a 5-minute daily routine.",
    minutes: 8,
    products: ["phonics-phase-2"],
    answer:
      "Phase 2 teaches five sound sets in order: Set 1 – s, a, t, p; Set 2 – i, n, m, d; Set 3 – g, o, c, k; Set 4 – ck, e, u, r; Set 5 – h, b, f, ff, l, ll, ss. Say sounds purely ('sss', not 'suh') so your child blends them into words like sat, pin and tap.",
    sections: [
      {
        h: "The five Phase 2 sets, in teaching order",
        body: [
          "Schools teach the sounds in a fixed order, and the order is clever: the first four sounds alone — s, a, t, p — are enough to build real words (sat, pat, tap, at, a). That means children start reading within days, which keeps them motivated.",
          "The usual pace is one set per week, so the whole phase takes about six weeks including a revision week. It runs in the autumn term of Reception, starting in the first weeks of school.",
        ],
        list: [
          "Set 1: s, a, t, p — first words to try: sat, pat, tap, at, a",
          "Set 2: i, n, m, d — first words to try: pin, mat, sit, nip, dip, in",
          "Set 3: g, o, c, k — first words to try: got, cat, kit, cot, dog",
          "Set 4: ck, e, u, r — first words to try: sock, pen, run, red, duck (ck only ever ends a word)",
          "Set 5: h, b, f, ff, l, ll, ss — first words to try: hat, fun, bell, hiss, puff",
        ],
      },
      {
        h: "Say it purely: the mistake almost every parent makes",
        body: [
          "This is the single most useful thing in this guide. When adults sound out letters, we almost always add an extra 'uh': 'suh', 'muh', 'tuh'. Do that in front of your child and 'sat' becomes 'suh-ah-tuh' — three extra sounds that make blending nearly impossible.",
          "Instead, say each sound purely. Some sounds stretch: sss, mmm, nnn, fff, lll, rrr. Let them hiss and hum for as long as you like. The rest are short, bouncy sounds — say them as crisply as you can: t, p, d, g, c, k, b, h. Think of them as tiny taps, not 'tuh' and 'puh'.",
          "Vowels are short and quick: a as in apple, e as in egg, i as in insect, o as in orange, u as in umbrella.",
          "If your child is already saying 'cuh-ah-tuh', don't correct them mid-word — just model it back the pure way, sweeping your finger under the letters: 'c-a-t… cat'. They will copy you within days.",
        ],
        list: [
          "s — hiss: ssss (not 'suh')",
          "a — a as in apple (not 'ay')",
          "t — tiny tap: t (not 'tuh')",
          "p — lip pop: p (not 'puh')",
          "i — i as in insect",
          "n — hum: nnnn (not 'nuh')",
          "m — hum: mmmm (not 'muh')",
          "d — tap: d (not 'duh')",
          "g — g as in go (not 'guh')",
          "o — o as in orange",
          "c, k, ck — short 'k' at the back of the throat (not 'kuh'); ck only ever ends a word",
          "e — e as in egg",
          "u — u as in umbrella",
          "r — growl: rrr (not 'ruh'; rolled or smooth, both are fine)",
          "h — breathy h (not 'huh')",
          "b — tap: b (not 'buh')",
          "f, ff — blow: ffff (not 'fuh')",
          "l, ll — sing: llll (not 'luh')",
        ],
      },
      {
        h: "A picture keyword for every sound",
        body: [
          "A keyword picture gives each sound a hook in your child's memory — this is why classrooms have a snake on the wall for 's'. When your child hesitates, the picture does the reminding, not you.",
          "You don't need anything fancy: draw them, cut them from magazines, or just name them in a game ('I spy something that starts with mmm').",
        ],
        list: [
          "s — snake (ssss), a — apple (a-a-apple), t — tiger (t-t-tiger), p — popcorn (p-p-pop)",
          "i — insect (i-i-insect), n — nest (nnn), m — moon (mmm), d — dog (d-d-dog)",
          "g — goat (g-g-goat), o — orange (o-o-orange), c — cat (c-c-cat), k — kite (k-k-kite)",
          "ck — duck (hear it at the end: du-ck), e — egg (e-e-egg), u — umbrella (u-u-up), r — rabbit (rrr)",
          "h — hat (h-h-hat), b — ball (b-b-ball), f — fish (ffff), l — lion (llll)",
          "ff, ll and ss are simply double spellings of f, l and s — same sound, same keyword",
        ],
      },
      {
        h: "Blending: turning sounds into first words",
        body: [
          "Blending is the whole point of Phase 2: pushing sounds together to read. s-a-t becomes 'sat'. It looks like magic the first time a child does it, but it is a teachable skill.",
          "Start with words made only from sounds your child already knows — there is no point handing them 'ship' when they haven't met 'sh'. Point to each letter as they say its sound, then sweep your finger under the whole word and say it a little faster each time: 's…a…t, sat'.",
          "Magnetic letters on the fridge work brilliantly: build 'pin', let them blend it, then swap the p for a t and watch their face when they read 'tin'.",
          "Keep it playful and stop before frustration sets in. Five successful blends beat twenty tearful ones.",
        ],
      },
      {
        h: "The tricky words of Phase 2",
        body: [
          "Most Phase 2 words can be sounded out — but a few can't, and children meet them constantly in early books. The original Letters and Sounds programme lists five tricky words for Phase 2: the, to, I, no, go.",
          "You may see six on some lists, with 'into' added. That is not a mistake — some phonics schemes teach it here too. If your school's list has six, learn six.",
          "Because these words break the sounding-out rules, children learn them by sight: look at the word, say it, cover it, write it, check it. A 'tricky word hunt' — sticky notes hidden around the house — turns the dullest part of phonics into a game.",
        ],
      },
      {
        h: "A 5-minute-a-day routine that actually works",
        body: [
          "Short and daily beats long and occasional — every teacher will tell you this. Here is a routine that fits between tea and bath:",
        ],
        list: [
          "2 minutes: flashcards — show each known sound and your child says it purely. Shuffle the order so they are reading, not reciting.",
          "2 minutes: blend five words from the current set. Point, sweep, read.",
          "1 minute: write or trace the newest sound while saying it — hand and voice together.",
          "Stop while it is still fun. Tomorrow the sounds will be stronger for it.",
        ],
      },
      {
        h: "What if my school's order looks slightly different?",
        body: [
          "The order above is the classic DfE Letters and Sounds sequence from 2007, and it is what most parent guides show. But most English schools now teach a DfE-validated phonics scheme — Little Wandle, Read Write Inc. or Twinkl Phonics — and these group a few sounds slightly differently (the double letters ff, ll and ss are often taught in their own groups, for example).",
          "The sounds themselves are identical; only the grouping changes. For homework, always follow your school's order. Use this guide to understand what is happening and how to help.",
        ],
      },
      {
        h: "Keep it short, keep it fun, keep it daily",
        body: [
          "Phase 2 lasts about six weeks, but the habits it builds — pure sounds, daily practice, blending with confidence — carry your child through every phase that follows. You don't need special training to help; you just need the right order, the right sounds, and five minutes a day.",
          "If you would like the whole phase as print-and-go practice pages — every sound with tracing, keywords and blending words — our Phase 2 pack covers all five sets in pages you can print as many times as you like.",
        ],
      },
    ],
    faqs: [
      ["How long does Phase 2 take?", "About six weeks — roughly one sound set per week — taught in the autumn term of Reception (ages 4–5). Schools usually start in the first weeks of September and finish around the October half-term."],
      ["Should I teach letter names like 'ay, bee, cee' as well?", "Not during Phase 2. Letter names come later, and mixing them in now confuses blending. If your child already knows them, that's fine — just use sounds ('mmm') when you're practising phonics."],
      ["What if my child just can't blend?", "Step back from letters entirely and play oral blending games: 'I'm thinking of an animal: d…o…g.' Clap the sounds, stretch them, be silly with it. Once blending clicks by ear, the printed letters follow quickly."],
      ["How many tricky words are there in Phase 2?", "Five in the original Letters and Sounds programme: the, to, I, no, go. Some schools and schemes add 'into', making six. Learn whichever list your child's school sends home."],
      ["Is the Phase 2 order the same in every UK school?", "The classic DfE order on this page is the most widely shown, but schools using Little Wandle, Read Write Inc. or Twinkl Phonics group a few sounds slightly differently. The sounds are the same either way — follow your school's order for homework."],
      ["When should we start practising at home?", "As soon as the school sends the first sound set home — usually within the first couple of weeks of Reception. Before that, Phase 1-style listening games (rhymes, 'I spy', clapping syllables) are the perfect preparation."],
    ],
  },
  {
    slug: "what-is-phonics-phase-2",
    pillar: "phonics",
    title: "What Is Phonics Phase 2? (UK)",
    summary:
      "Phase 2 phonics explained for UK parents: what children learn in Reception, when it's taught, the full phase timeline and 5 things to do at home.",
    minutes: 7,
    products: ["phonics-phase-2", "tricky-words-phases-2-3"],
    answer:
      "Phase 2 is the stage of the Letters and Sounds phonics programme where Reception children (age 4–5) learn letter-sounds across the autumn term and begin blending them to read simple words like 'cat', 'pin' and 'dog'. It follows Phase 1 (listening and sound games in nursery) and leads into Phase 3 digraphs such as 'sh' and 'ch'.",
    sections: [
      {
        h: "What your child actually learns in Phase 2",
        body: [
          "Phase 2 is where reading begins. In Phase 1 (nursery), your child played listening games — rhymes, alliteration, hearing the sounds in words. Phase 2 adds the letters: children learn the sounds in five sets and, crucially, what to do with them.",
          "Three skills, in this order: recognising each sound, blending sounds together to read words (s-a-t becomes 'sat'), and segmenting words into sounds for early spelling (hearing 'dog' and splitting it into d-o-g). A handful of tricky words — the, to, I, no, go — joins the mix because they turn up in almost every early reading book.",
          "By the end of the phase, most children can read simple consonant-vowel-consonant words like cat, pin and dog — and have a go at writing them too.",
        ],
      },
      {
        h: "When it happens",
        body: [
          "Phase 2 starts in the first weeks of Reception (age 4–5) and runs through the autumn term — about six weeks, roughly one sound set per week. If your child started school in September 2026, expect Phase 2 to run until around the October half-term.",
          "Your child's teacher will send home the current sound set — often as a sheet or on the school app. That sheet is the single most useful thing to practise: it tells you exactly which sounds are live right now.",
          "Don't be tempted to race ahead through all five sets at home. Schools introduce them in a deliberate order, and practising the current set deeply beats skimming all of them thinly.",
        ],
      },
      {
        h: "The full phonics journey: Phases 1 to 6",
        body: [
          "Phase 2 is one stop on a longer journey. Here is the whole map, so you can see where your child is and what's coming:",
        ],
        list: [
          "Phase 1 (Nursery, ages 3–4): listening skills — rhyme, rhythm, alliteration, hearing sounds in spoken words. No letters yet.",
          "Phase 2 (Reception, autumn term): first letter-sounds in five sets, blending and segmenting CVC words, five tricky words.",
          "Phase 3 (Reception, spring term, about 12 weeks): the remaining letters (j, v, w, x, y, z, zz, qu) plus digraphs and trigraphs — ch, sh, th, ng, ai, ee, igh, oa, oo.",
          "Phase 4 (Reception, summer term): no new sounds — longer words with adjacent consonants, like tent, clap and string.",
          "Phase 5 (Year 1, all year): alternative spellings for the same sounds (ai, ay and a-e all say 'ay'), ending with the phonics screening check in June.",
          "Phase 6 (Year 2): spelling rules, prefixes and suffixes — phonics becomes spelling.",
        ],
      },
      {
        h: "Phonics buzzwords, decoded",
        body: [
          "Teachers — and school letters — use a handful of terms that baffle most parents. Here is the whole glossary in plain English:",
        ],
        list: [
          "Phoneme — the smallest unit of sound in a word. 'Cat' has three phonemes: c-a-t. English has 44.",
          "Grapheme — the letter or letters that spell a sound. 'Sh' is two letters but one grapheme.",
          "Blend — pushing sounds together to read: c-a-t becomes 'cat'.",
          "Segment — splitting a word into its sounds in order to spell it: 'dog' becomes d-o-g.",
          "Digraph — two letters making one sound: ch, sh, th, ng.",
          "Trigraph — three letters making one sound: igh (night), ear (hear).",
          "Tricky word — a word that can't be sounded out yet, like 'the' or 'said'. Children learn these by sight.",
          "CVC word — consonant-vowel-consonant: cat, pin, dog. The first words children read.",
        ],
      },
      {
        h: "5 things you can do at home this week",
        body: [
          "You don't need to 'teach phonics' — you just need to back up what school is doing. Five things that genuinely help during Phase 2:",
        ],
        list: [
          "Use pure sounds. Say 'mmm' not 'muh', 'sss' not 'suh'. This one change makes blending dramatically easier.",
          "Play oral blending games with no letters at all: 'I'm thinking of a colour: r…e…d.' Do it in the car, in the queue, at bath time.",
          "Practise only the school's current sound set. Ten focused minutes on this week's sounds beats an hour on all of them.",
          "Trace while you say. Writing or tracing a letter while saying its sound wires the learning in twice as fast — hand and voice together.",
          "Keep reading to them. Being read to is still the biggest driver of reading success at this age — stories build the vocabulary and love of books that phonics alone can't.",
        ],
      },
      {
        h: "Phase 2 and the Year 1 phonics screening check",
        body: [
          "You've probably heard other parents mention 'the phonics check'. It is a short statutory assessment in June of Year 1, where children read 40 words — a mix of real and made-up words — to a teacher. It checks that phonics teaching is working.",
          "Phase 2 is the foundation it all rests on: the blending habit your child builds now is exactly what the check measures later. There is nothing to practise for and nothing to worry about — just keep the daily blending playful and the rest follows.",
        ],
      },
      {
        h: "If your school seems to do it differently",
        body: [
          "Most English schools now follow a DfE-validated phonics scheme — Little Wandle Letters and Sounds Revised, Read Write Inc. and Twinkl Phonics are the big three. They teach the same sounds in a very similar order, but group a few slightly differently and use their own tricky-word lists.",
          "So if your school's 'set 2' doesn't match a list you found online, nobody is wrong — just follow your school's sequence for homework, and use guides like this one for the bigger picture.",
        ],
      },
      {
        h: "You're already doing the most important part",
        body: [
          "Here is the reassuring truth about Phase 2: the parents who help most aren't the ones who drill flashcards for an hour — they're the ones who chat, read, rhyme and play with sounds for a few minutes every day. If you're reading this guide, you're already that parent.",
          "When you're ready for print-and-go practice — every Phase 2 sound with tracing pages, keywords and blending words matched to the five sets — our Phase 2 phonics pack has the whole phase ready to print.",
        ],
      },
    ],
    faqs: [
      ["When is Phase 2 taught?", "In the autumn term of Reception (ages 4–5), starting in the first weeks of school and lasting about six weeks — roughly one sound set per week, finishing around the October half-term."],
      ["What's the difference between Phase 2 and Phase 3?", "Phase 2 teaches single-letter sounds (plus ck, ff, ll, ss) and first blending. Phase 3, in the spring term of Reception, teaches the remaining letters and digraphs — two-letter sounds like ch, sh, th and ng — plus long vowel sounds like ai, ee and igh."],
      ["Does my child need to know Phase 2 before starting school?", "No. Schools teach it from scratch in Reception. The best preparation is Phase 1-style play: nursery rhymes, 'I spy', clapping out syllables, and being read to every day."],
      ["What if my child already knows all the Phase 2 sounds?", "Focus on blending longer words and reading simple captions, and check with the teacher before racing into Phase 3 sounds. Deep, confident blending matters more than speed."],
      ["I learned to read differently — how can I help?", "The one thing to relearn is pure sounds: 'mmm' not 'muh', 'sss' not 'suh'. Everything else — reading together, rhyming games, chatting — works exactly as it always has."],
      ["Will my child be tested on Phase 2?", "Not formally. Teachers assess phonics continuously through daily practice — listening to children read and blend — and use what they hear to decide who needs extra support. The first formal check is the Year 1 phonics screening in June, a year and a half later."],
    ],
  },
  {
    slug: "number-formation-1-to-20",
    pillar: "early-maths",
    title: "Number Formation 1-20: EYFS Guide",
    summary:
      "Number formation the UK-school way: the 0-9 rhymes teachers use, pencil grip stages by age, why reversals are normal, and how 11-20 build on 0-9.",
    minutes: 7,
    products: ["numbers-1-to-20"],
    answer:
      "Number formation means writing each numeral the same way every time, so numbers stay legible. It is a handwriting habit — not an EYFS requirement. The rhymes UK teachers use most include: 0 — 'around and round and round we go'; 1 — 'start at the top and down we run'; 2 — 'around and back on the railroad track'.",
    sections: [
      {
        h: "What number formation actually is (and isn't)",
        body: [
          "Number formation is the habit of writing each numeral the same way every time. Same start point, same direction, same strokes — so every 3 looks like a 3 and every 7 looks like a 7.",
          "Here is the part nobody tells parents: number formation is not in the EYFS statutory framework. The early learning goals cover understanding of number and correct letter formation — numeral handwriting is a classroom habit schools teach for legibility, not a box your child must tick.",
          "That matters because there is no single 'correct' stroke order handed down from on high. Schools choose a method — usually with rhymes — and the golden rule is to match your child's school, not a random worksheet.",
        ],
      },
      {
        h: "The 0-9 rhymes UK teachers actually use",
        body: [
          "The set below is the widely-shared version used by many UK primary schools. Wordings vary between schools — always check which set your child's school uses — but these are the rhymes behind thousands of classroom displays:",
        ],
        list: [
          "0 — 'Around and round and round we go, when we get home we have a zero.'",
          "1 — 'Start at the top and down we run, that's the way we make a one.'",
          "2 — 'Around and back on a railroad track, two, two, two.'",
          "3 — 'Around the tree and around the tree, that's the way we make a three.'",
          "4 — 'Down and over, down some more, that's the way we make a four.' (Lift the pencil between strokes.)",
          "5 — 'Down and around, then a flag on high, that's the way we make a five.' (Lift the pencil for the flag.)",
          "6 — 'Down we go and make a loop, number six makes a hoop.' (Underline it while learning, so it never becomes a 9.)",
          "7 — 'Across the sky and down from heaven, that's the way we make a seven.'",
          "8 — 'Make an 's' and do not wait, when it's joined up you have an eight.'",
          "9 — 'Make a loop and then a line, that's the way we make a nine.' (Underline it too — the twin of 6.)",
          "Say the rhyme aloud while your child writes — the words pace the hand.",
        ],
      },
      {
        h: "From 0-9 to 11-20: teens are just pairs",
        body: [
          "Master 0-9 first. Every teen is simply two known digits side by side: 13 is '1' then '3'. The new skill is saying the digits in order and writing left to right.",
          "Count it, say it, write it: 'thirteen — one, three.' Point to each digit as you say it.",
          "The tricky bit: teens don't sound like they look — fourteen isn't 'four-ten'. Say the number, then name the digits, and the connection builds with repetition.",
        ],
      },
      {
        h: "Pencil grip: what's normal at each age",
        body: [
          "Grip develops in stages, and a proper tripod grip is not expected at three. This sequence comes from NHS paediatric occupational therapy guidance:",
        ],
        list: [
          "Age 1-2: palmar supinate — whole fist around the crayon, the arm doing the work.",
          "Age 2-3: digital pronate — fingers point down at the crayon, wrist straighter.",
          "Age 3-4: static quadripod — four fingers hold the crayon, the hand moves as a unit.",
          "Age 4-6: static tripod — thumb and two fingers in the classic tripod, hand still moving as one.",
          "Age 5-7 and beyond: dynamic tripod — the fingers start moving the pencil independently. This is the mature grip.",
          "Don't force a tripod at three. Strengthen the hands instead: playdough, threading beads, tweezers and climbing all build the muscles writing needs.",
        ],
      },
      {
        h: "Reversed 2s and 5s? Completely normal",
        body: [
          "Mirror writing — backwards 2s, 3s and 5s, or 6/9 mix-ups — is a normal developmental stage up to around age seven. It is not, on its own, a sign of dyslexia.",
          "Gentle fixes that work: underline 6 and 9 every time (a trick many schools use), write the tricky numeral large with a starting dot, and model it once rather than rubbing it out five times.",
          "If reversals persist heavily past seven or eight alongside other reading difficulties, mention it to the teacher. At four, five or six — relax.",
        ],
      },
      {
        h: "When to start (and what comes before numbers)",
        body: [
          "Follow your child's interest, not a timetable. Before numerals, children need pre-writing patterns: vertical and horizontal lines, circles, crosses, zigzags and curves.",
          "Go big before small: chalk on the patio, a paintbrush and water on the fence, finger-tracing in sand or shaving foam. Big shoulder movements build the control that small pencil work needs.",
          "Five minutes of patterns beats twenty minutes of tearful number-tracing. When the patterns flow, the numerals follow.",
        ],
      },
      {
        h: "Make it stick: five ways to practise",
        body: [
          "Formation improves with short, frequent practice — not marathon sessions. Five approaches that work:",
        ],
        list: [
          "Say it as you write it. The rhyme paces the hand — chanting aloud is the single most effective trick.",
          "Start big. Whiteboard markers, chalk on the patio and finger-tracing in sand build the movement before pencil on paper.",
          "Use starting dots. A dot where the pencil begins removes half of all formation errors overnight.",
          "Little and often. Five minutes a day beats a weekly worksheet battle.",
          "Celebrate the readable ones. Circle the best-formed numeral on the page and say why — children repeat what gets noticed.",
        ],
      },
      {
        h: "Match your child's school",
        body: [
          "Because rhyme sets and stroke orders vary, the school's way wins. Ask the teacher which rhymes they use — many schools send a formation sheet home in Reception.",
          "Our numbers pack uses the widely-shared rhyme set above, with one page per numeral and starting dots, so home practice matches what most UK classrooms teach.",
        ],
      },
      {
        h: "Legible, not perfect",
        body: [
          "The goal of number formation is modest and kind: numbers other people can read. Rhymes, starting dots and a little daily practice get you there — no drilling, no tears, no race.",
          "If you'd like every numeral 1-20 as print-and-trace pages with starting dots and rhymes, our Numbers 1-20 pack has twenty pages ready to print.",
        ],
      },
    ],
    faqs: [
      ["Does my child need to write numbers before starting Reception?", "No. Number formation is not an EYFS requirement — the early learning goals focus on understanding number, not handwriting numerals. Schools introduce formation in Reception, and pre-writing patterns (lines, circles, zigzags) are the best preparation."],
      ["My child writes 3 backwards. Is that normal?", "Yes — mirror writing is a normal developmental stage up to around age seven and is not, on its own, a sign of dyslexia. Gently model the correct way, underline 6 and 9 to tell them apart, and don't make a battle of it."],
      ["What is the correct pencil grip for a 4-year-old?", "At four, most children use a static tripod or quadripod grip — and that's exactly right for their age. The mature dynamic tripod grip develops around 5-7. Build hand strength with playdough, threading and climbing rather than forcing finger positions."],
      ["Should we learn 1-20 or 0-9 first?", "0-9 first, always. Every teen is just two known digits written side by side, so secure single digits before combining them. Count to 20 out loud as much as you like — but write 0-9 until they're automatic."],
      ["Our school uses different rhymes. Does it matter?", "Use the school's. Rhyme sets vary between schools and none is officially 'correct' — what matters is one consistent method. Ask the teacher for their formation sheet and practise that."],
    ],
  },
  {
    slug: "reception-readiness-checklist-uk",
    pillar: "school-readiness",
    title: "Reception Readiness Checklist UK",
    summary:
      "No test, no pass mark: the honest Reception readiness checklist — the 2025 Starting Reception definition, school-age facts and the first six weeks.",
    minutes: 8,
    products: ["ultimate-bundle"],
    answer:
      "There is no official Reception readiness test and no pass mark — your child does not need to read, write their name or count to 20. The 2025 Starting Reception definition focuses on four areas: growing independence, building relationships and communicating, physical development, and healthy routines.",
    sections: [
      {
        h: "First, the headline: there is no test",
        body: [
          "Your child does not need to read, write their name or count to 20 to start Reception. There is no official readiness checklist, no entry test and no pass mark — the DfE sets no readiness requirements at all.",
          "Yet the expectation gap is real: press coverage of the 2025 Starting Reception definition reported that around 90% of parents believe their child is ready, while teachers say only about one in three arrive with the skills they'd hope for. The gap isn't about cleverness — it's about which skills actually matter.",
        ],
      },
      {
        h: "The one definition that exists: Starting Reception (2025)",
        body: [
          "In 2025, a coalition of early-years organisations — including the National Day Nurseries Association, the Early Years Alliance and the Confederation of School Trusts — published the first shared definition of school readiness, endorsed at launch by the then Education Secretary. It is guidance to practise, explicitly not a test to pass.",
          "It names four areas:",
        ],
        list: [
          "Growing independence — getting dressed, using the toilet, eating a meal, putting on shoes.",
          "Building relationships and communicating — taking turns, naming feelings, following simple instructions, asking an adult for help.",
          "Physical development — climbing, jumping, using scissors, around three hours of physical activity a day.",
          "Healthy routines — a regular bedtime, brushing teeth twice a day, sensible limits on screen time.",
        ],
      },
      {
        h: "The everyday checklist (in plain English)",
        body: [
          "Translated into a school morning, readiness looks like this:",
        ],
        list: [
          "Uses the toilet independently and washes hands.",
          "Puts on and takes off a coat, and manages shoes (Velcro is fine — truly).",
          "Eats lunch with cutlery, and opens their own lunchbox and water bottle.",
          "Asks an adult for help instead of crying or withdrawing.",
          "Listens for a few minutes at carpet time and follows a two-step instruction.",
          "Takes turns and tidies up — roughly, not perfectly.",
          "Recognises their own name (reading it comes later; writing it is a Reception skill, not an entry requirement).",
          "None of these needs to be perfect. 'Mostly, with reminders' is ready enough.",
        ],
      },
      {
        h: "What they do NOT need",
        body: [
          "Some school welcome packs read like job applications: 'write my own name', 'blend CVC words', 'count to 10'. Those describe where children get to by the end of Reception, not what they need on day one.",
          "They do not need to: read anything, write their name, count to 20, sit still for an hour, or know their phonics phases. If your child can do some of these — lovely. If not — completely normal.",
        ],
      },
      {
        h: "When do children start? Ages, deferral and summer-born rights",
        body: [
          "Most children start Reception full-time in the September after their fourth birthday. But compulsory school age — the point you legally must send them — is the term after their fifth birthday (the prescribed dates are 31 December, 31 March and 31 August).",
          "Until then, you can request deferral or part-time attendance. Parents of summer-born children (born 1 April to 31 August) can ask for Reception entry at age five instead of going straight into Year 1 — the School Admissions Code covers this.",
          "One consequence: a single Reception class can span nearly twelve months of age. The youngest summer-born four-year-old and the oldest autumn-born nearly-five-year-old are doing the same year. If your child seems 'behind' a classmate, check the birthdays first.",
        ],
      },
      {
        h: "The first six weeks: the baseline assessment, explained",
        body: [
          "There IS a statutory assessment in the first six weeks — the Reception Baseline Assessment, in place since September 2021. Here's what it is and isn't:",
        ],
        list: [
          "It is a short set of practical tasks with a teacher — not a written test.",
          "There is no pass mark, and no score is shared with you or used to label your child.",
          "Your child should not even realise they are being assessed.",
          "The DfE uses it only for school-level progress measures at the end of Key Stage 2.",
          "Your child needs no preparation. There is nothing to revise for.",
        ],
      },
      {
        h: "When to talk to someone — and when to relax",
        body: [
          "Relax about: wobbly letters, backwards numbers, shyness in week one, tiredness (Reception is exhausting), and not knowing the alphabet.",
          "Talk to someone about: persistent concerns with hearing, vision, speech or understanding instructions. Start with your health visitor or GP — or the school's SENCO once term begins. Every school is supported by an NHS school nursing team.",
          "Trust your gut, but give it half a term. Most 'not ready' worries in September have evaporated by the October half-term.",
        ],
      },
      {
        h: "A calm countdown for the summer before",
        body: [
          "The best preparation is life, not lessons:",
        ],
        list: [
          "Practise the school run — walk it, time it, find the gate.",
          "Lunchtime rehearsals: open the lunchbox, unwrap things, eat in twenty minutes.",
          "Dressing races (fun ones) with the actual uniform and shoes.",
          "Playdates and park trips for turn-taking practice.",
          "Bedtime nudged earlier, two weeks before term.",
          "Read starting-school stories together and let them ask anything.",
        ],
      },
      {
        h: "What the first day actually looks like",
        body: [
          "Most schools ease children in: staggered start times or half-days for the first week or two are common, so ask what your school's plan is.",
          "Pack light but complete: book bag, water bottle, lunchbox (if not school dinners), a coat whatever the weather, and one comfort item if the school allows it. Label everything — lost property fills a room by October.",
          "Say goodbye briskly and warmly. A quick hug, a clear 'I'll see you at three', and go. Lingering makes it harder, not easier — teachers are experts at the first-day wobble, and most tears stop within minutes.",
          "Expect exhaustion, not a full report. 'What did you do today?' will get you 'nothing'. Ask instead: 'Who did you sit next to?' or 'What was the funniest thing today?'",
        ],
      },
      {
        h: "Ready enough is ready",
        body: [
          "Schools expect four-year-olds, not seven-year-olds. They expect tears in week one, lost jumpers in week two, and total exhaustion by Friday. Readiness was never about passing a test — it's about a child who can ask for help, manage the basics, and bounce back.",
          "If you'd like gentle early-learning practice for the summer before school — numbers, letters and phonics in printable pages — our Ultimate Bundle covers it all in one pack.",
        ],
      },
    ],
    faqs: [
      ["Does my child need to be able to read before Reception?", "No. Reading is taught from scratch in Reception — that's what the phonics programme is for. The skills that matter on day one are everyday ones: independence, communication and confidence."],
      ["Is there a test when my child starts Reception?", "There is a short statutory baseline assessment in the first six weeks, but it has no pass mark, no shared score, and nothing to prepare for. It is not a test your child can pass or fail."],
      ["Can I delay my summer-born child's start?", "Parents of summer-born children (1 April to 31 August) can request that their child starts Reception at age five rather than going straight into Year 1. Any parent can also request part-time attendance until their child reaches compulsory school age — the term after their fifth birthday. Talk to your council's admissions team early."],
      ["My child can't write their name. Is that OK?", "Completely. Name-writing is something children learn during Reception, not before it. Recognising their name on a peg label is plenty — and even that comes with practice in the first weeks."],
      ["When should we start preparing?", "Gently, over the summer before they start — and through everyday life rather than lessons. Independence practice (dressing, toileting, lunchboxes), walking the school run in advance, and an earlier bedtime do more than any workbook."],
    ],
  },
];

function pillarBySlug(slug) {
  return PILLARS.find((p) => p.slug === slug);
}
function guideBySlug(slug) {
  return GUIDES.find((g) => g.slug === slug);
}
function guidesForPillar(pillarSlug) {
  return GUIDES.filter((g) => g.pillar === pillarSlug);
}
function relatedGuidesForProduct(productSlug) {
  return GUIDES.filter((g) => (g.products || []).includes(productSlug));
}

module.exports = { PILLARS, GUIDES, pillarBySlug, guideBySlug, guidesForPillar, relatedGuidesForProduct };
