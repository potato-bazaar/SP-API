// GLASS CITY online: world load, pane break sync, create/join MAPSWITCH.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';
import * as THREE from 'three';
import { loadWorld } from '../src/world.js';
import { Match, TICK } from '../src/engine.js';
import { DEFAULTS, SettingsSchema } from '../src/rules.js';

const V3 = THREE.Vector3;
const W = loadWorld('glass');

test('glass world: panes install, dropY is the street, a match ticks', () => {
  assert.ok(W.glassSolid && W.arena && W.map === 'glass');
  assert.ok(W.arena.dropY != null && W.arena.dropY < 3, 'street dropY: ' + W.arena.dropY);
  const m = new Match(W, { ...DEFAULTS, map: 'glass' }, [{ id: 'h0', name: 'A', team: 0 }, { id: 'b0', name: 'bot', team: 0, bot: true }], null);
  assert.ok(m.arena.glass && m.arena.glass.n > 100, 'panes: ' + (m.arena.glass && m.arena.glass.n));
  assert.equal(m.dropY, W.arena.dropY);
  for (let i = 0; i < 30; i++) m.step(TICK);
  assert.equal(m.state, 'live');
  const snap = m.snapshot();
  assert.ok(!snap.panes || Array.isArray(snap.panes));
});

test('glass panes: hit/break hooks push pane events and late-join snapshot lists them', () => {
  const m = new Match(W, { ...DEFAULTS, map: 'glass', halo: false }, [{ id: 'h0', name: 'A', team: 0 }], null);
  const G = m.arena.glass; assert.ok(G && G.n > 0);
  const id = 0; m.drain();
  G.hit(id, null, new V3(0, 10, 0));
  G.hit(id, null, new V3(0, 10, 0));
  G.hit(id, null, new V3(0, 10, 0));
  const ev = m.drain().filter(e => e.t === 'pane' && e.id === id);
  assert.ok(ev.some(e => e.hp === 2) && ev.some(e => e.hp === 1) && ev.some(e => e.hp === 0), JSON.stringify(ev));
  assert.equal(G.hp[id], 0);
  assert.ok(m.paneBroken.includes(id));
  assert.ok(m.snapshot().panes.includes(id));
});

const PORT = 19100 + Math.floor(Math.random() * 800); let proc;
before(async () => {
  proc = spawn(process.execPath, ['src/server.js'], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'inherit'] });
  await new Promise((res) => proc.stdout.on('data', d => { if (/server on/.test(String(d))) res(); }));
});
after(() => { try { proc.kill(); } catch (e) { /* gone */ } });

function client(name, maps) {
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const inbox = []; const waiters = [];
  ws.on('message', d => { const m = JSON.parse(d); const w = waiters.find(w => w.f(m)); if (w) { waiters.splice(waiters.indexOf(w), 1); w.res(m); } else { inbox.push(m); if (inbox.length > 200) inbox.splice(0, 50); } });
  const c = { ws, inbox, send: (m) => ws.send(JSON.stringify(m)), wait: (f, ms = 8000) => new Promise((res, rej) => { const hit = inbox.find(f); if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); } const w = { f, res }; waiters.push(w); setTimeout(() => { if (waiters.includes(w)) { waiters.splice(waiters.indexOf(w), 1); rej(new Error('timeout waiting')); } }, ms); }) };
  return new Promise(res => ws.on('open', async () => { c.send({ t: 'hello', name, v: 1, ...(maps ? { maps } : {}) }); c.me = await c.wait(m => m.t === 'welcome'); res(c); }));
}

test('a glass room: schema, MAPSWITCH, and only clients that have the map get in', async () => {
  assert.equal(SettingsSchema.parse({ map: 'glass' }).map, 'glass');
  const host = await client('GHost', ['city', 'loop', 'glass']);
  const old = await client('OldCity', ['city']);
  const guest = await client('Guest', ['city', 'loop', 'glass']);
  host.send({ t: 'create', settings: { map: 'glass', bots: 1 } });
  const r1 = await host.wait(m => m.t === 'room');
  assert.equal(r1.settings.map, 'glass');
  old.send({ t: 'join', code: r1.code });
  assert.match((await old.wait(m => m.t === 'error')).msg, /GLASS CITY/);
  guest.send({ t: 'join', code: r1.code, map: 'city' });
  assert.match((await guest.wait(m => m.t === 'error')).msg, /^MAPSWITCH:glass$/);
  guest.send({ t: 'join', code: r1.code, map: 'glass' });
  const r2 = await guest.wait(m => m.t === 'room' && m.members.length === 2);
  assert.equal(r2.settings.map, 'glass');
  guest.send({ t: 'ready', v: true });
  await host.wait(m => m.t === 'room' && m.members.find(x => x.id === guest.me.id).ready);
  host.send({ t: 'start' });
  const s1 = await host.wait(m => m.t === 'start', 20000);
  assert.equal(s1.settings.map, 'glass');
  assert.ok(s1.events.some(e => e.t === 'spawn' && e.id === host.me.id));
  host.ws.close(); guest.ws.close(); old.ws.close();
});

// ------------------------------------------------------------------ the rules of the map, on the server (no sockets)
import { GLASS_RULES } from '../../client/src/glass.js';
const A = W.arena;
const two = () => new Match(W, { ...DEFAULTS, map: 'glass' }, [{ id: 'h0', name: 'a', team: 0 }, { id: 'h1', name: 'b', team: 0 }], null);
const run = (m, s) => { for (let i = 0; i < s / TICK; i++) m.step(TICK); };
const drain = (m, t) => m.drain().filter(e => !t || e.t === t);
// a direction from this eye in which a round meets a whole pane first and bounces on
function bounceFrom(m, eye) {
  const G = m.arena.glass, d = new V3();
  for (let pitch = -0.5; pitch < 0.35; pitch += 0.07) for (let yaw = 0; yaw < 6.28; yaw += 0.11) {
    d.set(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch)); const h = m.arena.raycast(eye, d, 200); const id = G.paneAt(h);
    if (id >= 0 && h.distance > 6 && G.path(eye, d).bounces >= 1) return { d: d.clone(), id, dist: h.distance };
  }
  return null;
}

test('the map on the server: roofs only, the street is out, the halo closes where the arena says, the glass is the pack\'s', () => {
  assert.equal(SettingsSchema.parse({ map: 'glass' }).map, 'glass'); assert.equal(A.dropY, 1.5); assert.ok(A.parkour && A.parkour.sprint > 9);
  assert.ok(A.roofs.length > 300 && A.roofs.every(r => r.kind === 'roof' && r.roofY >= 1.75), 'every roof is above the street');
  const kinds = new Set(A.links.map(l => l.kind)); for (const k of ['walk', 'step', 'jump', 'ladder', 'zip', 'pad']) assert.ok(kinds.has(k), k);
  const m = two(), G = m.arena.glass; assert.ok(G && G.n === W.glassSolid.panes && G.n > 30000); assert.equal(m.dropY, 1.5); assert.deepEqual([m.zone.cx, m.zone.cz], A.zone.center);
  for (const h of m.humans) { assert.ok(h.pos.y >= 4, 'a start is on a roof'); const y = m.arena.groundY(h.pos.x, h.pos.z, h.pos.y + 1, 2); assert.ok(y != null && Math.abs(y - h.pos.y) < 0.4, 'with floor under it'); }
  // every pad lands where it says (the arc the game flies: arena.js linkPos), and every link starts and ends on a roof's floor
  const p = new V3(); for (const l of m.arena.links) { if (l.kind !== 'pad') continue; m.arena.linkPos(l, 0, 1, p); assert.ok(p.distanceTo(l.p1) < 0.05, 'pad ' + l.i); }
});

test('a round bounces off a pane and everyone is told; the third breaks it; another match on the same world has its own glass', () => {
  const m = two(), G = m.arena.glass, a = m.humans[0]; m.weaponsFree = true; const eye = a.eye().clone(), B = bounceFrom(m, eye); assert.ok(B, 'a pane to bounce off');
  const fire = () => { a.ammo.rifle.ready = 0; a.reloadUntil = 0; a.ammo.rifle.mag = 5; m.fire('h0', { o: eye.toArray(), d: B.d.toArray(), w: 'rifle' }, 0); return m.drain(); };
  let ev = fire(); const shot = ev.find(e => e.t === 'shot'); assert.ok(shot && shot.v && shot.v.length >= 1 && shot.v.length <= GLASS_RULES.BOUNCES, 'the shot says where it bounced');
  const first = new V3(...shot.v[0]); assert.ok(Math.abs(first.distanceTo(eye) - B.dist) < 0.1, 'first off the pane it was aimed at');
  const pane = ev.find(e => e.t === 'pane' && e.id === B.id); assert.ok(pane && pane.hp === GLASS_RULES.HP - 1 && pane.p, 'the pane is told of, with what it has left'); assert.equal(G.hp[B.id], 2);
  ev = fire(); assert.equal(G.hp[B.id], 1); assert.equal(G.broken, 0);
  ev = fire(); const broke = ev.find(e => e.t === 'pane' && e.id === B.id); assert.ok(broke && broke.hp === 0 && broke.by === 'h0', 'the third round breaks it'); assert.equal(G.hp[B.id], 0); assert.ok(G.broken >= 1);
  const h2 = m.arena.raycast(eye, B.d, 300); assert.ok(!h2 || h2.distance > B.dist + 0.05 || G.paneAt(h2) !== B.id, 'a broken pane stops nothing');
  const st = m.glassState(); assert.ok(st.length === 1 && st[0].t === 'panes'); const k = st[0].s.indexOf(B.id); assert.ok(k >= 0 && k % 2 === 0 && st[0].s[k + 1] === 0, 'someone coming back is told it is gone');
  // the same world, another match: whole glass
  const m2 = two(), G2 = m2.arena.glass; assert.equal(G2.hp[B.id], 3); assert.equal(G2.broken, 0); const h3 = m2.arena.raycast(eye, B.d, 300); assert.ok(h3 && Math.abs(h3.distance - B.dist) < 1e-3 && G2.paneAt(h3) === B.id);
  assert.deepEqual(m2.glassState(), []);
});

test('a bot whose pane is shot out over the street falls to it and is out, to the shooter\'s credit', () => {
  const m = new Match(W, { ...DEFAULTS, map: 'glass' }, [{ id: 'h0', name: 'a', team: 0 }, { id: 'b0', name: 'bot', team: 0, bot: true }], null), ar = m.arena, G = ar.glass, b = m.bots[0], a = m.humans[0];
  const o = new V3(), down = new V3(0, -1, 0); let spot = null;
  for (const r of ar.roofs) { if (r.roofY < 5 || r.cells.length < 20) continue; for (const k of r.cells) { const c = ar.cellPos(r, k), h = ar.raycast(o.set(c.x, r.roofY + 0.7, c.z), down, 1.5), id = G.paneAt(h); if (id < 0) continue;
      const under = ar.raycast(o.set(c.x, h.point.y - 0.005, c.z), down, 90); if (under && under.point.y < 0.5) { spot = { r, c, id }; break; } } if (spot) break; }   // (strokes overlap: many a floor is two panes thick)
  assert.ok(spot, 'a pane that is somebody\'s floor, with only the street under it');
  b.pos.set(spot.c.x, spot.r.roofY, spot.c.z); b.roof = spot.r.i; b.link = null; b.path.length = 0; b.plan.length = 0; b.state = 'scan'; m.drain();
  G.smash(spot.id, a, spot.c); m._glassFall();
  assert.equal(b.alive, false, 'the bot is out'); const last = m.log[m.log.length - 1]; assert.equal(last.v, 'b0'); assert.equal(last.k, 'h0'); assert.match(String(last.cause), /street/);
  assert.ok(!ar.walk(ar.roofs[spot.r.i], spot.c.x, spot.c.z), 'and that floor is nobody\'s ground any more');
});

test('movement the server believes here: the running boost and the faster cables; the street ends it; the city map is as strict as before', () => {
  // (walked from the west side: the play area ends at x = 180, and a start may be 110 m east of the middle)
  const walk = (m, speed, secs) => { const a = m.humans[0]; a.pos.x = a.valid.x = -112; const p = a.pos.toArray(); let seq = 0, corr = 0; m.drain(); for (let i = 0; i < secs * 30; i++) { p[0] += speed / 30; m.input('h0', { seq: seq++, p, yaw: 0, pitch: 0, c: 0, mode: 'walk', link: -1, w: 'rifle', ads: 0 }); m.time += 1 / 30; corr += drain(m, 'correct').length; } return { corr, off: Math.abs(a.pos.x - p[0]) }; };
  let r = walk(two(), 10.6, 8); assert.equal(r.corr, 0, 'a full sprint is believed'); assert.ok(r.off < 0.01);
  r = walk(two(), 13, 8); assert.equal(r.corr, 0, 'with room for a leap\'s landing');
  r = walk(two(), 18, 6); assert.ok(r.corr > 0, 'but not flying');
  const city = new Match(loadWorld('city'), { ...DEFAULTS }, [{ id: 'h0', name: 'a', team: 0 }, { id: 'h1', name: 'b', team: 0 }], null); r = walk(city, 13, 8); assert.ok(r.corr > 0, 'the city map still believes no more than it did: 13 m/s on foot is not believed there');
  // a cable, end to end at its own speed
  const m = two(), a = m.humans[0], l = m.arena.links.filter(x => x.kind === 'zip').sort((x, y) => y.len - x.len)[0]; assert.ok(l.len > 60 && Math.abs(l.len / l.time - 17) < 0.1, 'cables run at 17 m/s');
  a.pos.copy(l.p0); a.valid.copy(l.p0); a.budget = 0; m.drain(); let seq = 0, corr = 0; const q = new V3(), n = Math.ceil(l.time * 30);
  for (let i = 1; i <= n; i++) { m.arena.linkPos(l, 0, i / n, q); m.input('h0', { seq: seq++, p: q.toArray(), yaw: 0, pitch: 0, c: 0, mode: 'link', link: l.i, w: 'rifle', ads: 0 }); m.time += 1 / 30; corr += drain(m, 'correct').length; }
  assert.equal(corr, 0, 'the whole ride is believed'); assert.ok(a.pos.distanceTo(l.p1) < 1.2);
  // a page reports its place once a frame: every cable, at the 15 and 20 reports a second of a slow phone (a cable is a hop up, the ride and a drop: the ride itself is quicker than length over time)
  for (const hz of [15, 20, 30]) { let bad = 0; for (const z of m.arena.links) { if (z.kind !== 'zip') continue; m.arena.linkPos(z, 0, 0, q); a.pos.copy(q); a.valid.copy(q); a.budget = 6; a.strikes = 0; a.lastIn = m.time; m.drain(); const k = Math.max(2, Math.ceil(z.time * hz)); let c = 0;
      for (let i = 1; i <= k; i++) { m.arena.linkPos(z, 0, i / k, q); m.time += 1 / hz; m.input('h0', { seq: seq++, p: q.toArray(), yaw: 0, pitch: 0, c: 0, mode: 'link', link: z.i, w: 'rifle', ads: 0 }); c += drain(m, 'correct').length; } if (c) bad++; }
    assert.equal(bad, 0, 'no cable drops its rider at ' + hz + ' reports a second'); }
  { const p = [-140, 30, 0]; a.pos.set(...p); a.valid.copy(a.pos); a.budget = 6; a.strikes = 0; a.lastIn = m.time; m.drain(); let c = 0; for (let i = 0; i < 20 * 15; i++) { p[0] += 10.6 / 15; m.time += 1 / 15; m.input('h0', { seq: seq++, p, yaw: 0, pitch: 0, c: 0, mode: 'walk', link: -1, w: 'rifle', ads: 0 }); c += drain(m, 'correct').length; } assert.equal(c, 0, 'nor is a full sprint pulled back at 15 reports a second'); }
  // down to the street: out
  const m3 = two(), c = m3.humans[0], p = c.pos.toArray(); seq = 0; while (p[1] > 1.2) { p[1] -= 0.25; m3.input('h0', { seq: seq++, p, yaw: 0, pitch: 0, c: 0, mode: 'walk', link: -1, w: 'rifle', ads: 0 }); m3.step(TICK); }
  assert.equal(c.alive, false); assert.match(String(m3.log[m3.log.length - 1].cause), /street/);
});

test('a whole match of bots on the roofs: rounds bounce, panes break, somebody wins, nobody is left standing on the street', () => {
  const m = new Match(W, { ...DEFAULTS, map: 'glass' }, Array.from({ length: 8 }, (_, i) => ({ id: 'b' + i, name: 'bot', team: 0, bot: true })), null); const n = {}; let low = 0;
  for (let i = 0; i < 300 / TICK && m.state === 'live'; i++) { m.step(TICK); for (const e of m.drain()) { n[e.t] = (n[e.t] || 0) + 1; if (e.t === 'shot' && e.v) n.bounced = (n.bounced || 0) + 1; } if (i % 30 === 0) for (const b of m.bots) if (b.alive && !b.link && b.pos.y < 1.5) low++; }
  assert.equal(m.state, 'over'); assert.ok(n.shot > 10 && n.pane > 5 && n.bounced > 0, JSON.stringify(n)); assert.equal(low, 0); assert.ok(m.bots.filter(b => b.alive).length <= 2, 'the halo and the rifles thin them out');
});


// ------------------------------------------------------------------ a whole room over real sockets (the server started above)
test('a room on GLASS CITY: pages that have the map get in (the others are told), the match starts on the roofs, a round off the glass reaches everyone', async () => {
  const ALL = ['city', 'loop', 'glass'], host = await client('Greg', ALL), old = await client('Old', ['city', 'loop']), guest = await client('Raj', ALL);
  host.send({ t: 'create', settings: { map: 'glass', bots: 0 } }); const r1 = await host.wait(m => m.t === 'room'); assert.equal(r1.settings.map, 'glass');
  old.send({ t: 'join', code: r1.code }); assert.match((await old.wait(m => m.t === 'error')).msg, /GLASS CITY/);
  guest.send({ t: 'join', code: r1.code, map: 'city' }); assert.match((await guest.wait(m => m.t === 'error')).msg, /^MAPSWITCH:glass$/);
  guest.send({ t: 'join', code: r1.code, map: 'glass' }); await guest.wait(m => m.t === 'room' && m.members.length === 2);
  guest.send({ t: 'ready', v: true }); await host.wait(m => m.t === 'room' && m.members.find(x => x.id === guest.me.id).ready);
  host.send({ t: 'start' }); const s1 = await host.wait(m => m.t === 'start'), s2 = await guest.wait(m => m.t === 'start'); assert.equal(s1.settings.map, 'glass'); assert.deepEqual(s1.zc, A.zone.center);
  const mine = s1.events.find(e => e.t === 'spawn' && e.id === host.me.id); assert.ok(mine && mine.p[1] >= 4, 'the host starts on a roof');
  // wait for weapons free, then fire where a local copy of the world says a round bounces
  await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'free'), 12000);
  const local = two(), eye = new V3(mine.p[0], mine.p[1] + 1.6, mine.p[2]), B = bounceFrom(local, eye); assert.ok(B);
  host.send({ t: 'fire', o: eye.toArray(), d: B.d.toArray(), w: 'rifle', ct: 0 });
  const got = await guest.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'shot' && e.by === host.me.id), 6000), shot = got.e.find(e => e.t === 'shot'), pane = got.e.find(e => e.t === 'pane' && e.id === B.id);
  assert.ok(shot.v && shot.v.length >= 1, 'the guest is told where the host\'s round bounced'); assert.ok(pane && pane.hp === 2, 'and which pane it met');
  // the guest drops out and comes back: told of every pane that is not whole
  const token = guest.me.token; guest.ws.close(); await new Promise(r => setTimeout(r, 300));
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const back = await new Promise((res, rej) => { const t = setTimeout(() => rej(new Error('no rejoin')), 8000); ws.on('open', () => ws.send(JSON.stringify({ t: 'hello', name: 'Raj', v: 1, token, maps: ALL }))); ws.on('message', d => { const m = JSON.parse(d); if (m.t === 'start') { clearTimeout(t); res(m); } }); });
  assert.ok(back.rejoin, 'back in the match'); const ps = back.events.find(e => e.t === 'panes'); assert.ok(ps && ps.s.indexOf(B.id) % 2 === 0 && ps.s[ps.s.indexOf(B.id) + 1] === 2, 'with the glass as it stands'); ws.close(); host.ws.close(); old.ws.close();
});
