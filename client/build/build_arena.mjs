// Offline arena builder: resolves the layout, dresses every roof (parapets, cover, traversal devices),
// validates routes against real collision geometry and bakes nav grids. Output: dist/arena.json
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import fs from 'node:fs';
import sharp from 'sharp';
import { parseKit, F_WINDOW, F_NEON, F_METAL, F_SIGN, F_ROOF, F_CUSTOM, F_PAINT, F_GLOW } from '../src/kit.js';
import { GeoBuilder } from '../src/geobuilder.js';
import { ROOFS, LINKS, ZONE, DETAIL } from '../src/layout.js';
import { ATLAS } from '../src/atlas.js';

const kb = fs.readFileSync('dist/city.bin'); const kit = parseKit(kb.buffer.slice(kb.byteOffset, kb.byteOffset + kb.byteLength));
const L = Object.fromEntries(kit.layers.map((n, i) => [n, i]));
const PS = kit.header.posScale, US = kit.header.uvScale;
const CELL = 0.5, PARAPET = 1.05, G = 22;
const M = {
  concrete: [L.walls, 255, 0, 0], rust: [L.rust, 255, 0, 0], rustmetal: [L.rustmetal, 255, 0, 0],
  dark: [255, 26, F_METAL, 0], mid: [255, 64, 0, 0], light: [255, 120, F_METAL, 0], bamboo: [255, 88, 0, 0], black: [255, 10, 0, 0],
  beacon: (ph) => [255, 255, F_NEON, ph & 255], glow: (ph) => [255, 255, F_GLOW, ph & 255],
  neonTex: [L.custom, L.custom, F_CUSTOM | F_NEON, 0], glowTex: [L.custom, L.custom, F_CUSTOM | F_GLOW, 0], paintTex: [L.custom, L.custom, F_CUSTOM | F_PAINT, 0],
};
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const hashStr = s => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const rotVec = (k, x, z) => k === 0 ? [x, z] : k === 1 ? [z, -x] : k === 2 ? [-x, -z] : [-z, x];

// ---------- per-type upper protrusions (geometry sticking out beyond the core rect near roof level)
for (const [k, t] of Object.entries(kit.types)) {
  if (t.hx == null) continue; const p = { px: 0, nx: 0, pz: 0, nz: 0 };
  for (let v = 0; v < t.nv; v++) { const y = t.i16[v * 8 + 1] * PS; if (y < t.roofY - 7) continue; const x = t.i16[v * 8] * PS, z = t.i16[v * 8 + 2] * PS; p.px = Math.max(p.px, x - t.hx); p.nx = Math.max(p.nx, -x - t.hx); p.pz = Math.max(p.pz, z - t.hz); p.nz = Math.max(p.nz, -z - t.hz); }
  t.prot = p;
}
function protWorld(type, rot) { // protrusion per world side E,W,S,N after rotation
  const p = kit.types[type].prot; const loc = [[1, 0, p.px], [-1, 0, p.nx], [0, 1, p.pz], [0, -1, p.nz]]; const out = { E: 0, W: 0, S: 0, N: 0 };
  for (const [x, z, v] of loc) { const [wx, wz] = rotVec(rot, x, z); out[wx > 0.5 ? 'E' : wx < -0.5 ? 'W' : wz > 0.5 ? 'S' : 'N'] = v; }
  return out;
}

// ---------- resolve roofs
const roofs = []; const byId = {};
function ext(type, rot) { const t = kit.types[type]; return rot % 2 ? [t.hz, t.hx] : [t.hx, t.hz]; }
for (const r of ROOFS) {
  const t = kit.types[r.type]; const o = { ...r }; o.roofY = r.roofY ?? t.roofY; o.sy = o.roofY / t.roofY;
  if (r.parent) {
    const p = byId[r.parent]; const fixed = { W: 1, N: 0, E: 3, S: 2 }[r.side]; o.rot = fixed; const [hx, hz] = ext(r.type, o.rot); const gap = 0.3;
    if (r.side === 'W') { o.x = p.x - p.hx - hx - gap; o.z = p.z; } if (r.side === 'E') { o.x = p.x + p.hx + hx + gap; o.z = p.z; }
    if (r.side === 'N') { o.z = p.z - p.hz - hz - gap; o.x = p.x; } if (r.side === 'S') { o.z = p.z + p.hz + hz + gap; o.x = p.x; }
    o.hx = hx; o.hz = hz;
  }
  roofs.push(o); byId[o.id] = o;
  if (o.rot != null) { [o.hx, o.hz] = ext(o.type, o.rot); }
}
// tower rotations: blank side toward its annex; otherwise detail corner toward the centre, no big protrusion into close neighbours
const annexSide = {}; for (const r of roofs) if (r.parent) annexSide[r.parent] = r.side;
for (const o of roofs) {
  if (o.rot != null) continue; let best = -1e9, bk = 0;
  for (let k = 0; k < 4; k++) {
    const [hx, hz] = ext(o.type, k); const d = DETAIL[o.type]; const [dx, dz] = rotVec(k, d[0], d[1]); const cl = Math.hypot(o.x, o.z) || 1;
    let s = (dx * -o.x + dz * -o.z) / cl / Math.SQRT2; const pw = protWorld(o.type, k);
    if (annexSide[o.id] && pw[annexSide[o.id]] > 0.7) s -= 10;
    for (const n of ROOFS) { // planned neighbours (centres only; coarse)
      if (n.id === o.id || n.parent || n.x == null) continue; const ddx = n.x - o.x, ddz = n.z - o.z; if (Math.abs(ddx) > 24 || Math.abs(ddz) > 24) continue;
      const side = Math.abs(ddx) > Math.abs(ddz) ? (ddx > 0 ? 'E' : 'W') : (ddz > 0 ? 'S' : 'N'); const gapd = (Math.abs(ddx) > Math.abs(ddz) ? Math.abs(ddx) - hx : Math.abs(ddz) - hz) - 6.2;
      if (pw[side] > Math.max(0.9, gapd - 2.2)) s -= 5;
    }
    if (s > best) { best = s; bk = k; }
  }
  o.rot = bk; [o.hx, o.hz] = ext(o.type, bk);
}
// re-seat annexes now that parents have final extents
for (const o of roofs) if (o.parent) { const p = byId[o.parent]; const gap = 0.3; if (o.side === 'W') o.x = p.x - p.hx - o.hx - gap; if (o.side === 'E') o.x = p.x + p.hx + o.hx + gap; if (o.side === 'N') o.z = p.z - p.hz - o.hz - gap; if (o.side === 'S') o.z = p.z + p.hz + o.hz + gap; if (o.side === 'W' || o.side === 'E') o.z = p.z; else o.x = p.x; }
roofs.forEach((r, i) => { r.i = i; r.x0 = r.x - r.hx; r.x1 = r.x + r.hx; r.z0 = r.z - r.hz; r.z1 = r.z + r.hz; });
console.log(roofs.map(r => `${r.id}:${r.type} rot${r.rot} (${r.x.toFixed(1)},${r.z.toFixed(1)}) y${r.roofY.toFixed(1)} sy${r.sy.toFixed(2)}`).join('\n'));

function instMatrix(r) { return new THREE.Matrix4().compose(new THREE.Vector3(r.x, 0, r.z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r.rot * Math.PI / 2), new THREE.Vector3(1, r.sy, 1)); }
function buildBVH(shapes) {
  const gb = new GeoBuilder(1 << 19, 1 << 21);
  for (const r of roofs) gb.addKit(kit.types[r.type], instMatrix(r).elements, PS, US);
  for (const s of shapes) gb.shape(s);
  const a = gb.arrays(); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(a.position.slice(), 3)); g.setIndex(new THREE.BufferAttribute(a.index.slice(), 1));
  return { bvh: new MeshBVH(g), tris: a.index.length / 3 };
}
const ray = new THREE.Ray(); const tmpV = new THREE.Vector3(); const cp = { point: new THREE.Vector3(), distance: 0, faceIndex: 0 };
function castDown(bvh, x, z, yTop, maxD = 60) { ray.origin.set(x, yTop, z); ray.direction.set(0, -1, 0); const h = bvh.raycastFirst(ray, THREE.DoubleSide, 0, maxD); return h ? h.point.y : null; }
function segHit(bvh, a, b) { const d = tmpV.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]); const len = d.length(); if (len < 1e-6) return false; ray.origin.set(a[0], a[1], a[2]); ray.direction.copy(d).multiplyScalar(1 / len); const h = bvh.raycastFirst(ray, THREE.DoubleSide, 0, len); return !!h; }
function segHitInfo(bvh, a, b) { const d = tmpV.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]); const len = d.length(); ray.origin.set(a[0], a[1], a[2]); ray.direction.copy(d).multiplyScalar(1 / len); const h = bvh.raycastFirst(ray, THREE.DoubleSide, 0, len); return h ? [h.point.x, h.point.y, h.point.z, h.distance] : null; }
function zipClear(b, A, B, lift, dbg) { // rider corridor between anchors: feet/body/cable heights x lateral spread
  const len = Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]); const u = [(B[0] - A[0]) / len, (B[1] - A[1]) / len, (B[2] - A[2]) / len]; const hl = Math.hypot(u[0], u[2]); const sx = -u[2] / hl, sz = u[0] / hl;
  for (const h of [lift - 0.14, lift + 0.9, lift + 1.95]) for (const o of [-0.42, 0, 0.42]) { const a1 = [A[0] + u[0] * 0.55 + sx * o, A[1] + u[1] * 0.55 + h, A[2] + u[2] * 0.55 + sz * o], b1 = [B[0] - u[0] * 0.55 + sx * o, B[1] - u[1] * 0.55 + h, B[2] - u[2] * 0.55 + sz * o]; const hh = segHitInfo(b, a1, b1); if (hh) { if (dbg) console.log('   zip hit', dbg, 'lift', lift, 'o', o, hh.map(v => v.toFixed(2))); return false; } }
  return true;
}
function clearSphere(bvh, x, y, z, rad) { const r = bvh.closestPointToPoint(tmpV.set(x, y, z), cp, 0, rad); return !r || r.distance >= rad; }

// ---------- nav grid per roof
function makeGrid(bvh, r) {
  const nx = Math.floor((r.x1 - r.x0) / CELL), nz = Math.floor((r.z1 - r.z0) / CELL); const ox = r.x - nx * CELL / 2, oz = r.z - nz * CELL / 2;
  const walk = new Uint8Array(nx * nz), hgt = new Float32Array(nx * nz);
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const x = ox + (i + 0.5) * CELL, z = oz + (j + 0.5) * CELL; const y = castDown(bvh, x, z, r.roofY + 7, 9); hgt[j * nx + i] = y == null ? -99 : y - r.roofY;
    if (y == null || Math.abs(y - r.roofY) > 0.2) continue;   // kerbs / coping ridges / ramps are for the player to hop on, not part of the nav floor
    if (!clearSphere(bvh, x, y + 0.80, z, 0.40) || !clearSphere(bvh, x, y + 1.45, z, 0.40)) continue;
    walk[j * nx + i] = 1;
  }
  return { nx, nz, ox, oz, walk, hgt };
}
function reach(g, seeds) { // flood fill from the walkable cell nearest to the centre; returns reach mask of the largest component
  const { nx, nz, walk } = g; const comp = new Int32Array(nx * nz).fill(-1); let best = -1, bestN = 0, c = 0;
  for (let s = 0; s < nx * nz; s++) {
    if (!walk[s] || comp[s] >= 0) continue; let n = 0; const st = [s]; comp[s] = c;
    while (st.length) { const k = st.pop(); n++; const i = k % nx, j = (k / nx) | 0; for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, b = j + dj; if (a < 0 || b < 0 || a >= nx || b >= nz) continue; const q = b * nx + a; if (walk[q] && comp[q] < 0) { comp[q] = c; st.push(q); } } }
    if (n > bestN) { bestN = n; best = c; } c++;
  }
  const out = new Uint8Array(nx * nz); for (let s = 0; s < nx * nz; s++) out[s] = comp[s] === best ? 1 : 0; return out;
}
const cellXZ = (g, k) => [g.ox + ((k % g.nx) + 0.5) * CELL, g.oz + (((k / g.nx) | 0) + 0.5) * CELL];
function snap(g, mask, x, z, maxD = 4, pred = null) { let best = -1, bd = maxD * maxD; for (let k = 0; k < g.nx * g.nz; k++) { if (!mask[k]) continue; const [cx, cz] = cellXZ(g, k); const d = (cx - x) ** 2 + (cz - z) ** 2; if (d < bd && (!pred || pred(cx, cz, k))) { bd = d; best = k; } } return best < 0 ? null : cellXZ(g, best); }

// ---------- pass 0: buildings only
let { bvh: bvh0, tris: tris0 } = buildBVH([]);
console.log('buildings tris', tris0);
for (const r of roofs) { r.g0 = makeGrid(bvh0, r); r.m0 = reach(r.g0); }

// ---------- adjacency (abutting roofs)
function abut(a, b) { // returns {side (of a), lo, hi} if rects touch
  const ox0 = Math.max(a.x0, b.x0), ox1 = Math.min(a.x1, b.x1), oz0 = Math.max(a.z0, b.z0), oz1 = Math.min(a.z1, b.z1);
  if (oz1 - oz0 > 2 && Math.abs(b.x0 - a.x1) < 1.3) return { side: 'E', lo: oz0, hi: oz1 }; if (oz1 - oz0 > 2 && Math.abs(a.x0 - b.x1) < 1.3) return { side: 'W', lo: oz0, hi: oz1 };
  if (ox1 - ox0 > 2 && Math.abs(b.z0 - a.z1) < 1.3) return { side: 'S', lo: ox0, hi: ox1 }; if (ox1 - ox0 > 2 && Math.abs(a.z0 - b.z1) < 1.3) return { side: 'N', lo: ox0, hi: ox1 };
  return null;
}
const edgePoint = (r, side, t) => side === 'E' ? [r.x1, t] : side === 'W' ? [r.x0, t] : side === 'S' ? [t, r.z1] : [t, r.z0];
const sideNormal = { E: [1, 0], W: [-1, 0], S: [0, 1], N: [0, -1] };
// where does the segment c1->c2 leave rect r1 ?
function exitPoint(r, tx, tz) { const dx = tx - r.x, dz = tz - r.z; const sx = dx !== 0 ? r.hx / Math.abs(dx) : 1e9, sz = dz !== 0 ? r.hz / Math.abs(dz) : 1e9; const s = Math.min(sx, sz); const side = sx < sz ? (dx > 0 ? 'E' : 'W') : (dz > 0 ? 'S' : 'N'); return { x: r.x + dx * s, z: r.z + dz * s, side }; }

// ---------- links: geometric anchors on base grids
const links = []; const gaps = roofs.map(() => []); const keep = roofs.map(() => []); // parapet gaps {side,t,w}, keep-out circles {x,z,r}
const shapes = []; const devShapes = []; const fence = [];
function addGap(r, side, t, w) { gaps[r.i].push({ side, t, w }); }
// anchors must sit on open floor, not on a one-cell sliver that the device's own post would then cut off
const openCell = (r) => (cx, cz, k) => { const g = r.g0; const i = k % g.nx, j = (k / g.nx) | 0; let n = 0; for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) { const a = i + di, b = j + dj; if (a >= 0 && b >= 0 && a < g.nx && b < g.nz && r.m0[b * g.nx + a]) n++; } return n >= 7; };
for (const [kind, ia, ib] of LINKS) {
  const a = byId[ia], b = byId[ib]; const lk = { kind, a: a.i, b: b.i, oneWay: kind === 'pad' };
  if (kind === 'zip') {
    const ea = exitPoint(a, b.x, b.z), eb = exitPoint(b, a.x, a.z); const dir = [eb.x - ea.x, eb.z - ea.z]; const dl = Math.hypot(dir[0], dir[1]); dir[0] /= dl; dir[1] /= dl;
    // slide candidates along the edge to find a clear, walkable pair
    let found = null;
    for (const off of [0, 1, -1, 2, -2, 3, -3, 4, -4]) {
      const ta = sideNormal[ea.side][0] ? ea.z + off : ea.x + off, tb = sideNormal[eb.side][0] ? eb.z - off * 0 : eb.x - off * 0; // slide a only first
      const pa = edgePoint(a, ea.side, Math.max((sideNormal[ea.side][0] ? a.z0 : a.x0) + 1.4, Math.min((sideNormal[ea.side][0] ? a.z1 : a.x1) - 1.4, ta)));
      for (const off2 of [0, 1, -1, 2, -2, 3, -3]) {
        const tb2 = (sideNormal[eb.side][0] ? eb.z : eb.x) + off2;
        const pb = edgePoint(b, eb.side, Math.max((sideNormal[eb.side][0] ? b.z0 : b.x0) + 1.4, Math.min((sideNormal[eb.side][0] ? b.z1 : b.x1) - 1.4, tb2)));
        const na = sideNormal[ea.side], nb = sideNormal[eb.side];
        const sa = snap(a.g0, a.m0, pa[0] - na[0] * 1.5, pa[1] - na[1] * 1.5, 1.4, openCell(a)), sb = snap(b.g0, b.m0, pb[0] - nb[0] * 1.5, pb[1] - nb[1] * 1.5, 1.4, openCell(b));
        if (!sa || !sb) continue;
        const A = [sa[0], a.roofY, sa[1]], B = [sb[0], b.roofY, sb[1]];
        const len = Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]); let lift = 0;
        for (const h of [0.95, 1.25, 1.55, 1.9]) if (zipClear(bvh0, A, B, h)) { lift = h; break; }
        if (!lift) continue;
        found = { A, B, len, lift }; break;
      }
      if (found) break;
    }
    if (!found) { console.log('!! zip failed', ia, ib); continue; }
    Object.assign(lk, { p0: found.A, p1: found.B, len: found.len, lift: found.lift });
    corridorGaps(a, found.A, found.B); corridorGaps(b, found.B, found.A);
    keep[a.i].push({ x: found.A[0], z: found.A[2], r: 2.0 }); keep[b.i].push({ x: found.B[0], z: found.B[2], r: 2.0 });
  } else if (kind === 'pad') {
    const ea = exitPoint(a, b.x, b.z), eb = exitPoint(b, a.x, a.z); const na = sideNormal[ea.side], nb = sideNormal[eb.side];
    const sa = snap(a.g0, a.m0, ea.x - na[0] * 2.4, ea.z - na[1] * 2.4, 3, (x, z) => padFree(a, x, z));
    // landing: aim a few metres inside b from the entry edge, on a clear patch
    const sb = snap(b.g0, b.m0, eb.x - nb[0] * 4.2, eb.z - nb[1] * 4.2, 7, (x, z) => padFree(b, x, z, 0.5, 0.3));
    if (!sa || !sb) { console.log('!! pad failed anchors', ia, ib); continue; }
    Object.assign(lk, { p0: [sa[0], a.roofY, sa[1]], p1: [sb[0], b.roofY, sb[1]] });
    keep[a.i].push({ x: sa[0], z: sa[1], r: 2.3 }); keep[b.i].push({ x: sb[0], z: sb[1], r: 2.4 });
  } else if (kind === 'jump') {
    const ea = exitPoint(a, b.x, b.z), eb = exitPoint(b, a.x, a.z); const na = sideNormal[ea.side], nb = sideNormal[eb.side];
    // centre of the overlapping span of the two facing edges
    const alongX = !na[0]; const lo = alongX ? Math.max(a.x0, b.x0) : Math.max(a.z0, b.z0), hi = alongX ? Math.min(a.x1, b.x1) : Math.min(a.z1, b.z1); let found = null;
    // the building meshes have copings and lips the plan knows nothing about: find the true edge and the lip height along the jump line
    const edgeScan = (r, p, n) => { const sd = [-n[1], n[0]]; const prof = []; let e = -1;
      for (let s = 0; s <= 4.4; s += 0.05) { let top = null; for (const o of [-0.7, 0, 0.7]) { const y = castDown(bvh0, p[0] + n[0] * (s - 2.4) + sd[0] * o, p[1] + n[1] * (s - 2.4) + sd[1] * o, r.roofY + 1.7, 2.05); if (y != null && (top == null || y > top)) top = y; } prof.push(top); if (top != null) e = s; else if (e >= 0 && s > e + 0.4) break; }
      let lip = 0; for (let s = Math.max(0, e - 1.5); s <= e + 1e-6; s += 0.05) { const y = prof[Math.round(s / 0.05)]; if (y != null) lip = Math.max(lip, y - r.roofY); }
      return { e: e - 2.4, lip }; };
    const mkRamp = (r, p, n, sc, H) => { const len = Math.min(3.6, Math.max(2.2, H * 2.75)); const tx = p[0] + n[0] * (sc.e + 0.35), tz = p[1] + n[1] * (sc.e + 0.35); return { lo: [tx - n[0] * len, r.roofY, tz - n[1] * len], hi: [tx, r.roofY + H, tz], len, H, n }; };
    for (const off of [0, 1.5, -1.5, 3, -3]) {
      const t = (lo + hi) / 2 + off; if (t < lo + 2.0 || t > hi - 2.0) continue; const pa = edgePoint(a, ea.side, t), pb = edgePoint(b, eb.side, t);
      const ca = edgeScan(a, pa, na), cb = edgeScan(b, pb, nb); const aLow = a.roofY <= b.roofY; const dy = Math.abs(a.roofY - b.roofY);
      const hHigh = Math.max((aLow ? cb : ca).lip + 0.08, 0.45), hLow = Math.min(1.3, Math.max((aLow ? ca : cb).lip + 0.08, 0.45, dy + hHigh - 0.35));
      const ra = mkRamp(a, pa, na, ca, aLow ? hLow : hHigh), rb = mkRamp(b, pb, nb, cb, aLow ? hHigh : hLow);
      const sa = snap(a.g0, a.m0, ra.lo[0] - na[0] * 0.7, ra.lo[2] - na[1] * 0.7, 1.0), sb = snap(b.g0, b.m0, rb.lo[0] - nb[0] * 0.7, rb.lo[2] - nb[1] * 0.7, 1.0); if (!sa || !sb) continue;
      let blocked = false; for (const h of [0.5, 1.2, 1.9]) if (segHit(bvh0, [ra.hi[0], ra.hi[1] + h, ra.hi[2]], [rb.hi[0], rb.hi[1] + h, rb.hi[2]])) blocked = true; if (blocked) continue;
      found = { A: [sa[0], a.roofY, sa[1]], B: [sb[0], b.roofY, sb[1]], t, sideA: ea.side, sideB: eb.side, ra, rb, ca, cb }; break;
    }
    if (!found) { console.log('!! jump failed', ia, ib); continue; }
    const { ra, rb } = found; const flight = Math.hypot(rb.hi[0] - ra.hi[0], rb.hi[2] - ra.hi[2]);
    console.log(`jump ${ia}>${ib}: lips ${found.ca.lip.toFixed(2)}/${found.cb.lip.toFixed(2)} ramps ${ra.H.toFixed(2)}x${ra.len.toFixed(1)} / ${rb.H.toFixed(2)}x${rb.len.toFixed(1)} flight ${flight.toFixed(2)} m rise ${(rb.hi[1] - ra.hi[1]).toFixed(2)}`);
    // take-off points a little before each lip
    const take = (rp) => { const k = 1 - 0.3 / rp.len; return [rp.lo[0] + (rp.hi[0] - rp.lo[0]) * k, rp.lo[1] + rp.H * k, rp.lo[2] + (rp.hi[2] - rp.lo[2]) * k]; };
    Object.assign(lk, { p0: found.A, p1: found.B, k0: take(ra), k1: take(rb), ramps: [ra, rb], flight });
    addGap(a, found.sideA, found.t, 3.4); addGap(b, found.sideB, found.t, 3.4);
    for (const [r, rp, P] of [[a, ra, found.A], [b, rb, found.B]]) for (let s = -2.6; s <= rp.len + 0.9; s += 1.1) keep[r.i].push({ x: P[0] + rp.n[0] * s, z: P[2] + rp.n[1] * s, r: 1.55 });
  } else if (kind === 'ladder' || kind === 'step') {
    const lo = a.roofY <= b.roofY ? a : b, up = lo === a ? b : a; const ab = abut(lo, up); if (!ab) { console.log('!! not abutting', ia, ib); continue; }
    const n = sideNormal[ab.side]; let found = null;
    for (const off of [0, 1, -1, 2, -2, 3, -3, 4, -4]) {
      const t = (ab.lo + ab.hi) / 2 + off; if (t < ab.lo + 0.9 || t > ab.hi - 0.9) continue; const pl = edgePoint(lo, ab.side, t); const pu = [pl[0] + n[0] * (0.3 + 1.0), pl[1] + n[1] * (0.3 + 1.0)];
      const back = kind === 'step' ? 1.95 : 0.75;   // a step has a crate against the wall: stand in front of it, not inside it
      const sl = snap(lo.g0, lo.m0, pl[0] - n[0] * back, pl[1] - n[1] * back, kind === 'step' ? 1.0 : 0.8), su = snap(up.g0, up.m0, pu[0], pu[1], 1.1); if (!sl || !su) continue;
      // wall plane position: first hit going from the lower anchor toward the upper roof at mid height
      const midY = (lo.roofY + up.roofY) / 2 + 0.3; ray.origin.set(sl[0], midY, sl[1]); ray.direction.set(n[0], 0, n[1]); const h = bvh0.raycastFirst(ray, THREE.DoubleSide, 0, 3); const wallD = h ? h.distance : 1.0;
      found = { sl, su, t, wall: [sl[0] + n[0] * wallD, sl[1] + n[1] * wallD], n }; break;
    }
    if (!found) { console.log('!! ladder failed', ia, ib); continue; }
    lk.a = lo.i; lk.b = up.i; Object.assign(lk, { p0: [found.sl[0], lo.roofY, found.sl[1]], p1: [found.su[0], up.roofY, found.su[1]], wall: found.wall, n: found.n, h: up.roofY - lo.roofY });
    addGap(up, { E: 'W', W: 'E', N: 'S', S: 'N' }[ab.side], found.t, 2.3);
    keep[lo.i].push({ x: found.sl[0], z: found.sl[1], r: 1.7 }); keep[up.i].push({ x: found.su[0], z: found.su[1], r: 1.7 });
  }
  links.push(lk);
}
function corridorGaps(r, A, B, halfW = 0.6) { // open the parapet wherever a traversal corridor leaves the roof
  const d = [B[0] - A[0], B[2] - A[2]]; const Ln = Math.hypot(d[0], d[1]); d[0] /= Ln; d[1] /= Ln; const s = [-d[1], d[0]]; const hit = { N: [1e9, -1e9], S: [1e9, -1e9], E: [1e9, -1e9], W: [1e9, -1e9] };
  const upd = (h, v) => { h[0] = Math.min(h[0], v); h[1] = Math.max(h[1], v); };
  for (let t = 0; t <= Math.min(Ln, 2 * (r.hx + r.hz)); t += 0.08) for (const o of [-halfW, 0, halfW]) {
    const x = A[0] + d[0] * t + s[0] * o, z = A[2] + d[1] * t + s[1] * o; if (x < r.x0 - 0.5 || x > r.x1 + 0.5 || z < r.z0 - 0.5 || z > r.z1 + 0.5) continue;
    if (Math.abs(z - (r.z0 + 0.16)) < 0.3) upd(hit.N, x); if (Math.abs(z - (r.z1 - 0.16)) < 0.3) upd(hit.S, x); if (Math.abs(x - (r.x0 + 0.16)) < 0.3) upd(hit.W, z); if (Math.abs(x - (r.x1 - 0.16)) < 0.3) upd(hit.E, z);
  }
  for (const side of ['N', 'S', 'E', 'W']) if (hit[side][1] >= hit[side][0]) addGap(r, side, (hit[side][0] + hit[side][1]) / 2, hit[side][1] - hit[side][0] + 0.9);
}
function padFree(r, x, z, half = 1.0, pad = 1.4) { // clear square of walkable cells, away from edges
  if (x < r.x0 + 1.6 || x > r.x1 - 1.6 || z < r.z0 + 1.6 || z > r.z1 - 1.6) return false; const g = r.g0;
  for (let dz = -half; dz <= half + 0.01; dz += 0.5) for (let dx = -half; dx <= half + 0.01; dx += 0.5) { const i = Math.floor((x + dx - g.ox) / CELL), j = Math.floor((z + dz - g.oz) / CELL); if (i < 0 || j < 0 || i >= g.nx || j >= g.nz || !r.m0[j * g.nx + i]) return false; }
  for (const k of keep[r.i]) if ((k.x - x) ** 2 + (k.z - z) ** 2 < (k.r + pad) ** 2) return false; return true;
}

// ---------- spawn points (before props so they stay clear)
for (const r of roofs) {
  if (r.spawn == null) continue; const cl = Math.hypot(r.x, r.z) || 1; const ox = r.x + (r.x / cl) * 1.5, oz = r.z + (r.z / cl) * 1.5; // slightly to the outer half
  // the first thing a player sees should be the block and the angel, not a stair-house wall
  const clearView = (x, z) => { const d = Math.hypot(x, z) || 1; const dx = -x / d, dz = -z / d; for (const a of [-0.4, 0, 0.4]) { const c = Math.cos(a), sn = Math.sin(a); const ex = dx * c - dz * sn, ez = dx * sn + dz * c; if (segHit(bvh0, [x, r.roofY + 1.6, z], [x + ex * 11, r.roofY + 1.6, z + ez * 11])) return false; } return true; };
  const s = snap(r.g0, r.m0, ox, oz, 7, (x, z) => padFree(r, x, z) && clearView(x, z)) || snap(r.g0, r.m0, ox, oz, 6, (x, z) => padFree(r, x, z)) || snap(r.g0, r.m0, r.x, r.z, 8);
  r.spawnPt = [s[0], r.roofY, s[1]]; keep[r.i].push({ x: s[0], z: s[1], r: 1.6 });
  for (const d of [2.2, 4.4, 6.6]) keep[r.i].push({ x: s[0] - (s[0] / (Math.hypot(s[0], s[1]) || 1)) * d, z: s[1] - (s[1] / (Math.hypot(s[0], s[1]) || 1)) * d, r: 1.5 });   // first view (toward the angel) stays open
}

// ---------- dressing: parapets
const abuts = roofs.map(() => []);
for (const a of roofs) for (const b of roofs) { if (a === b) continue; const ab = abut(a, b); if (ab) abuts[a.i].push({ ...ab, other: b.i }); }
function parapets(r) {
  for (const side of ['N', 'E', 'S', 'W']) {
    const alongX = side === 'N' || side === 'S'; const lo = alongX ? r.x0 : r.z0, hi = alongX ? r.x1 : r.z1; let cuts = [];
    for (const ab of abuts[r.i]) if (ab.side === side && r.roofY - roofs[ab.other].roofY < 2.6) cuts.push([ab.lo - 0.2, ab.hi + 0.2]);   // a much lower neighbour is a drop: keep the parapet (the ladder cuts its own gap)
    for (const g of gaps[r.i]) if (g.side === side) cuts.push([g.t - g.w / 2, g.t + g.w / 2]);
    cuts.sort((a, b) => a[0] - b[0]); let segs = [], cur = lo;
    for (const [c0, c1] of cuts) { if (c0 > cur + 0.6) segs.push([cur, Math.min(c0, hi)]); cur = Math.max(cur, c1); }
    if (hi > cur + 0.6) segs.push([cur, hi]);
    const inset = 0.16, th = 0.13; const n = sideNormal[side];
    for (const [s0, s1] of segs) {
      const c = (s0 + s1) / 2, hl = (s1 - s0) / 2; const px = alongX ? c : (side === 'E' ? r.x1 - inset : r.x0 + inset), pz = alongX ? (side === 'S' ? r.z1 - inset : r.z0 + inset) : c;
      shapes.push(['b', px, r.roofY + PARAPET / 2 - 0.05, pz, alongX ? hl : th, PARAPET / 2 + 0.05, alongX ? th : hl, 0, M.concrete, 5]);
      shapes.push(['b', px, r.roofY + PARAPET + 0.03, pz, alongX ? hl + 0.02 : th + 0.05, 0.035, alongX ? th + 0.05 : hl + 0.02, 0, M.mid, 5]); // cap
      // player-only rail above the coping: bullets and eyes pass, a careless jump does not. The gaps (ramps, ziplines, ladders) are the ways off a roof.
      fence.push(['b', px, r.roofY + PARAPET + 1.3, pz, alongX ? hl : 0.05, 1.3, alongX ? 0.05 : hl, 0, M.concrete, 5]);
    }
  }
}
roofs.forEach(parapets);

// ---------- dressing: traversal devices
const up = (p, h) => [p[0], p[1] + h, p[2]];
for (const lk of links) {
  const a = roofs[lk.a], b = roofs[lk.b];
  if (lk.kind === 'zip') {
    const d = [lk.p1[0] - lk.p0[0], lk.p1[2] - lk.p0[2]]; const dl = Math.hypot(d[0], d[1]); d[0] /= dl; d[1] /= dl; const s = [-d[1], d[0]];
    const mk = (p, sgn, ph) => { const base = [p[0] + s[0] * 0.75 - d[0] * sgn * 0.5, p[1], p[2] + s[1] * 0.75 - d[1] * sgn * 0.5]; const top = up(base, lk.lift + 2.38); const tip = [p[0] - d[0] * sgn * 0.35, p[1] + lk.lift + 2.1, p[2] - d[1] * sgn * 0.35];
      shapes.push(['m', base, top, 0.14, M.dark], ['m', up(base, lk.lift + 2.1), tip, 0.09, M.dark], ['m', up(base, lk.lift + 1.1), [(tip[0] + base[0]) / 2, p[1] + lk.lift + 2.1, (tip[2] + base[2]) / 2], 0.05, M.dark]);
      shapes.push(['b', top[0], top[1] + 0.05, top[2], 0.05, 0.05, 0.05, 0, M.glow(ph)]); return tip; };
    const t0 = mk(lk.p0, 1, 40), t1 = mk(lk.p1, -1, 40); lk.c0 = t0; lk.c1 = t1;
    shapes.push(['m', t0, t1, 0.045, M.black]);
  } else if (lk.kind === 'pad') {
    const [x, y, z] = lk.p0; const ang = Math.atan2(lk.p1[0] - x, lk.p1[2] - z); // yaw toward target
    shapes.push(['b', x, y + 0.07, z, 1.15, 0.07, 1.15, ang, M.dark, 2]);
    const cs = Math.cos(ang), sn = Math.sin(ang); const C = (lx, lz) => [x + lx * cs + lz * sn, y + 0.148, z - lx * sn + lz * cs]; const R = ATLAS.chevron;
    // chevrons point along +local Z (toward target): quad corners a(BL) b(BR) c(TR) d(TL) with "top" at +Z
    shapes.push(['q', C(1.0, -1.0), C(-1.0, -1.0), C(-1.0, 1.0), C(1.0, 1.0), [0, 1, 0], M.glowTex, R[0], R[3], R[2], R[1]]);
    for (const [cx, cz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) { const p = C(cx * 1.08, cz * 1.08); devShapes.push(['b', p[0], y + 0.2, p[2], 0.05, 0.06, 0.05, ang, M.beacon(0)]); }
    // landing mark
    const [lx, ly, lz] = lk.p1; const RA = ATLAS.arrow; const q = 0.9; shapes.push(['q', [lx - q, ly + 0.03, lz + q], [lx + q, ly + 0.03, lz + q], [lx + q, ly + 0.03, lz - q], [lx - q, ly + 0.03, lz - q], [0, 1, 0], [L.custom, L.custom, F_CUSTOM | F_PAINT, 1], RA[0], RA[3], RA[2], RA[1]]);
  } else if (lk.kind === 'jump') {
    // kicker ramps: run up, leave from the red lip
    for (const rp of lk.ramps) { const hw = 0.85; shapes.push(['w', rp.lo, rp.hi, hw, M.dark, 2]);
      const d = [(rp.hi[0] - rp.lo[0]) / rp.len, (rp.hi[2] - rp.lo[2]) / rp.len], X = [d[1], -d[0]]; const sl = Math.hypot(rp.len, rp.H), nrm = [-d[0] * rp.H / sl, rp.len / sl, -d[1] * rp.H / sl];
      const C = (side, t, lift = 0.022) => [rp.lo[0] + d[0] * rp.len * t + X[0] * side + nrm[0] * lift, rp.lo[1] + rp.H * t + nrm[1] * lift, rp.lo[2] + d[1] * rp.len * t + X[1] * side + nrm[2] * lift]; const R = ATLAS.arrow;
      shapes.push(['q', C(0.62, 0.14), C(-0.62, 0.14), C(-0.62, 0.86), C(0.62, 0.86), nrm, M.paintTex, R[0], R[3], R[2], R[1]]);
      devShapes.push(['m', C(hw, 0.985, 0.035), C(-hw, 0.985, 0.035), 0.09, M.beacon(140)]);
      for (const sg of [-1, 1]) devShapes.push(['m', C(hw * sg, 0.02, 0.02), C(hw * sg, 0.985, 0.02), 0.05, M.light]);
    }
  } else if (lk.kind === 'ladder') {
    const n = lk.n, s = [-n[1], n[0]]; const y0 = roofs[lk.a].roofY, y1 = roofs[lk.b].roofY; const w = [lk.wall[0] - n[0] * 0.12, lk.wall[1] - n[1] * 0.12];
    for (const sg of [-1, 1]) { const bx = w[0] + s[0] * 0.3 * sg, bz = w[1] + s[1] * 0.3 * sg; shapes.push(['m', [bx, y0 + 0.05, bz], [bx, y1 + 1.15, bz], 0.07, M.light]); shapes.push(['m', [bx, y1 + 1.15, bz], [bx + n[0] * 0.6, y1 + 1.15, bz + n[1] * 0.6], 0.06, M.light], ['m', [bx + n[0] * 0.6, y1 + 1.15, bz + n[1] * 0.6], [bx + n[0] * 0.6, y1 + 0.02, bz + n[1] * 0.6], 0.06, M.light]); }
    for (let y = y0 + 0.35; y < y1 + 0.3; y += 0.36) devShapes.push(['m', [w[0] - s[0] * 0.3, y, w[1] - s[1] * 0.3], [w[0] + s[0] * 0.3, y, w[1] + s[1] * 0.3], 0.045, M.light]);
    devShapes.push(['b', w[0], y1 + 1.3, w[1], 0.07, 0.07, 0.07, 0, M.glow(90)]);
    lk.base = [w[0], y0, w[1]];
  } else if (lk.kind === 'step') {
    const h = lk.h; if (h > 1.15) { const n = lk.n; const cx = lk.wall[0] - n[0] * 0.75, cz = lk.wall[1] - n[1] * 0.75; shapes.push(['b', cx, roofs[lk.a].roofY + h / 4, cz, 0.7, h / 4, 0.7, 0, M.rustmetal, 2]); lk.crate = [cx, cz]; }
  }
}

// ---------- dressing: cover props (seeded)
function occGrid(r) { // blocked cells: non-walkable base cells + keep-outs
  const g = r.g0; const occ = new Uint8Array(g.nx * g.nz);
  for (let k = 0; k < occ.length; k++) { if (!r.m0[k]) occ[k] = 1; const [x, z] = cellXZ(g, k); for (const c of keep[r.i]) if ((c.x - x) ** 2 + (c.z - z) ** 2 < c.r * c.r) occ[k] = 2; }
  return occ;
}
function fits(r, occ, x, z, hx, hz, margin) {
  const g = r.g0; if (x - hx < r.x0 + 0.9 || x + hx > r.x1 - 0.9 || z - hz < r.z0 + 0.9 || z + hz > r.z1 - 0.9) return false;
  for (let zz = z - hz - margin; zz <= z + hz + margin + 1e-6; zz += CELL / 2) for (let xx = x - hx - margin; xx <= x + hx + margin + 1e-6; xx += CELL / 2) { const i = Math.floor((xx - g.ox) / CELL), j = Math.floor((zz - g.oz) / CELL); if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) continue; const inner = Math.abs(xx - x) <= hx && Math.abs(zz - z) <= hz; if (occ[j * g.nx + i] && (inner || occ[j * g.nx + i] === 1 || occ[j * g.nx + i] === 3)) return false; }
  return true;
}
function mark(r, occ, x, z, hx, hz) { const g = r.g0; for (let zz = z - hz; zz <= z + hz + 1e-6; zz += CELL / 2) for (let xx = x - hx; xx <= x + hx + 1e-6; xx += CELL / 2) { const i = Math.floor((xx - g.ox) / CELL), j = Math.floor((zz - g.oz) / CELL); if (i >= 0 && j >= 0 && i < g.nx && j < g.nz) occ[j * g.nx + i] = 3; } }
const PROPS = {
  tank(x, y, z, rot, R) { const out = []; const h0 = 1.0; for (const [a, b] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) out.push(['m', [x + a * 0.95, y, z + b * 0.95], [x + a * 0.8, y + h0, z + b * 0.8], 0.1, M.dark]);
    out.push(['m', [x - 0.95, y + 0.5, z - 0.95], [x + 0.95, y + 0.5, z - 0.95], 0.05, M.dark], ['m', [x - 0.95, y + 0.5, z + 0.95], [x + 0.95, y + 0.5, z + 0.95], 0.05, M.dark], ['m', [x - 0.95, y + 0.5, z - 0.95], [x - 0.95, y + 0.5, z + 0.95], 0.05, M.dark], ['m', [x + 0.95, y + 0.5, z - 0.95], [x + 0.95, y + 0.5, z + 0.95], 0.05, M.dark]);
    out.push(['b', x, y + h0 + 0.05, z, 1.25, 0.05, 1.25, 0, M.dark, 2]); const hh = 1.7 + R() * 0.5; out.push(['c', x, y + h0 + 0.1 + hh / 2, z, 1.15, 1.15, hh, 14, M.rust, 3, true]); out.push(['c', x, y + h0 + 0.1 + hh + 0.22, z, 1.2, 0.12, 0.44, 14, M.rustmetal, 3]); return out; },
  hvac(x, y, z, rot) { const out = []; const hx = 1.1, hz = 0.62; out.push(['b', x, y + 0.72, z, hx, 0.62, hz, rot, M.rustmetal, 3]); out.push(['b', x, y + 0.06, z, hx * 0.9, 0.06, hz * 0.9, rot, M.dark, 2]);
    const cs = Math.cos(rot), sn = Math.sin(rot); for (const o of [-0.5, 0.5]) out.push(['c', x + o * cs, y + 1.39, z - o * sn, 0.36, 0.36, 0.1, 10, M.dark, 2]); return out; },
  wall(x, y, z, rot) { return [['b', x, y + 0.62, z, 1.6, 0.62, 0.14, rot, M.concrete, 4]]; },
  crates(x, y, z, rot, R) { const out = []; const cs = Math.cos(rot), sn = Math.sin(rot); const at = (lx, lz) => [x + lx * cs + lz * sn, z - lx * sn + lz * cs]; const a = at(-0.58, 0), b = at(0.6, 0.05);
    out.push(['b', a[0], y + 0.55, a[1], 0.55, 0.55, 0.55, rot, M.rustmetal, 2], ['b', b[0], y + 0.5, b[1], 0.5, 0.5, 0.5, rot + 0.2, M.mid, 2]); if (R() < 0.6) out.push(['b', a[0], y + 1.5, a[1], 0.4, 0.4, 0.4, rot + 0.5, M.rustmetal, 2]); return out; },
  vent(x, y, z, rot) { return [['c', x, y + 0.45, z, 0.28, 0.28, 0.9, 8, M.dark, 2], ['c', x, y + 0.98, z, 0.42, 0.34, 0.16, 8, M.dark, 2]]; },
  scaffold(x, y, z, rot, R) { const out = []; const cs = Math.cos(rot), sn = Math.sin(rot); const at = (lx, ly, lz) => [x + lx * cs + lz * sn, y + ly, z - lx * sn + lz * cs]; const W = 1.5, D = 0.7, H = 3.4;
    for (const a of [-W, 0, W]) for (const b of [-D, D]) out.push(['m', at(a, 0, b), at(a, H, b), 0.07, M.bamboo]);
    for (const hy of [1.7, H]) { for (const b of [-D, D]) out.push(['m', at(-W, hy, b), at(W, hy, b), 0.06, M.bamboo]); for (const a of [-W, 0, W]) out.push(['m', at(a, hy, -D), at(a, hy, D), 0.06, M.bamboo]); }
    out.push(['m', at(-W, 0, -D), at(0, 1.7, -D), 0.05, M.bamboo], ['m', at(0, 1.7, -D), at(W, H, -D), 0.05, M.bamboo]); out.push(['b', ...at(0, 1.74, 0), W, 0.04, D, rot, M.mid, 2]); return out; },
};
const FOOT = { tank: [1.3, 1.3], hvac: [1.15, 0.7], wall: [1.65, 0.2], crates: [1.15, 0.65], vent: [0.4, 0.4], scaffold: [1.6, 0.8] };
const THEME = { high: ['hvac', 'wall', 'crates', 'vent'], radio: ['wall', 'hvac', 'crates', 'vent'], industrial: ['hvac', 'hvac', 'tank', 'vent', 'wall'], residential: ['tank', 'wall', 'crates', 'vent'], construction: ['scaffold', 'crates', 'wall', 'scaffold'], commercial: ['hvac', 'wall', 'crates', 'vent'], old: ['tank', 'wall', 'vent', 'crates'], tanks: ['tank', 'tank', 'wall', 'vent'], inner: ['wall', 'hvac', 'crates', 'tank', 'vent'], annex: ['wall', 'crates', 'vent'], center: ['wall', 'crates', 'hvac', 'vent', 'wall'] };
for (const r of roofs) {
  const R = rng(hashStr(r.id) ^ 0x51ed); const occ = occGrid(r); r.occ = occ; const list = THEME[r.theme || r.kind].slice(); const want = r.kind === 'annex' ? 2 : r.kind === 'center' ? 4 : 3 + (R() < 0.5 ? 1 : 0); let placed = 0; r.props = [];
  for (let n = 0; n < want + 2 && placed < want + 1; n++) {
    const kind = list[n % list.length]; const [fx, fz] = FOOT[kind];
    for (let tries = 0; tries < 60; tries++) {
      const rot = (R() < 0.5 ? 0 : Math.PI / 2); const hx = rot ? fz : fx, hz = rot ? fx : fz; const x = r.x0 + 1.2 + hx + R() * (r.x1 - r.x0 - 2.4 - 2 * hx), z = r.z0 + 1.2 + hz + R() * (r.z1 - r.z0 - 2.4 - 2 * hz);
      if (!fits(r, occ, x, z, hx, hz, 0.9)) continue; mark(r, occ, x, z, hx, hz); shapes.push(...PROPS[kind](x, r.roofY, z, rot, R)); r.props.push({ kind, x, z }); placed++; break;
    }
  }
  // spawn-number billboard on the outer edge of spawn towers, facing the centre
  if (r.spawn != null) {
    const e = exitPoint(r, r.x * 3, r.z * 3); const n = sideNormal[e.side]; const alongX = !n[0]; const c = alongX ? r.x : r.z; const px = alongX ? c : r.x + n[0] * (r.hx - 0.55), pz = alongX ? r.z + n[1] * (r.hz - 0.55) : c; const W = 2.3, H = 2.3, y0 = r.roofY + 1.35;
    const t = alongX ? [1, 0] : [0, 1]; const face = [-n[0], -n[1]]; // faces the centre
    for (const sg of [-1, 1]) { const bx = px + t[0] * W * 0.8 * sg + n[0] * 0.12, bz = pz + t[1] * W * 0.8 * sg + n[1] * 0.12; shapes.push(['m', [bx, r.roofY, bz], [bx, y0 + H * 2 + 0.2, bz], 0.12, M.dark]); }
    shapes.push(['b', px, y0 + H, pz, alongX ? W : 0.07, H, alongX ? 0.07 : W, 0, M.black, 3]);
    // front quad (number). right vector as seen from the front = up x face
    const rgt = [face[1], -face[0]]; const fp = [px + face[0] * 0.085, pz + face[1] * 0.085]; const U = ATLAS.num(r.spawn);
    const P = (a, h) => [fp[0] + rgt[0] * a, y0 + h, fp[1] + rgt[1] * a];
    shapes.push(['q', P(-W, 0), P(W, 0), P(W, 2 * H), P(-W, 2 * H), [face[0], 0, face[1]], M.neonTex, U[0], U[3], U[2], U[1]]);
    r.sign = [px, y0 + H, pz];
  }
  // masts with beacons (thin, decorative)
  if (r.kind === 'outer' || R() < 0.45) {
    const tall = r.theme === 'radio' ? 15 : 4 + R() * 5; const cx = r.x + (R() < 0.5 ? -1 : 1) * (r.hx - 0.9), cz = r.z + (R() < 0.5 ? -1 : 1) * (r.hz - 0.9); const y = r.roofY;
    devShapes.push(['m', [cx, y, cz], [cx, y + tall, cz], r.theme === 'radio' ? 0.16 : 0.08, M.dark]);
    if (r.theme === 'radio') for (let h = 3; h < tall; h += 3) { devShapes.push(['m', [cx - 0.7, y + h, cz], [cx + 0.7, y + h, cz], 0.06, M.dark], ['m', [cx, y + h, cz - 0.7], [cx, y + h, cz + 0.7], 0.06, M.dark]); }
    devShapes.push(['b', cx, y + tall + 0.1, cz, 0.11, 0.11, 0.11, 0, M.beacon(Math.floor(R() * 200) + 20)]);
  }
}

// ---------- pass 1: everything; final nav
const all = shapes.concat(devShapes);
let { bvh, tris } = buildBVH(shapes); // collision excludes thin decorative devShapes
console.log('collision tris', tris, 'shapes', shapes.length, '+', devShapes.length);
let problems = 0;
for (const r of roofs) { r.g = makeGrid(bvh, r); r.m = reach(r.g); r.walkable = r.m.reduce((a, b) => a + b, 0); }
const reachable = (r, p, d = 0.8) => !!snap(r.g, r.m, p[0], p[2], d);
for (const lk of links) {
  const a = roofs[lk.a], b = roofs[lk.b];
  if (!reachable(a, lk.p0) || !reachable(b, lk.p1)) { console.log('!! link anchor unreachable', lk.kind, a.id, b.id, reachable(a, lk.p0), reachable(b, lk.p1)); problems++; }
  if (lk.kind === 'zip') { // re-validate corridor against final geometry
    if (!zipClear(bvh, lk.p0, lk.p1, lk.lift, process.env.DBG ? a.id + '>' + b.id : null)) { console.log('!! zip blocked', a.id, b.id); problems++; }
    const len = lk.len;
    lk.time = len / 13;
  }
  if (lk.kind === 'pad') { // ballistic arc search
    const A = lk.p0, B = lk.p1; const d = Math.hypot(B[0] - A[0], B[2] - A[2]); let ok = null;
    for (let T = Math.max(1.5, d / 17); T <= 3.6; T += 0.1) {
      const vy = (B[1] - A[1] + 0.5 * G * T * T) / T; const vx = (B[0] - A[0]) / T, vz = (B[2] - A[2]) / T; let hit = false; let prev = null; const N = 28;
      for (let i = 1; i <= N && !hit; i++) { const t = T * i / N; const p = [A[0] + vx * t, A[1] + vy * t - 0.5 * G * t * t, A[2] + vz * t]; const lastBit = i >= N - 1;
        if (prev && !lastBit) { if (segHit(bvh, up(prev, 0.35), up(p, 0.35)) || segHit(bvh, up(prev, 1.75), up(p, 1.75))) hit = true; }
        prev = p; }
      if (!hit) { ok = { T, v: [vx, vy, vz], apex: A[1] + vy * vy / (2 * G) }; break; }
    }
    if (!ok) { console.log('!! pad arc blocked', a.id, b.id); problems++; } else { lk.time = ok.T; lk.v = ok.v; lk.apex = ok.apex; }
  }
  if (lk.kind === 'jump') { // run up the kicker, fly, run down the far one
    const dA = Math.hypot(lk.k0[0] - lk.p0[0], lk.k0[2] - lk.p0[2]), dB = Math.hypot(lk.k1[0] - lk.p1[0], lk.k1[2] - lk.p1[2]), dF = Math.hypot(lk.k1[0] - lk.k0[0], lk.k1[2] - lk.k0[2]);
    const tA = dA / 6.2, tB = dB / 6.2, tF = dF / 6.6; lk.time = tA + tF + tB; lk.seg = [tA / lk.time, (tA + tF) / lk.time]; }
  if (lk.kind === 'ladder') lk.time = lk.h / 3.2 + 0.5; if (lk.kind === 'step') lk.time = 0.55;
}
for (const r of roofs) if (r.spawnPt && !reachable(r, r.spawnPt, 1.2)) { console.log('!! spawn unreachable', r.id); problems++; }

// perches: reachable cells near the roof edge (sniping spots) ; cover cells: next to something tall
for (const r of roofs) {
  const g = r.g; r.perch = []; r.cover = [];
  for (let k = 0; k < g.nx * g.nz; k++) { if (!r.m[k]) continue; const [x, z] = cellXZ(g, k); const de = Math.min(x - r.x0, r.x1 - x, z - r.z0, r.z1 - z);
    if (de > 0.6 && de < 2.9) { const i = k % g.nx, j = (k / g.nx) | 0; const dir = de === x - r.x0 ? [-1, 0] : de === r.x1 - x ? [1, 0] : de === z - r.z0 ? [0, -1] : [0, 1]; let rim = de < 1.25;
      for (const st of [1, 2]) { const a = i + dir[0] * st, b = j + dir[1] * st; if (a < 0 || b < 0 || a >= g.nx || b >= g.nz || !r.m[b * g.nx + a]) rim = true; } if (rim) r.perch.push(k); }
    let tall = 0; for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const i = (k % g.nx) + dx, j = ((k / g.nx) | 0) + dz; if (i < 0 || j < 0 || i >= g.nx || j >= g.nz) continue; if (g.hgt[j * g.nx + i] > 1.5) tall++; } if (tall) r.cover.push(k); }
}

// ---------- skyline (non-playable silhouettes)
const sky = []; { const R = rng(90210); let tries = 0;
  while (sky.length < 86 && tries++ < 4000) { const a = R() * Math.PI * 2, d = 104 + R() * R() * 150; const w = 9 + R() * 16, dp = 9 + R() * 16; const h = 28 + R() * 62 + (d > 150 ? R() * 70 : 0) + (R() < 0.12 ? 50 : 0); const x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (sky.some(s => Math.abs(s[0] - x) < (s[2] + w) / 2 + 3 && Math.abs(s[1] - z) < (s[3] + dp) / 2 + 3)) continue; sky.push([+x.toFixed(1), +z.toFixed(1), +w.toFixed(1), +dp.toFixed(1), +h.toFixed(1), Math.floor(R() * 255)]); } }

// ---------- output
const b64 = (u8) => Buffer.from(u8).toString('base64');
const r3 = a => a.map(v => +v.toFixed(3));
const cleanShape = s => s.map(v => Array.isArray(v) ? v.map(q => typeof q === 'number' ? +q.toFixed(3) : q) : (typeof v === 'number' ? +v.toFixed(3) : v));
const out = {
  version: 1, cell: CELL, parapet: PARAPET, gravity: G, zone: ZONE,
  roofs: roofs.map(r => ({ id: r.id, name: r.name, kind: r.kind, type: r.type, x: +r.x.toFixed(3), z: +r.z.toFixed(3), rot: r.rot, sy: +r.sy.toFixed(4), roofY: +r.roofY.toFixed(3), hx: r.hx, hz: r.hz, spawn: r.spawn ?? -1, spawnPt: r.spawnPt ? r3(r.spawnPt) : null, sign: r.sign ? r3(r.sign) : null,
    grid: { nx: r.g.nx, nz: r.g.nz, ox: +r.g.ox.toFixed(3), oz: +r.g.oz.toFixed(3), m: b64(r.m) }, perch: r.perch, cover: r.cover })),
  links: links.map(l => ({ kind: l.kind, a: l.a, b: l.b, oneWay: l.oneWay, p0: r3(l.p0), p1: r3(l.p1), time: +(l.time ?? 1).toFixed(3), ...(l.v ? { v: r3(l.v), apex: +l.apex.toFixed(2) } : {}), ...(l.c0 ? { c0: r3(l.c0), c1: r3(l.c1), lift: l.lift, len: +l.len.toFixed(2) } : {}), ...(l.wall ? { wall: r3(l.wall), n: l.n, h: +l.h.toFixed(3) } : {}), ...(l.base ? { base: r3(l.base) } : {}), ...(l.k0 ? { k0: r3(l.k0), k1: r3(l.k1), seg: r3(l.seg) } : {}) })),
  shapes: shapes.map(cleanShape), deco: devShapes.map(cleanShape), fence: fence.map(cleanShape), skyline: sky,
};
fs.writeFileSync('dist/arena.json', JSON.stringify(out));
console.log('arena.json', (fs.statSync('dist/arena.json').size / 1024).toFixed(0), 'KB; problems:', problems, '; links', links.length, '/', LINKS.length);
console.log(roofs.map(r => `${r.id} walk=${r.walkable} perch=${r.perch.length} cover=${r.cover.length} props=${r.props.map(p => p.kind).join(',')}`).join('\n'));

// ---------- debug map (top-down)
{ const S = 4, W = 880, H = 880, cx = W / 2, cz = H / 2; const img = Buffer.alloc(W * H * 3, 18);
  const px = (x, z, c) => { const i = Math.round(cx + x * S), j = Math.round(cz + z * S); if (i < 0 || j < 0 || i >= W || j >= H) return; const o = (j * W + i) * 3; img[o] = c[0]; img[o + 1] = c[1]; img[o + 2] = c[2]; };
  const line = (a, b, c) => { const n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) * S * 1.5); for (let k = 0; k <= n; k++) px(a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n, c); };
  for (const s of sky) for (let x = -s[2] / 2; x < s[2] / 2; x += 0.25) for (let z = -s[3] / 2; z < s[3] / 2; z += 0.25) px(s[0] + x, s[1] + z, [34, 34, 38]);
  for (const r of roofs) { const g = r.g; for (let k = 0; k < g.nx * g.nz; k++) { const [x, z] = cellXZ(g, k); const h = g.hgt[k]; const c = r.m[k] ? [95, 95, 95] : h > 1.5 ? [200, 60, 60] : h > 0.5 ? [200, 150, 50] : [45, 45, 45]; for (const dx of [-0.125, 0.125]) for (const dz of [-0.125, 0.125]) px(x + dx, z + dz, c); }
    for (const k of r.perch) { const [x, z] = cellXZ(g, k); px(x, z, [130, 130, 160]); } if (r.spawnPt) for (let a = 0; a < 6.3; a += 0.2) px(r.spawnPt[0] + Math.cos(a) * 0.8, r.spawnPt[2] + Math.sin(a) * 0.8, [80, 255, 120]); }
  const col = { zip: [90, 200, 255], pad: [255, 80, 200], jump: [255, 255, 80], ladder: [120, 255, 120], step: [255, 160, 60] };
  for (const l of links) line([l.p0[0], l.p0[2]], [l.p1[0], l.p1[2]], col[l.kind]);
  for (const ph of ZONE.phases) for (let a = 0; a < 6.3; a += 0.004) px(Math.cos(a) * ph.r, Math.sin(a) * ph.r, [150, 30, 40]);
  await sharp(img, { raw: { width: W, height: H, channels: 3 } }).png().toFile('shots/arena_map.png'); }
