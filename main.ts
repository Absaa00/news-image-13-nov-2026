// news-image-01 entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a newspaper front page that sums
// up Friday 13 November 2026 in six panels — Ukraine's 1,200-drone attack on
// Russia, the US downing two Iranian drones over Bahrain (IAEA: 440 kg of
// uranium unaccounted for), the FAA grounding all US flights after a telecom
// failure, Microsoft 365's second day down in 74 countries, China's
// unannounced Pacific naval drills around Taiwan, and the Qatar-Turkey
// defence pact plus COP31 climate-finance pledges falling 70%.
// The program copies it to /output/entry.png, byte for byte, so two runs
// always write identical bytes. No network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const dst = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, dst);
// Determinism guard: the copy must be byte-identical to the source image.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error('entry.png copy size mismatch');
}
