// Ring maps (LOOP CITY). The city is a strip bent into a wheel; you stand on the inside of the rim and the hub is "up".
//
// Everything is simulated on the UNROLLED strip (the "chart"): x = distance along the ring (wraps at +-C/2),
// y = height above the floor toward the hub, z = across the strip. Walking, roofs, nav grids and links therefore
// work exactly as on a flat map. What does not survive unrolling is a straight line through the air: a shot or a
// sight line that is straight in the real ring is a curve on the chart. Those are traced in the real ring.
//
// Rule of thumb used everywhere: stored positions are chart positions. A ray (o, d) is given in the flat frame
// that touches the ring under o ("the world as it looks from o"); rel(a, b) is where b appears from a.
//
// This file has no imports so the game server can load it as a module and the client bundle can carry a copy.
export function ringKit(T) {
  const { Vector3, Ray, DoubleSide, MeshBVH, BufferGeometry, BufferAttribute } = T;
  const LOCAL = 8;      // rays shorter than this stay on the chart (footing, ledges, decals); the bend over 8 m is ~30 cm at its far end
  const MARGIN = 16;    // chart collision is repeated this far past the seam so nothing notices it

  // ------------------------------------------------------------------ the geometry pack (client/tools/pack_loop.py)
  function parsePack(buf) {
    const u8 = new Uint8Array(buf); if (u8[0] !== 83 || u8[1] !== 67 || u8[2] !== 76 || u8[3] !== 80) throw new Error('not a loop pack');
    const jl = new DataView(buf).getUint32(4, true); const head = JSON.parse(new TextDecoder().decode(u8.subarray(8, 8 + jl))); const base = 8 + jl;
    for (const g of head.groups) {
      const q = new Int16Array(buf, base + g.pos, g.nv * 4), t = new Int16Array(buf, base + g.uv, g.nv * 2);
      const pos = new Float32Array(g.nv * 3), nrm = new Float32Array(g.nv * 3), uv = new Float32Array(g.nv * 2);
      for (let i = 0; i < g.nv; i++) {
        pos[i * 3] = q[i * 4] * head.posScale; pos[i * 3 + 1] = q[i * 4 + 1] * head.posScale; pos[i * 3 + 2] = q[i * 4 + 2] * head.posScale;
        const v = q[i * 4 + 3]; let x = ((v << 24) >> 24) / 127, y = (v >> 8) / 127; const z = 1 - Math.abs(x) - Math.abs(y);   // octahedral normal
        if (z < 0) { const ox = x; x = (1 - Math.abs(y)) * (ox >= 0 ? 1 : -1); y = (1 - Math.abs(ox)) * (y >= 0 ? 1 : -1); }
        const l = Math.hypot(x, y, z) || 1; nrm[i * 3] = x / l; nrm[i * 3 + 1] = y / l; nrm[i * 3 + 2] = z / l;
        uv[i * 2] = t[i * 2] * head.uvScale; uv[i * 2 + 1] = t[i * 2 + 1] * head.uvScale;
      }
      g.posA = pos; g.nrmA = nrm; g.uvA = uv; g.idxA = g.i32 ? new Uint32Array(buf, base + g.idx, g.nt * 3) : new Uint16Array(buf, base + g.idx, g.nt * 3);
    }
    return head;
  }

  // Cut every triangle along the planes x = x0 + k*s. A flat triangle drawn across several degrees of the ring would be a
  // chord that floats off the curve; after this no triangle is wider than one facet. Shared edges are cut at shared points.
  function tessellate(pos, nrm, uv, idx, s, x0) {
    const P = Array.from(pos), N = Array.from(nrm), U = uv ? Array.from(uv) : null, I = []; const cache = new Map();
    const cut = (a, b, k) => {
      let lo = a, hi = b; if (P[a * 3] > P[b * 3] || (P[a * 3] === P[b * 3] && a > b)) { lo = b; hi = a; }
      const key = ((lo < hi ? lo : hi) * 1048576 + (lo < hi ? hi : lo)) * 512 + (k & 511); let v = cache.get(key); if (v !== undefined) return v;
      const X = x0 + k * s, xa = P[lo * 3], xb = P[hi * 3], t = xb === xa ? 0 : (X - xa) / (xb - xa); v = P.length / 3;
      P.push(X, P[lo * 3 + 1] + (P[hi * 3 + 1] - P[lo * 3 + 1]) * t, P[lo * 3 + 2] + (P[hi * 3 + 2] - P[lo * 3 + 2]) * t);
      let nx = N[lo * 3] + (N[hi * 3] - N[lo * 3]) * t, ny = N[lo * 3 + 1] + (N[hi * 3 + 1] - N[lo * 3 + 1]) * t, nz = N[lo * 3 + 2] + (N[hi * 3 + 2] - N[lo * 3 + 2]) * t; const l = Math.hypot(nx, ny, nz) || 1; N.push(nx / l, ny / l, nz / l);
      if (U) U.push(U[lo * 2] + (U[hi * 2] - U[lo * 2]) * t, U[lo * 2 + 1] + (U[hi * 2 + 1] - U[lo * 2 + 1]) * t);
      cache.set(key, v); return v;
    };
    // polygon vertices are [index, edgeA, edgeB]: a corner has edgeA = -1, a cut point remembers the original edge it sits on
    const clip = (poly, k, keepGE) => {
      const X = x0 + k * s, out = [], n = poly.length;
      for (let i = 0; i < n; i++) {
        const p = poly[i], q = poly[(i + 1) % n]; const dp = P[p[0] * 3] - X, dq = P[q[0] * 3] - X; const inP = keepGE ? dp >= -1e-7 : dp <= 1e-7, inQ = keepGE ? dq >= -1e-7 : dq <= 1e-7;
        if (inP) out.push(p);
        if (inP !== inQ && Math.abs(dp - dq) > 1e-9) { const ea = p[1] < 0 ? (q[1] < 0 ? p[0] : q[1]) : p[1], eb = p[1] < 0 ? (q[1] < 0 ? q[0] : q[2]) : p[2]; out.push([cut(ea, eb, k), ea, eb]); }
      }
      return out;
    };
    for (let f = 0; f < idx.length; f += 3) {
      const a = idx[f], b = idx[f + 1], c = idx[f + 2]; const xa = P[a * 3], xb = P[b * 3], xc = P[c * 3]; const lo = Math.min(xa, xb, xc), hi = Math.max(xa, xb, xc);
      const k0 = Math.floor((lo - x0) / s + 1e-6), k1 = Math.ceil((hi - x0) / s - 1e-6) - 1;
      if (k1 <= k0) { I.push(a, b, c); continue; }
      const tri = [[a, -1, -1], [b, -1, -1], [c, -1, -1]];
      for (let k = k0; k <= k1; k++) {
        let poly = clip(tri, k, true); if (poly.length < 3) continue; poly = clip(poly, k + 1, false); if (poly.length < 3) continue;
        for (let i = 1; i + 1 < poly.length; i++) { const i0 = poly[0][0], i1 = poly[i][0], i2 = poly[i + 1][0]; if (i0 !== i1 && i1 !== i2 && i0 !== i2) I.push(i0, i1, i2); }
      }
    }
    return { pos: new Float32Array(P), nrm: new Float32Array(N), uv: U ? new Float32Array(U) : null, idx: new Uint32Array(I) };
  }

  // What the artist's model does not have: a floor under the city (the road mesh has holes below the buildings), a low wall
  // along both rims so nobody walks off into space, and the axle (on the chart the axle is a ceiling at y = R - radius).
  function hull(pack, zmax) {
    const n = pack.slabs, C = pack.C, H = C / 2, s = C / n, R = pack.R, P = [], I = []; const y0 = -0.6, y1 = 1.25, ya = R - 0.9, za = zmax + 14;
    const quad = (a, b, c, d) => { const o = P.length / 3; P.push(...a, ...b, ...c, ...d); I.push(o, o + 1, o + 2, o, o + 2, o + 3); };
    const each = (fn) => { for (let k = 0; k < n; k++) fn(-H + k * s, -H + (k + 1) * s); }; const parts = [];
    each((xa, xb) => quad([xa, y0, -zmax], [xa, y0, zmax], [xb, y0, zmax], [xb, y0, -zmax])); parts.push(I.length);                                   // floor
    each((xa, xb) => { quad([xa, y0, -zmax], [xb, y0, -zmax], [xb, y1, -zmax], [xa, y1, -zmax]); quad([xa, y0, zmax], [xa, y1, zmax], [xb, y1, zmax], [xb, y0, zmax]); }); parts.push(I.length);   // rims
    each((xa, xb) => quad([xa, ya, -za], [xb, ya, -za], [xb, ya, za], [xa, ya, za])); parts.push(I.length);                                              // axle
    return { position: new Float32Array(P), index: new Uint32Array(I), parts };
  }
  const join = (list) => { let nv = 0, ni = 0; for (const a of list) { nv += a.position.length; ni += a.index.length; } const P = new Float32Array(nv), I = new Uint32Array(ni); let vo = 0, io = 0; for (const a of list) { P.set(a.position, vo); for (let k = 0; k < a.index.length; k++) I[io + k] = a.index[k] + vo / 3; vo += a.position.length; io += a.index.length; } return { position: P, index: I }; };

  const mkBvh = (P, I) => { const g = new BufferGeometry(); g.setAttribute('position', new BufferAttribute(P, 3)); g.setIndex(new BufferAttribute(I, 1)); return new MeshBVH(g); };

  // pack -> { R, C, groups (cut into facets, for drawing), chartBvh, ringBvh }. extra: optional { position, index } of added solids (chart space).
  function buildWorld(pack, extra, drawToo) {
    const R = pack.R, C = pack.C, H = C / 2, s = C / pack.slabs; const groups = [];
    for (const g of pack.groups) {
      const cutIt = !g.alpha && (g.collide || drawToo); const t = cutIt ? tessellate(g.posA, g.nrmA, drawToo ? g.uvA : null, g.idxA, s, -H) : { pos: g.posA, nrm: g.nrmA, uv: g.uvA, idx: g.idxA };
      groups.push({ ...g, ...t });
    }
    let nv = 0, ni = 0; for (const g of groups) if (g.collide) { nv += g.pos.length / 3; ni += g.idx.length; }
    const ev = extra ? extra.position.length / 3 : 0, ei = extra ? extra.index.length : 0;
    const P0 = new Float32Array((nv + ev) * 3), I0 = new Uint32Array(ni + ei); let vo = 0, io = 0;
    for (const g of groups) if (g.collide) { P0.set(g.pos, vo * 3); for (let k = 0; k < g.idx.length; k++) I0[io + k] = g.idx[k] + vo; vo += g.pos.length / 3; io += g.idx.length; }
    if (extra) { P0.set(extra.position, vo * 3); for (let k = 0; k < ei; k++) I0[io + k] = extra.index[k] + vo; }
    // the real ring
    const PR = new Float32Array(P0.length); for (let i = 0; i < P0.length; i += 3) { const a = P0[i] / R, r = R - P0[i + 1]; PR[i] = r * Math.sin(a); PR[i + 1] = R - r * Math.cos(a); PR[i + 2] = P0[i + 2]; }
    // the chart, with the strips next to the seam repeated on the far side
    const xp = [], xi = []; let base = P0.length / 3;
    for (let f = 0; f < I0.length; f += 3) {
      const a = I0[f] * 3, b = I0[f + 1] * 3, c = I0[f + 2] * 3; const lo = Math.min(P0[a], P0[b], P0[c]), hi = Math.max(P0[a], P0[b], P0[c]); const sh = hi > H - MARGIN ? -C : lo < -H + MARGIN ? C : 0; if (!sh) continue;
      xp.push(P0[a] + sh, P0[a + 1], P0[a + 2], P0[b] + sh, P0[b + 1], P0[b + 2], P0[c] + sh, P0[c + 1], P0[c + 2]); xi.push(base, base + 1, base + 2); base += 3;
    }
    const PC = new Float32Array(P0.length + xp.length); PC.set(P0); PC.set(xp, P0.length); const IC = new Uint32Array(I0.length + xi.length); IC.set(I0); IC.set(xi, I0.length);
    return { R, C, H, s, groups, chartBvh: mkBvh(PC, IC), ringBvh: mkBvh(PR, I0.slice()), colTris: I0.length / 3 };
  }

  // ------------------------------------------------------------------ the arena, taught about the ring
  function ringify(ar, w) {
    const R = w.R, C = w.C, H = C / 2, iR = 1 / R; const ray = new Ray(), va = new Vector3(), vb = new Vector3(), vc = new Vector3(), vd = new Vector3();
    const proto = Object.getPrototypeOf(ar);
    ar.ring = { R, C, H }; ar.chartBvh = w.chartBvh; ar.ringBvh = w.ringBvh; ar.bvh = w.chartBvh; ar.zmax = ar.data.zmax;
    const wrapX = ar.wrapX = (x) => { x = (x + H) % C; if (x < 0) x += C; return x - H; };          // into [-H, H)
    const wrapD = ar.wrapD = (d) => d - C * Math.round(d / C);                                       // shortest way round
    ar.norm = (p) => { if (p.x >= H || p.x < -H) p.x = wrapX(p.x); return p; };
    // chart point p as it appears from the flat frame touching the ring at chart x = fx, and back
    ar.see = (out, p, fx) => { const a = (p.x - fx) * iR, r = R - p.y; return out.set(fx + r * Math.sin(a), R - r * Math.cos(a), p.z); };
    ar.unsee = (out, q, fx) => { const dx = q.x - fx, ry = R - q.y; return out.set(wrapX(fx + R * Math.atan2(dx, ry)), R - Math.hypot(dx, ry), q.z); };
    // where chart point b is, seen from chart point a (a true straight-line vector in a's frame), and how far
    ar.rel = (out, a, b) => { const an = (b.x - a.x) * iR, r = R - b.y; return out.set(r * Math.sin(an), R - r * Math.cos(an) - a.y, b.z - a.z); };
    ar.dist = (a, b) => { const ra = R - a.y, rb = R - b.y, dz = b.z - a.z; return Math.sqrt(Math.max(0, ra * ra + rb * rb - 2 * ra * rb * Math.cos((b.x - a.x) * iR) + dz * dz)); };
    // the ray (o, d) of o's frame, expressed in the frame at fx (fx = 0 is the ring as stored in ringBvh)
    const rayTo = ar.rayTo = (fx, o, d, oo, dd) => { const a = (o.x - fx) * iR, r = R - o.y, s = Math.sin(a), c = Math.cos(a), dx = d.x, dy = d.y; oo.set(fx + r * s, R - r * c, o.z); dd.set(dx * c - dy * s, dx * s + dy * c, d.z); };
    // a direction of o's frame, re-expressed where the chart point p stands
    ar.dirAt = (out, o, d, p) => { const a = (o.x - p.x) * iR, s = Math.sin(a), c = Math.cos(a), dx = d.x, dy = d.y; return out.set(dx * c - dy * s, dx * s + dy * c, d.z); };

    const dynHit = (o, d, maxD) => {   // moving boxes (crates, cover) live on the chart: test each in its own frame
      let best = null; const all = ar.dyn; if (!all || !all.length || !ar._rayDyn) return null; const one = [null];
      for (const b of all) { one[0] = b; ar.dyn = one; rayTo((b.min.x + b.max.x) * 0.5, o, d, va, vb); const h = ar._rayDyn(va, vb, best ? best.distance : maxD); if (h) { ar.unsee(h.point, h.point, (b.min.x + b.max.x) * 0.5); best = h; } }
      ar.dyn = all; return best;
    };
    ar.raycast = function (o, d, maxD = 400) {
      if (maxD <= LOCAL) {   // o may lie past the seam (a can in flight, a rocket): look it up at its place on the chart, answer in the caller's own numbers
        const ox = wrapX(o.x), sh = o.x - ox; ray.origin.set(ox, o.y, o.z); ray.direction.copy(d); let h = this.chartBvh.raycastFirst(ray, DoubleSide, 0, maxD);
        if (this.dyn && this.dyn.length && this._rayDyn) { const s = this._rayDyn(va.copy(ray.origin), d, h ? h.distance : maxD); if (s) h = s; }
        if (h && sh) h.point.x += sh; return h || null; }
      rayTo(0, o, d, ray.origin, ray.direction); const g = this.ringBvh.raycastFirst(ray, DoubleSide, 0, maxD); let h = null;
      if (g) { const G = g.point, th = Math.atan2(G.x, R - G.y), s = Math.sin(th), c = Math.cos(th), n = g.face.normal; h = { distance: g.distance, point: new Vector3(R * th, R - Math.hypot(G.x, R - G.y), G.z), face: { normal: new Vector3(n.x * c + n.y * s, -n.x * s + n.y * c, n.z) } }; }
      const s = dynHit(o, d, h ? h.distance : maxD); return s || h;
    };
    ar.los = function (a, b) {
      const dx = wrapD(b.x - a.x), dy = b.y - a.y, dz = b.z - a.z;
      if (Math.abs(dx) < LOCAL && Math.abs(dy) < LOCAL && Math.abs(dz) < LOCAL) { const len = Math.hypot(dx, dy, dz); if (len < 0.01) return true; ray.origin.set(wrapX(a.x), a.y, a.z); ray.direction.set(dx / len, dy / len, dz / len); if (this.chartBvh.raycastFirst(ray, DoubleSide, 0, len - 0.05)) return false; return !(this.dyn && this.dyn.length && this._rayDyn && this._rayDyn(va.copy(ray.origin), ray.direction, len - 0.05)); }
      ar.rel(vc, a, b); const len = vc.length(); if (len < 0.01) return true; vc.multiplyScalar(1 / len); rayTo(0, a, vc, ray.origin, ray.direction);
      if (this.ringBvh.raycastFirst(ray, DoubleSide, 0, len - 0.05)) return false; return !dynHit(a, vc, len - 0.05);
    };
    ar.groundY = function (x, z, yTop, maxD) { return proto.groundY.call(this, wrapX(x), z, yTop, maxD); };
    // which region is this: the rectangles of a ground sector and of the roofs standing in it overlap, so the nav mask has a say
    ar.roofAt = function (x, z, y = null) { x = wrapX(x); let best = -1, bd = 1e9; for (const r of this.roofs) { if (x < r.x0 - 0.35 || x > r.x1 + 0.35 || z < r.z0 - 0.35 || z > r.z1 + 0.35) continue; let d = y == null ? 0 : Math.abs(y - r.roofY); const k = this.cellAt(r, x, z); if (!(k >= 0 && r.m[k])) d += 1.2; if (d < bd) { bd = d; best = r.i; } } return bd < 4.7 || y == null ? best : -1; };
    // links: "walk" joins two ground sectors (and may cross the seam); a hub line is a straight cable through the middle of the wheel
    ar.linkPos = function (l, dir, u, out) {
      const A = dir ? l.p1 : l.p0, B = dir ? l.p0 : l.p1;
      if (l.kind === 'walk') return out.set(wrapX(A.x + wrapD(B.x - A.x) * u), A.y + (B.y - A.y) * u, A.z + (B.z - A.z) * u);
      if (l.hub) { const lift = l.lift, e = 0.05; if (u < e) return out.copy(A).setY(A.y + lift * (u / e)); if (u > 1 - e) return out.copy(B).setY(B.y + lift * ((1 - u) / e));
        const t = (u - e) / (1 - 2 * e); va.set(A.x, A.y + lift, A.z); vb.set(B.x, B.y + lift, B.z); ar.rel(vd, va, vb); out.set(va.x + vd.x * t, va.y + vd.y * t, va.z + vd.z * t); return ar.unsee(out, out, A.x); }
      return proto.linkPos.call(this, l, dir, u, out);
    };
    ar.linkMode = function (l, u, dir = 0) { if (l.kind === 'walk') return 'ground'; if (l.hub) return u > 0.04 && u < 0.97 ? 'zip' : 'air'; return proto.linkMode.call(this, l, u, dir); };
    ar.linkLabel = function (l) { return l.hub ? 'HUB LINE' : l.kind === 'walk' ? '' : proto.linkLabel.call(this, l); };
    // the halo: a circle of radius r, stretched along the ring by L(r) each way. rho = the radius at which a point falls outside
    const Zd = ar.data.zone, k = Zd.ring.k, r1 = Zd.ring.r1;
    ar.zoneRho = (x, z, cx, cz) => { const a = Math.abs(wrapD(x - cx)), b = Math.abs(z - cz), h = Math.hypot(a, b); if (h <= r1) return h; let lo = r1, hi = r1 + a / k + b + 1; for (let i = 0; i < 26; i++) { const m = (lo + hi) * 0.5; if (Math.hypot(Math.max(0, a - k * (m - r1)), b) > m) lo = m; else hi = m; } return (lo + hi) * 0.5; };
    ar.setZone = function (cx, cz) {
      this.zoneC = [cx, cz];
      for (const r of this.roofs) { const d = new Float32Array(r.cells.length); for (let i = 0; i < d.length; i++) { const c = r.cells[i]; d[i] = ar.zoneRho(r.ox + ((c % r.nx) + 0.5) * this.cell, r.oz + (((c / r.nx) | 0) + 0.5) * this.cell, cx, cz); } r.cellD = d.sort(); r.dist = ar.zoneRho(r.x, r.z, cx, cz); }
    };
    ar.setZone(Zd.center[0], Zd.center[1]);
    return ar;
  }
  return { parsePack, tessellate, hull, join, buildWorld, ringify };
}

// The same helpers on a flat map, so shared code can ask without caring which map it is on.
export function flatArena(proto) {
  proto.wrapX = (x) => x; proto.wrapD = (d) => d; proto.norm = (p) => p;
  proto.see = (out, p) => out.copy(p); proto.unsee = (out, q) => out.copy(q);
  proto.rel = (out, a, b) => out.copy(b).sub(a); proto.dist = (a, b) => a.distanceTo(b);
  proto.rayTo = (fx, o, d, oo, dd) => { oo.copy(o); dd.copy(d); }; proto.dirAt = (out, o, d) => out.copy(d);
}

// Distance of (x, z) from the halo's centre, in the halo's own measure: compare with zone.r. r lets you ask about another radius.
export function zoneD(Z, x, z, r) { let dx = x - Z.cx; const dz = z - Z.cz; if (Z.C) { dx -= Z.C * Math.round(dx / Z.C); dx = Math.max(0, Math.abs(dx) - Z.k * Math.max(0, (r == null ? Z.r : r) - Z.r1)); } return Math.hypot(dx, dz); }
