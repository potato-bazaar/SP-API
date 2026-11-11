import sys, json, struct
path=sys.argv[1]; maxdepth=int(sys.argv[2]) if len(sys.argv)>2 else 99
with open(path,'rb') as f:
    f.read(12); clen,_=struct.unpack('<I4s', f.read(8)); js=json.loads(f.read(clen))
nodes=js['nodes']
joints=set()
for s in js.get('skins',[]): joints.update(s['joints'])
def show(i,d):
    n=nodes[i]
    if d<=maxdepth:
        extra=[]
        if 'mesh' in n:
            m=js['meshes'][n['mesh']]
            mats=[js['materials'][p['material']]['name'] if 'material' in p else None for p in m['primitives']]
            tr=sum((js['accessors'][p['indices']]['count']//3) if 'indices' in p else 0 for p in m['primitives'])
            extra.append(f"MESH[{m.get('name')}] mats={mats} tris={tr}")
        if 'skin' in n: extra.append(f"skin={n['skin']}")
        if i in joints: extra.append('J')
        for k in ('translation','rotation','scale'):
            if k in n: extra.append(f"{k[0]}={[round(x,3) for x in n[k]]}")
        if 'matrix' in n: extra.append('matrix')
        print('  '*d + f"{i}:{n.get('name')} " + ' '.join(extra))
    for c in n.get('children',[]): show(c,d+1)
for r in js['scenes'][js.get('scene',0)]['nodes']: show(r,0)
