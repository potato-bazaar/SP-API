// Effects: red threads (every bullet leaves one), soul threads to the angel, blood, decals, glints, the halo curtain, rain.
import * as THREE from 'three';
import { GU, FOG_FN, RED } from './gfx.js';

const FOGU = () => ({ uFogLow: GU.uFogLow, uFogHigh: GU.uFogHigh, uFogDeep: GU.uFogDeep, uFogParams: GU.uFogParams, uTime: GU.uTime, uRedCol: GU.uRedCol });
const FOG_APPLY = /* glsl */`{ vec3 toP = vWp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4); float fa = scFogAmount(cameraPosition, dir, dist); FOGGED }`;

// ---------------------------------------------------------------- threads
const MAX_SHOT = 40, SOUL_SEG = 18, MAX_SOUL = 8, QUADS = MAX_SHOT + SOUL_SEG * MAX_SOUL;
export class Threads {
  constructor(scene, res) {
    const g = new THREE.BufferGeometry(); const n = QUADS * 4;
    this.aA = new Float32Array(n * 3); this.aB = new Float32Array(n * 3); this.aP = new Float32Array(n * 4); // side, end, birth, style(0 shot,1 soul)+seed
    const idx = new Uint16Array(QUADS * 6);
    for (let q = 0; q < QUADS; q++) { const b = q * 4; for (let k = 0; k < 4; k++) { this.aP[(b + k) * 4] = k % 2 ? 1 : -1; this.aP[(b + k) * 4 + 1] = k < 2 ? 0 : 1; this.aP[(b + k) * 4 + 2] = -1000; } idx.set([b, b + 1, b + 2, b + 2, b + 1, b + 3], q * 6); }
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); g.setAttribute('aA', new THREE.BufferAttribute(this.aA, 3)); g.setAttribute('aB', new THREE.BufferAttribute(this.aB, 3)); g.setAttribute('aP', new THREE.BufferAttribute(this.aP, 4)); g.setIndex(new THREE.BufferAttribute(idx, 1));
    for (const k of ['aA', 'aB', 'aP']) g.getAttribute(k).setUsage(THREE.DynamicDrawUsage);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { ...FOGU(), uRes: { value: res }, uLife: { value: 5.5 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      vertexShader: /* glsl */`
attribute vec3 aA; attribute vec3 aB; attribute vec4 aP; uniform vec2 uRes; uniform float uTime; uniform float uLife;
varying vec3 vWp; varying float vSide; varying float vAge; varying float vAlong; varying float vStyle; varying float vLen;
void main() {
  vec4 va = viewMatrix * vec4(aA, 1.0), vb = viewMatrix * vec4(aB, 1.0); float nz = -0.12;
  if (va.z > nz && vb.z > nz) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  if (va.z > nz) va = mix(va, vb, (nz - va.z) / (vb.z - va.z)); if (vb.z > nz) vb = mix(vb, va, (nz - vb.z) / (va.z - vb.z));
  vec4 ca = projectionMatrix * va, cb = projectionMatrix * vb; vec2 sa = ca.xy / ca.w, sb = cb.xy / cb.w; float asp = uRes.x / uRes.y;
  vec2 d = (sb - sa) * vec2(asp, 1.0); float dl = length(d); d = dl > 1e-6 ? d / dl : vec2(1.0, 0.0); vec2 nrm = vec2(-d.y, d.x);
  vec4 c = mix(ca, cb, aP.y); vec4 vv = mix(va, vb, aP.y);
  float style = floor(aP.w); float age = uTime - aP.z;
  float worldW = style > 0.5 ? 0.05 : mix(0.11, 0.035, clamp(age * 5.0, 0.0, 1.0));
  float px = max(style > 0.5 ? 1.25 : 1.6, worldW * projectionMatrix[1][1] * uRes.y * 0.5 / max(-vv.z, 0.1));
  c.xy += nrm * vec2(1.0 / asp, 1.0) * (px * 2.0 / uRes.y) * c.w * aP.x;
  gl_Position = c; vWp = mix(aA, aB, aP.y); vSide = aP.x; vAge = age; vStyle = style; vLen = distance(aA, aB); vAlong = aP.y * vLen + fract(aP.w) * 37.0;
}`,
      fragmentShader: /* glsl */`
precision highp float; uniform float uTime; uniform float uLife; uniform vec3 uRedCol;
varying vec3 vWp; varying float vSide; varying float vAge; varying float vAlong; varying float vStyle; varying float vLen;
${FOG_FN}
float h1(float x) { return fract(sin(x * 127.1) * 43758.5453); }
void main() {
  float soft = 1.0 - vSide * vSide; float a; vec3 col;
  if (vStyle > 0.5) { // soul thread: thin, steady, breathing
    if (vAge < 0.0) discard; float grow = clamp(vAge * 0.55, 0.0, 1.0);
    a = soft * (0.55 + 0.25 * sin(uTime * 1.7 - vAlong * 0.35)) * grow; col = uRedCol * 1.5;
  } else {
    if (vAge < 0.0 || vAge > uLife) discard;
    float t = vAge / uLife; float fray = h1(floor(vAlong * 3.0)) ; if (fray < (t - 0.35) * 1.6) discard;   // the thread frays as it dies
    float hot = 1.0 - clamp(vAge * 9.0, 0.0, 1.0);
    a = soft * mix(1.0, 0.0, smoothstep(0.0, 1.0, t)) * (0.55 + 0.45 * hot);
    col = mix(uRedCol * 1.7, vec3(1.0, 0.92, 0.9), hot * 0.85);
  }
  vec3 toP = vWp - cameraPosition; float dist = length(toP); float fa = scFogAmount(cameraPosition, toP / max(dist, 1e-4), dist);
  gl_FragColor = vec4(col * a * (1.0 - fa * 0.75), 1.0);
}`,
    });
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 20; scene.add(this.mesh); this.geo = g; this.next = 0; this.souls = [];
  }
  _setQuad(q, A, B, birth, styleSeed) { for (let k = 0; k < 4; k++) { const v = q * 4 + k; this.aA[v * 3] = A.x; this.aA[v * 3 + 1] = A.y; this.aA[v * 3 + 2] = A.z; this.aB[v * 3] = B.x; this.aB[v * 3 + 1] = B.y; this.aB[v * 3 + 2] = B.z; this.aP[v * 4 + 2] = birth; this.aP[v * 4 + 3] = styleSeed; } }
  shot(A, B) { const q = this.next; this.next = (this.next + 1) % MAX_SHOT; this._setQuad(q, A, B, GU.uTime.value, Math.random() * 0.99); for (const k of ['aA', 'aB', 'aP']) this.geo.getAttribute(k).needsUpdate = true; }
  // a persistent curve from a body to (a moving) point on the angel
  addSoul(from, getTo) { if (this.souls.length >= MAX_SOUL) return; this.souls.push({ from: from.clone(), getTo, birth: GU.uTime.value, to: new THREE.Vector3(), c: new THREE.Vector3() }); }
  clear() { this.souls.length = 0; for (let v = 0; v < QUADS * 4; v++) this.aP[v * 4 + 2] = -1000; this.geo.getAttribute('aP').needsUpdate = true; }
  update() {
    if (!this.souls.length) return; const a = new THREE.Vector3(), b = new THREE.Vector3();
    this.souls.forEach((s, si) => { s.getTo(s.to); s.c.copy(s.from).lerp(s.to, 0.5); s.c.y = Math.max(s.from.y, s.to.y) + 14 + 3 * Math.sin(GU.uTime.value * 0.4 + si);
      const P = (t, o) => { const u = 1 - t; return o.set(u * u * s.from.x + 2 * u * t * s.c.x + t * t * s.to.x, u * u * s.from.y + 2 * u * t * s.c.y + t * t * s.to.y, u * u * s.from.z + 2 * u * t * s.c.z + t * t * s.to.z); };
      const grown = Math.min(1, (GU.uTime.value - s.birth) / 2.4);
      for (let k = 0; k < SOUL_SEG; k++) { const t0 = (k / SOUL_SEG) * grown, t1 = ((k + 1) / SOUL_SEG) * grown; P(t0, a); P(t1, b); this._setQuad(MAX_SHOT + si * SOUL_SEG + k, a, b, s.birth, 1 + (k / SOUL_SEG) * 0.9); } });
    for (const k of ['aA', 'aB', 'aP']) this.geo.getAttribute(k).needsUpdate = true;
  }
}

// ---------------------------------------------------------------- point particles (blood, sparks, dust, flashes, glints)
const MAXP = 900;
export class Particles {
  constructor(scene, res) {
    const g = new THREE.BufferGeometry(); this.pos = new Float32Array(MAXP * 3); this.dat = new Float32Array(MAXP * 4); // size, alpha, kind (0 blood,1 spark,2 dust,3 flash,4 glint), spare
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('aD', new THREE.BufferAttribute(this.dat, 4).setUsage(THREE.DynamicDrawUsage));
    this.vel = new Float32Array(MAXP * 3); this.life = new Float32Array(MAXP); this.max = new Float32Array(MAXP); this.grav = new Float32Array(MAXP); this.n = 0; this.head = 0;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { ...FOGU(), uRes: { value: res } }, transparent: true, depthWrite: false, blending: THREE.NormalBlending,
      vertexShader: /* glsl */`attribute vec4 aD; uniform vec2 uRes; varying vec4 vD; varying vec3 vWp;
void main() { vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; vD = aD; vWp = position;
  float px = aD.z > 3.5 ? aD.x : aD.x * projectionMatrix[1][1] * uRes.y * 0.5 / max(-mv.z, 0.05); gl_PointSize = aD.y <= 0.0 ? 0.0 : clamp(px, 1.5, 220.0); }`,
      fragmentShader: /* glsl */`precision highp float; uniform vec3 uRedCol; uniform float uTime; varying vec4 vD; varying vec3 vWp;
${FOG_FN}
void main() { vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0; if (r > 1.0) discard; float a = vD.y; vec3 col;
  vec3 toP = vWp - cameraPosition; float dist = length(toP); float fa = scFogAmount(cameraPosition, toP / max(dist, 1e-4), dist);
  if (vD.z < 0.5) { col = uRedCol * (0.75 + 0.25 * (1.0 - r)); a *= smoothstep(1.0, 0.72, r); col = mix(col, scFogColor(toP / max(dist, 1e-4), vWp.y), fa * 0.8); }
  else if (vD.z < 1.5) { col = vec3(1.0); a *= (1.0 - r); }
  else if (vD.z < 2.5) { col = vec3(0.42); a *= (1.0 - r) * 0.5; col = mix(col, scFogColor(toP / max(dist, 1e-4), vWp.y), fa); }
  else if (vD.z < 3.5) { float star = max(0.0, 1.0 - abs(c.x) * 14.0) * (1.0 - r) + max(0.0, 1.0 - abs(c.y) * 14.0) * (1.0 - r); col = vec3(1.0, 0.95, 0.92); a *= clamp((1.0 - r) * (1.0 - r) * 1.6 + star, 0.0, 1.0); }
  else { float star = max(0.0, 1.0 - abs(c.x) * 9.0) + max(0.0, 1.0 - abs(c.y) * 9.0); col = uRedCol * 1.8; a *= clamp(pow(1.0 - r, 3.0) * 1.3 + star * (1.0 - r) * 0.7, 0.0, 1.0) * (1.0 - fa * 0.5); }
  gl_FragColor = vec4(col, a); }`,
    });
    this.mesh = new THREE.Points(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 21; scene.add(this.mesh); this.geo = g;
  }
  spawn(p, v, kind, size, life, grav = 0) { const i = this.head; this.head = (this.head + 1) % MAXP; this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z; this.vel[i * 3] = v.x; this.vel[i * 3 + 1] = v.y; this.vel[i * 3 + 2] = v.z; this.dat[i * 4] = size; this.dat[i * 4 + 1] = 1; this.dat[i * 4 + 2] = kind; this.life[i] = this.max[i] = life; this.grav[i] = grav; return i; }
  // red burst: along the bullet (exit) and a little back toward the shooter
  blood(p, dir, amount = 1) { const v = new THREE.Vector3(); const n = Math.round(16 * amount);
    for (let i = 0; i < n; i++) { const back = Math.random() < 0.28; const sp = (back ? -1.6 : 5.5) * (0.35 + Math.random()); v.set(dir.x * sp + (Math.random() - 0.5) * 2.6, dir.y * sp + (Math.random() - 0.2) * 2.6, dir.z * sp + (Math.random() - 0.5) * 2.6); this.spawn(p, v, 0, 0.04 + Math.random() * 0.085 * amount, 0.45 + Math.random() * 0.5, 14); }
    for (let i = 0; i < 3; i++) { v.set((Math.random() - 0.5) * 0.8, 0.5 + Math.random() * 0.6, (Math.random() - 0.5) * 0.8); this.spawn(p, v, 0, 0.22 * amount, 0.22, 0); } }
  impact(p, nrm) { const v = new THREE.Vector3(); for (let i = 0; i < 7; i++) { v.set(nrm.x * 3 + (Math.random() - 0.5) * 4, nrm.y * 3 + Math.random() * 3, nrm.z * 3 + (Math.random() - 0.5) * 4); this.spawn(p, v, 1, 0.035, 0.16 + Math.random() * 0.2, 16); }
    for (let i = 0; i < 4; i++) { v.set(nrm.x * 1.2 + (Math.random() - 0.5), nrm.y * 1.2 + Math.random() * 0.8, nrm.z * 1.2 + (Math.random() - 0.5)); this.spawn(p, v, 2, 0.35 + Math.random() * 0.4, 0.7 + Math.random() * 0.5, -0.6); } }
  flash(p, size = 1.3) { this.spawn(p, new THREE.Vector3(), 3, size, 0.07, 0); }
  glint(p, px = 9) { return this.spawn(p, new THREE.Vector3(), 4, px, 0.12, 0); }
  motes(p, n = 26) { const v = new THREE.Vector3(); for (let i = 0; i < n; i++) { v.set((Math.random() - 0.5) * 0.7, 0.6 + Math.random() * 1.8, (Math.random() - 0.5) * 0.7); const q = new THREE.Vector3(p.x + (Math.random() - 0.5) * 0.6, p.y + Math.random() * 0.4, p.z + (Math.random() - 0.5) * 0.6); this.spawn(q, v, 0, 0.03 + Math.random() * 0.04, 1.6 + Math.random() * 2.2, -0.8); } }
  update(dt) { let any = false; for (let i = 0; i < MAXP; i++) { if (this.life[i] <= 0) continue; any = true; this.life[i] -= dt; const k = this.dat[i * 4 + 2];
      if (this.life[i] <= 0) { this.dat[i * 4 + 1] = 0; continue; } this.vel[i * 3 + 1] -= this.grav[i] * dt; const drag = k === 2 ? 2.5 : 0.6; const f = Math.max(0, 1 - drag * dt);
      this.vel[i * 3] *= f; this.vel[i * 3 + 2] *= f; this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const t = this.life[i] / this.max[i]; this.dat[i * 4 + 1] = k === 2 ? t : Math.min(1, t * 2.5); if (k === 2) this.dat[i * 4] += dt * 0.5; }
    if (any || this._dirty) { this.geo.getAttribute('position').needsUpdate = true; this.geo.getAttribute('aD').needsUpdate = true; } this._dirty = any; }
  clear() { this.life.fill(0); for (let i = 0; i < MAXP; i++) this.dat[i * 4 + 1] = 0; this._dirty = true; }
}

// ---------------------------------------------------------------- decals (blood on surfaces, bullet marks)
const MAXD = 72;
function splatTexture() {
  const S = 256, cv = document.createElement('canvas'); cv.width = cv.height = S * 2; const c = cv.getContext('2d'); c.fillStyle = '#000'; c.fillRect(0, 0, S * 2, S * 2); c.fillStyle = '#fff'; let seed = 7; const R = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let t = 0; t < 4; t++) { const ox = (t % 2) * S + S / 2, oy = ((t / 2) | 0) * S + S / 2;
    if (t === 3) { c.beginPath(); c.arc(ox, oy, 26, 0, 7); c.fill(); for (let i = 0; i < 9; i++) { const a = R() * 7, d = 26 + R() * 30; c.beginPath(); c.arc(ox + Math.cos(a) * d, oy + Math.sin(a) * d, 3 + R() * 6, 0, 7); c.fill(); } continue; }
    for (let i = 0; i < 9; i++) { const a = R() * 7, d = R() * 34; c.beginPath(); c.ellipse(ox + Math.cos(a) * d, oy + Math.sin(a) * d, 20 + R() * 34, 14 + R() * 26, R() * 3, 0, 7); c.fill(); }
    for (let i = 0; i < 26; i++) { const a = R() * 7, d = 40 + R() * 78; c.beginPath(); c.arc(ox + Math.cos(a) * d, oy + Math.sin(a) * d, 1.5 + R() * 7, 0, 7); c.fill(); if (R() < 0.4) { c.lineWidth = 2 + R() * 5; c.strokeStyle = '#fff'; c.beginPath(); c.moveTo(ox + Math.cos(a) * d * 0.4, oy + Math.sin(a) * d * 0.4); c.lineTo(ox + Math.cos(a) * d, oy + Math.sin(a) * d); c.stroke(); } } }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.NoColorSpace; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; return tex;
}
export class Decals {
  constructor(scene) {
    const g = new THREE.BufferGeometry(); this.pos = new Float32Array(MAXD * 12); this.uv = new Float32Array(MAXD * 8); this.dat = new Float32Array(MAXD * 16); const idx = new Uint16Array(MAXD * 6);
    for (let q = 0; q < MAXD; q++) idx.set([q * 4, q * 4 + 1, q * 4 + 2, q * 4, q * 4 + 2, q * 4 + 3], q * 6);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('aD', new THREE.BufferAttribute(this.dat, 4).setUsage(THREE.DynamicDrawUsage)); g.setIndex(new THREE.BufferAttribute(idx, 1));
    this.mat = new THREE.ShaderMaterial({ uniforms: { ...FOGU(), uMap: { value: splatTexture() } }, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, side: THREE.DoubleSide,
      vertexShader: 'attribute vec4 aD; varying vec2 vUv; varying vec4 vD; varying vec3 vWp; void main(){ vUv = uv; vD = aD; vWp = position; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }',
      fragmentShader: /* glsl */`precision highp float; uniform sampler2D uMap; uniform vec3 uRedCol; uniform float uTime; varying vec2 vUv; varying vec4 vD; varying vec3 vWp;
${FOG_FN}
void main() { float m = texture2D(uMap, vUv).r; float grow = clamp((uTime - vD.x) / max(vD.y, 0.001), 0.0, 1.0); float a = smoothstep(1.0 - grow * 0.92, 1.0 - grow * 0.92 + 0.12, m) ; if (a < 0.02) discard;
  vec3 col = vD.z > 0.5 ? vec3(0.012) : uRedCol * (0.62 + 0.25 * m); vec3 toP = vWp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4); float fa = scFogAmount(cameraPosition, dir, dist);
  col = mix(col, scFogColor(dir, vWp.y), fa); gl_FragColor = vec4(col, a * vD.w); }`,
    });
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 5; scene.add(this.mesh); this.geo = g; this.next = 0;
  }
  // kind 0 blood, 1 bullet mark. grow = seconds to spread
  add(p, n, size, kind = 0, grow = 0.12, alpha = 0.92) {
    const q = this.next; this.next = (this.next + 1) % MAXD; const N = new THREE.Vector3().copy(n).normalize(); const t = new THREE.Vector3(1, 0, 0); if (Math.abs(N.x) > 0.8) t.set(0, 0, 1); const u = new THREE.Vector3().crossVectors(N, t).normalize(); const v = new THREE.Vector3().crossVectors(N, u);
    const a = Math.random() * Math.PI * 2, cs = Math.cos(a) * size, sn = Math.sin(a) * size; const U = new THREE.Vector3().copy(u).multiplyScalar(cs).addScaledVector(v, sn), W = new THREE.Vector3().copy(u).multiplyScalar(-sn).addScaledVector(v, cs); const c = new THREE.Vector3().copy(p).addScaledVector(N, 0.012);
    const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]]; const tile = kind === 1 ? 3 : (Math.random() * 3) | 0; const tu = (tile % 2) * 0.5, tv = ((tile / 2) | 0) * 0.5;
    corners.forEach(([x, y], k) => { const i = q * 4 + k; this.pos[i * 3] = c.x + U.x * x + W.x * y; this.pos[i * 3 + 1] = c.y + U.y * x + W.y * y; this.pos[i * 3 + 2] = c.z + U.z * x + W.z * y; this.uv[i * 2] = tu + (x * 0.5 + 0.5) * 0.5; this.uv[i * 2 + 1] = tv + (y * 0.5 + 0.5) * 0.5; this.dat[i * 4] = GU.uTime.value; this.dat[i * 4 + 1] = grow; this.dat[i * 4 + 2] = kind; this.dat[i * 4 + 3] = alpha; });
    for (const k of ['position', 'uv', 'aD']) this.geo.getAttribute(k).needsUpdate = true;
  }
  clear() { this.pos.fill(0); this.geo.getAttribute('position').needsUpdate = true; }
}

// ---------------------------------------------------------------- the halo curtain (zone wall)
export function makeCurtain(scene) {
  const g = new THREE.CylinderGeometry(1, 1, 1, 96, 1, true); g.translate(0, 0.5, 0);
  const mat = new THREE.ShaderMaterial({ uniforms: { ...FOGU(), uR: { value: 80 } }, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec3 vWp; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vWp = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`precision highp float; uniform float uTime; uniform vec3 uRedCol; uniform float uR; varying vec3 vWp; varying vec2 vUv;
float h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() { float ang = vUv.x * uR * 6.2832; float col = floor(ang * 2.6); float hh = h(vec2(col, 1.0));
  float fall = fract(vWp.y * 0.05 * (0.6 + hh) + uTime * (0.10 + 0.25 * hh) + hh * 7.0); float streak = smoothstep(0.0, 0.05, fall) * smoothstep(0.42, 0.05, fall) * step(0.55, hh);
  float thin = smoothstep(0.30, 0.5, abs(fract(ang * 2.6) - 0.5));
  float d = distance(vWp, cameraPosition); float near = smoothstep(70.0, 8.0, d); float low = smoothstep(80.0, 26.0, vWp.y) * smoothstep(5.0, 13.0, vWp.y);
  float a = (0.012 + streak * 0.16 * (1.0 - thin)) * low * (0.12 + 0.88 * near);
  gl_FragColor = vec4(uRedCol * a * 1.6, 1.0); }`,
  });
  const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 15; m.scale.set(80, 110, 80); scene.add(m); return m;
}

// ---------------------------------------------------------------- launch-pad arcs (dotted hints of where a pad throws you)
export function makePadHints(scene, arena, res) {
  const pts = [], ph = []; const p = new THREE.Vector3();
  for (const l of arena.links) { if (l.kind !== 'pad') continue; const N = 26; for (let i = 1; i < N; i++) { arena.linkPos(l, 0, i / N, p); pts.push(p.x, p.y + 0.9, p.z); ph.push(i / N); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3)); g.setAttribute('aU', new THREE.BufferAttribute(new Float32Array(ph), 1));
  const mat = new THREE.ShaderMaterial({ uniforms: { ...FOGU(), uRes: { value: res } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'attribute float aU; uniform vec2 uRes; uniform float uTime; varying float vA; void main(){ vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; float d = -mv.z; float w = fract(aU * 3.0 - uTime * 0.9); vA = (0.25 + 0.75 * smoothstep(0.75, 1.0, w)) * smoothstep(110.0, 25.0, d); gl_PointSize = clamp(0.11 * projectionMatrix[1][1] * uRes.y * 0.5 / max(d, 0.1), 1.5, 9.0); }',
    fragmentShader: 'precision highp float; varying float vA; void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(vec3(0.85) * vA * (1.0 - r * r), 1.0); }' });
  const m = new THREE.Points(g, mat); m.frustumCulled = false; m.renderOrder = 14; scene.add(m); return m;
}

// ---------------------------------------------------------------- rain
export function makeRain(scene, count = 900) {
  const pos = new Float32Array(count * 6), seed = new Float32Array(count * 2); for (let i = 0; i < count; i++) { const x = Math.random() * 46, y = Math.random() * 34, z = Math.random() * 46; pos.set([x, y, z, x, y, z], i * 6); seed[i * 2] = 0; seed[i * 2 + 1] = 1; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aE', new THREE.BufferAttribute(seed, 1));
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: GU.uTime, uAmt: { value: 1 } }, transparent: true, depthWrite: false,
    vertexShader: /* glsl */`attribute float aE; uniform float uTime; varying float vA;
void main() { vec3 box = vec3(46.0, 34.0, 46.0); float sp = 26.0 + fract(position.x * 7.31) * 9.0; vec3 p = position; p.y -= uTime * sp; p.x += uTime * 2.2;
  p = mod(p - cameraPosition + box * 0.5, box) - box * 0.5 + cameraPosition; p.y += aE * (0.55 + fract(position.z * 3.7) * 0.5); p.x -= aE * 0.045;
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vA = smoothstep(23.0, 6.0, -mv.z) * smoothstep(0.3, 2.5, -mv.z); }`,
    fragmentShader: 'precision highp float; uniform float uAmt; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.62), vA * 0.20 * uAmt); }' });
  const m = new THREE.LineSegments(g, mat); m.frustumCulled = false; m.renderOrder = 18; scene.add(m); return m;
}
export { RED };
