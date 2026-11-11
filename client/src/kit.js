// Parser for dist/city.bin (the compact building kit). Shared by the browser and the offline arena builder.
export function parseKit(buf) {
  const u8 = new Uint8Array(buf);
  const magic = String.fromCharCode(u8[0], u8[1], u8[2], u8[3]);
  if (magic !== 'SCKT') throw new Error('bad kit file');
  const dv = new DataView(buf);
  const hlen = dv.getUint32(4, true);
  const header = JSON.parse(new TextDecoder().decode(u8.subarray(8, 8 + hlen)));
  const base = 8 + hlen;
  const types = {};
  for (const [k, t] of Object.entries(header.types)) {
    types[k] = {
      ...t,
      i16: new Int16Array(buf, base + t.vOff, t.nv * 8),
      u8: new Uint8Array(buf, base + t.vOff, t.nv * 16),
      i8: new Int8Array(buf, base + t.vOff, t.nv * 16),
      idx: t.i32 ? new Uint32Array(buf, base + t.iOff, t.nt * 3) : new Uint16Array(buf, base + t.iOff, t.nt * 3),
    };
  }
  return { header, types, layers: header.layers };
}

// material flag bits (must match build/build_city.mjs)
export const F_WINDOW = 1, F_NEON = 2, F_METAL = 4, F_SIGN = 8, F_ROOF = 16, F_CUSTOM = 32, F_PAINT = 64, F_GLOW = 128;
