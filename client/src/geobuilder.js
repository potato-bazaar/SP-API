// Growable merged-geometry builder: kit buildings + procedural shapes -> one vertex/index set.
// Vertex: position f32x3, normal i8x3(+pad), uv f32x2, mat u8x4 (layer, mask|tint, flags, extra)
import { F_METAL } from './kit.js';

export class GeoBuilder {
  constructor(vcap = 1 << 16, icap = 1 << 17) {
    this.pos = new Float32Array(vcap * 3); this.nor = new Int8Array(vcap * 4); this.uv = new Float32Array(vcap * 2); this.mat = new Uint8Array(vcap * 4);
    this.idx = new Uint32Array(icap); this.nv = 0; this.ni = 0;
  }
  _growV(n) {
    const need = this.nv + n; let cap = this.pos.length / 3; if (need <= cap) return;
    while (cap < need) cap *= 2;
    const g = (old, a) => { const b = new old.constructor(a); b.set(old); return b; };
    this.pos = g(this.pos, cap * 3); this.nor = g(this.nor, cap * 4); this.uv = g(this.uv, cap * 2); this.mat = g(this.mat, cap * 4);
  }
  _growI(n) { const need = this.ni + n; let cap = this.idx.length; if (need <= cap) return; while (cap < need) cap *= 2; const b = new Uint32Array(cap); b.set(this.idx); this.idx = b; }

  // m: column-major 4x4 (THREE.Matrix4.elements). Assumes rotation about Y + axis scale (normals handled).
  addKit(t, m, posScale, uvScale) {
    this._growV(t.nv); this._growI(t.nt * 3);
    const { i16, u8, i8, idx } = t; const b = this.nv; const P = this.pos, N = this.nor, U = this.uv, M = this.mat;
    // normal matrix = inverse transpose of upper 3x3; for diag scale s & rotation R: R * (1/s)
    const sx = Math.hypot(m[0], m[1], m[2]), sy = Math.hypot(m[4], m[5], m[6]), sz = Math.hypot(m[8], m[9], m[10]);
    const n00 = m[0] / (sx * sx), n10 = m[1] / (sx * sx), n20 = m[2] / (sx * sx), n01 = m[4] / (sy * sy), n11 = m[5] / (sy * sy), n21 = m[6] / (sy * sy), n02 = m[8] / (sz * sz), n12 = m[9] / (sz * sz), n22 = m[10] / (sz * sz);
    for (let v = 0; v < t.nv; v++) {
      const x = i16[v * 8] * posScale, y = i16[v * 8 + 1] * posScale, z = i16[v * 8 + 2] * posScale; const o = (b + v) * 3;
      P[o] = m[0] * x + m[4] * y + m[8] * z + m[12]; P[o + 1] = m[1] * x + m[5] * y + m[9] * z + m[13]; P[o + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
      const nx = i8[v * 16 + 8], ny = i8[v * 16 + 9], nz = i8[v * 16 + 10];
      let wx = n00 * nx + n01 * ny + n02 * nz, wy = n10 * nx + n11 * ny + n12 * nz, wz = n20 * nx + n21 * ny + n22 * nz; const l = 127 / (Math.hypot(wx, wy, wz) || 1);
      const q = (b + v) * 4; N[q] = Math.round(wx * l); N[q + 1] = Math.round(wy * l); N[q + 2] = Math.round(wz * l);
      U[(b + v) * 2] = i16[v * 8 + 6] * uvScale; U[(b + v) * 2 + 1] = i16[v * 8 + 7] * uvScale;
      M[q] = u8[v * 16 + 6]; M[q + 1] = u8[v * 16 + 7]; M[q + 2] = u8[v * 16 + 11]; M[q + 3] = 0;
    }
    const I = this.idx, i0 = this.ni; for (let i = 0; i < idx.length; i++) I[i0 + i] = idx[i] + b;
    this.nv += t.nv; this.ni += idx.length;
  }

  // push a quad (4 corners CCW seen from the normal side) with uv rect
  quad(a, b, c, d, n, mat, u0 = 0, v0 = 0, u1 = 1, v1 = 1) {
    this._growV(4); this._growI(6); const B = this.nv; const P = this.pos, N = this.nor, U = this.uv, M = this.mat;
    const pts = [a, b, c, d], uvs = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
    for (let k = 0; k < 4; k++) {
      const o = (B + k) * 3, q = (B + k) * 4; P[o] = pts[k][0]; P[o + 1] = pts[k][1]; P[o + 2] = pts[k][2];
      N[q] = Math.round(n[0] * 127); N[q + 1] = Math.round(n[1] * 127); N[q + 2] = Math.round(n[2] * 127);
      U[(B + k) * 2] = uvs[k][0]; U[(B + k) * 2 + 1] = uvs[k][1];
      M[q] = mat[0]; M[q + 1] = mat[1]; M[q + 2] = mat[2]; M[q + 3] = mat[3] || 0;
    }
    const I = this.idx, i = this.ni; I[i] = B; I[i + 1] = B + 1; I[i + 2] = B + 2; I[i + 3] = B; I[i + 4] = B + 2; I[i + 5] = B + 3; this.nv += 4; this.ni += 6;
  }

  // oriented box: centre c, half sizes h, rotation about Y (radians). uvTile: metres per uv unit. faces: bitmask to skip (1=bottom)
  box(cx, cy, cz, hx, hy, hz, rot, mat, uvTile = 4, skipBottom = true) {
    const cs = Math.cos(rot), sn = Math.sin(rot);
    const T = (x, y, z) => [cx + x * cs + z * sn, cy + y, cz - x * sn + z * cs];
    const Nn = (x, y, z) => [x * cs + z * sn, y, -x * sn + z * cs];
    const t = 1 / uvTile;
    // +X, -X, +Z, -Z, +Y, -Y
    this.quad(T(hx, -hy, hz), T(hx, -hy, -hz), T(hx, hy, -hz), T(hx, hy, hz), Nn(1, 0, 0), mat, 0, 0, 2 * hz * t, 2 * hy * t);
    this.quad(T(-hx, -hy, -hz), T(-hx, -hy, hz), T(-hx, hy, hz), T(-hx, hy, -hz), Nn(-1, 0, 0), mat, 0, 0, 2 * hz * t, 2 * hy * t);
    this.quad(T(-hx, -hy, hz), T(hx, -hy, hz), T(hx, hy, hz), T(-hx, hy, hz), Nn(0, 0, 1), mat, 0, 0, 2 * hx * t, 2 * hy * t);
    this.quad(T(hx, -hy, -hz), T(-hx, -hy, -hz), T(-hx, hy, -hz), T(hx, hy, -hz), Nn(0, 0, -1), mat, 0, 0, 2 * hx * t, 2 * hy * t);
    this.quad(T(-hx, hy, hz), T(hx, hy, hz), T(hx, hy, -hz), T(-hx, hy, -hz), [0, 1, 0], mat, 0, 0, 2 * hx * t, 2 * hz * t);
    if (!skipBottom) this.quad(T(-hx, -hy, -hz), T(hx, -hy, -hz), T(hx, -hy, hz), T(-hx, -hy, hz), [0, -1, 0], mat, 0, 0, 2 * hx * t, 2 * hz * t);
  }

  // vertical cylinder (or cone frustum) with caps
  cyl(cx, cy, cz, r0, r1, h, seg, mat, uvTile = 4, capTop = true, capBottom = false) {
    const y0 = cy - h / 2, y1 = cy + h / 2; const t = 1 / uvTile;
    for (let s = 0; s < seg; s++) {
      const a0 = (s / seg) * Math.PI * 2, a1 = ((s + 1) / seg) * Math.PI * 2; const am = (a0 + a1) / 2;
      const p0 = [cx + Math.cos(a0) * r0, y0, cz + Math.sin(a0) * r0], p1 = [cx + Math.cos(a1) * r0, y0, cz + Math.sin(a1) * r0];
      const p2 = [cx + Math.cos(a1) * r1, y1, cz + Math.sin(a1) * r1], p3 = [cx + Math.cos(a0) * r1, y1, cz + Math.sin(a0) * r1];
      this.quad(p1, p0, p3, p2, [Math.cos(am), 0, Math.sin(am)], mat, a1 * r0 * t, 0, a0 * r0 * t, h * t);
      if (capTop) this.tri([cx, y1, cz], p2, p3, [0, 1, 0], mat);
      if (capBottom) this.tri([cx, y0, cz], p0, p1, [0, -1, 0], mat);
    }
  }
  tri(a, b, c, n, mat) {
    this._growV(3); this._growI(3); const B = this.nv; const pts = [a, b, c];
    for (let k = 0; k < 3; k++) {
      const o = (B + k) * 3, q = (B + k) * 4; this.pos[o] = pts[k][0]; this.pos[o + 1] = pts[k][1]; this.pos[o + 2] = pts[k][2];
      this.nor[q] = Math.round(n[0] * 127); this.nor[q + 1] = Math.round(n[1] * 127); this.nor[q + 2] = Math.round(n[2] * 127);
      this.uv[(B + k) * 2] = pts[k][0] * 0.25; this.uv[(B + k) * 2 + 1] = pts[k][2] * 0.25;
      this.mat[q] = mat[0]; this.mat[q + 1] = mat[1]; this.mat[q + 2] = mat[2]; this.mat[q + 3] = mat[3] || 0;
    }
    this.idx[this.ni] = B; this.idx[this.ni + 1] = B + 1; this.idx[this.ni + 2] = B + 2; this.nv += 3; this.ni += 3;
  }
  // thin beam between two points (square section), for rails / struts / posts at any angle
  beam(a, b, w, mat) {
    const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2]; const len = Math.hypot(dx, dy, dz); if (len < 1e-5) return;
    const d = [dx / len, dy / len, dz / len];
    let up = Math.abs(d[1]) > 0.95 ? [1, 0, 0] : [0, 1, 0];
    let s = [d[1] * up[2] - d[2] * up[1], d[2] * up[0] - d[0] * up[2], d[0] * up[1] - d[1] * up[0]]; let sl = Math.hypot(s[0], s[1], s[2]); s = s.map(v => v / sl * w / 2);
    let u = [d[1] * s[2] - d[2] * s[1], d[2] * s[0] - d[0] * s[2], d[0] * s[1] - d[1] * s[0]]; let ul = Math.hypot(u[0], u[1], u[2]); u = u.map(v => v / ul * w / 2);
    const P = (base, i, j) => [base[0] + s[0] * i + u[0] * j, base[1] + s[1] * i + u[1] * j, base[2] + s[2] * i + u[2] * j];
    const nrm = v => { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; };
    const t = len / 4;
    this.quad(P(a, 1, -1), P(a, 1, 1), P(b, 1, 1), P(b, 1, -1), nrm(s), mat, 0, 0, 0.1, t);
    this.quad(P(a, -1, 1), P(a, -1, -1), P(b, -1, -1), P(b, -1, 1), nrm(s.map(v => -v)), mat, 0, 0, 0.1, t);
    this.quad(P(a, 1, 1), P(a, -1, 1), P(b, -1, 1), P(b, 1, 1), nrm(u), mat, 0, 0, 0.1, t);
    this.quad(P(a, -1, -1), P(a, 1, -1), P(b, 1, -1), P(b, -1, -1), nrm(u.map(v => -v)), mat, 0, 0, 0.1, t);
  }

  // ramp / wedge: from the low-end centre a (floor level) up to the high-end centre b (top lip); solid down to a's height
  ramp(a, b, hw, mat, uvTile = 2) {
    const dx = b[0] - a[0], dz = b[2] - a[2]; const len = Math.hypot(dx, dz); if (len < 1e-4) return; const ux = dx / len, uz = dz / len; const X = [uz * hw, -ux * hw]; const y0 = a[1], y1 = b[1], H = y1 - y0;
    const aP = [a[0] + X[0], y0, a[2] + X[1]], aM = [a[0] - X[0], y0, a[2] - X[1]], bP = [b[0] + X[0], y1, b[2] + X[1]], bM = [b[0] - X[0], y1, b[2] - X[1]], cP = [b[0] + X[0], y0, b[2] + X[1]], cM = [b[0] - X[0], y0, b[2] - X[1]];
    const sl = Math.hypot(len, H), t = 1 / uvTile;
    this.quad(aP, aM, bM, bP, [-ux * H / sl, len / sl, -uz * H / sl], mat, 0, 0, 2 * hw * t, sl * t);
    this.quad(cM, cP, bP, bM, [ux, 0, uz], mat, 0, 0, 2 * hw * t, H * t);
    this.tri(cP, aP, bP, [uz, 0, -ux], mat); this.tri(aM, cM, bM, [-uz, 0, ux], mat);
  }

  // apply a shape record (see arena shapes) -- compact arrays so the same data drives offline + runtime builds
  shape(s) {
    switch (s[0]) {
      case 'b': this.box(s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8], s[9] ?? 4); break;
      case 'c': this.cyl(s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8], s[9] ?? 4, true, s[10] ?? false); break;
      case 'm': this.beam(s[1], s[2], s[3], s[4]); break;
      case 'w': this.ramp(s[1], s[2], s[3], s[4], s[5] ?? 2); break;
      case 'q': this.quad(s[1], s[2], s[3], s[4], s[5], s[6], s[7] ?? 0, s[8] ?? 0, s[9] ?? 1, s[10] ?? 1); break;
    }
  }
  arrays() {
    return { position: this.pos.subarray(0, this.nv * 3), normal: this.nor.subarray(0, this.nv * 4), uv: this.uv.subarray(0, this.nv * 2), mat: this.mat.subarray(0, this.nv * 4), index: this.idx.subarray(0, this.ni) };
  }
}
export const MAT_METAL_DARK = [255, 34, F_METAL, 0];
