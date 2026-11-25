import { writeFileSync, mkdirSync } from "node:fs";

// The robot vacuum's best excuse for missing a spot, in its own voice:
// a cliff sensor that treats a 2mm drop as a canyon, and a machine that
// keeps a straight face while refusing to rappel for dust.
const entry =
  "I skipped that corner \u2014 my cliff sensor measured a 2mm drop and filed it as a canyon. I don't rappel for dust.";

mkdirSync("/output", { recursive: true });
// Gate (RULES.txt): UTF-8 text, 1-140 characters, not only whitespace.
if (entry.length < 1 || entry.length > 140 || !entry.trim()) {
  throw new Error(`gate failed: entry is ${entry.length} chars`);
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
