/* ---------- the rooftop safehouse (both maps): the menu is a place. Your operator keeps watch from a roof edge that faces
   the angel: a concrete ledge, a kit crate, a surveillance monitor on a stand, a radio with a red lamp, a note taped to the
   wall. The camera drifts slowly round the roof. Everything is built here from boxes and canvas textures. ---------- */
var RSH=null,RSHF=new I(0,0,1);
function RSHBUILD(g,s){
  const ar=g.arena,S=g.gfx.scene,z=g.zone||{cx:0,cz:0},V=new I,W=new I;let P=null,F=new I;
  if(!SCLOOP){P=s.at.clone();const a=g.angel&&g.angel.eye;F.set((a?a.x:0)-P.x,0,(a?a.z:0)-P.z)}
  else{   // a high roof some way from the halo's middle, and the edge of it that looks that way
    let best=null,bs=-1e9;const spots=(()=>{try{return doorSpots(ar,I).map(d=>d.p)}catch(x){return[]}})();
    for(const r of ar.roofs){if(r.kind!=="roof"||!r.cells||r.cells.length<70)continue;
      const y=ar.cellPos(r,r.cells[0],V).y;if(y<6)continue;const mid=new I((r.x0+r.x1)/2,y,(r.z0+r.z1)/2),to=ar.rel(new I,mid,W.set(z.cx,y,z.cz));to.y=0;
      const L=to.length(),sc=y*1.2-Math.abs(L-60)*.25;if(L<20||sc<=bs)continue;to.normalize();
      let cell=null,cs=-1e9;for(const k of r.cells){const c=ar.cellPos(r,k,V),d=ar.rel(W,mid,c),e=d.x*to.x+d.z*to.z-Math.abs(d.x*to.z-d.z*to.x)*.35;if(e<=cs)continue;
        const p=new I(c.x-to.x*1.3,c.y,c.z-to.z*1.3),gy=ar.groundY(p.x,p.z,p.y+1,2);if(gy==null||Math.abs(gy-c.y)>.25)continue;
        let ok=!0;for(const b of ar.dyn||[]){if(b.kind!=="wall")continue;W.set((b.min.x+b.max.x)/2,c.y,(b.min.z+b.max.z)/2);if(ar.dist(W,p)<3.6){ok=!1;break}}
        for(const q of spots)if(ar.dist(q,p)<4.5){ok=!1;break}
        ok&&(cs=e,cell=p)}
      cell&&(bs=sc,best={p:cell,f:to.clone()})}
    if(!best)throw new Error("no roof for the safehouse");P=best.p;F.copy(best.f)}
  F.y=0;F.lengthSq()<1e-6&&F.set(0,0,1);F.normalize();const R=new I(F.z,0,-F.x),yaw=Math.atan2(F.x,F.z);
  // materials: flat ones (the ring draws them best), each through the map's bend
  const tex=(w,h,draw)=>{const c=document.createElement("canvas");c.width=w;c.height=h;draw(c.getContext("2d"),w,h);const t=new rs(c);t.colorSpace=Ne;return t};
  const mat=o=>{const m=new _e(o);try{Gi(m)}catch(x){}return m};
  const conc=tex(256,128,(x,w,h)=>{x.fillStyle="#8d8f93";x.fillRect(0,0,w,h);for(let i=0;i<2600;i++){const v=110+Math.random()*70|0;x.fillStyle=`rgba(${v},${v},${v+3},.35)`;x.fillRect(Math.random()*w,Math.random()*h,2,2)}
    x.strokeStyle="rgba(20,20,22,.55)";x.lineWidth=2;for(let r=0;r<4;r++){x.beginPath();x.moveTo(0,r*32);x.lineTo(w,r*32);x.stroke();for(let c=0;c<5;c++){const bx=c*64+(r%2?32:0);x.beginPath();x.moveTo(bx,r*32);x.lineTo(bx,r*32+32);x.stroke()}}
    const G=x.createLinearGradient(0,0,0,h);G.addColorStop(0,"rgba(0,0,0,0)");G.addColorStop(1,"rgba(0,0,0,.45)");x.fillStyle=G;x.fillRect(0,0,w,h);   // rain-dark toward the floor
    x.fillStyle="rgba(15,15,18,.35)";for(let i=0;i<9;i++)x.fillRect(Math.random()*w,0,1+Math.random()*3,30+Math.random()*80)});
  const note=tex(256,96,(x,w,h)=>{x.fillStyle="#d9d4c2";x.fillRect(0,0,w,h);x.fillStyle="rgba(120,110,80,.25)";x.fillRect(0,0,w,10);x.fillRect(0,h-8,w,8);
    x.fillStyle="#1b1b1f";x.font='italic 30px "Bradley Hand","Segoe Print","Ink Free",cursive';x.save();x.translate(14,44);x.rotate(-.04);x.fillText("watch the halo.",0,0);x.font='italic 22px "Bradley Hand","Segoe Print","Ink Free",cursive';x.fillText("shoot, then move",6,32);x.restore()});
  const glow=tex(128,64,(x,w,h)=>{const G=x.createRadialGradient(w/2,h,2,w/2,h,w*.6);G.addColorStop(0,"rgba(255,40,55,.9)");G.addColorStop(1,"rgba(255,40,55,0)");x.fillStyle=G;x.fillRect(0,0,w,h)});
  const scrC=document.createElement("canvas");scrC.width=256;scrC.height=160;const scrX=scrC.getContext("2d"),scrT=new rs(scrC);scrT.colorSpace=Ne;
  const mC=mat({map:conc}),mCap=mat({color:new Tt(.62,.63,.65)}),mDark=mat({color:new Tt(.055,.058,.066)}),mMid=mat({color:new Tt(.16,.165,.18)}),mRed=mat({color:new Tt(1,.07,.11)}),mLed=mat({color:new Tt(1,.1,.12)}),
    mNote=mat({map:note}),mScr=mat({map:scrT}),mGlow=mat({map:glow,transparent:!0,depthWrite:!1,blending:qi,side:2});
  const grp=new ce;grp.position.copy(P);grp.rotation.y=yaw;grp.name="safehouse";
  const add=(geo,m,x,y,zz,ry)=>{const o=new Qt(geo,m);o.position.set(x,y,zz);ry&&(o.rotation.y=ry);o.frustumCulled=!1;grp.add(o);return o},box=(w,h,d,m,x,y,zz,ry)=>add(new an(w,h,d),m,x,y,zz,ry);
  box(3.4,.92,.36,mC,0,.46,1.15);box(3.5,.06,.44,mCap,0,.95,1.15);                                                    // the ledge and its cap
  box(1.15,.62,.6,mDark,-1.78,.31,.3,.12);box(1.17,.03,.62,mRed,-1.78,.5,.3,.12);box(.7,.2,.42,mMid,-1.86,.72,.3,-.2);box(.3,.16,.18,mMid,-1.42,.7,.36,.5);   // the kit crate, a case and an ammunition tin on it
  box(.4,.03,.4,mDark,1.6,.015,.5);add(new Rn(.022,.022,1.05,8),mDark,1.6,.54,.5);box(.64,.42,.05,mDark,1.6,1.24,.5,Math.PI+.42);   // the monitor on its stand
  {const p=add(new os(.57,.355),mScr,1.6-.026*Math.sin(.42),1.24,.5-.026*Math.cos(.42),Math.PI+.42);p.renderOrder=1}
  box(.3,.19,.1,mMid,.98,1.075,1.15);add(new Rn(.006,.006,.46,6),mDark,1.1,1.4,1.15);const led=box(.03,.03,.02,mLed,.88,1.13,1.095);   // the radio
  add(new os(.44,.165),mNote,-.72,.6,.966,Math.PI-.03);                                                                // the note, taped to the wall
  box(.95,.035,.06,mRed,.25,.02,.9);add(new os(2.6,.9),mGlow,.25,.45,.962,Math.PI);                                       // a red work lamp on the floor, and its light up the wall
  S.add(grp);
  const scr=T=>{const x=scrX,w=256,h=160;x.fillStyle="#050807";x.fillRect(0,0,w,h);x.strokeStyle="rgba(200,243,29,.5)";x.lineWidth=1;const cx=78,cy=88,r=56;
    for(const q of[r,r*.62,r*.28]){x.beginPath();x.arc(cx,cy,q,0,6.283);x.stroke()}x.beginPath();x.moveTo(cx-r,cy);x.lineTo(cx+r,cy);x.moveTo(cx,cy-r);x.lineTo(cx,cy+r);x.stroke();
    const a=T*1.4;x.strokeStyle="rgba(200,243,29,.95)";x.lineWidth=2;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);x.stroke();
    x.strokeStyle="rgba(255,45,60,.9)";x.beginPath();x.arc(cx+6,cy-4,r*(.5+.08*Math.sin(T*.6)),0,6.283);x.stroke();
    for(let k=0;k<7;k++){const b=k*2.4+1,d=r*(.25+.1*((k*37)%7)),on=((a-b)%6.283+6.283)%6.283<1.6;x.fillStyle=on?"#f2f2ef":"rgba(242,242,239,.25)";x.fillRect(cx+Math.cos(b)*d-2,cy+Math.sin(b)*d-2,4,4)}
    x.fillStyle="#c8f31d";x.font="700 13px monospace";x.fillText(SCLOOP?"LOOP CITY":"HONG KONG",150,34);x.fillStyle="rgba(242,242,239,.8)";x.font="11px monospace";x.fillText(SCLOOP?"ring 01":"block 04",150,50);
    x.fillStyle=Math.floor(T*1.5)%2?"#ff2d3c":"#5e0a13";x.fillRect(150,62,8,8);x.fillStyle="rgba(242,242,239,.8)";x.fillText("LIVE",164,70);x.fillText("8 snipers",150,96);x.fillText("halo closing",150,112);
    x.fillStyle="rgba(200,243,29,.7)";x.fillText(new Date().toTimeString().slice(0,8),150,138);x.fillStyle="rgba(255,255,255,.04)";for(let y=(T*40|0)%4;y<h;y+=4)x.fillRect(0,y,w,1);scrT.needsUpdate=!0};
  {const u0=g.update.bind(g);g.update=t=>{grp.visible=g.state==="title";return u0(t)}}
  let last=-1;return{p:P,f:F,r:R,yaw,grp,tick:T=>{led.visible=Math.floor(T*1.2)%3!==0;T-last>.2&&(last=T,scr(T))}};
}
function RSAFE(g,cam,t,T,s,light){
  const ar=g.arena;if(!ar||!ar.roofs||!s||!s.rig)return!1;
  if(!RSH){try{RSH=RSHBUILD(g,s)}catch(x){console.warn("safehouse",x);RSH={bad:1}}}
  if(RSH.bad)return!1;
  const H=RSH,P=H.p,F=H.f,R=H.r,wide=innerWidth>innerHeight,wx=x=>ar.wrapX?ar.wrapX(x):x;
  // the watch: stand easy, shoulder the rifle and sweep the roofs, drop to a knee behind the ledge
  const u=T%14,A=u<6?0:u<10?1:2;
  s.rig.update(t,{aim:A>0,crouch:A===2,pitch:A?.05+Math.sin(T*.5)*.03:0,twist:A?Math.sin(T*.33)*.28:Math.sin(T*.21)*.1,speed:0,moveDir:RSHF,mode:"ground"});
  s.rig.root.position.set(wx(P.x+R.x*.5+F.x*.2),P.y,P.z+R.z*.5+F.z*.2);s.rig.root.rotation.y=H.yaw;s.rig.root.updateMatrixWorld(!0);
  // the camera: a slow arc behind the operator, a little to the left so the menu's columns frame the roof
  const a=Math.sin(T*.085)*.4-(wide?.2:0),r=wide?4.7:6.2,fov=wide?50:62;cam.fov!==fov&&(cam.fov=fov,cam.updateProjectionMatrix());
  const bx=-F.x*Math.cos(a)*r+R.x*Math.sin(a)*r,bz=-F.z*Math.cos(a)*r+R.z*Math.sin(a)*r,hy=P.y+(SCLOOP?2.3:2.25)+Math.sin(T*.07)*.1,up=(SCLOOP?-.17:.02)+.03*Math.sin(T*.05);
  cam.position.set(wx(P.x+bx),hy,P.z+bz);RLOOK(g,cam,wx(P.x+F.x*12+R.x*(wide?.5:.1)),hy+12*up,P.z+F.z*12+R.z*(wide?.5:.1));
  light&&light.position.set(wx(P.x-F.x*1.3+R.x*1.7),P.y+2.7,P.z-F.z*1.3+R.z*1.7);
  H.tick(T);return!0;
}
