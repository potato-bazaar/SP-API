import { NodeIO } from '@gltf-transform/core'; import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const uvr = (prim) => { const uv = prim.getAttribute('TEXCOORD_0'); if (!uv) return 'no-uv'; let mn = [1e9, 1e9], mx = [-1e9, -1e9]; const e = []; for (let i = 0; i < uv.getCount(); i++) { uv.getElement(i, e); for (let k = 0; k < 2; k++) { mn[k] = Math.min(mn[k], e[k]); mx[k] = Math.max(mx[k], e[k]); } } return `u[${mn[0].toFixed(2)},${mx[0].toFixed(2)}] v[${mn[1].toFixed(2)},${mx[1].toFixed(2)}]`; };
{ const doc = await io.read('/mnt/user-data/attachments/6dbbdcc5-e3cb-578c-b6ca-1e3d4fc8a7da/f02e98f0-cyborg_cop.glb'); console.log('COP');
  for (const m of doc.getRoot().listMeshes()) for (const p of m.listPrimitives()) console.log(' ', m.getName(), p.getMaterial().getName(), 'verts', p.getAttribute('POSITION').getCount(), uvr(p), 'attrs', p.listSemantics().join(',')); }
{ const doc = await io.read('/mnt/user-data/uploads/fn_ballista__1_.glb'); console.log('RIFLE');
  for (const m of doc.getRoot().listMeshes()) for (const p of m.listPrimitives()) { const n = m.getName(); if (/barrel_base_|barrel_heavy|barrel_long|grip_main_|mag_ext|silencer|stock_|underbarrel_/.test(n)) continue; console.log(' ', n.replace('other\\', ''), p.getMaterial().getName(), 'verts', p.getAttribute('POSITION').getCount(), uvr(p)); } }
{ const doc = await io.read('/mnt/user-data/uploads/angel_1.glb'); console.log('ANGEL');
  const meshes = doc.getRoot().listMeshes(); const sig = (p) => { const a = p.getAttribute('POSITION').getArray(); let s = 0; for (let i = 0; i < a.length; i += 997) s += a[i]; return a.length + ':' + s.toFixed(6); };
  for (const m of meshes) for (const p of m.listPrimitives()) console.log(' ', m.getName().slice(0, 40), p.getMaterial().getName(), 'verts', p.getAttribute('POSITION').getCount(), uvr(p), 'sig', sig(p), p.listSemantics().join(','));
  const an = doc.getRoot().listAnimations()[0]; const ch = an.listChannels(); const stat = {}; let bytes = 0; const counts = {};
  for (const c of ch) { const s = c.getSampler(); const k = c.getTargetPath(); stat[k] = (stat[k] || 0) + 1; const n = s.getInput().getCount(); counts[n] = (counts[n] || 0) + 1; bytes += s.getOutput().getArray().byteLength + s.getInput().getArray().byteLength; }
  console.log(' channels', ch.length, stat, 'keycount histogram', counts, 'anim bytes', bytes, 'interp', ch[0].getSampler().getInterpolation());
  const targets = new Set(ch.map(c => c.getTargetNode().getName())); console.log(' animated nodes', targets.size, [...targets].filter(n => /halo|blood|torus|glow|control|root/i.test(n)).slice(0, 30));
  for (const n of doc.getRoot().listNodes()) if (/halo|torus|blood|glow/.test(n.getName())) console.log('  node', n.getName(), 'parent', n.getParentNode()?.getName(), 't', n.getTranslation().map(v => v.toFixed(4)), 's', n.getScale().map(v => v.toFixed(3)));
}
