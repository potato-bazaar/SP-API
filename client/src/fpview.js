// First-person weapon layer: the rifle and the sidearm, animated procedurally (sway, recoil, bolt, reload, swap).
import * as THREE from 'three';

const ease = (t) => t * t * (3 - 2 * t), clamp = (x, a, b) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t;
const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);

export class FpView {
  constructor(gfx, models) {
    this.scene = gfx.fpScene; this.cam = gfx.fpCamera;
    this.hemi = new THREE.HemisphereLight(0xb8bcc2, 0x3a3c40, 0.9); this.key = new THREE.DirectionalLight(0xffffff, 1.7); this.key.position.set(-1.2, 2.2, 1.0); this.scene.add(this.hemi, this.key);
    this.root = new THREE.Group(); this.scene.add(this.root);
    const pivot = (parent, name) => { let node = null; parent.traverse(o => { if (o.name === name) node = o; }); const p = new THREE.Group(); node.parent.add(p); p.add(node); return p; };
    this.rifle = models.weapons.rifle_fp; this.pistol = models.weapons.pistol; this.root.add(this.rifle, this.pistol); this.pistol.rotation.z = Math.PI;   // the sidearm's source frame is flipped: roll it upright about the barrel
    const boltOff = pivot(this.rifle, 'rifle_bolt'); this.boltSpin = new THREE.Group(); this.boltSlide = new THREE.Group(); boltOff.parent.add(this.boltSlide); this.boltSlide.add(this.boltSpin); this.boltSpin.add(boltOff); this.boltSpin.position.set(0, 0.046, 0); boltOff.position.set(0, -0.046, 0);
    this.mag = pivot(this.rifle, 'rifle_mag'); this.slide = pivot(this.pistol, 'pistol_slide');
    // muzzle flash: a soft cross of two quads
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d'); const g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.75)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64);
    const ft = new THREE.CanvasTexture(cv); this.flashMat = new THREE.MeshBasicMaterial({ map: ft, transparent: true, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, opacity: 0, fog: false });
    this.flash = new THREE.Group(); for (const [w, h, r] of [[0.34, 0.11, 0], [0.11, 0.34, 0], [0.2, 0.2, 0.785]]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), this.flashMat); m.rotation.z = r; this.flash.add(m); } this.flash.renderOrder = 50; this.root.add(this.flash);
    this.cur = 'rifle'; this.swayX = 0; this.swayY = 0; this.kick = 0; this.flashT = 0; this.vis = { rifle: 1, pistol: 0 };
  }
  shot() { this.kick = 1; this.flashT = 0.055; }
  update(dt, s) {
    this.kick = Math.max(0, this.kick - dt * (s.weapon === 'rifle' ? 5.5 : 11)); this.flashT -= dt;
    // look-lag sway
    this.swayX = lerp(this.swayX, clamp(-s.lookX * 0.004, -0.03, 0.03), 1 - Math.exp(-dt * 9)); this.swayY = lerp(this.swayY, clamp(s.lookY * 0.004, -0.03, 0.03), 1 - Math.exp(-dt * 9));
    const isR = s.weapon === 'rifle'; this.rifle.visible = isR && !s.hidden; this.pistol.visible = !isR && !s.hidden;
    const a = ease(clamp(s.ads, 0, 1)); const k = this.kick * this.kick;
    const hip = isR ? [0.112, -0.134, -0.285] : [0.105, -0.118, -0.33], sight = isR ? [0.0, -0.1012, -0.105] : [0.0, -0.088, -0.27];
    let px = lerp(hip[0], sight[0], a), py = lerp(hip[1], sight[1], a), pz = lerp(hip[2], sight[2], a); let rx = lerp(0.0, 0, a), ry = lerp(isR ? 0.045 : 0.03, 0, a), rz = lerp(isR ? -0.03 : 0, 0, a);
    const bob = s.bob * (1 - a * 0.85); px += Math.sin(s.phase) * 0.006 * bob + this.swayX * (1 - a * 0.6); py += -Math.abs(Math.cos(s.phase)) * 0.008 * bob + this.swayY * (1 - a * 0.6) - s.land * 0.03; rz += Math.sin(s.phase) * 0.012 * bob + this.swayX * 1.2;
    // sprint / lowered
    const low = ease(clamp(s.lower, 0, 1)); py -= low * 0.12; px += low * 0.02; rx -= low * 0.42; ry += low * 0.55;
    // recoil
    pz += k * (isR ? 0.075 : 0.03); rx += k * (isR ? 0.13 : 0.2); py += k * 0.012;
    // swap: dip out and back
    const sw = s.swap; if (sw > 0) { const d = Math.sin(clamp(sw, 0, 1) * Math.PI); py -= d * 0.22; rx -= d * 0.6; }
    // bolt cycle (rifle)
    let boltRot = 0, boltBack = 0;
    if (isR && s.bolt >= 0) { const t = s.bolt; const up = seg(t, 0.20, 0.32) - seg(t, 0.66, 0.78), back = seg(t, 0.32, 0.46) - seg(t, 0.50, 0.66); boltRot = ease(clamp(up, 0, 1)) * 1.05; boltBack = ease(clamp(back, 0, 1)) * 0.062; const tilt = Math.sin(clamp(seg(t, 0.12, 0.85), 0, 1) * Math.PI) * (1 - a * 0.5); rz += tilt * 0.16; ry += tilt * 0.06; py -= tilt * 0.012; px += tilt * 0.012; }
    // reload
    let magY = 0, magZ = 0;
    if (s.reload >= 0) { const t = s.reload; const tilt = Math.sin(clamp(seg(t, 0.0, 0.9), 0, 1) * Math.PI); rz += tilt * (isR ? 0.38 : 0.5); rx += tilt * 0.2; py -= tilt * 0.035; const out = seg(t, 0.12, 0.3) - seg(t, 0.55, 0.74); magY = -ease(clamp(out, 0, 1)) * 0.16; magZ = ease(clamp(out, 0, 1)) * 0.02; if (isR && t > 0.78) { const b = seg(t, 0.78, 1); boltRot = ease(clamp(seg(b, 0.05, 0.3) - seg(b, 0.7, 0.95), 0, 1)) * 1.05; boltBack = ease(clamp(seg(b, 0.3, 0.5) - seg(b, 0.5, 0.7), 0, 1)) * 0.062; } }
    this.root.position.set(px, py, pz); this.root.rotation.set(rx, ry, rz, 'YXZ');
    if (isR) { this.boltSpin.rotation.z = -boltRot; this.boltSlide.position.z = boltBack; this.mag.position.set(0, magY, magZ); }
    else { this.slide.position.z = k * 0.03; }
    const fl = this.flashT > 0 ? 1 : 0; this.flashMat.opacity = fl * 0.95; this.flash.visible = fl > 0 && !s.hidden; if (fl) { this.flash.position.set(0, isR ? 0.052 : 0.06, isR ? -0.80 : -0.24); this.flash.rotation.z = Math.random() * 3; this.flash.scale.setScalar((isR ? 1.3 : 0.8) * (0.8 + Math.random() * 0.5)); }
    this.hemi.intensity = 0.9 + fl * 2.5;
  }
}
