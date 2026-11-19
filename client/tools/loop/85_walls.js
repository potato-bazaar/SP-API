/* ---------- LOOP CITY's breakable walls (ringWalls in client/src/ring.js, the same list as the server's). Drawn as one
   instanced mesh of concrete block; each takes hits (rifle 2, pistol 1, 4 breaks it), shows its damage, and comes down
   in a burst of rubble. Rockets and missiles bring down the walls near them. ---------- */
function RWALLS(g){
  if(!g.arena.ring)return;
  const S=g.gfx.scene;let mesh=null,list=[],idx=new Map;const debris=[];
  // concrete block: courses of blocks, grime running down, a darker cap
  const tex=(()=>{const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d");x.fillStyle="#6c6c6a";x.fillRect(0,0,256,256);
    for(let i=0;i<5000;i++){const v=90+Math.random()*60|0;x.fillStyle=`rgba(${v},${v},${v-4},.35)`;x.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}
    x.strokeStyle="rgba(30,30,30,.75)";x.lineWidth=2;for(let r=0;r<8;r++){const y=r*32;x.beginPath();x.moveTo(0,y);x.lineTo(256,y);x.stroke();for(let k=0;k<4;k++){const xx=(k*64+(r%2)*32)%256;x.beginPath();x.moveTo(xx,y);x.lineTo(xx,y+32);x.stroke()}}
    for(let i=0;i<26;i++){const xx=Math.random()*256,g2=x.createLinearGradient(0,0,0,256);g2.addColorStop(0,"rgba(20,20,20,.0)");g2.addColorStop(1,"rgba(20,20,20,.35)");x.fillStyle=g2;x.fillRect(xx,Math.random()*120,2+Math.random()*5,256)}
    x.fillStyle="rgba(25,25,25,.55)";x.fillRect(0,0,256,10);
    const t=new rs(c);t.wrapS=t.wrapT=1e3;t.colorSpace=Ne;t.anisotropy=4;return t})();
  const mat=new _e({map:tex,color:new Tt(1.25,1.25,1.25)});try{Gi(mat)}catch(x){}
  const geo=new an(1,1,1);{const uv=geo.getAttribute("uv");uv.needsUpdate=!0}
  const M=new gt,q=new Pe,v=new I,sc=new I,col=new Tt;
  const build=()=>{mesh&&(S.remove(mesh),mesh.dispose&&mesh.dispose());list=g.gear.cover.filter(c=>c.kind==="wall");idx.clear();if(!list.length){mesh=null;return}
    mesh=new xn(geo,mat,list.length);mesh.frustumCulled=!1;mesh.name="loop:walls";
    list.forEach((w,k)=>{idx.set(w.id,k);put(w,k)});mesh.instanceColor&&(mesh.instanceColor.needsUpdate=!0);S.add(mesh)};
  const put=(w,k)=>{if(w.hp<=0){M.makeScale(0,0,0);mesh.setMatrixAt(k,M);mesh.instanceMatrix.needsUpdate=!0;return}
    v.set((w.min.x+w.max.x)/2,(w.min.y+w.max.y)/2,(w.min.z+w.max.z)/2);sc.set(w.max.x-w.min.x,w.max.y-w.min.y,w.max.z-w.min.z);
    q.identity();if(w.hp<4){const tw=(4-w.hp)*.012*((w.id%2)?1:-1);q.setFromAxisAngle(sc.x>sc.z?new I(1,0,0):new I(0,0,1),tw);sc.y*=1-(4-w.hp)*.03}   // a little lean and sag as it takes hits
    M.compose(v,q,sc);mesh.setMatrixAt(k,M);mesh.instanceMatrix.needsUpdate=!0;
    const d=.55+.45*w.hp/4;col.setRGB(d,d,d*.98);mesh.setColorAt(k,col);mesh.instanceColor&&(mesh.instanceColor.needsUpdate=!0)};
  const rubble=(w)=>{const c=new I((w.min.x+w.max.x)/2,(w.min.y+w.max.y)/2,(w.min.z+w.max.z)/2),L=Math.max(w.max.x-w.min.x,w.max.z-w.min.z),along=w.max.x-w.min.x>w.max.z-w.min.z;
    for(let i=0;i<9;i++){const s=.18+Math.random()*.32,m=new Qt(geo,mat);m.scale.set(s*1.6,s,s*1.1);m.position.set(c.x+(along?(Math.random()-.5)*L:0),c.y+(Math.random()-.3)*(w.max.y-w.min.y)*.6,c.z+(along?0:(Math.random()-.5)*L));
      m.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);m.frustumCulled=!1;S.add(m);debris.push({m,v:new I((Math.random()-.5)*3,1+Math.random()*3,(Math.random()-.5)*3),floor:w.min.y+.08,t:0})}
    try{for(let i=0;i<6;i++)g.fx.particles.impact(new I(c.x+(Math.random()-.5)*L*.8,c.y+(Math.random()-.5),c.z+(Math.random()-.5)*L*.8),new I(Math.random()-.5,1,Math.random()-.5).normalize())}catch(x){}};
  // the game's cover hooks: walls are drawn here, crates and panels as before
  const cm=g._coverMeshes;g._coverMeshes=function(){cm.call(this);build()};
  const oc=g.onCover;g.onCover=function(e,broken,quiet){if(e.kind!=="wall")return oc.call(this,e,broken,quiet);const k=idx.get(e.id);if(k==null||!mesh)return;
    put(e,k);const c=new I((e.min.x+e.max.x)/2,(e.min.y+e.max.y)/2,(e.min.z+e.max.z)/2);
    if(!quiet){try{this.audio.thud(RDL(c,this.listenerPos)*(broken?.4:1),this.panOf(c),!broken)}catch(x){}broken&&rubble(e)}};
  // solo rockets bring walls down (online the server's blast does, and says so)
  const sx=g.sx;if(sx&&sx._boom){const b0=sx._boom.bind(sx);sx._boom=(pt,vfx)=>{b0(pt,vfx);if(vfx||g.net)return;for(const w of g.gear.cover)if(w.kind==="wall"&&w.hp>0&&RDL(v.set((w.min.x+w.max.x)/2,(w.min.y+w.max.y)/2,(w.min.z+w.max.z)/2),pt)<5.3)g.gear.hitCover(w,99)}}
  const u0=g.update.bind(g);g.update=t=>{u0(t);for(let i=debris.length-1;i>=0;i--){const d=debris[i];d.t+=t;d.v.y-=14*t;d.m.position.addScaledVector(d.v,t);if(d.m.position.y<d.floor){d.m.position.y=d.floor;d.v.multiplyScalar(.3)}d.m.rotation.x+=t*2;if(d.t>6){S.remove(d.m);debris.splice(i,1)}}};
  build();
}
