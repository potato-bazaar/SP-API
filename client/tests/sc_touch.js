const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const steps = [
  ['title', () => { inp.touch = true; inp.onTouchMode(); return { w: innerWidth, h: innerHeight, dpr: devicePixelRatio, mobile: g.gfx.isMobile, canvas: [g.gfx.canvas.width, g.gfx.canvas.height] }; }],
  ['play', () => { g.start(); drive(7); aimAt(V(0, 30, 0)); drive(0.1); g.hud.stick(true, 110, 280, 0.4, -0.7); return { touchHidden: g.hud.el.touch.hidden }; }],
  ['zip', () => { const l = ar.links.find(l => l.kind === 'zip' && ar.roofs[l.a].i === p.roof) || ar.links.find(l => l.kind === 'zip'); const r = ar.roofs[l.a]; p.pos.set(l.p0.x - 0.5, r.roofY + 0.05, l.p0.z - 0.5); p.roof = r.i; aimAt(V(l.p1.x, l.p1.y + 1.5, l.p1.z)); drive(0.2); return { prompt: p.prompt && p.prompt.text }; }],
  ['scope', () => { inp.setToggle('ads', true, document.getElementById('b-ads')); drive(0.5); return { scoped: p.scoped }; }],
  ['results', () => { inp.setToggle('ads', false, document.getElementById('b-ads')); g.opts.god = false; g.damage(p, 200, g.bots.find(b => b.alive), { zone: 1, wpn: { key: 'rifle' } }); for (let i = 0; i < 70; i++) window.__frame(1/20); return { mode: g.hud.mode }; }],
];
