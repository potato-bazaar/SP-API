// The city: one merged mesh + one texture-array material for every building, prop and device,
// an instanced skyline, the sky dome, lights and the collision BVH.
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { GeoBuilder } from './geobuilder.js';
import { instMatrix, solidArrays } from './world.js';
import { GU, hook, FOG_FN } from './gfx.js';
import { decodeImage, grayBytes } from './assets.js';
import { ATLAS, SIGN_TEXT } from './atlas.js';

const CJK = '"Noto Sans HK","PingFang HK","PingFang TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC","Source Han Sans TC",sans-serif';
const DISPLAY = '"Barlow Condensed","Arial Narrow","Roboto Condensed","Helvetica Neue",Impact,sans-serif';

// paint the runtime "custom" layer: numbers, title sign, chevrons, arrows, vertical neon signs (white on black)
export function paintCustomLayer(size = 1024) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size; const c = cv.getContext('2d'); const S = size / 1024;
  c.fillStyle = '#000'; c.fillRect(0, 0, size, size); c.fillStyle = '#fff'; c.strokeStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle';
  for (let i = 0; i < 8; i++) { // spawn numbers
    const x = (i % 4) * 256 * S, y = ((i / 4) | 0) * 256 * S, w = 256 * S;
    c.lineWidth = 7 * S; c.strokeRect(x + 16 * S, y + 16 * S, w - 32 * S, w - 32 * S);
    c.font = `italic 800 ${190 * S}px ${DISPLAY}`; c.fillText('0' + (i + 1), x + w / 2 - 4 * S, y + w / 2 + 12 * S);
    c.fillRect(x + 30 * S, y + 222 * S, 60 * S, 8 * S);
  }
  { // title sign 512x256 at (0,512)
    const x = 0, y = 512 * S, w = 512 * S, h = 256 * S; c.lineWidth = 8 * S; c.strokeRect(x + 12 * S, y + 12 * S, w - 24 * S, h - 24 * S);
    c.font = `900 ${132 * S}px ${CJK}`; c.fillText('狙擊之城', x + w / 2, y + 108 * S);
    c.font = `italic 800 ${58 * S}px ${DISPLAY}`; c.fillText('S N I P E R   C I T Y', x + w / 2, y + 206 * S);
  }
  { // chevrons (launch pad) 256 at (512,512): point to tile top
    const x = 512 * S, y = 512 * S; c.lineWidth = 26 * S; c.lineJoin = 'miter';
    for (let k = 0; k < 3; k++) { const yy = y + (70 + k * 62) * S; c.beginPath(); c.moveTo(x + 46 * S, yy + 44 * S); c.lineTo(x + 128 * S, yy - 22 * S); c.lineTo(x + 210 * S, yy + 44 * S); c.stroke(); }
    c.lineWidth = 6 * S; c.strokeRect(x + 10 * S, y + 10 * S, 236 * S, 236 * S);
  }
  { // jump arrow 256 at (768,512): points to tile top
    const x = 768 * S, y = 512 * S; c.beginPath(); c.moveTo(x + 128 * S, y + 22 * S); c.lineTo(x + 216 * S, y + 120 * S); c.lineTo(x + 160 * S, y + 120 * S); c.lineTo(x + 160 * S, y + 232 * S); c.lineTo(x + 96 * S, y + 232 * S); c.lineTo(x + 96 * S, y + 120 * S); c.lineTo(x + 40 * S, y + 120 * S); c.closePath(); c.fill();
  }
  for (let i = 0; i < 8; i++) { // vertical neon signs 128x256
    const x = i * 128 * S, y = 768 * S; c.lineWidth = 5 * S; c.strokeRect(x + 10 * S, y + 8 * S, 108 * S, 240 * S);
    c.font = `900 ${88 * S}px ${CJK}`; const t = SIGN_TEXT[i]; c.fillText(t[0], x + 64 * S, y + 74 * S); c.fillText(t[1], x + 64 * S, y + 182 * S);
  }
  return cv;
}

export async function buildCityTexture(pack, kit, quality) {
  const size = quality.texSize; const names = kit.layers; const depth = names.length; const data = new Uint8Array(size * size * depth);
  for (let i = 0; i < depth; i++) {
    const it = pack.get(names[i]); if (!it) continue;
    const img = await decodeImage(it.blob); grayBytes(img, size, size, data, i * size * size); if (img.close) img.close();
  }
  const ci = names.indexOf('custom'); const cv = paintCustomLayer(size); grayBytes(cv, size, size, data, ci * size * size);
  const tex = new THREE.DataArrayTexture(data, size, size, depth);
  tex.format = THREE.RedFormat; tex.type = THREE.UnsignedByteType; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.generateMipmaps = true; tex.anisotropy = quality.aniso; tex.unpackAlignment = 1; tex.needsUpdate = true;
  tex.userData.repaint = () => { grayBytes(paintCustomLayer(size), size, size, data, ci * size * size); tex.needsUpdate = true; };
  return tex;
}

function cityMaterial(tex) {
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const fx = (shader) => {
    shader.uniforms.uCityTex = { value: tex };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aMat; varying vec2 vCUv; varying vec4 vMat;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvCUv = uv; vMat = aMat;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', /* glsl */`#include <common>
uniform highp sampler2DArray uCityTex; varying vec2 vCUv; varying vec4 vMat;
float scHash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }`)
      .replace('#include <map_fragment>', /* glsl */`
float scLayer = floor(vMat.x + 0.5), scM = floor(vMat.y + 0.5); int scFl = int(floor(vMat.z + 0.5)); float scX = floor(vMat.w + 0.5);
float scLum = 1.0, scMask = 0.0;
if (scLayer < 254.5) { scLum = pow(texture(uCityTex, vec3(vCUv, scLayer)).r, 2.2); if (scM < 254.5) scMask = texture(uCityTex, vec3(vCUv, scM)).r; }
else { scLum = pow(scM / 255.0, 2.2); }
bool scCustom = (scFl & 32) != 0;
if (scCustom && (scFl & 192) != 0 && scMask < 0.42) discard;
if (scCustom) scLum = 0.012;
if ((scFl & 64) != 0) { scLum = scX > 0.5 ? 0.55 : 0.0; diffuseColor.rgb = scX > 0.5 ? vec3(1.0) : uRedCol * 0.95; if (scX > 0.5) diffuseColor.rgb *= scLum; }
else diffuseColor.rgb *= scLum;
if ((scFl & 16) != 0) { // roofs: a little procedural grit so they hold up underfoot
  float gr = scHash(floor(vWp * 7.0)) * 0.5 + scHash(floor(vWp * 23.0)) * 0.5; diffuseColor.rgb *= 0.86 + 0.28 * gr;
}
`)
      .replace('#include <emissivemap_fragment>', /* glsl */`
{
  float ph = scX * 0.0246; vec3 em = vec3(0.0);
  if ((scFl & 2) != 0) { // red neon / beacons
    float amt = scCustom ? scMask : 1.0; float blink = 1.0;
    if (!scCustom && scLayer > 254.5) blink = scX < 0.5 ? 0.75 + 0.25 * sin(uTime * 5.0) : step(0.55, fract(uTime * 0.45 + ph));
    if (scCustom) blink = 0.82 + 0.18 * step(0.08, fract(uTime * 0.31 + sin(vWp.x) * 3.0)) * (0.9 + 0.1 * sin(uTime * 37.0));
    if (!scCustom && scLayer < 254.5) amt = smoothstep(0.02, 0.25, scLum);
    em += uRedCol * amt * blink * 1.6;
  }
  if ((scFl & 128) != 0) { float amt = scCustom ? scMask : 1.0; float pulse = scCustom ? 0.55 + 0.45 * abs(sin(uTime * 2.2 - vCUv.y * 9.0)) : 0.7 + 0.3 * sin(uTime * 3.0 + ph * 5.0); em += vec3(1.0) * amt * pulse * 1.1; }
  if ((scFl & 8) != 0) { // shop signs: the painted parts glow, some of them red
    float h = scHash(floor(vWp * vec3(0.31, 0.22, 0.31)));
    float flick = h > 0.86 ? step(0.25, fract(uTime * (0.7 + h) + h * 9.0)) * (0.7 + 0.3 * sin(uTime * 31.0)) : 0.9 + 0.1 * sin(uTime * 2.0 + h * 30.0);
    vec3 c = h > 0.55 ? uRedCol * 2.2 : vec3(0.62);
    em += c * scMask * (0.25 + scLum * 2.2) * flick;
  }
  if ((scFl & 1) != 0) { // windows: a few are lit, fewer are red
    vec3 cell = floor(vec3(vWp.x * 0.41, vWp.y * 0.295, vWp.z * 0.41)); float h = scHash(cell);
    float on = step(0.83, h); float tw = 0.85 + 0.15 * sin(uTime * 1.3 + h * 50.0);
    em += (h > 0.975 ? uRedCol * 1.6 : vec3(0.78)) * on * tw * (0.25 + 1.4 * scLum);
  }
  totalEmissiveRadiance += em;
}
`);
  };
  fx.key = 'city'; hook(mat, fx);
  return mat;
}

function toGeometry(a) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(a.position.slice(), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(a.normal.slice(), 4, true));
  g.setAttribute('uv', new THREE.BufferAttribute(a.uv.slice(), 2));
  g.setAttribute('aMat', new THREE.BufferAttribute(a.mat.slice(), 4, false));
  g.setIndex(new THREE.BufferAttribute(a.index.slice(), 1));
  g.computeBoundingSphere(); g.computeBoundingBox();
  return g;
}


// ---- skyline: instanced boxes with procedural windows
function buildSkyline(arena) {
  const n = arena.skyline.length; const geo = new THREE.BoxGeometry(1, 1, 1); geo.translate(0, 0.5, 0);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const fx = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nfloat skHash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.11, 0.37, 0.53)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }')
      .replace('#include <map_fragment>', /* glsl */`
vec3 skN = normalize(cross(dFdx(vWp), dFdy(vWp)));
float side = step(abs(skN.y), 0.5);
float along = abs(skN.z) > abs(skN.x) ? vWp.x : vWp.z;
vec2 wc = vec2(along / 2.6, vWp.y / 3.4); vec2 wf = fract(wc); vec3 cell = vec3(floor(wc), floor(dot(skN.xz, vec2(3.0, 7.0)) + 0.5) + floor((abs(skN.z) > abs(skN.x) ? vWp.z : vWp.x) / 9.0));
float h = skHash(cell); float win = step(0.2, wf.x) * step(wf.x, 0.8) * step(0.28, wf.y) * step(wf.y, 0.78);
float lit = step(0.80, h) * win * side;
vec3 body = vec3(0.016 + 0.02 * skHash(cell * 0.31)) * (0.6 + 0.4 * side);
vec3 glow = (h > 0.985 ? uRedCol * 1.5 : vec3(0.42 + 0.5 * skHash(cell + 3.1))) * lit * (0.8 + 0.2 * sin(uTime * 0.9 + h * 60.0));
diffuseColor.rgb = body + glow * smoothstep(9.0, 14.0, vWp.y);
`);
  };
  fx.key = 'sky'; hook(mat, fx); mat.defines = { SC_NO_WORLDFX: 1 };
  const mesh = new THREE.InstancedMesh(geo, mat, n); const m = new THREE.Matrix4();
  arena.skyline.forEach((s, i) => { m.compose(new THREE.Vector3(s[0], 0, s[1]), new THREE.Quaternion(), new THREE.Vector3(s[2], s[4], s[3])); mesh.setMatrixAt(i, m); });
  mesh.instanceMatrix.needsUpdate = true; mesh.frustumCulled = false; mesh.matrixAutoUpdate = false;
  return mesh;
}

function buildSky() {
  const geo = new THREE.SphereGeometry(700, 24, 12);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false,
    uniforms: { uFogLow: GU.uFogLow, uFogHigh: GU.uFogHigh, uFogDeep: GU.uFogDeep, uFogParams: GU.uFogParams, uTime: GU.uTime, uRedCol: GU.uRedCol, uAngel: { value: new THREE.Vector3(0, 60, 0) } },
    vertexShader: 'varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * 0.9999; }',
    fragmentShader: /* glsl */`
precision highp float; varying vec3 vDir; uniform float uTime; uniform vec3 uRedCol; uniform vec3 uAngel;
${FOG_FN}
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec3 dir = normalize(vDir);
  vec3 sky = mix(vec3(0.030), vec3(0.008), clamp(dir.y, 0.0, 1.0));
  // slow cloud deck lit from below
  vec2 cuv = dir.xz / max(dir.y + 0.18, 0.05); float cl = vnoise(cuv * 1.3 + uTime * 0.006) * 0.6 + vnoise(cuv * 3.1 - uTime * 0.01) * 0.4;
  sky += vec3(0.05) * smoothstep(0.42, 0.85, cl) * smoothstep(-0.05, 0.3, dir.y);
  // the pale disc the angel hangs in front of
  vec3 toA = normalize(uAngel - cameraPosition); float ad = max(dot(dir, toA), 0.0);
  sky += vec3(0.22) * pow(ad, 90.0) + vec3(0.06) * pow(ad, 9.0);
  float fa = scFogAmount(cameraPosition, dir, 1500.0);
  vec3 col = mix(sky, scFogColor(dir, 0.0), fa);
  gl_FragColor = vec4(col, 1.0);
}`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = -10; mesh.matrixAutoUpdate = true;
  return mesh;
}

export async function buildCity(gfx, assets, quality) {
  const { kit, pack, arena } = assets; const PS = kit.header.posScale, US = kit.header.uvScale;
  const tex = await buildCityTexture(pack, kit, quality);
  const mat = cityMaterial(tex);
  // solid world (collides)
  const m4 = new THREE.Matrix4();
  const solidGeo = toGeometry(solidArrays(kit, arena));
  const solid = new THREE.Mesh(solidGeo, mat); solid.castShadow = true; solid.receiveShadow = true; solid.matrixAutoUpdate = false; solid.frustumCulled = false;
  // decorative (no collision): thin stuff + backdrop towers
  const gd = new GeoBuilder(1 << 15, 1 << 17);
  for (const s of arena.deco) gd.shape(s);
  for (const b of arena.backdrop || []) gd.addKit(kit.types[b.type], instMatrix(b, m4).setPosition(b.x, b.y || 0, b.z).elements, PS, US);
  const deco = new THREE.Mesh(toGeometry(gd.arrays()), mat); deco.castShadow = true; deco.receiveShadow = true; deco.matrixAutoUpdate = false; deco.frustumCulled = false;
  const group = new THREE.Group(); group.add(solid, deco);
  const skyline = buildSkyline(arena); group.add(skyline);
  const sky = buildSky(); group.add(sky);
  // the fog sea needs a floor so the far plane never shows through
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600).rotateX(-Math.PI / 2), hook(new THREE.MeshBasicMaterial({ color: 0x050505 }))); floor.position.y = -0.2; floor.matrixAutoUpdate = false; floor.updateMatrix(); group.add(floor);
  // lights
  const hemi = new THREE.HemisphereLight(0x4c4e52, 0x9a9da2, 1.0); group.add(hemi);
  const moon = new THREE.DirectionalLight(0xffffff, 2.6); moon.position.set(-70, 150, -52); moon.target.position.set(0, 10, 0);
  moon.castShadow = true; moon.shadow.mapSize.set(quality.shadow, quality.shadow); const sc = moon.shadow.camera; sc.left = -112; sc.right = 112; sc.top = 112; sc.bottom = -112; sc.near = 20; sc.far = 320; sc.updateProjectionMatrix();
  moon.shadow.bias = -0.0005; moon.shadow.normalBias = 0.12; group.add(moon, moon.target);
  gfx.scene.add(group);
  // collision
  const colGeo = new THREE.BufferGeometry(); colGeo.setAttribute('position', solidGeo.getAttribute('position')); colGeo.setIndex(solidGeo.getIndex());
  const bvh = new MeshBVH(colGeo);
  return { group, solid, deco, skyline, sky, mat, tex, bvh, colGeo, moon, hemi, tris: (solidGeo.index.count + deco.geometry.index.count) / 3 };
}
