// LOOP CITY on the server: the ring world loads, rays cross the wheel, and whole matches of bots play out.  node test/loop.smoke.mjs
import * as THREE from 'three';
import { loadWorld } from '../src/world.js';
import { Match, TICK } from '../src/engine.js';
import { DEFAULTS } from '../src/rules.js';
const V3 = THREE.Vector3; const t0 = Date.now(); const w = loadWorld('loop'); console.log('loop world ms', Date.now() - t0, 'roofs', w.arena.roofs.length, 'links', w.arena.links.length, 'collision tris', w.ring.colTris);
for (const cfg of [{ mode: 'ffa' }, { mode: '4v4' }, { mode: 'ffa', respawn: true, scoreLimit: 10 }, { mode: '2v2', respawn: true }]) {
  const S = { ...DEFAULTS, map: 'loop', ...cfg }; const slots = cfg.mode === '2v2' ? 4 : 8; const roster = [];
  for (let i = 0; i < slots; i++) roster.push({ id: 'b' + i, name: 'bot' + i, team: S.mode === 'ffa' ? 0 : i % 2, bot: true });
  const m = new Match(w, S, roster, null); const t1 = Date.now(); let shots = 0, kills = 0, far = 0; const causes = {}; const used = {};
  while (m.state === 'live' && m.time < S.timeLimit + 1) { m.step(TICK); for (const b of m.bots) if (b.link) { const k = b.link.link.hub ? 'hub' : b.link.link.kind; used[k] = (used[k] || 0) + TICK; }
    for (const x of m.drain()) { if (x.t === 'shot') { shots++; const d = m.arena.dist(new V3(...x.o), new V3(...x.e)); if (d > 90) far++; } if (x.t === 'kill') { kills++; causes[x.cause || x.how || 'shot'] = (causes[x.cause || x.how || 'shot'] || 0) + 1; } } }
  console.log(JSON.stringify(cfg), 'ms', Date.now() - t1, 'end', m.time.toFixed(0), 'winner', JSON.stringify(m.winner), 'zone at', m.zone.cx.toFixed(0), 'shots', shots, 'far', far, 'kills', kills, JSON.stringify(causes), 'link seconds', JSON.stringify(Object.fromEntries(Object.entries(used).map(([k, v]) => [k, Math.round(v)]))));
}
