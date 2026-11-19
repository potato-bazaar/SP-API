// Rifle parts: the shared table, and a match that gives each human the rifle their parts make.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadWorld } from '../src/world.js';
import { Match } from '../src/engine.js';
import { DEFAULTS } from '../src/rules.js';
import { WEAPONS } from '../../client/src/combat.js';
import { PARTS, partsClean, rifleWith } from '../../client/src/parts.js';

test('parts: the table is sane and bad input falls back to standard', () => {
  assert.deepEqual(partsClean(undefined), [0, 0, 0, 0]); assert.deepEqual(partsClean([9, -1, 2, 'x']), [0, 0, 2, 0]); assert.deepEqual(partsClean([1, 1, 1, 1, 1, 1]), [1, 1, 1, 1]);
  const std = rifleWith(WEAPONS.rifle, [0, 0, 0, 0]); for (const k of ['mag', 'reserve', 'cycle', 'reload']) assert.equal(std[k], WEAPONS.rifle[k]); assert.deepEqual(std.dmg, WEAPONS.rifle.dmg);
  for (const s of PARTS) { assert.equal(s.opts.length, 3); for (const o of s.opts.slice(1)) assert.ok(o.note && (o.dmg || o.mag || o.reserve !== undefined || o.cycle || o.reload || o.ads), s.slot + ' option changes something'); }
  // no combination makes a body shot kill, or the bolt or the reload absurd
  for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 3; c++) for (let d = 0; d < 3; d++) {
    const r = rifleWith(WEAPONS.rifle, [a, b, c, d]); assert.ok(r.dmg[1] < 100 && r.dmg[0] >= 100); assert.ok(r.cycle >= 0.95 && r.cycle <= 1.6, 'bolt ' + r.cycle); assert.ok(r.reload >= 1.3 && r.reload <= 4, 'reload ' + r.reload); assert.ok(r.mag >= 3 && r.reserve >= 10);
  }
  assert.equal(WEAPONS.rifle.mag, 5, 'the shared rifle is never changed');
});

test('parts: a human gets their own rifle in a match, the bot keeps the standard one', () => {
  const m = new Match(loadWorld('loop'), { ...DEFAULTS, map: 'loop' }, [{ id: 'h', name: 'H', team: 0, parts: [1, 1, 0, 2] }, { id: 'p', name: 'P', team: 0 }, { id: 'b0', name: 'bot', team: 0, bot: true }], null);
  const h = m.byId.get('h'), p = m.byId.get('p'), b = m.bots[0];
  assert.equal(h.rifle.mag, 8); assert.equal(h.ammo.rifle.mag, 8); assert.equal(h.ammo.rifle.reserve, 10); assert.equal(m.extras.rifleOf(h).dmg[2], 50); assert.equal(m.extras.rifleOf(h).cycle, 1.55);
  assert.equal(m.extras.rifleOf(p), WEAPONS.rifle); assert.equal(p.ammo.rifle.mag, 5); assert.equal(m.extras.rifleOf(b), WEAPONS.rifle);
  h.ammo.rifle.mag = 2; m.reload('h', 'rifle'); assert.ok(Math.abs(h.reloadUntil - (m.time + 3.0 - 0.15)) < 1e-6, 'the reload takes this rifle\'s time: ' + (h.reloadUntil - m.time));
  h.reset(); assert.equal(h.ammo.rifle.mag, 8, 'a respawn refills this rifle, not the standard one');
});
