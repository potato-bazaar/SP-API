// Runtime view of the baked arena: roofs, nav grids, traversal links, ray helpers.
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { GeoBuilder } from './geobuilder.js';
import { flatArena } from './ring.js';

const _ray = new THREE.Ray(), _v = new THREE.Vector3(), _v2 = new THREE.Vector3();
export const G = 22;

export class Arena {
  constructor(data, bvh) {
    this.data = data; this.bvh = bvh; this.cell = data.cell; this.zone = data.zone;
    this.roofs = data.roofs.map((r, i) => {
      const bin = atob(r.grid.m); const m = new Uint8Array(bin.length); for (let k = 0; k < bin.length; k++) m[k] = bin.charCodeAt(k);
      return { ...r, i, m, nx: r.grid.nx, nz: r.grid.nz, ox: r.grid.ox, oz: r.grid.oz, x0: r.x - r.hx, x1: r.x + r.hx, z0: r.z - r.hz, z1: r.z + r.hz, links: [], cells: [] };
    });
    for (const r of this.roofs) for (let k = 0; k < r.m.length; k++) if (r.m[k]) r.cells.push(k);
    // cell distances from the zone centre, sorted: "how much of this roof is still inside radius R" in O(log n)
    const zc = data.zone.center; for (const r of this.roofs) { r.cellD = Float32Array.from(r.cells.map(k => Math.hypot(r.ox + ((k % r.nx) + 0.5) * this.cell - zc[0], r.oz + (((k / r.nx) | 0) + 0.5) * this.cell - zc[1]))).sort(); r.dist = Math.hypot(r.x - zc[0], r.z - zc[1]); }
    this.links = data.links.map((l, i) => ({ ...l, i, p0: new THREE.Vector3(...l.p0), p1: new THREE.Vector3(...l.p1), k0: l.k0 ? new THREE.Vector3(...l.k0) : null, k1: l.k1 ? new THREE.Vector3(...l.k1) : null }));
    for (const l of this.links) { this.roofs[l.a].links.push({ link: l, dir: 0, to: l.b }); if (!l.oneWay) this.roofs[l.b].links.push({ link: l, dir: 1, to: l.a }); }
    this.spawns = this.roofs.filter(r => r.spawn >= 0).sort((a, b) => a.spawn - b.spawn);
    // invisible rails above the parapets: they stop the player's body only (never rays), so a stray jump cannot carry you off a tower
    this.fenceBvh = null; if (data.fence && data.fence.length) { const gb = new GeoBuilder(1 << 12, 1 << 13); for (const s of data.fence) gb.shape(s); const a = gb.arrays(); const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(a.position.slice(), 3)); geo.setIndex(new THREE.BufferAttribute(a.index.slice(), 1)); this.fenceBvh = new MeshBVH(geo); }
  }
  safeCount(r, radius) { const a = r.cellD; let lo = 0, hi = a.length; while (lo < hi) { const m = (lo + hi) >> 1; if (a[m] < radius) lo = m + 1; else hi = m; } return lo; }
  roofAt(x, z, y = null) { let best = -1, bd = 1e9; for (const r of this.roofs) { if (x < r.x0 - 0.35 || x > r.x1 + 0.35 || z < r.z0 - 0.35 || z > r.z1 + 0.35) continue; const d = y == null ? 0 : Math.abs(y - r.roofY); if (d < bd) { bd = d; best = r.i; } } return bd < 3.5 || y == null ? best : -1; }
  cellAt(r, x, z) { const i = Math.floor((x - r.ox) / this.cell), j = Math.floor((z - r.oz) / this.cell); if (i < 0 || j < 0 || i >= r.nx || j >= r.nz) return -1; return j * r.nx + i; }
  walk(r, x, z) { const k = this.cellAt(r, x, z); return k >= 0 && r.m[k] === 1; }
  cellPos(r, k, out = new THREE.Vector3()) { return out.set(r.ox + ((k % r.nx) + 0.5) * this.cell, r.roofY, r.oz + (((k / r.nx) | 0) + 0.5) * this.cell); }
  nearestCell(r, x, z) { let k = this.cellAt(r, x, z); if (k >= 0 && r.m[k]) return k; let best = -1, bd = 1e9; for (const c of r.cells) { const cx = r.ox + ((c % r.nx) + 0.5) * this.cell, cz = r.oz + (((c / r.nx) | 0) + 0.5) * this.cell; const d = (cx - x) ** 2 + (cz - z) ** 2; if (d < bd) { bd = d; best = c; } } return best; }
  // straight walk possible between two points on one roof?
  clearWalk(r, ax, az, bx, bz) { const d = Math.hypot(bx - ax, bz - az); const n = Math.ceil(d / (this.cell * 0.5)); for (let s = 0; s <= n; s++) { const t = n ? s / n : 0; if (!this.walk(r, ax + (bx - ax) * t, az + (bz - az) * t)) return false; } return true; }
  // A* on the roof grid, then string-pulled. returns [{x,z}, ...] excluding the start
  path(r, ax, az, bx, bz) {
    if (this.clearWalk(r, ax, az, bx, bz)) return [{ x: bx, z: bz }];
    const s = this.nearestCell(r, ax, az), g = this.nearestCell(r, bx, bz); if (s < 0 || g < 0) return [{ x: bx, z: bz }]; if (s === g) return [{ x: bx, z: bz }];
    const nx = r.nx, nz = r.nz, N = nx * nz; const gs = new Float32Array(N).fill(1e9), from = new Int32Array(N).fill(-1), closed = new Uint8Array(N); const open = [s]; gs[s] = 0; const gx = g % nx, gz = (g / nx) | 0;
    const h = (k) => { const dx = Math.abs((k % nx) - gx), dz = Math.abs(((k / nx) | 0) - gz); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
    let found = false, guard = 0;
    while (open.length && guard++ < 4000) {
      let bi = 0, bf = 1e9; for (let i = 0; i < open.length; i++) { const f = gs[open[i]] + h(open[i]); if (f < bf) { bf = f; bi = i; } }
      const k = open[bi]; open[bi] = open[open.length - 1]; open.pop(); if (k === g) { found = true; break; } if (closed[k]) continue; closed[k] = 1; const ci = k % nx, cj = (k / nx) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) { if (!di && !dj) continue; const a = ci + di, b = cj + dj; if (a < 0 || b < 0 || a >= nx || b >= nz) continue; const q = b * nx + a; if (!r.m[q] || closed[q]) continue; if (di && dj && (!r.m[cj * nx + a] || !r.m[b * nx + ci])) continue; const c = gs[k] + (di && dj ? 1.414 : 1); if (c < gs[q]) { gs[q] = c; from[q] = k; open.push(q); } }
    }
    if (!found) return [{ x: bx, z: bz }];
    const pts = []; for (let k = g; k !== s && k >= 0; k = from[k]) pts.push(this.cellPos(r, k)); pts.reverse(); pts[pts.length - 1] = { x: bx, z: bz };
    // string pulling
    const out = []; let cx = ax, cz = az, i = 0; while (i < pts.length) { let j = pts.length - 1; while (j > i && !this.clearWalk(r, cx, cz, pts[j].x, pts[j].z)) j--; out.push({ x: pts[j].x, z: pts[j].z }); cx = pts[j].x; cz = pts[j].z; i = j + 1; }
    return out;
  }
  // cheapest chain of links from roof a to any roof accepted by ok(roof). returns [{link, dir, to}] or null
  route(a, ok, blocked = null) {
    const n = this.roofs.length; const dist = new Float32Array(n).fill(1e9), prev = new Array(n).fill(null), done = new Uint8Array(n); dist[a] = 0;
    for (;;) { let u = -1, bd = 1e9; for (let i = 0; i < n; i++) if (!done[i] && dist[i] < bd) { bd = dist[i]; u = i; } if (u < 0) return null; if (u !== a && ok(this.roofs[u])) { const path = []; for (let c = u; c !== a; c = prev[c].from) path.push(prev[c].e); return path.reverse(); } done[u] = 1;
      for (const e of this.roofs[u].links) { if (blocked && blocked(e)) continue; const c = dist[u] + e.link.time + 3; if (c < dist[e.to]) { dist[e.to] = c; prev[e.to] = { from: u, e }; } } }
  }
  // boxes that can be shot and broken (LOOP CITY's walls): the first one a ray meets, as {distance, point, face, dyn}
  _rayDyn(o, d, maxD) {
    let best = null, bt = maxD, ax = 0, sg = 1;
    for (const b of this.dyn) {
      let t0 = 0, t1 = bt, a = -1, s = 1, ok = true;
      for (let k = 0; k < 3; k++) { const p = k === 0 ? o.x : k === 1 ? o.y : o.z, v = k === 0 ? d.x : k === 1 ? d.y : d.z, lo = k === 0 ? b.min.x : k === 1 ? b.min.y : b.min.z, hi = k === 0 ? b.max.x : k === 1 ? b.max.y : b.max.z;
        if (Math.abs(v) < 1e-9) { if (p < lo || p > hi) { ok = false; break; } continue; }
        let u0 = (lo - p) / v, u1 = (hi - p) / v, f = -1; if (u0 > u1) { const q = u0; u0 = u1; u1 = q; f = 1; }
        if (u0 > t0) { t0 = u0; a = k; s = f; } if (u1 < t1) t1 = u1; if (t0 > t1) { ok = false; break; } }
      if (ok && a >= 0 && t0 > 1e-4 && t0 < bt) { bt = t0; best = b; ax = a; sg = s; }
    }
    if (!best) return null;
    return { distance: bt, point: new THREE.Vector3(o.x + d.x * bt, o.y + d.y * bt, o.z + d.z * bt), face: { normal: new THREE.Vector3(ax === 0 ? sg : 0, ax === 1 ? sg : 0, ax === 2 ? sg : 0) }, dyn: best };
  }
  raycast(o, d, maxD = 400) { _ray.origin.copy(o); _ray.direction.copy(d); const h = this.bvh.raycastFirst(_ray, THREE.DoubleSide, 0, maxD); return h || null; }
  los(a, b) { _v.copy(b).sub(a); const len = _v.length(); if (len < 0.01) return true; _ray.origin.copy(a); _ray.direction.copy(_v).multiplyScalar(1 / len); return !this.bvh.raycastFirst(_ray, THREE.DoubleSide, 0, len - 0.05); }
  groundY(x, z, yTop, maxD = 6) { _ray.origin.set(x, yTop, z); _ray.direction.set(0, -1, 0); const h = this.bvh.raycastFirst(_ray, THREE.DoubleSide, 0, maxD); return h ? h.point.y : null; }

  // ---- link kinematics: position of a traveller at normalised time u (0..1), going a->b (dir 0) or b->a (dir 1)
  linkEnds(l, dir) { return dir ? [l.p1, l.p0] : [l.p0, l.p1]; }
  linkDuration(l) { return l.time; }
  linkPos(l, dir, u, out) {
    const [A, B] = this.linkEnds(l, dir);
    if (l.kind === 'zip') { const lift = l.lift; const e = 0.12; // hop up, ride, drop
      if (u < e) return out.copy(A).setY(A.y + lift * (u / e)); if (u > 1 - e) return out.copy(B).setY(B.y + lift * ((1 - u) / e)); const t = (u - e) / (1 - 2 * e); return out.copy(A).lerp(B, t).setY(A.y + (B.y - A.y) * t + lift); }
    if (l.kind === 'pad') { const t = u * l.time; return out.set(A.x + l.v[0] * t, A.y + l.v[1] * t - 0.5 * G * t * t, A.z + l.v[2] * t); }
    if (l.kind === 'jump' && l.k0) { // up the kicker, across the gap, down the far kicker
      const K0 = dir ? l.k1 : l.k0, K1 = dir ? l.k0 : l.k1; const s0 = dir ? 1 - l.seg[1] : l.seg[0], s1 = dir ? 1 - l.seg[0] : l.seg[1];
      if (u < s0) return out.copy(A).lerp(K0, u / s0); if (u > s1) return out.copy(K1).lerp(B, (u - s1) / (1 - s1)); const v = (u - s0) / (s1 - s0); return out.copy(K0).lerp(K1, v).setY(K0.y + (K1.y - K0.y) * v + 1.05 * 4 * v * (1 - v)); }
    if (l.kind === 'jump' || l.kind === 'step') { const apex = (l.kind === 'jump' ? 1.25 : 0.55) + Math.max(0, B.y - A.y); const y = A.y + (B.y - A.y) * u + apex * 4 * u * (1 - u) * (B.y > A.y ? (1 - u * 0.5) : (0.5 + u * 0.5)); return out.copy(A).lerp(B, u).setY(Math.max(y, A.y + (B.y - A.y) * u)); }
    if (l.kind === 'ladder') { // lower anchor -> foot of ladder -> climb -> top anchor
      const lo = l.p0, hi = l.p1; const base = _v2.set(l.wall[0] - l.n[0] * 0.42, lo.y, l.wall[1] - l.n[1] * 0.42); const uu = dir ? 1 - u : u; const a = 0.12, b = 0.86;
      if (uu < a) return out.copy(lo).lerp(base, uu / a); if (uu < b) return out.copy(base).setY(lo.y + (hi.y - lo.y) * ((uu - a) / (b - a))); return out.copy(base).setY(hi.y).lerp(hi, (uu - b) / (1 - b)); }
    return out.copy(A).lerp(B, u);
  }
  linkMode(l, u, dir = 0) { if (l.kind === 'jump' && l.seg) { const uu = dir ? 1 - u : u; return uu < l.seg[0] || uu > l.seg[1] ? 'ground' : 'air'; } return l.kind === 'zip' ? (u > 0.1 && u < 0.92 ? 'zip' : 'air') : l.kind === 'ladder' ? (u > 0.1 && u < 0.88 ? 'ladder' : 'ground') : 'air'; }
  linkLabel(l) { return { zip: 'ZIPLINE', pad: 'LAUNCH PAD', ladder: 'LADDER', jump: 'RAMP', step: 'CLIMB' }[l.kind]; }
}
// rel / dist / see ... : on this flat map they are plain vector maths; a ring map (ring.js) replaces them per arena
flatArena(Arena.prototype);
