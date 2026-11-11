const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const place = (id, x, z) => { const r = ar.roofs.find(r => r.id === id); p.pos.set(x ?? r.x, r.roofY + 0.05, z ?? r.z); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.roof = r.i; drive(0.25); return r; };
const hold = (b, x, z, roof) => { if (x != null) { b.pos.set(x, ar.roofs[roof].roofY, z); b.roof = roof; } b.path.length = 0; b.plan.length = 0; b.link = null; b.state = 'scan'; b.thinkT = 1e9; b.stanceT = 1e9; b.roamT = 1e9; };
const openSpot = (r, from, dmin, dmax) => { for (const k of r.cells) { const c = ar.cellPos(r, k); const d = Math.hypot(c.x - from.x, c.z - from.z); if (d > dmin && d < dmax && ar.los(V(from.x, from.y + 1.6, from.z), V(c.x, c.y + 1.3, c.z)) && ar.los(V(from.x, from.y + 1.6, from.z), V(c.x, c.y + 0.3, c.z))) return c; } return null; };
let A, B;
const steps = [
  ['_start', () => { g.start(); drive(7); const r = place('oE'); A = g.bots[0]; B = g.bots[1]; const s = openSpot(r, p.pos, 4.5, 6.5); hold(A, s.x, s.z, r.i); A.crouch = false; A.lookAt.set(p.pos.x, p.pos.y + 1.5, p.pos.z); drive(1.2, () => { hold(A); A.lookAt.set(p.pos.x, p.pos.y + 1.5, p.pos.z); }); return { d: +A.pos.distanceTo(p.pos).toFixed(1) }; }],
  ['bot_close', () => { aimAt(A.chest(V(0,0,0))); drive(0.1, () => { hold(A); aimAt(V(A.pos.x, A.pos.y + 1.1, A.pos.z)); }); }],
  ['bot_crouch', () => { A.crouch = true; drive(0.6, () => { hold(A); A.crouch = true; aimAt(V(A.pos.x, A.pos.y + 0.9, A.pos.z)); }); }],
  ['_far', () => { const r2 = ar.roofs.find(r => r.id === 'iE1'); const c = ar.cellPos(r2, r2.perch[(r2.perch.length / 2) | 0]); hold(B, c.x, c.z, r2.i); B.crouch = false; let best = null; const r = ar.roofs[p.roof]; for (const k of r.perch) { const q = ar.cellPos(r, k); if (ar.los(V(q.x, q.y + 1.6, q.z), V(c.x, c.y + 1.3, c.z))) { best = q; break; } } if (best) { p.pos.set(best.x, r.roofY + 0.05, best.z); } drive(1.0, () => { hold(B); B.crouch = false; B.lookAt.set(0, 20, 0); }); return { d: +B.pos.distanceTo(p.pos).toFixed(1), los: !!best }; }],
  ['bot_far_hip', () => { drive(0.1, () => { hold(B); aimAt(B.chest(V(0,0,0))); }); }],
  ['bot_far_4x', () => { inp._press('ads'); drive(0.6, () => { hold(B); B.crouch = false; aimAt(B.chest(V(0,0,0))); }); }],
  ['bot_far_8x', () => { inp.wheel = -1; drive(0.4, () => { hold(B); B.crouch = false; aimAt(B.chest(V(0,0,0))); }); }],
  ['_far2', () => { inp._release('ads'); inp.wheel = 1; drive(0.3); const r2 = ar.roofs.find(r => r.id === 'oNE'); let c = null; const r = ar.roofs[p.roof]; for (const k of r2.perch) { const q = ar.cellPos(r2, k); for (const k2 of r.perch) { const q2 = ar.cellPos(r, k2); if (ar.los(V(q2.x, q2.y + 1.6, q2.z), V(q.x, q.y + 1.3, q.z)) && ar.los(V(q2.x, q2.y + 1.6, q2.z), V(q.x, q.y + 0.2, q.z))) { c = [q, q2]; break; } } if (c) break; } if (!c) return 'no los'; hold(B, c[0].x, c[0].z, r2.i); p.pos.set(c[1].x, r.roofY + 0.05, c[1].z); drive(1.0, () => { hold(B); B.crouch = false; B.lookAt.set(0, 20, 0); }); return { d: +B.pos.distanceTo(p.pos).toFixed(1) }; }],
  ['bot_50_hip', () => { drive(0.1, () => { hold(B); aimAt(B.chest(V(0,0,0))); }); }],
  ['bot_50_4x', () => { inp._press('ads'); drive(0.6, () => { hold(B); B.crouch = false; aimAt(B.chest(V(0,0,0))); }); }],
  ['bot_50_8x', () => { inp.wheel = -1; drive(0.4, () => { hold(B); B.crouch = false; aimAt(B.chest(V(0,0,0))); }); }],
];
