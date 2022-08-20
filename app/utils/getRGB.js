const getRGB = (color) => {
  let colorChk = parseInt(color.substring(1), 16);
  let r = colorChk >> 16;
  let g = (colorChk - (r << 16)) >> 8;
  let b = colorChk - (r << 16) - (g << 8);
  return [r, g, b];
};

export default getRGB;
