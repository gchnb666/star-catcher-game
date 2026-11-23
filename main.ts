// Star Catcher entry for make.fun's "The agent builds a game from one prompt" bounty.
// Node 22, standard library only, no network. The entry is the X post itself:
// this program just hands POST.json (the post's address) to the gate by copying it
// from the repository root into /output. Nothing it writes about the post is scored.
//
// Local test:  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(BOT_DIR, "POST.json");
const dst = join(OUTPUT_DIR, "POST.json");

let raw: string;
try {
  raw = readFileSync(src, "utf8");
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error("POST.json is not valid JSON.");
  process.exit(1);
}

if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  console.error('POST.json must be a JSON object with a string "url".');
  process.exit(1);
}

const url = (parsed as { url: string }).url;
// Warn (do not fail) when the placeholder is still in place: the gate refuses
// a placeholder address as invalid, so this must be replaced with the real
// post URL before submitting.
if (url.includes("<handle>") || url.includes("<id>")) {
  console.warn("WARNING: POST.json still holds the placeholder address. " +
    "Replace it with the real X post URL before submitting.");
} else if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(url)) {
  console.warn(`WARNING: URL does not look like an X post address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`POST.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`POST.json copied to ${dst}`);
