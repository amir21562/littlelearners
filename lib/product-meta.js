// Static product metadata — keyed by product slug. No DB schema change.
// whats_inside bullets are written from the real seed descriptions; keep them accurate.
const META = {
  "alphabet-tracing-a-z": {
    subject: "Writing", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 27,
    whats_inside: [
      "A full page for every letter A–Z — giant traceable capital and lowercase",
      "Proper UK handwriting lines on every page",
      "A starter word to trace for each letter — Apple for A, Ball for B, Cat for C",
      "Builds pencil control, letter recognition and early writing confidence",
    ],
  },
  "numbers-1-to-20": {
    subject: "Maths", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 21,
    whats_inside: [
      "A full page for every number from 1 to 20",
      "Giant traceable numeral plus a count-the-dots activity on each page",
      "The number word to trace underneath every numeral",
      "Builds number formation, counting to 20 and one-to-one correspondence",
    ],
  },
  "phonics-phase-2": {
    subject: "Phonics", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 6,
    whats_inside: [
      "Follows the Letters & Sounds Phase 2 sequence (s a t p, i n m d…) used in UK Reception classes",
      "Letter tracing for each sound set",
      "CVC word reading practice — sat, pin, tap",
      "Sits neatly alongside Little Wandle or Read Write Inc. lessons",
    ],
  },
  "shapes-and-colours": {
    subject: "Maths", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 7,
    whats_inside: [
      "Circle, square, triangle, rectangle, star and heart",
      "Trace each shape's name, then colour the big bold shape",
      "Builds shape recognition, vocabulary and pencil control",
    ],
  },
  "simple-addition-1-10": {
    subject: "Maths", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 12,
    whats_inside: [
      "Every addition fact to 10 on its own page",
      "Counting dots under each number, a big traceable equation and handwriting lines for the answer",
      "A mixed review page at the end to show off new skills",
      "Ideal for Reception and Year 1",
    ],
  },
  "tricky-words-phases-2-3": {
    subject: "Phonics", ages: "4–6", ageGroups: ["4–5", "5–6"], pages: 11,
    whats_inside: [
      "The words that can't be sounded out: the, to, I, no, go, she, was, they, said, have and more",
      "Two words per page — trace it, read it, then write it yourself",
      "Matches the Letters & Sounds tricky word lists used in UK schools",
    ],
  },
  "scissor-skills": {
    subject: "Motor skills", ages: "3–5", ageGroups: ["3–4", "4–5"], pages: 9,
    whats_inside: [
      "Dashed cutting lines from straight to zigzag, wavy, curved and spiral",
      "Green “start here” dots on every line",
      "Shapes to cut out at the end",
      "Builds hand strength and coordination — a key EYFS fine-motor skill",
    ],
  },
  "mini-colouring-pack": {
    subject: "Colouring", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 7,
    whats_inside: [
      "6 bold-outline colouring pages: a cute cat, a happy dog, a sun with a rainbow, a little fish, a rainbow and a bunch of balloons",
      "Big, easy shapes perfect for little hands",
      "Great for quiet time, travel and rainy days",
    ],
  },
  "ultimate-bundle": {
    subject: "Bundle", ages: "3–6", ageGroups: ["3–4", "4–5", "5–6"], pages: 100,
    whats_inside: [
      "All 8 printable packs in one download — 100 pages",
      "Alphabet tracing, numbers to 20, Phase 2 phonics, tricky words, early addition, scissor skills, shapes and colouring",
      "The complete EYFS & KS1 home-learning kit for ages 3–6",
      "Print everything as many times as you like — no subscription, ever",
    ],
  },
};

const SUBJECTS = ["Phonics", "Maths", "Writing", "Motor skills", "Colouring"];
const AGE_GROUPS = ["3–4", "4–5", "5–6"];

module.exports = { META, SUBJECTS, AGE_GROUPS };
