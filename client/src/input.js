// Keyboard + mouse (pointer lock when the frame allows it, free-look fallback when it does not) and touch controls.
export class Input {
  constructor(canvas, ui) {
    this.canvas = canvas; this.ui = ui; this.keys = new Set(); this.down = {}; this.edge = {}; this.lookX = 0; this.lookY = 0; this.moveX = 0; this.moveY = 0;
    this.locked = false; this.lockFailed = false; this.everLocked = false; this.touch = false; this.enabled = false; this.wheel = 0; this.sens = 1; this.mouseBtn = [false, false, false];
    this.cursor = { x: 0.5, y: 0.5, inside: false }; this.stick = { id: -1, ox: 0, oy: 0, x: 0, y: 0 }; this.lookTouch = { id: -1, x: 0, y: 0 }; this.fireTouch = { id: -1, x: 0, y: 0, moved: 0 };
    const kd = (e) => { if (e.repeat) { if (this.enabled) e.preventDefault(); return; } this.keys.add(e.code); const a = MAP[e.code]; if (a) { this._press(a); if (this.enabled) e.preventDefault(); } if (e.code === 'Tab' && this.enabled) e.preventDefault(); };
    const ku = (e) => { this.keys.delete(e.code); const a = MAP[e.code]; if (a) this._release(a); };
    window.addEventListener('keydown', kd); window.addEventListener('keyup', ku);
    window.addEventListener('blur', () => { this.keys.clear(); for (const k in this.down) this.down[k] = false; this.mouseBtn = [false, false, false]; });
    canvas.addEventListener('mousedown', (e) => { if (this.touch) return; if (!this.enabled) return; e.preventDefault(); if (!this.locked && !this.lockFailed) { this.requestLock(); return; }   // the click that takes the mouse is not a shot
      this.mouseBtn[e.button] = true; if (e.button === 0) this._press('fire'); if (e.button === 2) this._press('ads'); });
    window.addEventListener('mouseup', (e) => { this.mouseBtn[e.button] = false; if (e.button === 0) this._release('fire'); if (e.button === 2) this._release('ads'); });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (this.touch || !this.enabled) return;
      if (this.locked) { this.lookX += e.movementX || 0; this.lookY += e.movementY || 0; }
      else { const r = canvas.getBoundingClientRect(); this.cursor.x = (e.clientX - r.left) / r.width; this.cursor.y = (e.clientY - r.top) / r.height; this.cursor.inside = this.cursor.x >= 0 && this.cursor.x <= 1 && this.cursor.y >= 0 && this.cursor.y <= 1; if (this.lockFailed && this.cursor.inside) { this.lookX += e.movementX || 0; this.lookY += e.movementY || 0; } }
    });
    canvas.addEventListener('wheel', (e) => { if (this.enabled) { this.wheel += Math.sign(e.deltaY); e.preventDefault(); } }, { passive: false });
    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === canvas; if (this.locked) this.everLocked = true; if (this.onLockChange) this.onLockChange(this.locked); });
    document.addEventListener('pointerlockerror', () => this._lockError());
    // any touch anywhere (the Deploy button included) switches to thumb controls before the match starts
    window.addEventListener('touchstart', () => { if (!this.touch) { this.touch = true; if (this.onTouchMode) this.onTouchMode(); } }, { capture: true, passive: true });
    this._touchSetup();
  }
  requestLock() { if (this.touch || this.lockFailed) return; if (!this.canvas.requestPointerLock) { this.lockFailed = true; if (this.onLockChange) this.onLockChange(false); return; } try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => this._lockError()); } catch (e) { this._lockError(); } }
  // a frame that never grants the lock gets free-look for good; a lock that worked before and fails now (asked again too soon after Esc) is only a hiccup
  _lockError() { const now = performance.now(); if (now - (this._lastErr || -1e9) < 80) return; this._lastErr = now; if (!this.everLocked) { this.lockFailed = true; if (this.onLockChange) this.onLockChange(false); } else if (this.onLockError) this.onLockError(); }
  exitLock() { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* ignore */ } }
  _press(a) { if (!this.down[a]) this.edge[a] = true; this.down[a] = true; }
  _release(a) { this.down[a] = false; if (a === 'fire') this.edge.fireUp = true; }
  pressed(a) { return !!this.edge[a]; }
  held(a) { return !!this.down[a]; }
  // call once per frame after the game consumed the state
  endFrame() { for (const k in this.edge) this.edge[k] = false; this.lookX = 0; this.lookY = 0; this.wheel = 0; }
  // movement vector (x: right, y: forward) and free-look edge turning
  poll(dt) {
    let x = 0, y = 0; const K = this.keys;
    if (K.has('KeyW') || K.has('ArrowUp')) y += 1; if (K.has('KeyS') || K.has('ArrowDown')) y -= 1; if (K.has('KeyD') || K.has('ArrowRight')) x += 1; if (K.has('KeyA') || K.has('ArrowLeft')) x -= 1;
    if (this.stick.id >= 0) { x = this.stick.x; y = this.stick.y; }
    const l = Math.hypot(x, y); if (l > 1) { x /= l; y /= l; } this.moveX = x; this.moveY = y;
    this.sprintStick = this.stick.id >= 0 && l > 0.92 && y > 0.6;
    // free-look fallback: cursor near the frame edge keeps the view turning
    if (!this.touch && !this.locked && this.lockFailed && this.cursor.inside && this.enabled) { const ex = this.cursor.x < 0.12 ? -(0.12 - this.cursor.x) / 0.12 : this.cursor.x > 0.88 ? (this.cursor.x - 0.88) / 0.12 : 0; const ey = this.cursor.y < 0.1 ? -(0.1 - this.cursor.y) / 0.1 : this.cursor.y > 0.9 ? (this.cursor.y - 0.9) / 0.1 : 0; this.lookX += ex * 900 * dt; this.lookY += ey * 500 * dt; }
  }
  _touchSetup() {
    const cv = this.canvas; const opts = { passive: false };
    const start = (e) => {
      if (!this.touch) { this.touch = true; if (this.onTouchMode) this.onTouchMode(); } if (!this.enabled) return; e.preventDefault();
      for (const t of e.changedTouches) { const r = cv.getBoundingClientRect(); const fx = (t.clientX - r.left) / r.width;
        if (fx < 0.42 && this.stick.id < 0) { this.stick.id = t.identifier; this.stick.ox = t.clientX; this.stick.oy = t.clientY; this.stick.x = this.stick.y = 0; if (this.onStick) this.onStick(true, t.clientX, t.clientY, 0, 0); }
        else if (this.lookTouch.id < 0) { this.lookTouch.id = t.identifier; this.lookTouch.x = t.clientX; this.lookTouch.y = t.clientY; } }
    };
    const move = (e) => {
      if (!this.enabled) return; e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.identifier === this.stick.id) { const R = 56; let dx = (t.clientX - this.stick.ox) / R, dy = (t.clientY - this.stick.oy) / R; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; } this.stick.x = dx; this.stick.y = -dy; if (this.onStick) this.onStick(true, this.stick.ox, this.stick.oy, dx, dy); }
        else if (t.identifier === this.lookTouch.id) { this.lookX += (t.clientX - this.lookTouch.x) * 2.1; this.lookY += (t.clientY - this.lookTouch.y) * 2.1; this.lookTouch.x = t.clientX; this.lookTouch.y = t.clientY; }
      }
    };
    const end = (e) => { for (const t of e.changedTouches) { if (t.identifier === this.stick.id) { this.stick.id = -1; this.stick.x = this.stick.y = 0; if (this.onStick) this.onStick(false); } if (t.identifier === this.lookTouch.id) this.lookTouch.id = -1; } };
    cv.addEventListener('touchstart', start, opts); cv.addEventListener('touchmove', move, opts); cv.addEventListener('touchend', end, opts); cv.addEventListener('touchcancel', end, opts);
  }
  // bind an on-screen button. mode: 'tap' (edge), 'hold', 'toggle', 'fire' (drag to aim, release to shoot)
  bindButton(el, action, mode = 'tap') {
    const opts = { passive: false }; let id = -1, lx = 0, ly = 0;
    el.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); this.touch = true; if (!this.enabled) return; const t = e.changedTouches[0]; id = t.identifier; lx = t.clientX; ly = t.clientY; el.classList.add('on');
      if (mode === 'toggle') { this.down[action] = !this.down[action]; this.edge[action] = true; el.classList.toggle('lit', this.down[action]); } else if (mode === 'fire') { this.fireTouch.id = id; this.edge.fireDown = true; } else this._press(action); }, opts);
    el.addEventListener('touchmove', (e) => { e.preventDefault(); e.stopPropagation(); if (mode !== 'fire' && mode !== 'hold') return; for (const t of e.changedTouches) if (t.identifier === id) { this.lookX += (t.clientX - lx) * 1.7; this.lookY += (t.clientY - ly) * 1.7; lx = t.clientX; ly = t.clientY; } }, opts);
    const up = (e) => { e.preventDefault(); e.stopPropagation(); for (const t of e.changedTouches) if (t.identifier === id) { id = -1; el.classList.remove('on'); if (mode === 'fire') { this.fireTouch.id = -1; this.edge.fire = true; this.edge.fireUp = true; } else if (mode !== 'toggle') this._release(action); } };
    el.addEventListener('touchend', up, opts); el.addEventListener('touchcancel', up, opts);
    // mouse fallback so the buttons also work with a pointer (tablets with mice, testing)
    el.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); if (!this.enabled) return; if (mode === 'toggle') { this.down[action] = !this.down[action]; this.edge[action] = true; el.classList.toggle('lit', this.down[action]); } else if (mode === 'fire') this.edge.fire = true; else this._press(action); });
    el.addEventListener('mouseup', (e) => { e.stopPropagation(); if (mode !== 'toggle' && mode !== 'fire') this._release(action); });
  }
  setToggle(action, v, el) { this.down[action] = v; if (el) el.classList.toggle('lit', v); }
}
const MAP = { Space: 'jump', ShiftLeft: 'sprint', ShiftRight: 'sprint', ControlLeft: 'crouch', KeyC: 'crouch', KeyR: 'reload', KeyE: 'use', KeyF: 'use', KeyQ: 'swap', Digit1: 'w1', Digit2: 'w2', KeyZ: 'zoom', KeyX: 'zoom', Escape: 'pause', KeyP: 'pause', KeyM: 'mute', Tab: 'map', Enter: 'confirm' };
