import sys, json, struct, numpy as np
path=sys.argv[1]; maxdepth=int(sys.argv[2]) if len(sys.argv)>2 else 3
with open(path,'rb') as f:
    f.read(12); clen,_=struct.unpack('<I4s', f.read(8)); js=json.loads(f.read(clen))
nodes=js['nodes']; acc=js['accessors']
def local(n):
    if 'matrix' in n: return np.array(n['matrix'],dtype=float).reshape(4,4).T
    T=np.eye(4); 
    if 'translation' in n: T[:3,3]=n['translation']
    R=np.eye(4)
    if 'rotation' in n:
        x,y,z,w=n['rotation']
        R[:3,:3]=[[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w)],[2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w)],[2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y)]]
    S=np.eye(4)
    if 'scale' in n: S[0,0],S[1,1],S[2,2]=n['scale']
    return T@R@S
def bbox(i,M):
    n=nodes[i]; W=M@local(n); lo=np.full(3,1e30); hi=np.full(3,-1e30); tris=0; cnt=0
    if 'mesh' in n:
        for p in js['meshes'][n['mesh']]['primitives']:
            a=acc[p['attributes']['POSITION']]; mn=np.array(a['min']); mx=np.array(a['max'])
            cs=np.array([[x,y,z,1] for x in (mn[0],mx[0]) for y in (mn[1],mx[1]) for z in (mn[2],mx[2])]).T
            w=(W@cs)[:3]; lo=np.minimum(lo,w.min(1)); hi=np.maximum(hi,w.max(1))
            tris+= acc[p['indices']]['count']//3 if 'indices' in p else a['count']//3; cnt+=1
    kids=[]
    for c in n.get('children',[]):
        r=bbox(c,W); kids.append(r)
        if r['tris']>0: lo=np.minimum(lo,r['lo']); hi=np.maximum(hi,r['hi'])
        tris+=r['tris']; cnt+=r['cnt']
    return {'i':i,'name':n.get('name'),'lo':lo,'hi':hi,'tris':tris,'cnt':cnt,'kids':kids,'mesh':n.get('mesh')}
def show(r,d):
    if d>maxdepth: return
    if r['tris']>0:
        lo,hi=r['lo'],r['hi']
        print('  '*d+f"{r['i']}:{r['name']} tris={r['tris']} meshes={r['cnt']} x[{lo[0]:.2f},{hi[0]:.2f}] y[{lo[1]:.2f},{hi[1]:.2f}] z[{lo[2]:.2f},{hi[2]:.2f}]" + (f" mesh={r['mesh']}" if r['mesh'] is not None else ''))
    else: print('  '*d+f"{r['i']}:{r['name']} (empty)")
    for k in r['kids']: show(k,d+1)
for rn in js['scenes'][js.get('scene',0)]['nodes']:
    show(bbox(rn,np.eye(4)),0)
