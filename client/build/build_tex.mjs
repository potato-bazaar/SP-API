// Builds dist/tex.bin: a pack of grayscale WebP images (city texture-array layers + others added later).
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const out = []; // {name, group, w, h, buf}
const Q = 76;
async function gray(file, w, h, opts = {}) {
  let im = sharp(file).removeAlpha().resize(w, h, { fit: 'fill', kernel: 'lanczos3' }).grayscale();
  if (opts.gamma) im = im.gamma(opts.gamma);
  if (opts.linear) im = im.linear(opts.linear[0], opts.linear[1]);
  return im.webp({ quality: opts.q ?? Q, effort: 6 }).toBuffer();
}
// neon mask from colour saturation (signs)
async function satMask(file, w, h) {
  const { data, info } = await sharp(file).removeAlpha().resize(w, h, { fit: 'fill' }).raw().toBuffer({ resolveWithObject: true });
  const m = Buffer.alloc(w * h);
  for (let i = 0; i < w * h; i++) {
    const r = data[i * 3] / 255, g = data[i * 3 + 1] / 255, b = data[i * 3 + 2] / 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    const sat = mx > 0.001 ? (mx - mn) / mx : 0; let v = Math.max(0, (sat - 0.38) / 0.4) * Math.min(1, mx * 1.6);
    m[i] = Math.max(0, Math.min(255, Math.round(v * 255)));
  }
  return sharp(m, { raw: { width: w, height: h, channels: 1 } }).blur(1.2).webp({ quality: 60, effort: 6 }).toBuffer();
}
const cityLayers = JSON.parse(fs.readFileSync('build/city_layers.json', 'utf8'));
const CS = 1024;
for (const [name, src] of cityLayers) {
  if (src) out.push({ name, group: 'city', w: CS, h: CS, buf: await gray('ext/city/' + src, CS, CS) });
  else if (name.endsWith('_m')) { const base = cityLayers.find(l => l[0] === name.slice(0, -2)); out.push({ name, group: 'city', w: CS, h: CS, buf: await satMask('ext/city/' + base[1], CS, CS) }); }
}
// extra packs are appended by other build steps via ext/pack/*.json manifests: [{name, group, file, w, h, mode}]
for (const mf of fs.existsSync('ext/pack') ? fs.readdirSync('ext/pack').filter(f => f.endsWith('.json')).sort() : []) {
  for (const e of JSON.parse(fs.readFileSync('ext/pack/' + mf, 'utf8'))) {
    let buf;
    if (e.mode === 'rgba') buf = await sharp(e.file).resize(e.w, e.h, { fit: 'fill' }).webp({ quality: e.q ?? 80, alphaQuality: 80, effort: 6 }).toBuffer();
    else if (e.mode === 'raw') buf = fs.readFileSync(e.file);
    else buf = await gray(e.file, e.w, e.h, e);
    out.push({ name: e.name, group: e.group, w: e.w, h: e.h, buf });
  }
}
let off = 0; const index = out.map(o => { const r = { name: o.name, group: o.group, w: o.w, h: o.h, off, len: o.buf.length }; off += o.buf.length; return r; });
const hjson = Buffer.from(JSON.stringify({ items: index })); const head = Buffer.alloc(8); head.write('SCTX', 0); head.writeUInt32LE(hjson.length, 4);
fs.writeFileSync('dist/tex.bin', Buffer.concat([head, hjson, ...out.map(o => o.buf)]));
console.log('tex.bin', ((8 + hjson.length + off) / 1e6).toFixed(2), 'MB;', index.map(i => `${i.name}:${(i.len / 1024).toFixed(0)}k`).join(' '));
