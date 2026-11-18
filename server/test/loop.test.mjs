// LOOP CITY (the ring map): the ring's geometry on the server, then end to end over real sockets.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';
import * as THREE from 'three';
import { loadWorld } from '../src/world.js';
import { Match } from '../src/engine.js';
import { DEFAULTS, SettingsSchema } from '../src/rules.js';
import { zoneD } from '../../client/src/ring.js';

const V3 = THREE.Vector3; const W = loadWorld('loop'); const A = W.arena;
const mk = () => new Match(W, { ...DEFAULTS, map: 'loop' }, [{ id: 'b0', name: 'bot', team: 0, bot: true }, { id: 'b1', name: 'bot', team: 0, bot: true }], null);

test('the ring: chart and wheel agree, rays cross the hub, the seam is not a wall', () => {
  const m = mk(), ar = m.arena, R = ar.ring.R, C = ar.ring.C; assert.ok(ar.ring && R > 90 && Math.abs(C - 2 * Math.PI * R) < 1e-6);
  // a point seen from itself is itself; seen from the far side of the wheel it hangs overhead, 2R up (less the two heights)
  const p = new V3(10, 5, 3), q = new V3(10 + C / 2, 8, 3), v = ar.rel(new V3(), p, q);
  assert.ok(Math.abs(v.x) < 1e-6 && Math.abs(v.y - (2 * R - 5 - 8)) < 1e-6 && Math.abs(ar.dist(p, q) - v.length()) < 1e-9);
  assert.ok(ar.rel(new V3(), p, p).length() < 1e-9);
  // see / unsee are inverses; the frame at the seam is the frame at the other end of the chart
  const s = ar.see(new V3(), q, p.x), back = ar.unsee(new V3(), s, p.x); assert.ok(Math.abs(ar.wrapD(back.x - q.x)) < 1e-6 && Math.abs(back.y - q.y) < 1e-6);
  assert.ok(Math.abs(ar.dist(new V3(C / 2 - 1, 2, 0), new V3(-C / 2 + 1, 2, 0)) - 2 * (R - 2) * Math.sin(1 / R)) < 1e-6);
  // the ground is where the chart says it is, everywhere round the ring (the street, a roof, across the seam)
  const g = A.roofs.find(r => r.kind === 'ground' && r.x > C / 2 - 40), rf = A.roofs.find(r => r.kind === 'roof' && r.roofY > 12);
  for (const r of [g, rf]) { const rr = ar.roofs[A.roofs.indexOf(r)], c = ar.cellPos(rr, rr.cells[(rr.cells.length / 2) | 0]); const y = ar.groundY(c.x, c.z, c.y + 3, 8); assert.ok(y != null && Math.abs(y - rr.roofY) < 0.35, `ground at ${r.name}: ${y} vs ${rr.roofY}`); }
  // straight up from a roof: the far side of the wheel, a little under 2R away; and the shot arrives where the chart says
  const top = ar.roofs[A.roofs.indexOf(rf)], c = ar.cellPos(top, top.cells[(top.cells.length / 2) | 0]), o = new V3(c.x, c.y + 1.6, c.z); const up = ar.raycast(o, new V3(0, 1, 0), 420);
  assert.ok(up && Math.abs(up.point.y - (R - 0.9)) < 0.05, 'dead straight up is the axle: ' + (up && up.point.y));
  const tilt = new V3(0.1, 1, 0).normalize(), h = ar.raycast(o, tilt, 420);
  assert.ok(h && h.distance > 2 * R - o.y - 30 && h.distance < 2 * R - o.y + 1, 'a little off it, the far side: ' + (h && h.distance));
  assert.ok(Math.abs(ar.wrapD(h.point.x - o.x)) > C / 2 - 30 && Math.abs(h.point.z - o.z) < 0.5, 'which is almost half a ring away');
  assert.ok(Math.abs(ar.dist(o, h.point) - h.distance) < 0.05);
  // two roofs that face each other across the hub see each other; a roof and the street right behind its own building do not
  const far = ar.unsee(new V3(), o.clone().addScaledVector(tilt, h.distance - 3), o.x); assert.equal(ar.los(o, far), true);
  // a hub line is straight: every point of the ride lies on the segment between its ends (in the frame of the start)
  const L = ar.links.find(l => l.hub); assert.ok(L, 'there are hub lines'); const a = new V3(L.p0.x, L.p0.y + L.lift, L.p0.z), b = new V3(L.p1.x, L.p1.y + L.lift, L.p1.z), ab = ar.rel(new V3(), a, b);
  let hi = 0; for (let u = 0.06; u <= 0.94; u += 0.02) { const pt = ar.linkPos(L, 0, u, new V3()), ap = ar.rel(new V3(), a, pt); const k = ap.dot(ab) / ab.lengthSq(); assert.ok(ap.addScaledVector(ab, -k).length() < 0.01); hi = Math.max(hi, pt.y); }
  assert.ok(hi > 35, 'and it climbs toward the hub: ' + hi); assert.ok(Math.abs(ab.length() - L.len) < 0.5);
});

test('the halo on the ring: a stretched circle that is the whole ring at the start and a plain circle at the end', () => {
  const m = mk(), z = m.zone, ar = m.arena; assert.ok(z.C && z.k > 1);
  for (const r of ar.roofs) assert.ok(ar.safeCount(r, A.zone.r0 + 0.5) === r.cells.length, 'everything is inside at the start: ' + r.name);
  assert.ok(zoneD(z, z.cx + 30, z.cz + 5, 8.5) > 8.5 && Math.abs(zoneD(z, z.cx + 3, z.cz + 4, 8.5) - 5) < 1e-9, 'the last halo is a circle');
  assert.ok(zoneD(z, z.cx + 150, z.cz, 50) < 50 && zoneD(z, z.cx + 150, z.cz, 29.5) > 29.5, 'in between it is long along the ring');
  assert.ok(Math.abs(zoneD(z, z.cx + ar.ring.C + 3, z.cz, 8.5) - 3) < 1e-6, 'and it wraps');
});

// ---------------------------------------------------------------- over real sockets
const PORT = 19000 + Math.floor(Math.random() * 900); let proc;
before(async () => { proc = spawn(process.execPath, ['src/server.js'], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'inherit'] }); await new Promise((res) => proc.stdout.on('data', d => { if (/server on/.test(String(d))) res(); })); });
after(() => proc.kill());
function client(name, maps) {
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const inbox = []; const waiters = [];
  ws.on('message', d => { const m = JSON.parse(d); const w = waiters.find(w => w.f(m)); if (w) { waiters.splice(waiters.indexOf(w), 1); w.res(m); } else { inbox.push(m); if (inbox.length > 600) inbox.splice(0, 100); } });
  const c = { ws, inbox, send: (m) => ws.send(JSON.stringify(m)), wait: (f, ms = 8000) => new Promise((res, rej) => { const hit = inbox.find(f); if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); } const w = { f, res }; waiters.push(w); setTimeout(() => { if (waiters.includes(w)) { waiters.splice(waiters.indexOf(w), 1); rej(new Error('timeout waiting')); } }, ms); }) };
  return new Promise(res => ws.on('open', async () => { c.send({ t: 'hello', name, v: 1, ...(maps ? { maps } : {}) }); c.me = await c.wait(m => m.t === 'welcome'); res(c); }));
}
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

test('a room on the loop: only clients that have the map get in, the map is fixed, movement round the seam and along a hub line is believed', async () => {
  assert.equal(SettingsSchema.parse({}).map, 'city');
  const host = await client('Greg', ['city', 'loop']), old = await client('Old'), guest = await client('Raj', ['city', 'loop']);
  host.send({ t: 'create', settings: { map: 'loop', bots: 2 } }); const r1 = await host.wait(m => m.t === 'room'); assert.equal(r1.settings.map, 'loop');
  old.send({ t: 'join', code: r1.code }); assert.match((await old.wait(m => m.t === 'error')).msg, /LOOP CITY/);
  guest.send({ t: 'join', code: r1.code, map: 'city' }); const r2 = await guest.wait(m => m.t === 'room' && m.members.length === 2); assert.equal(r2.settings.map, 'loop');
  host.send({ t: 'settings', patch: { map: 'city' } }); assert.match((await host.wait(m => m.t === 'error')).msg, /map/);
  guest.send({ t: 'ready', v: true }); await host.wait(m => m.t === 'room' && m.members.find(x => x.id === guest.me.id).ready);
  host.send({ t: 'start' }); const s1 = await host.wait(m => m.t === 'start'); assert.equal(s1.settings.map, 'loop'); assert.ok(Array.isArray(s1.zc) && s1.zc.length === 2, 'the start says where the halo closes');
  const mine = s1.events.find(e => e.t === 'spawn' && e.id === host.me.id); assert.ok(mine); const C = A.C, H = C / 2;
  // walk: a few steps, then (as a test server would not let us fly there) check the seam rule directly on a match of our own
  let seq = 0; const p = mine.p.slice();
  for (let i = 0; i < 15; i++) { p[2] += 0.12; host.send({ t: 'in', seq: seq++, p, yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 }); await sleep(33); }
  await sleep(120); for (let i = host.inbox.length - 1; i >= 0; i--) if (host.inbox[i].t === 's') host.inbox.splice(i, 1);
  const snap = await host.wait(m => m.t === 's'); const me = snap.s.a.find(a => a[0] === host.me.id); assert.ok(Math.abs(me[3] - p[2]) < 0.3, 'server follows plausible movement');
  for (let i = 0; i < 4; i++) host.send({ t: 'in', seq: seq++, p: [p[0] + 60, p[1], p[2]], yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 });
  assert.ok(await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'correct' && e.id === host.me.id)), 'a teleport is still corrected');
  // a shot up past the axle comes down on the far side of the wheel
  await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'free'), 9000);
  const cur = (await host.wait(m => m.t === 's')).s.a.find(a => a[0] === host.me.id); const o = [cur[1], cur[2] + 1.6, cur[3]];
  host.send({ t: 'fire', o, d: [0.0995, 0.995, 0], w: 'rifle', ct: Date.now() });
  const shot = await guest.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'shot' && e.by === host.me.id)); const e = shot.e.find(e => e.t === 'shot').e;
  const dx = Math.abs(((e[0] - o[0] + H) % C + C) % C - H); assert.ok(dx > H - 40 && e[1] < 25, 'the round lands on the far side of the wheel: ' + JSON.stringify(e));
  host.ws.close(); guest.ws.close(); old.ws.close();
});

test('movement the server believes on the ring: across the seam on foot, along a hub line; not a jump across the chart', () => {
  const m = new Match(W, { ...DEFAULTS, map: 'loop' }, [{ id: 'h', name: 'H', team: 0 }, { id: 'b0', name: 'bot', team: 0, bot: true }], null); const ar = m.arena, H = ar.ring.H; const a = m.byId.get('h');
  const g = ar.roofs.find(r => r.kind === 'ground' && r.x1 > H - 2); const z0 = ar.cellPos(g, g.cells.find(k => ar.cellPos(g, k).x > H - 1.5)).z;
  a.pos.set(H - 1, g.roofY, z0); a.valid.copy(a.pos); a.budget = 0; let seq = 0, x = H - 1;
  for (let i = 0; i < 40; i++) { m.time += 0.05; x += 0.3; m.input('h', { seq: seq++, p: [x, g.roofY, z0], yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 }); }   // 6 m/s straight through x = +H
  assert.ok(a.pos.x < -H + 12 && a.pos.x > -H, 'walked over the seam: ' + a.pos.x); assert.ok(!m.events.some(e => e.t === 'correct'));
  // ride a hub line at its real pace
  const L = ar.links.find(l => l.hub); a.pos.set(L.p0.x, L.p0.y, L.p0.z); a.valid.copy(a.pos); const pt = new V3(); const n = Math.round(L.time / 0.05);
  for (let i = 1; i <= n; i++) { m.time += 0.05; ar.linkPos(L, 0, i / n, pt); m.input('h', { seq: seq++, p: [pt.x, pt.y, pt.z], yaw: 0, pitch: 0, c: 0, mode: 'link', link: L.i, w: 'rifle', ads: 0 }); }
  assert.ok(Math.hypot(ar.wrapD(a.pos.x - L.p1.x), a.pos.z - L.p1.z) < 0.5 && !m.events.some(e => e.t === 'correct'), 'the hub ride is believed');
  // claiming to be on that cable somewhere else is not
  for (let i = 0; i < 4; i++) { m.time += 0.05; m.input('h', { seq: seq++, p: [L.p1.x + 40, 30, L.p1.z + 30], yaw: 0, pitch: 0, c: 0, mode: 'link', link: L.i, w: 'rifle', ads: 0 }); }
  assert.ok(m.events.some(e => e.t === 'correct'), 'off the cable is corrected');
});
