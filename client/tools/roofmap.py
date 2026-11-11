import sys, numpy as np
sys.path.insert(0,'tools'); from glbgeom import GLB
from PIL import Image
g=GLB('/mnt/user-data/uploads/full_gameready_city_buildings_iv_hongkong__1__1.glb'); W=g.world_mats(); S=6.0; RES=0.2
names={'A':'Cube_80','B':'Cube.012_126','C':'Cube.008_84','D':'Cube.001_81','E':'Cube.005_83','F':'Cube.009_123'}
def raster(P,I,lo,n):
    H=np.full((n[1],n[0]),-1.0)
    A=P[I[:,0]];B=P[I[:,1]];C=P[I[:,2]]
    for a,b,c in zip(A,B,C):
        mn=np.minimum(np.minimum(a,b),c); mx=np.maximum(np.maximum(a,b),c)
        x0=max(int((mn[0]-lo[0])/RES),0); x1=min(int((mx[0]-lo[0])/RES)+1,n[0]-1); z0=max(int((mn[2]-lo[1])/RES),0); z1=min(int((mx[2]-lo[1])/RES)+1,n[1]-1)
        if x1<x0 or z1<z0: continue
        xs=lo[0]+(np.arange(x0,x1+1)+0.5)*RES; zs=lo[1]+(np.arange(z0,z1+1)+0.5)*RES; X,Z=np.meshgrid(xs,zs)
        d=(b[2]-c[2])*(a[0]-c[0])+(c[0]-b[0])*(a[2]-c[2])
        if abs(d)<1e-12:
            continue
        l1=((b[2]-c[2])*(X-c[0])+(c[0]-b[0])*(Z-c[2]))/d; l2=((c[2]-a[2])*(X-c[0])+(a[0]-c[0])*(Z-c[2]))/d; l3=1-l1-l2
        m=(l1>=-0.02)&(l2>=-0.02)&(l3>=-0.02)
        if not m.any(): continue
        Y=l1*a[1]+l2*b[1]+l3*c[1]; sub=H[z0:z1+1,x0:x1+1]; sub[m]=np.maximum(sub[m],Y[m])
    return H
for k,nm in names.items():
    ids=g.find(nm); parts=g.tris_under(ids[0],W)
    allP=np.concatenate([p for _,p,_ in parts])*S
    lo=allP.min(0); hi=allP.max(0)
    print(f"\n== {k} {nm}: x[{lo[0]:.1f},{hi[0]:.1f}] y[{lo[1]:.1f},{hi[1]:.1f}] z[{lo[2]:.1f},{hi[2]:.1f}] size {hi[0]-lo[0]:.1f} x {hi[2]-lo[2]:.1f}")
    l2=(lo[0]-1,lo[2]-1); n=(int((hi[0]-lo[0]+2)/RES)+1,int((hi[2]-lo[2]+2)/RES)+1)
    H=np.full((n[1],n[0]),-1.0)
    for mat,P,I in parts:
        h=raster(P*S,I,l2,n); H=np.maximum(H,h)
    top=H.max(); v=H[H>top-12]
    hist,edges=np.histogram(v,bins=np.arange(top-12,top+0.3,0.25))
    print(' height histogram (top 12m):', ' '.join(f"{edges[i]:.2f}:{hist[i]}" for i in range(len(hist)) if hist[i]>30))
    np.save(f'ext/roof_{k}.npy',H)
    # image: map height (roofbase-1 .. roofbase+4) to gray
    base=edges[np.argmax(hist)]
    img=np.clip((H-(base-1))/6,0,1); im=Image.fromarray((img*255).astype(np.uint8)).resize((n[0]*4,n[1]*4),Image.NEAREST); im.save(f'shots/roof_{k}.png')
    print(' main roof level ~',round(base,2),'grid',n,'origin',l2)
