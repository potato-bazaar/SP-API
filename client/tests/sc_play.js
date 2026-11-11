const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const place = (roofName, x, z) => { const r = ar.roofs.find(r => r.name === roofName || r.id === roofName); p.pos.set(x ?? r.x, r.roofY + 0.05, z ?? r.z); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.roof = r.i; drive(0.2); return r; };
const hold = (b) => { b.path.length = 0; b.plan.length = 0; b.link = null; b.state = 'scan'; b.thinkT = 1e9; b.stanceT = 1e9; b.roamT = 1e9; };
let T = null;
const steps = [
  ['spawn', () => { g.start(); drive(2.2); return { roof: ar.roofs[p.roof].name }; }],
  ['_setup', () => { drive(5); // a target standing on the next roof round the ring, visible from a perch
      const r = ar.roofs[p.roof]; T = g.bots.slice().sort((a, b) => a.pos.distanceTo(p.pos) - b.pos.distanceTo(p.pos))[0]; hold(T); T.crouch = false; T.crouchK = 0;
      let best = null; for (const k of r.perch) { const c = ar.cellPos(r, k); if (ar.los(V(c.x, c.y + 1.6, c.z), T.chest(V(0,0,0)))) { best = c; break; } }
      if (best) { p.pos.set(best.x, r.roofY + 0.05, best.z); drive(0.2); } return { target: T.name, dist: +T.pos.distanceTo(p.pos).toFixed(0), perch: !!best }; }],
  ['hip_aim', () => { drive(0.3, () => { hold(T); aimAt(T.chest(V(0,0,0))); }); }],
  ['scope4', () => { inp._press('ads'); drive(0.6, () => { hold(T); aimAt(T.chest(V(0,0,0))); }); return { scoped: p.scoped, fov: +p.fov.toFixed(1) }; }],
  ['scope8', () => { inp.wheel = -1; drive(0.5, () => { hold(T); aimAt(T.chest(V(0,0,0))); }); return { zoom: p.zoomIdx, fov: +p.fov.toFixed(1) }; }],
  ['fired', () => { inp._press('fire'); drive(0.04, () => { aimAt(T.chest(V(0,0,0))); }); inp._release('fire'); drive(0.1, () => { hold(T); }); return { hits: p.hits, thp: T.hp }; }],
  ['thread', () => { inp._release('ads'); drive(0.5, () => { hold(T); aimAt(T.chest(V(0,0,0))); }); }],
];
