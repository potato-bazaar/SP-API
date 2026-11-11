const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const place = (id, x, z) => { const r = ar.roofs.find(r => r.id === id); p.pos.set(x ?? r.x, r.roofY + 0.05, z ?? r.z); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.roof = r.i; p.padLock = 1; drive(0.25); return r; };
const steps = [
  ['_start', () => { g.start(); drive(7); const r = place('iN1'); const c = ar.cellPos(r, r.perch.slice().sort((a, b) => ar.cellPos(r, a).z - ar.cellPos(r, b).z).pop()); p.pos.set(c.x, r.roofY + 0.05, c.z); drive(0.2); drive(49.5 - g.time, () => { aimAt(V(0, 44, 0)); }); return { t: +g.time.toFixed(1) }; }],
  ['warn15', () => { aimAt(V(0, 44, 0)); drive(0.2, () => aimAt(V(0, 44, 0))); return { t: +g.time.toFixed(1), banner: g.hud.el.banner.textContent }; }],
  ['angel_opening', () => { drive(57.6 - g.time, () => aimAt(V(0, 46, 0))); return { t: +g.time.toFixed(1), st: g.angel.state, open: +g.angel.open.toFixed(2) }; }],
  ['gaze', () => { drive(60.22 - g.time, () => aimAt(V(0, 40, 0))); return { t: +g.time.toFixed(2), pulse: +g.angel.pulseR.toFixed(0), rev: p.revealedUntil > g.time }; }],
  ['gaze2', () => { drive(0.35, () => aimAt(V(0, 34, 0))); return { t: +g.time.toFixed(2), pulse: +g.angel.pulseR.toFixed(0), rev: p.revealedUntil > g.time, banner: g.hud.el.banner.textContent }; }],
  ['revealed', () => { drive(1.0); const rv = g.bots.filter(b => b.alive && b.revealedUntil > g.time).sort((a, b) => a.pos.distanceTo(p.pos) - b.pos.distanceTo(p.pos)); if (rv.length) aimAt(rv[0].chest(V(0,0,0))); drive(0.05); return { revealed: rv.length, nearest: rv.length ? +rv[0].pos.distanceTo(p.pos).toFixed(0) : -1, los: rv.length ? ar.los(p.eye(V(0,0,0)), rv[0].chest(V(0,0,0))) : null }; }],
  ['closing', () => { drive(8); aimAt(V(p.pos.x * 1.6, p.pos.y - 3, p.pos.z * 1.6)); drive(0.05); return { t: +g.time.toFixed(1), r: +g.zone.r.toFixed(1) }; }],
];
