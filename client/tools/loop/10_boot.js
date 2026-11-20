/* ---------- RING: LOOP CITY, a city bent into a wheel. The idea is written up in client/src/ring.js (pasted above, same code the server runs). ---------- */
var SCLOOP=!1,RK=null,RAR=null,RQ=new I,RYO=new I,RYD=new I;
function ZD(Z,x,z,r){return zoneD(Z,x,z,r)}
// how far apart two places are: on the ring the straight line through the wheel (so nothing counts the seam), on the city map the plain distance
function RDL(a,b){return RAR?RAR.dist(a,b):a.distanceTo(b)}
function RINGBOOT(){
  flatArena(au.prototype);
  zt.sc_roll="vec3 scRoll(vec3 p){ return p; }";
  let m=null;try{m=new URLSearchParams(location.search).get("map")||localStorage.getItem("sc.world")}catch(e){}
  window.SCMAP=m==="loop"?"loop":m==="glass"?"glass":"city";
  if(m==="glass"){SCGLASS=!0;sc.city="glass.txt";sc.arena="arena-glass.json";lg["glass.txt"]=485e4;lg["arena-glass.json"]=35e4;return}   // GLASS CITY (22_glass.js): flat, like the city map
  if(m!=="loop")return;
  SCLOOP=!0;sc.city="loop.txt";sc.arena="arena-loop.json";lg["loop.txt"]=557e4;lg["arena-loop.json"]=7e5;
  RK=ringKit({Vector3:I,Ray:yn,DoubleSide:Te,MeshBVH:Zo,BufferGeometry:se,BufferAttribute:Ft});
  // nothing is culled by the camera frustum: on the chart the far side of the wheel is "ahead on the ground", in the picture it is overhead
  Object.defineProperty(Object.getPrototypeOf(ce.prototype),"frustumCulled",{get(){return!1},set(v){},configurable:!0});
}
// Drawing: every vertex is bent round the ring in the vertex shader, about the camera's own place on the ring.
// A mesh whose origin is the world origin holds chart-space vertices (the city, decals, cables): each vertex is bent on its own.
// Anything else (people, guns, crates) is carried rigidly to where its origin lands, so it keeps its shape.
function RINGCHUNKS(R,C){
  const f=v=>{const s=String(+(+v).toFixed(5));return s.indexOf(".")<0?s+".0":s},SR=f(R),SC=f(C);
  zt.common+="\n#define SC_R "+SR+"\n#define SC_C "+SC+"\nvec3 scChart = vec3(1.0e9);\n";
  zt.sc_roll="vec3 scRoll(vec3 p){ float a = (p.x - cameraPosition.x) / "+SR+", r = "+SR+" - p.y; return vec3(cameraPosition.x + r * sin(a), "+SR+" - r * cos(a), p.z); }";
  zt.project_vertex=`
vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
#ifdef SC_FLAT
mvPosition = modelViewMatrix * mvPosition;
#else
{
	vec4 scW = modelMatrix * mvPosition;
	vec3 scA = modelMatrix[3].xyz;
	#ifdef USE_INSTANCING
	scA = ( modelMatrix * instanceMatrix[3] ).xyz;
	#endif
	if ( dot( scA, scA ) < 1.0e-9 ) scA = scW.xyz;
	scChart = scW.xyz;
	float sca = ( scA.x - cameraPosition.x ) / SC_R, scr = SC_R - scA.y, scs = sin( sca ), scc = cos( sca );
	vec3 scd = scW.xyz - scA;
	scW.xyz = vec3( cameraPosition.x + scr * scs + scd.x * scc - scd.y * scs, SC_R - scr * scc + scd.x * scs + scd.y * scc, scW.z );
	mvPosition = viewMatrix * scW;
}
#endif
gl_Position = projectionMatrix * mvPosition;`;
  Un.sprite.vertexShader=Un.sprite.vertexShader.replace("vec4 mvPosition = modelViewMatrix[ 3 ];","vec3 scc = modelMatrix[ 3 ].xyz; float sca = ( scc.x - cameraPosition.x ) / SC_R, scr = SC_R - scc.y; vec4 mvPosition = viewMatrix * vec4( cameraPosition.x + scr * sin( sca ), SC_R - scr * cos( sca ), scc.z, 1.0 );");
  // vWp stays the chart position (ground patterns, the halo line, the light map); vRp is where the fragment really is, for fog
  zt.fog_pars_vertex=`
#ifdef USE_FOG
  varying vec3 vWp; varying vec3 vRp;
#endif`;
  zt.fog_vertex=`
#ifdef USE_FOG
  vRp = transpose(mat3(viewMatrix)) * mvPosition.xyz + cameraPosition;
  if (scChart.x > 1.0e8) { float scx = vRp.x - cameraPosition.x, scy = SC_R - vRp.y; scChart = vec3(cameraPosition.x + SC_R * atan(scx, scy), SC_R - length(vec2(scx, scy)), vRp.z); }
  vWp = scChart;
#endif`;
  zt.fog_pars_fragment=zt.fog_pars_fragment.replace("varying vec3 vWp;","varying vec3 vWp; varying vec3 vRp;").replace("#endif",`
  float scZoneD(vec3 p) { float dx = p.x - uZone.x; dx -= SC_C * floor(dx / SC_C + 0.5); return length(vec2(max(abs(dx) - uPulse.x, 0.0), p.z - uZone.y)) - uZone.z; }
  float scRingD(vec3 a, vec3 b) { float ra = SC_R - a.y, rb = SC_R - b.y, dz = b.z - a.z; return sqrt(max(0.0, ra * ra + rb * rb - 2.0 * ra * rb * cos((b.x - a.x) / SC_R) + dz * dz)); }
#endif`);
  zt.fog_fragment=`
#ifdef USE_FOG
  {
    vec3 toP = vRp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4);
    #ifndef SC_NO_WORLDFX
    gl_FragColor.rgb *= texture2D(uLampMap, (vWp.xz - uLampBox.xy) * uLampBox.zw).r * 1.6;
    if (uZone.w > 0.5) {
      float zd = scZoneD(vWp);
      float w = max(0.07, dist * 0.0032);
      float line = 1.0 - smoothstep(0.0, w, abs(zd));
      float outside = smoothstep(0.0, 0.6, zd);
      float hatch = step(0.5, fract((vWp.x + vWp.z + vWp.y * 1.7) * 0.45 - uTime * 0.25));
      vec3 dead = gl_FragColor.rgb * mix(vec3(0.34), vec3(0.62, 0.20, 0.20), 0.45) + uRedCol * (0.035 + 0.05 * hatch);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, dead, outside * 0.85);
      gl_FragColor.rgb += uRedCol * line * 2.4;
      gl_FragColor.rgb += uRedCol * (1.0 - smoothstep(0.0, w * 0.6, abs(zd + 0.9))) * 0.5;
    }
    if (uPulse.w > 0.001) {
      float pd = scRingD(vWp, vec3(uZone.x, uPulse.y, uZone.y)) - uPulse.z;
      float band = (1.0 - smoothstep(0.0, 1.1, abs(pd)));
      float trail = smoothstep(-26.0, 0.0, pd) * step(pd, 0.0);
      float grid = step(0.93, fract(vWp.y * 0.8)) + step(0.96, fract((vWp.x + vWp.z) * 0.35));
      gl_FragColor.rgb += (vec3(0.9) * band + vec3(0.16) * trail * trail * grid) * uPulse.w;
    }
    #endif
    float fa = scFogAmount(cameraPosition, dir, dist);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, scFogColor(dir, vWp.y), fa);
    #ifdef SC_SKYGLOW
    gl_FragColor.rgb += skGlowOut * fa * 0.4;
    #endif
  }
#endif`;
}
