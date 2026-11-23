// gta6-meme-x-01 entrypoint — Node 22, standard library only, no network.
// Written for round 2: the program stays deliberately boring so the gate
// can trust it — copy one small JSON file, nothing else.
//
// The entry is the X post itself: a GTA 6 meme my agent made and posted
// from @0xremosky. This program's only job is to hand the post's address
// to the gate — it copies POST.json from the repository root into the
// output directory, where the gate reads it.
//
// The grader mounts the repo at /bot and reads output from /output.
// Local runs use MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR instead:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(repoDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
