// The half-time air drop and its AWM online: the server picks the roof, runs the beam / fall / smoke timeline, hands the
// AWM to the first player who stays by the crate for 1.5 s, and owns its numbers (3 bullets, slower bolt, every hit
// kills, through walls) until its last bullet has cycled or its holder dies.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import * as THREE from 'three';
import WebSocket from 'ws';
import { loadWorld } from '../src/world.js';
import { Match, TICK } from '../src/engine.js';
import { DEFAULTS } from '../src/rules.js';
import { AWM, X } from '../src/extras.js';

const V3 = THREE.Vector3;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ------------------------------------------------------------------ the engine, stepped by hand (fast)
const world = loadWorld();
function match(extra = {}, roster = [{ id: 'A', name: 'A', team: 0 }, { id: 'B', name: 'B', team: 0 }]) {
  const m = new Match(world, { ...DEFAULTS, bots: 0, timeLimit: 120, halo: false, respawn: true, respawnDelay: 3, ...extra }, roster, null);
  m.log2 = []; return m;
}
const run = (m, until, each) => { while (m.time < until) { m.step(TICK); each && each(); for (const e of m.drain()) m.log2.push({ ...e, _t: m.time }); } };
const evs = (m, f) => m.log2.filter(f);
const at = (a, p, dy = 0) => { a.pos.set(p.x, p.y + dy, p.z); a.valid.copy(a.pos); };
const aim = (m, a, to) => { const o = a.eye(new V3()); const d = to.clone().sub(o).normalize(); return { o: [o.x, o.y, o.z], d: [d.x, d.y, d.z], w: 'rifle' }; };

test('engine: the timeline at half time, players only, a continuous 1.5 s by the crate', () => {
  const roster = [{ id: 'A', name: 'A', team: 0 }, { id: 'B', name: 'B', team: 0 }, { id: 'bot1', name: '', team: 0, bot: true }];
  const m = match({}, roster); const [A, B] = m.humans, bot = m.bots[0];
  bot.update = () => {};   // a real Bot, but brainless: its AI costs ~0.15 s a simulated second and isn't what is tested here
  run(m, 47.9); assert.equal(m.extras.drop.ph, 0, 'nothing before half time - 12 s');
  run(m, 48.1); const d1 = evs(m, (e) => e.t === 'drop' && e.ph === 1)[0]; assert.ok(d1, 'beam at 48 s'); assert.equal(d1.at, 60);
  const p = m.extras.drop.p; assert.ok(m.arena.spawns.some((s) => Math.abs(s.spawnPt[0] + 1.2 - p.x) < 0.01 && Math.abs(s.spawnPt[2] + 1.2 - p.z) < 0.01), 'on a spawn roof, 1.2 m off its spawn point');
  for (const a of m.humans) assert.ok(Math.hypot(a.pos.x - p.x, a.pos.z - p.z) > X.dropAway, 'no player right on top of it');
  run(m, 60.1); assert.ok(Math.abs(evs(m, (e) => e.t === 'drop' && e.ph === 2)[0]._t - 60) < 0.05, 'falls at half time');
  // the bot sits on it the whole time: never taken by an AI sniper
  const pin = () => { if (bot.alive) bot.pos.set(p.x, p.y, p.z); };
  run(m, 64.3, pin); assert.equal(m.extras.drop.ph, 2, 'still falling (70 m at 16 m/s)');
  run(m, 64.5, pin); const d3 = evs(m, (e) => e.t === 'drop' && e.ph === 3)[0]; assert.ok(d3 && Math.abs(d3._t - (60 + 69.6 / 16)) < 0.05, 'lands after ~4.35 s');
  run(m, 67, pin); assert.equal(m.extras.drop.ph, 3, 'a bot standing on it does not take it');
  // A: 1 s on it, steps off, 1 s on it again: not yet. Dead B on it: nothing. Then A stays: taken 1.5 s after stepping back on
  at(A, p); run(m, 68, pin); at(A, p, 0); A.pos.x += 3; run(m, 68.2, pin); at(A, p); run(m, 69.2, pin);
  assert.equal(m.extras.drop.ph, 3, 'the 1.5 s must be unbroken');
  at(B, p, 2.5); B.alive = false; run(m, 69.3, pin); assert.equal(B.dropHold, 0, 'the dead do not open it');
  B.alive = true; at(B, p, 3.5); run(m, 69.4, pin); assert.equal(B.dropHold, 0, 'not from 3 m above or more');
  at(B, { x: p.x + 2.5, y: p.y, z: p.z }); run(m, 69.5, pin); assert.equal(B.dropHold, 0, 'not from 2.4 m away or more');
  run(m, 69.8, pin); const d4 = evs(m, (e) => e.t === 'drop' && e.ph === 4);
  assert.equal(d4.length, 1); assert.equal(d4[0].by, 'A'); assert.ok(Math.abs(d4[0]._t - 69.7) < 0.1, 'taken 1.5 s after stepping back on: ' + d4[0]._t.toFixed(2));
  const on = evs(m, (e) => e.t === 'awm' && e.on === 1); assert.equal(on.length, 1); assert.equal(on[0].id, 'A'); assert.deepEqual(on[0].ammo.rifle, [3, 0]);
  assert.ok(A.awm && A.ammo.rifle.mag === 3 && A.ammo.rifle.reserve === 0);
  at(B, p); run(m, 72); assert.equal(evs(m, (e) => e.t === 'drop' && e.ph === 4).length, 1, 'once a match'); assert.ok(!B.awm, 'B never gets it');
});

test('engine: the AWM pierces walls (the rifle does not), kills in one hit and needs its slower bolt', () => {
  const m = match(); const [A, B] = m.humans; run(m, 7);
  // two spawn roofs with buildings between them
  let pa = null, pb = null; const S = m.arena.spawns;
  for (const s of S) { for (const r of S) { if (s === r) continue; const a = new V3(...s.spawnPt), b = new V3(...r.spawnPt); if (a.distanceTo(b) < 130 && !m.arena.los(a.clone().setY(a.y + 1.6), b.clone().setY(b.y + 1.3))) { pa = a; pb = b; break; } } if (pa) break; }
  assert.ok(pa, 'found two roofs with a wall between them');
  at(A, pa); at(B, pb); run(m, 8);
  const chest = () => B.chest(new V3());
  m.fire('A', aim(m, A, chest()), 0); run(m, m.time + TICK);
  assert.equal(B.hp, 100, 'the rifle stops at the wall'); assert.equal(evs(m, (e) => e.t === 'dmg' && e.id === 'B').length, 0);
  m.extras.awmOn(A); run(m, m.time + 1.4);   // let the rifle's bolt cycle (1.3 s)
  m.fire('A', aim(m, A, chest()), 0); run(m, m.time + TICK);
  const dmg = evs(m, (e) => e.t === 'dmg' && e.id === 'B'); assert.equal(dmg.length, 1, 'through the wall'); assert.equal(dmg[0].amt, 400); assert.equal(dmg[0].hp, 0);
  const k = evs(m, (e) => e.t === 'kill' && e.id === 'B')[0]; assert.equal(k.by, 'A'); assert.ok(k.how === '' || k.how === 'head', 'a rifle kill in the feed');
  assert.deepEqual(A.ammo.rifle.mag, 2);
  // the bolt: 1.3 s (the rifle's) is not enough for the AWM (1.69 s)
  run(m, m.time + 1.45); m.fire('A', { o: aim(m, A, chest()).o, d: [0, 1, 0], w: 'rifle' }, 0); run(m, m.time + TICK);
  assert.equal(evs(m, (e) => e.t === 'deny' && e.id === 'A' && e.why === 'cycle').length, 1, 'denied: AWM bolt');
  assert.equal(m.arena.raycast, Object.getPrototypeOf(m.arena).raycast, 'walls are back after the shot');
});

test('engine: back to the rifle when its bullets are out, on death, after a respawn; the prayer cuts both', () => {
  const m = match(); const [A, B] = m.humans; run(m, 7);
  A.ammo.rifle.mag = 4; A.ammo.rifle.reserve = 11; m.extras.awmOn(A);
  // the prayer: the AWM's 3 lose ceil(0.3) = 1, the waiting rifle (4+11) loses ceil(1.5) = 2 from its reserve
  m.pray('A'); run(m, m.time + TICK);
  assert.deepEqual([A.ammo.rifle.mag, A.ammo.rifle.reserve], [2, 0]); assert.deepEqual([A.awm.mag, A.awm.reserve], [4, 9]);
  const up = () => ({ o: [A.eye().x, A.eye().y, A.eye().z], d: [0, 1, 0], w: 'rifle' });
  m.fire('A', up(), 0); run(m, m.time + 1.8); assert.ok(A.awm, 'one left'); m.fire('A', up(), 0); run(m, m.time + TICK);
  assert.ok(A.awm, 'empty, but its bolt is still cycling'); run(m, m.time + 1.6); assert.ok(A.awm, 'still cycling at 1.6 s');
  run(m, m.time + 0.15); assert.ok(!A.awm, 'back to the rifle'); assert.deepEqual([A.ammo.rifle.mag, A.ammo.rifle.reserve], [4, 9]);
  const off = evs(m, (e) => e.t === 'awm' && e.on === 0); assert.equal(off.length, 1); assert.deepEqual(off[0].ammo.rifle, [4, 9]);
  // death
  m.extras.awmOn(B); m.damage(B, 999, null, { cause: 'drop' }); run(m, m.time + TICK);
  assert.ok(!B.awm); assert.deepEqual(evs(m, (e) => e.t === 'awm' && e.id === 'B' && e.on === 0)[0].ammo.rifle, [5, 20]);
  // a new kit (respawn) while it was somehow still held: dropped, the new kit untouched
  m.extras.awmOn(A); A.reset(); run(m, m.time + TICK); assert.ok(!A.awm); assert.deepEqual([A.ammo.rifle.mag, A.ammo.rifle.reserve], [5, 20]);
  // a rifle reload in progress is dropped on pickup
  B.reset(); B.ammo.rifle.mag = 1; m.reload('B', 'rifle'); assert.ok(B.reloadUntil > m.time); m.extras.awmOn(B); assert.equal(B.reloadUntil, 0);
  // what a reconnecting player is told
  const st = m.extras.state(B); assert.deepEqual(st.map((e) => [e.t, e.t === 'rpgleft' ? e.left : e.on]), [['awm', 1], ['rpgleft', X.rpgAmmo]]); assert.deepEqual(st[0].ammo.rifle, [3, 0]); assert.equal(st[0].re, 1); assert.equal(st[1].re, 1);
});

// ------------------------------------------------------------------ over real sockets
const PORT = 20000 + Math.floor(Math.random() * 1000); let proc;
before(async () => { proc = spawn(process.execPath, ['src/server.js'], { env: { ...process.env, PORT: String(PORT), SC_DEV: '1' }, stdio: ['ignore', 'pipe', 'inherit'] }); await new Promise((res) => proc.stdout.on('data', (d) => { if (/server on/.test(String(d))) res(); })); });
after(() => proc.kill());

function client(name, token) {
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const inbox = []; const waiters = [];
  const events = [];   // every event from every snapshot, in order, with the server time it came with (_t)
  ws.on('message', (d) => { const m = JSON.parse(d); if (m.t === 's' && m.e) events.push(...m.e.map((e) => ({ ...e, _t: m.s.t }))); const w = waiters.find((w) => w.f(m)); if (w) { waiters.splice(waiters.indexOf(w), 1); w.res(m); } else { inbox.push(m); if (inbox.length > 400) inbox.splice(0, 100); } });
  const c = { ws, inbox, events, send: (m) => ws.send(JSON.stringify(m)),
    wait: (f, ms = 8000) => new Promise((res, rej) => { const hit = inbox.find(f); if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); } const w = { f, res }; waiters.push(w); setTimeout(() => { const i = waiters.indexOf(w); if (i >= 0) { waiters.splice(i, 1); rej(new Error('timeout')); } }, ms); }),
    event: async (f, ms = 8000) => { const end = Date.now() + ms; for (;;) { const e = events.find(f); if (e) return e; if (Date.now() > end) throw new Error('no such event'); await sleep(30); } } };
  return new Promise((res) => ws.on('open', async () => { c.send({ t: 'hello', name, token, v: 1 }); c.me = await c.wait((m) => m.t === 'welcome'); res(c); }));
}
async function pair(n1, n2) {
  const a = await client(n1), b = await client(n2);
  a.send({ t: 'create', settings: { bots: 0, respawn: true, respawnDelay: 2, timeLimit: 120, halo: false } });
  const room = await a.wait((m) => m.t === 'room');
  b.send({ t: 'join', code: room.code }); await b.wait((m) => m.t === 'room' && m.members.length === 2);
  b.send({ t: 'ready', v: true }); await a.wait((m) => m.t === 'room' && m.members.some((x) => x.ready));
  a.send({ t: 'start' }); const st = await a.wait((m) => m.t === 'start', 15000); await b.wait((m) => m.t === 'start', 15000);
  return { a, b, st };
}
const eye = (p) => [p[0], p[1] + 1.6, p[2]];
const dirTo = (o, t) => { const d = [t[0] - o[0], t[1] - o[1], t[2] - o[2]], l = Math.hypot(...d); return d.map((v) => +(v / l).toFixed(5)); };

// scenario 1: the timeline on both screens, Ash takes it, Bo can't, a one-shot kill, the AWM's bolt, back to the rifle
async function takeAndSpend() {
  const { a, b } = await pair('Ash', 'Bo');
  const d1 = await a.event((e) => e.t === 'drop' && e.ph === 1, 60000);
  assert.ok(Math.abs(d1._t - 48) < 0.2, 'beam 12 s before half time: ' + d1._t); assert.equal(d1.at, 60);
  const d2 = await a.event((e) => e.t === 'drop' && e.ph === 2, 15000); assert.ok(Math.abs(d2._t - 60) < 0.2, 'falls at half time');
  const d3 = await a.event((e) => e.t === 'drop' && e.ph === 3, 8000); assert.ok(Math.abs(d3._t - 64.35) < 0.2, 'lands at ~64.35 s: ' + d3._t);
  for (const ph of [1, 2, 3]) { const e = await b.event((x) => x.t === 'drop' && x.ph === ph); assert.deepEqual(e.p, d1.p, 'the same roof on every screen'); }
  const p = d1.p;
  a.send({ t: 'dev', tp: p });
  const d4 = await a.event((e) => e.t === 'drop' && e.ph === 4, 4000); assert.equal(d4.by, a.me.id);
  assert.ok(d4._t - d3._t >= 1.5, 'held for 1.5 s');
  await b.event((e) => e.t === 'drop' && e.ph === 4 && e.by === a.me.id);
  const on = await a.event((e) => e.t === 'awm' && e.id === a.me.id && e.on === 1); assert.deepEqual(on.ammo.rifle, [3, 0]);
  const am = await a.event((e) => e.t === 'ammo' && e.id === a.me.id && e._t >= d4._t); assert.deepEqual(am.ammo.rifle, [3, 0], 'the AWM magazine');
  // Bo stands on the empty roof: nothing more to take
  b.send({ t: 'dev', tp: p }); await sleep(2200);
  assert.equal(b.events.filter((e) => e.t === 'awm' && e.id === b.me.id).length, 0, 'no AWM for Bo');
  assert.equal(b.events.filter((e) => e.t === 'drop' && e.ph === 4).length, 1, 'taken once');
  // one shot, one kill: Ash steps 8 m off and fires at Bo's chest
  const pa = [p[0], p[1], p[2] + 8]; a.send({ t: 'dev', tp: pa }); await sleep(600);
  const o = eye(pa), t1 = Date.now();
  a.send({ t: 'fire', o, d: dirTo(o, [p[0], p[1] + 1.3, p[2]]), w: 'rifle', ct: 0 });
  const dmg = await b.event((e) => e.t === 'dmg' && e.id === b.me.id); assert.equal(dmg.amt, 400); assert.equal(dmg.hp, 0); assert.equal(dmg.by, a.me.id);
  await b.event((e) => e.t === 'kill' && e.id === b.me.id && e.by === a.me.id);
  await a.event((e) => e.t === 'hit' && e.id === a.me.id && e.kill === true);
  const s1 = await a.event((e) => e.t === 'ammo' && e.id === a.me.id && e.ammo.rifle[0] === 2); assert.deepEqual(s1.ammo.rifle, [2, 0]);
  // the AWM's bolt (1.69 s): a second pull 1.4 s later is refused (a rifle's would pass), then two more go up into the sky
  await sleep(1400 - (Date.now() - t1));
  a.send({ t: 'fire', o, d: [0, 1, 0], w: 'rifle', ct: 0 });
  const deny = await a.event((e) => e.t === 'deny' && e.id === a.me.id); assert.equal(deny.why, 'cycle'); assert.deepEqual(deny.ammo.rifle, [2, 0]);
  await sleep(1850 - (Date.now() - t1));
  a.send({ t: 'fire', o, d: [0, 1, 0], w: 'rifle', ct: 0 }); await a.event((e) => e.t === 'ammo' && e.id === a.me.id && e.ammo.rifle[0] === 1);
  await sleep(1850);
  a.send({ t: 'fire', o, d: [0, 1, 0], w: 'rifle', ct: 0 }); const s3 = await a.event((e) => e.t === 'ammo' && e.id === a.me.id && e.ammo.rifle[0] === 0);
  const off = await a.event((e) => e.t === 'awm' && e.id === a.me.id && e.on === 0, 4000);
  assert.ok(off._t - s3._t >= 1.6, 'back to the rifle once the last bolt has cycled: ' + (off._t - s3._t).toFixed(2));
  assert.deepEqual(off.ammo.rifle, [5, 20], 'the rifle as it was');
  const back = await a.event((e) => e.t === 'ammo' && e.id === a.me.id && e._t >= off._t); assert.deepEqual(back.ammo.rifle, [5, 20]);
  a.ws.close(); b.ws.close();
}

// scenario 2: Cy takes it, reconnects (told the crate is gone and he holds the AWM), then dies: back to the rifle
async function takeRejoinDie() {
  const { a, b, st } = await pair('Cy', 'Di');
  const d3 = await a.event((e) => e.t === 'drop' && e.ph === 3, 75000);
  a.send({ t: 'dev', tp: d3.p });
  await a.event((e) => e.t === 'awm' && e.id === a.me.id && e.on === 1, 4000);
  const tok = a.me.token, id = a.me.id; a.ws.close(); await sleep(300);
  const a2 = await client('Cy', tok); assert.equal(a2.me.id, id);
  const re = await a2.wait((m) => m.t === 'start' && m.rejoin === true);
  const dr = re.events.find((e) => e.t === 'drop'); assert.ok(dr && dr.ph === 4 && dr.by === id && dr.re === 1, 'told the crate is taken');
  const aw = re.events.find((e) => e.t === 'awm'); assert.ok(aw && aw.id === id && aw.on === 1 && aw.re === 1, 'told he holds the AWM'); assert.deepEqual(aw.ammo.rifle, [3, 0]);
  assert.deepEqual(re.ammo[id].ammo.rifle, [3, 0]);
  // off the roofs: dead, back to the rifle
  const pc = st.events.find((e) => e.t === 'spawn' && e.id === id).p;
  a2.send({ t: 'dev', tp: [pc[0], 3, pc[2]] });
  const k = await a2.event((e) => e.t === 'kill' && e.id === id);
  const off = await a2.event((e) => e.t === 'awm' && e.id === id && e.on === 0); assert.deepEqual(off.ammo.rifle, [5, 20]); assert.ok(off._t - k._t < 0.1, 'on death');
  const sp = await a2.event((e) => e.t === 'spawn' && e.id === id && e._t > k._t, 6000);
  await sleep(300);
  assert.equal(a2.events.filter((e) => e.t === 'awm' && e._t >= sp._t).length, 0, 'a fresh life, a plain rifle');
  assert.equal(b.events.filter((e) => e.t === 'awm' && e.id === b.me.id).length, 0, 'Di never had it');
  a2.ws.close(); b.ws.close();
}

test('over sockets: the timeline, the pickup, the AWM\'s numbers, back to the rifle; a reconnect and a death', { timeout: 150000 }, async () => {
  await Promise.all([takeAndSpend(), takeRejoinDie()]);
});
