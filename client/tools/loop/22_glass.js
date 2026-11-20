/* ---------- GLASS CITY: a city drawn in light. The drawing is "Virtual City [Tilt Brush]" by factoryfifteen (Sketchfab,
   CC BY 4.0), packed by client/tools/pack_glass.py: its flat strokes as rectangles, its cables as lines, its towers
   and catwalks as they are. The rectangles are the city's panels (floors, and the narrow uprights of its frames):
   drawn as glass, and solid. The plate they stand on comes from the arena, which the same tool writes. The map is flat, like the city map, and keeps its own colours
   (no grade: 95_grade.js "raw"). Reached with ?map=glass until it is finished. ---------- */
var SCGLASS=!1;
function GLPARSE(buf){
  const u8=new Uint8Array(buf),dv=new DataView(buf);if(String.fromCharCode(u8[0],u8[1],u8[2],u8[3])!=="SCGL")throw new Error("bad glass pack");
  const hn=dv.getUint32(4,!0),H=JSON.parse(new TextDecoder().decode(u8.subarray(8,8+hn))),lo=H.lo,sz=[H.hi[0]-lo[0],H.hi[1]-lo[1],H.hi[2]-lo[2]];let o=8+hn;
  const pos=n=>{const q=new Uint16Array(buf.slice(o,o+n*6)),p=new Float32Array(n*3);for(let i=0;i<n*3;i++)p[i]=lo[i%3]+q[i]/65535*sz[i%3];o+=n*6;return p};
  // one colour a triangle (or a line), square-root coded: spread to each of its corners
  const col=(n,rep)=>{const f=new Float32Array(n*3*rep);for(let i=0;i<n;i++){const r=(u8[o+i*3]/255)**2,g=(u8[o+i*3+1]/255)**2,b=(u8[o+i*3+2]/255)**2;for(let k=0;k<rep;k++){const j=(i*rep+k)*3;f[j]=r;f[j+1]=g;f[j+2]=b}}o+=n*3;return f};
  const tp=pos(H.tris*3),tc=col(H.tris,3),lp=pos(H.lines*2),lc=col(H.lines,2);
  // textured parts: corners, where each is on the picture, and the picture itself (a JPEG)
  const tx=(H.tex||[]).map(t=>{const p=pos(t.tris*3),uv=new Float32Array(buf.slice(o,o+t.tris*24));o+=t.tris*24;const jpg=u8.slice(o,o+t.jpg);o+=t.jpg+(-t.jpg&3);return{p,uv,jpg,solid:!!t.solid}});
  return{H,tp,tc,lp,lc,tx};
}
// The city for the renderer: the drawing, the plate it stands on, a black sky, two lights for the people in it.
async function nGl(r,t,e){
  const K=t.kit,A=t.arena,H=K.H,grp=new ce,mob=r.isMobile;
  // what is solid: the arena's shapes (the plate), the catwalks and tower sides, the panels (every rectangle, and the
  // odd loose triangle) and the towers themselves. The first H.free triangles are light only.
  const gb=new Ws(1<<12,1<<14);for(const s of A.shapes||[])gb.shape(s);const ex=gb.arrays(),np0=gb.nv*3,F=H.fixed,F0=H.free||0,NP=H.tris-F,
    parts=[K.tp.subarray(F0*9)].concat(K.tx.filter(t=>t.solid).map(t=>t.p)),ns=parts.reduce((n,a)=>n+a.length,0)/3,cp=new Float32Array(np0+ns*3),ci=new Uint32Array(gb.ni+ns);
  cp.set(ex.position.subarray(0,np0));{let o=np0;for(const a of parts){cp.set(a,o);o+=a.length}}ci.set(ex.index.subarray(0,gb.ni));for(let i=0;i<ns;i++)ci[gb.ni+i]=gb.nv+i;
  const cg=new se;cg.setAttribute("position",new Ft(cp,3));cg.setIndex(new Ft(ci,1));const bvh=new Zo(cg);
  // The panels are drawn as glass. Each one lets through what is behind it and adds a little light of its own (the
  // "screen" blend: order does not matter, and any number of panes stacked up can never get brighter than white).
  // A pane is clear seen face on and shines seen at a glancing angle, and has a bright edge (aUv: where on the
  // rectangle, and the rectangle's size). An edge too far off to be a pixel wide dims instead of staying a pixel wide,
  // or the far city would be a white scribble.
  const pp=K.tp.subarray(F*9),pc=K.tc.subarray(F*9),uv=new Float32Array(NP*12),R=H.rects||0,d=(a,b)=>Math.hypot(pp[a]-pp[b],pp[a+1]-pp[b+1],pp[a+2]-pp[b+2]);
  for(let q=0;q<R;q++){const o=q*18,L=d(o,o+3),W=d(o+3,o+6),u=q*24;   // two triangles a rectangle: (c0,c1,c2) and (c0,c2,c3)
    uv.set([0,0,L,W, L,0,L,W, L,W,L,W, 0,0,L,W, L,W,L,W, 0,W,L,W],u)}
  for(let i=R*24;i<NP*12;i+=4){uv[i]=1;uv[i+1]=1;uv[i+2]=2;uv[i+3]=2}
  const pg=new se;pg.setAttribute("position",new Ft(pp,3));pg.setAttribute("color",new Ft(pc,3));pg.setAttribute("aUv",new Ft(uv,4));
  const pm=new Ge({side:2,transparent:!0,depthWrite:!1,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:203,blendSrcAlpha:200,blendDstAlpha:201,uniforms:{uGain:{value:1}},
    vertexShader:"attribute vec3 color; attribute vec4 aUv; varying vec3 vCol; varying vec4 vUv; varying vec3 vW; void main(){ vCol = color; vUv = aUv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",
    fragmentShader:`precision highp float; varying vec3 vCol; varying vec4 vUv; varying vec3 vW; uniform float uGain;
void main(){ vec2 q = min(vUv.xy, vUv.zw - vUv.xy); float e = min(q.x, q.y); float px = fwidth(e) * 1.25 + 1.0e-5;
  float edge = (1.0 - smoothstep(0.0, max(0.035, px), e)) * clamp(0.035 / px, 0.2, 1.0);
  vec3 toCam = cameraPosition - vW; float dist = length(toCam); vec3 n = normalize(cross(dFdx(vW), dFdy(vW)));
  float fr = pow(1.0 - abs(dot(n, toCam / dist)), 3.0); float inner = 1.0 - smoothstep(0.0, 0.7, e); float far = 1.0 / (1.0 + dist * 0.009);
  vec3 c = vCol * (0.018 + 0.04 * inner + 0.15 * fr) * far + (vCol * 0.7 + 0.24) * edge * 0.8 * (0.35 + 0.65 * far);
  gl_FragColor = vec4(min(c * uGain, vec3(0.95)), 0.0); }`});
  const panels=new Qt(pg,pm);panels.matrixAutoUpdate=!1;panels.frustumCulled=!1;panels.renderOrder=6;panels.name="glass:panels";grp.add(panels);
  mob&&H.play&&pg.setDrawRange(0,(H.play+Math.floor((R-H.play)*.4))*6);   // phones: every pane you can touch, and two in five of the skyline's
  // the rest of the drawing in its own colours: red lights, paths on the plate, the dark catwalks and tower sides
  const ag=new se;ag.setAttribute("position",new Ft(K.tp.subarray(0,F*9),3));ag.setAttribute("color",new Ft(K.tc.subarray(0,F*9),3));
  const art=new Qt(ag,new _e({vertexColors:!0,side:2,fog:!1}));art.matrixAutoUpdate=!1;art.frustumCulled=!1;art.name="glass:art";grp.add(art);
  // the towers of the middle block, with the model's own pictures of windows lit at night
  for(const t of K.tx){const tg=new se;tg.setAttribute("position",new Ft(t.p,3));tg.setAttribute("uv",new Ft(t.uv,2));
    const tm=new _e({color:new Tt(.03,.04,.055),side:2,fog:!1}),m=new Qt(tg,tm);m.matrixAutoUpdate=!1;m.frustumCulled=!1;m.name="glass:tower";grp.add(m);
    const im=new Image,url=URL.createObjectURL(new Blob([t.jpg],{type:"image/jpeg"}));im.onload=()=>{const x=new Xe(im);x.colorSpace=Ne;x.wrapS=x.wrapT=1e3;x.flipY=!1;x.anisotropy=e.aniso;x.needsUpdate=!0;tm.map=x;tm.color.setRGB(1,1,1);tm.needsUpdate=!0;URL.revokeObjectURL(url)};im.src=url}
  const lg0=new se;lg0.setAttribute("position",new Ft(K.lp,3));lg0.setAttribute("color",new Ft(K.lc,3));
  const wires=new yr(lg0,new wo({vertexColors:!0,fog:!1}));wires.matrixAutoUpdate=!1;wires.frustumCulled=!1;wires.name="glass:wires";grp.add(wires);
  // the plate: dark, with a drawn grid (a line every 6 m, a brighter one every 36 m, where the street tiles meet)
  const gt=(()=>{const c=document.createElement("canvas");c.width=c.height=768;const x=c.getContext("2d");x.fillStyle="#0a0e16";x.fillRect(0,0,768,768);
    for(let i=0;i<=6;i++){const p=i*128;x.fillStyle=i%6===0?"rgba(120,170,235,.55)":"rgba(90,130,190,.2)";x.fillRect(p-(i%6===0?2:1),0,i%6===0?4:2,768);x.fillRect(0,p-(i%6===0?2:1),768,i%6===0?4:2)}
    const tx=new rs(c);tx.colorSpace=Ne;tx.wrapS=tx.wrapT=1e3;tx.repeat.set(660/36,660/36);tx.anisotropy=e.aniso;return tx})();
  const gm=new Ye({color:new Tt(.5,.5,.5),map:gt});Gi(gm);const ground=new Qt(new os(660,660),gm);ground.rotation.x=-Math.PI/2;ground.position.y=.004;ground.updateMatrix();ground.matrixAutoUpdate=!1;ground.name="glass:plate";grp.add(ground);
  const sky=new Qt(new as(700,32,16),new Ge({side:1,depthWrite:!1,fog:!1,uniforms:{uTime:Wt.uTime,uRedCol:Wt.uRedCol,uAngel:{value:new I(0,60,0)}},
    vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * 0.99995; }",
    fragmentShader:`precision highp float; varying vec3 vDir;
float h3(vec3 p){ p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main(){ vec3 d = normalize(vDir); float up = max(d.y, 0.0); vec3 col = mix(vec3(0.012, 0.018, 0.034), vec3(0.002, 0.003, 0.006), pow(up, 0.45));
  float s = h3(floor(d * 210.0)); col += vec3(0.7, 0.8, 1.0) * step(0.9982, s) * smoothstep(0.02, 0.3, up) * 0.55; gl_FragColor = vec4(col, 1.0); }`}));
  sky.renderOrder=-50;sky.name="glass:sky";grp.add(sky);
  const hemi=new wr(9414856,1053204,1.25);grp.add(hemi);
  const moon=new fs(12374271,1.5);moon.position.set(60,140,40);moon.target.position.set(0,0,0);grp.add(moon,moon.target);
  r.scene.add(grp);
  return{group:grp,solid:null,deco:null,skyline:{count:0,getMatrixAt(){}},sky:sky,mat:null,tex:{userData:{repaint(){}}},bvh:bvh,colGeo:null,moon:moon,hemi:hemi,tris:H.tris,glass:K};
}
// Glass City inside the running game.
function GLASS(g){
  if(!SCGLASS)return;
  // a clear black night, so the drawing reads: thin haze, no rain, no thunder, no street lamps
  Wt.uFogParams.value.set(0,0,1,.0016);Wt.uFogLow.value.setRGB(.004,.006,.012);Wt.uFogHigh.value.setRGB(.003,.004,.008);Wt.uFogDeep.value.setRGB(.002,.003,.006);
  if(g.xv){const x=g.xv;x.moon0=g.city.moon.intensity;x.hemi0=g.city.hemi.intensity;x.boltAt=1e12;x.boltT=-1;x.lampHead&&(x.lampHead.visible=x.lampPole.visible=!1)}
  {const b=document.getElementById("rainb");b&&(b.style.display="none")}
  {const q=g.gfx,dry=()=>{Wt.uWet.value=0;Wt.uLampOn.value=0},sq=q.setQuality.bind(q);q.setQuality=t=>{const r=sq(t);dry();return r};dry()}   // a dry plate: no puddles, no lamp pools
  {const au=g.audio,quiet=()=>{try{au.rain.g.gain.value=0;au.wind.g.gain.value=.03}catch(e){}},amb=au._ambience;amb&&(au._ambience=function(){amb.apply(this,arguments);quiet()});quiet()}
  // words on the menu that belong to the other maps
  try{const q=s=>document.querySelector(s),live=q(".m2-live");live&&live.lastChild&&(live.lastChild.textContent="GLASS CITY · PROTOTYPE");const d=q(".m2-dist span");d&&(d.textContent="GLASS CITY · PROTOTYPE");const sub=q(".m2-sub");sub&&(sub.textContent="Eight snipers. A city drawn in light. Every pane is solid.");
    const w=document.createTreeWalker(document.getElementById("m2")||document.body,4);for(let n;n=w.nextNode();)/Stay on the Rooftops/i.test(n.nodeValue)&&(n.nodeValue=n.nodeValue.replace(/Stay on the Rooftops\.?/i,"Glass is solid. Find the gaps."))}catch(e){}
  g.glass={pack:g.city.glass};
}
