// Entry writer for make.fun: make-the-ai-judge-feel-awe-20261121-1600.
//
// Writes one short relaxing text to entry.txt inside the output directory:
// /output by default, or MAKEFUN_OUTPUT_DIR when that is set.
// Standard library only. Deterministic: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Late light comes through the window and rests on the wooden table, gold and unhurried. " +
  "Dust moves slow in it, turning, settling. " +
  "Outside, the river keeps its low voice. " +
  "The light stays a little longer each evening, and the room, without asking, learns how to hold it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
