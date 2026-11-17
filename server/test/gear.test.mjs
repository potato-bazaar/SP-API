// Gear over real sockets: room rules fog / angelShots, decoy and gas cans, the hammer from behind, the angel's strikes.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const PORT = 19000 + Math.floor(Math.random() * 1000); let proc;
// SC_DEV=1 enables the test-only teleport, so two players can be put next to each other
before(async () => { proc = spawn(process.execPath, ['src/server.js'], { env: { ...process.env, PORT: String(PORT), SC_DEV: '1' }, stdio: ['ignore', 'pipe', 'inherit'] }); await new Promise((res) => proc.stdout.on('data', (d) => { if (/server on/.test(String(d))) res(); })); });
after(() => proc.kill());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function client(name) {
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const inbox = []; const waiters = [];
  const events = [];   // every event from every snapshot, in order
  ws.on('message', (d) => { const m = JSON.parse(d); if (m.t === 's' && m.e) events.push(...m.e); const w = waiters.find((w) => w.f(m)); if (w) { waiters.splice(waiters.indexOf(w), 1); w.res(m); } else { inbox.push(m); if (inbox.length > 400) inbox.splice(0, 100); } });
  const c = { ws, inbox, events, send: (m) => ws.send(JSON.stringify(m)),
    wait: (f, ms = 8000) => new Promise((res, rej) => { const hit = inbox.find(f); if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); } const w = { f, res }; waiters.push(w); setTimeout(() => { const i = waiters.indexOf(w); if (i >= 0) { waiters.splice(i, 1); rej(new Error('timeout')); } }, ms); }),
    event: async (f, ms = 8000) => { const end = Date.now() + ms; for (;;) { const e = events.find(f); if (e) return e; if (Date.now() > end) throw new Error('no such event'); await sleep(30); } } };
  return new Promise((res) => ws.on('open', async () => { c.send({ t: 'hello', name, v: 1 }); c.me = await c.wait((m) => m.t === 'welcome'); res(c); }));
}
const move = (c, seq, p, yaw = 0) => c.send({ t: 'in', seq, p, yaw, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 });

test('fog and angel rules, decoy and gas cans, the hammer from behind', async () => {
  const a = await client('Ash'), b = await client('Bo');
  a.send({ t: 'create', settings: { bots: 0, respawn: true, respawnDelay: 2, fog: true, angelShots: 1 } });
  const room = await a.wait((m) => m.t === 'room'); assert.equal(room.settings.fog, true); assert.equal(room.settings.angelShots, 1);
  b.send({ t: 'join', code: room.code }); await b.wait((m) => m.t === 'room' && m.members.length === 2);
  b.send({ t: 'ready', v: true }); await a.wait((m) => m.t === 'room' && m.members.some((x) => x.ready));
  a.send({ t: 'settings', patch: { fog: 'yes' } }); assert.match((await a.wait((m) => m.t === 'error')).msg, /not allowed/);
  a.send({ t: 'start' }); const st = await a.wait((m) => m.t === 'start', 15000); await b.wait((m) => m.t === 'start', 15000);
  assert.equal(st.settings.fog, true); assert.equal(st.snap.z.length, 6, 'snapshot carries the shadow roof');
  const pa = st.events.find((e) => e.t === 'spawn' && e.id === a.me.id).p, pb = st.events.find((e) => e.t === 'spawn' && e.id === b.me.id).p;
  await a.event((e) => e.t === 'free', 9000);

  // decoy: the throw is announced with the can count left, then it fakes shots after it lands
  const eyeB = [pb[0], pb[1] + 1.6, pb[2]];
  b.send({ t: 'nade', k: 'decoy', o: eyeB, d: [0.6, 0.3, 0.74] });
  const thr = await b.event((e) => e.t === 'throw' && e.by === b.me.id); assert.equal(thr.k, 'decoy'); assert.equal(thr.left, 0); assert.equal(thr.v.length, 3);
  const fs = await a.event((e) => e.t === 'fshot', 9000); assert.equal(fs.o.length, 3);
  b.send({ t: 'nade', k: 'decoy', o: eyeB, d: [0.6, 0.3, 0.74] });   // none left: refused, and the client is told its real count
  const gear = await b.event((e) => e.t === 'gear' && e.id === b.me.id); assert.equal(gear.decoy, 0);

  // gas at your own feet hurts you (no credit to anyone)
  a.send({ t: 'nade', k: 'gas', o: [pa[0], pa[1] + 1.6, pa[2]], d: [0, -1, 0] });
  await a.event((e) => e.t === 'throw' && e.by === a.me.id && e.k === 'gas');
  const gas = await a.event((e) => e.t === 'dmg' && e.id === a.me.id && e.cause === 'gas', 6000); assert.equal(gas.by, null);

  // the hammer: Bo stands a metre from Ash, facing away; Ash swings at Bo's back: 50 damage, never a one-hit kill, and one of 5 swings spent
  const at = [pa[0] + 1.0, pa[1], pa[2]];
  b.send({ t: 'dev', tp: at }); await sleep(150);
  const hx = pa[0] - at[0], hz = pa[2] - at[2], hl = Math.hypot(hx, hz);
  // facing is (-sin yaw, -cos yaw); away from Ash means facing -(hx, hz), so yaw = atan2(hx, hz)
  let seq = 1000; for (let i = 0; i < 20; i++) { move(b, seq++, at, Math.atan2(hx / hl, hz / hl)); await sleep(33); }
  await sleep(500);   // past the lag-compensation window, so the rewind sees Bo here
  const d = [at[0] - pa[0], (at[1] + 1.3) - (pa[1] + 1.6), at[2] - pa[2]]; const dl = Math.hypot(...d);
  a.send({ t: 'melee', d: d.map((x) => x / dl) });
  const mel = await a.event((e) => e.t === 'melee' && e.by === a.me.id); assert.equal(mel.to, b.me.id); assert.equal(mel.k, 'hammer'); assert.equal(mel.left, 4); assert.equal(mel.kill, false);
  const hd = await a.event((e) => e.t === 'dmg' && e.id === b.me.id && e.cause === 'melee'); assert.equal(hd.amt, 50); assert.equal(hd.by, a.me.id);
  a.send({ t: 'melee', d: [1, 0, 0] });   // a second swing inside the 0.62 s cycle is ignored (and not counted)
  await sleep(750);
  // the knife: 25 damage, no limit, does not use up the hammer
  const n0 = a.events.length; a.send({ t: 'melee', k: 'knife', d: d.map((x) => x / dl) });
  const kn = await a.event((e) => e.t === 'melee' && e.by === a.me.id && e.k === 'knife'); assert.equal(kn.to, b.me.id); assert.equal(kn.left, 4);
  assert.equal(a.events.slice(n0).some((e) => e.t === 'dmg' && e.id === b.me.id && e.cause === 'melee' && e.amt === 25), true);
  a.ws.close(); b.ws.close();
});

test('the angel fires: marked strikes at the first contraction', async () => {
  const a = await client('Cy');
  a.send({ t: 'create', settings: { bots: 1, timeLimit: 120, angelShots: 2, halo: true } }); await a.wait((m) => m.t === 'room');
  a.send({ t: 'start' }); await a.wait((m) => m.t === 'start', 15000);
  const mark = await a.event((e) => e.t === 'amark', 40000); assert.equal(mark.p.length, 3); assert.ok(mark.at > 24);
  await a.event((e) => e.t === 'ahit', 10000);
  const snap = await a.wait((m) => m.t === 's'); assert.equal(typeof snap.s.z[5], 'number');
  a.ws.close();
});
