/* WavePathGenation */

const wavePathGenerator = (
    row,
    viewProps,
    staticProps,
) => {
  const noiseObj = viewProps.noiseObj;
  const noiseStep = viewProps.noiseStep;
  const sizeObject = viewProps.sizes[row];
  // As defined https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
  let path = `M${sizeObject.xOffset}, ${sizeObject.yMiddlePoint}`;
  for (let i = 1; i <= staticProps.segments; i++) {
    const noise1 = noiseObj.noise(
        noiseStep, row * staticProps.lineDiff, i * staticProps.curveDiff,
    );
    const noise2 = noiseObj.noise(
        noiseStep, row * staticProps.lineDiff, (i-0.5) * staticProps.curveDiff,
    );

    const y1 = Math.round(
        (sizeObject.yMiddlePoint) + (noise1 * staticProps.growth),
    );
    let y2 = Math.round(
        (sizeObject.yMiddlePoint) + (noise2 * staticProps.growth),
    );
    if (i === staticProps.segments) {
      y2 = sizeObject.yMiddlePoint;
    }

    const x1 = sizeObject.xMatrix[i][0];
    const x2 = sizeObject.xMatrix[i][1];

    path = path + ` S ${x1} ${y1}, ${x2} ${y2}`;
  };
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
