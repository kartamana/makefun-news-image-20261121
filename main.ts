// main.ts — "The World in One Image": Saturday 21 November 2026.
//
// The entry image is the entry.png beside this file: a newspaper front page
// summing up the world's news of Saturday 21 November 2026, 1024 by 1024
// pixels and well under one megabyte. It was composed as an HTML/CSS front
// page and rendered once to this PNG, so the picture is fixed and the
// program only copies it. The program writes it to /output/entry.png. Node
// 22, standard library only, no network, no clock, no randomness — two runs
// write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
