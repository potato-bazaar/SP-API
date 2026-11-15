// End-to-end over real sockets: create a room, join by code, configure, start, move, shoot, finish, back to lobby, reconnect.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const PORT = 18000 + Math.floor(Math.random() * 1000); let proc;
before(async () => { proc = spawn(process.execPath, ['src/server.js'], { env: { ...process.env, PORT: String(PORT) }, stdio: ['ignore', 'pipe', 'inherit'] }); await new Promise((res) => proc.stdout.on('data', d => { if (/server on/.test(String(d))) res(); })); });
after(() => proc.kill());

function client(name, token) {
  const ws = new WebSocket(`ws://localhost:${PORT}/ws`); const inbox = []; const waiters = [];
  ws.on('message', d => { const m = JSON.parse(d); const w = waiters.find(w => w.f(m)); if (w) { waiters.splice(waiters.indexOf(w), 1); w.res(m); } else { inbox.push(m); if (inbox.length > 400) inbox.splice(0, 100); } });
  const c = { ws, inbox, send: (m) => ws.send(JSON.stringify(m)), wait: (f, ms = 8000) => new Promise((res, rej) => { const hit = inbox.find(f); if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); } const w = { f, res }; waiters.push(w); setTimeout(() => rej(new Error('timeout waiting in ' + name + ' for ' + f.toString().slice(0, 120) + ' | last: ' + inbox.slice(-3).map(m => m.t + (m.t === 's' ? ' t=' + m.s.t + ' ' + JSON.stringify(m.e || []).slice(0, 80) : m.t === 'room' ? ' ' + m.state : '')).join(' ; '))), ms); }), close: () => ws.close() };
  return new Promise(res => ws.on('open', async () => { c.send({ t: 'hello', name, token, v: 1 }); c.me = await c.wait(m => m.t === 'welcome'); res(c); }));
}

test('room lifecycle: create, join by code, teams, settings, start, play, results, lobby, reconnect', async () => {
  const host = await client('Greg'); const guest = await client('Raj');
  host.send({ t: 'create', settings: { mode: '2v2', bots: 2 } });
  const r1 = await host.wait(m => m.t === 'room'); assert.match(r1.code, /^[A-Z2-9]{5}$/); assert.equal(r1.settings.mode, '2v2');
  guest.send({ t: 'join', code: r1.code.toLowerCase() });
  const r2 = await guest.wait(m => m.t === 'room' && m.members.length === 2); assert.equal(r2.host, host.me.id);
  const teams = r2.members.map(m => m.team).sort(); assert.deepEqual(teams, [0, 1], 'auto-balanced teams');
  // non-host cannot change settings; host can; locked rules are validated
  guest.send({ t: 'settings', patch: { bots: 0 } }); assert.match((await guest.wait(m => m.t === 'error')).msg, /host/);
  host.send({ t: 'settings', patch: { timeLimit: 30 } }); assert.match((await host.wait(m => m.t === 'error')).msg, /not allowed/);
  host.send({ t: 'settings', patch: { respawn: true, respawnDelay: 3, timeLimit: 120, headshotsOnly: false } });
  const r3 = await guest.wait(m => m.t === 'room' && m.settings.respawn === true); assert.equal(r3.bots.length, 2); assert.deepEqual(r3.bots.map(b => b.team).sort(), [0, 1]);
  // start needs the guest ready
  host.send({ t: 'start' }); assert.match((await host.wait(m => m.t === 'error')).msg, /ready/);
  guest.send({ t: 'ready', v: true }); await host.wait(m => m.t === 'room' && m.members.find(x => x.id === guest.me.id).ready);
  host.send({ t: 'start' });
  const s1 = await host.wait(m => m.t === 'start'); const s2 = await guest.wait(m => m.t === 'start');
  assert.equal(Object.keys(s1.roster).length, 4); assert.equal(s2.snap.a.length, 4);
  // settings are locked in a match
  host.send({ t: 'settings', patch: { bots: 0 } }); assert.match((await host.wait(m => m.t === 'error')).msg, /locked/);
  // snapshots flow; movement is accepted when plausible and corrected when not
  const mine = s1.events.find(e => e.t === 'spawn' && e.id === host.me.id); assert.ok(mine, 'host spawn event');
  let seq = 0; const p = mine.p.slice();
  for (let i = 0; i < 20; i++) { p[0] += 0.12; host.send({ t: 'in', seq: seq++, p, yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 }); await new Promise(r => setTimeout(r, 33)); }
  // judge a snapshot taken after the last move: the buffered ones from while we were still sending trail it by a few
  // steps (2 of 0.12 m against a 0.3 m limit), so on a busy machine the check failed on timing alone
  await new Promise(r => setTimeout(r, 100)); for (let i = host.inbox.length - 1; i >= 0; i--) if (host.inbox[i].t === 's') host.inbox.splice(i, 1);
  const snap = await host.wait(m => m.t === 's' && m.s.t > 0.8); const me = snap.s.a.find(a => a[0] === host.me.id); assert.ok(Math.abs(me[1] - p[0]) < 0.3, 'server follows plausible movement');
  for (let i = 0; i < 4; i++) host.send({ t: 'in', seq: seq++, p: [p[0] + 60, p[1], p[2]], yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 });
  const corr = await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'correct' && e.id === host.me.id)); assert.ok(corr, 'teleport is corrected');
  // shooting before weapons-free is ignored; after, it produces a shot event everyone sees
  await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'free'), 9000);
  host.send({ t: 'fire', o: [p[0], p[1] + 1.6, p[2]], d: [0, 0.2, -1], w: 'rifle', ct: Date.now() });
  const shot = await guest.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'shot' && e.by === host.me.id)); assert.ok(shot);
  const ammo = await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'ammo' && e.id === host.me.id)); assert.equal(ammo.e.find(e => e.t === 'ammo').ammo.rifle[0], 4);
  host.send({ t: 'fire', o: [p[0], p[1] + 1.6, p[2]], d: [0, 0.2, -1], w: 'rifle', ct: Date.now() });   // bolt still cycling
  assert.ok(await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'deny' && e.why === 'cycle')));
  // falling into the street kills; in respawn mode the server brings you back
  host.send({ t: 'in', seq: seq++, p: [p[0], 2, p[2]], yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 });
  host.send({ t: 'in', seq: seq++, p: [p[0], 1, p[2]], yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 });
  // (the fall is larger than the vertical allowance, so the server corrects it; report the drop as the client would)
  host.send({ t: 'fall', v: 40 });
  const kill = await guest.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'kill' && e.id === host.me.id)); assert.equal(kill.e.find(e => e.t === 'kill').respawnIn, 3);
  assert.ok(await host.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'spawn' && e.id === host.me.id), 6000), 'respawned');
  // reconnect mid-match with the same token: same slot, match state resent
  const tok = host.me.token; host.close(); await new Promise(r => setTimeout(r, 300));
  const host2 = await client('Greg', tok); assert.equal(host2.me.id, host.me.id);
  const again = await host2.wait(m => m.t === 'start' && m.rejoin); assert.equal(again.snap.a.length, 4);
  // the match ends on the clock; results go to everyone; the host brings the room back to the lobby
  const end = await guest.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'end'), 130000);
  const ev = end.e.find(e => e.t === 'end'); assert.ok(ev.standings.rows.length === 4 && ev.standings.teams.length === 2);
  await guest.wait(m => m.t === 'room' && m.state === 'results');
  host2.send({ t: 'lobby' }); const back = await guest.wait(m => m.t === 'room' && m.state === 'lobby'); assert.equal(back.members.every(m => !m.ready), true);
  // kick + host-only
  guest.send({ t: 'kick', id: host.me.id }); assert.match((await guest.wait(m => m.t === 'error')).msg, /host/);
  host2.send({ t: 'kick', id: guest.me.id }); assert.equal((await guest.wait(m => m.t === 'left')).why, 'kicked');
  // bad codes and full rooms
  guest.send({ t: 'join', code: 'ZZZZZ' }); assert.match((await guest.wait(m => m.t === 'error')).msg, /No room/);
  host2.close(); guest.close();
});

test('free-for-all elimination ends with a winner and places', async () => {
  const a = await client('A'); a.send({ t: 'create', settings: { mode: 'ffa', bots: 3, timeLimit: 120 } }); await a.wait(m => m.t === 'room');
  a.send({ t: 'start' }); const st = await a.wait(m => m.t === 'start'); assert.equal(Object.keys(st.roster).length, 4);
  const sp = st.events.find(e => e.t === 'spawn' && e.id === a.me.id);
  a.send({ t: 'in', seq: 1, p: [sp.p[0], 3, sp.p[2]], yaw: 0, pitch: 0, c: 0, mode: 'walk', w: 'rifle', ads: 0 });   // corrected (too far down)...
  a.send({ t: 'fall', v: 40 });                                                                                       // ...so take a hard fall instead
  const k = await a.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'kill' && e.id === a.me.id)); assert.equal(k.e.find(e => e.t === 'kill').place, 4);
  const end = await a.wait(m => m.t === 's' && m.e && m.e.some(e => e.t === 'end'), 130000); const w = end.e.find(e => e.t === 'end').winner; assert.ok(w.id && w.id.startsWith('bot'));
  a.close();
});
