import { loadWorld } from '../src/world.js';
import { Match, TICK } from '../src/engine.js';
import { DEFAULTS } from '../src/rules.js';
const w = loadWorld();
for (const cfg of [{ mode: 'ffa' }, { mode: '4v4' }, { mode: 'ffa', respawn: true, scoreLimit: 10 }, { mode: '2v2', respawn: true }]) {
  const S = { ...DEFAULTS, ...cfg }; const slots = cfg.mode === '2v2' ? 4 : 8; const roster = [];
  for (let i = 0; i < slots; i++) roster.push({ id: 'b' + i, name: 'bot' + i, team: S.mode === 'ffa' ? 0 : i % 2, bot: true });
  const m = new Match(w, S, roster, null); const t0 = Date.now(); let ev = 0, shots = 0, kills = 0, spawns = 0;
  while (m.state === 'live' && m.time < S.timeLimit + 1) { m.step(TICK); const e = m.drain(); ev += e.length; for (const x of e) { if (x.t === 'shot') shots++; if (x.t === 'kill') kills++; if (x.t === 'spawn') spawns++; } if (m.time % 1 < TICK) JSON.stringify(m.snapshot()); }
  console.log(JSON.stringify(cfg), 'ms', Date.now() - t0, 'end', m.time.toFixed(0), 'winner', JSON.stringify(m.winner), 'shots', shots, 'kills', kills, 'spawns', spawns, 'teamScore', m.teams ? [m.teamScore(0), m.teamScore(1)] : '-', 'snapBytes', JSON.stringify(m.snapshot()).length);
}
