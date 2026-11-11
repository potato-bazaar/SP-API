// The collision world, built the same way in the browser and on the game server:
// every building kit placed by the arena data plus the arena's procedural shapes (parapets, props, devices).
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { GeoBuilder } from './geobuilder.js';

export function instMatrix(r, m = new THREE.Matrix4()) { return m.compose(new THREE.Vector3(r.x, 0, r.z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r.rot * Math.PI / 2), new THREE.Vector3(1, r.sy, 1)); }

export function solidArrays(kit, arena) {
  const PS = kit.header.posScale, US = kit.header.uvScale; const gb = new GeoBuilder(1 << 19, 1 << 21); const m4 = new THREE.Matrix4();
  for (const r of arena.roofs) gb.addKit(kit.types[r.type], instMatrix(r, m4).elements, PS, US);
  for (const s of arena.shapes) gb.shape(s);
  return gb.arrays();
}

export function collisionBVH(arrays) {
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(arrays.position.slice(), 3)); g.setIndex(new THREE.BufferAttribute(arrays.index.slice(), 1));
  return new MeshBVH(g);
}

// simple hit capsules [ax,ay,az,bx,by,bz,r,zone] (zone 0 head, 1 body, 2 limbs): what the server tests shots against
export function simpleHitShapes(out, p, crouchK, eyeStand = 1.6, eyeCrouch = 1.0) {
  const e = eyeStand + (eyeCrouch - eyeStand) * crouchK; out.length = 0;
  out.push(p.x, p.y + e + 0.02, p.z, p.x, p.y + e + 0.02, p.z, 0.125, 0, p.x, p.y + e * 0.5, p.z, p.x, p.y + e * 0.84, p.z, 0.2, 1, p.x, p.y + 0.14, p.z, p.x, p.y + e * 0.48, p.z, 0.15, 2);
  return out;
}
