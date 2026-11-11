// The Angel: the landmark that hangs over the central block. Its halo is the closing zone; when it opens its
// arms it looks across the city and everyone in its line of sight is seen through walls for a few seconds.
import * as THREE from 'three';
import { GU } from './gfx.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x)); const ease = (t) => t * t * (3 - 2 * t);
export class Angel {
  constructor(game, model, mats) {
    this.g = game; this.root = new THREE.Group(); this.model = model.scene; this.root.add(this.model); game.gfx.scene.add(this.root);
    this.model.traverse(o => { if (!o.isMesh) return; o.frustumCulled = false; const n = o.material.name; o.material = /halo/.test(n) ? mats.halo : /arm/.test(n) ? mats.angelArm : mats.angelBody; if (/halo/.test(n)) o.renderOrder = 12; });
    const box = new THREE.Box3().setFromObject(this.model); const h = box.max.y - box.min.y; this.height = 44; const s = this.height / h; this.model.scale.setScalar(s); this.model.position.y = -box.min.y * s;
    this.baseY = 31; this.root.position.set(0, this.baseY, 0);
    this.mixer = new THREE.AnimationMixer(this.model); this.action = this.mixer.clipAction(model.clips[0]); this.action.play(); this.dur = model.clips[0].duration; this.t = 0.3; this.mixer.setTime(this.t);
    this.wrists = []; this.halo = null; this.model.traverse(o => { if (/arm_wrist/.test(o.name)) this.wrists.push(o); if (o.name === 'halo') this.halo = o; });
    this.eye = new THREE.Vector3(0, this.baseY + this.height * 0.9, 0); this.state = 'idle'; this.st = 0; this.pulseR = 0; this.pulseOn = false; this.frenzy = false; this.open = 0; this.spin = 0;
    // a soft additive shell around the halo so it reads from the far roofs
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.035, 6, 72), new THREE.MeshBasicMaterial({ color: new THREE.Color('#B51224').multiplyScalar(1.0), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })); ring.rotation.x = Math.PI / 2; this.glowRing = ring; this.root.add(ring);
    GU.uPulse.value.set(0, this.eye.y, 0, 0);
  }
  wristPos(i, out) { const w = this.wrists[i % this.wrists.length]; return w.getWorldPosition(out); }
  // called by the match at each contraction
  warn() { this.state = 'warn'; this.st = 0; }
  look() { this.state = 'look'; this.st = 0; this.pulseR = 0; this.pulseOn = true; for (const a of this.g.actors) a._gazed = false; }
  reset() { this.state = 'idle'; this.st = 0; this.pulseOn = false; this.frenzy = false; this.open = 0; GU.uPulse.value.w = 0; this.t = 0.3; }
  update(dt) {
    const g = this.g; this.st += dt;
    // arms: folded at rest (start of the clip), spread at ~3.5 s of the clip, the swirl after that is saved for the end
    let target = 0; if (this.state === 'warn') target = ease(clamp(this.st / 4.5, 0, 1)); else if (this.state === 'look') target = 1; else if (this.state === 'close') target = 1 - ease(clamp(this.st / 4, 0, 1));
    if (this.state === 'look' && this.st > 4.2) { this.state = 'close'; this.st = 0; } if (this.state === 'close' && this.st > 4) { this.state = 'idle'; this.st = 0; }
    this.open = target;
    if (this.frenzy) { this.t += dt * 0.55; if (this.t > this.dur) this.t -= this.dur; }
    else this.t = 0.25 + target * 3.3 + Math.sin(g.clock * 0.35) * 0.12 * (1 - target);
    this.mixer.setTime(this.t);
    this.root.position.y = this.baseY + Math.sin(g.clock * 0.4) * 0.6 - (g.zone ? (1 - clamp(g.zone.r / 30, 0, 1)) * 5 : 0);   // sinks toward the roofs as the halo tightens
    this.root.rotation.y = Math.sin(g.clock * 0.07) * 0.5;
    this.root.updateMatrixWorld(true); if (this.halo) this.halo.getWorldPosition(this.eye);
    const hs = 3.4 * (1 + 0.06 * Math.sin(g.clock * 2.2) + this.open * 0.25); this.glowRing.position.set(this.eye.x - this.root.position.x, this.eye.y - this.root.position.y + 0.1, this.eye.z - this.root.position.z); this.glowRing.scale.set(hs, hs, hs); this.glowRing.material.opacity = 0.35 + 0.4 * this.open;
    // the gaze: a shell of light racing outward from the halo
    if (this.pulseOn) { this.pulseR += dt * 78; const k = clamp(1 - this.pulseR / 260, 0, 1); GU.uPulse.value.set(0, this.eye.y, this.pulseR, k * 1.0);
      for (const a of g.actors) { if (!a.alive || a._gazed) continue; const d = a.chest().distanceTo(this.eye); if (d <= this.pulseR) { a._gazed = true; g.gazeHit(a, g.arena.los(this.eye, a.chest())); } }
      if (this.pulseR > 260) { this.pulseOn = false; GU.uPulse.value.w = 0; } }
  }
}
