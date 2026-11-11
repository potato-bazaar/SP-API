// Renderer, shared "world FX" uniforms (height fog, zone ring, angel pulse) injected into every material
// through three's fog shader chunks, and the single post pass that enforces the black / white / dark-red palette.
import * as THREE from 'three';

export const RED = new THREE.Color('#B51224');        // blood red (accent)
export const RED_DEEP = new THREE.Color('#5e0a13');   // deep red
export const lin = (hex) => new THREE.Color(hex);     // THREE.Color converts sRGB hex -> linear working space

// ---- global uniforms shared by all hooked materials
export const GU = {
  uTime: { value: 0 },
  uFogLow: { value: lin('#8a8c8f') },      // fog sea / horizon haze
  uFogHigh: { value: lin('#2a2b2d') },     // high haze
  uFogDeep: { value: lin('#141516') },     // down in the streets
  uFogParams: { value: new THREE.Vector4(0.17, 6.0, 4.6, 0.0042) }, // heightDensity, baseY, falloffH, distDensity
  uZone: { value: new THREE.Vector4(0, 0, 0, 0) },   // cx, cz, radius, active
  uPulse: { value: new THREE.Vector4(0, 60, 0, 0) }, // unused.x, originY, radius, strength
  uRedCol: { value: RED.clone() },
  uReveal: { value: 0 },
  uScope: { value: 0 },                              // 0..1 while the player looks through the scope
};

// GLSL shared by materials + sky: analytic height fog
export const FOG_FN = /* glsl */`
uniform vec3 uFogLow; uniform vec3 uFogHigh; uniform vec3 uFogDeep; uniform vec4 uFogParams;
float scFogAmount(vec3 cam, vec3 dir, float dist) {
  float k = uFogParams.x, y0 = uFogParams.y, H = uFogParams.z;
  float dy = dir.y; float base = k * exp(-(cam.y - y0) / H);
  float a = dy * dist / H; float integ = abs(a) < 0.0005 ? dist : dist * (1.0 - exp(-a)) / a;
  float od = base * integ + uFogParams.w * dist;
  return 1.0 - exp(-od);
}
vec3 scFogColor(vec3 dir, float y) {
  // pale toward the horizon, dark overhead, and darker again looking down into the streets
  float t = clamp(dir.y * 2.4 + 0.22, 0.0, 1.0);
  vec3 c = mix(uFogLow, uFogHigh, t * t * (3.0 - 2.0 * t));
  float d = clamp(-dir.y * 1.9 - 0.12, 0.0, 1.0);
  return mix(c, uFogDeep, d * d * (3.0 - 2.0 * d));
}
`;

let hooked = false;
export function installWorldFX() {
  if (hooked) return; hooked = true;
  THREE.ShaderChunk.fog_pars_vertex = /* glsl */`
#ifdef USE_FOG
  varying vec3 vWp;
#endif`;
  THREE.ShaderChunk.fog_vertex = /* glsl */`
#ifdef USE_FOG
  vWp = transpose(mat3(viewMatrix)) * mvPosition.xyz + cameraPosition;
#endif`;
  THREE.ShaderChunk.fog_pars_fragment = /* glsl */`
#ifdef USE_FOG
  varying vec3 vWp;
  uniform vec3 fogColor; uniform float fogNear; uniform float fogFar;
  uniform float uTime; uniform vec4 uZone; uniform vec4 uPulse; uniform vec3 uRedCol;
  ${FOG_FN}
#endif`;
  THREE.ShaderChunk.fog_fragment = /* glsl */`
#ifdef USE_FOG
  {
    vec3 toP = vWp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4);
    #ifndef SC_NO_WORLDFX
    if (uZone.w > 0.5) {
      float zd = length(vWp.xz - uZone.xy) - uZone.z;
      float w = max(0.07, dist * 0.0032);
      float line = 1.0 - smoothstep(0.0, w, abs(zd));
      float outside = smoothstep(0.0, 0.6, zd);
      float hatch = step(0.5, fract((vWp.x + vWp.z + vWp.y * 1.7) * 0.45 - uTime * 0.25));
      vec3 dead = gl_FragColor.rgb * mix(vec3(0.34), vec3(0.62, 0.20, 0.20), 0.45) + uRedCol * (0.035 + 0.05 * hatch);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, dead, outside * 0.85);
      gl_FragColor.rgb += uRedCol * line * 2.4;
      // faint second ring: one metre inside, like a halo's inner edge
      gl_FragColor.rgb += uRedCol * (1.0 - smoothstep(0.0, w * 0.6, abs(zd + 0.9))) * 0.5;
    }
    if (uPulse.w > 0.001) {
      float pd = length(vWp - vec3(uZone.x, uPulse.y, uZone.y)) - uPulse.z;
      float band = (1.0 - smoothstep(0.0, 1.1, abs(pd)));
      float trail = smoothstep(-26.0, 0.0, pd) * step(pd, 0.0);
      float grid = step(0.93, fract(vWp.y * 0.8)) + step(0.96, fract((vWp.x + vWp.z) * 0.35));
      gl_FragColor.rgb += (vec3(0.9) * band + vec3(0.16) * trail * trail * grid) * uPulse.w;
    }
    #endif
    float fa = scFogAmount(cameraPosition, dir, dist);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, scFogColor(dir, vWp.y), fa);
  }
#endif`;
}

// attach the shared uniforms to a material (must be called for every material in the scene)
export function hook(mat, extra) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    for (const k in GU) shader.uniforms[k] = GU[k];
    if (extra) extra(shader);
    if (prev) prev.call(mat, shader, renderer);
  };
  if (extra) { const key = extra.toString().length + ':' + (extra.key || extra.name || 'x'); mat.customProgramCacheKey = () => key; }
  return mat;
}

// ---- post pass
const POST_FRAG = /* glsl */`
precision highp float;
uniform sampler2D tScene; uniform vec2 uRes; uniform float uTime;
uniform float uGrain, uVignette, uDamage, uLowHP, uGlitch, uFlash, uInk, uScoped, uFade, uZoneOut, uKick, uExposure;
uniform vec3 uRedCol;
varying vec2 vUv;
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 uv = vUv;
  // zone glitch: horizontal tearing bands
  if (uGlitch > 0.001) {
    float band = floor(uv.y * 42.0 + uTime * 9.0); float n = hash(vec2(band, floor(uTime * 14.0)));
    uv.x += (n - 0.5) * 0.045 * uGlitch * step(0.72, n);
  }
  vec2 c = uv - 0.5;
  // recoil / hit kick: tiny radial smear
  uv += c * uKick * 0.03;
  vec3 col = texture2D(tScene, uv).rgb;
  // red ghost on damage (the red channel slides sideways)
  float ghost = uDamage * 0.012 + uGlitch * 0.004;
  if (ghost > 0.0001) { vec3 g1 = texture2D(tScene, uv + vec2(ghost, 0.0)).rgb; col.r = max(col.r, g1.r); }
  // split into luminance + red excess: the only two things this world is made of
  float red = max(col.r - max(col.g, col.b), 0.0);
  float lum = dot(col - vec3(red, 0.0, 0.0), vec3(0.2126, 0.7152, 0.0722));
  // filmic curve + contrast
  float x = lum * uExposure; lum = x / (1.0 + x) * 1.72;
  lum = mix(lum, smoothstep(0.0, 1.0, lum), 0.62);
  // ink: bleeding out collapses mid-tones
  if (uInk > 0.001) { float q = floor(lum * 3.0 + 0.5 + (hash(uv * uRes * 0.5) - 0.5) * 0.9) / 3.0; lum = mix(lum, q, uInk); }
  float g = hash(uv * uRes + fract(uTime) * 61.0) - 0.5;
  lum += g * uGrain * (0.35 + 0.65 * smoothstep(0.0, 0.5, lum) * (1.0 - lum));
  float r2 = dot(c, c);
  float vig = 1.0 - smoothstep(0.16, 0.86, r2 * (1.0 + uVignette));
  lum *= mix(1.0, vig, 0.82);
  // red replaces grey rather than adding to it, so it can never drift to pink or brighter than the accent
  float ra = clamp(red * 3.0, 0.0, 1.0);
  vec3 outc = mix(vec3(max(lum, 0.0)), uRedCol * (0.82 + 0.3 * ra), ra);
  // pulse of blood at the frame edge: damage + low health heartbeat + outside the halo
  float beat = pow(0.5 + 0.5 * sin(uTime * 7.4), 6.0);
  float edge = smoothstep(0.10, 0.62, r2);
  float bleed = clamp(uDamage * 1.1 + uLowHP * (0.26 + 0.34 * beat) + uZoneOut * (0.20 + 0.10 * sin(uTime * 13.0)), 0.0, 1.0);
  outc = mix(outc, uRedCol * (0.55 + 0.45 * lum), edge * bleed);
  outc += vec3(uFlash);
  outc *= uFade;
  gl_FragColor = vec4(outc, 1.0);
  #include <colorspace_fragment>
}`;

export class Gfx {
  constructor(canvas) {
    this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', alpha: false, stencil: false, depth: false });
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap; r.shadowMap.autoUpdate = false;
    r.info.autoReset = false;
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.userAgent));
    this.scale = 1; this.maxDpr = this.isMobile ? 1.5 : 1.75; this.samples = this.isMobile ? 2 : 4;
    this.scene = new THREE.Scene(); this.scene.fog = new THREE.Fog(0x808080, 1, 1000);
    this.camera = new THREE.PerspectiveCamera(72, 1, 0.08, 900);
    this.fpScene = new THREE.Scene(); this.fpCamera = new THREE.PerspectiveCamera(52, 1, 0.02, 20); // first-person weapon layer
    this.post = {
      tScene: { value: null }, uRes: { value: new THREE.Vector2(1, 1) }, uTime: GU.uTime, uRedCol: { value: RED.clone() },
      uGrain: { value: 0.07 }, uExposure: { value: 1.25 }, uVignette: { value: 0 }, uDamage: { value: 0 }, uLowHP: { value: 0 }, uGlitch: { value: 0 }, uFlash: { value: 0 }, uInk: { value: 0 },
      uScoped: { value: 0 }, uFade: { value: 1 }, uZoneOut: { value: 0 }, uKick: { value: 0 },
    };
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)); geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
    this.postMat = new THREE.ShaderMaterial({ uniforms: this.post, vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }', fragmentShader: POST_FRAG, depthTest: false, depthWrite: false });
    this.postMesh = new THREE.Mesh(geo, this.postMat); this.postMesh.frustumCulled = false; this.postScene = new THREE.Scene(); this.postScene.add(this.postMesh);
    this.postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.rt = null; this.resize();
  }
  resize() {
    const w = Math.max(2, this.canvas.clientWidth | 0), h = Math.max(2, this.canvas.clientHeight | 0);
    const dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr) * this.scale;
    const pw = Math.max(2, Math.round(w * dpr)), ph = Math.max(2, Math.round(h * dpr));
    if (this.pw === pw && this.ph === ph) return; this.pw = pw; this.ph = ph; this.w = w; this.h = h;
    this.renderer.setPixelRatio(1); this.renderer.setSize(pw, ph, false);
    if (this.rt) this.rt.dispose();
    this.rt = new THREE.WebGLRenderTarget(pw, ph, { samples: this.samples, depthBuffer: true, stencilBuffer: false, type: THREE.UnsignedByteType, colorSpace: THREE.SRGBColorSpace });
    this.rt.texture.minFilter = THREE.LinearFilter; this.rt.texture.magFilter = THREE.LinearFilter; this.rt.texture.generateMipmaps = false;
    this.post.tScene.value = this.rt.texture; this.post.uRes.value.set(pw, ph);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); this.fpCamera.aspect = w / h; this.fpCamera.updateProjectionMatrix();
  }
  render(drawFp = true) {
    const r = this.renderer; r.info.reset();
    r.setRenderTarget(this.rt); r.autoClear = true; r.render(this.scene, this.camera);
    if (drawFp && this.fpScene.children.length) { r.autoClear = false; r.clearDepth(); r.render(this.fpScene, this.fpCamera); r.autoClear = true; }
    r.setRenderTarget(null); r.render(this.postScene, this.postCam);
  }
}
