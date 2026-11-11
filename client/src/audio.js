// All sound is synthesised: no audio files. Starts on the first user gesture.
export class Audio {
  constructor() { this.ctx = null; this.muted = false; this.vol = 0.9; this.loops = {}; }
  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    try { this.ctx = new AC(); } catch (e) { return; }
    const c = this.ctx; this.master = c.createGain(); this.master.gain.value = this.vol;
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -16; comp.knee.value = 18; comp.ratio.value = 5; comp.attack.value = 0.004; comp.release.value = 0.22;
    this.master.connect(comp); comp.connect(c.destination);
    // city reverb: decaying noise impulse
    const len = c.sampleRate * 2.6, ir = c.createBuffer(2, len, c.sampleRate); for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) { const t = i / len; d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.6) * (i < 400 ? i / 400 : 1) * (1 + 0.6 * Math.sin(i * 0.0007 + ch)); } }
    this.rev = c.createConvolver(); this.rev.buffer = ir; this.revGain = c.createGain(); this.revGain.gain.value = 0.55; this.rev.connect(this.revGain); this.revGain.connect(this.master);
    const nl = c.sampleRate * 2; this.noise = c.createBuffer(1, nl, c.sampleRate); const nd = this.noise.getChannelData(0); for (let i = 0; i < nl; i++) nd[i] = Math.random() * 2 - 1;
    this._ambience();
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.setTargetAtTime(m ? 0 : this.vol, this.ctx.currentTime, 0.05); }
  get t() { return this.ctx ? this.ctx.currentTime : 0; }
  _out(pan = 0, wet = 0.25, gain = 1) { const c = this.ctx; const g = c.createGain(); g.gain.value = gain; let node = g; if (c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); node = p; } node.connect(this.master); if (wet > 0) { const w = c.createGain(); w.gain.value = wet; node.connect(w); w.connect(this.rev); } return g; }
  _noise(dur, when = 0) { const c = this.ctx; const s = c.createBufferSource(); s.buffer = this.noise; s.loop = true; s.start(this.t + when, Math.random() * 1.5); s.stop(this.t + when + dur + 0.05); return s; }
  _env(param, pts, when = 0) { const t0 = this.t + when; param.cancelScheduledValues(t0); param.setValueAtTime(pts[0][1], t0 + pts[0][0]); for (let i = 1; i < pts.length; i++) { if (pts[i][2] === 'exp') param.exponentialRampToValueAtTime(Math.max(1e-4, pts[i][1]), t0 + pts[i][0]); else param.linearRampToValueAtTime(pts[i][1], t0 + pts[i][0]); } }
  _tone(type, f0, f1, dur, gain, out, when = 0) { const c = this.ctx; const o = c.createOscillator(); o.type = type; const g = c.createGain(); o.frequency.setValueAtTime(f0, this.t + when); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), this.t + when + dur); this._env(g.gain, [[0, 0], [0.004, gain], [dur, 0.0001, 'exp']], when); o.connect(g); g.connect(out); o.start(this.t + when); o.stop(this.t + when + dur + 0.05); return o; }
  _burst(dur, f0, f1, q, gain, out, when = 0, type = 'bandpass') { const c = this.ctx; const s = this._noise(dur, when); const f = c.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, this.t + when); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), this.t + when + dur); const g = c.createGain(); this._env(g.gain, [[0, 0], [0.002, gain], [dur, 0.0001, 'exp']], when); s.connect(f); f.connect(g); g.connect(out); }

  // ---- weapons. dist in metres (0 = own shot), pan -1..1
  shot(dist = 0, pan = 0, pistol = false) {
    if (!this.ctx) return; const delay = Math.min(0.5, dist / 343); const att = dist <= 0 ? 1 : Math.max(0.05, 1 / (1 + dist / 26)); const out = this._out(pan, dist <= 0 ? 0.55 : 0.9, att * (pistol ? 0.6 : 1));
    let dst = out; if (dist > 0) { const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = Math.max(500, 9000 - dist * 55); lp.connect(out); dst = lp; }
    if (pistol) { this._burst(0.11, 3200, 500, 0.7, 0.9, dst, delay); this._tone('sine', 190, 60, 0.12, 0.7, dst, delay); return; }
    this._burst(0.05, 6000, 1800, 0.5, 1.0, dst, delay, 'highpass');           // crack
    this._burst(0.42, 1600, 140, 0.6, 0.95, dst, delay);                       // body
    this._tone('sine', 120, 34, 0.5, 1.0, dst, delay);                         // thump
    this._burst(1.3, 700, 180, 0.4, 0.22, dst, delay + 0.05, 'lowpass');      // tail rolling between the towers
  }
  bolt(when = 0.32) { if (!this.ctx) return; const o = this._out(0.15, 0.08, 0.5); for (const [t, f] of [[0, 2600], [0.11, 1700], [0.36, 2100], [0.47, 3100]]) { this._burst(0.035, f, f * 0.6, 4, 0.8, o, when + t); this._tone('square', f * 0.5, f * 0.25, 0.02, 0.08, o, when + t); } }
  reload(dur = 2.4) { if (!this.ctx) return; const o = this._out(0.1, 0.08, 0.5); for (const [t, f] of [[0.15, 900], [0.3, 1400], [dur * 0.55, 1100], [dur * 0.62, 2400], [dur - 0.5, 1800], [dur - 0.38, 3000]]) this._burst(0.05, f, f * 0.5, 3, 0.8, o, t); }
  dry() { if (!this.ctx) return; this._burst(0.03, 2400, 1500, 5, 0.5, this._out(0, 0, 0.5)); }
  whiz(pan = 0) { if (!this.ctx) return; const o = this._out(pan, 0.2, 0.75); const c = this.ctx; const s = this._noise(0.22); const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 9; f.frequency.setValueAtTime(5200, this.t); f.frequency.exponentialRampToValueAtTime(900, this.t + 0.2); const g = c.createGain(); this._env(g.gain, [[0, 0], [0.03, 1], [0.22, 0.0001, 'exp']]); s.connect(f); f.connect(g); g.connect(o); }
  impact(dist = 10, pan = 0) { if (!this.ctx) return; const o = this._out(pan, 0.3, Math.max(0.05, 0.6 / (1 + dist / 14))); this._burst(0.07, 2600, 500, 1.5, 1, o); }
  hit(head = false) { if (!this.ctx) return; const o = this._out(0, 0.12, 0.55); this._burst(0.05, 1900, 700, 2, 0.9, o); if (head) { this._tone('sine', 1320, 1318, 0.5, 0.35, o, 0.02); this._tone('sine', 1980, 1975, 0.35, 0.18, o, 0.02); } }
  kill() { if (!this.ctx) return; const o = this._out(0, 0.5, 0.5); this._tone('sine', 660, 659, 0.9, 0.3, o, 0.05); this._tone('sine', 990, 988, 0.7, 0.2, o, 0.13); this._tone('triangle', 330, 329, 1.1, 0.2, o, 0.05); }
  hurt() { if (!this.ctx) return; const o = this._out(0, 0.1, 0.9); this._tone('sine', 150, 48, 0.25, 1, o); this._burst(0.18, 600, 120, 0.8, 0.7, o); }
  step(crouch = false) { if (!this.ctx) return; const o = this._out((Math.random() - 0.5) * 0.3, 0.05, crouch ? 0.09 : 0.2); this._burst(0.06, 380 + Math.random() * 160, 110, 1.2, 1, o); }
  jump() { if (!this.ctx) return; this._burst(0.09, 300, 700, 1, 0.3, this._out(0, 0.05, 0.4)); }
  land(v = 1) { if (!this.ctx) return; const o = this._out(0, 0.12, Math.min(1, 0.3 + v * 0.5)); this._tone('sine', 110, 40, 0.18, 0.9, o); this._burst(0.12, 500, 90, 0.8, 0.7, o); }
  pad() { if (!this.ctx) return; const o = this._out(0, 0.4, 0.8); this._tone('sawtooth', 70, 520, 0.38, 0.22, o); this._burst(0.9, 300, 3200, 0.7, 0.55, o, 0.02); this._tone('sine', 880, 1760, 0.22, 0.2, o, 0.0); }
  ui() { if (!this.ctx) return; this._tone('sine', 700, 700, 0.05, 0.16, this._out(0, 0, 0.6)); }
  tick() { if (!this.ctx) return; this._tone('square', 1100, 1100, 0.03, 0.07, this._out(0, 0.1, 0.5)); }
  heart() { if (!this.ctx) return; const o = this._out(0, 0, 0.9); this._tone('sine', 62, 38, 0.13, 1, o); this._tone('sine', 56, 34, 0.14, 0.75, o, 0.17); }
  ladder() { if (!this.ctx) return; this._burst(0.04, 1500, 900, 5, 0.5, this._out(0, 0.1, 0.35)); }
  // the angel: a slow cluster of voices
  choir(dur = 4.5, low = false) { if (!this.ctx) return; const c = this.ctx; const o = this._out(0, 1.0, 0.36); const notes = low ? [73.4, 110, 146.8, 174.6, 220] : [146.8, 220, 293.7, 349.2, 440, 587.3];
    notes.forEach((f, i) => { for (const det of [-5, 4]) { const osc = c.createOscillator(); osc.type = i % 2 ? 'triangle' : 'sine'; osc.frequency.value = f; osc.detune.value = det + Math.random() * 4; const lfo = c.createOscillator(); lfo.frequency.value = 4.2 + Math.random(); const lg = c.createGain(); lg.gain.value = 5; lfo.connect(lg); lg.connect(osc.detune); const g = c.createGain(); this._env(g.gain, [[0, 0], [dur * 0.35, 0.16 / (1 + i * 0.25)], [dur * 0.65, 0.12 / (1 + i * 0.25)], [dur, 0.0001, 'exp']], i * 0.05); osc.connect(g); g.connect(o); osc.start(this.t); lfo.start(this.t); osc.stop(this.t + dur + 0.3); lfo.stop(this.t + dur + 0.3); } }); }
  toll(n = 0) { if (!this.ctx) return; const o = this._out(0, 1.0, 0.45); const f = 196 * Math.pow(2, -n / 12); for (const [m, g] of [[1, 0.5], [2.01, 0.25], [2.76, 0.18], [5.4, 0.06]]) this._tone('sine', f * m, f * m * 0.995, 3.2 / m + 0.6, g, o); }
  stinger(win) { if (!this.ctx) return; const o = this._out(0, 0.9, 0.5); const seq = win ? [220, 277.2, 329.6, 440, 554.4] : [220, 207.6, 174.6, 146.8, 110]; seq.forEach((f, i) => { this._tone('triangle', f, f, 1.6, 0.3, o, i * 0.16); this._tone('sine', f * 2, f * 2, 1.2, 0.12, o, i * 0.16); }); }
  // ---- continuous layers
  _ambience() {
    const c = this.ctx; const mk = (type, freq, q, gain) => { const s = c.createBufferSource(); s.buffer = this.noise; s.loop = true; const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const g = c.createGain(); g.gain.value = gain; s.connect(f); f.connect(g); g.connect(this.master); s.start(); return { s, f, g }; };
    this.wind = mk('bandpass', 420, 0.5, 0.075); this.rain = mk('highpass', 5200, 0.3, 0.022);
    const lfo = c.createOscillator(); lfo.frequency.value = 0.07; const lg = c.createGain(); lg.gain.value = 190; lfo.connect(lg); lg.connect(this.wind.f.frequency); lfo.start();
    const dr = c.createGain(); dr.gain.value = 0.05; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 150; for (const f of [36.7, 55.2, 73.6]) { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = Math.random() * 12 - 6; o.connect(lp); o.start(); } lp.connect(dr); dr.connect(this.master); this.drone = dr;
    // zip / zone layers start silent
    this.zipL = mk('bandpass', 900, 6, 0); this.zoneL = mk('bandpass', 180, 2.5, 0);
  }
  setZip(v) { if (this.zipL) { this.zipL.g.gain.setTargetAtTime(v * 0.35, this.t, 0.05); this.zipL.f.frequency.setTargetAtTime(700 + v * 1500, this.t, 0.1); } }
  setZone(v) { if (this.zoneL) this.zoneL.g.gain.setTargetAtTime(v * 0.3, this.t, 0.1); }
  setTension(v) { if (this.drone) this.drone.gain.setTargetAtTime(0.05 + v * 0.07, this.t, 0.5); }
}
