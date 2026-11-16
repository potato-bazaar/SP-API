// The solo extras that run online, over real sockets: the prayer (once a match, half your blood, a tenth of your
// bullets, refused before weapons free, when dead and the second time).
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const PORT = 20000 + Math.floor(Math.random() * 1000); let proc;
// SC_DEV=1 enables the test-only teleport (used here to drop a player off the roofs)
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
// the solo rule: a tenth of (magazine + reserve), rounded up, from the reserve first
const cut = ([mag, res]) => { const c = Math.ceil((mag + res) * 0.1), r = Math.min(c, res); return [Math.max(0, mag - (c - r)), res - r]; };

test('the prayer: refused before weapons free, paid in blood and bullets once, refused when used or dead', async () => {
  const a = await client('Ash'), b = await client('Bo');
  a.send({ t: 'create', settings: { bots: 0, respawn: true, respawnDelay: 3 } });
  const room = await a.wait((m) => m.t === 'room');
  b.send({ t: 'join', code: room.code }); await b.wait((m) => m.t === 'room' && m.members.length === 2);
  b.send({ t: 'ready', v: true }); await a.wait((m) => m.t === 'room' && m.members.some((x) => x.ready));
  a.send({ t: 'start' }); const st = await a.wait((m) => m.t === 'start', 15000); await b.wait((m) => m.t === 'start', 15000);
  const ammo0 = st.ammo[a.me.id].ammo;

  // the first six seconds, weapons are not free: no prayer, nothing paid
  a.send({ t: 'pray' });
  assert.equal((await a.event((e) => e.t === 'prayno' && e.id === a.me.id)).why, 'early');
  assert.equal(a.events.some((e) => e.t === 'dmg' && e.cause === 'pray'), false);

  await a.event((e) => e.t === 'free', 9000);
  a.send({ t: 'pray' });
  const dmg = await a.event((e) => e.t === 'dmg' && e.id === a.me.id && e.cause === 'pray');
  assert.equal(dmg.hp, 50); assert.equal(dmg.amt, 50); assert.equal(dmg.by, null);
  const am = await a.event((e) => e.t === 'ammo' && e.id === a.me.id);
  assert.deepEqual(am.ammo.rifle, cut(ammo0.rifle)); assert.deepEqual(am.ammo.pistol, cut(ammo0.pistol));
  assert.ok(am.ammo.rifle[0] + am.ammo.rifle[1] < ammo0.rifle[0] + ammo0.rifle[1], 'rifle bullets taken');
  const ok = await a.event((e) => e.t === 'pray' && e.id === a.me.id); assert.equal(ok.view, 5); assert.equal(ok.see, 20);
  // the other player hears of it too (the same snapshot)
  await b.event((e) => e.t === 'pray' && e.id === a.me.id);

  // once a match
  a.send({ t: 'pray' });
  assert.equal((await a.event((e) => e.t === 'prayno' && e.id === a.me.id && e.why !== 'early')).why, 'used');
  await sleep(200);
  assert.equal(a.events.filter((e) => e.t === 'pray' && e.id === a.me.id).length, 1, 'accepted once');
  assert.equal(a.events.filter((e) => e.t === 'dmg' && e.id === a.me.id && e.cause === 'pray').length, 1, 'paid once');

  // dead: Bo drops off the roofs, then prays while waiting to respawn
  const pb = st.events.find((e) => e.t === 'spawn' && e.id === b.me.id).p;
  b.send({ t: 'dev', tp: [pb[0], 3, pb[2]] });
  await b.event((e) => e.t === 'kill' && e.id === b.me.id);
  b.send({ t: 'pray' });
  assert.equal((await b.event((e) => e.t === 'prayno' && e.id === b.me.id)).why, 'dead');
  assert.equal(b.events.some((e) => e.t === 'dmg' && e.id === b.me.id && e.cause === 'pray'), false);

  // back on the roofs Bo still has his own prayer (a refused one is not spent)
  await b.event((e) => e.t === 'spawn' && e.id === b.me.id && e.p[1] > 9, 8000);
  await sleep(100);
  b.send({ t: 'pray' });
  assert.equal((await b.event((e) => e.t === 'dmg' && e.id === b.me.id && e.cause === 'pray')).hp, 50);
  await b.event((e) => e.t === 'pray' && e.id === b.me.id);
  a.ws.close(); b.ws.close();
});

test('the prayer is kept through a respawn (once a match, not once a life)', async () => {
  const a = await client('Cy'), b = await client('Di');
  a.send({ t: 'create', settings: { bots: 0, respawn: true, respawnDelay: 2 } });
  const room = await a.wait((m) => m.t === 'room');
  b.send({ t: 'join', code: room.code }); await b.wait((m) => m.t === 'room' && m.members.length === 2);
  b.send({ t: 'ready', v: true }); await a.wait((m) => m.t === 'room' && m.members.some((x) => x.ready));
  a.send({ t: 'start' }); const st = await a.wait((m) => m.t === 'start', 15000);
  await a.event((e) => e.t === 'free', 9000);
  a.send({ t: 'pray' }); await a.event((e) => e.t === 'pray' && e.id === a.me.id);
  const pa = st.events.find((e) => e.t === 'spawn' && e.id === a.me.id).p;
  a.send({ t: 'dev', tp: [pa[0], 3, pa[2]] }); await a.event((e) => e.t === 'kill' && e.id === a.me.id);
  await a.event((e) => e.t === 'spawn' && e.id === a.me.id && e.p[1] > 9, 8000);
  await sleep(100);
  a.send({ t: 'pray' });
  assert.equal((await a.event((e) => e.t === 'prayno' && e.id === a.me.id && e.why !== 'early')).why, 'used');
  a.ws.close(); b.ws.close();
});
