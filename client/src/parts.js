// Rifle parts. Every part gives something and takes something, and all of them are free. Shared by the client (your own
// rifle, solo and online) and the server (which owns ammunition and damage online), so both read the same numbers.
// A rifle's damage is [head, body, limb]; with 100 health, 50 on a limb is two hits to kill, 44 is three, 33 is four.
export const PARTS = [
  { slot: 'barrel', name: 'BARREL', opts: [
    { name: 'Standard', note: 'The barrel it came with.' },
    { name: 'Heavy', note: 'Two limb hits kill, not three. The bolt is slower.', dmg: [160, 74, 50], cycle: 0.25 },
    { name: 'Light', note: 'The bolt runs faster. Limb hits do less: four to kill.', dmg: [160, 74, 33], cycle: -0.2 }] },
  { slot: 'mag', name: 'MAGAZINE', opts: [
    { name: 'Five rounds', note: 'The magazine it came with.' },
    { name: 'Extended', note: 'Eight rounds before you reload. Each reload takes longer.', mag: 8, reload: 0.7 },
    { name: 'Quick', note: 'Three rounds, and the fastest reload there is.', mag: 3, reload: -0.9 }] },
  { slot: 'stock', name: 'STOCK', opts: [
    { name: 'Standard', note: 'The stock it came with.' },
    { name: 'Skeleton', note: 'Up to the eye a third faster. Reloads are slower.', ads: 0.11, reload: 0.3 },
    { name: 'Padded', note: 'A faster follow-up shot. Slower up to the eye.', ads: 0.22, cycle: -0.1 }] },
  { slot: 'pouch', name: 'AMMUNITION', opts: [
    { name: 'Twenty spare', note: 'What every sniper is issued.' },
    { name: 'Deep pouch', note: 'Thirty spare rounds. Reloads are slower.', reserve: 30, reload: 0.3 },
    { name: 'Light pouch', note: 'Ten spare rounds. Reloads are faster.', reserve: 10, reload: -0.3 }] },
];
export function partsClean(sel) {
  const out = [];
  for (let i = 0; i < PARTS.length; i++) { const v = Array.isArray(sel) ? sel[i] | 0 : 0; out.push(v >= 0 && v < PARTS[i].opts.length ? v : 0); }
  return out;
}
/** the rifle with these parts fitted: a copy of base with the parts' numbers applied */
export function rifleWith(base, sel) {
  const s = partsClean(sel), r = { ...base, dmg: base.dmg.slice(), ads: 0.16, parts: s };
  for (let i = 0; i < PARTS.length; i++) {
    const o = PARTS[i].opts[s[i]];
    if (o.dmg) r.dmg = o.dmg.slice(); if (o.mag) r.mag = o.mag; if (o.reserve !== undefined) r.reserve = o.reserve;
    if (o.cycle) r.cycle += o.cycle; if (o.reload) r.reload += o.reload; if (o.ads) r.ads = o.ads;
  }
  r.cycle = Math.round(r.cycle * 100) / 100; r.reload = Math.round(r.reload * 100) / 100; return r;
}
