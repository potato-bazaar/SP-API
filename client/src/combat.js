// Ray tests against actors and the shared shot routine (player and bots fire through the same code).
import * as THREE from 'three';

export const WEAPONS = {
  rifle: { key: 'rifle', name: 'BALLISTA .338', mag: 5, reserve: 20, cycle: 1.3, reload: 2.6, dmg: [160, 74, 44], hip: 0.05, zooms: [4, 8], swap: 0.38 },
  pistol: { key: 'pistol', name: 'SIDEARM 9MM', mag: 12, reserve: 36, cycle: 0.16, reload: 1.45, dmg: [60, 27, 17], hip: 0.011, zooms: [1.35], swap: 0.28, falloff: [22, 75] },
};
export const ZONE_NAMES = ['HEAD', 'BODY', 'LIMB'];

// ray vs capsule (a==b -> sphere). returns distance or -1
export function rayCapsule(ox, oy, oz, dx, dy, dz, ax, ay, az, bx, by, bz, r) {
  const bax = bx - ax, bay = by - ay, baz = bz - az, oax = ox - ax, oay = oy - ay, oaz = oz - az; const baba = bax * bax + bay * bay + baz * baz;
  if (baba < 1e-8) { const b = dx * oax + dy * oay + dz * oaz, c = oax * oax + oay * oay + oaz * oaz - r * r; const h = b * b - c; return h < 0 ? -1 : -b - Math.sqrt(h); }
  const bard = bax * dx + bay * dy + baz * dz, baoa = bax * oax + bay * oay + baz * oaz, rdoa = dx * oax + dy * oay + dz * oaz, oaoa = oax * oax + oay * oay + oaz * oaz;
  let a = baba - bard * bard, b = baba * rdoa - baoa * bard, c = baba * oaoa - baoa * baoa - r * r * baba, h = b * b - a * c;
  if (h >= 0 && a > 1e-9) { const t = (-b - Math.sqrt(h)) / a; const y = baoa + t * bard; if (y > 0 && y < baba) return t; const ocx = y <= 0 ? oax : ox - bx, ocy = y <= 0 ? oay : oy - by, ocz = y <= 0 ? oaz : oz - bz; b = dx * ocx + dy * ocy + dz * ocz; c = ocx * ocx + ocy * ocy + ocz * ocz - r * r; h = b * b - c; if (h > 0) return -b - Math.sqrt(h); }
  return -1;
}
const _shapes = [];
// nearest actor hit along a ray (excluding `skip`). returns {actor, t, zone} or null
export function rayActors(actors, o, d, maxT, skip) {
  let best = null;
  for (const a of actors) {
    if (a === skip || !a.alive) continue; const dx = a.pos.x - o.x, dy = a.pos.y + 1 - o.y, dz = a.pos.z - o.z; const along = dx * d.x + dy * d.y + dz * d.z; if (along < -2 || along > maxT + 2) continue; const perp2 = dx * dx + dy * dy + dz * dz - along * along; if (perp2 > 9) continue;
    a.hitShapes(_shapes); for (let i = 0; i < _shapes.length; i += 8) { const t = rayCapsule(o.x, o.y, o.z, d.x, d.y, d.z, _shapes[i], _shapes[i + 1], _shapes[i + 2], _shapes[i + 3], _shapes[i + 4], _shapes[i + 5], _shapes[i + 6]); if (t > 0 && t < maxT && (!best || t < best.t || (Math.abs(t - best.t) < 0.25 && _shapes[i + 7] < best.zone))) best = { actor: a, t: Math.min(t, best ? best.t : t), zone: _shapes[i + 7] }; }
  }
  return best;
}
const _p = new THREE.Vector3(), _n = new THREE.Vector3(), _q = new THREE.Vector3(), _d2 = new THREE.Vector3();
// fire one round. origin/dir: the true ray. muzzle: where the thread visibly starts.
export function fireShot(game, shooter, origin, dir, muzzle, wpn) {
  const { arena, fx, audio } = game; const wh = arena.raycast(origin, dir, 420); const tW = wh ? wh.distance : 420;
  const ah = rayActors(game.actors, origin, dir, tW, shooter); const t = ah ? ah.t : tW; _p.copy(origin).addScaledVector(dir, t);
  fx.threads.shot(muzzle, _p); shooter.shots++; shooter.lastShot = game.time; shooter.lastShotPos.copy(origin);
  const me = game.headless ? null : game.player; const dShooter = shooter === me ? 0 : origin.distanceTo(game.listenerPos); const pan = shooter === me ? 0 : game.panOf(origin);
  audio.shot(dShooter, pan, wpn.key === 'pistol');
  if (shooter !== me) { fx.particles.flash(muzzle, 1.6);
    // near miss: closest approach of the segment to the listener's head
    if (me && me.alive) { _q.copy(game.listenerPos).sub(origin); const al = Math.max(0, Math.min(t, _q.dot(dir))); _d2.copy(origin).addScaledVector(dir, al); const miss = _d2.distanceTo(game.listenerPos); if (miss < 2.4 && al > 4 && (!ah || ah.actor !== me)) { audio.whiz(game.panOf(_d2)); game.hud.threat(origin, 0.6); me.suppress = Math.min(1, (me.suppress || 0) + 0.5); } } }
  // rounds passing close to a bot's head make it flinch too
  for (const b of game.bots) { if (!b.alive || b === shooter || (ah && ah.actor === b)) continue; const e = b.eye(_q); _d2.copy(e).sub(origin); const al = _d2.dot(dir); if (al < 3 || al > t + 1) continue; if (_d2.lengthSq() - al * al < 2.2) b.nearMiss(shooter); }
  let res = { hit: null, zone: -1, point: _p.clone(), dist: t };
  if (ah) {
    const v = ah.actor; let dmg = wpn.dmg[ah.zone]; if (wpn.falloff) { const f = Math.min(1, Math.max(0, (t - wpn.falloff[0]) / (wpn.falloff[1] - wpn.falloff[0]))); dmg *= 1 - 0.55 * f; }
    fx.particles.blood(_p, dir, ah.zone === 0 ? 1.7 : 1);
    // stain whatever is behind the target
    const bh = arena.raycast(_p, dir, 4.5); if (bh) { _n.copy(bh.face.normal); if (_n.dot(dir) > 0) _n.negate(); fx.decals.add(bh.point, _n, 0.35 + Math.random() * 0.5 + (ah.zone === 0 ? 0.35 : 0), 0, 0.25); }
    const gh = arena.raycast(_q.copy(_p), _d2.set(0, -1, 0), 3); if (gh) fx.decals.add(gh.point, _n.set(0, 1, 0), 0.22 + Math.random() * 0.3, 0, 0.6);
    shooter.hits++; if (ah.zone === 0) shooter.heads++;
    res.hit = v; res.zone = ah.zone; game.damage(v, dmg, shooter, { zone: ah.zone, dir, point: _p, wpn });
  } else if (wh) {
    _n.copy(wh.face.normal); if (_n.dot(dir) > 0) _n.negate(); fx.particles.impact(_p, _n); fx.decals.add(_p, _n, 0.07 + Math.random() * 0.05, 1, 0.01, 0.85);
    if (shooter !== me || t < 60) audio.impact(_p.distanceTo(game.listenerPos), game.panOf(_p));
  }
  game.onShot(shooter, origin, res);
  return res;
}
