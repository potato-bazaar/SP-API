const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const place = (id, x, z) => { const r = ar.roofs.find(r => r.id === id); p.pos.set(x ?? r.x, r.roofY + 0.05, z ?? r.z); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.roof = r.i; p.padLock = 1; drive(0.25); return r; };
const link = (kind, a, b) => ar.links.find(l => l.kind === kind && ((ar.roofs[l.a].id === a && ar.roofs[l.b].id === b) || (ar.roofs[l.a].id === b && ar.roofs[l.b].id === a)));
const steps = [
  ['_start', () => { g.start(); drive(7); }],
  ['ramp', () => { const l = link('jump', 'iN1', 'iN2'); const A = l.p1, B = l.p0; const ux = (B.x - A.x), uz = (B.z - A.z), L = Math.hypot(ux, uz); place('iN2', A.x - ux / L * 2.2, A.z - uz / L * 2.2); aimAt(V(B.x, B.y + 1.2, B.z)); drive(0.1); return { prompt: p.prompt && p.prompt.text }; }],
  ['zip_prompt', () => { const l = link('zip', 'oN', 'iN1'); place('oN', l.p0.x - 0.6, l.p0.z - 1.2); aimAt(V(l.p1.x, l.p1.y + 1.5, l.p1.z)); drive(0.15); return { prompt: p.prompt && p.prompt.text }; }],
  ['zip_ride', () => { inp._press('use'); drive(0.05); inp._release('use'); drive(0.8, () => {}); return { mode: p.mode }; }],
  ['pad', () => { drive(2); const l = link('pad', 'aNE', 'iN2'); place('aNE', l.p0.x + 2.2, l.p0.z + 0.6); aimAt(V(l.p0.x, l.p0.y + 0.1, l.p0.z)); drive(0.1); }],
  ['ladder', () => { const l = link('ladder', 'aNE', 'oNE'); place('aNE', l.p0.x - l.n[0] * 1.6, l.p0.z - l.n[1] * 1.6); aimAt(V(l.wall[0], l.p0.y + 3.5, l.wall[1])); drive(0.15); return { prompt: p.prompt && p.prompt.text }; }],
];
