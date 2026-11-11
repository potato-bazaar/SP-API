// Another sniper in an online match (a person or a server bot): drawn from the server's snapshots,
// interpolated a little behind real time so movement stays smooth, animated by the same procedural rig.
import * as THREE from 'three';
import { getGhostMat } from './ai.js';

const V3 = THREE.Vector3; const TAU = Math.PI * 2;
const wrap = (a) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
const lerpA = (a, b, t) => a + wrap(b - a) * t;
const MODES = ['ground', 'link', 'ground', 'air', 'zip', 'ladder'];

export class Puppet {
  constructor(game, id, info, proto, gunSrc) {
    this.g = game; this.netId = id; this.name = info.name || 'SNIPER'; this.team = info.team || 0; this.bot = !!info.bot; this.isPlayer = false; this.puppet = true;
    this.pos = new V3(); this.vel = new V3(); this.lastShotPos = new V3(); this.eyeV = new V3(); this.chestV = new V3(); this.muzzleW = new V3();
    this.rig = proto.instantiate(); game.gfx.scene.add(this.rig.root); this.gun = gunSrc.clone(); this.gun.scale.setScalar(1.2); this.rig.weapon.add(this.gun);
    this.ghostMat = getGhostMat().clone(); this.ghost = new THREE.SkinnedMesh(this.rig.mesh.geometry, this.ghostMat); this.ghost.bind(this.rig.mesh.skeleton, this.rig.mesh.bindMatrix); this.ghost.frustumCulled = false; this.ghost.renderOrder = 30; this.ghost.visible = false; this.rig.mesh.parent.add(this.ghost);
    this.buf = []; this.hp = 100; this.alive = true; this.kills = 0; this.deaths = 0; this.place = 0; this.lastShot = -99; this.revealedUntil = -1; this.yaw = 0; this.aimYaw = 0; this.aimPitch = 0; this.crouchK = 0; this.speed = 0; this.mode = 'ground'; this.flags = 1; this.shots = 0; this.hits = 0; this.heads = 0;
  }
  get moving() { return this.speed > 0.6; }
  eye(out = this.eyeV) { return out.set(this.pos.x, this.pos.y + 1.58 - 0.58 * this.crouchK, this.pos.z); }
  chest(out = this.chestV) { return out.set(this.pos.x, this.pos.y + 1.3 - 0.52 * this.crouchK, this.pos.z); }
  hitShapes(out) { return this.rig.hitShapes(out); }
  muzzle(out = this.muzzleW) { this.rig.root.updateMatrixWorld(true); return out.copy(this.rig.muzzle).applyMatrix4(this.rig.root.matrixWorld); }
  // one row of a snapshot: [id, x,y,z, yaw, aimYaw, aimPitch, crouchK, speed, mode, flags, hp, link, linkU, linkDir]
  push(t, row) { this.buf.push({ t, row }); if (this.buf.length > 40) this.buf.shift(); }
  snap(row) { this.buf.length = 0; this.push(-1e9, row); this._apply(row, row, 0); }
  spawn(p, yaw) { this.buf.length = 0; this.pos.set(p[0], p[1], p[2]); this.yaw = this.aimYaw = yaw; this.alive = true; this.hp = 100; this.rig.deadT = 0; this.rig.modeK.dead = 0; this.rig.root.visible = true; }
  die() { this.alive = false; this.rig.deadDir = Math.random() < 0.5 ? 1 : -1; }
  _apply(A, B, k) {
    const L = (i) => A[i] + (B[i] - A[i]) * k;
    const px = this.pos.x, pz = this.pos.z; this.pos.set(L(1), L(2), L(3));
    this.yaw = lerpA(A[4], B[4], k); this.aimYaw = lerpA(A[5], B[5], k); this.aimPitch = L(6); this.crouchK = L(7); this.speed = L(8);
    this.flags = B[10]; this.hp = B[11]; this.mode = MODES[B[9]] || 'ground';
    if (B[9] === 1 && B[12] >= 0) { const l = this.g.arena.links[B[12]]; if (l) this.mode = this.bot ? this.g.arena.linkMode(l, B[13], B[14]) : (l.kind === 'zip' ? 'zip' : l.kind === 'ladder' ? 'ladder' : 'air'); }
    this.vel.set(this.pos.x - px, 0, this.pos.z - pz);
  }
  update(dt, renderT) {
    const b = this.buf; if (b.length) {
      let i = b.length - 1; while (i > 0 && b[i - 1].t > renderT) i--;
      if (i === 0 || b.length === 1) this._apply(b[0].row, b[0].row, 0);
      else { const A = b[i - 1], B = b[i]; const k = Math.min(1, Math.max(0, (renderT - A.t) / Math.max(1e-4, B.t - A.t))); if (renderT > B.t) this._apply(B.row, B.row, 0); else this._apply(A.row, B.row, k); }
    }
    this.revealedUntil = (this.flags & 2) ? this.g.time + 0.2 : -1;
    if (!this.alive) { this.rig.update(dt, { mode: 'dead' }); this.ghost.visible = false; this._sync(); return; }
    const twist = wrap(this.aimYaw - this.yaw); const a = Math.atan2(-this.vel.x, -this.vel.z) - this.yaw; const mv = this.speed > 0.3 ? new V3(Math.sin(a), 0, Math.cos(a)) : new V3(0, 0, 1);
    const aiming = (this.flags & 8) !== 0;
    this.rig.update(dt, { aim: aiming && this.mode === 'ground' && this.speed < 0.5, crouch: this.crouchK > 0.5 && this.mode === 'ground', pitch: this.aimPitch, twist, speed: this.speed, moveDir: mv, mode: this.mode });
    this._sync();
  }
  _sync() {
    const r = this.rig.root; r.position.copy(this.pos); r.rotation.y = this.yaw + Math.PI; r.updateMatrixWorld(true);
    const rev = this.revealedUntil > this.g.time && this.alive; this.ghost.visible = rev; if (rev) this.ghostMat.opacity = 0.42 + 0.14 * Math.sin(this.g.time * 18);
  }
  dispose() { this.g.gfx.scene.remove(this.rig.root); }
}
