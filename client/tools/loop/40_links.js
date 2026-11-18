// Cables, ladders and pads you can see. Cables are drawn (and can be shot) along the line the rider really takes:
// an ordinary zipline follows the chart, so in the wheel it sags a little; a hub line is dead straight through the middle.
function RCPTS(ar,l){
  if(l._cp)return l._cp;const h=(l.lift||0)+2.05,a=new I(l.p0.x,l.p0.y+h,l.p0.z),b=new I(l.p1.x,l.p1.y+h,l.p1.z),pts=[];
  if(l.hub){const v=ar.rel(new I,a,b),n=72;let px=a.x;for(let k=0;k<=n;k++){const q=ar.unsee(new I,new I(a.x+v.x*k/n,a.y+v.y*k/n,a.z+v.z*k/n),a.x);q.x=px+ar.wrapD(q.x-px);px=q.x;pts.push(q)}}
  else{const dx=ar.wrapD(b.x-a.x),n=Math.max(2,Math.ceil(Math.hypot(dx,b.z-a.z)/3));for(let k=0;k<=n;k++)pts.push(new I(a.x+dx*k/n,a.y+(b.y-a.y)*k/n,a.z+(b.z-a.z)*k/n))}
  return l._cp=pts;
}
// All cables share one mesh (eighty separate draws were too many for a phone). A cut cable drops out of the index until it is restrung.
var RCB=null;
function RCABLE(g,l,mat){
  const ar=g.arena,pts=RCPTS(ar,l),w=l.hub?.075:.034,t=new I,u=new I,v=new I,Y=new I(0,1,0),X=new I(1,0,0);
  if(!RCB){RCB={P:[],parts:[],mesh:new Qt(new se,mat),dirty:!0};RCB.mesh.matrixAutoUpdate=!1;RCB.mesh.name="loop:cables";
    RCB.flush=()=>{const B=RCB;if(!B.dirty)return;B.dirty=!1;const geo=B.mesh.geometry;if(!geo.getAttribute("position")||geo.getAttribute("position").count*3!==B.P.length)geo.setAttribute("position",new Ft(new Float32Array(B.P),3));
      let n=0;for(const p of B.parts)p.on&&(n+=p.ix.length);const ix=new Uint32Array(n);let o=0;for(const p of B.parts)p.on&&(ix.set(p.ix,o),o+=p.ix.length);geo.setIndex(new Ft(ix,1))};
    g.gfx.scene.add(RCB.mesh);setInterval(()=>RCB.flush(),120)}
  const P=RCB.P,Ix=[];
  const ring=(p,a,b,r)=>{P.push(p.x+a.x*r,p.y+a.y*r,p.z+a.z*r,p.x+b.x*r,p.y+b.y*r,p.z+b.z*r,p.x-a.x*r,p.y-a.y*r,p.z-a.z*r,p.x-b.x*r,p.y-b.y*r,p.z-b.z*r)};
  const tube=(list,r)=>{const o=P.length/3;for(let k=0;k<list.length;k++){const a=list[Math.max(0,k-1)],b=list[Math.min(list.length-1,k+1)];t.copy(b).sub(a).normalize();u.crossVectors(t,Math.abs(t.y)>.9?X:Y).normalize();v.crossVectors(t,u).normalize();ring(list[k],u,v,r)}
    for(let k=0;k+1<list.length;k++)for(let q=0;q<4;q++){const a=o+k*4+q,b=o+k*4+(q+1)%4,c=a+4,d=b+4;Ix.push(a,b,c,b,d,c)}};
  tube(pts,w);
  for(const e of[0,1]){const p=e?l.p1:l.p0,top=pts[e?pts.length-1:0];tube([new I(top.x,p.y,p.z),new I(top.x,top.y+(l.hub?3.2:.25),top.z)],l.hub?.07:.045)}   // the mast at each end
  const part={ix:Ix,on:!0};RCB.parts.push(part);RCB.dirty=!0;
  // what LOOK keeps per cable: something with .visible and .frustumCulled. The scene gets a stand-in that draws nothing.
  const stand=new ce;Object.defineProperty(stand,"visible",{get(){return part.on},set(x){x=!!x;x!==part.on&&(part.on=x,RCB.dirty=!0)}});return stand;
}
function RLINKS(g){
  const ar=g.arena,scene=g.gfx.scene,T=g.ringT;
  { // ladders: one flat strip of rungs per ladder
    const cv=document.createElement("canvas");cv.width=cv.height=64;const c=cv.getContext("2d");c.clearRect(0,0,64,64);c.fillStyle="#fff";c.fillRect(2,0,7,64);c.fillRect(55,0,7,64);c.fillRect(2,26,60,9);
    const tex=new rs(cv);tex.wrapS=tex.wrapT=1e3;tex.colorSpace=Ne;tex.needsUpdate=!0;
    const P=[],U=[],Ix=[];
    for(const l of ar.links){if(l.kind!=="ladder")continue;const bx=l.wall[0]-l.n[0]*.09,bz=l.wall[1]-l.n[1]*.09,sx=l.n[1]*.31,sz=-l.n[0]*.31,y0=l.p0.y,y1=l.p1.y+.95,o=P.length/3;
      P.push(bx-sx,y0,bz-sz,bx+sx,y0,bz+sz,bx+sx,y1,bz+sz,bx-sx,y1,bz-sz);U.push(0,0,1,0,1,(y1-y0)/.36,0,(y1-y0)/.36);Ix.push(o,o+1,o+2,o,o+2,o+3)}
    const geo=new se;geo.setAttribute("position",new Ft(new Float32Array(P),3));geo.setAttribute("uv",new Ft(new Float32Array(U),2));geo.setIndex(new Ft(new Uint32Array(Ix),1));
    const m=new Qt(geo,Gi(new _e({map:tex,color:new Tt(.62,.62,.62),alphaTest:.5,side:2})));m.matrixAutoUpdate=!1;m.name="loop:ladders";scene.add(m);
  }
  { // launch pads: a lit disc on the street; the dotted arc above it is drawn by the game already
    const cv=document.createElement("canvas");cv.width=cv.height=128;const c=cv.getContext("2d");c.fillStyle="#000";c.fillRect(0,0,128,128);c.strokeStyle="#fff";c.lineWidth=7;c.beginPath();c.arc(64,64,54,0,7);c.stroke();c.lineWidth=9;c.lineJoin="miter";
    for(let k=0;k<3;k++){const y=82-k*22;c.beginPath();c.moveTo(38,y+14);c.lineTo(64,y-8);c.lineTo(90,y+14);c.stroke()}
    const tex=new rs(cv);tex.colorSpace=Ne;tex.needsUpdate=!0;const P=[],U=[],Ix=[];
    for(const l of ar.links){if(l.kind!=="pad")continue;const d=new I(l.p1.x-l.p0.x,0,l.p1.z-l.p0.z).normalize(),s=new I(d.z,0,-d.x),r=1.05,y=l.p0.y+.05,o=P.length/3,c0=l.p0;
      const q=(a,b)=>P.push(c0.x+d.x*a*r+s.x*b*r,y,c0.z+d.z*a*r+s.z*b*r);q(-1,-1);q(-1,1);q(1,1);q(1,-1);U.push(0,0,1,0,1,1,0,1);Ix.push(o,o+1,o+2,o,o+2,o+3)}
    const geo=new se;geo.setAttribute("position",new Ft(new Float32Array(P),3));geo.setAttribute("uv",new Ft(new Float32Array(U),2));geo.setIndex(new Ft(new Uint32Array(Ix),1));
    const mat=new _e({map:tex,color:new Tt(1.3,1.3,1.3),transparent:!0,blending:qi,depthWrite:!1,side:2,fog:!1});const m=new Qt(geo,mat);m.matrixAutoUpdate=!1;m.renderOrder=6;m.name="loop:pads";scene.add(m);T.padMat=mat;
  }
  // a shot that passes a cable cuts it: test against the cable's real line, in the shooter's frame
  const O=new I,V=new I,A=new I,B=new I;
  g.gear.shotCables=function(t,e,i){const G=this.g;ar.rel(V,e,i);O.set(0,0,0);const len=V.length();
    for(const s of ar.links){if(s.kind!=="zip"||this.isCut(s))continue;const pts=RCPTS(ar,s);
      if(ar.dist(e,pts[0])>len+(s.len||60)+5)continue;
      let hit=!1;ar.rel(A,e,pts[0]);for(let k=1;k<pts.length&&!hit;k++){ar.rel(B,e,pts[k]);if(WM(O,V,A.x,A.y,A.z,B.x,B.y,B.z)<=.3)hit=!0;A.copy(B)}
      if(!hit)continue;this.cut.set(s.i,G.time+he.cutFor);G.onZipCut&&G.onZipCut(s,G.time+he.cutFor);for(const c of G.actors)c.alive&&c.link&&c.link.link===s&&G.damage(c,999,t&&t!==c?t:null,{cause:"cable"})}};
}
