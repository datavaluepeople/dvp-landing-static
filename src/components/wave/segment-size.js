/**
 * segmentSize
 */

const distance = (x1, y1, x2, y2) => {
  const x = (x2-=x1)*x2;
  const y = (y2-=y1)*y2;
  const sqrt = Math.sqrt( x + y );
  return sqrt;
};

const segmentSizeObject = (row, width, height, staticProps) => {
  const xOffsetRatio = (staticProps.rows + 1 - row ) / staticProps.rows;
  const xOffset = Math.round(xOffsetRatio * staticProps.perspective);
  const total = width - (2 * xOffset);
  const h2 = height / 2;
  const size = distance(0, h2, total, h2) / staticProps.segments;
  const xMatrix = [];
  for (let i = 1; i <= staticProps.segments; i++) {
    let x1 = xOffset + Math.round((size * (i-1)) + size / 2);
    let x2 = xOffset + Math.round(size * i);
    if (i === staticProps.segments) {
      x2 = x2 - xOffset;
    }
    if (x1 > (xOffset + total)) {
      const segmentRatio = (staticProps.segments - i) / staticProps.segments;
      x1 = x2 - (xOffset * segmentRatio);
    }

    xMatrix[i] = [x1, x2];
  }

  return {
    total: total,
    size: size,
    xOffsetRatio: xOffsetRatio,
    xOffset: xOffset,
    xMatrix: xMatrix,
  };
};

const segmentSizesCreate = (width, height, staticProps) => {
  const segmentSizes = [];

  for (let i = 1; i <= staticProps.rows; i++) {
    const segmentSizeObj = segmentSizeObject(i, width, height, staticProps);
    segmentSizes[i] = segmentSizeObj;
  }
  return segmentSizes;
};

export default segmentSizesCreate;
