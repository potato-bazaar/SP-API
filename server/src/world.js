// Loads the same arena data and building kit the client ships, and builds the collision BVH once per process.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseKit } from '../../client/src/kit.js';
import { solidArrays, collisionBVH } from '../../client/src/world.js';

const here = path.dirname(fileURLToPath(import.meta.url));
export const DIST = process.env.CLIENT_DIST || path.resolve(here, '../../client/dist');
let cached = null;
export function loadWorld() {
  if (cached) return cached;
  const t0 = Date.now();
  const arena = JSON.parse(fs.readFileSync(path.join(DIST, 'arena.json'), 'utf8'));
  const raw = fs.existsSync(path.join(DIST, 'city.bin')) ? fs.readFileSync(path.join(DIST, 'city.bin')) : Buffer.from(fs.readFileSync(path.join(DIST, 'city.txt'), 'ascii'), 'base64');
  const kit = parseKit(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
  const bvh = collisionBVH(solidArrays(kit, arena));
  cached = { arena, bvh, ms: Date.now() - t0 };
  return cached;
}
