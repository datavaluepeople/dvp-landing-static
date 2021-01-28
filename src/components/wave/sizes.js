/**
 * sizes for the waves.
 */

const sizeObject = (row, width, height, staticProps) => {
  const xOffsetRatio = (staticProps.rows + 1 - row ) / staticProps.rows;
  const xOffset = (xOffsetRatio * staticProps.perspectiveOffset);
  const total = width - (xOffset * 2);
  const size = total / staticProps.segments;
  //
  // Height of middle Y poiint
  // first get the ratio that the row Y will be
  const yOffsetRatio = (1 / (staticProps.rows + 1) * row);
  // The max space in Y that the lines can take up
  const ySpace = (height - (staticProps.growth * 2));
  // Offset that the Y will be
  const yOffset = staticProps.growth;
  const yMiddlePoint = (yOffsetRatio * ySpace) + yOffset;

  const xMatrix = [];
  for (let i = 1; i <= staticProps.segments; i++) {
    // Half the width of the segment
    const previsousXPosition = size * (i - 1);
    const x1Offest = size * staticProps.x1OffsetScaler;
    const x1 = xOffset + (previsousXPosition + x1Offest);
    const x2 = xOffset + (size * i);

    xMatrix[i] = [x1, x2];
  }

  return {
    total: total,
    size: size,
    xOffsetRatio: xOffsetRatio,
    xOffset: xOffset,
    xMatrix: xMatrix,
    yOffset: yOffset,
    yOffsetRatio: yOffsetRatio,
    yMiddlePoint: yMiddlePoint,
  };
};

const sizesCreate = (width, height, staticProps) => {
  const sizes = [];

  for (let i = 1; i <= staticProps.rows; i++) {
    const sizeObj = sizeObject(i, width, height, staticProps);
    sizes[i] = sizeObj;
  }
  return sizes;
};

export default sizesCreate;
