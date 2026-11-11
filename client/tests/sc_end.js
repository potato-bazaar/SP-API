const V = (x, y, z) => new THREE.Vector3(x, y, z); const p = g.player, inp = g.input, ar = g.arena;
const drive = (s, f) => window.__drive(s, 1/60, f || (() => {}));
const steps = [
  ['title', () => {}],
  ['_start', () => { g.start(); drive(7); g.opts.god = false; drive(40); const k = g.bots.find(b => b.alive); p.kills = 2; p.shots = 9; p.hits = 4; p.heads = 1; g.log.push({ t: 31, k: 'YOU', v: 'ORCHID', how: 'head', red: true }, { t: 44, k: 'YOU', v: 'TRAM', how: '', red: true }); g.damage(p, 200, k, { zone: 1, wpn: { key: 'rifle' } }); return { alive: p.alive, place: p.place }; }],
  ['_wait', () => { for (let i = 0; i < 200; i++) window.__frame(1/20); return { state: g.state, results: g.resultsShown, mode: g.hud.mode }; }],
  ['results', () => {}],
  ['spectate', () => { g.hud.show('spectate'); }],
  ['paused', () => { g.start(); drive(8); g.pause(); }],
];
