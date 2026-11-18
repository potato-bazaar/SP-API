#!/usr/bin/env python3
"""Pack the blind one: "Creep Horror Creature" by Goofy goober bird (CC-BY-4.0, Sketchfab).

  python3 client/tools/pack_creature.py CREEP.glb client/dist

Keeps the skinned mesh, its skeleton and the clips the game plays (walk, sleep, sniff, bite, roar, death),
drops the other clips and the embedded PNG textures, and writes  creep.txt (binary glTF as base64)  and
creep_base.jpg (the colour map at 512 px). Nothing is re-rigged: the artist's skeleton and animation are used as shipped.
"""
import sys, struct, json, base64, io
from PIL import Image
SRC, OUT = sys.argv[1], sys.argv[2]
KEEP = ['Walk1', 'Sleep_loop', 'Sniff', 'Bite', 'Roar', 'Death']
b = open(SRC, 'rb').read(); cl, _ = struct.unpack('<II', b[12:20]); j = json.loads(b[20:20 + cl]); bin0 = b[20 + cl + 8:]
m0 = j['materials'][0]; ti = m0['pbrMetallicRoughness']['baseColorTexture']['index']; bv = j['bufferViews'][j['images'][j['textures'][ti]['source']]['bufferView']]
Image.open(io.BytesIO(bin0[bv.get('byteOffset', 0):bv.get('byteOffset', 0) + bv['byteLength']])).convert('RGB').resize((512, 512), Image.LANCZOS).save(f'{OUT}/creep_base.jpg', quality=84)
j['animations'] = [a for a in j['animations'] if any(('|' + k + '_Action') in a['name'] for k in KEEP)]
for a in j['animations']: a['name'] = a['name'].split('|')[1].replace('_Action', '')
for k in ('images', 'textures', 'samplers'): j.pop(k, None)
j['materials'] = [dict(name='creep', pbrMetallicRoughness=dict(baseColorFactor=[.5, .5, .5, 1], metallicFactor=0, roughnessFactor=1))]
used = set()
for m in j['meshes']:
    for p in m['primitives']:
        p['attributes'] = {k: v for k, v in p['attributes'].items() if k in ('POSITION', 'NORMAL', 'TEXCOORD_0', 'JOINTS_0', 'WEIGHTS_0')}
        used |= set(p['attributes'].values()); used.add(p['indices'])
for s in j.get('skins', []): used.add(s['inverseBindMatrices'])
for a in j['animations']:
    for s in a['samplers']: used |= {s['input'], s['output']}
accs = j['accessors']; views = j['bufferViews']; amap = {}; vmap = {}; blob = bytearray(); nacc = []; nview = []
for i in sorted(used):
    a = dict(accs[i]); v = a['bufferView']
    if v not in vmap:
        o = views[v]; raw = bin0[o.get('byteOffset', 0):o.get('byteOffset', 0) + o['byteLength']]
        while len(blob) % 4: blob.append(0)
        nv = {k: o[k] for k in o if k not in ('byteOffset', 'buffer')}; nv['buffer'] = 0; nv['byteOffset'] = len(blob); blob.extend(raw); vmap[v] = len(nview); nview.append(nv)
    a['bufferView'] = vmap[v]; amap[i] = len(nacc); nacc.append(a)
for m in j['meshes']:
    for p in m['primitives']: p['attributes'] = {k: amap[v] for k, v in p['attributes'].items()}; p['indices'] = amap[p['indices']]; p['material'] = 0
for s in j.get('skins', []): s['inverseBindMatrices'] = amap[s['inverseBindMatrices']]
for a in j['animations']:
    for s in a['samplers']: s['input'] = amap[s['input']]; s['output'] = amap[s['output']]
j['accessors'] = nacc; j['bufferViews'] = nview; j['buffers'] = [dict(byteLength=len(blob))]
ex = j['asset'].get('extras', {}); j['asset']['extras'] = dict(title=ex.get('title'), author=ex.get('author'), license='CC-BY-4.0', changes='clips and textures reduced')
js = json.dumps(j, separators=(',', ':')).encode(); js += b' ' * (-len(js) % 4); blob += b'\0' * (-len(blob) % 4)
glb = b'glTF' + struct.pack('<II', 2, 12 + 8 + len(js) + 8 + len(blob)) + struct.pack('<I', len(js)) + b'JSON' + js + struct.pack('<I', len(blob)) + b'BIN\0' + bytes(blob)
open(f'{OUT}/creep.txt', 'wb').write(base64.b64encode(glb)); print('clips', [a['name'] for a in j['animations']], 'glb', len(glb), 'bytes')
