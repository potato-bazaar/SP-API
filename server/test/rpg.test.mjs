// The RPG-7 online: the server owns the rockets (two a match, a cooldown, rifle in hand) and flies each one to a burst.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const PORT = 23000 + Math.floor(Math.random() * 1000); let proc;
before(async () => { proc = spawn(process.execPath, ['src/server.js'], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'inherit'] }); await new Promise((res) => proc.stdout.on('data', (d) => { if (/server on/.test(String(d))) res(); })); });
after(() => proc.kill());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function client(name) {
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const inbox = []; const waiters = [];
  const events = [];
  ws.on('message', (d) => { const m = JSON.parse(d); if (m.t === 's' && m.e) events.push(...m.e); const w = waiters.find((w) => w.f(m)); if (w) { waiters.splice(waiters.indexOf(w), 1); w.res(m); } else { inbox.push(m); if (inbox.length > 400) inbox.splice(0, 100); } });
  const c = { ws, inbox, events, send: (m) => ws.send(JSON.stringify(m)),
    wait: (f, ms = 8000) => new Promise((res, rej) => { const hit = inbox.find(f); if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); } const w = { f, res }; waiters.push(w); setTimeout(() => { const i = waiters.indexOf(w); if (i >= 0) { waiters.splice(i, 1); rej(new Error('timeout')); } }, ms); }),
    event: async (f, ms = 8000) => { const end = Date.now() + ms; for (;;) { const e = events.find(f); if (e) return e; if (Date.now() > end) throw new Error('no such event'); await sleep(30); } } };
  return new Promise((res) => ws.on('open', async () => { c.send({ t: 'hello', name, v: 1 }); c.me = await c.wait((m) => m.t === 'welcome'); res(c); }));
}
const stand = (c, p, w, seq) => c.send({ t: 'in', seq, p, yaw: 0, pitch: 0, c: 0, mode: 'walk', w, ads: 0 });
// a rocket from the eye straight down into the roof the sniper is standing on
const down = (c, p) => c.send({ t: 'rpg', o: [p[0], p[1] + 1.6, p[2]], d: [0, -1, 0] });

test('the RPG: refused early and with the sidearm, then two rockets into the roof, then empty', async () => {
  const a = await client('Ash'), b = await client('Bo');
  a.send({ t: 'create', settings: { bots: 0, respawn: true, respawnDelay: 3 } });
  const room = await a.wait((m) => m.t === 'room');
  b.send({ t: 'join', code: room.code }); await b.wait((m) => m.t === 'room' && m.members.length === 2);
  b.send({ t: 'ready', v: true }); await a.wait((m) => m.t === 'room' && m.members.some((x) => x.ready));
  a.send({ t: 'start' }); const st = await a.wait((m) => m.t === 'start', 15000); await b.wait((m) => m.t === 'start', 15000);
  const pa = st.events.find((e) => e.t === 'spawn' && e.id === a.me.id).p;

  down(a, pa);
  assert.equal((await a.event((e) => e.t === 'rpgno' && e.id === a.me.id)).why, 'early');
  assert.equal(a.events.some((e) => e.t === 'rpg'), false);

  await a.event((e) => e.t === 'free', 9000);
  stand(a, pa, 'pistol', 1); await sleep(120);
  down(a, pa);
  const side = await a.event((e) => e.t === 'rpgno' && e.id === a.me.id && e.why !== 'early');
  assert.equal(side.why, 'weapon'); assert.equal(side.left, 2);

  stand(a, pa, 'rifle', 2); await sleep(120);
  down(a, pa);
  const one = await a.event((e) => e.t === 'rpg' && e.by === a.me.id);
  assert.equal(one.left, 1); assert.equal(one.o.length, 3); assert.equal(one.v.length, 3);
  await b.event((e) => e.t === 'rpg' && e.id === one.id);
  const boom = await a.event((e) => e.t === 'rpgx' && e.id === one.id, 4000);
  assert.equal(boom.p.length, 3);
  const hurt = await a.event((e) => e.t === 'dmg' && e.id === a.me.id && e.cause === 'rpg');
  assert.equal(hurt.by, null); assert.ok(hurt.amt > 0 && hurt.amt < 100, 'own blast wounds, it does not erase you');

  down(a, pa);
  const cool = await a.event((e) => e.t === 'rpgno' && e.id === a.me.id && e.why === 'cool');
  assert.equal(cool.left, 1);

  await sleep(2600);
  // the second rocket is sent with the empty one behind it, before the burst: two self-blasts would otherwise kill first
  down(a, pa); down(a, pa);
  const two = await a.event((e) => e.t === 'rpg' && e.by === a.me.id && e.left === 0);
  const empty = await a.event((e) => e.t === 'rpgno' && e.id === a.me.id && e.why === 'empty');
  assert.equal(empty.left, 0);
  await a.event((e) => e.t === 'rpgx' && e.id === two.id, 4000);
  assert.equal(a.events.filter((e) => e.t === 'rpg' && e.by === a.me.id).length, 2);
  a.ws.close(); b.ws.close();
});
