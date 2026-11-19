// The map of a wheel is a wheel: you are always at the bottom, the far side of the ring is at the top (that is what hangs
// over your head), and the hub lines cross the hole in the middle. Sectors A..H are painted round the rim for call-outs.
function RMAP(g){
  const hud=g.hud,cv=hud.el.map,ctx=hud.mapCtx,ar=g.arena,R=ar.ring.R,C=ar.ring.C,ZM=ar.zmax,TAU=Math.PI*2;
  const css=k=>{try{return getComputedStyle(document.documentElement).getPropertyValue(k).trim()}catch(x){return""}};
  const LIME=css("--lime")||"#c8f31d",RED="#e0182d",CY="#19e6ff",PAPER="#f2f2ef",SCAN=9;let scanUntil=-1,lastGaze=null;
  g.mapScan=sec=>{scanUntil=g.time+(sec||SCAN)};
  const items=()=>{const o=[];try{const n=g.nest;if(n&&!g.net){for(const e of n.eggs)e.alive&&o.push({k:"egg",x:e.p.x,z:e.p.z});for(const e of n.sil)e.on&&o.push({k:"sil",x:e.p.x,z:e.p.z});const a=n.alien;a&&a.state!==3&&a.grp.visible&&o.push({k:"beast",x:a.pos.x,z:a.pos.z,hot:a.state===1})}
    const D=g.sx&&g.sx.D;if(D)for(const d of D)d.state!==4&&d.grp&&d.grp.visible&&o.push({k:"dog",x:d.pos.x,z:d.pos.z})}catch(x){}return o};
  const roofs=ar.roofs.filter(r=>r.kind==="roof");
  hud._map=function(t){
    const N=cv.width,s=N/2,i=ctx,a=t.player,c=t.zone,dead=!a.alive,T=t.clock||0,mx=dead?t.gfx.camera.position.x:a.pos.x;
    const ro=s-48,ri=ro*.56,rm=(ro+ri)/2,hb=(ro-ri)/2,m=N/480;
    const X=(x,z)=>s+(rm+Math.max(-1,Math.min(1,z/ZM))*hb)*Math.sin((x-mx)/R),Y=(x,z)=>s+(rm+Math.max(-1,Math.min(1,z/ZM))*hb)*Math.cos((x-mx)/R);
    if(t.gazeDone!==lastGaze){lastGaze!=null&&t.gazeDone>=0&&t.state==="live"&&(scanUntil=t.time+SCAN);lastGaze=t.gazeDone}
    if(t.time<scanUntil-SCAN-1)scanUntil=-1;const scan=Math.max(0,scanUntil-t.time),sk=Math.min(1,scan/1.2);
    i.setTransform(1,0,0,1,0,0);i.clearRect(0,0,N,N);i.save();i.beginPath();i.arc(s,s,s-22,0,TAU);i.clip();
    const bg=i.createRadialGradient(s,s,10,s,s,s);bg.addColorStop(0,"rgba(10,11,12,.94)");bg.addColorStop(1,"rgba(2,2,3,.96)");i.fillStyle=bg;i.fillRect(0,0,N,N);
    // the strip
    i.beginPath();i.arc(s,s,ro,0,TAU);i.arc(s,s,ri,0,TAU,!0);i.fillStyle="rgba(46,48,52,.72)";i.fill("evenodd");
    // the halo: everything outside it is washed red
    const L=c.k*Math.max(0,c.r-c.r1),stad=(r,Lr)=>{const p=[],push=(x,z)=>p.push(X(x,z),Y(x,z));if(Lr+r>=C/2-1)return null;
      for(let x=c.cx-Lr;x<=c.cx+Lr;x+=8)push(x,c.cz-r);for(let q=0;q<=12;q++){const th=-Math.PI/2+Math.PI*q/12;push(c.cx+Lr+r*Math.cos(th),c.cz+r*Math.sin(th))}
      for(let x=c.cx+Lr;x>=c.cx-Lr;x-=8)push(x,c.cz+r);for(let q=0;q<=12;q++){const th=Math.PI/2+Math.PI*q/12;push(c.cx-Lr+r*Math.cos(th),c.cz+r*Math.sin(th))}return p},
      trace=p=>{i.moveTo(p[0],p[1]);for(let q=2;q<p.length;q+=2)i.lineTo(p[q],p[q+1]);i.closePath()};
    const zp=stad(c.r,L);
    if(zp){i.beginPath();i.arc(s,s,ro,0,TAU);i.arc(s,s,ri,0,TAU,!0);trace(zp);i.fillStyle="rgba(150,12,26,.34)";i.fill("evenodd")}
    // roofs
    for(const y of roofs){const out=y.dist-Math.max(y.hx,y.hz)*.7>c.r,mine=!dead&&y.i===a.roof;
      i.beginPath();i.moveTo(X(y.x0,y.z0),Y(y.x0,y.z0));i.lineTo(X(y.x1,y.z0),Y(y.x1,y.z0));i.lineTo(X(y.x1,y.z1),Y(y.x1,y.z1));i.lineTo(X(y.x0,y.z1),Y(y.x0,y.z1));i.closePath();
      i.fillStyle=out?"rgba(120,14,26,.8)":mine?"rgba(242,242,239,.92)":"rgba(168,170,174,"+(.3+Math.min(.3,y.roofY/50)).toFixed(2)+")";i.fill()}
    // links: hub lines straight across the hole, ziplines, pads
    i.lineCap="round";
    for(const y of ar.links){if(y.kind==="zip"){const cut=t.gear&&t.gear.isCut(y);i.lineWidth=m*(y.hub?1.6:.9);i.strokeStyle=cut?"rgba(224,24,45,.9)":y.hub?"rgba(25,230,255,.9)":"rgba(25,230,255,.55)";i.setLineDash(cut?[m*2,m*3]:[]);
        i.beginPath();i.moveTo(X(y.p0.x,y.p0.z),Y(y.p0.x,y.p0.z));i.lineTo(X(y.p1.x,y.p1.z),Y(y.p1.x,y.p1.z));i.stroke()}
      else if(y.kind==="pad"){i.fillStyle=LIME;i.beginPath();i.arc(X(y.p0.x,y.p0.z),Y(y.p0.x,y.p0.z),m*2.2,0,TAU);i.fill()}}
    i.setLineDash([]);
    if(zp){i.shadowColor=RED;i.shadowBlur=12;i.lineWidth=m*2.6;i.strokeStyle=RED;i.beginPath();trace(zp);i.stroke();i.shadowBlur=0}
    if(c.nextR<c.r-.5){const np=stad(c.nextR,c.k*Math.max(0,c.nextR-c.r1));if(np){i.lineWidth=m*1.4;i.strokeStyle="rgba(242,242,239,.85)";i.setLineDash([m*5,m*5]);i.lineDashOffset=-T*m*8;i.beginPath();trace(np);i.stroke();i.setLineDash([]);i.lineDashOffset=0}}
    { // the angel hangs from the hub over the centre of the halo
      const ax=X(c.cx,c.cz),ay=Y(c.cx,c.cz),an=(c.cx-mx)/R,hx=s+ri*.34*Math.sin(an),hy=s+ri*.34*Math.cos(an),A=m*5;
      i.strokeStyle="rgba(224,24,45,.55)";i.lineWidth=m;i.setLineDash([m*2,m*3]);i.beginPath();i.moveTo(hx,hy);i.lineTo(ax,ay);i.stroke();i.setLineDash([]);
      i.strokeStyle=RED;i.lineWidth=m*1.6;i.beginPath();i.arc(ax,ay,A,0,TAU);i.moveTo(ax-A*1.5,ay);i.lineTo(ax+A*1.5,ay);i.moveTo(ax,ay-A*1.5);i.lineTo(ax,ay+A*1.5);i.stroke();
      i.fillStyle=RED;i.beginPath();i.arc(hx,hy,m*4,0,TAU);i.fill();i.fillStyle="rgba(242,242,239,.9)";i.beginPath();i.arc(s,s,m*2.2,0,TAU);i.fill();
      if(scan>0){const k=1-(scan%1.5)/1.5;i.strokeStyle="rgba(224,24,45,"+(.7*(1-k)).toFixed(2)+")";i.lineWidth=m*2;i.beginPath();i.arc(s,s,ri*.34+k*(ro-ri*.34),0,TAU);i.stroke()}}
    if(t.shadowRoof>=0){const y=ar.roofs[t.shadowRoof];if(y){i.lineWidth=m*2;i.strokeStyle=PAPER;i.setLineDash([m*3,m*2]);i.beginPath();i.arc(X(y.x,y.z),Y(y.x,y.z),m*9,0,TAU);i.stroke();i.setLineDash([])}}
    if(scan>0){i.globalAlpha=sk;for(const e of items()){const x=X(e.x,e.z),z=Y(e.x,e.z);
      if(e.k==="egg"){i.fillStyle=RED;i.beginPath();i.arc(x,z,m*1.6,0,TAU);i.fill()}
      else if(e.k==="sil"){i.strokeStyle=CY;i.fillStyle="rgba(25,230,255,.25)";i.lineWidth=m*1.5;const q=m*4.2;i.beginPath();i.moveTo(x,z-q);i.lineTo(x+q,z);i.lineTo(x,z+q);i.lineTo(x-q,z);i.closePath();i.fill();i.stroke()}
      else if(e.k==="dog"){i.strokeStyle=PAPER;i.lineWidth=m*1.5;const q=m*3.4;i.strokeRect(x-q,z-q,q*2,q*2)}
      else{const q=m*(6+1.5*Math.sin(T*7));i.fillStyle="rgba(5,5,5,.95)";i.strokeStyle=e.hot?RED:PAPER;i.lineWidth=m*1.8;i.beginPath();i.moveTo(x,z-q);i.lineTo(x+q*.9,z+q*.7);i.lineTo(x-q*.9,z+q*.7);i.closePath();i.fill();i.stroke()}}
      i.globalAlpha=1}
    for(const y of t.actors){if(y===a||!y.alive)continue;const px=X(y.pos.x,y.pos.z),py=Y(y.pos.x,y.pos.z);
      if(hud.teams&&y.team===hud.myTeam){i.fillStyle=PAPER;i.strokeStyle="rgba(5,5,5,.9)";i.lineWidth=m;i.beginPath();i.arc(px,py,m*4,0,TAU);i.fill();i.stroke();continue}
      if(y.feignK>.5)continue;const seen=y.revealedUntil>t.time||dead&&!t.net,shot=!t.fog&&t.time-y.lastShot<2.5;
      if(seen){const pk=(T*1.6)%1;i.strokeStyle="rgba(224,24,45,"+(.8*(1-pk)).toFixed(2)+")";i.lineWidth=m*1.4;i.beginPath();i.arc(px,py,m*(5+pk*9),0,TAU);i.stroke();i.shadowColor=RED;i.shadowBlur=10;i.fillStyle=RED;i.beginPath();i.arc(px,py,m*4.6,0,TAU);i.fill();i.shadowBlur=0}
      else if(shot){const k=t.time-y.lastShot,qx=X(y.lastShotPos.x,y.lastShotPos.z),qy=Y(y.lastShotPos.x,y.lastShotPos.z);i.strokeStyle="rgba(224,24,45,"+(.95-k*.3).toFixed(2)+")";i.lineWidth=m*1.8;i.beginPath();i.arc(qx,qy,m*(5+k*4),0,TAU);i.stroke()}}
    try{const D=g.sx&&g.sx.C;if(D&&D.phase>=1&&D.phase<=3&&D.pt){const px=X(D.pt.x,D.pt.z),py=Y(D.pt.x,D.pt.z),q=m*(6+Math.sin(T*5));i.strokeStyle=LIME;i.lineWidth=m*1.8;i.strokeRect(px-q,py-q,q*2,q*2)}}catch(x){}
    // sector letters round the rim
    i.font="700 "+Math.round(m*15)+'px "Barlow Condensed","Arial Narrow",sans-serif';i.textAlign="center";i.textBaseline="middle";
    for(let k=0;k<8;k++){const an=(-C/2+(k+.5)*C/8-mx)/R,lx=s+(ro+m*13)*Math.sin(an),ly=s+(ro+m*13)*Math.cos(an);i.fillStyle="rgba(242,242,239,.55)";i.fillText("ABCDEFGH"[k],lx,ly);
      const b=(-C/2+k*C/8-mx)/R;i.strokeStyle="rgba(242,242,239,.22)";i.lineWidth=m;i.beginPath();i.moveTo(s+ro*Math.sin(b),s+ro*Math.cos(b));i.lineTo(s+(ro+m*7)*Math.sin(b),s+(ro+m*7)*Math.cos(b));i.stroke()}
    // you: at the bottom, with a view cone. Facing along the ring is sideways here, facing across the strip is up or down
    if(!dead){const px=X(a.pos.x,a.pos.z),py=Y(a.pos.x,a.pos.z),fx=-Math.sin(a.yaw),fz=-Math.cos(a.yaw),an=Math.atan2(fz,fx);
      i.fillStyle="rgba(200,243,29,.16)";i.beginPath();i.moveTo(px,py);i.arc(px,py,m*46,an-.5,an+.5);i.closePath();i.fill();
      i.save();i.translate(px,py);i.rotate(an);i.fillStyle=LIME;i.strokeStyle="rgba(5,5,5,.9)";i.lineWidth=m*1.2;i.beginPath();i.moveTo(m*9,0);i.lineTo(-m*6,m*6);i.lineTo(-m*2.5,0);i.lineTo(-m*6,-m*6);i.closePath();i.fill();i.stroke();i.restore()}
    i.restore();
    i.strokeStyle="rgba(242,242,239,.35)";i.lineWidth=m*1.2;i.beginPath();i.arc(s,s,s-22,0,TAU);i.stroke();
  };
}
