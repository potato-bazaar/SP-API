// Arena definition for SNIPER CITY (offline builder input). Units: metres. +X east, +Z south, centre at origin.
// Detail (street-facing) corners of each kit type in local space, used to auto-pick rotations.
export const DETAIL = { A: [1, 1], B: [1, -1], C: [-1, 1], D: [1, -1], E: [-1, -1], F: [1, -1] };

// roofs: id, kit type, centre, target roof height, kind, optional fixed rot.
export const ROOFS = [
  // central block (original arrangement of the asset, natural heights)
  { id: 'cA', type: 'A', x: 6.25, z: 6.9, kind: 'center', rot: 0, name: 'CENTRAL · SE' },
  { id: 'cC', type: 'C', x: -6.37, z: 5.7, kind: 'center', rot: 0, name: 'CENTRAL · SW' },
  { id: 'cD', type: 'D', x: 6.34, z: -6.24, kind: 'center', rot: 0, name: 'CENTRAL · NE' },
  { id: 'cE', type: 'E', x: -5.7, z: -5.96, kind: 'center', rot: 0, name: 'CENTRAL · NW' },
  // inner ring: four alley pairs
  { id: 'iN1', type: 'F', x: -8.8, z: -33.5, roofY: 17.8, kind: 'inner', name: 'NORTH ALLEY · W' },
  { id: 'iN2', type: 'D', x: 7.9, z: -33.5, roofY: 16.6, kind: 'inner', name: 'NORTH ALLEY · E' },
  { id: 'iE1', type: 'C', x: 33.5, z: -7.9, roofY: 18.4, kind: 'inner', name: 'EAST ALLEY · N' },
  { id: 'iE2', type: 'E', x: 33.5, z: 7.9, roofY: 17.2, kind: 'inner', name: 'EAST ALLEY · S' },
  { id: 'iS1', type: 'D', x: -7.9, z: 33.5, roofY: 16.8, kind: 'inner', name: 'SOUTH ALLEY · W' },
  { id: 'iS2', type: 'F', x: 8.8, z: 33.5, roofY: 18.0, kind: 'inner', name: 'SOUTH ALLEY · E' },
  { id: 'iW1', type: 'E', x: -33.5, z: -7.9, roofY: 16.9, kind: 'inner', name: 'WEST ALLEY · N' },
  { id: 'iW2', type: 'C', x: -33.5, z: 7.9, roofY: 18.2, kind: 'inner', name: 'WEST ALLEY · S' },
  // outer ring: eight spawn towers (numbered clockwise as in the design board)
  { id: 'oN', type: 'B', x: 0, z: -64, roofY: 23.2, kind: 'outer', spawn: 0, name: 'NORTH TOWER', theme: 'high' },
  { id: 'oE', type: 'F', x: 64, z: 0, roofY: 22.4, kind: 'outer', spawn: 1, name: 'EAST TOWER', theme: 'radio' },
  { id: 'oSE', type: 'C', x: 47, z: 47, roofY: 26.2, kind: 'outer', spawn: 2, name: 'EAST-SOUTH', theme: 'industrial' },
  { id: 'oS', type: 'C', x: 0, z: 64, roofY: 24.0, kind: 'outer', spawn: 3, name: 'SOUTH TOWER', theme: 'residential' },
  { id: 'oSW', type: 'D', x: -47, z: 47, roofY: 23.6, kind: 'outer', spawn: 4, name: 'SOUTH-WEST', theme: 'construction' },
  { id: 'oW', type: 'D', x: -64, z: 0, roofY: 22.0, kind: 'outer', spawn: 5, name: 'WEST TOWER', theme: 'commercial' },
  { id: 'oNW', type: 'F', x: -47, z: -47, roofY: 24.8, kind: 'outer', spawn: 6, name: 'NORTH-WEST', theme: 'old' },
  { id: 'oNE', type: 'F', x: 47, z: -47, roofY: 25.5, kind: 'outer', spawn: 7, name: 'NORTH-EAST', theme: 'tanks' },
  // annexes: low roofs hugging the diagonal towers (placed by the builder: side = which side of the parent)
  { id: 'aNE', type: 'E', parent: 'oNE', side: 'W', roofY: 17.6, kind: 'annex', name: 'NORTH-EAST · ANNEX' },
  { id: 'aSE', type: 'E', parent: 'oSE', side: 'N', roofY: 18.2, kind: 'annex', name: 'EAST-SOUTH · ANNEX' },
  { id: 'aSW', type: 'E', parent: 'oSW', side: 'E', roofY: 17.0, kind: 'annex', name: 'SOUTH-WEST · ANNEX' },
  { id: 'aNW', type: 'E', parent: 'oNW', side: 'S', roofY: 17.9, kind: 'annex', name: 'NORTH-WEST · ANNEX' },
];

// traversal network. kinds: zip (two-way), pad (one-way a->b), jump (two-way alley), ladder (two-way, abutting), step (two-way, abutting small height)
export const LINKS = [
  // ring ziplines between spawn towers
  ['zip', 'oNE', 'oE'], ['zip', 'oSE', 'oS'], ['zip', 'oSW', 'oW'], ['zip', 'oNW', 'oN'],
  // cardinal towers ride down to the alleys
  ['zip', 'oN', 'iN1'], ['zip', 'oE', 'iE1'], ['zip', 'oS', 'iS2'], ['zip', 'oW', 'iW2'],
  // diagonal towers: ladder to the annex, launch pad into the alleys
  ['ladder', 'aNE', 'oNE'], ['ladder', 'aSE', 'oSE'], ['ladder', 'aSW', 'oSW'], ['ladder', 'aNW', 'oNW'],
  ['pad', 'aNE', 'iN2'], ['pad', 'aSE', 'iE2'], ['pad', 'aSW', 'iS1'], ['pad', 'aNW', 'iW1'],
  // alley pairs: parkour gap
  ['jump', 'iN1', 'iN2'], ['jump', 'iE1', 'iE2'], ['jump', 'iS1', 'iS2'], ['jump', 'iW1', 'iW2'],
  // alleys chained at the corners
  ['zip', 'iN2', 'iE1'], ['zip', 'iE2', 'iS2'], ['zip', 'iS1', 'iW2'], ['zip', 'iW1', 'iN1'],
  // into the central block
  ['zip', 'iN1', 'cE'], ['pad', 'iN2', 'cD'], ['zip', 'iE1', 'cD'], ['pad', 'iE2', 'cA'],
  ['pad', 'iS1', 'cC'], ['zip', 'iS2', 'cA'], ['zip', 'iW1', 'cE'], ['zip', 'iW2', 'cC'],
  // inside the central block
  ['step', 'cD', 'cA'], ['step', 'cA', 'cC'], ['ladder', 'cE', 'cD'], ['ladder', 'cE', 'cC'],
];

// zone schedule (seconds, radius in metres). The zone contracts during the first part of each phase, then holds.
export const ZONE = {
  center: [0, 0], r0: 84,
  phases: [
    { t: 0, r: 84, dps: 0 },
    { t: 60, r: 67, shrink: 26, dps: 6 },
    { t: 120, r: 50, shrink: 26, dps: 9 },
    { t: 180, r: 29.5, shrink: 26, dps: 13 },
    { t: 240, r: 17, shrink: 16, dps: 18 },
    { t: 270, r: 8.5, shrink: 16, dps: 25 },
  ],
  duration: 300,
};
