// The loop city for the renderer: the artist's model cut into facets, the hull and rims, the axle that lights it, the sky outside.
async function nL(r,t,e){
  const pack=t.kit,A=t.arena,R=pack.R,C=pack.C,H=C/2,ZM=A.zmax;
  RINGCHUNKS(R,C);
  const gb=new Ws(1<<12,1<<14);for(const s of A.shapes||[])gb.shape(s);const ex=gb.arrays(),hull=RK.hull(pack,ZM);
  const W=RK.buildWorld(pack,RK.join([{position:ex.position.subarray(0,gb.nv*3),index:ex.index.subarray(0,gb.ni)},hull]),!0);
  const grp=new ce,texs=new Map,red=Wt.uRedCol.value;
  const load=(f,srgb=!0,rep=!0)=>{if(!texs.has(f))texs.set(f,new Promise(res=>{const im=new Image;im.onload=()=>{const x=new Xe(im);x.colorSpace=srgb?Ne:"";x.wrapS=1e3;x.wrapT=rep?1e3:1001;x.anisotropy=e.aniso;x.flipY=!1;x.needsUpdate=!0;res(x)};im.onerror=()=>res(null);im.src=f}));return texs.get(f)};
  const geoOf=(pos,nrm,uv,idx)=>{const g=new se;g.setAttribute("position",new Ft(pos,3));nrm&&g.setAttribute("normal",new Ft(nrm,3));uv&&g.setAttribute("uv",new Ft(uv,2));g.setIndex(new Ft(idx,1));return g};
  let tris=0;
  for(const g of W.groups){
    const tex=g.tex?await load(g.tex):null,m=new Ye({color:new Tt(g.lum,g.lum,g.lum),map:tex,side:g.double?2:0,alphaTest:g.alpha?.42:0});
    if(g.glow>0){m.emissive=g.red?red.clone().multiplyScalar(2.4*g.glow):new Tt(1,1,1).multiplyScalar(1.2*g.glow);m.emissiveMap=tex;if(!tex)m.color.setScalar(.05)}
    if(g.alpha)m.color.setScalar(.5);
    Gi(m);const mesh=new Qt(geoOf(g.pos,g.nrm,g.uv,g.idx),m);mesh.matrixAutoUpdate=!1;mesh.name="loop:"+g.name;grp.add(mesh);tris+=g.idx.length/3;
    if(g.alpha&&r.isMobile)mesh.geometry.setDrawRange(0,Math.floor(g.idx.length/3*.5)*3);
  }
  { // hull: floor and rims (dark), the axle (the lamp of this world) and a line of light along each rim
    const g=geoOf(hull.position,null,null,hull.index);g.computeVertexNormals();const p=hull.parts;g.addGroup(0,p[0],0);g.addGroup(p[0],p[1]-p[0],1);g.addGroup(p[1],p[2]-p[1],2);
    const axle=new _e({color:new Tt(2.2,2.2,2.2),fog:!1});
    const mesh=new Qt(g,[Gi(new Ye({color:657930,side:2})),Gi(new Ye({color:1447446,side:2})),axle]);mesh.matrixAutoUpdate=!1;mesh.name="loop:hull";grp.add(mesh);
    const P=[],Ix=[],n=pack.slabs,s=C/n;for(let k=0;k<n;k++)for(const z of[-ZM+.03,ZM-.03]){const o=P.length/3,xa=-H+k*s,xb=xa+s;P.push(xa,1.26,z,xb,1.26,z,xb,1.36,z,xa,1.36,z);Ix.push(o,o+1,o+2,o,o+2,o+3)}
    const strip=new Qt(geoOf(new Float32Array(P),null,null,new Uint32Array(Ix)),new _e({color:new Tt(1.5,1.5,1.5),side:2,fog:!1}));strip.matrixAutoUpdate=!1;strip.name="loop:rimlight";grp.add(strip);
  }
  // sky: stars, the dark world the wheel turns above, a red sun. It follows the camera and turns with the wheel (see RING).
  const sky=new Qt(new as(700,32,16),new Ge({side:1,depthWrite:!1,fog:!1,uniforms:{uTime:Wt.uTime,uRedCol:Wt.uRedCol,uAngel:{value:new I(0,60,0)}},
    vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * 0.99995; }",
    fragmentShader:`precision highp float; varying vec3 vDir; uniform float uTime; uniform vec3 uRedCol;
float h3(vec3 p){ p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main(){
  vec3 d = normalize(vDir), col = vec3(0.0);
  for (int i = 0; i < 3; i++) { float fi = float(i); vec3 q = d * (70.0 + fi * 55.0), c = floor(q), f = fract(q) - 0.5; float h = h3(c + fi * 13.7), on = step(0.972 - fi * 0.012, h);
    col += vec3(on * smoothstep(0.26, 0.0, length(f)) * (0.25 + 0.75 * fract(h * 57.3)) * (0.9 + 0.1 * sin(uTime * (1.0 + h * 3.0) + h * 40.0))); }
  col += vec3(0.010) * smoothstep(0.5, 0.0, abs(dot(d, normalize(vec3(0.5, 0.62, 0.6)))));
  vec3 P = normalize(vec3(0.16, -0.30, -0.94)); float pd = dot(d, P), cr = 0.80, disc = smoothstep(cr - 0.004, cr + 0.004, pd);
  vec3 S = normalize(vec3(-0.55, 0.72, 0.42)); float lit = max(0.0, dot(normalize(d - P * pd), normalize(S - P * dot(S, P))));
  col = mix(col, vec3(0.0035), disc);
  col += vec3(0.85, 0.9, 1.0) * disc * smoothstep(cr + 0.035, cr, pd) * pow(lit, 1.6) * 0.9;
  col += vec3(0.5, 0.55, 0.62) * (1.0 - disc) * smoothstep(cr - 0.03, cr, pd) * pow(lit, 2.0) * 0.22;
  float sd = dot(d, S); col += vec3(1.0, 0.92, 0.85) * smoothstep(0.99955, 0.9998, sd) * 2.0 + uRedCol * (pow(max(sd, 0.0), 180.0) * 1.3 + pow(max(sd, 0.0), 14.0) * 0.10);
  gl_FragColor = vec4(col, 1.0);
}`}));
  sky.renderOrder=-50;sky.name="loop:sky";grp.add(sky);
  const hemi=new wr(10132898,2434345,1.25);grp.add(hemi);
  const moon=new fs(16777215,2.1);moon.position.set(22,120,34);moon.target.position.set(0,0,0);grp.add(moon,moon.target);
  const shade=await load("loop_shade.jpg",!1,!1);if(shade){shade.minFilter=1008;shade.magFilter=1006}
  r.scene.add(grp);
  return{group:grp,solid:null,deco:null,skyline:{count:0,getMatrixAt(){}},sky:sky,mat:null,tex:{userData:{repaint(){}}},bvh:W.chartBvh,colGeo:null,moon:moon,hemi:hemi,tris:tris,ring:W,shade:shade,zmax:ZM};
}
function RINGA(ar,city){if(city&&city.ring){RK.ringify(ar,city.ring);ar.zmax=city.zmax}return ar}
