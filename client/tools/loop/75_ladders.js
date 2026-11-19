/* ---------- ladders (both maps): "Ladder metallic 370 cm" by adventurer (Sketchfab, CC BY 4.0), packed by client/tools/pack_ladder.py.
   Each ladder is a stack of sections scaled to its wall: plain sections, then a top one whose hook rests on the roof edge.
   The full model (11 k triangles a section) is drawn for the sections nearest the camera; the rest get a light stand-in
   of the same shape (rails and rungs), which is all a ladder is from 30 m. Four instanced draws in all. ---------- */
function RLADDERS(g){
  const ar=g.arena,LS=ar.links.filter(l=>l.kind==="ladder"&&l.wall&&l.n);if(!LS.length)return;
  const mob=!!(g.gfx&&g.gfx.isMobile),K=mob?6:10;
  WS("ladder.txt",null).then(buf=>{
    const u8=new Uint8Array(buf),dv=new DataView(buf);if(String.fromCharCode(u8[0],u8[1],u8[2],u8[3])!=="SCLD")throw new Error("bad ladder pack");
    const hn=dv.getUint32(4,!0),H=JSON.parse(new TextDecoder().decode(u8.subarray(8,8+hn))),o=8+hn,nv=H.nv;
    const q=new Int16Array(buf,o,nv*3),nq=new Int8Array(buf,o+nv*6,nv*4),uq=new Uint16Array(buf,o+nv*10,nv*2),ix=new Uint16Array(buf,o+nv*14,H.nt*3);
    const pos=new Float32Array(nv*3),nrm=new Float32Array(nv*3),uv=new Float32Array(nv*2);
    for(let i=0;i<nv;i++){for(let k=0;k<3;k++){pos[i*3+k]=H.min[k]+(q[i*3+k]+32768)/65535*(H.max[k]-H.min[k]);nrm[i*3+k]=nq[i*4+k]/127}uv[i*2]=uq[i*2]/65535;uv[i*2+1]=uq[i*2+1]/65535}
    const P=new Ft(pos,3),N=new Ft(nrm,3),U=new Ft(uv,2);
    const geo=(n)=>{const gm=new se;gm.setAttribute("position",P);gm.setAttribute("normal",N);gm.setAttribute("uv",U);gm.setIndex(new Ft(ix.slice(0,n*3),1));return gm};
    const gTop=geo(H.nt),gBody=geo(H.body);
    // the stand-in: two rails and a rung every 0.3 m, the same size as the model
    const box=(A,cx,cy,cz,sx,sy,sz)=>{const b=A.p.length/3,v=[[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];for(const w of v)A.p.push(cx+w[0]*sx/2,cy+w[1]*sy/2,cz+w[2]*sz/2);
      for(const f of[[0,3,2,1],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,4,7,3]])A.i.push(b+f[0],b+f[1],b+f[2],b+f[0],b+f[2],b+f[3])};
    const lowGeo=(h)=>{const A={p:[],i:[]};for(const x of[-.28,.28])box(A,x,h/2,.175,.045,h,.045);for(let y=.3;y<h-.1;y+=.3)box(A,0,y,.175,.56,.032,.032);box(A,0,.2,-.02,.6,.05,.05);box(A,0,2.95,-.02,.6,.05,.05);
      const gm=new se;gm.setAttribute("position",new Ft(new Float32Array(A.p),3));gm.setIndex(A.i);gm.computeVertexNormals();return gm};
    const lBody=lowGeo(H.cut),lTop=lowGeo(H.max[1]);
    // unlit, like the cables: the game's lit materials leave a thin rail near black against a wall at night. The texture
    // carries the model's own wear and shading; a darker grey for the distant stand-in.
    const mat=new _e({color:new Tt(1.9,1.9,1.95)}),low=new _e({color:new Tt(.42,.42,.44)});try{Gi(mat)}catch(x){}try{Gi(low)}catch(x){}
    const im=new Image;im.onload=()=>{const t=new Xe(im);t.flipY=!1;t.colorSpace=Ne;t.anisotropy=4;t.needsUpdate=!0;mat.map=t;mat.needsUpdate=!0};im.src="ladder_base.jpg";
    // the sections
    const S=[],q4=new Pe,up=new I(0,1,0),sc=new I,at=new I;
    for(const l of LS){const y0=l.p0.y,Ht=l.p1.y+.25-y0;if(!(Ht>.8))continue;const n=Math.max(0,Math.round((Ht-H.max[1])/H.cut)),s=Ht/(n*H.cut+H.max[1]);
      const th=Math.atan2(-l.n[0],-l.n[1]),bx=l.wall[0]-l.n[0]*.05,bz=l.wall[1]-l.n[1]*.05;
      for(let k=0;k<=n;k++){const m=new gt;at.set(bx,y0+k*H.cut*s,bz);q4.setFromAxisAngle(up,th);sc.set(1,s,1);m.compose(at,q4,sc);S.push({m,top:k===n,x:bx,y:at.y+H.cut*s*.5,z:bz})}}
    const mk=(gm,mt,n,name)=>{const M=new xn(gm,mt,Math.max(1,n));M.count=0;M.frustumCulled=!1;M.name=name;M.castShadow=!1;M.receiveShadow=!1;g.gfx.scene.add(M);return M};
    const nTop=S.filter(s=>s.top).length,nBody=S.length-nTop;
    const hT=mk(gTop,mat,Math.min(K,nTop),"ladders:top"),hB=mk(gBody,mat,Math.min(K,nBody),"ladders:body"),lT=mk(lTop,low,nTop,"ladders:top-far"),lB=mk(lBody,low,nBody,"ladders:body-far");
    // the old ladders go: the loop's flat strips, and on the city map the rungs painted into the street furniture
    g.gfx.scene.traverse(o=>{o.name==="loop:ladders"&&(o.visible=!1)});
    if(!ar.ring)try{RLAD_OLD(g,LS)}catch(x){console.warn("ladders",x)}
    const v=new I;let acc=1;
    const place=()=>{const c=g.gfx.camera.position;for(const s of S)s.d=RDL(c,v.set(s.x,s.y,s.z));const ord=S.slice().sort((a,b)=>a.d-b.d);let a=0,b=0,c2=0,d=0,near=0;
      for(const s of ord){const hi=near<K&&s.d<30;hi&&near++;if(s.top)hi?hT.setMatrixAt(a++,s.m):lT.setMatrixAt(c2++,s.m);else hi?hB.setMatrixAt(b++,s.m):lB.setMatrixAt(d++,s.m)}
      hT.count=a;hB.count=b;lT.count=c2;lB.count=d;for(const M of[hT,hB,lT,lB])M.instanceMatrix.needsUpdate=!0};
    place();const u0=g.update.bind(g);g.update=t=>{u0(t);acc+=t;acc>.25&&(acc=0,place())};
    g.ladders={S,meshes:[hT,hB,lT,lB],place};
  }).catch(x=>console.warn("ladders",x));
}
// the city map's old ladders are rungs baked into a small street-furniture mesh: drop the triangles that sit on a ladder's wall
function RLAD_OLD(g,LS){
  const a=new I;g.gfx.scene.updateMatrixWorld(!0);
  g.gfx.scene.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||!o.geometry)return;const gm=o.geometry,pos=gm.getAttribute("position");if(!pos)return;const idx=gm.index,n=idx?idx.count/3:pos.count/3;if(n>20000)return;
    const keep=[];let hits=0,M=o.matrixWorld;
    for(let t=0;t<n;t++){let ok=0;for(let k=0;k<3;k++){const vi=idx?idx.getX(t*3+k):t*3+k;a.fromBufferAttribute(pos,vi).applyMatrix4(M);
        for(const L of LS){const dx=a.x-L.wall[0],dz=a.z-L.wall[1],al=dx*L.n[0]+dz*L.n[1],lat=Math.abs(-dx*L.n[1]+dz*L.n[0]);if(al>-.6&&al<.15&&lat<.5&&a.y>L.p0.y-.3&&a.y<L.p1.y+1.4){ok++;break}}}
      if(ok===3)hits++;else for(let k=0;k<3;k++)keep.push(idx?idx.getX(t*3+k):t*3+k)}
    if(hits&&hits/n>.3)gm.setIndex(keep)})}
