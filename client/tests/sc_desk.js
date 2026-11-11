const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const steps = [
  ['title', () => {}],
  ['play', () => { g.start(); window.__tick(1/60, 150); return { roof: ar.roofs[p.roof].name, scale: g.gfx.scale }; }],
  ['play60', () => { drive(75 - g.time, () => { aimAt(V(0, 30, 0)); }); window.__tick(1/60, 30); return { t: +g.time.toFixed(0), alive: g.actors.filter(a => a.alive).length }; }],
];
