const p = g.player, inp = g.input; const drive = (s) => window.__drive(s, 1/60, () => {});
const steps = [
  ['_s', () => { g.start(); drive(2); inp._press('swap'); drive(0.05); inp._release('swap'); drive(0.6); const b = new THREE.Box3().setFromObject(g.fp.pistol); return { cur: p.cur, min: b.min.toArray().map(v=>+v.toFixed(3)), max: b.max.toArray().map(v=>+v.toFixed(3)) }; }],
  ['pistol', () => { window.__tick(1/60, 30); }],
];
steps.push(['pistol_ads', () => { inp._press('ads'); window.__tick(1/60, 30); }]);
