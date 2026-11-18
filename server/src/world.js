// Loads the same arena data and building kit the client ships, and builds the collision BVH once per process.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseKit } from '../../client/src/kit.js';
import { solidArrays, collisionBVH } from '../../client/src/world.js';
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { GeoBuilder } from '../../client/src/geobuilder.js';
import { ringKit } from '../../client/src/ring.js';

const here = path.dirname(fileURLToPath(import.meta.url));
export const DIST = process.env.CLIENT_DIST || path.resolve(here, '../../client/dist');
const cache = {};
const readPack = (name) => { const raw = Buffer.from(fs.readFileSync(path.join(DIST, name), 'ascii'), 'base64'); return raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength); };
// LOOP CITY: the ring. The same pack and the same code as the client (client/src/ring.js), so both trace the same wheel.
function loadLoop() {
  const t0 = Date.now(); const arena = JSON.parse(fs.readFileSync(path.join(DIST, 'arena-loop.json'), 'utf8'));
  const RK = ringKit({ Vector3: THREE.Vector3, Ray: THREE.Ray, DoubleSide: THREE.DoubleSide, MeshBVH, BufferGeometry: THREE.BufferGeometry, BufferAttribute: THREE.BufferAttribute });
  const pack = RK.parsePack(readPack('loop.txt')); const gb = new GeoBuilder(1 << 12, 1 << 14); for (const s of arena.shapes || []) gb.shape(s); const ex = gb.arrays();
  const ring = RK.buildWorld(pack, RK.join([{ position: ex.position, index: ex.index }, RK.hull(pack, arena.zmax)]), false);
  return { arena, bvh: ring.chartBvh, ring, RK, map: 'loop', ms: Date.now() - t0 };
}
export function loadWorld(map = 'city') {
  if (cache[map]) return cache[map];
  if (map === 'loop') return (cache.loop = loadLoop());
  const t0 = Date.now();
  const arena = JSON.parse(fs.readFileSync(path.join(DIST, 'arena.json'), 'utf8'));
  const raw = fs.existsSync(path.join(DIST, 'city.bin')) ? fs.readFileSync(path.join(DIST, 'city.bin')) : Buffer.from(fs.readFileSync(path.join(DIST, 'city.txt'), 'ascii'), 'base64');
  const kit = parseKit(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
  const bvh = collisionBVH(solidArrays(kit, arena));
  cache.city = { arena, bvh, map: 'city', ms: Date.now() - t0 };
  return cache.city;
}
