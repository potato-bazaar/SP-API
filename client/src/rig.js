// Procedural animation for the Mixamo-rigged character: no clips, everything is solved every frame
// (spine aim, two-bone IK for arms and legs, a rifle that the hands follow). Model space: +Y up, +Z forward, +X left.
import * as THREE from 'three';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z), Q = () => new THREE.Quaternion();
const _v1 = V(), _v2 = V(), _v3 = V(), _v4 = V(), _q1 = Q(), _q2 = Q(), _m1 = new THREE.Matrix4(), _m2 = new THREE.Matrix4();
const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1);
const NAMES = ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head', 'LeftShoulder', 'LeftArm', 'LeftForeArm', 'LeftHand', 'RightShoulder', 'RightArm', 'RightForeArm', 'RightHand',
  'LeftUpLeg', 'LeftLeg', 'LeftFoot', 'LeftToeBase', 'RightUpLeg', 'RightLeg', 'RightFoot', 'RightToeBase'];
const short = (n) => { const m = /mixamorig:?([A-Za-z0-9]+?)(_\d+)?$/.exec(n); return m ? m[1] : null; };
const clamp = (x, a, b) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t, smooth = (t) => t * t * (3 - 2 * t);

export class RigProto {
  constructor(scene) {
    this.scene = scene; scene.updateMatrixWorld(true);
    let mesh = null; scene.traverse(o => { if (o.isSkinnedMesh) mesh = o; }); this.mesh = mesh; const sk = mesh.skeleton; this.nb = sk.bones.length;
    this.idx = {}; this.shortNames = sk.bones.map(b => short(b.name)); this.shortNames.forEach((n, i) => { if (n) this.idx[n] = i; });
    // bind-space -> model-space matrix, from the unposed top joint
    const top = sk.bones.findIndex(b => !b.parent || !b.parent.isBone); this.top = top;
    const M = new THREE.Matrix4().multiplyMatrices(sk.bones[top].matrixWorld, sk.boneInverses[top]);
    this.restP = []; this.restQ = []; this.parent = []; const s = V();
    for (let j = 0; j < this.nb; j++) { const R = new THREE.Matrix4().copy(sk.boneInverses[j]).invert().premultiply(M); const p = V(), q = Q(); R.decompose(p, q, s); this.restP.push(p); this.restQ.push(q); this.parent.push(sk.bones[j].parent && sk.bones[j].parent.isBone ? sk.bones.indexOf(sk.bones[j].parent) : -1); }
    this.scale = s.x;
    this.restLocalQ = this.restQ.map((q, j) => this.parent[j] < 0 ? sk.bones[j].quaternion.clone() : this.restQ[this.parent[j]].clone().invert().multiply(q));
    this.offset = this.restP.map((p, j) => this.parent[j] < 0 ? V() : p.clone().sub(this.restP[this.parent[j]]).applyQuaternion(this.restQ[this.parent[j]].clone().invert()));
    const I = this.idx; this.J = NAMES.map(n => I[n]);
    // hand frames (fingers direction, thumb side) and finger curl axes, measured from the skeleton itself
    this.hand = {}; this.fingers = { Left: [], Right: [] };
    for (const side of ['Left', 'Right']) {
      const h = I[side + 'Hand']; const fwd = this.restP[I[side + 'HandMiddle1']].clone().sub(this.restP[h]).normalize(); const th = this.restP[I[side + 'HandThumb1']].clone().sub(this.restP[h]); th.addScaledVector(fwd, -th.dot(fwd)).normalize();
      const n = fwd.clone().cross(th); const palm = side === 'Left' ? n.clone() : n.clone().negate(); // direction the palm faces
      this.hand[side] = { basisInv: new THREE.Matrix4().makeBasis(fwd, th, n).transpose(), fwd, th, palm };
      for (const f of ['Index', 'Middle', 'Ring', 'Pinky', 'Thumb']) for (const k of [1, 2, 3]) { const j = I[`${side}Hand${f}${k}`]; if (j == null) continue; const c = I[`${side}Hand${f}${k + 1}`]; const dir = c != null ? this.restP[c].clone().sub(this.restP[j]).normalize() : fwd.clone();
        const axisM = f === 'Thumb' ? dir.clone().cross(fwd).normalize().multiplyScalar(side === 'Left' ? -1 : 1) : dir.clone().cross(palm).normalize(); const axisL = axisM.applyQuaternion(this.restQ[j].clone().invert()); this.fingers[side].push({ j, axis: axisL, thumb: f === 'Thumb', k }); }
    }
    const P = (n) => this.restP[I[n]];
    this.len = { upArm: P('LeftForeArm').distanceTo(P('LeftArm')), foreArm: P('LeftHand').distanceTo(P('LeftForeArm')), upLeg: P('LeftLeg').distanceTo(P('LeftUpLeg')), loLeg: P('LeftFoot').distanceTo(P('LeftLeg')) };
    this.hipH = P('Hips').y; this.footH = P('LeftFoot').y; this.hipW = P('LeftUpLeg').x; this.headTop = P('Head').y + 0.2;
    this.topParentInv = sk.bones[top].parent ? new THREE.Matrix4().copy(sk.bones[top].parent.matrixWorld).invert() : new THREE.Matrix4();
    this.topParentQ = Q(); if (sk.bones[top].parent) sk.bones[top].parent.matrixWorld.decompose(V(), this.topParentQ, V());
  }
  instantiate() { return new Rig(this); }
}

// pose parameters (all smoothed by the caller or here)
export class Rig {
  constructor(proto) {
    this.p = proto; this.root = SkeletonUtils.clone(proto.scene); let mesh = null; this.root.traverse(o => { if (o.isSkinnedMesh) mesh = o; }); this.mesh = mesh; this.bones = mesh.skeleton.bones; mesh.frustumCulled = false;
    const n = proto.nb; this.wQ = []; this.wP = []; this.ctrl = new Uint8Array(n); for (let j = 0; j < n; j++) { this.wQ.push(proto.restQ[j].clone()); this.wP.push(proto.restP[j].clone()); this.bones[j].quaternion.copy(proto.restLocalQ[j]); }
    this.weapon = new THREE.Group(); this.root.add(this.weapon); // rifle carrier, model space
    this.phase = Math.random() * 6; this.aimK = 0; this.crouchK = 0; this.pitch = 0; this.twist = 0; this.recoil = 0; this.bob = 0; this.moveK = 0; this.modeK = { air: 0, zip: 0, ladder: 0, dead: 0 }; this.deadT = 0; this.deadDir = 1; this.lean = 0; this.flinch = 0; this.boltK = 0;
    this.muzzle = V(); this.muzzleDir = V(0, 0, 1); this.eye = V(); this.fwd = V(0, 0, 1); this.caps = [];
    this.gripR = V(); this.gripL = V();
  }
  // FK helper: place child joint j from its parent's world transform
  _fk(j) { const p = this.p.parent[j]; this.wP[j].copy(this.p.offset[j]).applyQuaternion(this.wQ[p]).add(this.wP[p]); }
  _setQ(j, delta) { this.wQ[j].copy(delta).multiply(this.p.restQ[j]); this.ctrl[j] = 1; }
  // two-bone IK. a,b,c joint indices; target T; pole hint (direction the middle joint should go). Returns delta rotation of the lower bone.
  _ik(a, b, c, T, pole, L1, L2, parentDelta, outLower) {
    const S = this.wP[a]; const dir = _v1.copy(T).sub(S); let d = dir.length(); const maxD = (L1 + L2) * 0.999; if (d > maxD) { d = maxD; } if (d < 0.05) d = 0.05; dir.normalize();
    const cosA = clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1); const sinA = Math.sqrt(1 - cosA * cosA);
    const perp = _v2.copy(pole).addScaledVector(dir, -pole.dot(dir)); if (perp.lengthSq() < 1e-6) perp.set(0, 0, 1).addScaledVector(dir, -dir.z); perp.normalize();
    const E = _v3.copy(S).addScaledVector(dir, L1 * cosA).addScaledVector(perp, L1 * sinA);
    const Tc = _v4.copy(S).addScaledVector(dir, d);
    // upper: swing the rest direction (carried by the parent's delta) onto S->E
    const p = this.p; const restDirU = V().copy(p.restP[b]).sub(p.restP[a]).normalize().applyQuaternion(parentDelta);
    const toE = V().copy(E).sub(S).normalize(); const sw1 = Q().setFromUnitVectors(restDirU, toE); const dU = sw1.multiply(parentDelta); this._setQ(a, dU);
    this.wP[b].copy(E);
    const restDirL = V().copy(p.restP[c]).sub(p.restP[b]).normalize().applyQuaternion(dU); const toT = V().copy(Tc).sub(E).normalize(); const sw2 = Q().setFromUnitVectors(restDirL, toT); const dL = sw2.multiply(dU); this._setQ(b, dL);
    this.wP[c].copy(Tc); if (outLower) outLower.copy(dL); return dL;
  }
  update(dt, s) {
    const p = this.p, I = p.idx, k = 1 - Math.exp(-dt * 12);
    // ---- smoothed state
    this.aimK = lerp(this.aimK, s.aim ? 1 : 0, 1 - Math.exp(-dt * 9)); this.crouchK = lerp(this.crouchK, s.crouch ? 1 : 0, 1 - Math.exp(-dt * 10));
    this.pitch = lerp(this.pitch, s.pitch || 0, k); this.twist = lerp(this.twist, clamp(s.twist || 0, -1.0, 1.0), k);
    const speed = s.speed || 0; this.moveK = lerp(this.moveK, clamp(speed / 5, 0, 1.3), 1 - Math.exp(-dt * 8)); this.recoil = Math.max(0, this.recoil - dt * 4.5); this.flinch = Math.max(0, this.flinch - dt * 3.2); this.boltK = Math.max(0, this.boltK - dt * 1.4);
    for (const m in this.modeK) this.modeK[m] = lerp(this.modeK[m], s.mode === m ? 1 : 0, 1 - Math.exp(-dt * (m === 'dead' ? 30 : 9)));
    const mv = s.moveDir || Z; // local move direction (x: left+, z: forward+)
    this.phase += dt * (2.2 + speed * 1.55) * (speed > 0.2 ? 1 : 0); if (s.mode === 'ladder') this.phase += dt * 7; const ph = this.phase;
    const air = this.modeK.air, zip = this.modeK.zip, lad = this.modeK.ladder; let dead = 0;
    if (s.mode === 'dead') { this.deadT += dt; dead = clamp(this.deadT / 0.62, 0, 1); dead = dead * dead; } else this.deadT = 0;
    const aim = this.aimK * (1 - zip) * (1 - lad) * (1 - dead), cr = this.crouchK * (1 - zip) * (1 - lad) * (1 - air * 0.6);
    // ---- pelvis
    const hips = I.Hips; const run = this.moveK * (1 - air) * (1 - zip) * (1 - lad);
    const bobY = Math.abs(Math.sin(ph)) * 0.045 * run; const drop = cr * 0.40 + aim * 0.03 + run * 0.035;
    const lean = run * 0.16 * (1 - aim * 0.6) * mv.z; const side = run * 0.07 * mv.x;
    const dH = _q1.setFromAxisAngle(X, lean + cr * 0.12 + air * 0.25 - this.flinch * 0.12).premultiply(_q2.setFromAxisAngle(Z, -side + Math.sin(ph) * 0.03 * run)).premultiply(_q2.setFromAxisAngle(Y, Math.sin(ph) * 0.07 * run * (1 - aim) - this.twist * 0.18 - 0.16 * aim));
    const dHips = Q().copy(dH);
    this.wP[hips].set(Math.sin(ph) * 0.02 * run, p.hipH - drop + bobY - zip * 0.0, cr * -0.05); this._setQ(hips, dHips);
    // death: the whole body pitches over and settles on the roof
    let dRoot = null;
    if (dead > 0) { const a = dead * 1.52 * this.deadDir; dRoot = Q().setFromAxisAngle(X, -a); this.wP[hips].set(0, lerp(p.hipH - drop, 0.16, dead), -Math.sin(a) * 0.55 * this.deadDir * 0 + (-this.deadDir) * dead * 0.75); dHips.premultiply(dRoot); this._setQ(hips, dHips); }
    // ---- spine: distribute pitch + twist
    const pit = this.pitch * (0.35 + 0.65 * aim) * (1 - dead), tw = this.twist * 0.82 * (1 - dead); const chain = [I.Spine, I.Spine1, I.Spine2]; const dS = Q().copy(dHips); const step = Q();
    const hunch = aim * 0.10 + cr * 0.10 + run * 0.05 * (1 - aim) + this.flinch * 0.2 - dead * 0.25;
    const blade = -0.46 * aim;
    for (let i = 0; i < 3; i++) { step.setFromAxisAngle(Y, (tw + blade) / 3).multiply(_q2.setFromAxisAngle(X, (-pit + hunch) / 3)); dS.multiply(step); const j = chain[i]; this._fk(j); this._setQ(j, dS); }
    const dChest = Q().copy(dS);
    // aim frame (model space): forward/up/right of the upper body after pitch & twist
    const aq = Q().copy(dHips).multiply(_q2.setFromAxisAngle(Y, tw * 1.22 + 0.16 * aim)).multiply(_q2.setFromAxisAngle(X, -pit / (0.35 + 0.65 * Math.max(aim, 0.001)) * Math.max(aim, 0.35)));
    const f = V(0, 0, 1).applyQuaternion(aq), u = V(0, 1, 0).applyQuaternion(aq), r = V(-1, 0, 0).applyQuaternion(aq); this.fwd.copy(f);
    // ---- neck / head
    this._fk(I.Neck); const dN = Q().copy(dChest).slerp(aq, 0.5); this._setQ(I.Neck, dN); this._fk(I.Head);
    const headTilt = Q().copy(aq).multiply(_q2.setFromAxisAngle(Z, -0.20 * aim)).multiply(_q1.setFromAxisAngle(X, 0.22 * aim + dead * 0.5)); this._setQ(I.Head, headTilt);
    this.eye.copy(this.wP[I.Head]).addScaledVector(u, 0.09).addScaledVector(f, 0.09);
    // ---- clavicles
    for (const sd of ['Left', 'Right']) { const c = I[sd + 'Shoulder']; this._fk(c); this._setQ(c, dChest); this._fk(I[sd + 'Arm']); }
    const hang = Math.max(zip, lad);
    // ---- rifle frame: blend low-ready <-> shouldered
    const shR = this.wP[I.RightArm], chestC = _v1.copy(this.wP[I.LeftArm]).add(shR).multiplyScalar(0.5);
    const kick = this.recoil * this.recoil;
    const aimPos = V().copy(shR).addScaledVector(f, 0.215 - kick * 0.07).addScaledVector(u, 0.012 + kick * 0.02).addScaledVector(r, -0.055);
    const lowQ = Q().copy(dChest).multiply(_q2.setFromAxisAngle(Y, 0.62)).multiply(_q1.setFromAxisAngle(X, 0.50 - Math.sin(ph * 2) * 0.03 * run));
    const lowF = V(0, 0, 1).applyQuaternion(lowQ), lowU = V(0, 1, 0).applyQuaternion(lowQ);
    const lowPos = V().copy(chestC).addScaledVector(V(0, 0, 1).applyQuaternion(dChest), 0.27).addScaledVector(V(0, 1, 0).applyQuaternion(dChest), -0.21 + Math.sin(ph * 2) * 0.012 * run).addScaledVector(V(-1, 0, 0).applyQuaternion(dChest), 0.10);
    const wq = Q().copy(lowQ).slerp(aq, smooth(aim)); const wp = V().copy(lowPos).lerp(aimPos, smooth(aim));
    if (hang > 0.01) { // slung across the back while the hands are busy
      const sq = Q().copy(dChest).multiply(_q2.setFromAxisAngle(Z, 0.45)).multiply(_q1.setFromAxisAngle(X, -1.25)); const sp = V().copy(chestC).addScaledVector(V(0, 0, 1).applyQuaternion(dChest), -0.19).addScaledVector(V(0, 1, 0).applyQuaternion(dChest), -0.20).addScaledVector(V(-1, 0, 0).applyQuaternion(dChest), 0.06); wq.slerp(sq, hang); wp.lerp(sp, hang); }
    if (dead > 0) { const gq = Q().setFromAxisAngle(Y, 0.7 * this.deadDir).multiply(_q1.setFromAxisAngle(Z, 1.5)); const gp = V(-0.55, 0.05, 0.35 * this.deadDir); wq.slerp(gq, dead); wp.lerp(gp, dead); }
    if (kick > 0) wq.multiply(_q1.setFromAxisAngle(X, -kick * 0.10));
    const wf = V(0, 0, 1).applyQuaternion(wq), wu = V(0, 1, 0).applyQuaternion(wq), wr = V(-1, 0, 0).applyQuaternion(wq);
    // carrier: rifle canonical frame is barrel -Z, so spin it half a turn about Y
    this.weapon.quaternion.copy(wq).multiply(_q1.setFromAxisAngle(Y, Math.PI)); this.weapon.position.copy(wp);
    const WS = this.weaponScale || 1.2; this.muzzle.copy(wp).addScaledVector(wf, 0.733 * WS).addScaledVector(wu, 0.045 * WS); this.muzzleDir.copy(wf);
    // ---- arms
    const L = p.len; const handT = { Right: V(), Left: V() }; const handF = { Right: V(), Left: V() }, handTh = { Right: V(), Left: V() }; let curl = { Right: 1.15, Left: 0.9 };
    handT.Right.copy(wp).addScaledVector(wu, -0.055).addScaledVector(wf, -0.02).addScaledVector(wr, 0.012); handF.Right.copy(wf).addScaledVector(wu, 0.35).normalize(); handTh.Right.copy(wu).addScaledVector(wr, -0.25).addScaledVector(wf, -0.3).normalize();
    handT.Left.copy(wp).addScaledVector(wf, 0.235 * WS).addScaledVector(wu, -0.03).addScaledVector(wr, -0.035); handF.Left.copy(wr).addScaledVector(wu, 0.62).addScaledVector(wf, 0.25).normalize(); handTh.Left.copy(wf).addScaledVector(wu, 0.25).normalize();
    // bolt cycling: the right hand leaves the grip, works the bolt and returns
    if (this.boltK > 0 && aim > 0.3) { const b = Math.sin(clamp(1 - this.boltK, 0, 1) * Math.PI); handT.Right.addScaledVector(wu, 0.10 * b).addScaledVector(wr, 0.07 * b).addScaledVector(wf, 0.06 * b - 0.09 * Math.sin(clamp(1 - this.boltK, 0, 1) * Math.PI * 2) * b); curl.Right = 0.7; }
    if (zip > 0.01) { // both hands on the trolley overhead
      const top = _v1.set(0, p.hipH + 0.98, 0.10); handT.Right.lerp(_v2.copy(top).add(_v3.set(-0.13, 0, 0)), zip); handT.Left.lerp(_v2.copy(top).add(_v3.set(0.13, 0, 0)), zip);
      for (const sd of ['Right', 'Left']) { handF[sd].lerp(Y, zip).normalize(); handTh[sd].lerp(_v2.set(sd === 'Right' ? 1 : -1, 0, 0), zip).normalize(); } curl.Right = curl.Left = 1.3; }
    if (lad > 0.01) { const ar = Math.sin(ph) * 0.16, al = -ar; handT.Right.lerp(_v2.set(-0.2, p.hipH + 0.52 + ar, 0.36), lad); handT.Left.lerp(_v2.set(0.2, p.hipH + 0.52 + al, 0.36), lad);
      for (const sd of ['Right', 'Left']) { handF[sd].lerp(Y, lad).normalize(); handTh[sd].lerp(_v2.set(sd === 'Right' ? 1 : -1, 0, 0), lad).normalize(); } curl.Right = curl.Left = 1.3; }
    if (dead > 0) { // arms fall open
      const dq = dRoot; for (const sd of ['Right', 'Left']) { const sg = sd === 'Right' ? -1 : 1; const t = _v2.set(sg * (0.42 + 0.2 * (sd === 'Right' ? 1 : 0.6)), p.hipH + 0.48, sd === 'Right' ? 0.12 : -0.05).applyQuaternion(dq); t.y = Math.max(t.y, 0.07); t.add(_v3.set(0, 0, 0)); handT[sd].lerp(_v4.copy(this.wP[hips]).add(t.sub(_v3.set(0, p.hipH, 0).applyQuaternion(dq))), dead); curl[sd] = lerp(curl[sd], 0.35, dead); } }
    const poleBase = { Right: V(-0.75, -0.6, -0.35), Left: V(0.55, -0.8, -0.1) };
    for (const sd of ['Right', 'Left']) {
      const a = I[sd + 'Arm'], b = I[sd + 'ForeArm'], c = I[sd + 'Hand']; const pole = _v4.copy(poleBase[sd]).applyQuaternion(aq); if (hang > 0.01) pole.lerp(_v2.set(sd === 'Right' ? -1 : 1, -0.2, 0.5), hang);
      const dL = Q(); this._ik(a, b, c, handT[sd], pole, L.upArm, L.foreArm, dChest, dL);
      // hand orientation from (fingers, thumb) target directions; blend to "follow the forearm" when relaxed
      const fw = handF[sd], th = _v2.copy(handTh[sd]).addScaledVector(fw, -handTh[sd].dot(fw)).normalize(); const nn = _v3.copy(fw).cross(th);
      const tq = Q().setFromRotationMatrix(_m1.makeBasis(fw, th, nn).multiply(p.hand[sd].basisInv)); if (dead > 0) tq.slerp(dL, dead);
      this._setQ(c, tq);
      // share the wrist twist with the forearm
      const rel = _q1.copy(dL).invert().multiply(tq); const ax = _v4.copy(p.restP[c]).sub(p.restP[b]).normalize().applyQuaternion(_q2.copy(p.restQ[b]).invert().multiply(p.restQ[b])); // rest forearm axis (model)
      const axis = _v1.copy(p.restP[c]).sub(p.restP[b]).normalize(); const proj = axis.x * rel.x + axis.y * rel.y + axis.z * rel.z; const twq = _q2.set(axis.x * proj, axis.y * proj, axis.z * proj, rel.w).normalize(); const half = Q().slerp(twq, 0.5);
      this.wQ[b].copy(dL).multiply(half).multiply(p.restQ[b]);
      for (const fg of p.fingers[sd]) { const amt = fg.thumb ? curl[sd] * 0.25 : curl[sd] * (fg.k === 1 ? 0.75 : 0.95); this.bones[fg.j].quaternion.copy(p.restLocalQ[fg.j]).multiply(_q1.setFromAxisAngle(fg.axis, amt)); }
    }
    this.gripR.copy(handT.Right); this.gripL.copy(handT.Left);
    // ---- legs
    const stride = 0.34 * run, lift = 0.20 * run; const yawQ = Q().setFromAxisAngle(Y, -this.twist * 0.18 * 0);
    for (const sd of ['Left', 'Right']) {
      const sg = sd === 'Left' ? 1 : -1; const a = I[sd + 'UpLeg'], b = I[sd + 'Leg'], c = I[sd + 'Foot']; this._fk(a);
      const pp = ph + (sd === 'Left' ? 0 : Math.PI); const sw = Math.cos(pp), up = Math.max(0, Math.sin(pp));
      const T = _v1.set(sg * (p.hipW + 0.035 + cr * 0.07) + mv.x * sw * stride, p.footH + up * lift, mv.z * sw * stride + cr * sg * 0.10 + aim * sg * 0.10 * (1 - run));
      // stance: when aiming, right foot back a little (bladed)
      if (air > 0.01) T.lerp(_v2.set(sg * (p.hipW + 0.03), this.wP[hips].y - 0.62 + (sd === 'Left' ? 0.12 : 0), sd === 'Left' ? 0.22 : -0.22), air);
      if (zip > 0.01) T.lerp(_v2.set(sg * (p.hipW + 0.02), this.wP[hips].y - 0.74, 0.20 + (sd === 'Left' ? 0.08 : 0)), zip);
      if (lad > 0.01) T.lerp(_v2.set(sg * 0.17, this.wP[hips].y - 0.62 + Math.sin(pp) * 0.16, 0.30), lad);
      if (dead > 0) { const t = _v2.set(sg * (p.hipW + 0.12), p.footH, sd === 'Left' ? 0.05 : -0.08).sub(_v3.set(0, p.hipH, 0)).applyQuaternion(dRoot).add(this.wP[hips]); t.y = Math.max(t.y, 0.08); T.lerp(t, dead); }
      const pole = _v2.set(sg * 0.14, 0, 1); if (dead > 0) pole.applyQuaternion(dRoot);
      const dL = Q(); this._ik(a, b, c, T, pole, L.upLeg, L.loLeg, dHips, dL);
      // foot: stay flat, heel lifts while the leg swings
      const fq = Q().setFromAxisAngle(Y, sg * 0.14).multiply(_q1.setFromAxisAngle(X, up * 0.5 * run + zip * 0.5 + air * 0.4)); if (dead > 0) fq.premultiply(_q1.copy(dRoot).slerp(Q(), 1 - dead)); this._setQ(c, fq);
    }
    // ---- write locals
    const bones = this.bones; for (const j of p.J) { if (j == null || !this.ctrl[j]) continue; const par = p.parent[j]; const pq = par < 0 ? p.topParentQ : (this.ctrl[par] ? this.wQ[par] : p.restQ[par]); bones[j].quaternion.copy(_q1.copy(pq).invert().multiply(this.wQ[j])); }
    // hips translation: model metres -> the hips parent's local frame
    { const par = p.parent[hips]; const pm = _m1.compose(p.restP[par], p.restQ[par], _v2.set(p.scale, p.scale, p.scale)).invert(); bones[hips].position.copy(this.wP[hips]).applyMatrix4(pm); }
  }
  // world-space capsules for hit tests: [ax,ay,az, bx,by,bz, r, zone]  zone: 0 head, 1 torso, 2 limb
  hitShapes(out) {
    const I = this.p.idx, P = this.wP, m = this.root.matrixWorld; out.length = 0; const w = (v, o) => _v1.copy(v).add(o || _v2.set(0, 0, 0)).applyMatrix4(m);
    const cap = (a, b, r, z, oa, ob) => { const A = w(a, oa); const ax = A.x, ay = A.y, az = A.z; const B = w(b, ob); out.push(ax, ay, az, B.x, B.y, B.z, r, z); };
    const up = _v3.set(0, 0.10, 0.02).applyQuaternion(this.wQ[I.Head]).applyQuaternion(_q1.copy(this.p.restQ[I.Head]).invert());
    cap(P[I.Head], P[I.Head], 0.125, 0, _v4.set(0, 0.105, 0.03), _v4);
    cap(P[I.Hips], P[I.Neck], 0.19, 1, _v4.set(0, 0.03, 0), _v2.set(0, -0.06, 0));
    cap(P[I.LeftUpLeg], P[I.LeftLeg], 0.095, 2); cap(P[I.LeftLeg], P[I.LeftFoot], 0.075, 2); cap(P[I.RightUpLeg], P[I.RightLeg], 0.095, 2); cap(P[I.RightLeg], P[I.RightFoot], 0.075, 2);
    cap(P[I.LeftArm], P[I.LeftForeArm], 0.065, 2); cap(P[I.LeftForeArm], P[I.LeftHand], 0.055, 2); cap(P[I.RightArm], P[I.RightForeArm], 0.065, 2); cap(P[I.RightForeArm], P[I.RightHand], 0.055, 2);
    return out;
  }
}
