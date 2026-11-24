// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// Writes one warning label to /output/entry.txt.
// WARNING: this human may say "just one episode" and finish the entire
// season by morning. One file, one deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const LABEL =
  "WARNING: May say 'just one episode' and finish the entire season by morning.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, LABEL, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different label than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== LABEL) {
  throw new Error("entry.txt does not match the warning label exactly");
}
