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
      [
        "How long does Phase 2 take?",
        "About six weeks — roughly one sound set per week — taught in the autumn term of Reception (ages 4–5). Schools usually start in the first weeks of September and finish around the October half-term.",
      ],
      [
        "Should I teach letter names like 'ay, bee, cee' as well?",
        "Not during Phase 2. Letter names come later, and mixing them in now confuses blending. If your child already knows them, that's fine — just use sounds ('mmm') when you're practising phonics.",
      ],
      [
        "What if my child just can't blend?",
        "Step back from letters entirely and play oral blending games: 'I'm thinking of an animal: d…o…g.' Clap the sounds, stretch them, be silly with it. Once blending clicks by ear, the printed letters follow quickly.",
      ],
      [
        "How many tricky words are there in Phase 2?",
        "Five in the original Letters and Sounds programme: the, to, I, no, go. Some schools and schemes add 'into', making six. Learn whichever list your child's school sends home.",
      ],
      [
        "Is the Phase 2 order the same in every UK school?",
        "The classic DfE order on this page is the most widely shown, but schools using Little Wandle, Read Write Inc. or Twinkl Phonics group a few sounds slightly differently. The sounds are the same either way — follow your school's order for homework.",
      ],
      [
        "When should we start practising at home?",
        "As soon as the school sends the first sound set home — usually within the first couple of weeks of Reception. Before that, Phase 1-style listening games (rhymes, 'I spy', clapping syllables) are the perfect preparation.",
      ],
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
      [
        "When is Phase 2 taught?",
        "In the autumn term of Reception (ages 4–5), starting in the first weeks of school and lasting about six weeks — roughly one sound set per week, finishing around the October half-term.",
      ],
      [
        "What's the difference between Phase 2 and Phase 3?",
        "Phase 2 teaches single-letter sounds (plus ck, ff, ll, ss) and first blending. Phase 3, in the spring term of Reception, teaches the remaining letters and digraphs — two-letter sounds like ch, sh, th and ng — plus long vowel sounds like ai, ee and igh.",
      ],
      [
        "Does my child need to know Phase 2 before starting school?",
        "No. Schools teach it from scratch in Reception. The best preparation is Phase 1-style play: nursery rhymes, 'I spy', clapping out syllables, and being read to every day.",
      ],
      [
        "What if my child already knows all the Phase 2 sounds?",
        "Focus on blending longer words and reading simple captions, and check with the teacher before racing into Phase 3 sounds. Deep, confident blending matters more than speed.",
      ],
      [
        "I learned to read differently — how can I help?",
        "The one thing to relearn is pure sounds: 'mmm' not 'muh', 'sss' not 'suh'. Everything else — reading together, rhyming games, chatting — works exactly as it always has.",
      ],
      [
        "Will my child be tested on Phase 2?",
        "Not formally. Teachers assess phonics continuously through daily practice — listening to children read and blend — and use what they hear to decide who needs extra support. The first formal check is the Year 1 phonics screening in June, a year and a half later.",
      ],
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
      [
        "Does my child need to write numbers before starting Reception?",
        "No. Number formation is not an EYFS requirement — the early learning goals focus on understanding number, not handwriting numerals. Schools introduce formation in Reception, and pre-writing patterns (lines, circles, zigzags) are the best preparation.",
      ],
      [
        "My child writes 3 backwards. Is that normal?",
        "Yes — mirror writing is a normal developmental stage up to around age seven and is not, on its own, a sign of dyslexia. Gently model the correct way, underline 6 and 9 to tell them apart, and don't make a battle of it.",
      ],
      [
        "What is the correct pencil grip for a 4-year-old?",
        "At four, most children use a static tripod or quadripod grip — and that's exactly right for their age. The mature dynamic tripod grip develops around 5-7. Build hand strength with playdough, threading and climbing rather than forcing finger positions.",
      ],
      [
        "Should we learn 1-20 or 0-9 first?",
        "0-9 first, always. Every teen is just two known digits written side by side, so secure single digits before combining them. Count to 20 out loud as much as you like — but write 0-9 until they're automatic.",
      ],
      [
        "Our school uses different rhymes. Does it matter?",
        "Use the school's. Rhyme sets vary between schools and none is officially 'correct' — what matters is one consistent method. Ask the teacher for their formation sheet and practise that.",
      ],
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
        body: ["Translated into a school morning, readiness looks like this:"],
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
        body: ["The best preparation is life, not lessons:"],
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
      [
        "Does my child need to be able to read before Reception?",
        "No. Reading is taught from scratch in Reception — that's what the phonics programme is for. The skills that matter on day one are everyday ones: independence, communication and confidence.",
      ],
      [
        "Is there a test when my child starts Reception?",
        "There is a short statutory baseline assessment in the first six weeks, but it has no pass mark, no shared score, and nothing to prepare for. It is not a test your child can pass or fail.",
      ],
      [
        "Can I delay my summer-born child's start?",
        "Parents of summer-born children (1 April to 31 August) can request that their child starts Reception at age five rather than going straight into Year 1. Any parent can also request part-time attendance until their child reaches compulsory school age — the term after their fifth birthday. Talk to your council's admissions team early.",
      ],
      [
        "My child can't write their name. Is that OK?",
        "Completely. Name-writing is something children learn during Reception, not before it. Recognising their name on a peg label is plenty — and even that comes with practice in the first weeks.",
      ],
      [
        "When should we start preparing?",
        "Gently, over the summer before they start — and through everyday life rather than lessons. Independence practice (dressing, toileting, lunchboxes), walking the school run in advance, and an earlier bedtime do more than any workbook.",
      ],
    ],
  },
  {
    slug: "tricky-words-phases-2-3",
    pillar: "phonics",
    title: "Tricky Words Phases 2–3: Full List & Tips",
    summary:
      "All the Phase 2 and 3 tricky words from Letters & Sounds, plus practical ways to help your child learn the words that can't be sounded out.",
    minutes: 7,
    products: ["tricky-words-phases-2-3"],
    answer:
      "Phase 2 tricky words: the, to, I, no, go (some lists add into). Phase 3 tricky words: he, she, we, me, be, was, you, they, all, are, my, her. Because these words break phonic rules, children learn them by sight — look, say, cover, write, check — a few minutes a day, mixed with plenty of blending practise.",
    sections: [
      {
        h: "What makes a word 'tricky'?",
        body: [
          "Most early words play fair: s-a-t says sat, p-i-n says pin. Tricky words don't. They contain spellings your child hasn't been taught yet, so sounding them out gives the wrong answer — try sounding out 'was' with Phase 2 knowledge and you get 'wass'.",
          "That doesn't mean they're random. Every tricky word becomes decodable later, once the relevant spelling patterns are taught. 'Tricky' just means 'not yet'. Children learn them by recognising the whole word on sight, while their phonics knowledge catches up underneath.",
          "You may also hear them called 'common exception words' — that is the term some phonics schemes use for exactly the same idea. If your child's school says 'red words' (Read Write Inc.) or 'tricky words' (Letters & Sounds, Little Wandle), they mean the same thing: learn these by sight for now.",
        ],
      },
      {
        h: "The complete Phase 2 list",
        body: [
          "The original Letters & Sounds programme lists five tricky words for Phase 2. Here they are, with the bit that trips children up:",
        ],
        list: [
          "the — the 'th' and the 'e' aren't taught yet; children just have to know it",
          "to — the 'o' says 'oo', which nothing in Phase 2 explains",
          "I — always a capital, and it says its letter name, not a sound",
          "no — the 'o' says 'oh', not the short 'o' of 'dog'",
          "go — same story as 'no': the 'o' is saying its name",
          "One more note: some school lists show six Phase 2 tricky words, adding 'into'. This isn't a mistake — several DfE-validated schemes teach it at this point because children meet it so often in early books ('the frog jumped into the pond'). If your school's list has six words, learn six. The list that matters is the one your child's teacher sends home, not the one on any website — including this one.",
        ],
      },
      {
        h: "The complete Phase 3 list",
        body: [
          "Phase 3 introduces twelve more. By the end of the phase your child is expected to read all of these on sight:",
        ],
        list: [
          "he, she, we, me, be — the 'e' says its name ('ee'), which Phase 3 hasn't explained yet",
          "was — the 'a' is saying 'o' (as in 'wasp'); one of the hardest for children to accept",
          "you — the 'ou' spelling is a Phase 5 job, so for now it's pure memory",
          "they — the 'ey' says 'ay'; children want to read it as 'th-ee'",
          "all — the 'a' is really an 'or' sound before the double l",
          "are — the 'a' is really an 'air' sound",
          "my — the 'y' says 'eye'; a Phase 5 pattern hiding in a Phase 3 word",
          "her — the 'er' spelling isn't taught until later",
        ],
      },
      {
        h: "How schools teach them: look, say, cover, write, check",
        body: [
          "Schools don't hand children a list of seventeen words and wish them luck. They introduce two or three at a time, practise them for a few minutes daily, and keep revisiting old ones. The classic routine is 'look, say, cover, write, check':",
        ],
        list: [
          "Look at the word carefully — trace its shape with a finger",
          "Say it out loud",
          "Cover it (or turn the card over)",
          "Write it from memory — in sand, with chalk, with a finger in the air",
          "Check: uncover and compare, letter by letter",
        ],
      },
      {
        h: "Five games that actually work",
        body: [
          "Drilling flashcards at the kitchen table gets old fast — for both of you. These games teach the same words with far less complaining:",
        ],
        list: [
          "Tricky word hunt: write words on sticky notes and hide them round the house. Your child reads each one to 'collect' it.",
          "Snap: make pairs of word cards and play snap. Speed builds recognition faster than staring.",
          "Silly sentences: 'The goat said no to the...' — your child fills in a tricky word and draws the scene.",
          "Word building: build the word with magnetic letters, then ask 'which bit CAN we sound out?' ('sh' in 'she' is fine — it's only the 'e' that's tricky). This keeps phonics and sight words connected instead of separate.",
          "Roll and read: write six words in a grid, roll a dice, read the word you land on. First to read all six wins.",
        ],
      },
      {
        h: "Mistakes that slow children down",
        body: [
          "The most common one is too many words at once. Seventeen words feels like a mountain; three words feels like a game. Schools drip-feed them across two terms — do the same at home.",
          "Second: practising only by staring. Tricky words stick through writing them, finding them in books, and using them — not through being shown a card twenty times in a row.",
          "Third: stopping too soon. A word your child 'knew' last week will often vanish this week. That is the normal forgetting curve, not a problem with your child. Revisit old words for a minute or two each session and they come back quickly.",
        ],
      },
      {
        h: "When to worry (and when not to)",
        body: [
          "Not yet knowing all the words: normal. Forgetting words they knew: normal. Reading 'was' as 'wass' sometimes: completely normal — it shows their phonics is working and the sight memory just needs more time.",
          "What is worth mentioning to the teacher: if after several months of school your child recognises almost no words at all, avoids all reading, or seems unable to remember words from one day to the next despite daily practise. Teachers see the full picture across the class and will tell you honestly whether it's developmental pace or something to look at together.",
          "One practical check you can do yourself: is your child actually seeing the words clearly? If they squint, rub their eyes, or hold books very close, mention it at their next eye check — it's a quick thing to rule out.",
        ],
      },
      {
        h: "Keep it short, keep it playful",
        body: [
          "Tricky words are a marathon, not a sprint — they keep appearing right through primary school. The families who do best are the ones who fold five minutes of word play into the day and forget about it, not the ones who run nightly flashcard boot camps.",
          "If you'd like the practice pages to go with the games — every Phase 2 and 3 tricky word with trace, read and write-it-yourself pages — our tricky words pack covers the full list in printable pages you can reuse as often as you like.",
        ],
      },
    ],
    faqs: [
      [
        "How many tricky words should a 5-year-old know?",
        "By the end of Reception, most children read the Phase 2 and 3 lists — around seventeen words. But schools introduce them gradually across the year, so don't expect the full list in the autumn term. Learn your school's current words, not the whole list at once.",
      ],
      [
        "My child keeps forgetting 'the' — is that normal?",
        "Completely. 'The' is the most common word in English and one of the hardest to memorise because there's nothing to hook it to. Keep it in daily rotation with the look-say-cover-write-check routine and it will stick — then vanish, then stick again. That's how memory works at this age.",
      ],
      [
        "Are tricky words the same in every phonics scheme?",
        "Largely, yes — the Letters & Sounds lists are the reference most schemes build on. Read Write Inc. calls them 'red words' and groups a few slightly differently, but the words your child needs are essentially the same. Always follow your school's list for homework.",
      ],
      [
        "Should I teach letter names with tricky words?",
        "It's fine — tricky words are learned as whole words anyway, so letter names don't confuse the process the way they can with blending. Many parents spell them out ('t-h-e, the') as a chant, which works well.",
      ],
      [
        "Can we start tricky words before school?",
        "Gently, yes. A couple of high-frequency words like 'the' and 'I' crop up in every bedtime book, so pointing them out in stories is natural pre-school practise. Keep it to noticing and playing — the formal lists start in Reception.",
      ],
      [
        "What's the difference between tricky words and high-frequency words?",
        "High-frequency words are simply words children meet a lot (and, it, is). Many are decodable and children blend them. Tricky words are the high-frequency words that can't be sounded out yet — the subset that needs sight learning.",
      ],
    ],
  },
  {
    slug: "phonics-at-home-routine",
    pillar: "phonics",
    title: "Phonics at Home: A 10-Minute Daily Routine",
    summary:
      "A practical 10-minute daily phonics routine for parents — revisits, blending games and writing practice that mirror what UK schools do in Reception.",
    minutes: 8,
    products: ["phonics-phase-2", "alphabet-tracing-a-z"],
    answer:
      "Ten minutes a day is enough: 2 minutes revisiting known sounds with flashcards, 4 minutes blending games (point, sweep, read), 2 minutes writing or tracing the newest sound, and 2 minutes reading a decodable book or playing a sound game. Keep it daily, playful and pressure-free — stop while it's still fun.",
    sections: [
      {
        h: "Why ten minutes beats an hour on Saturday",
        body: [
          "Young brains learn through spaced repetition — small, frequent encounters with the same sounds. A child who practises ten minutes daily sees each sound roughly seventy times a week; a child who does an hour on Saturday sees it once, then forgets it by Wednesday.",
          "Schools know this: phonics is taught in short daily sessions, not weekly marathons. Your home routine works best when it copies that rhythm. Ten focused minutes with you, one-to-one, is genuinely more powerful than a longer session — attention spans at four and five are short, and that's biology, not behaviour.",
        ],
      },
      {
        h: "Before you start: find out what school is teaching",
        body: [
          "The single biggest mistake parents make is practising the wrong sounds. If school is on Set 2 (i, n, m, d) and you're drilling Set 4 at home, your child gets confusion instead of confidence.",
          "Ask the teacher — or check the reading diary, book bag letters or school app — for the current sound set. Most schools send sounds home as they're taught. Practise those sounds and only those sounds, plus quick revisits of earlier sets.",
          "If you want the full picture of the Phase 2 sequence for your own understanding, our Phase 2 sounds guide lays out all five sets with pronunciation tips. For the daily routine itself, though, your school's current set is the whole syllabus.",
        ],
      },
      {
        h: "The routine: 2 – 4 – 2 – 2",
        body: [
          "Here is the ten-minute shape. It fits between tea and bath, or in the morning before school — whenever your child is most alert:",
        ],
        list: [
          "2 minutes — Revisit: flashcards of sounds already learned. Show each card, your child says the sound purely. Shuffle the order so they're reading, not reciting. Quick and snappy.",
          "4 minutes — Blend: five or six words made only from the current sound set. Write them large or use magnetic letters. Point to each sound, sweep under the word, read it a little faster each time. Swap one letter to make a new word (pin → tin) and watch them read it.",
          "2 minutes — Write: trace or write the newest sound while saying it. Hand and voice together cements the memory. Big paper, chunky pencil, no pressure on neatness.",
          "2 minutes — Read or play: a decodable book matched to the current phase, or a quick sound game (see below). End on something enjoyable.",
        ],
      },
      {
        h: "Blending games that don't feel like lessons",
        body: [
          "The four blending minutes are where the magic happens — and they don't have to look like school:",
        ],
        list: [
          "Robot talk: speak like a robot ('bring me the c-u-p') and your child blends to work out what you mean. Then they get to be the robot.",
          "I spy, phonics edition: 'I spy something beginning with mmm' — pure sounds only.",
          "Shopping list: write a list of three CVC words (real shopping or pretend). Your child blends each one to 'buy' it.",
          "Magnetic letter swaps: build 'sat', blend it, swap the s for a p. New word, instant success, huge grin.",
          "Silly sentence building: blend two words, then use them in the silliest sentence you can invent together.",
        ],
      },
      {
        h: "Segmenting: the writing side of phonics",
        body: [
          "Blending is for reading (pushing sounds together). Segmenting is for spelling (pulling them apart) — and it needs practise too. The classic tool is 'phoneme fingers': say a word slowly and put up a finger for each sound. 'Dog' gets three fingers: d-o-g.",
          "Try it with labelling: your child draws a picture, you help them segment the word, and they write the sounds they hear. 'Cat' might come out as 'ct' — that's brilliant, not wrong. They're hearing sounds and representing them, which is exactly what segmenting is.",
          "Don't correct every invented spelling at this stage. The goal is the habit of listening for sounds, not perfect orthography at age four.",
        ],
      },
      {
        h: "What to do when they get stuck",
        body: [
          "Every child hits walls. The wrong response is drilling the same card louder; the right responses are:",
        ],
        list: [
          "Step back, not forward: if blending 'stamp' fails, drop to 'sat'. Success rebuilds confidence; struggle on the same word just rehearses failure.",
          "Go oral: put the letters away entirely and play blending games by ear ('I'm thinking of an animal: d-o-g'). When it clicks by ear, the print follows.",
          "Model, don't correct: instead of 'no, that's wrong', just say the word the pure way yourself and let them copy. Correction creates tension; modelling creates learning.",
          "Check the basics: are they adding 'uh' to sounds ('suh-ah-tuh')? Are they tired, hungry, or done for the day? Some stuck moments are really just tired moments.",
          "Leave it: a sound that won't stick on Tuesday often arrives on its own by Friday. The brain consolidates overnight — and over weeks.",
        ],
      },
      {
        h: "Reading books at home: two kinds of reading",
        body: [
          "Keep two reading streams separate. Decodable books — matched to your child's current phase, where nearly every word can be sounded out — are for practise. Your child reads these to you, using their phonics.",
          "Bedtime stories are different: rich picture books, read by you, far above your child's decoding level. This is where vocabulary, story sense and love of reading grow. Never turn a bedtime story into a phonics test — that's how children learn to dread books.",
          "If school sends decodable books home, those two minutes of the routine are their moment. If not, any simple book from the current phase works — the school can usually suggest titles.",
        ],
      },
      {
        h: "A weekly shape that keeps it fresh",
        body: [
          "Same ten minutes, slightly different flavour each day, keeps the routine from going stale: Mondays for new sounds, Tuesdays for blending games, Wednesdays for writing, Thursdays for silly sentences, Fridays for a 'show off what you know' session for a grandparent or teddy bear audience.",
          "Weekends are optional. Five days a week of this routine puts your child ahead of nearly every alternative — and if you miss a day, the routine is still there tomorrow. Consistency over months beats intensity over days.",
          "If you'd like print-and-go pages for the writing minutes — every Phase 2 sound with tracing and keyword pictures — our Phase 2 pack is built for exactly this routine, and the alphabet tracing pack gives little hands the letter-formation practise to match.",
        ],
      },
    ],
    faqs: [
      [
        "Is ten minutes really enough?",
        "Yes. Schools teach phonics in 20–30 minute whole-class sessions, but one-to-one ten minutes with a parent is more focused than any classroom slot. What matters is daily frequency, not session length.",
      ],
      [
        "What if my child resists or won't sit still?",
        "Offer choice ('robot talk or magnetic letters?'), pick a high-energy moment, and keep it game-shaped. Some days won't happen — that's fine. Forcing a resistant four-year-old teaches them that phonics is miserable, which is worse than missing a day.",
      ],
      [
        "Should we do it at the same time every day?",
        "A consistent slot helps it become habit — after breakfast, before bath, whatever fits your family. But the routine matters more than the clock: same shape, same games, whenever energy is good.",
      ],
      [
        "My school uses Little Wandle / Read Write Inc. — does this routine still apply?",
        "Completely. The routine is scheme-agnostic: revisit, blend, write, read. Just use your school's current sound set and order rather than any generic list, and you'll be reinforcing exactly what the classroom teaches.",
      ],
      [
        "Can an older sibling help with phonics practice?",
        "Yes, and it's often brilliant — siblings model sounds naturally and younger children try harder to impress them. Just make sure the sibling says sounds purely too (no 'suh'), and keep you in the loop on which set they're on.",
      ],
      [
        "Are phonics apps useful, or should it all be physical?",
        "A few minutes on a good app can supplement, but physical practice — cards, magnetic letters, writing — builds stronger connections at this age. This routine deliberately keeps screens out; ten minutes of real interaction beats thirty of tapping.",
      ],
    ],
  },
  {
    slug: "simple-addition-ages-4-6",
    pillar: "early-maths",
    title: "Simple Addition for Ages 4–6",
    summary:
      "How to teach simple addition to 4–6 year olds the way UK schools do: concrete objects, then pictures, then written sums — with practical examples.",
    minutes: 7,
    products: ["simple-addition-1-10"],
    answer:
      "Schools teach addition in three stages: concrete (real objects your child can touch), pictorial (pictures and dots), then written number sentences like 3 + 2 = 5. Keep each stage playful, let your child stay at the concrete stage as long as they need, and only move on when the pictures make sense to them.",
    sections: [
      {
        h: "What 'addition to 10' actually means at this age",
        body: [
          "In Reception, addition isn't sums — it's stories. 'You have 3 conkers, I give you 2 more, how many now?' Children combine two groups and count everything. That's addition, and it's the foundation everything else sits on.",
          "In Year 1 the same idea becomes formal: number sentences like 3 + 2 = 5, and the famous 'number bonds to 10' — the pairs that make 10. The national curriculum expects Year 1 children to read, write and interpret these sentences and to know their bonds to 10 by heart.",
          "The honest truth: children who rush to written sums before they truly understand combining groups end up memorising procedures they don't understand. The slow road through objects and pictures is the fast road in the end.",
        ],
      },
      {
        h: "Stage 1: concrete — real things you can touch",
        body: [
          "Start with objects, not numbers. Counters, dried pasta, conkers, toy cars — anything countable. The language matters more than the equipment:",
        ],
        list: [
          "Put out 3 apples. 'How many apples?' (count together)",
          "Add 2 more. 'And 2 more. How many altogether now?'",
          "Let your child count all of them: 1, 2, 3, 4, 5.",
          "Say what happened: '3 apples and 2 more apples makes 5 apples altogether.'",
        ],
      },
      {
        h: "Stage 2: pictorial — when objects become pictures",
        body: [
          "Once combining real objects is easy, draw the story. Three circles, then two more circles — how many altogether? Dot patterns under numbers work the same way: the dots are the objects, flattened onto paper.",
          "The ten frame is the teacher's favourite tool here, and it's simple: a 2×5 grid. Fill 3 squares with counters, add 2 more, and your child sees 5 — and sees the 5 empty squares that make the rest of 10. It builds the visual sense of number that written sums can't.",
          "Stay at this stage until your child looks at 3 dots + 2 dots and just knows it's 5 without counting each one. That 'just knowing' is the goal — it's called subitising, and it's the seed of mental maths.",
        ],
      },
      {
        h: "Stage 3: written — first number sentences",
        body: [
          "Only now introduce symbols. Write '3 + 2 = 5' and read it as a sentence: 'three add two equals five'. Teach each symbol's meaning deliberately:",
        ],
        list: [
          "+ means 'and' or 'add' — we're combining groups",
          "= means 'is the same as' or 'makes' — not 'write the answer here'",
          "Read the whole sentence aloud every time, not just the answer",
        ],
      },
      {
        h: "Number bonds: the facts worth knowing by heart",
        body: [
          "Number bonds are pairs of numbers that combine to make another number — most importantly, the pairs that make 10: 1+9, 2+8, 3+7, 4+6, 5+5. Year 1 expects children to recall these without counting, because every harder calculation leans on them.",
          "Build them through games, not drilling: pairs snap with number cards, 'make 10' with a ten frame and counters, or the classic — hold up some fingers, your child holds up the rest to make 10.",
          "Doubles deserve special attention: 1+1 through 5+5. Children learn these fastest of all, and 'double 4 is 8, so 4+5 is one more' becomes a strategy for near-doubles later.",
        ],
      },
      {
        h: "The counting-on trap (and how to avoid it)",
        body: [
          "Watch how your child solves 3 + 2. If they count '1, 2, 3… 1, 2' and then count everything again from 1, they're counting all — correct but slow. The next step is counting on: start at 3, then '4, 5'.",
          "Don't rush this transition. Counting all is a valid strategy and pushing counting-on too early causes errors. It emerges naturally once number bonds strengthen — a child who just knows that 3 and 2 make 5 has no counting left to do at all.",
          "And fingers: let them. Finger counting is a legitimate mathematical tool at this age, not a bad habit. It fades on its own as mental strategies take over.",
        ],
      },
      {
        h: "Common mistakes and how to fix them",
        body: [
          "Adding the wrong groups: in '3 + 2', some children count 3, then count 2 more starting from 3 again (getting 6). Physically separate the groups — then push them together — and narrate: '3 here, 2 here, now altogether.'",
          "Too-big numbers too soon: if 7 + 5 is guesswork, drop back to totals under 6. Confidence with small numbers transfers upward; anxiety with big numbers doesn't transfer at all.",
          "Symbol confusion: '=' read as 'the answer is' leads to nonsense like '3 + 2 = 5 + 1 = 6'. Keep reading it as 'is the same as' and the logic holds.",
          "Rushing to written work: if written sums produce tears but objects produce smiles, the objects are telling you the truth about where your child is. Go back a stage without apology.",
        ],
      },
      {
        h: "Making it part of everyday life",
        body: [
          "The best addition practise doesn't look like maths: setting the table ('we need 4 plates, there are 2 — how many more?'), baking ('3 eggs in, 2 more to crack'), stairs ('we've climbed 5, how many to 10?'), shopping ('2 apples and 3 bananas — how many pieces of fruit?').",
          "Five minutes of this, woven into the day, does more than any worksheet — though worksheets have their place once the concept is secure, giving children the written practise schools expect.",
          "If you'd like that written practise ready to print — every addition fact to 10 with counting dots, traceable equations and a mixed review page — our simple addition pack is built to follow this exact concrete-to-written path.",
        ],
      },
    ],
    faqs: [
      [
        "When should my child start learning to add?",
        "Informally in Reception: combining groups of objects and counting altogether. Formally in Year 1: written number sentences and number bonds to 10. Before Reception, just count everything together — that's the prequel.",
      ],
      [
        "Is counting on fingers okay?",
        "Yes — it's a genuine mathematical strategy at this age, not a crutch. Children naturally move to mental methods as their number bonds strengthen. Banning fingers just removes a tool they need.",
      ],
      [
        "What exactly is a number bond?",
        "Two numbers that combine to make another number — usually discussed as the pairs making 10 (7+3, 6+4…). Knowing bonds to 10 by heart is a Year 1 expectation because they're the building blocks of all later addition.",
      ],
      [
        "Should I teach subtraction at the same time?",
        "It arises naturally — 'we had 5 biscuits, we ate 2, how many left?' uses take-away language children understand. Schools teach them as connected ideas (5 = 3 + 2, so 5 − 3 = 2). Follow your child's curiosity; no need for a separate subtraction campaign.",
      ],
      [
        "My child adds fine with objects but freezes on paper — help?",
        "Completely normal, and the message is clear: stay at the pictorial stage longer. Draw the objects, use ten frames, and only return to written sums when the pictures feel easy. Paper isn't harder maths — it's just a less familiar representation.",
      ],
      [
        "Worksheets or real objects — which is better?",
        "Objects first, always. Worksheets are for practising a concept that's already understood, not for teaching it. A child who can show 4 + 3 with pasta can learn the written form in minutes; a child drilled on worksheets without the objects often can't apply it anywhere else.",
      ],
    ],
  },
  {
    slug: "shapes-and-colours-reception",
    pillar: "early-maths",
    title: "Shapes & Colours: What Reception Expects",
    summary:
      "What Reception actually expects your child to know about shapes and colours — 2D shapes, colour names and the honest truth about what's 'behind'.",
    minutes: 6,
    products: ["shapes-and-colours"],
    answer:
      "By the end of Reception, most children name basic 2D shapes (circle, square, triangle, rectangle) and common colours confidently, and start describing shapes by their properties — sides and corners. You don't need to drill: shape hunts, building play and colouring build this naturally through everyday talk.",
    sections: [
      {
        h: "What the EYFS actually says",
        body: [
          "Here's the honest version: the EYFS framework doesn't demand that your child recites shape names on command. It talks about children exploring the characteristics of shapes — noticing that a wheel rolls because it's round, that a box stacks because it's flat-sided.",
          "In practice, Reception classrooms do teach shape names and properties through play, and by the end of the year most children confidently name circles, squares, triangles and rectangles. The framework's language is deliberately play-based; the classroom reality includes both play and direct teaching. Both matter.",
        ],
      },
      {
        h: "The shapes worth knowing by the end of Reception",
        body: ["Focus on four 2D shapes first — these are the Reception core:"],
        list: [
          "Circle — no sides, no corners; rolls",
          "Square — 4 equal sides, 4 corners",
          "Triangle — 3 sides, 3 corners",
          "Rectangle — 4 sides, 4 corners (2 long, 2 short)",
        ],
      },
      {
        h: "Beyond the basics: what comes next",
        body: [
          "Pentagons and hexagons enter formally in Year 1, but there's no harm in naming them during play — children love a impressive word like 'hexagon'. For 3D shapes, Reception is about handling and describing: cubes stack, spheres roll, cylinders do both. Formal 3D names (cube, cuboid, sphere, cylinder, cone) are taught in Key Stage 1.",
          "Don't drill 3D vocabulary at four. Do let them build with boxes, roll balls down ramps, and hear you use the words naturally: 'pass me the cylinder block, please.'",
          "A lovely bridge between 2D and 3D: press 3D objects into playdough and look at the 2D prints they leave — a cylinder makes circles, a cube makes squares. It's a small moment of genuine geometry, and children find it genuinely magical.",
          "And when you're out and about, play 'shape spy': who can spot the most circles between home and the park? Mundane journeys become geometry hunts, and children start seeing shapes everywhere — which is exactly the point.",
        ],
      },
      {
        h: "Colours: more than just naming them",
        body: [
          "Most three-year-olds name the main colours; by Reception the learning deepens. Talk about shades (light blue, dark green), mix paint and predict what happens, and use colour precisely: 'the crimson leaf' rather than just 'the red one'.",
          "Colour mixing is secretly science: red + yellow makes orange is a prediction, an experiment and a result. Do it with paint, playdough or even bath colours and narrate what's happening.",
          "There's a language payoff too. Colour words are among the first adjectives children master, and precise colour talk — 'the pale yellow one, not the bright yellow one' — builds the descriptive vocabulary that later powers both storytelling and science observations. When your child can describe exactly which leaf they mean, they're practising classification.",
        ],
      },
      {
        h: "Talking about properties, not just names",
        body: [
          "The leap Reception teachers look for is from naming to describing. 'It's a triangle' becomes 'it has three straight sides and three corners.' This property language is what Year 1 geometry builds on.",
          "Build it into everyday talk: 'Can you find something with four corners?' 'Is the plate curved or straight-sided?' 'Why does the ball roll but the book doesn't?' You're teaching mathematical reasoning disguised as chat.",
        ],
      },
      {
        h: "Everyday ways to practise (no worksheets needed)",
        body: [
          "Shape learning lives in the real world better than on paper — and it quietly introduces two big mathematical ideas along the way: sorting and patterning. When your child sorts buttons by colour, then re-sorts the same buttons by shape, they're learning that objects have multiple attributes — a genuinely sophisticated idea.",
          "Patterns come next: red-blue-red-blue with beads or blocks. Copying a pattern, then continuing it, then inventing one. Offer the materials and let them lead — coloured blocks, beads, buttons, even different pasta shapes. Ask 'what comes next?' when they build a pattern, and 'how else could we sort these?' when they tidy. You're building a mathematician one game at a time.",
          "Here are the classics:",
        ],
        list: [
          "Shape hunts: 'find three circles in this room' — windows, clocks, plates are everywhere",
          "Food shapes: sandwiches cut into triangles, round crackers, square cheese",
          "Building: blocks, boxes and recycled packaging — which shapes stack? which roll?",
          "Sorting: the cutlery drawer, the button tin, the toy box by shape or colour",
          "Walks: signs (triangles!), windows (rectangles), wheels (circles) — the street is a geometry lesson",
          "Pattern chains: threaded beads or Lego in repeating colour patterns — copy it, continue it, invent your own",
        ],
      },
      {
        h: "When colouring counts as learning",
        body: [
          "Colouring gets dismissed as 'just' keeping children busy, but it does quiet work: pencil control for writing, colour vocabulary, staying inside boundaries (which is really hand-eye coordination), and — when you talk about it — descriptive language.",
          "Make it richer with commentary rather than correction: 'you've chosen a lovely deep blue for the sea' beats 'stay in the lines'. Ask about choices: 'why is the sun purple today?' The answers are often wonderful.",
          "You can also sneak in the property language from earlier: 'you've coloured all the triangles yellow and the squares blue — clever sorting!' Colouring becomes a place to rehearse shape vocabulary without it feeling like a quiz.",
        ],
      },
      {
        h: "Keep it playful, keep it everywhere",
        body: [
          "Nobody ever learned shapes from being quizzed at the dinner table. They learned them from a parent who said 'ooh, look — the moon is a circle tonight' often enough that it stuck.",
          "If you'd like printable pages to back up the real-world play — traceable shape names, big bold shapes to colour, and the vocabulary Reception uses — our shapes and colours pack gives you seven pages to print whenever a rainy afternoon needs one.",
        ],
      },
    ],
    faqs: [
      [
        "Should my 4-year-old know all the shapes?",
        "Naming circle, square, triangle and rectangle by the end of Reception is typical. Describing them by sides and corners is the Year 1 step. Don't worry about pentagon or hexagon in Reception — they're a bonus, not a benchmark.",
      ],
      [
        "What about 3D shapes — should we practise those?",
        "Handle them, don't drill them. Building with boxes, rolling balls and stacking cups teaches more about 3D shapes than any flashcard. The formal names come in Key Stage 1.",
      ],
      [
        "My child calls every four-sided shape a square — is that a problem?",
        "Not at all — it's a normal developmental stage. Squares are the prototype rectangle in young minds. Keep modelling 'that's a rectangle — like a stretched square' and the distinction arrives on its own.",
      ],
      [
        "When do children learn shapes like hexagon?",
        "Hexagons and pentagons are formally taught in Year 1. Many Reception children pick the words up through play earlier, which is lovely but not expected.",
      ],
      [
        "Is colouring 'real learning' or just keeping them busy?",
        "Both. It builds the hand control writing needs, practises colour vocabulary, and develops concentration. It's not a substitute for maths talk, but as part of a playful mix it's genuinely valuable.",
      ],
      [
        "I think my child might be colour-blind — will school notice?",
        "Schools do screen for it, and teachers notice quickly when a child consistently mixes certain colours. Mention it to the teacher if there's family history — it's common (especially in boys), easily managed, and nothing to worry about.",
      ],
    ],
  },
  {
    slug: "pre-writing-skills",
    pillar: "writing-skills",
    title: "Pre-Writing Skills Before Letters",
    summary:
      "Before letter tracing: the pre-writing strokes — lines, curves, zigzags and shapes — that build the hand control children need for writing.",
    minutes: 7,
    products: ["scissor-skills", "alphabet-tracing-a-z"],
    answer:
      "Children need pre-writing strokes before letters: vertical and horizontal lines, circles, crosses, squares, zigzags and waves. Practise them big and playful — chalk, paint, finger tracing — and only move to letter tracing when the strokes flow easily and your child can copy shapes with reasonable control.",
    sections: [
      {
        h: "Why tracing letters too early backfires",
        body: [
          "It's tempting to hand a three-year-old an alphabet workbook — it feels like a head start. But letters are complex shapes built from simpler strokes, and a hand that can't yet draw a confident circle will produce wobbly, frustrating 'a's and 'o's.",
          "Think of it like learning an instrument: nobody starts with the concerto. Scales first — then the music comes easily.",
          "Worse, struggling with letters too early teaches children that writing is hard and miserable, and can cement awkward grips and bad stroke habits that take years to undo. The genuinely faster route is mastering the strokes first, so letters feel easy when they arrive.",
          "It helps to know what comes before strokes, too. Children move through mark-making stages: disordered scribbling (marks for pure pleasure — respond with delight and lots of paper), controlled scribbling (watching their hand, repeating motions), and named scribbling ('it's a dog!' — marks now stand for something, the birth of the symbolic thinking writing needs). Only then do recognisable shapes emerge. Rushing a child past the scribble stages is like skipping foundations to build the roof faster.",
        ],
      },
      {
        h: "The pre-writing strokes, in order",
        body: [
          "Children develop these strokes in a roughly predictable sequence. There's no need to teach them formally — just notice the order and offer the next one through play:",
        ],
        list: [
          "Vertical line (|) — around age 2; the first controlled stroke",
          "Horizontal line (—) — around 2½",
          "Circle (○) — around 3; the gateway to o, a, d, g, q",
          "Cross (+) — around 3½–4; needs stopping and changing direction",
          "Square (□) — around 4; four planned strokes in sequence",
          "Diagonal lines (/ \\) and triangle (△) — around 4½–5",
          "Zigzags and waves — around 5; the control needed for w, v, z",
        ],
      },
      {
        h: "How to practise: big before small",
        body: [
          "The golden rule: big movements before small ones. Shoulder and arm control develops before finger control, so start huge:",
        ],
        list: [
          "Pavement chalk: giant circles, wavy roads for toy cars, hopscotch lines",
          "Water painting: a big brush and a bucket on the patio or fence — magical and mess-free",
          "Sand, shaving foam or flour trays: finger-drawn strokes, endlessly re-doable",
          "Then chunky crayons on big paper — and only later, pencils on worksheets",
        ],
      },
      {
        h: "Strength before skill: the muscles writing needs",
        body: [
          "Strokes need strength behind them. The small hand muscles develop through play, not practise sheets:",
        ],
        list: [
          "Playdough: squeezing, rolling, pinching — the single best hand-strengthener",
          "Tweezers and tongs: moving pom-poms, pasta or cotton balls between bowls",
          "Clothes pegs: pegging cards to a line builds the exact pinch writing uses",
          "Threading: beads, pasta tubes on string, lacing cards",
          "Spray bottles and pipettes: brilliant for water play and finger strength",
        ],
      },
      {
        h: "From strokes to letters: knowing when they're ready",
        body: [
          "Look for these signs rather than a birthday: your child copies circles, crosses and squares with reasonable control; they can trace a wavy line without veering wildly; they show interest in letters (pointing them out, asking 'what does that say?'); and they can sit with a focused activity for five to ten minutes.",
          "When those line up, start with the letters built from strokes they've mastered — c, o, a are circles; l, t, i are lines. Letters like s, k and z, which need diagonals and direction changes, come later. There's no prize for alphabetical order.",
          "A practical tip for the first letters: start with the ones in your child's name. Nothing motivates like writing something that belongs to you — a child who can write 'MUM' or the first letter of their name will practise voluntarily in a way no worksheet ever achieves. Capitals first is fine at this stage; the capital letters are mostly straight lines and far more forgiving than their lowercase cousins.",
        ],
      },
      {
        h: "What to avoid",
        body: [
          "Workbooks designed for older children, with small lines and dense pages — they demand precision little hands don't have yet. Constant grip correction during play — it turns fun into a lesson (see our pencil grip guide for when correction actually helps). Long sessions — five playful minutes beats twenty forced ones. And comparing with other children: the normal range for these skills spans more than a year in either direction.",
          "Also avoid 'tracing over your hand' — guiding your child's hand through letters for them. It feels helpful, but the child isn't practising the motor planning at all; they're a passenger. If they can't form the stroke alone, the stroke is too hard — drop back to an easier one and let them own it.",
        ],
      },
      {
        h: "A week of pre-writing play",
        body: [
          "You don't need a curriculum — but if you like a shape to the week, try this. Ten minutes a day, all play. Repeat favourite days whenever your child asks: at this age, repetition is the learning, not a failure of variety.",
        ],
        list: [
          "Monday: chalk circles on the pavement — how big? how small?",
          "Tuesday: playdough snakes, then cut them with (child-safe) scissors",
          "Wednesday: shaving-foam zigzags on a tray",
          "Thursday: peg games — pegging coloured cards in patterns",
          "Friday: water-paint wavy roads for toy cars on the fence",
        ],
      },
      {
        h: "When letters come next",
        body: [
          "Pre-writing isn't a delay — it's the foundation that makes letter formation quick and tear-free when the time comes. Most children are ready for real letter tracing somewhere between four and five, and the ones who practised strokes first take to it noticeably faster.",
          "When you're ready, our scissor skills pack continues the fine-motor story with progressive cutting lines, and the alphabet tracing pack picks up exactly where the strokes leave off — every letter with UK handwriting lines, ready to print as many times as you like.",
        ],
      },
    ],
    faqs: [
      [
        "What age should pre-writing practice start?",
        "Playful mark-making from around 2 — chalk, paint, fingers in sand. More structured stroke practice fits naturally around 3–4. There's no need to 'teach' strokes before a child is interested in making marks.",
      ],
      [
        "My child only scribbles — is that okay?",
        "Completely. Scribbling is the first stage of mark-making and it matters: it teaches that marks carry meaning. Controlled strokes emerge from scribbling naturally, usually between 2 and 3. Celebrate the scribbles.",
      ],
      [
        "How long before we try proper letters?",
        "Think weeks and months, not days. When circles, crosses and squares are confident and your child is curious about letters, they're ready. Rushing this step is the single most common cause of writing frustration at four.",
      ],
      [
        "Should I correct their pencil grip yet?",
        "Model a good grip and offer short crayons (which encourage it naturally), but avoid constant correction during play — it kills motivation. Our pencil grip guide covers when firmer guidance actually helps.",
      ],
      [
        "Anything different for left-handed children?",
        "The stroke sequence is the same. Tilt the paper clockwise slightly, watch for smudging (it bothers some children, not others), and sit them on the left at shared tables so elbows don't clash. Otherwise, business as usual.",
      ],
      [
        "Do I need special equipment?",
        "No. Chalk, chunky crayons, big paper, playdough and a tray of sand or flour cover everything. Save your money — the expensive 'pre-writing systems' sell what the pavement gives you free.",
      ],
    ],
  },
  {
    slug: "pencil-grip-guide",
    pillar: "writing-skills",
    title: "Pencil Grip Guide for Parents: Ages 3–6",
    summary:
      "The tripod grip explained for parents: how pencil grip develops, what to model, practical exercises — and what not to correct too early.",
    minutes: 7,
    products: ["alphabet-tracing-a-z"],
    answer:
      "Pencil grip develops in stages — fist grip, then fingers, then the mature tripod grip around age 4–6. Model the tripod grip (thumb and finger holding the pencil, resting on the middle finger), offer short tools and playful hand-strength games, and avoid constant correction, which kills motivation faster than any grip helps it.",
    sections: [
      {
        h: "The stages of grip (and what's normal when)",
        body: [
          "Grip development follows a well-trodden path, and every stage is normal at the right age:",
        ],
        list: [
          "Palmar/fist grip (1–2): the whole hand wraps the crayon, movement comes from the shoulder. Perfectly correct for a toddler.",
          "Digital pronate grip (2–3): fingers hold the crayon, palm faces down. Still shoulder-driven, and still fine.",
          "Static tripod (3–4): thumb, index and middle finger take over; the hand moves as a unit. This is the tripod arriving.",
          "Dynamic tripod (4–6): the mature grip — thumb and index finger move the pencil while it rests on the middle finger. Finger-driven, precise, and the goal.",
        ],
      },
      {
        h: "What the tripod grip actually looks like",
        body: [
          "Hold your pencil right now and look: thumb and index finger pinch the pencil about 2–3 cm from the tip, and the barrel rests back against the middle finger. The remaining fingers tuck comfortably underneath. The wrist sits fairly straight, and the movement comes from the fingers — try writing your name moving only your fingers.",
          "That's the whole thing. When you model it for your child, exaggerate slightly and narrate: 'pinch with these two fingers, rest it on this one.' Then hand the pencil over and let them try — once. Then move on and play.",
        ],
      },
      {
        h: "What NOT to correct too early",
        body: [
          "This is the most important section in this guide. A three-year-old with a fist grip doesn't have a problem — they have a three-year-old's hands. Constantly repositioning their fingers teaches them that drawing is a test they're failing.",
          "What actually moves grip forward is hand strength and maturity, not correction. A child with strong hands from playdough, climbing and peg games will slide into a tripod grip on their own schedule. A child nagged about grip will avoid drawing — and lose the very practise that builds it.",
          "So: model the grip when you draw together, offer tools that encourage it (below), and otherwise leave it alone until around four to five. Then, gentle guidance is fair game.",
        ],
      },
      {
        h: "Practical exercises that build grip without nagging",
        body: [
          "Every one of these develops the pinch strength and finger control behind a good grip — and none of them mentions the word 'grip':",
        ],
        list: [
          "Broken crayons: snap crayons short. A stubby crayon can't be fisted — the hand automatically shifts toward a tripod. Teachers have used this trick forever.",
          "Tweezers and tongs: transferring pom-poms, pasta or beads between bowls.",
          "Spray bottles: water play with a trigger spray builds serious finger strength.",
          "Clothes pegs: pegging, unpegging, pegging in patterns.",
          "Vertical surfaces: easels, chalkboards, or paper taped to the wall. Writing upright puts the wrist in the ideal position automatically — it's the closest thing to a cheat code.",
          "Playdough warm-ups: two minutes of squeezing before writing loosens and strengthens little hands.",
        ],
      },
      {
        h: "Tools that help (and honest notes on each)",
        body: [
          "Short pencils and crayons: the best first step. Short tools physically prevent fist grips and cost nothing.",
          "Triangular pencils: the shape guides fingers into position. They help some children noticeably and do nothing for others — worth trying, not worth stressing over.",
          "Pencil grips (the rubber add-ons): useful as a bridge for a child stuck in an awkward grip around age 5, especially the simple tripod-shaped ones. They're a scaffold, not a solution — pair them with the strength play above, and plan to remove them once the grip settles.",
          "Slant boards or angled surfaces: genuinely helpful for wrist position if your child hooks their wrist uncomfortably. A ring binder turned sideways works as a free trial.",
        ],
      },
      {
        h: "Paper position and posture",
        body: [
          "Grip gets the attention, but position does half the work. Tilt the paper slightly — top-right for right-handers, top-left for left-handers. Feet should reach the floor (or a footrest), table at elbow height, and the non-writing hand holds the paper still — 'helper hand' is a great phrase to teach.",
          "Watch for the hunched vulture: face inches from the paper usually means the chair is too low or the child is tired, not that anything is wrong with their eyes or grip. Fix the furniture before the fingers.",
          "For left-handed writers, everything mirrors: paper tilted top-left, and the pencil held a little further from the tip (3–4 cm) so they can see what they're writing instead of covering it with their hand. A quick check: if they're smudging everything and getting frustrated, the grip distance is usually the culprit.",
        ],
      },
      {
        h: "When to ask for help",
        body: [
          "Most grip quirks resolve with time and strength play. Mention it to the teacher or GP — who may suggest an occupational therapist — if: the fist grip persists well past five despite encouragement; your child complains of pain or tiredness when writing; they avoid all drawing and writing entirely; or the grip is so unusual it clearly blocks them (pencil held with a full fist at six, for example).",
          "This isn't alarming — occupational therapists see grip queries constantly, and early, light-touch advice usually sorts it. It's just worth a conversation rather than another year of hoping.",
        ],
      },
      {
        h: "Model it, don't lecture it",
        body: [
          "Children learn grip the way they learn everything physical: by watching and copying, over hundreds of repetitions. Draw with them, write shopping lists where they can see, narrate your own fingers once in a while — and trust the process.",
          "When the grip is settling and your child is ready for real letter formation practise, our alphabet tracing pack gives every letter with proper UK handwriting lines — the right moment to put that developing tripod grip to work.",
        ],
      },
    ],
    faqs: [
      [
        "What age should my child use a tripod grip?",
        "It typically emerges around 4–5 and settles by 6, but the normal range is wide — some three-year-olds tripod naturally, some five-year-olds are still transitioning. Strength play matters more than the calendar.",
      ],
      [
        "Are pencil grips worth buying?",
        "As a temporary bridge for a 5-year-old stuck in an awkward grip, yes — the simple tripod-shaped ones. As a magic fix, no. Pair them with hand-strength play and plan to phase them out once the grip is established.",
      ],
      [
        "My 4-year-old still holds the pencil in a fist — is that a problem?",
        "Usually not. Offer short crayons, do the strength games, model the tripod when you draw together — and give it time. If it's unchanged at 5–6, mention it to the teacher.",
      ],
      [
        "Should I worry about my left-handed child's grip?",
        "The grip itself is a mirror image and completely fine. Watch the practical bits instead: tilt the paper the other way, leave room on the left so their elbow doesn't clash with neighbours, and check whether smudging bothers them (pencils smudge less than felt tips).",
      ],
      [
        "Does writing on a vertical surface really help?",
        "Yes — it's one of the best-supported tricks. An easel or paper taped to the wall naturally extends the wrist into the ideal writing position, which makes a tripod grip almost automatic. Worth trying before buying any gadgets.",
      ],
      [
        "How long should writing practice last at this age?",
        "Minutes, not half-hours: 5–10 minutes at 3–4, building gradually. Two short sessions beat one long one, and stopping while it's still fun keeps them willing tomorrow.",
      ],
    ],
  },
  {
    slug: "scissor-skills-progression",
    pillar: "writing-skills",
    title: "Scissor Skills Progression (Ages 3–5)",
    summary:
      "The scissor skills progression: snipping, straight lines, zigzags, curves and shapes — with safety basics and left-handed tips for parents.",
    minutes: 6,
    products: ["scissor-skills"],
    answer:
      "Scissor skills build in stages: snipping playdough and paper strips first, then straight lines, zigzags, curves and finally shapes. Start around age 3 with child-safe scissors and close supervision, keep sessions short, and expect wobbly lines for a long time — that's the normal learning curve, not a problem.",
    sections: [
      {
        h: "Why cutting matters (it's not just craft)",
        body: [
          "Cutting is one of the finest fine-motor workouts available. It demands bilateral coordination — the two hands doing different jobs at once, one cutting, one turning the paper — plus hand strength, hand-eye coordination and sustained concentration.",
          "That's why the EYFS treats it as a core physical-development skill, not just an art activity. The control children build with scissors transfers directly to pencil control: the same small muscles, the same two-hands-working-together.",
        ],
      },
      {
        h: "Safety first: the non-negotiables",
        body: [
          "Before any cutting happens, set the rules once and enforce them calmly every time:",
        ],
        list: [
          "Child-safe scissors only: blunt tips, small loops, sized for little hands",
          "Sitting down at a table — no walking, running or waving with scissors, ever",
          "An adult in the room and watching, especially under 4",
          "Scissors stay on the table when not cutting; they get handed handle-first",
          "Cut away from fingers and bodies — paper held at the edges, not near the line",
        ],
      },
      {
        h: "Stage 1: snipping (around age 3)",
        body: [
          "Forget lines entirely. The first skill is simply opening and closing the scissors — and the best material isn't paper, it's playdough. Rolling playdough into snakes and snipping them into pieces gives satisfying resistance that builds hand strength, with zero frustration about accuracy.",
          "Paper strips come next: narrow strips of card that your child snips into confetti. Short, single snips. No lines to follow, no wrong answers — just snip, snip, snip. This stage can happily last weeks.",
          "Watch their hands during snipping: the helping hand should hold the strip steady while the cutting hand does the work. If both hands try to do everything, gently hold the strip with them once or twice — then let go. They'll get it.",
        ],
      },
      {
        h: "Stage 2: straight lines",
        body: [
          "When snipping is confident, introduce lines — thick ones first. A line 1–2 cm wide is far more forgiving than a hairline, and success matters more than precision at this stage.",
          "Teach the rhythm: 'open, push forward, close' — small bites along the line rather than long dramatic cuts. Put a green dot where each line starts ('start here') so they learn to begin at the beginning rather than attacking from the middle.",
          "Thumbs up is the mantra: the thumb goes in the small loop and points to the ceiling. If the thumb droops sideways, the cutting weakens — one gentle reminder per session is plenty.",
          "Length matters too: start with short lines (5–8 cm) so success comes quickly, then gradually lengthen. A child who cuts three short lines happily will attempt a long one; a child faced with a 20 cm line first often gives up halfway. Build the wins small, then stretch them.",
        ],
      },
      {
        h: "Stage 3: zigzags, waves and curves",
        body: [
          "Here's the secret professionals know: for curves, the cutting hand stays fairly still and the other hand turns the paper. Demonstrate this explicitly — most children try to steer the scissors round the bend, which is much harder.",
          "Order of difficulty: gentle waves, then zigzags (stop-start at each point), then full curves, then spirals. Each one is a genuine step up. Expect this stage to span months, not days.",
          "Zigzags deserve a special mention because they teach something new: stopping. Each point of the zigzag needs the scissors to stop, the paper to turn slightly, and cutting to restart. That's impulse control as much as motor skill — and it's why zigzag-cutting children often show better pencil control too. Celebrate the corners, not just the lines.",
        ],
      },
      {
        h: "Stage 4: shapes",
        body: [
          "Cutting out shapes combines everything: straight lines, corners (stop, turn the paper, restart) and curves. Start with squares — four straight cuts with pauses at the corners — before attempting circles, which need continuous smooth turning and are genuinely hard.",
          "A satisfying project: cut simple shapes and glue them into pictures — a house from a square and triangle, a flower from circles. The cutting has a purpose, and the fridge gets new art.",
        ],
      },
      {
        h: "Left-handed cutters",
        body: [
          "This matters more than most parents realise. Standard scissors are right-handed: the blades are arranged so a right-hander's grip pushes them together. A left-handed child using right-handed scissors gets blades that push apart — cutting becomes mysteriously difficult and the child looks 'bad at cutting' when the tool is the problem.",
          "Left-handed child-safe scissors exist, they're inexpensive, and they make an enormous difference. Also seat left-handed cutters on the left at shared tables so elbows don't collide, and mirror your demonstrations rather than expecting them to flip your right-handed demo mentally.",
        ],
      },
      {
        h: "Keeping it fun for months",
        body: [
          "Scissor skills develop over a year or more, so variety is everything: fringe a paper plate to make a lion's mane, cut straws into beads for threading, snip herbs (with supervision) for play cooking, make paper chains, cut out catalogue pictures for collages.",
          "Short sessions, genuine praise for effort ('look how far along the line you got!'), and zero red-pen energy about wobbles. The lines straighten on their own schedule.",
          "And keep the end products: a folder of 'look what I cut' builds pride over months in a way nothing else does. Date a few pieces — future you will love seeing the wobbly January lines next to the confident June shapes.",
          "If you'd like the progression ready to print — snipping strips, thick-to-thin lines, zigzags, waves, curves and shapes in order — our scissor skills pack lays out the whole journey in nine pages, each with 'start here' dots to guide little hands.",
        ],
      },
    ],
    faqs: [
      [
        "What age can children start using scissors?",
        "Around 3 for supervised snipping with child-safe scissors, though readiness varies — interest and the ability to follow the safety rules matter more than the birthday. Line-cutting typically follows at 3½–4.",
      ],
      [
        "Do I need special scissors?",
        "Child-safe scissors with blunt tips and small loops, yes. For left-handed children, left-handed scissors specifically — standard scissors genuinely don't work properly in the left hand. Beyond that, no special features needed.",
      ],
      [
        "My child can't cut on the line — help?",
        "Make the lines thicker, the sessions shorter, and check the technique: thumb up, small bites, other hand turning the paper on curves. Most 'can't' is really 'the task is currently too hard' — drop back a stage and rebuild.",
      ],
      [
        "How do I teach them to hold scissors properly?",
        "Thumb in the small loop pointing up, fingers in the big loop, other hand holding the paper at the edges. Show them once hand-over-hand if needed, then let them practise — one reminder per session, not per cut.",
      ],
      [
        "Is cutting playdough as good as cutting paper?",
        "For stage 1, it's better — the resistance builds the hand strength paper can't. Move to paper strips once the open-close action is confident. Both have their place in the progression.",
      ],
      [
        "How long until neat cutting?",
        "Months, honestly — often a year from first snips to tidy shapes. Reception expects willing participation and developing control, not precision. Wobbly lines at 4 are the curriculum working, not a concern.",
      ],
    ],
  },
  {
    slug: "screen-free-learning-routine",
    pillar: "school-readiness",
    title: "Screen-Free Learning Routine for Ages 3–6",
    summary:
      "A realistic screen-free learning routine for ages 3–6: a sample weekly plan built around printables, play and reading — no guilt, no marathon sessions.",
    minutes: 8,
    products: ["ultimate-bundle"],
    answer:
      "A screen-free routine for 3–6 year olds works best in short daily pockets: 10–15 minutes of printable practice, reading together, and learning woven into play and chores. The sample week below mixes phonics, maths, writing and motor skills across five days — about an hour a week of sit-down learning in total, with play doing the rest.",
    sections: [
      {
        h: "Why 'screen-free' doesn't mean 'lesson-heavy'",
        body: [
          "Let's be honest first: at 3–6, play IS the curriculum. Building towers teaches physics, arguing over rules teaches negotiation, and drawing all over everything teaches fine motor control. A screen-free routine isn't about replacing tablets with worksheets — it's about making sure the day has rich, hands-on things in it.",
          "Also: no guilt. Screens exist, family life is busy, and an episode of something while you cook dinner has never ruined a child. This guide is for parents who want a screen-free learning rhythm in the day — not a moral position on technology.",
        ],
      },
      {
        h: "The building blocks of the week",
        body: [
          "Across a week, aim to touch each of these — briefly, playfully, without ceremony:",
        ],
        list: [
          "Phonics: 10 minutes daily of the routine in our phonics-at-home guide — revisit, blend, write, read",
          "Maths: counting in real life plus one focused activity (number formation, simple addition, shapes)",
          "Writing and fine motor: pre-writing strokes, tracing, cutting, threading, playdough",
          "Reading aloud: 10–15 minutes daily — the highest-value learning time there is",
          "Free play: the largest block by far, and doing more teaching than everything else combined",
        ],
      },
      {
        h: "A sample week: ages 3–4 (20–30 minutes a day)",
        body: [
          "At this age, keep sit-down learning to one short pocket a day — everything else is play with learning smuggled inside:",
        ],
        list: [
          "Monday: pre-writing play — chalk shapes on the pavement, 10 minutes",
          "Tuesday: counting everywhere — stairs, snacks, socks; count together all day",
          "Wednesday: scissor snipping — playdough snakes and paper strips, 10 minutes",
          "Thursday: colour and shape hunt around the house, then colour one picture",
          "Friday: favourite activity repeated — repetition is how this age learns",
          "Every day: bedtime story, plus rhymes and songs (Phase 1 phonics in disguise)",
        ],
      },
      {
        h: "A sample week: ages 4–6 (30–45 minutes a day)",
        body: [
          "Reception-age children can handle a little more structure — two short pockets rather than one long session:",
        ],
        list: [
          "Monday: phonics routine (10 min) + number formation tracing (10 min)",
          "Tuesday: phonics routine (10 min) + simple addition with real objects (10 min)",
          "Wednesday: phonics routine (10 min) + scissor skills lines and shapes (10 min)",
          "Thursday: phonics routine (10 min) + tricky word games (10 min)",
          "Friday: child chooses — revisit the week's favourite, then free choice",
          "Every day: reading aloud together, 10–15 minutes",
        ],
      },
      {
        h: "Reading aloud: the highest-value 15 minutes",
        body: [
          "If you do nothing else in this guide, do this. Reading aloud daily builds vocabulary, story structure, attention and — eventually — the desire to read independently. It's the most evidence-backed activity in early childhood, and it takes fifteen minutes.",
          "Make it interactive as they grow: ask what might happen next, let them 'read' familiar pages from memory, connect stories to their life ('remember when we saw a duck like that?'). This back-and-forth — sometimes called dialogic reading — multiplies the benefit. And keep reading aloud long after they can read alone; listening comprehension runs years ahead of reading ability.",
          "Struggling to fit it in? Reading aloud doesn't have to mean bedtime. Breakfast reading, bath-time stories, a chapter in the car — the slot matters less than the daily habit. And let them choose the book, even if it's the same one for the twentieth time. Repetition is how young children learn language patterns; your boredom is their brain building.",
        ],
      },
      {
        h: "Learning hidden in everyday life",
        body: [
          "The routine above is the visible part. The invisible part — woven through the day — teaches just as much:",
        ],
        list: [
          "Cooking: weighing, counting spoonfuls, halving (early fractions!), sequencing a recipe",
          "Shopping lists: your child 'writes' the list (marks, scribbles, copied letters) and ticks items off",
          "Walks: I-spy with pure sounds, counting red cars, spotting shapes in buildings",
          "Tidying: sorting toys by type, colour or size is early classification",
          "Bath time: pouring and filling teaches capacity; foam letters teach sounds",
        ],
      },
      {
        h: "When the routine falls apart (it will)",
        body: [
          "Sick days, holidays, new siblings, bad weeks — the routine will break, regularly. Here's the honest framework: aim for the routine 80% of the time and let the rest go without guilt. A child who does the routine four days a week for a year learns enormously; a child whose parent burns out chasing perfection learns that learning is stressful.",
          "On broken days, keep just one thread: the bedtime story. It takes fifteen minutes, it needs no preparation, and it holds the learning rhythm until normal life resumes.",
          "And if your child resists a particular activity for weeks — not days, weeks — believe them. Swap it for something else in the same area. The goal is a child who likes learning, not a completed checklist.",
        ],
      },
      {
        h: "Start where you are",
        body: [
          "You don't need to implement the whole week on Monday. Start with two things: the bedtime story (if it isn't happening already) and one ten-minute pocket that matches what your child enjoys most. Add a second pocket when the first feels easy. In a month, you'll have a routine — built gradually, which is exactly how habits that last are made.",
          "If you'd like the printable pages for every pocket in the week — phonics, numbers, addition, tricky words, scissor skills, shapes and colouring in one download — the Ultimate Bundle covers the full routine in 100 pages you can print as often as you like. Buy once, use for years, with siblings too.",
        ],
      },
    ],
    faqs: [
      [
        "How much 'learning time' does a 4-year-old need each day?",
        "Less than most parents fear: 20–45 minutes of focused activity plus reading aloud, with the rest of the day in play. Play at this age is genuinely educational — it's not the break from learning, it's the main event.",
      ],
      [
        "Is some screen time actually harmful?",
        "The honest answer: no credible evidence says a moderate amount of quality screen time harms young children. What matters is what it displaces — if screens replace sleep, play, reading and conversation, that's the problem, not the screen itself. Balance, not banishment.",
      ],
      [
        "What if we miss days — or weeks?",
        "The routine bends; it doesn't break. Four days a week sustained over months beats a perfect fortnight followed by burnout. On chaotic days, keep just the bedtime story and restart tomorrow without guilt.",
      ],
      [
        "Should weekends be learning-free?",
        "Mostly, yes — weekends are for family, rest and free play. If your child asks for their tracing or cutting pages (many do once it's habit), that's play, not school — let them. Reading aloud together is always welcome.",
      ],
      [
        "Can I use this routine alongside nursery or school?",
        "Yes — keep home learning light when school is in session. Ten minutes of phonics practise plus reading aloud is plenty on school days; save the longer pockets for weekends and holidays. If school sends homework, that replaces the equivalent pocket rather than adding to it.",
      ],
      [
        "Do I need to buy lots of materials?",
        "No. Printable pages, household items (pasta for counting, pegs for fine motor), library books and the great outdoors cover everything in this guide. One set of printables reused across siblings costs less than a single term of most activity subscriptions.",
      ],
    ],
  },
  {
    slug: "counting-to-10-activities",
    pillar: "early-maths",
    title: "Counting to 10: Fun Activities That Work",
    summary:
      "How to teach counting to 10: one-to-one correspondence, cardinality and subitising explained simply, plus counting games that work at home.",
    minutes: 7,
    products: ["numbers-1-to-20"],
    answer:
      "Counting to 10 means more than reciting numbers: your child needs one-to-one correspondence (one number per object), cardinality (the last number tells how many), and the number words in stable order. Practise by counting real things slowly — stairs, snacks, toys — touching each one, and always finishing with 'so that's five altogether.'",
    sections: [
      {
        h: "Counting is actually five skills, not one",
        body: [
          "When a child rattles off 'one-two-three-four-five', parents naturally celebrate — and it is worth celebrating. But reciting the number words in order is only one part of counting. Teachers talk about five principles children have to put together, and knowing them helps you spot exactly where your child is stuck.",
          "In plain parent language, the five are: saying the number words in the right order; giving one number word to each object (and only one); understanding that the last number you say tells you how many there are; knowing you can count anything — sounds, jumps, ideas; and knowing it doesn't matter which object you start with.",
          "You don't need to memorise this list. You just need to know that 'can't count yet' usually means one specific piece is missing — and each section below tells you how to practise that piece.",
        ],
      },
      {
        h: "One-to-one correspondence: one number, one object",
        body: [
          "This is the piece most young counters get wrong: they say numbers faster than they point, or point twice at the same teddy. One-to-one correspondence means each object gets exactly one number word, said as it is touched.",
          "Slow it down. Ask your child to touch — or better, move — each object as they count it: slide each pasta piece into a bowl, drop each conker into a bucket, tap each stair. Moving beats pointing, because it stops double-counting.",
          "Line objects up in a row to start with; a scattered pile is much harder. When they can count a neat row of ten without rushing, scatter them and try again.",
        ],
        list: [
          "Slide-and-count: move beads, pasta or buttons one at a time into a container",
          "Stair counting: one number per step, going up and down",
          "Touch-and-say: tap each picture in a book as you count",
          "Put one biscuit on each plate — counting with a purpose",
        ],
      },
      {
        h: "Cardinality: the last number is the answer",
        body: [
          "Here is the moment that turns reciting into real maths: after counting five ducks — 'one, two, three, four, five' — the child understands that 'five' means how many ducks there are. This is cardinality, and it doesn't arrive automatically.",
          "You'll know it's missing when you ask 'how many?' and your child starts counting all over again, or just repeats the last word without meaning it. The fix is modelling: every time you count together, finish with the magic phrase — 'one, two, three, four — so that's four altogether.'",
          "Then hand the question back: 'You count, then tell me — how many altogether?' The word 'altogether' is doing real teaching work here. Use it constantly.",
        ],
      },
      {
        h: "Subitising: recognising small numbers at a glance",
        body: [
          "Subitising (a word teachers love) just means seeing how many without counting: you look at two apples and instantly know 'two'. Adults subitise up to about five; children build it through games.",
          "Dice are the classic tool — roll, and ask 'how many?' before they start pointing. Dominoes, fingers held up quickly, and plates with a few biscuits all work. Start with 1–3, then stretch to 4 and 5.",
          "Why bother? Subitising is the foundation of number bonds later: a child who sees 'four' as a pattern (not four separate ones) finds it much easier to learn that 4 and 1 make 5. It's also genuinely fun — quick-fire games feel like play, not lessons.",
        ],
      },
      {
        h: "Counting games that actually work",
        body: [
          "The best counting practice doesn't look like practice. It happens in the gaps of the day, with things your child already cares about:",
        ],
        list: [
          "Hide and seek: the seeker counts to 10 (or 20) — real motivation to get the order right",
          "Snack maths: 'Can you get me five raisins? Now eat two — how many left?'",
          "Number hunts: hide number cards 1–10 around the room; find them and put them in order",
          "Clap, stamp, jump: count actions instead of objects — ten star jumps is very memorable",
          "Setting the table: one fork per person, counting as you go",
          "Parking toy cars: numbered bays 1–10, drive each car to its number",
          "Keep sessions to five minutes. Ten happy counts beat thirty forced ones.",
        ],
      },
      {
        h: "Mistakes that are completely normal",
        body: [
          "Skipped numbers ('one, two, five, nine…'), numbers in a jumbled order, counting the same object twice, recounting from one every time you ask 'how many?' — all completely normal between ages 3 and 4. The number-word sequence is essentially a song at first; meaning comes later.",
          "Correct gently and rarely: just say the sequence back correctly and move on. 'One, two, three, four, five — you did it!' Heavy correction turns counting into a test, and tested children stop volunteering.",
          "One thing worth doing deliberately: count backwards sometimes (ten to one, like a rocket launch). It proves they know the sequence rather than just chanting it, and children love it.",
        ],
      },
      {
        h: "From counting to 10 to what comes next",
        body: [
          "Once 1–10 is solid — counted slowly, one-to-one, with 'how many?' answered confidently — the natural next steps are counting to 20, counting backwards from 10, and counting in twos later on. Don't rush: a deep, confident 1–10 beats a wobbly 1–100.",
          "You'll also notice counting and writing numbers are different skills. Counting is saying and knowing how many; number formation is writing the numeral — and reversed 2s and 5s are normal for years. Practise them separately and neither will frustrate the other.",
          "If you'd like print-and-go pages that pair counting with number formation — trace every numeral 1–20, count the dots, learn the number words — our Numbers 1–20 pack turns the skills in this guide into pages you can print as often as you like.",
        ],
      },
    ],
    faqs: [
      [
        "What age should my child count to 10?",
        "Most children recite to 10 between 3 and 4, and count objects reliably — one number per object, knowing how many — between 4 and 5. Both ranges are wide and both are normal. Worry less about the birthday and more about the pieces: if they can count five objects one-to-one and tell you 'five altogether', they're doing brilliantly.",
      ],
      [
        "My child skips numbers when counting — is that normal?",
        "Completely. The sequence is learned like a song, and songs get muddled. Just model it back correctly — 'one, two, three, four, five' — without making it a correction. If they're still jumbling the order past 5, lots of stair-counting and hide-and-seek counting will sort it out.",
      ],
      [
        "Should I correct every miscount?",
        "No — correct rarely and lightly. Every interrupted count teaches your child that counting is a performance you're judging. Model the right answer, celebrate the effort, and let accuracy arrive through repetition. Save corrections for when they're calm and receptive, not mid-game.",
      ],
      [
        "What's the difference between counting and number formation?",
        "Counting is knowing how many — a thinking skill. Number formation is writing the numeral — a physical skill. A child can count to 20 long before they can write '17' legibly, and that's fine. Our number formation guide covers the writing side; this guide is the thinking side.",
      ],
      [
        "How do I teach 'how many?' without quizzing them constantly?",
        "Narrate it yourself first: count their toys and announce 'six altogether!' while they listen. After a week of hearing it, start pausing before the total and let them fill it in. It becomes their idea, not your test.",
      ],
      [
        "Do I need special toys or an app?",
        "No. Pasta, buttons, stairs, snacks and fingers have taught counting for generations. Dice and dominoes are nice for subitising if you have them. Save your money — the teaching is in how you count together, not what you count with.",
      ],
    ],
  },
  {
    slug: "number-bonds-to-5",
    pillar: "early-maths",
    title: "Number Bonds to 5 (and Why They Matter)",
    summary:
      "Number bonds to 5 explained for parents: what they are, why 5 comes before 10, five-frame activities and games that make the pairs stick.",
    minutes: 7,
    products: ["simple-addition-1-10"],
    answer:
      "Number bonds to 5 are the pairs that make 5: 0+5, 1+4, 2+3, 3+2, 4+1 and 5+0. Children learn them by splitting five real objects into two groups, using a five-frame, and playing quick games — not by memorising sums. Knowing these pairs by heart makes bonds to 10, and all early addition, dramatically easier.",
    sections: [
      {
        h: "What number bonds actually are",
        body: [
          "A number bond is simply a pair of numbers that make a target number. The bonds to 5 are the six ways to split five: 0 and 5, 1 and 4, 2 and 3, 3 and 2, 4 and 1, 5 and 0. (Yes, the zero pairs count — they teach that adding nothing changes nothing.)",
          "The goal isn't for your child to recite these like times tables. It's for them to know, instantly, that 5 splits into 2 and 3 — the way you know your own phone number. That instant recall is what later makes 7 + 5 easy: it's (5 + 2) + 5, using the bond.",
          "This guide focuses on bonds to 5 because that's where schools start. Bonds to 10 come next, and they're built directly on these — a child who owns the 5-bonds learns the 10-bonds in half the time.",
        ],
      },
      {
        h: "Why 5 comes before 10",
        body: [
          "Five is the number children carry around with them: one hand. Hold up three fingers and ask 'how many are down?' — that's a bond to 5 happening on their own body. No equipment needed, ever.",
          "Five is also small enough to see all at once. A child can subitise five dots in a pattern; ten is too many to grasp whole. So bonds to 5 are learned as complete pictures, which is exactly how instant recall forms.",
          "And practically: the five-frame (below) is the single best teaching tool in early maths, and it only works because five is the right size. Master 5 now; 10 becomes 'two fives' later — which is itself a bond.",
        ],
      },
      {
        h: "Concrete first: splitting real things",
        body: [
          "Start with five identical objects — conkers, buttons, grapes. Put them in a pile and ask your child to split them into two groups: 'some for me, some for you'. Count each group. That's a bond, discovered, not taught.",
          "Do it again and again, finding different splits. Line the pairs up: 1 and 4, 2 and 3… Let them notice that 2+3 and 3+2 are the same pair swapped — commutativity, learned at the kitchen table years before the word appears.",
          "Use part-part-whole language naturally: 'The whole is five. One part is two. What's the other part?' You don't need a printed template for this — two plates and five biscuits work perfectly.",
        ],
      },
      {
        h: "The five-frame: the tool worth making",
        body: [
          "A five-frame is a row of five empty boxes. That's it — draw one on paper, or lay out five egg-box cups. Put counters in some boxes and ask how many are empty; the frame makes the pair visible as one picture.",
          "Show 3 filled and ask 'how many more to make 5?' — that's a missing-part bond, the exact skill that later becomes subtraction. Flash a frame for two seconds and ask 'how many?' — that's subitising practice folded in.",
          "One step further: the 'five-frame flash'. Fill it, cover it, ask 'how many were there? How many spaces?' Holding the picture in memory is what turns a played game into known fact.",
        ],
      },
      {
        h: "Games that make the pairs stick",
        body: [
          "Bonds are learned through repetition, and repetition only happens if it's fun. These five games do the repeating for you:",
        ],
        list: [
          "Ping-pong bonds: you say '2', they say '3!' — rally back and forth, faster each round",
          "Missing part: show 5 fingers, fold some down — 'how many are hiding?'",
          "Snap pairs: homemade cards 0–5, snap when two cards make 5",
          "Dice duel: roll a die (1–5), shout the number that makes 5 with it",
          "Five-frame bingo: fill frames differently; first to spot '3 and 2' wins",
          "Two minutes a day beats twenty minutes on Sunday. Bonds become instant through dozens of tiny recalls, not one long session.",
        ],
      },
      {
        h: "From knowing to using",
        body: [
          "You'll know a bond is truly learned when your child uses it without thinking: 'I have 3, I need 2 more to have 5.' That usually arrives weeks after they can answer your questions correctly — using is harder than answering.",
          "Watch for it in real life and name it: 'You knew 2 and 3 make 5 — that's a number bond!' Naming the skill helps them notice they're doing maths, which builds the identity of 'someone who's good at numbers'.",
          "Resist moving to bonds to 10 until the 5-bonds are instant. A shaky 5 makes a miserable 10; a solid 5 makes 10 feel like a puzzle they've already half-solved.",
        ],
      },
      {
        h: "Bonds to 5 today, confident adding tomorrow",
        body: [
          "Number bonds aren't a separate topic from addition — they're the engine inside it. Every '5 + 3' your child will ever meet runs on bonds they learned now. Five minutes of splitting, framing and ping-pong games a day builds more maths than any worksheet marathon.",
          "Our full addition guide walks through the whole journey from concrete objects to written number sentences; this guide is the deep dive on the facts underneath it all. For print-and-go practice — every addition fact to 10 with counting dots and traceable equations — the Simple Addition pack gives you pages to revisit whenever a bond needs reinforcing.",
        ],
      },
    ],
    faqs: [
      [
        "What are all the number bonds to 5?",
        "0+5, 1+4, 2+3, 3+2, 4+1 and 5+0. Each pair adds to five. The zero pairs (0+5 and 5+0) matter too — they teach that adding nothing leaves the number unchanged, which surprises more children than you'd expect.",
      ],
      [
        "Why not teach bonds to 10 straight away?",
        "Because 10 is too big to see whole, and bonds learned by rote chanting don't stick. Bonds to 5 are learned as pictures — a hand, a five-frame — and become instant recall. Then bonds to 10 are just 'two fives' plus what they already know. Skipping 5 is the slow route disguised as the fast one.",
      ],
      [
        "My child can work out 2+3 but doesn't 'just know' it — is that a problem?",
        "Not at all — working it out is the stage before knowing it. Instant recall grows out of dozens of successful workings-out, not from being drilled. Keep playing the games; one day the answer will arrive before the counting does, and you'll both notice.",
      ],
      [
        "Should they be writing number sentences yet?",
        "Not necessarily. Bonds to 5 live happily in the world of objects, fingers and five-frames for a long time. Introduce '2 + 3 = 5' when they're curious about writing it — usually alongside early addition work. Writing too early turns a thinking game into handwriting practice.",
      ],
      [
        "How long does it take to learn the bonds to 5?",
        "With a few minutes of games most days, children typically know the pairs within a few weeks and recall them instantly within a couple of months. There's no deadline — and a child who learns them slowly through play keeps them longer than one who memorises them under pressure.",
      ],
      [
        "What if my child finds it boring?",
        "Then the game is wrong, not the child. Swap ping-pong for snack-splitting ('3 for you, 2 for me — that's 5!'), or make it physical with jumping and clapping. Bonds hide in everything; if one game bores them, the maths isn't the problem.",
      ],
    ],
  },
  {
    slug: "line-tracing-progression",
    pillar: "writing-skills",
    title: "Line Tracing: The Full Progression",
    summary:
      "The line tracing progression, level by level: finger tracing to thin lines, mazes and shapes — when to move up, and how to know your child is ready.",
    minutes: 7,
    products: ["alphabet-tracing-a-z"],
    answer:
      "Line tracing progresses in four levels: finger tracing big shapes, thick dashed lines with chunky crayons, thinner lines with zigzags and curves, then mazes and closed shapes. Move up when the current level looks easy and relaxed — not perfect. Short, happy sessions build the pencil control that makes letter formation dramatically easier later. Give each level weeks, not days.",
    sections: [
      {
        h: "What line tracing actually builds",
        body: [
          "Line tracing looks simple — follow the dashes — but it trains four things at once: hand-eye coordination (the hand goes where the eye looks), pencil control (staying on a path), directionality (left to right, top to bottom, the habits reading and writing need), and pressure control (not pressing through the paper or floating above it).",
          "That's why it's the bridge between scribbling and letter formation. Letters are just small, precise traced paths — and a child who can trace a wavy line smoothly already owns half the skill.",
          "One honest note: tracing is practice, not art. Don't worry if they show zero interest in 'staying in the lines' of a colouring page — that's a different skill, and a much less important one. This guide is about following paths, not colouring neatly.",
        ],
      },
      {
        h: "Level 1: finger tracing — no pencil yet",
        body: [
          "Start with the finger, not the pencil. A finger can't be gripped wrong, pressed too hard or snapped in frustration — it removes every barrier except the one you're actually teaching: following a path.",
          "Draw big shapes in sand, shaving foam, or with chalk on the pavement: circles, waves, zigzags as tall as their arm. Trace raised lines — glue dried on card, or a finger along a rope glued in a wavy line. Big movements train the shoulder and elbow, which is where pencil control actually starts.",
          "Stay here until big paths feel easy and fun — usually a week or two of occasional play. There's no rush; everything that follows is easier for a child whose arm knows the way. If they invent their own paths — a wavy road for a toy car, a circle round a sticker — celebrate it; self-chosen tracing is the best kind.",
        ],
      },
      {
        h: "Level 2: thick lines and simple paths",
        body: [
          "Now introduce the chunky crayon or marker — the fatter the better, because it forgives the grip. Offer wide, bold dashed lines: straight lines first, then gentle curves and big waves.",
          "Green start dots matter enormously: a dot where the line begins teaches direction without a single word of instruction. Left-to-right, top-to-bottom habits form here, silently.",
          "Keep the paths short — three or four inches. A short line completed beats a long line abandoned. And sit beside them doing your own page: tracing is contagious, lecturing isn't.",
        ],
      },
      {
        h: "Level 3: thinner lines, trickier paths",
        body: [
          "When thick straight lines look relaxed — smooth, unhurried, roughly on the dashes — narrow the lines and complicate the paths: zigzags with sharp corners, loops, spirals, and lines that change direction.",
          "Corners are the milestone: stopping precisely at a corner and turning is much harder than flowing through a curve. Celebrate corners specifically — 'you turned right at the corner!' — because that's the skill letters like 'k' and 'z' will demand.",
          "If frustration appears, drop back a level without comment. Going back isn't failing; it's how the level gets consolidated. Most children bounce between levels 2 and 3 for weeks, and that's exactly right.",
        ],
      },
      {
        h: "Level 4: shapes, mazes and staying the course",
        body: [
          "The final level adds planning: closed shapes (trace the whole way round and finish where you started), simple mazes (choose the path, then follow it), and longer winding paths.",
          "Mazes are the graduation exercise — they combine everything: direction, corners, sustained control, and thinking ahead. Start with very easy ones (one or two dead ends) and let them trace the solution with a finger first.",
          "You'll notice colouring-inside-the-lines improving as a side effect now. It was never the goal, but the control transfers — a nice bonus, not something to demand.",
        ],
      },
      {
        h: "When to move up (and when to step back)",
        body: [
          "Move up when the current level looks easy: smooth, fairly quick, and — most importantly — relaxed. A relaxed hand is a learning hand; a tense, white-knuckled hand is a hand that's surviving, not learning.",
          "Step back when you see avoidance (suddenly 'thirsty' every tracing session), tears, or a grip that collapses into a fist. All three mean the challenge outran the skill. Drop a level for a week; confidence returns fast.",
          "And the golden rule across all levels: stop while it's fun. One page done happily teaches more than three pages done miserably. The progression works on months, not days.",
        ],
      },
      {
        h: "From lines to letters: the handover",
        body: [
          "You'll know they're ready for letters when level 4 feels easy: smooth mazes, confident corners, relaxed grip. At that point, letter formation is just tracing with meaning — and the strokes themselves (the curves, lines and circles letters are built from) are covered in our pre-writing skills guide.",
          "Start with the letters in their name — motivation beats alphabetical order every time. Big letters first, on the same kind of dashed lines they've already mastered; only the shape is new, not the skill.",
          "If you'd like the next step as print-and-go pages — every letter A–Z as a giant traceable letter on proper UK handwriting lines, with a starter word for each — our Alphabet Tracing pack picks up exactly where this progression leaves off.",
        ],
      },
    ],
    faqs: [
      [
        "What age should my child start tracing lines?",
        "Finger tracing can start whenever they're interested — often around 2½ to 3. Pencil tracing usually clicks between 3 and 4. But interest matters more than age: a keen 2-year-old with shaving foam is better placed than a bored 4-year-old with a worksheet.",
      ],
      [
        "My child scribbles over the page instead of following the line — what do I do?",
        "Drop back to level 1: big finger tracing in sensory materials, where 'following' is the whole game and there's no pencil to fight. Scribbling usually means the fine-motor demand outran the fun — make it bigger, messier and pencil-free for a while.",
      ],
      [
        "Thick or thin lines to start with?",
        "Thick, always. A wide dashed line forgives wobbles and lets the child feel successful, which is what brings them back tomorrow. Thin lines are level 3 — they're a goal, not a starting point.",
      ],
      [
        "How long should a tracing session last?",
        "Five to ten minutes, ending while it's still fun. One page, or even half a page, is a complete session at this age. If they ask for more, that's wonderful — but never assign more.",
      ],
      [
        "Does tracing actually help with writing letters later?",
        "Yes — it's the direct preparation. Letters are precise traced paths, and every level here (direction, corners, smooth curves, pressure) transfers straight into letter formation. Children who trace confidently typically learn letter formation faster and with far less frustration.",
      ],
      [
        "Anything different for left-handed children?",
        "Very little at this stage. Left-handers may naturally want to trace right-to-left — gently encourage left-to-right with the start dots, since reading and writing demand it, but don't make it a battle. Smudging bothers some lefties with pencils; chunky crayons smudge less.",
      ],
    ],
  },
  {
    slug: "phase-3-phonics-sounds-order",
    pillar: "phonics",
    title: "Phase 3 Phonics Sounds in Order",
    summary:
      "Every Phase 3 sound in teaching order — Sets 6 and 7, consonant and vowel digraphs, pure-sound tips, blending words and the 12 tricky words.",
    minutes: 8,
    products: ["phonics-phase-3"],
    answer:
      "Phase 3 teaches 26 graphemes in order: Set 6 (j, v, w, x), Set 7 (y, z, zz, qu), consonant digraphs (ch, sh, th, ng), then vowel digraphs (ai, ee, igh, oa, oo, ar, or, ur, ow, oi, ear, air, ure, er). It runs through Reception's spring term — keep sounds pure so blending keeps working as words get longer.",
    sections: [
      {
        h: "Where Phase 3 fits — and when it starts",
        body: [
          "Phase 3 is the natural sequel to Phase 2. Where Phase 2 taught single letter sounds (s, a, t, p…), Phase 3 teaches the sounds that need two or three letters to write down — sh, ch, th, ng, ai, ee, igh and friends. Most schools teach it in the spring term of Reception, roughly January to March, over about twelve weeks.",
          "The entry ticket is a reasonably secure Phase 2: your child knows most single-letter sounds and can blend simple CVC words like sat, pin and duck. If Phase 2 is still wobbly, don't rush forward — a shaky foundation makes digraphs genuinely confusing, while two more weeks of Phase 2 games costs nothing. When blending feels easy, Phase 3 is the right next mountain.",
          "One reassuring fact: nothing about how you help changes. The same pure sounds, the same blending routine, the same short daily practice from our Phase 2 guide — just with longer spellings and longer words.",
        ],
      },
      {
        h: "The Phase 3 sounds, in teaching order",
        body: [
          "Schools teach the sounds in a fixed sequence, and the sequence is deliberate: the first new sounds unlock new words immediately, and the harder vowel spellings come once children are confident with consonant digraphs. Here is the full order from Letters & Sounds:",
        ],
        list: [
          "Set 6: j, v, w, x — jug, van, web, box (x says 'ks', as in box)",
          "Set 7: y, z, zz, qu — yes, zip, buzz, queen (qu is always 'kw', and the u never works alone)",
          "Consonant digraphs: ch, sh, th, ng — chop, ship, thin, ring",
          "Vowel digraphs: ai, ee, igh, oa — rain, see, light, boat",
          "oo — two sounds for one spelling: short oo as in book, long oo as in moon",
          "ar, or, ur — car, fork, burn",
          "ow, oi — cow, coin",
          "ear, air — hear, hair",
          "ure, er — pure, her",
        ],
      },
      {
        h: "Digraphs and trigraphs, explained for grown-ups",
        body: [
          "A digraph is two letters that make one sound: sh in ship, ai in rain. A trigraph is three letters making one sound: igh in light. English has around 44 sounds but only 26 letters, so doubling and tripling up is how the spelling system copes — once you see it, the logic is rather beautiful.",
          "For your child, the practical rule is simple: when two (or three) letters are underlined or written together as a unit, they make one sound and get blended as one chunk. So sh-i-p is three sounds, not four — sh, i, p. That single habit is half of Phase 3.",
          "Two honest warnings. First, a few digraphs have more than one sound — ow as in cow versus ow as in snow, th as in thin versus th as in this. Phase 3 teaches the most common one; the others arrive later, and that's fine. Second, split digraphs like a-e in cake and i-e in like are not Phase 3 at all — they come in Phase 5, usually Year 1. Don't jump ahead to them; the two-letter spellings need to be rock solid first.",
        ],
      },
      {
        h: "Say every sound purely",
        body: [
          "The pure-sound rule from Phase 2 matters even more now, because longer words collapse completely if each sound carries a passenger 'uh'. Keep every sound clean and short, and stretch the ones that stretch:",
        ],
        list: [
          "j — soft edge, as in jug (not 'juh'); v — buzz it: vvvv; w — short and round, as in wasp (don't add 'uh')",
          "x — 'ks' as in box; y — quick 'y' as in yes; z, zz — long hiss: zzzz (zz is the same sound, doubled)",
          "qu — always 'kw', as in queen; ch — chop it short (not 'chuh'); sh — shhh, finger to lips; th — two sounds: thin (whispery) and this (buzzy)",
          "ng — hold it at the back: si-nggg, never 'n-guh'; ai — rain (not 'ay'); ee — see, lips smiling",
          "igh — the tricky three-letter one: l-igh-t, one sound; oa — boat; oo short — book; oo long — moon",
          "ar — car, open and long (not 'ar-uh'); or — fork; ur — burn, the grumbly one",
          "ow — cow (the 'snow' sound comes later); oi — coin; ear — hear; air — hair; ure — pure; er — her, soft and unstressed",
        ],
      },
      {
        h: "Blending gets longer: words to try",
        body: [
          "Phase 3 words are longer — CVCC and CCVC shapes like ship, chat, thin, ring — but the blending method is identical: say the sounds left to right, then say the whole word. The new skill is spotting the digraph first and treating it as one sound.",
          "A lovely way to practise is the 'find the team' game: write a word, ask your child to underline the two letters that are working as a team (sh, ch, ai…), then blend. It turns the hard part — noticing the digraph — into the game itself.",
        ],
        list: [
          "ch, sh: chip, chat, shop, ship, fish, bash",
          "th, ng: thin, this, that, sing, long, ring",
          "ai, ee: rain, paid, see, feel, feet",
          "igh, oa: light, night, boat, road, goat",
          "oo: book, look (short); moon, soon (long)",
          "ar, or, ur: car, park, fork, born, burn, turn",
          "ow, oi, ear, air, ure, er: cow, down, coin, oil, hear, near, hair, chair, pure, cure, her, dinner",
        ],
      },
      {
        h: "The 12 Phase 3 tricky words",
        body: [
          "Tricky words are the ones that can't be fully sounded out yet — children learn them by sight, a few at a time. Phase 3 adds twelve to the Phase 2 list:",
        ],
        list: [
          "he, she, we, me, be — the 'me' family, all ending in that long 'ee' sound",
          "was, my, you, they, her, all, are",
        ],
      },
      {
        h: "A 10-minute daily routine that works",
        body: [
          "Keep the Phase 2 rhythm — little and often beats long and occasional. Revisit yesterday's sounds first (quick flashcards or magnetic letters), teach one new sound with its picture word, then read three or four words containing it. Finish by re-reading a sentence or caption with the new sound in it — applying it immediately is what makes it stick.",
          "Write the new sound big and let them trace it while saying it: the hand remembers what the mouth practises. Three or four new sounds a week is a healthy pace; if one wobbles, loop it into the next day's revisit pile without drama.",
          "If you'd like the whole phase as print-and-go pages — every grapheme big and traceable on UK handwriting lines, with picture words, blending ladders and a completion certificate — our Phonics Phase 3 pack follows this exact teaching order, so it slots straight alongside what school is doing.",
        ],
      },
    ],
    faqs: [
      [
        "When does Phase 3 start at school?",
        "Usually in January of Reception, the spring term, after Phase 2 in the autumn. Timings vary between schools and programmes — some start a little earlier or later — but spring term of Reception is the norm.",
      ],
      [
        "How long does Phase 3 take?",
        "Around twelve weeks — roughly one term. Schools typically teach three or four new graphemes a week with constant revision of earlier ones.",
      ],
      [
        "The 'th' sound has two versions — which do I teach?",
        "Both, gently. There's the whispery th in thin and thick, and the buzzy th in this and that. Just model each word correctly and mention they're cousins; children sort it out by ear without needing a phonetics lesson.",
      ],
      [
        "How do I explain short oo (book) versus long oo (moon)?",
        "You barely need to — just model them. Say 'book' and 'moon' and let them hear the difference. If they read one wrong in a word, say the word both ways and ask which sounds right; that self-checking habit is gold.",
      ],
      [
        "What about split digraphs like a-e in 'cake'?",
        "Not yet — that's Phase 5, usually Year 1. The two-letter digraphs need to be secure first; introducing a-e too early muddles ai. It will come, and it'll be easier for the wait.",
      ],
      [
        "Do all schools teach Phase 3 in this order?",
        "Most follow Letters & Sounds or a programme built on it, like Little Wandle or Read Write Inc. — the sounds are the same and the order is very similar. If your school's sequence differs slightly, follow the school; the order matters less than the practice.",
      ],
    ],
  },
  {
    slug: "halloween-activities-preschoolers",
    pillar: "school-readiness",
    title: "Halloween Activities for Preschoolers",
    summary:
      "12 Halloween activities for ages 3–5: low-mess crafts, learning games disguised as fun, no-carve pumpkins and a safety-first trick-or-treat plan.",
    minutes: 7,
    products: ["halloween-fun-pack"],
    answer:
      "The best Halloween activities for preschoolers mix crafts, play and sneaky learning: paper-plate pumpkins, handprint ghosts, count-the-bats games, pumpkin tracing and a no-carve decorated pumpkin. Keep it fun-not-scary, skip late-night trick-or-treating for under-4s, and do the carving yourself while little ones decorate.",
    sections: [
      {
        h: "Why Halloween is secretly brilliant for learning",
        body: [
          "Strip away the spooky branding and Halloween is a festival of exactly the things 3–5 year olds need: imaginative play (dressing up, pretending), sensory exploration (squelchy pumpkin innards), counting and sorting (sweets, pumpkins, bats), and fine-motor practice (cutting, sticking, tracing).",
          "It's also one of the few occasions where the whole neighbourhood joins in, which makes it a gentle first lesson in community rituals — knocking on doors, saying thank you, seeing familiar streets look unfamiliar. That's genuinely valuable social learning, not just sugar collection.",
          "And because the theme is everywhere for a fortnight — in shops, on front doors, in every conversation — children get free, repeated exposure to the same vocabulary: pumpkin, ghost, witch, bat. Repeated exposure in context is exactly how young children learn new words.",
          "The trick is pitching it right: magical and silly, never frightening. Everything in this guide follows the fun-not-scary rule — if an activity might unsettle a sensitive three-year-old, we've said so.",
        ],
      },
      {
        h: "5 crafts that won't destroy your kitchen",
        body: [
          "Halloween crafts have a reputation for orange glitter in the carpet until February. These five keep the mess contained and the results fridge-worthy:",
        ],
        list: [
          "Paper-plate pumpkins: paint a paper plate orange, add a green paper stalk and a drawn-on face. Dry, display, done.",
          "Handprint ghost garland: white handprints on black card, googly eyes, string them up. Toddlers adore seeing their own hands become ghosts.",
          "Cotton-ball ghosts: glue cotton balls onto a ghost outline — brilliant for pincer grip, and irresistibly fluffy.",
          "Washi-tape pumpkin: wrap a small pumpkin in strips of patterned tape. No carving, no mess, and it looks genuinely stylish.",
          "Egg-box bats: cut, paint black, add wings and eyes, hang from string. The cutting is real scissor practice in disguise.",
        ],
      },
      {
        h: "Learning activities disguised as Halloween fun",
        body: [
          "This is where Halloween quietly does school-readiness work. A few favourites:",
        ],
        list: [
          "Count the bats: stick paper bats on the wall and count them together — then take two away and count again. Early subtraction, zero worksheets.",
          "Pumpkin tracing: draw a big pumpkin outline and let them trace it, then trace the word 'pumpkin' underneath. Pencil control with a purpose.",
          "Halloween I-spy: how many ghosts, bats and pumpkins can you spot in a busy picture? Counting, scanning and vocabulary in one game.",
          "Shape sorting: bat wings are triangles, pumpkins are circles, windows are squares — cut shapes and build a haunted house from them.",
          "Word tracing: pumpkin, ghost, witch — three exciting words on handwriting lines. Seasonal vocabulary they'd never meet in February.",
        ],
      },
      {
        h: "No-carve pumpkin decorating for under-5s",
        body: [
          "Real talk: pumpkin carving is a grown-up job involving sharp knives and significant wrist strength. Under-5s should decorate, not carve — and honestly, decorated pumpkins often look better.",
          "Options that work beautifully: sticker faces, acrylic paint pens, washi tape patterns, glued-on felt shapes, or press-on googly eyes in clusters. Let them design the whole thing; your only job is handing over materials and admiring.",
          "If they're desperate to see inside a pumpkin, scoop one together with them watching — the sensory experience of the seeds and strings is the memorable part, and a sturdy metal spoon does the job safely under your hands, not theirs.",
        ],
      },
      {
        h: "Trick-or-treating with under-5s: the safety-first plan",
        body: [
          "There's no official starting age, but most families find under-3s are happier with a home-based alternative, and 3–4 year olds do best with a short, early, parent-led round of streets you know. Here's the plan that works:",
        ],
        list: [
          "Go early: start at teatime while it's still light, and be home before the big kids come out. Twenty to thirty minutes is plenty.",
          "Known streets only: neighbours you recognise, houses with decorations up (the universal 'we're participating' signal).",
          "Be visible: reflective tape on costumes, a torch or glow stick per child. Drivers can't see a small dark ghost.",
          "Check the haul: tip everything out at home and check before eating — and quietly remove anything unsuitable. This is also where you can thin the sugar pile without a row.",
          "The alternative: a home treasure hunt. Hide wrapped treats around the house or garden with picture clues. For many under-4s this is more fun than the street version — no strangers, no tired legs, all the excitement.",
        ],
      },
      {
        h: "A one-activity-a-day Halloween week",
        body: [
          "You don't need a party plan — one small thing a day through Halloween week builds lovely anticipation. Stick the plan on the fridge where they can see it: children love ticking off the days, and the countdown is half the fun.",
        ],
        list: [
          "Monday: paper-plate pumpkin craft",
          "Tuesday: count-the-bats game (stick them up, count, hide two)",
          "Wednesday: decorate the no-carve pumpkin together",
          "Thursday: pumpkin tracing and word tracing — the quiet-day activity",
          "Friday: egg-box bats, hung in the window",
          "Saturday: Halloween I-spy and shape-sorting haunted house",
          "31st: costume on, early trick-or-treat or home treasure hunt, then the decorated pumpkin lit with a battery candle",
        ],
      },
      {
        h: "Keeping it fun, not scary",
        body: [
          "Some children adore a friendly ghost; others are genuinely unsettled by masks, sudden noises or dark rooms — and both reactions are completely normal at 3–5. Follow your child's lead, not the occasion's expectations.",
          "Practical rules: let them choose (or veto) their own costume; preview any event in daylight first; skip haunted-house-style attractions until they're older; and have an exit plan for parties — 'we can leave whenever you like' said in advance prevents most meltdowns.",
          "If they do get scared, keep it concrete and empowering: 'that's a pretend ghost — see, it's just Sam in a sheet.' Avoiding the topic makes it bigger; naming the trick shrinks it. And if this year isn't their Halloween year, that's fine — the pumpkins will wait.",
          "For the quiet days of the week — the tracing, counting and colouring — our Halloween Fun Pack has 12 spooky-fun activity pages (pumpkin tracing, count-the-bats, an easy maze, a mask to colour) that keep little hands busy while the excitement builds.",
        ],
      },
    ],
    faqs: [
      [
        "What age can children start trick-or-treating?",
        "There's no rule — it's a family judgement call. Most under-3s are happier with a home treasure hunt, while 3–4 year olds enjoy a short, early round on familiar streets with a parent. If they seem unsure, there's always next year.",
      ],
      [
        "My child is scared of costumes — what should I do?",
        "Don't force it. Let them handle and try on costumes at home with no pressure, start with non-scary outfits (animals, superheroes), and skip houses with frightening decorations. A child who opts out this year often dives in next year.",
      ],
      [
        "Is pumpkin carving safe for preschoolers?",
        "The carving itself isn't — it's a grown-up job with sharp tools. Under-5s should decorate instead: stickers, paint pens, washi tape and googly eyes. They can safely help scoop seeds with a spoon under close supervision from around age 4.",
      ],
      [
        "Can we do Halloween without the sugar overload?",
        "Absolutely. Hand out stickers, temporary tattoos or small toys instead of sweets; do a treasure hunt with wrapped treats you control; and quietly thin the collected haul at home before it becomes breakfast. Many families find less sugar means a happier 1st of November.",
      ],
      [
        "When is Halloween?",
        "31 October, every year. In England and Wales it usually falls in half-term week, which is why the whole week tends to become Halloween week.",
      ],
      [
        "How do I handle scary decorations in our street?",
        "Walk the route in daylight first so there are no surprises, plan which houses to visit, and talk about pretend versus real beforehand. If a decoration genuinely frightens them, cross the street cheerfully — no shame in it, and they'll remember that you listened.",
      ],
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

module.exports = {
  PILLARS,
  GUIDES,
  pillarBySlug,
  guideBySlug,
  guidesForPillar,
  relatedGuidesForProduct,
};
