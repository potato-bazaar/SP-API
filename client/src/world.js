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

// a lean (Q/E) shifts the head fully, the chest most of the way and the hips a little toward the lean side (yaw: facing, off: metres)
export function leanShapes(out, yaw, off) {
  if (!off) return out; const dx = Math.cos(yaw) * off, dz = -Math.sin(yaw) * off;
  out[0] += dx; out[2] += dz; out[3] += dx; out[5] += dz; out[11] += dx * 0.8; out[13] += dz * 0.8; out[8] += dx * 0.25; out[10] += dz * 0.25; return out;
}
// playing dead: the body lies flat along the facing, head forward
export function lyingShapes(out, p, yaw) {
  const fx = -Math.sin(yaw), fz = -Math.cos(yaw); out.length = 0;
  out.push(p.x + fx * 0.75, p.y + 0.2, p.z + fz * 0.75, p.x + fx * 0.75, p.y + 0.2, p.z + fz * 0.75, 0.13, 0,
    p.x - fx * 0.1, p.y + 0.2, p.z - fz * 0.1, p.x + fx * 0.5, p.y + 0.2, p.z + fz * 0.5, 0.2, 1,
    p.x - fx * 0.85, p.y + 0.14, p.z - fz * 0.85, p.x - fx * 0.2, p.y + 0.16, p.z - fz * 0.2, 0.14, 2);
  return out;
}
// simple hit capsules [ax,ay,az,bx,by,bz,r,zone] (zone 0 head, 1 body, 2 limbs): what the server tests shots against
export function simpleHitShapes(out, p, crouchK, eyeStand = 1.6, eyeCrouch = 1.0) {
  const e = eyeStand + (eyeCrouch - eyeStand) * crouchK; out.length = 0;
  out.push(p.x, p.y + e + 0.02, p.z, p.x, p.y + e + 0.02, p.z, 0.125, 0, p.x, p.y + e * 0.5, p.z, p.x, p.y + e * 0.84, p.z, 0.2, 1, p.x, p.y + 0.14, p.z, p.x, p.y + e * 0.48, p.z, 0.15, 2);
  return out;
}
