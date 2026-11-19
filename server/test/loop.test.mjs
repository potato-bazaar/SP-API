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
import { trajectory, throwVelocity } from '../src/gear.js';
import { rocketPath, X } from '../src/extras.js';
import { TICK } from '../src/engine.js';

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

test('close work ignores the seam; a can, a rocket and the AWM go where the ring says', () => {
  const m = new Match(W, { ...DEFAULTS, map: 'loop' }, [{ id: 'h0', name: 'A', team: 0 }, { id: 'h1', name: 'B', team: 0 }], null), ar = m.arena, C = ar.ring.C, H = C / 2, R = ar.ring.R;
  const [a, b] = m.humans; m.weaponsFree = true;
  // two people a step apart on the street, one each side of the line where chart x jumps from +H to -H
  const gy = ar.groundY(H - 0.5, 20, 3, 8); assert.ok(gy != null && Math.abs(gy) < 0.5, 'street at the seam: ' + gy);
  assert.ok(Math.abs(ar.groundY(H + 3, 20, 3, 8) - gy) < 0.3 && Math.abs(ar.groundY(-H - 3, 20, 3, 8) - gy) < 0.3, 'the ground answers for any x');
  a.pos.set(H - 0.5, gy, 20); b.pos.set(-H + 0.5, gy, 20); a.valid.copy(a.pos); b.valid.copy(b.pos);
  const swing = ar.rel(new V3(), a.eye(new V3()), b.chest(new V3())).normalize(), hit = m.gearSim.meleeTarget(a, swing, 'hammer');
  assert.ok(hit && hit.to === b, 'the hammer reaches across');
  // gas lying on one side of the line hurts the person standing on the other
  m.gearSim.clouds.push({ pos: new V3(H - 0.6, gy, 20), by: null, until: m.time + 9, acc: new Map() }); for (let i = 0; i < 50; i++) m.step(TICK);
  assert.ok(b.hp < 100 && a.hp < 100, `gas across the seam: ${a.hp} ${b.hp}`);
  // a can thrown over the line comes down on the street beyond it (and is filed at its place on the chart)
  const tr = trajectory(ar, new V3(H - 4, gy + 1.5, 20), throwVelocity(new V3(1, 0.25, 0).normalize()));
  assert.ok(tr.end.x >= -H && tr.end.x < -H + 45 && tr.end.y > -0.5 && tr.end.y < 4, 'the can lands past the seam: ' + tr.end.toArray().map(v => v.toFixed(1)));
  // smoke only counts when it sits on the real sight line: two roofs facing each other across the hub look through the middle of the wheel
  const rf = ar.roofs.find(r => r.kind === 'roof' && r.roofY > 12), c = ar.cellPos(rf, rf.cells[(rf.cells.length / 2) | 0]), o = new V3(c.x, c.y + 1.6, c.z);
  const tilt = new V3(0.1, 1, 0).normalize(), up = ar.raycast(o, tilt, 420), far = ar.unsee(new V3(), o.clone().addScaledVector(tilt, up.distance - 2), o.x);
  m.gearSim.smokes.push({ pos: new V3(ar.wrapX(o.x + C / 4), 0, o.z), until: m.time + 99 }); assert.equal(m.gearSim.smokeCut(o, far), false, 'smoke on the street a quarter-ring away is not in the way');
  const mid = ar.unsee(new V3(), o.clone().addScaledVector(tilt, up.distance / 2), o.x); m.gearSim.smokes[0].pos.set(mid.x, mid.y - 1.2, mid.z); assert.equal(m.gearSim.smokeCut(o, far), true, 'smoke at the hub is');
  // the AWM's through-walls shot must hand the ring's raycast back (it used to fall through to the flat one for the rest of the match)
  const rc = ar.raycast; assert.equal(m.extras.pierce(() => ar.raycast(o, tilt, 420)), null); assert.equal(ar.raycast, rc);
  const again = ar.raycast(o, tilt, 420); assert.ok(again && Math.abs(again.distance - up.distance) < 1e-6);
  // a rocket fired at the roofs overhead flies straight through the wheel and bursts there
  const path = rocketPath(ar, [o.x, o.y, o.z], [tilt.x * X.rpgSpeed, tilt.y * X.rpgSpeed, tilt.z * X.rpgSpeed]), last = new V3(...path.pts[path.pts.length - 1]);
  assert.ok(path.wall && Math.abs(ar.wrapD(last.x - o.x)) > H - 45 && last.y < 30, 'the rocket lands on the far side: ' + last.toArray().map(v => v.toFixed(1)));
  // each step is as long as the rocket is fast (it slows a little as it climbs against its own down), never a jump
  let lo = 9, hi = 0; for (let k = 1; k < path.pts.length - 1; k++) { const st = ar.dist(new V3(...path.pts[k - 1]), new V3(...path.pts[k])); lo = Math.min(lo, st); hi = Math.max(hi, st); } assert.ok(lo > 1.5 && hi < X.rpgSpeed * TICK + 0.01, `in even steps: ${lo.toFixed(2)}..${hi.toFixed(2)}`);
  assert.ok(ar.dist(o, last) > 150 && path.pts.length * TICK < 4.5, 'in under five seconds');
});

test('teams on the ring: one half of the wheel each, and a halo that closes on the park between them', () => {
  for (const mode of ['4v4', '2v2']) {
    const n = mode === '4v4' ? 8 : 4, roster = []; for (let i = 0; i < n; i++) roster.push({ id: 'b' + i, name: 'bot' + i, team: i % 2, bot: true });
    const m = new Match(W, { ...DEFAULTS, map: 'loop', mode }, roster, null), z = m.zone, tc = A.zone.teamCenters[0];
    assert.ok(z.cx === tc[0] && z.cz === tc[1], 'the park');
    const d = [[], []]; for (const b of m.bots) { assert.ok(b.team === 0 ? b.pos.x < 0 : b.pos.x > 0, `team ${b.team} at x ${b.pos.x}`); d[b.team].push(Math.abs(m.arena.wrapD(b.pos.x - z.cx))); }
    const mean = (l) => l.reduce((s, x) => s + x, 0) / l.length; assert.ok(Math.abs(mean(d[0]) - mean(d[1])) < 30, `both as far from it: ${mean(d[0]).toFixed(0)} ${mean(d[1]).toFixed(0)}`);
    assert.ok(Math.min(...d[0], ...d[1]) > 90, 'and nobody starts on top of it');
  }
  const seen = new Set(); for (let i = 0; i < 40; i++) { const m = new Match(W, { ...DEFAULTS, map: 'loop', mode: 'ffa' }, [{ id: 'b0', name: 'bot', team: 0, bot: true }], null); seen.add(m.zone.cx); assert.ok(Math.abs(Math.abs(m.zone.cx) - m.arena.ring.C / 2) > 100, 'never at the seam'); }
  assert.ok(seen.size >= 2, 'everyone for themselves: the halo moves about');
});

test('breakable walls on the ring: the same list everywhere, they stop a round and sight, two rifle rounds bring one down', () => {
  const m = new Match(W, { ...DEFAULTS, map: 'loop' }, [{ id: 'h0', name: 'A', team: 0 }, { id: 'b0', name: 'bot', team: 0, bot: true }], null), ar = m.arena;
  assert.ok(m.cover.length > 60, 'walls: ' + m.cover.length); const m2 = new Match(W, { ...DEFAULTS, map: 'loop' }, [{ id: 'b0', name: 'bot', team: 0, bot: true }], null);
  assert.deepEqual(m2.cover.map(w => w.min.toArray()), m.cover.map(w => w.min.toArray()), 'every match (and every client) builds the same walls');
  const w = m.cover.find(x => x.tall && Math.max(x.max.x - x.min.x, x.max.z - x.min.z) > 3), c = new V3((w.min.x + w.max.x) / 2, w.min.y + 1.2, (w.min.z + w.max.z) / 2), along = w.max.x - w.min.x > w.max.z - w.min.z;
  // stand on the roof side of the wall, 4 m off, and look through it
  const r0 = ar.roofs[w.roof], inner = along ? new V3(0, 0, Math.sign(r0.z - c.z) || 1) : new V3(Math.sign(r0.x - c.x) || 1, 0, 0);
  const o = c.clone().addScaledVector(inner, 4).setY(c.y + 0.2), d = c.clone().sub(o).normalize(), far = c.clone().addScaledVector(d, 0.45);   // just behind it, where someone would hide
  assert.equal(ar.los(o, far), false, 'a wall blocks sight'); const h = ar.raycast(o, d, 50); assert.ok(h && h.dyn === w, 'and stops a round');
  m.events.length = 0; m.coverHit(w, 2); assert.equal(w.hp, 2); m.coverHit(w, 2); assert.equal(w.hp, 0);
  assert.ok(m.events.filter(e => e.t === 'cover' && e.id === w.id).length === 2 && m.snapshot().z[7].includes(w.id), 'broken: told, and listed for anyone who joins later');
  assert.equal(ar.los(o, far), true, 'gone: it no longer stops anything');
  const w2 = m.cover.find(x => x.hp > 0); m.coverBlast(new V3((w2.min.x + w2.max.x) / 2, w2.min.y + 1, (w2.min.z + w2.max.z) / 2), 3.5); assert.equal(w2.hp, 0, 'a blast brings one down');
  const r = ar.roofs[w.roof]; assert.ok(w.min.y > r.roofY - 0.1 && w.min.y < r.roofY, 'it stands on its roof');
});

test('doors: the same doors everywhere; one throws you somewhere safe in the halo, now and then onto the angel\'s crown', () => {
  for (const map of ['city', 'loop']) {
    const w = loadWorld(map), m = new Match(w, { ...DEFAULTS, map }, [{ id: 'h0', name: 'A', team: 0 }, { id: 'b0', name: 'bot', team: 0, bot: true }], null), ar = m.arena;
    assert.ok(m.doors.length >= (map === 'loop' ? 10 : 6), map + ' doors: ' + m.doors.length);
    const m2 = new Match(w, { ...DEFAULTS, map }, [{ id: 'b0', name: 'bot', team: 0, bot: true }], null); assert.deepEqual(m2.doors.map(d => d.p.toArray()), m.doors.map(d => d.p.toArray()));
    for (const d of m.doors) for (const e of m.doors) if (d !== e) assert.ok(ar.dist(d.p, e.p) > 25, 'spread out');
    const a = m.byId.get('h0'), d = m.doors[0]; m.weaponsFree = true;
    a.pos.copy(d.p); a.valid.copy(d.p); m.events.length = 0; const r0 = Math.random; Math.random = () => 0.5; try { m.door('h0', 0); } finally { Math.random = r0; }
    const tp = m.events.find(e => e.t === 'tp'); assert.ok(tp && !tp.crown && ar.dist(a.pos, d.p) > 5, 'thrown somewhere else'); assert.ok(zoneD(m.zone, a.pos.x, a.pos.z) < m.zone.r, 'inside the halo');
    m.door('h0', 0); assert.equal(m.events.filter(e => e.t === 'tp').length, 1, 'not from far away, and not again at once');
    m.time += 5; a.pos.copy(m.doors[1].p); a.valid.copy(a.pos); Math.random = () => 0.01; try { m.door('h0', 1); } finally { Math.random = r0; }
    const tp2 = m.events.filter(e => e.t === 'tp')[1]; assert.ok(tp2 && tp2.crown === 1 && Math.abs(a.pos.y - (m.crown.max.y + 0.05)) < 0.01, 'the crown');
    const down = ar.raycast(new V3(a.pos.x, a.pos.y + 0.3, a.pos.z), new V3(0, -1, 0), 0.46); assert.ok(down && down.dyn === m.crown, 'which has a floor');
  }
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

test('a room on the loop: only clients that have the map get in, the host can change it in the lobby, movement round the seam and along a hub line is believed', async () => {
  assert.equal(SettingsSchema.parse({}).map, 'city');
  const host = await client('Greg', ['city', 'loop']), old = await client('Old'), guest = await client('Raj', ['city', 'loop']);
  host.send({ t: 'create', settings: { map: 'loop', bots: 2 } }); const r1 = await host.wait(m => m.t === 'room'); assert.equal(r1.settings.map, 'loop');
  old.send({ t: 'join', code: r1.code }); assert.match((await old.wait(m => m.t === 'error')).msg, /LOOP CITY/);
  guest.send({ t: 'join', code: r1.code, map: 'city' }); assert.match((await guest.wait(m => m.t === 'error')).msg, /^MAPSWITCH:loop$/);
  guest.send({ t: 'join', code: r1.code, map: 'loop' }); const r2 = await guest.wait(m => m.t === 'room' && m.members.length === 2); assert.equal(r2.settings.map, 'loop');
  // the host can change the map in the lobby when every page in the room has it (the pages reload into it and come back)
  guest.send({ t: 'ready', v: true }); await host.wait(m => m.t === 'room' && m.members.find(x => x.id === guest.me.id).ready);
  host.send({ t: 'settings', patch: { map: 'city' } }); const r3 = await guest.wait(m => m.t === 'room' && m.settings.map === 'city'); assert.equal(r3.members.find(x => x.id === guest.me.id).ready, false, 'a new map clears ready');
  old.send({ t: 'join', code: r1.code }); await host.wait(m => m.t === 'room' && m.members.length === 3);
  host.send({ t: 'settings', patch: { map: 'loop' } }); assert.match((await host.wait(m => m.t === 'error')).msg, /Old must reload/);
  old.send({ t: 'leave' }); await host.wait(m => m.t === 'room' && m.members.length === 2);
  host.send({ t: 'settings', patch: { map: 'loop' } }); await guest.wait(m => m.t === 'room' && m.settings.map === 'loop');
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
  const cur = (await host.wait(m => m.t === 's')).s.a.find(a => a[0] === host.me.id); const o = [cur[1], cur[2] + 1.45, cur[3]]; // (below eye: the walk may end with the head under an awning's edge)
  // (a spawn can have an awning overhead: try a few headings off the vertical until one is open sky)
  let e = null, far = 0;
  for (const d of [[0.0995, 0.995, 0], [-0.0995, 0.995, 0], [0, 0.995, 0.0995], [0, 0.995, -0.0995]]) {
    host.send({ t: 'fire', o, d, w: 'rifle', ct: Date.now() });
    const shot = await guest.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'shot' && e.by === host.me.id)); e = shot.e.find(e => e.t === 'shot').e;
    far = mk().arena.dist(new V3(...o), new V3(...e)); if (far > 150) break; await sleep(1400);
  }
  assert.ok(far > 150 && e[1] < 25, 'the round crosses the wheel and lands on the far side: ' + JSON.stringify(e) + ' ' + far.toFixed(0));
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
