/* ---------- GLASS CITY. The city is "Virtual City [Tilt Brush]" by factoryfifteen (Sketchfab, CC BY 4.0), packed by
   client/tools/pack_glass.py and shown as it was built: its strokes, wires, lights, signs, windows and ground in their
   own colours, each doing with light what the file says it does. Nothing is restyled and there is no colour grade
   (95_grade.js "raw"). How the city is lit is not in the file: it is lit here the way its picture on Sketchfab is
   (GLT below). Every stroke is a pane: solid, and what a round bounces off (client/src/glass.js). The arena comes from
   client/tools/pack_glass_arena.py. Reached with ?map=glass until it is finished. ---------- */
var SCGLASS=!1;
var GLT=null;   // how the city is lit (set where it is built)
// a pane's own two directions: along its first side, and across it in its plane (e1 = first side, e2 = towards its third corner)
function glAxes(e1,e2){const L=Math.hypot(e1[0],e1[1],e1[2])||1,u=[e1[0]/L,e1[1]/L,e1[2]/L],n=[u[1]*e2[2]-u[2]*e2[1],u[2]*e2[0]-u[0]*e2[2],u[0]*e2[1]-u[1]*e2[0]],N=Math.hypot(n[0],n[1],n[2])||1;
  return[u[0],u[1],u[2],(n[1]*u[2]-n[2]*u[1])/N,(n[2]*u[0]-n[0]*u[2])/N,(n[0]*u[1]-n[1]*u[0])/N]}
// a pane laid flat: its four corners in metres along and across (from the least of each), and how long and wide it is
function glFlat(c){const d=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]],b=glAxes(d(c[1],c[0]),d(c[2],c[0])),uv=c.map(p=>{const q=d(p,c[0]);return[q[0]*b[0]+q[1]*b[1]+q[2]*b[2],q[0]*b[3]+q[1]*b[4]+q[2]*b[5]]});
  const u0=Math.min(uv[0][0],uv[1][0],uv[2][0],uv[3][0]),v0=Math.min(uv[0][1],uv[1][1],uv[2][1],uv[3][1]);for(const p of uv){p[0]-=u0;p[1]-=v0}
  return{c0:c[0],b,uv,u0,v0,L:Math.max(uv[0][0],uv[1][0],uv[2][0],uv[3][0]),W:Math.max(uv[0][1],uv[1][1],uv[2][1],uv[3][1])}}
// the three corners of every triangle of a list, marked (1,0,0) (0,1,0) (0,0,1): what its edges are drawn from
function glBary(n){const a=new Float32Array(n*9);for(let i=0;i<n;i++){a[i*9]=1;a[i*9+4]=1;a[i*9+8]=1}return a}
// The city for the renderer.
async function nGl(r,t,e){
  const K=t.kit,A=t.arena,H=K.H,grp=new ce,mob=r.isMobile;
  // What is solid (client/src/glass.js glassSolid): the arena's shapes (the plate), the ribbons, roofs and tower sides,
  // every pane, and the towers.
  const gb=new Ws(1<<12,1<<14);for(const s of A.shapes||[])gb.shape(s);const ex=gb.arrays(),F=H.fixed,NP=H.rects||0,NT=H.tris-F,S=glassSolid(K,{position:ex.position,index:ex.index,nv:gb.nv,ni:gb.ni});
  const cg=new se;cg.setAttribute("position",new Ft(S.position,3));cg.setIndex(new Ft(S.index,1));const bvh=new Zo(cg);
  // The light. The picture on Sketchfab shows a black night with little light in it: the navy the city is inked in
  // stays black and the paler strokes show dimly. One strong red-orange light from the west turns the roofs that face
  // it orange and leaves what stands behind something in the dark (those shadows are in the pack: the game has none
  // of its own). The wires, the grids, the red lights, the signs, the ribbons and the windows give their own light.
  // uAmb: the light from everywhere (blue); uLd, uLc: where the red light comes from (the pack says), and its colour;
  // uWire: how strongly the wires glow; uSheen: how much of the night's blue a pane catches at a glancing angle.
  // And every edge of the model's mesh is drawn as a thin blue line, as in that picture (the page shows the model with
  // its wireframe on): round each pane, across it at each step its stroke took, and corner to corner of each step.
  // uWc, uWo: the lines' colour, and how solid they are (less so far off). uGlow: how strongly the lights and ribbons glow.
  const sun=H.sun||[-.785,.616,.07];
  GLT={uAmb:{value:new Tt(.04,.06,.1)},uLd:{value:new I(sun[0],sun[1],sun[2]).normalize()},uLc:{value:new Tt(130,7.5,1)},uWire:{value:3},uSheen:{value:.3},uWc:{value:new Tt(.012,.04,.125)},uWo:{value:.5},uGlow:{value:.8}};
  const LIT="uniform vec3 uAmb; uniform vec3 uLd; uniform vec3 uLc;\nvec3 glLit(vec3 alb, vec3 n, float sh){ float up = n.y * n.y; alb *= inversesqrt(max(dot(alb, vec3(0.2126, 0.7152, 0.0722)) / 0.0234, 0.05)); vec3 l = alb * uLc * (max(dot(n, uLd), 0.0) * sh * mix(0.25, 1.0, smoothstep(0.0, 0.7, up)) * (1.0 - 0.65 * smoothstep(0.85, 1.0, up))); return alb * uAmb + l / (1.0 + 2.2 * l.r); }\n";
  // (matched to the picture: a pale stroke and a dark one differ less there than their colours do, so the difference is halved; it is the sloping roofs the red light catches, a wall takes less of it and a flat roof less; and nothing in it goes white)
  const EDGE="uniform vec3 uWc; uniform float uWo;\nfloat glEdge3(vec3 b){ vec3 a = smoothstep(vec3(0.0), fwidth(b) * 1.1 + 1.0e-6, b); return 1.0 - min(a.x, min(a.y, a.z)); }\nfloat glFar(float d){ return uWo / (1.0 + d / 260.0); }\n";
  // The panes: each in its own colour, showing the light that falls on the side you see. aUv: where on the pane (metres
  // along and across), how long one step of its stroke is, how wide the pane; aEd: how far from each of its four sides;
  // aHit: where the last round met it, how many it has taken, and a number so that each pane cracks its own way.
  const pp=K.tp.subarray(F*9),uv=new Float32Array(NT*12),ed=new Float32Array(NT*12).fill(1e3);
  for(let q=0;q<NP;q++){const o=q*18,f=glFlat([0,1,2,5].map(k=>[pp[o+k*3],pp[o+k*3+1],pp[o+k*3+2]])),cl=f.L/Math.max(1,K.sg?K.sg[q]:1);   // two triangles a pane: (c0,c1,c2) and (c0,c2,c3)
    [0,1,2,0,2,3].forEach((k,n)=>{const p=f.uv[k],i=q*24+n*4;uv[i]=p[0];uv[i+1]=p[1];uv[i+2]=cl;uv[i+3]=f.W;
      for(let e=0;e<4;e++){const a=f.uv[e],b=f.uv[(e+1)%4],ex=b[0]-a[0],ey=b[1]-a[1],el=Math.hypot(ex,ey);el>1e-5&&(ed[i+e]=Math.abs(ex*(p[1]-a[1])-ey*(p[0]-a[0]))/el)}})}
  for(let i=NP*24;i<NT*12;i+=4){uv[i]=250;uv[i+1]=500;uv[i+2]=1e3;uv[i+3]=1e3}   // (the loose triangles: no lines)
  const pg=new se;pg.setAttribute("position",new Ft(pp,3));pg.setAttribute("color",new Ft(K.tc.subarray(F*9),3));pg.setAttribute("aUv",new Ft(uv,4));pg.setAttribute("aEd",new Ft(ed,4));pg.setAttribute("aHit",new Ft(new Float32Array(NT*12),4));
  {const sh=new Float32Array(NT*3).fill(1),b=K.sh;if(b)for(let q=0;q<NP;q++)[0,1,2,0,2,3].forEach((k,n)=>{sh[q*6+n]=b[q*4+k]/255});pg.setAttribute("aSh",new Ft(sh,1))}   // how much of the red light each corner sees
  const pmat=new Ge({side:2,fog:!1,uniforms:GLT,
    vertexShader:"attribute vec3 color; attribute vec4 aUv; attribute vec4 aEd; attribute vec4 aHit; attribute float aSh; varying vec3 vCol; varying vec4 vUv; varying vec4 vEd; varying vec4 vHit; varying vec3 vW; varying float vSh; void main(){ vCol = color; vUv = aUv; vEd = aEd; vHit = aHit; vSh = aSh; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",
    fragmentShader:`precision highp float; varying vec3 vCol; varying vec4 vUv; varying vec4 vEd; varying vec4 vHit; varying vec3 vW; varying float vSh; uniform float uSheen;
${LIT}${EDGE}void main(){ vec3 toCam = cameraPosition - vW; float dist = length(toCam); vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); if (dot(n, toCam) < 0.0) n = -n;
  float fr = pow(1.0 - dot(n, toCam / dist), 4.0); vec3 c = glLit(vCol, n, vSh) + vec3(0.010, 0.026, 0.07) * fr * uSheen;
  { vec4 a = smoothstep(vec4(0.0), fwidth(vEd) * 1.1 + 1.0e-6, vEd); float e = 1.0 - min(min(a.x, a.y), min(a.z, a.w)), fu = fwidth(vUv.x), fv = fwidth(vUv.y), fs = fract(vUv.x / vUv.z);
    e = max(e, 1.0 - smoothstep(0.0, fu * 1.1 + 1.0e-6, min(fs, 1.0 - fs) * vUv.z));                                                     // across the pane at each step of its stroke
    e = max(e, 0.8 * (1.0 - smoothstep(0.0, (fu + fv) * 0.7 + 1.0e-6, abs(fs - vUv.y / vUv.w) * vUv.z * vUv.w * inversesqrt(vUv.z * vUv.z + vUv.w * vUv.w))));   // and corner to corner of each step
    c = mix(c, uWc, e * glFar(dist) * (1.0 - 0.85 * smoothstep(0.03, 0.2, c.r - c.b))); }   // (fainter over what the red light has lit: the roofs stay orange)
  if (vHit.z > 0.5) { vec2 p = vUv.xy - vHit.xy; float r = length(p) + 1.0e-4, a = atan(p.y, p.x) + 0.3 * sin(r * 5.0 + vHit.w * 40.0), N = 5.0 + 4.0 * vHit.z, reach = 1.2 + 2.6 * vHit.z;
    float spoke = abs(fract(a * N / 6.2832 + vHit.w) - 0.5) * 6.2832 / N * r; float ring = abs(fract(r * 1.3 + 0.25 * sin(a * 3.0 + vHit.w * 9.0)) - 0.5) / 1.3;
    float w = max(0.012, fwidth(r) * 1.2); float crack = max(1.0 - smoothstep(0.0, w, spoke), (1.0 - smoothstep(0.0, w, ring)) * step(r, reach * 0.55)) * (1.0 - smoothstep(reach * 0.6, reach, r));
    c += vec3(0.45, 0.62, 0.9) * crack; }
  gl_FragColor = vec4(c, 1.0); }`});
  const thin=mob&&H.play,panes=new Qt(pg,thin?[pmat]:pmat);panes.matrixAutoUpdate=!1;panes.frustumCulled=!1;panes.name="glass:panes";grp.add(panes);
  thin&&(pg.addGroup(0,(H.play+Math.floor((NP-H.play)*.5))*6,0),pg.addGroup(NP*6,(NT-NP*2)*3,0));   // phones: every pane on the plate, half of the skyline's, and the loose triangles
  // the rest as built: red lights and ribbons of light (they glow: their own colour), grids, signs and tower sides (lit like the panes)
  const ag=new se,alit=new Float32Array(F*3);H.lit&&alit.fill(1,H.lit[0]*3,H.lit[1]*3);ag.setAttribute("position",new Ft(K.tp.subarray(0,F*9),3));ag.setAttribute("color",new Ft(K.tc.subarray(0,F*9),3));ag.setAttribute("aLit",new Ft(alit,1));ag.setAttribute("aB",new Ft(glBary(F),3));
  // (they were painted on and beside the strokes: here each is drawn as if 0.8 m nearer the eye, so a stroke lying just over one does not hide it)
  const art=new Qt(ag,new Ge({side:2,fog:!1,uniforms:GLT,vertexShader:"attribute vec3 color; attribute float aLit; attribute vec3 aB; varying vec3 vCol; varying float vLit; varying vec3 vW; varying vec3 vB; void main(){ vCol = color; vLit = aLit; vB = aB; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vec4 mv = viewMatrix * w; gl_Position = projectionMatrix * vec4(mv.xyz * (1.0 - min(0.8 / max(length(mv.xyz), 1.0e-3), 0.5)), 1.0); }",
    fragmentShader:`precision highp float; varying vec3 vCol; varying float vLit; varying vec3 vW; varying vec3 vB;
uniform float uGlow;
${LIT}${EDGE}void main(){ vec3 c = vCol * uGlow, v = cameraPosition - vW; if (vLit > 0.5) { vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); if (dot(n, v) < 0.0) n = -n; c = mix(glLit(vCol, n, 1.0), uWc, glEdge3(vB) * glFar(length(v))); } gl_FragColor = vec4(c, 1.0); }`}));art.matrixAutoUpdate=!1;art.frustumCulled=!1;art.name="glass:art";grp.add(art);
  // the towers of the middle block, the lit boxes on them and the ground, each with the model's own picture
  for(const t of K.tx){const tg=new se;tg.setAttribute("position",new Ft(t.p,3));tg.setAttribute("uv",new Ft(t.uv,2));tg.setAttribute("aB",new Ft(glBary(t.p.length/9),3));
    const tm=new Ge({side:2,fog:!1,uniforms:{map:{value:null},uGain:{value:0},uWc:GLT.uWc,uWo:GLT.uWo,uOn:{value:t.ground?0:.35}},   // (the windows a little over 1: they glow as they do in the picture, and the lines over them are fainter; the ground has no lines)
      vertexShader:"attribute vec3 aB; varying vec2 vUv; varying vec3 vB; varying float vD; void main(){ vUv = uv; vB = aB; vec4 mv = modelViewMatrix * vec4(position, 1.0); vD = length(mv.xyz); gl_Position = projectionMatrix * mv; }",
      fragmentShader:`precision highp float; uniform sampler2D map; uniform float uGain; uniform float uOn; varying vec2 vUv; varying vec3 vB; varying float vD;
${EDGE}void main(){ gl_FragColor = vec4(mix(texture2D(map, vUv).rgb * uGain, uWc, glEdge3(vB) * glFar(vD) * uOn), 1.0); }`}),m=new Qt(tg,tm);m.matrixAutoUpdate=!1;m.frustumCulled=!1;m.name=t.ground?"glass:plate":"glass:tower";grp.add(m);
    const im=new Image,url=URL.createObjectURL(new Blob([t.jpg],{type:"image/jpeg"}));im.onload=()=>{const x=new Xe(im);x.colorSpace=Ne;x.wrapS=x.wrapT=1e3;x.flipY=!1;x.anisotropy=e.aniso;x.needsUpdate=!0;tm.uniforms.map.value=x;tm.uniforms.uGain.value=t.ground?1:2;URL.revokeObjectURL(url)};im.src=url}
  // The wires: each segment is a strip turned to face the eye: the wire itself in the middle (a wire thinner than a
  // pixel is drawn a pixel wide and that much fainter, so far wires fade instead of flickering) and, round it, the
  // soft glow a wire has in the picture. They give the file's own blue.
  {const n=H.lines,lp=K.lp,P=new Float32Array(n*12),O=new Float32Array(n*12),W=new Float32Array(n*12),ix=new Uint32Array(n*6);   // aSW: which way to step off the line (it is worked out from this end looking at the other, so it flips at the far end), the wire's thickness, which side this corner is on
    for(let i=0;i<n;i++){const a=i*6,w=K.lw[i];for(let k=0;k<4;k++){const me=k<2?a:a+3,ot=k<2?a+3:a,o=(i*4+k)*3;P[o]=lp[me];P[o+1]=lp[me+1];P[o+2]=lp[me+2];O[o]=lp[ot];O[o+1]=lp[ot+1];O[o+2]=lp[ot+2];W[o]=(k%2?1:-1)*(k<2?1:-1);W[o+1]=w;W[o+2]=k%2?1:-1}
      ix.set([i*4,i*4+1,i*4+2,i*4+1,i*4+3,i*4+2],i*6)}
    const wg=new se;wg.setAttribute("position",new Ft(P,3));wg.setAttribute("aOther",new Ft(O,3));wg.setAttribute("aSW",new Ft(W,3));wg.setIndex(new Ft(ix,1));
    const wm=new Ge({side:2,fog:!1,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201,uniforms:{uCol:{value:new Tt(H.wire[0],H.wire[1],H.wire[2])},uWire:GLT.uWire,uH:{value:720}},
      vertexShader:`attribute vec3 aOther; attribute vec3 aSW; uniform float uH; varying vec2 vA;
void main(){ vec4 a = modelViewMatrix * vec4(position, 1.0), b = modelViewMatrix * vec4(aOther, 1.0); vec3 t = normalize(b.xyz - a.xyz + vec3(1.0e-5)); vec3 s = normalize(cross(t, normalize(a.xyz))) * aSW.x;
  float px = -a.z * 2.0 / (projectionMatrix[1][1] * uH), w = max(aSW.y, px * 1.3); vA = vec2(aSW.z * 4.0, aSW.y / w); gl_Position = projectionMatrix * vec4(a.xyz + s * (w * 2.0), 1.0); }`,
      fragmentShader:"precision highp float; uniform vec3 uCol; uniform float uWire; varying vec2 vA; void main(){ float d = abs(vA.x), core = (1.0 - smoothstep(0.7, 1.3, d)) * vA.y, g = 1.0 - smoothstep(0.0, 4.0, d); gl_FragColor = vec4(uCol * uWire * (core + 0.3 * g * g * vA.y), core); }"});
    const wires=new Qt(wg,wm);wires.matrixAutoUpdate=!1;wires.frustumCulled=!1;wires.renderOrder=3;wires.name="glass:wires";grp.add(wires)}
  // a black sky
  const sky=new Qt(new as(900,16,8),new Ge({side:1,depthWrite:!1,fog:!1,uniforms:{uTime:Wt.uTime,uRedCol:Wt.uRedCol,uAngel:{value:new I(0,60,0)}},   // (the game expects a sky it can tell where the angel is)
    vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w * 0.99995; }",fragmentShader:"void main(){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); }"}));
  sky.renderOrder=-50;sky.name="glass:sky";grp.add(sky);
  const hemi=new wr(4219360,527386,1.5);grp.add(hemi);   // the people in it stand in the same two lights: blue from everywhere, red-orange from the south-west
  const moon=new fs(16729114,2.2);moon.position.set(sun[0]*200,sun[1]*200,sun[2]*200);moon.target.position.set(0,0,0);grp.add(moon,moon.target);
  r.scene.add(grp);
  return{group:grp,solid:null,deco:null,skyline:{count:0,getMatrixAt(){}},sky:sky,mat:null,tex:{userData:{repaint(){}}},bvh:bvh,colGeo:null,moon:moon,hemi:hemi,tris:H.tris,glass:K,glassSolid:S,panes:panes};
}
// Glass City inside the running game.
function mobG(g){return!!(g.gfx&&g.gfx.isMobile)}
function GLASS(g){
  if(!SCGLASS)return;
  // the halo closes where this arena says (the other maps close on their middle, which is where the game keeps it)
  {const c=g.arena.data.zone.center;g.zone.cx=c[0];g.zone.cz=c[1];try{g.fx.curtain.position.x=c[0];g.fx.curtain.position.z=c[1]}catch(e){}}
  // a black night: no haze, no rain, no thunder, no street lamps
  Wt.uFogParams.value.set(0,0,1,.0002);Wt.uFogLow.value.setRGB(0,0,0);Wt.uFogHigh.value.setRGB(0,0,0);Wt.uFogDeep.value.setRGB(0,0,0);
  {const w=g.gfx.scene.getObjectByName("glass:wires"),u0=g.update.bind(g);g.update=t=>{w&&(w.material.uniforms.uH.value=g.gfx.renderer.domElement.height||720);return u0(t)}}   // the cables need to know how tall the picture is
  if(g.xv){const x=g.xv;x.moon0=g.city.moon.intensity;x.hemi0=g.city.hemi.intensity;x.boltAt=1e12;x.boltT=-1;x.lampHead&&(x.lampHead.visible=x.lampPole.visible=!1)}
  {const b=document.getElementById("rainb");b&&(b.style.display="none")}
  try{const x=g.sx;if(x&&x.wisps){for(const m of x.wisps)g.gfx.scene.remove(m);x.wisps=[]}}catch(e){}   // no fog banks drifting past: the night is clear and black
  {const q=g.gfx,dry=()=>{Wt.uWet.value=0;Wt.uLampOn.value=0;q.post.uBloom.value=Math.min(q.post.uBloom.value,.3)},sq=q.setQuality.bind(q);q.setQuality=t=>{const r=sq(t);dry();return r};dry()}   // a dry plate: no puddles, no lamp pools; and less of the other maps' red haze round anything red
  {const au=g.audio,quiet=()=>{try{au.rain.g.gain.value=0;au.wind.g.gain.value=.03}catch(e){}},amb=au._ambience;amb&&(au._ambience=function(){amb.apply(this,arguments);quiet()});quiet()}
  // words on the menu that belong to the other maps
  try{const q=s=>document.querySelector(s),live=q(".m2-live");live&&live.lastChild&&(live.lastChild.textContent="GLASS CITY · PROTOTYPE");const d=q(".m2-dist span");d&&(d.textContent="GLASS CITY · PROTOTYPE");const sub=q(".m2-sub");sub&&(sub.textContent="Eight snipers. A city of glass at night. Rounds bounce.");
    const w=document.createTreeWalker(document.getElementById("m2")||document.body,4);for(let n;n=w.nextNode();)/Stay on the Rooftops/i.test(n.nodeValue)&&(n.nodeValue=n.nodeValue.replace(/Stay on the Rooftops\.?/i,"Rounds bounce off glass."))}catch(e){}
  // the small map: roofs lie over one another here, so it shows the ones on your level, and the ladders and cables that touch it
  {const hud=g.hud,draw=hud._map,near=(l,y)=>Math.abs(l.p0.y-y)<2.6||Math.abs(l.p1.y-y)<2.6;
    hud._map=function(game){const ar=game.arena,R=ar.roofs,L=ar.links,y=game.player.pos.y;ar.roofs=R.filter(r=>Math.abs(r.roofY-y)<2.2);ar.links=L.filter(l=>(l.kind==="zip"||l.kind==="ladder")&&near(l,y));try{draw.call(this,game)}finally{ar.roofs=R;ar.links=L}}}
  // ---- glass that rounds bounce off and break (the rules are in client/src/glass.js)
  const ar=g.arena,G=glassInstall(ar,g.city.glassSolid,I),panes=g.city.panes,pg=panes.geometry,ppos=pg.getAttribute("position"),phit=pg.getAttribute("aHit"),pcol=pg.getAttribute("color"),au=g.audio;
  const lis=()=>g.listenerPos||g.gfx.camera.position,vol=p=>Math.max(.04,.7/(1+p.distanceTo(lis())/16)),pan=p=>{try{return g.panOf(p)}catch(e){return 0}};
  // shards: a pool of small triangles that fall, turn and go out
  const NS=mobG(g)?360:900,sp=new Float32Array(NS*9),sc=new Float32Array(NS*9),sh=[],sgeo=new se;sgeo.setAttribute("position",new Ft(sp,3));sgeo.setAttribute("color",new Ft(sc,3));
  const smesh=new Qt(sgeo,new _e({vertexColors:!0,side:2,fog:!1,transparent:!0,depthWrite:!1,blending:qi}));smesh.frustumCulled=!1;smesh.renderOrder=8;smesh.name="glass:shards";g.gfx.scene.add(smesh);let sfree=0;
  for(let i=0;i<NS;i++)sh.push({t:0,life:0,p:new I,v:new I,a:new I,b:new I,w:0,c:[1,1,1]});
  const shard=(p,v,size,c,life)=>{const s=sh[sfree];sfree=(sfree+1)%NS;s.t=0;s.life=life;s.p.copy(p);s.v.copy(v);s.a.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(size);s.b.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(size*.6);s.w=(Math.random()-.5)*14;s.c=c};
  const V=new I,W=new I,P=new I;
  {const u0=g.update.bind(g);g.update=t=>{const r=u0(t);let any=!1;for(let i=0;i<NS;i++){const s=sh[i],o=i*9;if(s.life<=0){continue}any=!0;s.t+=t;if(s.t>=s.life){s.life=0;for(let k=0;k<9;k++)sp[o+k]=0;continue}
      s.v.y-=14*t;s.p.addScaledVector(s.v,t);const k=1-s.t/s.life,cs=Math.cos(s.w*s.t),sn=Math.sin(s.w*s.t);V.copy(s.a).multiplyScalar(cs).addScaledVector(s.b,sn);W.copy(s.b).multiplyScalar(cs).addScaledVector(s.a,-sn);
      sp[o]=s.p.x+V.x;sp[o+1]=s.p.y+V.y;sp[o+2]=s.p.z+V.z;sp[o+3]=s.p.x-V.x*.5+W.x;sp[o+4]=s.p.y-V.y*.5+W.y;sp[o+5]=s.p.z-V.z*.5+W.z;sp[o+6]=s.p.x-V.x*.5-W.x;sp[o+7]=s.p.y-V.y*.5-W.y;sp[o+8]=s.p.z-V.z*.5-W.z;
      for(let q=0;q<3;q++){sc[o+q*3]=s.c[0]*k;sc[o+q*3+1]=s.c[1]*k;sc[o+q*3+2]=s.c[2]*k}}
    if(any||smesh.userData.was){sgeo.getAttribute("position").needsUpdate=!0;sgeo.getAttribute("color").needsUpdate=!0}smesh.userData.was=any;return r}}
  const colOf=id=>[.16+.6*pcol.array[id*18],.26+.6*pcol.array[id*18+1],.5+.5*pcol.array[id*18+2]];   // splinters catch the light: the pane's colour, lifted toward the night's blue
  // a round met a pane and bounced: a spark of splinters, the ring of the glass, a crack where it hit
  g.glassFx=(id,at,n,broke,by)=>{if(broke)return;const c=colOf(id);for(let k=0;k<7;k++){V.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(3.2).addScaledVector(n,1.6+Math.random()*2);shard(at,V,.035+Math.random()*.05,c,.35+Math.random()*.4)}
    try{g.fx.particles.impact(at,n)}catch(e){}
    if(au.ctx){const o=au._out(pan(at),.35,vol(at));au._tone("sine",2300+Math.random()*500,4700+Math.random()*900,.16,.22,o);au._burst(.05,5200,3000,6,.5,o)}};
  G.onHit=(id,left,at)=>{const f=glFlat(G.corners(id)),b=f.b,q=[at.x-f.c0[0],at.y-f.c0[1],at.z-f.c0[2]];
    const u=q[0]*b[0]+q[1]*b[1]+q[2]*b[2]-f.u0,v=q[0]*b[3]+q[1]*b[4]+q[2]*b[5]-f.v0,sd=(id*.6180339)%1;for(let k=0;k<6;k++)phit.setXYZW(id*6+k,u,v,GLASS_RULES.HP-left,sd);phit.needsUpdate=!0};
  // the third round: the pane is gone. Splinters all over where it was, the sound of it, and whoever stood on it falls
  G.onBreak=(id,by,at)=>{const c=G.corners(id),col=colOf(id),A=c[0],B=c[1],C=c[3],D=c[2],tri=(p,q,r)=>.5*Math.hypot((q[1]-p[1])*(r[2]-p[2])-(q[2]-p[2])*(r[1]-p[1]),(q[2]-p[2])*(r[0]-p[0])-(q[0]-p[0])*(r[2]-p[2]),(q[0]-p[0])*(r[1]-p[1])-(q[1]-p[1])*(r[0]-p[0])),a1=tri(A,B,D),a2=tri(A,D,C),area=a1+a2,nn=Math.min(mobG(g)?70:170,Math.max(24,Math.round(area*1.6)));
    for(let k=0;k<6;k++)ppos.setXYZ(id*6+k,0,-9999,0);ppos.needsUpdate=!0;
    for(let k=0;k<nn;k++){let a=Math.random(),b=Math.random();a+b>1&&(a=1-a,b=1-b);const X=Math.random()*area<a1?B:C;P.set(A[0]+(X[0]-A[0])*a+(D[0]-A[0])*b,A[1]+(X[1]-A[1])*a+(D[1]-A[1])*b,A[2]+(X[2]-A[2])*a+(D[2]-A[2])*b);V.set(Math.random()-.5,Math.random()*.6,Math.random()-.5).multiplyScalar(2.4);shard(P,V,.06+Math.random()*.16,col,.9+Math.random()*1.1)}
    P.set((A[0]+c[2][0])/2,(A[1]+c[2][1])/2,(A[2]+c[2][2])/2);
    if(au.ctx){const o=au._out(pan(P),.5,Math.min(1,vol(P)*1.5));au._burst(.55,6500,1500,.9,.9,o);au._burst(.12,900,300,1.2,.5,o);for(let k=0;k<9;k++)au._tone("triangle",1800+Math.random()*4200,1500+Math.random()*2500,.07+Math.random()*.1,.09,o,.04+Math.random()*.6)}
    try{g.hud&&by&&by.isPlayer&&g.hud.banner("glass down",1.2,!0)}catch(e){}
    // bots stand where their roof says, not on the mesh: one whose floor has just gone drops to whatever is below, and it hurts
    for(const b of g.bots){if(!b.alive||b.link)continue;if(ar.groundY(b.pos.x,b.pos.z,b.pos.y+.7,1.5)!=null)continue;const h=ar.raycast(V.set(b.pos.x,b.pos.y+.5,b.pos.z),W.set(0,-1,0),90);if(!h)continue;
      const fall=b.pos.y-h.point.y,vy=Math.sqrt(2*22*Math.max(0,fall));b.pos.y=h.point.y;b.path.length=0;b.plan.length=0;b.state="scan";let rf=ar.roofAt(b.pos.x,b.pos.z,b.pos.y);
      if(rf<0||!ar.walk(ar.roofs[rf],b.pos.x,b.pos.z)){let bd=1e9;for(const r of ar.roofs){if(Math.abs(r.roofY-b.pos.y)>1.2||!r.cells.length)continue;const k=ar.nearestCell(r,b.pos.x,b.pos.z);if(k<0)continue;const q=ar.cellPos(r,k,P),d=Math.hypot(q.x-b.pos.x,q.z-b.pos.z);d<bd&&(bd=d,rf=r.i)}
        if(rf>=0){const r=ar.roofs[rf],q=ar.cellPos(r,ar.nearestCell(r,b.pos.x,b.pos.z),P);b.pos.set(q.x,r.roofY,q.z)}}
      rf>=0&&(b.roof=rf);vy>14.5&&g.damage(b,(vy-14.5)*8,by&&by!==b?by:null,{cause:"fall"})}};
  g.glass={pack:g.city.glass,rules:G,look:GLT};
}
