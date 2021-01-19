/* WavePathGenation */

const wavePathGenerator = (
    stepNumber,
    segmentSize,
    noiseObj,
    context,
    canvas,
    effectProps,
    row,
) => {
  // Height of middle Y poiint
  // first get the ratio that the row Y will be
  const rowRatio = (1 / (effectProps.rows + 1) * row);
  // The max space in Y that the lines can take up
  const maxSpace = (canvas.height - (effectProps.growth * 2));
  // Offset that the Y will be
  const offset = effectProps.growth;
  const middleYPoint = (rowRatio * maxSpace) + offset;
  const initialNoise = noiseObj.noise(
      stepNumber, row * effectProps.lineDiff, 0,
  );
  const noiseGroth = initialNoise * effectProps.growth;
  const startY = Math.round((middleYPoint) + noiseGroth);
  // As defined https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
  let path = `M0, ${startY}`;
  for (let i = 1; i <= effectProps.segments; i++) {
    const noise1 = noiseObj.noise(
        stepNumber, row * effectProps.lineDiff, i * effectProps.curveDiff,
    );
    const noise2 = noiseObj.noise(
        stepNumber, row * effectProps.lineDiff, (i-0.5) * effectProps.curveDiff,
    );

    const x2 = Math.round((segmentSize * (i-1)) + segmentSize / 2);
    const y2 = Math.round((middleYPoint) + (noise1 * effectProps.growth));
    const x1 = Math.round(segmentSize * i);
    const y1 = Math.round((middleYPoint) + (noise2 * effectProps.growth));
    path = path + ` S ${x2} ${y2}, ${x1} ${y1}`;
  };
  // path = path + ' T' + (segmentSize * effectProps.segments-1) + ',' + height;
  return new Path2D(path);
};

export default wavePathGenerator;
