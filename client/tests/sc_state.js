const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const place = (id, x, z) => { const r = ar.roofs.find(r => r.id === id); p.pos.set(x ?? r.x, r.roofY + 0.05, z ?? r.z); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.roof = r.i; p.padLock = 1; drive(0.25); return r; };
let RV = null;
const steps = [
  ['_start', () => { g.start(); drive(7); place('iN1'); drive(61.6 - g.time, () => { aimAt(V(0, 40, 0)); }); const rv = g.bots.filter(b => b.alive && b.revealedUntil > g.time).sort((a, b) => a.pos.distanceTo(p.pos) - b.pos.distanceTo(p.pos)); RV = rv.find(b => !ar.los(p.eye(V(0,0,0)), b.chest(V(0,0,0)))) || rv[0]; return { t: +g.time.toFixed(1), revealed: rv.length, d: RV ? +RV.pos.distanceTo(p.pos).toFixed(0) : -1, los: RV ? ar.los(p.eye(V(0,0,0)), RV.chest(V(0,0,0))) : null }; }],
  ['revealed_hip', () => { if (RV) aimAt(RV.chest(V(0,0,0))); drive(0.05, () => { if (RV) aimAt(RV.chest(V(0,0,0))); }); }],
  ['revealed_4x', () => { inp._press('ads'); drive(0.45, () => { if (RV) aimAt(RV.chest(V(0,0,0))); }); return { rem: RV ? +(RV.revealedUntil - g.time).toFixed(1) : 0 }; }],
  ['lowhp', () => { inp._release('ads'); drive(6); g.opts.god = false; g.damage(p, 78, g.bots.find(b => b.alive), { zone: 1 }); g.opts.god = true; drive(1.2, () => aimAt(V(0, 30, 0))); return { hp: p.hp }; }],
  ['outside', () => { p.hp = 100; g.hud.health(100); const r = place('oN'); aimAt(V(0, 30, 0)); drive(120 - g.time + 22, () => { aimAt(V(0, 34, 0)); }); return { t: +g.time.toFixed(0), zr: +g.zone.r.toFixed(0), out: +g.gfx.post.uZoneOut.value.toFixed(2) }; }],
  ['killed', () => { g.opts.god = false; const k = g.bots.find(b => b.alive); g.damage(p, 200, k, { zone: 0, wpn: { key: 'rifle' } }); drive(0.7); return { alive: p.alive, place: p.place, state: g.state }; }],
];
