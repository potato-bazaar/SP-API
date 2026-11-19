/* ---------- rain you can see: each drop is a short streak, heavy at the bottom and drawn out to nothing above it, a quad
   that turns to face you. The drops live in a box that travels with the camera and are moved on the graphics card.
   (The rings they make in the puddles are in the last pass: see patch_game.py.) Both maps: it rains on the ring now. ---------- */
function RRAIN(g){
  const S=g.gfx.scene,SM=g.gfx.postMat&&g.gfx.postMat.constructor,U=g.gfx.post;if(!SM||!U||!U.uTime)return;
  const N=g.gfx.isMobile?650:1500,pos=new Float32Array(N*12),cor=new Float32Array(N*8),idx=new Uint32Array(N*6),C=[-1,0,1,0,1,1,-1,1];
  for(let i=0;i<N;i++){const x=Math.random()*40,y=Math.random()*30,z=Math.random()*40;for(let k=0;k<4;k++){pos.set([x,y,z],i*12+k*3);cor[i*8+k*2]=C[k*2];cor[i*8+k*2+1]=C[k*2+1]}idx.set([i*4,i*4+1,i*4+2,i*4,i*4+2,i*4+3],i*6)}
  const geo=new se;geo.setAttribute("position",new Ft(pos,3));geo.setAttribute("aC",new Ft(cor,2));geo.setIndex(new Ft(idx,1));
  const mat=new SM({uniforms:{uTime:U.uTime,uAmt:{value:1}},transparent:!0,depthWrite:!1,side:2,
    vertexShader:`attribute vec2 aC; uniform float uTime; varying vec2 vC; varying float vA;
void main() { vec3 box = vec3(40.0, 30.0, 40.0); float h = fract(position.x * 7.31 + position.z * 3.17); float sp = 17.0 + h * 9.0; vec3 p = position; p.y -= uTime * sp; p.x += uTime * 1.6;
  p = mod(p - cameraPosition + box * 0.5, box) - box * 0.5 + cameraPosition; float len = 0.5 + h * 0.6; p.y += aC.y * len; p.x += aC.y * len * 0.06;
  vec4 mv = viewMatrix * vec4(p, 1.0); mv.x += aC.x * (0.011 + 0.010 * h); gl_Position = projectionMatrix * mv; vC = aC; vA = smoothstep(27.0, 7.0, -mv.z) * smoothstep(0.25, 1.6, -mv.z); }`,
    fragmentShader:`precision highp float; uniform float uAmt; varying vec2 vC; varying float vA;
void main() { float w = mix(1.0, 0.12, vC.y); float a = 1.0 - smoothstep(w * 0.5, w, abs(vC.x)); a *= smoothstep(0.0, 0.07, vC.y) * (1.0 - smoothstep(0.7, 1.0, vC.y)); gl_FragColor = vec4(vec3(0.74), a * vA * 0.46 * uAmt); }`});
  const m=new Qt(geo,mat);m.frustumCulled=!1;m.renderOrder=18;m.name="rain";S.add(m);
  const old=g.fx.rain;m.visible=SCLOOP?!0:!old||old.visible!==!1;old&&old.isObject3D&&S.remove(old);g.fx.rain=m;   // the RAIN switch now turns these on and off
}
