// One-Star Review of Something Essential — make.fun entry.
// Writes one one-star review to /output/entry.txt.
// The sun is free, arrives daily without asking, and still bills us in
// sunburn — with no unsubscribe button. One file, one deterministic
// output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const REVIEW =
  "One star. The sun is free, arrives daily without asking, and still bills me in sunburn. No unsubscribe button.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, REVIEW, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different review than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== REVIEW) {
  throw new Error("entry.txt does not match the review exactly");
}
