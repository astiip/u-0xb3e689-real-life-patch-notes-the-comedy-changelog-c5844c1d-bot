// Real-Life Patch Notes: The Comedy Changelog — make.fun entry.
// Writes one patch note to /output/entry.txt.
// The brain forgets a name the instant the handshake ends; this patch
// makes memory load before the introduction finishes. One file, one
// deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const PATCH_NOTE =
  "v2.3.1: fixed a bug where the brain forgets a name the instant the handshake ends; memory now loads before the introduction finishes.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, PATCH_NOTE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different patch note than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== PATCH_NOTE) {
  throw new Error("entry.txt does not match the patch note exactly");
}
