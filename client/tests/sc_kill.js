const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const tick = (s) => { const n = Math.round(s * 60); window.__tick(1/60, n); };   // full update (HUD timers too)
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const place = (id, x, z) => { const r = ar.roofs.find(r => r.id === id); p.pos.set(x ?? r.x, r.roofY + 0.05, z ?? r.z); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.roof = r.i; p.padLock = 1; drive(0.25); return r; };
const hold = (b, x, z, roof) => { if (x != null) { b.pos.set(x, ar.roofs[roof].roofY, z); b.roof = roof; } b.path.length = 0; b.plan.length = 0; b.link = null; b.state = 'scan'; b.thinkT = 1e9; b.stanceT = 1e9; b.roamT = 1e9; b.crouch = false; };
const openSpot = (r, from, dmin, dmax) => { for (const k of r.cells) { const c = ar.cellPos(r, k); const d = Math.hypot(c.x - from.x, c.z - from.z); if (d > dmin && d < dmax && ar.los(V(from.x, from.y + 1.6, from.z), V(c.x, c.y + 1.3, c.z)) && ar.los(V(from.x, from.y + 1.6, from.z), V(c.x, c.y + 0.3, c.z))) return c; } return null; };
let A, B;
const steps = [
  ['_start', () => { g.start(); drive(7); const r = place('oNW'); A = g.bots[0]; B = g.bots[1]; const s = openSpot(r, p.pos, 6.5, 8.5); hold(A, s.x, s.z, r.i); drive(0.8, () => { hold(A); A.lookAt.set(p.pos.x + 30, p.pos.y, p.pos.z); }); p.hp = 55; g.hud.health(55); return { d: +A.pos.distanceTo(p.pos).toFixed(1) }; }],
  ['hit', () => { aimAt(A.chest(V(0,0,0))); drive(0.05, () => { hold(A); aimAt(A.chest(V(0,0,0))); }); inp._press('fire'); window.__tick(1/60, 1); inp._release('fire'); aimAt(A.chest(V(0,0,0))); window.__tick(1/60, 3); return { hits: p.hits, hp: A.hp }; }],
  ['kill', () => { hold(A); aimAt(A.eye(V(0,0,0))); g.damage(A, 200, p, { zone: 0, dir: V(0,0,-1), point: A.eye(V(0,0,0)), wpn: { key: 'rifle' } }); window.__tick(1/60, 14); aimAt(V(A.pos.x, A.pos.y + 1.0, A.pos.z)); window.__tick(1/60, 2); return { alive: A.alive, kills: p.kills, hp: p.hp }; }],
  ['body', () => { tick(1.6); aimAt(V(A.pos.x, A.pos.y + 0.3, A.pos.z)); window.__tick(1/60, 2); }],
  ['thread_up', () => { aimAt(V(A.pos.x * 0.5, A.pos.y + 22, A.pos.z * 0.5)); window.__tick(1/60, 2); }],
  ['runner', () => { const r = ar.roofs[p.roof]; const s = openSpot(r, p.pos, 5, 7); hold(B, s.x, s.z, r.i); B.thinkT = 1e9; const far = r.cells.map(k => ar.cellPos(r, k)).sort((a, b) => b.distanceTo(s) - a.distanceTo(s))[0]; B.state = 'move'; B._goTo(far.x, far.z, () => {}); drive(0.45, () => { B.thinkT = 1e9; aimAt(B.chest(V(0,0,0))); }); return { speed: B.speed }; }],
];
