// UV regions inside the runtime-drawn "custom" texture layer (1024x1024, v=0 at top).
// Shared by the offline arena builder (which bakes UVs into shapes) and the runtime painter.
const T = 1 / 1024;
export const ATLAS = {
  // spawn numbers 01..08: 4x2 grid of 256x256 at the top
  num: (i) => { const c = i % 4, r = (i / 4) | 0; return [c * 256 * T, r * 256 * T, (c + 1) * 256 * T, (r + 1) * 256 * T]; },
  title: [0, 512 * T, 512 * T, 768 * T],          // 狙擊之城 wide sign (2:1)
  chevron: [512 * T, 512 * T, 768 * T, 768 * T],  // launch pad chevrons
  arrow: [768 * T, 512 * T, 1024 * T, 768 * T],   // jump arrow
  signV: (i) => [(i * 128) * T, 768 * T, (i * 128 + 128) * T, 1024 * T], // 8 vertical neon signs 128x256
};
export const SIGN_TEXT = ['天使', '紅區', '香港', '狙擊', '中環', '酒店', '茶樓', '當鋪'];
