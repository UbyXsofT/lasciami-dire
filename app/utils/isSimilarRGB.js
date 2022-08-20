const isSimilarRGB = ([r1, g1, b1], [r2, g2, b2], tolerance) => {
  return Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2) < tolerance;
};

export default isSimilarRGB;
