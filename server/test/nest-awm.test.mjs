import { test } from "node:test";
import assert from "node:assert/strict";
import { loadWorld } from "../src/world.js";
import { Match, TICK } from "../src/engine.js";
import { DEFAULTS } from "../src/rules.js";
import { P } from "../src/powerups.js";

const world = loadWorld();
function match() {
  return new Match(world, { ...DEFAULTS, bots: 0, timeLimit: 120, halo: false, respawn: true }, [{ id: "A", name: "A", team: 0 }], null);
}
const run = (m, until) => { while (m.time < until) { m.step(TICK); m.drain(); } };

test("shop AWM: 450 points buys three pierce rounds", () => {
  const m = match(); const A = m.humans[0];
  run(m, 6.1);
  A.pts = 450; A.wpn = "rifle";
  m.powerup("A", "awm");
  assert.ok(A.awm); assert.deepEqual([A.ammo.rifle.mag, A.ammo.rifle.reserve], [3, 0]);
  assert.equal(A.pts, 0);
  const ev = m.drain().filter((e) => e.t === "awm" && e.on === 1);
  assert.equal(ev.length, 1); assert.deepEqual(ev[0].ammo.rifle, [3, 0]);
});

test("shop AWM: refused without points or while holding one", () => {
  const m = match(); const A = m.humans[0];
  run(m, 6.1);
  A.pts = 100; A.wpn = "rifle"; m.powerup("A", "awm");
  assert.ok(!A.awm);
  assert.equal(m.drain().find((e) => e.t === "puno").why, "pts");
  A.pts = 900; m.powerup("A", "awm"); assert.ok(A.awm);
  m.drain(); m.powerup("A", "awm");
  assert.equal(m.drain().find((e) => e.t === "puno").why, "busy");
});

test("silencer: bots stop hearing the shooter", () => {
  const m = new Match(world, { ...DEFAULTS, bots: 1, timeLimit: 60, halo: false }, [{ id: "A", name: "A", team: 0 }, { id: "bot1", name: "", team: 0, bot: true }], null);
  const A = m.humans[0]; const bot = m.bots[0];
  bot.update = () => {};
  run(m, 6.1);
  let heard = 0; const hear0 = bot.hear.bind(bot); bot.hear = (...a) => { heard++; return hear0(...a); };
  const o = A.eye().toArray(), d = [0, 0, -1];
  m.fire("A", { o, d, w: "rifle", ct: m.time }, 0); m.drain();
  assert.ok(heard >= 1, "heard before silencer");
  heard = 0; m.silencer("A"); assert.equal(A.silenced, true);
  A.ammo.rifle.ready = 0; m.fire("A", { o, d, w: "rifle", ct: m.time }, 0); m.drain();
  assert.equal(heard, 0, "silent after silencer");
});

test("nest hurt and nest kill", () => {
  const m = match(); const A = m.humans[0];
  run(m, 6.1);
  A.pts = 0;
  m.nestHurt("A", "alien", 65);
  assert.equal(Math.ceil(A.hp), 35);
  m.nestKill("A");
  assert.equal(A.pts, 150);
  const pts = m.drain().filter((e) => e.t === "pts");
  assert.ok(pts.some((e) => e.add === 150));
  m.nestKill("A"); // rate limited
  assert.equal(A.pts, 150);
});
