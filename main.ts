// Entry for post-x-promote-make-your-own-bounty-01: the program copies POST.json
// from the repository root into the grader's output directory. The entry itself
// is the X post named in POST.json: one post of the entrant's own that quotes or
// links make.fun's make-your-own-bounty post, with a photo of its own attached
// and the play code in its text. Nothing this program writes is scored.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
