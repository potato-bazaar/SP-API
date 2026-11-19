/* ---------- doors (both maps): step through one and it throws you somewhere else inside the halo, out of your enemies'
   sight; about one time in twelve it puts you on the angel's crown, the best perch in the game, until someone shoots you
   off it. Placed by doorSpots (client/src/ring.js, the server's list). Online the server picks where you come out. ---------- */
function RDOORS(g){
  const ar=g.arena,S=g.gfx.scene,DS=doorSpots(ar,I);if(!DS.length)return;
  const me=()=>g.player,V=new I,W=new I;let crown=null,ready=0;
  // the portal: a canvas swirl, red into black, turned slowly
  const swirl=(()=>{const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d"),G=x.createRadialGradient(128,128,4,128,128,128);G.addColorStop(0,"rgba(255,235,235,1)");G.addColorStop(.18,"rgba(255,40,60,1)");G.addColorStop(.6,"rgba(120,0,16,.9)");G.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=G;x.fillRect(0,0,256,256);
    x.globalCompositeOperation="destination-out";for(let k=0;k<7;k++){x.beginPath();for(let t=0;t<1;t+=.01){const a=k/7*6.283+t*7,r=10+t*120;x.lineTo(128+Math.cos(a)*r,128+Math.sin(a)*r)}x.lineWidth=7;x.strokeStyle="rgba(0,0,0,.55)";x.stroke()}
    const t=new rs(c);t.colorSpace=Ne;t.center.set(.5,.5);return t})();
  const frameM=new _e({color:new Tt(.05,.05,.06)}),edgeM=new _e({color:new Tt(1,.08,.12)}),portalM=new _e({map:swirl,transparent:!0,depthWrite:!1,blending:qi,side:2,color:new Tt(1,.55,.6)});
  for(const m of[frameM,edgeM,portalM])try{Gi(m)}catch(x){}
  const box=(w,h,d,m,x,y,z)=>{const o=new Qt(new an(w,h,d),m);o.position.set(x,y,z);o.frustumCulled=!1;return o};
  const doors=DS.map(d=>{const grp=new ce;grp.position.copy(d.p);grp.rotation.y=d.yaw;
    grp.add(box(.2,2.7,.3,frameM,-.72,1.35,0),box(.2,2.7,.3,frameM,.72,1.35,0),box(1.64,.22,.3,frameM,0,2.75,0),box(1.8,.08,.5,frameM,0,.04,0),
      box(.04,2.5,.32,edgeM,-.61,1.3,0),box(.04,2.5,.32,edgeM,.61,1.3,0),box(1.26,.04,.32,edgeM,0,2.62,0));
    const pm=new Qt(new os(1.2,2.5),portalM);pm.position.set(0,1.3,0);pm.frustumCulled=!1;grp.add(pm);const pb=pm.clone();pb.rotation.y=Math.PI;grp.add(pb);
    S.add(grp);return{d,grp,pm}});
  // the crown: a ring of red spikes round a black disc on top of the angel's head
  const CR=DOOR.crownR,cg=new ce;{const disc=new Qt(new Rn(CR,CR*.92,.25,32),frameM);disc.position.y=-.125;cg.add(disc);const rim=new Qt(new Rn(CR*1.02,CR*1.02,.08,48,1,!0),edgeM);rim.position.y=-.02;cg.add(rim);
    for(let k=0;k<12;k++){const a=k/12*6.283,sp=new Qt(new Rn(0,.13,.75,6),edgeM);sp.position.set(Math.cos(a)*CR,.35,Math.sin(a)*CR);cg.add(sp)}cg.traverse(o=>o.frustumCulled=!1);S.add(cg)}
  const crownBox={kind:"crown",hp:1/0,min:new I,max:new I};
  const placeCrown=()=>{const z=g.zone,y=DOOR.crownY;crownBox.min.set(z.cx-CR,y-.25,z.cz-CR);crownBox.max.set(z.cx+CR,y,z.cz+CR);cg.position.set(z.cx,y,z.cz);ar.dyn||(ar.dyn=[]);ar.dyn.includes(crownBox)||ar.dyn.push(crownBox)};
  const flash=p=>{try{g.fx.particles.flash(p,2.6);for(let k=0;k<5;k++)g.fx.particles.impact(W.set(p.x+(Math.random()-.5),p.y+.4+Math.random()*1.8,p.z+(Math.random()-.5)),V.set(Math.random()-.5,1,Math.random()-.5).normalize())}catch(x){}};
  const arrive=(p,from,isCrown,mine)=>{from&&flash(W.copy(from).setY(from.y+1));flash(W.copy(p).setY(p.y+1));try{g.audio.toll&&g.audio.toll(isCrown?4:2)}catch(x){}
    if(!mine)return;const q=me();q.pos.copy(p);q.vel.set(0,0,0);q.mode="walk";q.link=null;q.mantle=null;q.grounded=!1;ready=g.time+DOOR.cool;
    isCrown?g.hud.banner("the angel's crown",3,!1,"you stand on its head · everyone can see you · stay until they shoot you down",!0):g.hud.banner("the door",1.8,!0,"somewhere else in the city")};
  // solo: where the door sends you (online the server decides; its _respawnPoint does the same job)
  const soloOut=()=>{const z=g.zone,sr=Math.max(6,Math.min(z.r,z.nextR||z.r)-2),foes=g.bots.filter(b=>b.alive);let best=null,bs=-1e9;
    const open=ar.roofs.filter(r=>r.cells.length&&(!ar.ring||r.kind==="roof")&&ar.safeCount(r,sr)>=8);
    for(let t=0;t<50&&open.length;t++){const r=open[Math.random()*open.length|0],c=ar.cellPos(r,r.cells[Math.random()*r.cells.length|0],new I);if(ZD(z,c.x,c.z,sr)>sr)continue;
      let s=Math.random()*4,dm=1e9;for(const f of foes){const d=RDL(f.pos,c);dm=Math.min(dm,d);d<60&&ar.los(f.eye(V),W.set(c.x,c.y+1.4,c.z))&&(s-=40)}s+=Math.min(dm,50)*.8;s>bs&&(bs=s,best=c)}
    return best};
  // online: the server's word
  {const wrap=()=>{if(!g._netEvent||g._doorHook)return;g._doorHook=1;const ne=g._netEvent.bind(g);g._netEvent=e=>{if(e.t==="tp"){const mine=g.net&&e.id===g.net.id;arrive(W.set(e.p[0],e.p[1],e.p[2]).clone(),new I(e.from[0],e.from[1],e.from[2]),!!e.crown,mine);return}ne(e)}};
    wrap();const sn=g.startNet;if(sn)g.startNet=(...a)=>{const r=sn.apply(g,a);g._doorHook=0;wrap();placeCrown();return r}}
  const st=g.start;g.start=function(){const r=st.apply(this,arguments);placeCrown();ready=0;return r};
  let T=0;
  const u0=g.update.bind(g);g.update=t=>{u0(t);T+=t;const on=g.state==="live"||g.state==="over"||g.state==="paused";
    for(const D of doors){D.grp.visible=on;D.pm.material.opacity=.75+.25*Math.sin(T*3+D.d.i)}swirl.rotation=T*1.6;cg.visible=on;
    if(!on||g.state!=="live")return;placeCrown();
    const p=me();
    // the crown holds you up (the body's own physics stands on the city's mesh only): inside the disc and just under its top, you are on it
    {const b=crownBox,top=b.max.y;if(p.alive&&p.mode!=="link"&&p.pos.y<top+.05&&p.pos.y>top-1.6&&p.pos.x>b.min.x&&p.pos.x<b.max.x&&p.pos.z>b.min.z&&p.pos.z<b.max.z&&p.vel.y<=0){p.pos.y=top;p.vel.y=0;p.grounded=!0}}if(!p.alive||p.mode==="link"||g.time<ready)return;
    for(const D of doors){const d=D.d.p;if(Math.abs(p.pos.y-d.y)>DOOR.dy||Math.hypot(ar.wrapD(p.pos.x-d.x),p.pos.z-d.z)>DOOR.r)continue;
      ready=g.time+DOOR.cool;
      if(g.net){g.net.send({t:"door",i:D.d.i});return}
      const top=new I((crownBox.min.x+crownBox.max.x)/2,crownBox.max.y+.05,(crownBox.min.z+crownBox.max.z)/2);
      const isCrown=Math.random()<DOOR.crown&&!g.bots.some(b=>b.alive&&RDL(b.pos,top)<3),out=isCrown?top:soloOut();if(!out)return;
      arrive(out,d,isCrown,!0);return}};
  g.doors={doors,DS,crownBox};
}
