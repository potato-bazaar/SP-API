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
