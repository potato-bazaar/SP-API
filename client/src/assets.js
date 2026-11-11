// Asset loading: fetches the packed files that ship beside the page (relative URLs), with progress.
import * as THREE from 'three';
import { parseKit } from './kit.js';

// The three binary packs travel as base64 text (the host serves text and media types, not raw binaries) and are decoded here.
export const FILES = { city: 'city.txt', tex: 'tex.txt', arena: 'arena.json', models: 'models.txt' };
// approximate sizes for the progress bar when the server does not send a usable Content-Length
const SIZE_HINT = { 'city.txt': 4.81e6, 'tex.txt': 2.52e6, 'arena.json': 1.2e5, 'models.txt': 3.88e6 };
const B64 = new Uint8Array(256); for (let i = 0; i < 64; i++) B64['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charCodeAt(i)] = i;
function b64Decode(a) { // a: Uint8Array of ASCII base64
  let n = a.length; while (n > 0 && (a[n - 1] === 61 || a[n - 1] === 10 || a[n - 1] === 13 || a[n - 1] === 32)) n--; const out = new Uint8Array(Math.floor(n * 3 / 4)); let o = 0, i = 0;
  for (; i + 4 <= n; i += 4) { const v = (B64[a[i]] << 18) | (B64[a[i + 1]] << 12) | (B64[a[i + 2]] << 6) | B64[a[i + 3]]; out[o++] = v >> 16; out[o++] = (v >> 8) & 255; out[o++] = v & 255; }
  if (n - i === 2) { out[o++] = ((B64[a[i]] << 18) | (B64[a[i + 1]] << 12)) >> 16; } else if (n - i === 3) { const v = (B64[a[i]] << 18) | (B64[a[i + 1]] << 12) | (B64[a[i + 2]] << 6); out[o++] = v >> 16; out[o++] = (v >> 8) & 255; }
  return out.buffer;
}

export async function fetchBuf(url, onProgress) {
  const res = await fetch(url); if (!res.ok) throw new Error(`Could not load ${url} (${res.status})`);
  const total = +res.headers.get('Content-Length') || SIZE_HINT[url] || 1e6;
  const text = /\.txt$/.test(url); const fin = (b) => text ? b64Decode(new Uint8Array(b)) : b;
  if (!res.body || !res.body.getReader) { const b = await res.arrayBuffer(); onProgress && onProgress(b.byteLength, b.byteLength); return fin(b); }
  const reader = res.body.getReader(); const chunks = []; let got = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; onProgress && onProgress(got, Math.max(total, got)); }
  const out = new Uint8Array(got); let o = 0; for (const c of chunks) { out.set(c, o); o += c.length; }
  return fin(out.buffer);
}

export function parseTexPack(buf) {
  const u8 = new Uint8Array(buf); const dv = new DataView(buf);
  if (String.fromCharCode(u8[0], u8[1], u8[2], u8[3]) !== 'SCTX') throw new Error('bad texture pack');
  const hlen = dv.getUint32(4, true); const head = JSON.parse(new TextDecoder().decode(u8.subarray(8, 8 + hlen))); const base = 8 + hlen;
  const items = new Map();
  for (const it of head.items) items.set(it.name, { ...it, blob: new Blob([u8.subarray(base + it.off, base + it.off + it.len)], { type: 'image/webp' }) });
  return items;
}

// decode a blob to a drawable (ImageBitmap where available, <img> otherwise)
export async function decodeImage(blob) {
  if (typeof createImageBitmap === 'function') { try { return await createImageBitmap(blob); } catch (e) { /* fall through */ } }
  return await new Promise((res, rej) => { const url = URL.createObjectURL(blob); const im = new Image(); im.onload = () => { URL.revokeObjectURL(url); res(im); }; im.onerror = () => { URL.revokeObjectURL(url); rej(new Error('image decode failed')); }; im.src = url; });
}

let _cv = null, _cx = null;
function scratch(w, h) { if (!_cv) { _cv = document.createElement('canvas'); _cx = _cv.getContext('2d', { willReadFrequently: true }); } if (_cv.width !== w || _cv.height !== h) { _cv.width = w; _cv.height = h; } return _cx; }
// red channel of an image as bytes (our textures are grayscale)
export function grayBytes(img, w, h, out, offset = 0) {
  const cx = scratch(w, h); cx.globalCompositeOperation = 'copy'; cx.drawImage(img, 0, 0, w, h); const d = cx.getImageData(0, 0, w, h).data;
  for (let i = 0, n = w * h; i < n; i++) out[offset + i] = d[i * 4];
  return out;
}

export async function texFromPack(pack, name, { srgb = true, repeat = false, flipY = false } = {}) {
  const it = pack.get(name); if (!it) return null; const img = await decodeImage(it.blob);
  const t = new THREE.Texture(img); t.flipY = flipY; t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = 4;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; t.needsUpdate = true; return t;
}

export async function loadAll(onProgress) {
  const names = Object.values(FILES); const got = {}, tot = {}; names.forEach(n => { got[n] = 0; tot[n] = SIZE_HINT[n] || 1e6; });
  const rep = () => { let g = 0, t = 0; for (const n of names) { g += got[n]; t += tot[n]; } onProgress && onProgress(Math.min(1, g / t)); };
  const one = (n) => fetchBuf(n, (g, t) => { got[n] = g; tot[n] = t; rep(); });
  const [city, tex, arena, models] = await Promise.all([one(FILES.city), one(FILES.tex), one(FILES.arena), one(FILES.models).catch(() => null)]);
  return { kit: parseKit(city), pack: parseTexPack(tex), arena: JSON.parse(new TextDecoder().decode(arena)), models };
}
