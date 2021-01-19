/* WavePathGenation */

const wavePathGenerator = (
    row,
    viewProps,
    staticProps,
) => {
  const canvas = viewProps.canvas;
  const noiseObj = viewProps.noiseObj;
  const noiseStep = viewProps.noiseStep;
  // Height of middle Y poiint
  // first get the ratio that the row Y will be
  const rowRatio = (1 / (staticProps.rows + 1) * row);
  // The max space in Y that the lines can take up
  const maxSpace = (canvas.height - (staticProps.growth * 2));
  // Offset that the Y will be
  const offset = staticProps.growth;
  const middleYPoint = (rowRatio * maxSpace) + offset;
  const initialNoise = noiseObj.noise(
      noiseStep, row * staticProps.lineDiff, 0,
  );
  const noiseGroth = initialNoise * staticProps.growth;
  const startY = Math.round((middleYPoint) + noiseGroth);
  // As defined https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
  let path = `M0, ${startY}`;
  for (let i = 1; i <= staticProps.segments; i++) {
    const noise1 = noiseObj.noise(
        noiseStep, row * staticProps.lineDiff, i * staticProps.curveDiff,
    );
    const noise2 = noiseObj.noise(
        noiseStep, row * staticProps.lineDiff, (i-0.5) * staticProps.curveDiff,
    );

    const segmentSize = viewProps.segmentSize;
    const x2 = Math.round((segmentSize * (i-1)) + segmentSize / 2);
    const y2 = Math.round((middleYPoint) + (noise1 * staticProps.growth));
    const x1 = Math.round(segmentSize * i);
    const y1 = Math.round((middleYPoint) + (noise2 * staticProps.growth));
    path = path + ` S ${x2} ${y2}, ${x1} ${y1}`;
  };
  // path = path + ' T' + (segmentSize * staticProps.segments-1) + ',' + height;
  return new Path2D(path);
};

const clearCanvas = (viewProps, staticProps) => {
  viewProps.context.save();
  if (staticProps.bgColor) {
    viewProps.context.fillStyle = staticProps.bgColor;
  }
  viewProps.context.fillRect(
      0, 0, viewProps.canvas.width, viewProps.canvas.height);
  viewProps.context.restore();
};

const drawCurve = (
    row, viewProps, staticProps,
) => {
  const context = viewProps.context;
  context.save();
  context.strokeStyle = staticProps.lineColor;
  context.lineWidth = staticProps.lineWidth;
  context.beginPath();
  const path = wavePathGenerator(
      row,
      viewProps,
      staticProps,
  );
  context.stroke(path);
  context.restore();
};

export {drawCurve, clearCanvas, wavePathGenerator};
