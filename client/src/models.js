// Loads the slim GLBs from models.bin and builds the monochrome materials for characters, weapons and the angel.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { hook, GU, RED } from './gfx.js';
import { texFromPack } from './assets.js';

export async function loadModels(buf, pack) {
  const u8 = new Uint8Array(buf); const dv = new DataView(buf); if (String.fromCharCode(u8[0], u8[1], u8[2], u8[3]) !== 'SCMD') throw new Error('bad model pack');
  const hlen = dv.getUint32(4, true); const index = JSON.parse(new TextDecoder().decode(u8.subarray(8, 8 + hlen))); const base = 8 + hlen; const loader = new GLTFLoader();
  const parse = (k) => new Promise((res, rej) => loader.parse(buf.slice(base + index[k].off, base + index[k].off + index[k].len), '', res, rej));
  const [weapons, cop, angel] = await Promise.all([parse('weapons'), parse('cop'), parse('angel')]);
  const mats = await buildMaterials(pack);
  // --- cop
  cop.scene.traverse(o => { if (o.isSkinnedMesh) { o.material = mats.cop; o.castShadow = false; o.receiveShadow = false; } });
  // --- weapons
  // quantised meshes carry their de-quantisation transform on the node, so every part gets a neutral wrapper to animate
  const W = {}; for (const c of [...weapons.scene.children]) { const g = new THREE.Group(); g.name = c.name; g.add(c); W[c.name] = g; }
  const texCache = {};
  for (const key of ['rifle_fp', 'pistol']) W[key].traverse(o => { if (!o.isMesh) return; const src = o.material; const tn = src.userData && src.userData.tex; o.material = mats.weapon(tn, src.name); o.frustumCulled = false; });
  W.rifle_tp.traverse(o => { if (o.isMesh) { o.material = mats.rifleTp; o.frustumCulled = false; } });
  await Promise.all(mats._pending);
  return { cop: cop.scene, weapons: W, angel: { scene: angel.scene, clips: angel.animations }, mats };
}

// fresnel rim so black figures keep an edge against a dark city
const rimFx = (strength) => { const f = (shader) => { shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', `{ float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.6); outgoingLight += vec3(${strength.toFixed(3)}) * fr; }\n#include <opaque_fragment>`); }; f.key = 'rim' + strength; return f; };

async function buildMaterials(pack) {
  const pending = [];
  // snipers: dark figures with a pale rim; through a scope the living read warm (a dull red core)
  const copFx = (shader) => { shader.fragmentShader = 'uniform float uScope;\n' + shader.fragmentShader.replace('#include <opaque_fragment>', `{ float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.2); outgoingLight += vec3(0.46) * fr;
      float core = 1.0 - fr; outgoingLight = mix(outgoingLight, outgoingLight * 0.22 + uRedCol * (0.12 + 0.46 * core * core), uScope); }\n#include <opaque_fragment>`); }; copFx.key = 'cop2';
  const cop = new THREE.MeshLambertMaterial({ color: 0x8e8e8e, emissive: RED.clone(), emissiveIntensity: 2.6 }); hook(cop, copFx);
  pending.push(texFromPack(pack, 'cop_base').then(t => { cop.map = t; cop.needsUpdate = true; }), texFromPack(pack, 'cop_emis').then(t => { cop.emissiveMap = t; cop.needsUpdate = true; }));
  const wcache = new Map();
  const weapon = (texName, matName) => {
    const key = texName || matName; if (wcache.has(key)) return wcache.get(key);
    const m = new THREE.MeshLambertMaterial({ color: /lens/.test(matName) ? 0x050505 : 0x6e6e6e }); hook(m, rimFx(0.12)); m.name = matName; wcache.set(key, m);
    if (texName) pending.push(texFromPack(pack, texName, { repeat: true }).then(t => { if (t) { m.map = t; m.needsUpdate = true; } }));
    return m;
  };
  const rifleTp = new THREE.MeshLambertMaterial({ color: 0x0b0b0b }); hook(rifleTp, rimFx(0.14));
  const angelBody = new THREE.MeshLambertMaterial({ color: 0xe2e2e2, emissive: 0x242424 }); hook(angelBody, rimFx(0.32)); const angelArm = new THREE.MeshLambertMaterial({ color: 0xe8e8e8, emissive: 0x242424 }); hook(angelArm, rimFx(0.32));
  pending.push(texFromPack(pack, 'angel_body').then(t => { angelBody.map = t; angelBody.needsUpdate = true; }), texFromPack(pack, 'angel_arm').then(t => { angelArm.map = t; angelArm.needsUpdate = true; }));
  const halo = hook(new THREE.MeshBasicMaterial({ color: RED.clone().multiplyScalar(1.6) }));
  return { cop, weapon, rifleTp, angelBody, angelArm, halo, _pending: pending };
}
