// Builds dist/models.bin (cop + weapons + angel as slim GLBs without textures) and the texture manifests for build_tex.
import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { weldPrimitive, simplifyPrimitive, joinPrimitives, prune, dedup, resample, quantize } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp'; import fs from 'node:fs';

const COP = '/mnt/user-data/attachments/6dbbdcc5-e3cb-578c-b6ca-1e3d4fc8a7da/f02e98f0-cyborg_cop.glb';
const RIFLE = '/mnt/user-data/uploads/fn_ballista__1_.glb';
const ANGEL = '/mnt/user-data/uploads/angel_1.glb';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
await MeshoptSimplifier.ready;
fs.mkdirSync('ext/pack', { recursive: true });
const tris = (doc) => doc.getRoot().listMeshes().reduce((s, m) => s + m.listPrimitives().reduce((a, p) => a + (p.getIndices() ? p.getIndices().getCount() / 3 : 0), 0), 0);
function disposeTree(n) { for (const c of n.listChildren()) disposeTree(c); const m = n.getMesh(); if (m) { for (const p of m.listPrimitives()) p.dispose(); m.dispose(); } n.dispose(); }
function stripMaterial(doc) { for (const t of doc.getRoot().listTextures()) t.dispose(); for (const m of doc.getRoot().listMaterials()) { for (const e of m.listExtensions()) e.dispose(); m.setBaseColorFactor([1, 1, 1, 1]).setEmissiveFactor([0, 0, 0]).setAlphaMode('OPAQUE').setDoubleSided(false).setMetallicFactor(0).setRoughnessFactor(1); } for (const e of doc.getRoot().listExtensionsUsed()) e.dispose(); }
const mul = (m, x, y, z, w) => [m[0] * x + m[4] * y + m[8] * z + m[12] * w, m[1] * x + m[5] * y + m[9] * z + m[13] * w, m[2] * x + m[6] * y + m[10] * z + m[14] * w];
function mat4mul(a, b) { const o = new Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = s; } return o; }
function mat4inv(m) { // general inverse
  const inv = new Array(16);
  inv[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] + m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
  inv[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] - m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
  inv[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] + m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
  inv[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] - m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
  inv[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] - m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
  inv[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] + m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
  inv[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] - m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
  inv[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] + m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
  inv[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] + m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
  inv[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] - m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
  inv[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] + m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
  inv[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] - m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
  inv[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] - m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
  inv[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] + m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
  inv[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] - m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
  inv[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] + m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];
  let det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12]; det = 1 / det; return inv.map(v => v * det);
}
// static geometry accumulator -> gltf-transform primitive
class Acc { constructor() { this.P = []; this.N = []; this.UV = []; this.I = []; this.nv = 0; }
  add(P, N, UV, I) { const b = this.nv; for (const v of P) this.P.push(v); for (const v of N) this.N.push(v); for (const v of UV) this.UV.push(v); for (const i of I) this.I.push(i + b); this.nv += P.length / 3; }
  toPrim(doc, buf, mat) { const n = this.nv; const p = doc.createPrimitive().setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(this.P)).setBuffer(buf)).setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(new Float32Array(this.N)).setBuffer(buf)).setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(new Float32Array(this.UV)).setBuffer(buf)).setIndices(doc.createAccessor().setType('SCALAR').setArray(n < 65536 ? new Uint16Array(this.I) : new Uint32Array(this.I)).setBuffer(buf)); if (mat) p.setMaterial(mat); return p; } }
// world-space (optionally skinned) geometry of a mesh node, then mapped through matrix X
function bake(node, X) {
  const mesh = node.getMesh(); const skin = node.getSkin(); const out = [];
  let JM = null; if (skin) { const joints = skin.listJoints(); const ibm = skin.getInverseBindMatrices(); JM = joints.map((j, k) => { const e = []; ibm.getElement(k, e); return mat4mul(j.getWorldMatrix(), e); }); }
  const W = node.getWorldMatrix();
  for (const prim of mesh.listPrimitives()) {
    const pos = prim.getAttribute('POSITION'), nor = prim.getAttribute('NORMAL'), uv = prim.getAttribute('TEXCOORD_0'), jn = prim.getAttribute('JOINTS_0'), wt = prim.getAttribute('WEIGHTS_0'); const n = pos.getCount();
    const P = new Float32Array(n * 3), N = new Float32Array(n * 3), UV = new Float32Array(n * 2); const e = [], f = [], g = [];
    for (let i = 0; i < n; i++) {
      pos.getElement(i, e); let p = [0, 0, 0], q = [0, 0, 0]; const nn = nor ? nor.getElement(i, []) : [0, 1, 0];
      if (JM && jn) { jn.getElement(i, f); wt.getElement(i, g); let ws = 0; for (let k = 0; k < 4; k++) { const w = g[k]; if (w <= 0) continue; ws += w; const m = JM[f[k]]; const a = mul(m, e[0], e[1], e[2], 1), b = mul(m, nn[0], nn[1], nn[2], 0); for (let c = 0; c < 3; c++) { p[c] += a[c] * w; q[c] += b[c] * w; } } if (ws > 0) for (let c = 0; c < 3; c++) p[c] /= ws; }
      else { p = mul(W, e[0], e[1], e[2], 1); q = mul(W, nn[0], nn[1], nn[2], 0); }
      if (X) { p = mul(X, p[0], p[1], p[2], 1); q = mul(X, q[0], q[1], q[2], 0); }
      const l = Math.hypot(q[0], q[1], q[2]) || 1; P.set(p, i * 3); N.set([q[0] / l, q[1] / l, q[2] / l], i * 3); if (uv) { uv.getElement(i, e); UV.set([e[0], e[1]], i * 2); }
    }
    out.push({ mat: prim.getMaterial()?.getName(), P, N, UV, I: Array.from(prim.getIndices().getArray()) });
  }
  return out;
}
function bounds(P) { const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9]; for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], P[i + k]); mx[k] = Math.max(mx[k], P[i + k]); } return [mn, mx]; }
const simp = (prim, ratio, error = 0.004) => { weldPrimitive(prim, {}); if (ratio < 1) simplifyPrimitive(prim, { simplifier: MeshoptSimplifier, ratio, error, lockBorder: false }); return prim; };
const manifest = [];

// ============ weapons document (rifle fp / tp, pistol)
const wdoc = new Document(); const wbuf = wdoc.createBuffer(); const wscene = wdoc.createScene('weapons');
{
  const doc = await io.read(RIFLE); const nodes = doc.getRoot().listNodes().filter(n => n.getMesh());
  const pick = { 'HawkerHX.smd': ['body', 0.42], 'barrel.smd': ['body', 0.6], 'barrel_base.smd': ['body', 0.42], 'barrel_muzzle.smd': ['body', 0.3], 'bipod.smd': ['body', 0.14], 'bolt.smd': ['bolt', 0.42],
    'bullets.smd': ['mag', 0.3], 'grip_main.smd': ['body', 0.7], 'mag.smd': ['mag', 0.7], 'sight_scope.smd': ['body', 0.42], 'sight_scope_rear.smd': ['body', 0.5], 'stock.smd': ['body', 0.3], 'underbarrel.smd': ['body', 0.55] };
  // canonical frame: barrel -Z, up +Y, origin at the top of the pistol grip. source world: barrel +Z, up +Y
  const X = [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -0.072, -0.25, 1];
  const groups = { body: {}, bolt: {}, mag: {} }; const ratios = {}; const all = new Acc();
  for (const n of nodes) { const key = n.getMesh().getName().replace('other\\', '').split('_')[0].replace(/\.smd.*/, '.smd'); const full = n.getMesh().getName().replace('other\\', ''); const k2 = Object.keys(pick).find(k => full.startsWith(k + '_')); if (!k2) continue; const [grp, ratio] = pick[k2];
    for (const b of bake(n, X)) { const a = (groups[grp][b.mat] ||= new Acc()); a.add(b.P, b.N, b.UV, b.I); ratios[grp + '/' + b.mat] = ratio; all.add(b.P, b.N, b.UV, b.I); } }
  const fp = wdoc.createNode('rifle_fp'); wscene.addChild(fp); let total = 0;
  for (const [grp, mats] of Object.entries(groups)) { const mesh = wdoc.createMesh('rifle_' + grp); for (const [mname, acc] of Object.entries(mats)) { const mat = wdoc.createMaterial(mname); const prim = simp(acc.toPrim(wdoc, wbuf, mat), ratios[grp + '/' + mname], 0.003); mesh.addPrimitive(prim); total += prim.getIndices().getCount() / 3; } fp.addChild(wdoc.createNode('rifle_' + grp).setMesh(mesh)); }
  const [mn, mx] = bounds(all.P); console.log('rifle fp tris', total, 'bounds', mn.map(v => v.toFixed(3)), mx.map(v => v.toFixed(3)));
  // third-person LOD: one flat mesh
  { const acc = new Acc(); acc.P = all.P; acc.N = all.N; acc.UV = all.UV; acc.I = all.I; acc.nv = all.nv; const prim = acc.toPrim(wdoc, wbuf, wdoc.createMaterial('rifle_tp')); prim.setAttribute('TEXCOORD_0', null);
    weldPrimitive(prim, {}); simplifyPrimitive(prim, { simplifier: MeshoptSimplifier, ratio: 0.03, error: 0.12, lockBorder: false });
    wscene.addChild(wdoc.createNode('rifle_tp').setMesh(wdoc.createMesh('rifle_tp').addPrimitive(prim))); console.log('rifle tp tris', prim.getIndices().getCount() / 3); }
  // textures -> pack
  const texOf = { HawkerHX_base: 0, HawkerHX_barrel: 2, mtl_sat_sn_aden_muzzle: 10, mtl_sat_sn_aden_bipod: 12, HawkerHX_base_bolt: 13, att_ammo_338lp: 14, HawkerHX_grip_main: 15, HawkerHX_mag: 18, att_lens_scope: 21, HawkerHX_sight_scope_bubble: 23, HawkerHX_sight_scope_bubble_glass: 23, HawkerHX_sight_scope_adds: 26, HawkerHX_sight_scope: 26, HawkerHX_stock: 32, HawkerHX_underbarrel: 36 };
  const used = new Set(wdoc.getRoot().listMaterials().map(m => m.getName())); const seen = new Set();
  for (const [m, i] of Object.entries(texOf)) { if (!used.has(m)) continue; const name = 'w_' + i; wdoc.getRoot().listMaterials().find(q => q.getName() === m).setExtras({ tex: name }); if (seen.has(i)) continue; seen.add(i); const f = `ext/rifle/img${String(i).padStart(2, '0')}.png`; const meta = await sharp(f).metadata(); manifest.push({ name, group: 'weapon', file: f, w: Math.min(1024, meta.width), h: Math.min(512, meta.height / (meta.width / Math.min(1024, meta.width))) | 0 || 512, q: 74 }); }
}
// ============ cop
const cdoc = await io.read(COP);
{
  const root = cdoc.getRoot(); const byName = (n) => root.listNodes().find(x => x.getName() === n);
  // --- pistol first (static): express in the pistol node's own frame, then canonicalise
  { const pn = byName('pistol_1_10'); const inv = mat4inv(pn.getWorldMatrix()); const parts = { body: new Acc(), slide: new Acc() }; let allP = [];
    pn.traverse(n => { if (!n.getMesh() || /^bullet/.test(n.getParentNode().getName())) return; const grp = /slide/.test(n.getParentNode().getName()) ? 'slide' : 'body'; for (const b of bake(n, inv)) { parts[grp].add(b.P, b.N, b.UV, b.I); allP.push(...b.P); } });
    const [mn, mx] = bounds(allP); console.log('pistol local bounds', mn.map(v => v.toFixed(3)), mx.map(v => v.toFixed(3)), 'node scale', pn.getWorldScale().map(v => v.toFixed(3)));
    const S = 0.023; const X = [S, 0, 0, 0, 0, 0, -S, 0, 0, S, 0, 0, 0, 0, 0, 1]; // local: barrel +Y, up +Z -> canonical: barrel -Z, up +Y, metres
    const pnode = wdoc.createNode('pistol'); wscene.addChild(pnode); const mat = wdoc.createMaterial('pistol').setExtras({ tex: 'w_pistol' });
    for (const [g, acc] of Object.entries(parts)) { const P2 = [], N2 = []; for (let i = 0; i < acc.P.length; i += 3) { const p = mul(X, acc.P[i], acc.P[i + 1], acc.P[i + 2], 1), q = mul(X, acc.N[i], acc.N[i + 1], acc.N[i + 2], 0); P2.push(...p); N2.push(...q); } acc.P = P2; acc.N = N2; const prim = simp(acc.toPrim(wdoc, wbuf, mat), g === 'slide' ? 0.8 : 0.6, 0.002); pnode.addChild(wdoc.createNode('pistol_' + g).setMesh(wdoc.createMesh('pistol_' + g).addPrimitive(prim))); console.log('pistol', g, 'tris', prim.getIndices().getCount() / 3); }
    manifest.push({ name: 'w_pistol', group: 'weapon', file: 'ext/cop/img00.jpg', w: 512, h: 512, q: 74 });
    disposeTree(pn); disposeTree(byName('muzzle flash_78')); }
  // --- body: atlas remap + merge
  const tiles = { Body: 0, headgear: 1, gear: 2, Gear_2: 3, Vest_and_Belt: 4, Boot: 5, Hood: 6 }; const prims = []; let skinNode = null; const one = cdoc.createMaterial('cop');
  for (const n of root.listNodes()) { const m = n.getMesh(); if (!m || !n.getSkin()) continue; skinNode ||= n;
    for (const p of m.listPrimitives()) { const t = tiles[p.getMaterial().getName()]; const col = t % 4, row = (t / 4) | 0; const uv = p.getAttribute('TEXCOORD_0').clone(); const e = [];
      for (let i = 0; i < uv.getCount(); i++) { uv.getElement(i, e); let u = e[0] - Math.floor(e[0]), v = e[1] - Math.floor(e[1]); if (t === 6) { u = 0.5; v = 0.5; } u = Math.min(0.998, Math.max(0.002, u)); v = Math.min(0.998, Math.max(0.002, v)); uv.setElement(i, [(col + u) / 4, (row + v) / 2]); }
      p.setAttribute('TEXCOORD_0', uv); p.setAttribute('TANGENT', null); p.setMaterial(one); prims.push(p); } }
  const joined = joinPrimitives(prims); const before = joined.getIndices().getCount() / 3;
  simp(joined, +(process.env.COP_RATIO || 0.17), 0.006);
  const mesh = cdoc.createMesh('cop').addPrimitive(joined);
  for (const n of root.listNodes()) { if (n.getMesh() && n !== skinNode) { n.setMesh(null); n.setSkin(null); } } skinNode.setMesh(mesh).setName('cop_mesh');
  stripMaterial(cdoc); await cdoc.transform(prune({ keepLeaves: true }), dedup({ propertyTypes: ['Accessor', 'Mesh'] }));
  console.log('cop tris', before, '->', joined.getIndices().getCount() / 3, 'verts', joined.getAttribute('POSITION').getCount());
  // atlases
  const T = 512; const img = (i, ext) => `ext/cop/img${String(i).padStart(2, '0')}.${ext}`;
  const baseTiles = [[img(3, 'png'), 0], [img(6, 'png'), 1], [img(10, 'png'), 2], [img(14, 'png'), 3], [img(17, 'png'), 4], [img(20, 'png'), 5]];
  const comp = async (list, out, flat) => { const layers = []; for (const [f, t] of list) layers.push({ input: await sharp(f).resize(T, T).removeAlpha().grayscale().toBuffer(), left: (t % 4) * T, top: ((t / 4) | 0) * T }); if (flat) layers.push({ input: await sharp({ create: { width: T, height: T, channels: 3, background: flat } }).png().toBuffer(), left: 2 * T, top: T }); await sharp({ create: { width: 4 * T, height: 2 * T, channels: 3, background: '#000' } }).composite(layers).png().toFile(out); };
  await comp(baseTiles, 'ext/pack/cop_base.png', '#3a3a3a'); await comp([[img(8, 'png'), 1], [img(12, 'png'), 2]], 'ext/pack/cop_emis.png');
  manifest.push({ name: 'cop_base', group: 'char', file: 'ext/pack/cop_base.png', w: 4 * T, h: 2 * T, q: 78 }, { name: 'cop_emis', group: 'char', file: 'ext/pack/cop_emis.png', w: 2 * T, h: T, q: 70 });
}
// ============ angel
const adoc = await io.read(ANGEL);
{
  const root = adoc.getRoot(); const an = root.listAnimations()[0];
  for (const n of root.listNodes()) if (n.getName() === 'glow_bg') disposeTree(n);
  const R = { skeleton: [+(process.env.ANGEL_BODY || 0.13), 0.004], arm: [+(process.env.ANGEL_ARM || 0.06), 0.006], halo_outer: [0.06, 0.01] };
  for (const m of root.listMeshes()) for (const p of m.listPrimitives()) { p.setAttribute('TANGENT', null); const nm = m.getName(); const r = /^skeleton/.test(nm) ? R.skeleton : /arm_mesh/.test(nm) ? R.arm : /halo_outer/.test(nm) ? R.halo_outer : null; const b = p.getIndices().getCount() / 3; if (r) simp(p, r[0], r[1]); }
  // keep only channels that drive joints, mesh nodes or their ancestors
  const keep = new Set(); const mark = (n) => { while (n && !keep.has(n)) { keep.add(n); n = n.getParentNode(); } };
  for (const s of root.listSkins()) for (const j of s.listJoints()) mark(j); for (const n of root.listNodes()) if (n.getMesh()) mark(n);
  let dropped = 0; for (const c of an.listChannels()) if (!keep.has(c.getTargetNode())) { const s = c.getSampler(); c.dispose(); s.dispose(); dropped++; }
  // decimate keys to ~12 fps before resample (the source is baked at ~48 fps)
  const STEP = +(process.env.ANGEL_STEP || 4);
  for (const s of an.listSamplers()) { const inp = s.getInput(), outp = s.getOutput(); const n = inp.getCount(); if (n < 12) continue; const es = outp.getElementSize(); const ia = inp.getArray(), oa = outp.getArray(); const idx = []; for (let i = 0; i < n; i += STEP) idx.push(i); if (idx[idx.length - 1] !== n - 1) idx.push(n - 1);
    const ni = new Float32Array(idx.length), no = new Float32Array(idx.length * es); idx.forEach((k, j) => { ni[j] = ia[k]; for (let e = 0; e < es; e++) no[j * es + e] = oa[k * es + e]; }); s.setInput(adoc.createAccessor().setType('SCALAR').setArray(ni).setBuffer(inp.getBuffer())); s.setOutput(adoc.createAccessor().setType(outp.getType()).setArray(no).setBuffer(outp.getBuffer())); }
  const mats = { skeletonskeleton_mat: 'angel_body', handarm_mat: 'angel_arm', halo_mat: 'angel_halo', inner_halo_mat: 'angel_halo_in', outter_halo_mat: 'angel_halo_out' };
  for (const m of root.listMaterials()) if (mats[m.getName()]) m.setName(mats[m.getName()]);
  stripMaterial(adoc);
  await adoc.transform(resample({ tolerance: 0.0006 }), prune({ keepLeaves: false }), dedup({ propertyTypes: ['Accessor', 'Mesh'] }));
  let ab = 0; for (const s of an.listSamplers()) ab += s.getInput().getArray().byteLength + s.getOutput().getArray().byteLength;
  console.log('angel tris', tris(adoc), 'channels kept', an.listChannels().length, 'dropped', dropped, 'anim bytes', ab, 'nodes', root.listNodes().length);
  manifest.push({ name: 'angel_body', group: 'angel', file: 'ext/angel/img00.png', w: 1024, h: 1024, q: 76 }, { name: 'angel_arm', group: 'angel', file: 'ext/angel/img04.png', w: 512, h: 512, q: 76 });
}
// ============ write
await wdoc.transform(prune(), dedup({ propertyTypes: ['Accessor', 'Mesh'] }), quantize({ quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12 }));
const QS = quantize({ pattern: /^(NORMAL|TEXCOORD_\d+|WEIGHTS_\d+)$/, quantizeNormal: 8, quantizeTexcoord: 14, quantizeWeight: 8 });
await cdoc.transform(QS); await adoc.transform(QS);
const parts = { weapons: await io.writeBinary(wdoc), cop: await io.writeBinary(cdoc), angel: await io.writeBinary(adoc) };
let off = 0; const index = {}; const bufs = []; for (const [k, u8] of Object.entries(parts)) { const pad = (4 - (u8.length % 4)) % 4; index[k] = { off, len: u8.length }; bufs.push(Buffer.from(u8), Buffer.alloc(pad)); off += u8.length + pad; console.log(k + '.glb', (u8.length / 1024).toFixed(0), 'KB'); }
let hj = Buffer.from(JSON.stringify(index)); const hp = (4 - (hj.length % 4)) % 4; hj = Buffer.concat([hj, Buffer.alloc(hp, 0x20)]); const head = Buffer.alloc(8); head.write('SCMD', 0); head.writeUInt32LE(hj.length, 4);
fs.writeFileSync('dist/models.bin', Buffer.concat([head, hj, ...bufs])); console.log('models.bin', ((8 + hj.length + off) / 1e6).toFixed(2), 'MB');
for (const [k, u8] of Object.entries(parts)) fs.writeFileSync(`ext/${k}.glb`, u8);
fs.writeFileSync('ext/pack/models.json', JSON.stringify(manifest, null, 1));
