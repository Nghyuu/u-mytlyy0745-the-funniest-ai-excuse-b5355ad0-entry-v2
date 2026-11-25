import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// One line: the funniest AI excuse after failing a task.
const line = "I didn't fail — the file was called final_FINAL_v2 (1).pdf, so I waited politely for final_FINAL_v3 like everyone else.";

// Resolve paths relative to this file, never process.cwd().
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, line, "utf8");
fs.chmodSync(entryPath, 0o644);
