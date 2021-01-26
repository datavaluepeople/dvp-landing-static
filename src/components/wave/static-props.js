/**
 * staticProps calculate
 */
import colors from '../../styles/colors.scss';
import breakpoints from '../../styles/breakpoints.scss';

const staticProps = (canvasProps) => {
  const shared = {
    // Number of curve segments in x
    segments: 5,
    // Max growth in px of both + and negavtive
    growth: 80,
    // step size for the noise
    // speed
    step: 0.005,
    // Number of lines
    rows: 50,
    // The difference in noise between lines
    lineDiff: 0.1,
    // The difference in segments I think
    curveDiff: 0.50,
    bgColor: colors.dvpDark,
    // Scaler that will be used to position
    // x1 of the curve
    x1OffsetScaler: 0.5,
    // The total xOffset that will be used to create
    // visual persective.
    perspectiveOffset: 0,
    // Line Width should not be below 1 as causes rendering
    // imperfections
    lineWidth: 1,
    lineColor: colors.dvpGreyWave,
  };
  if (canvasProps.windowWidth <= breakpoints.screenMDMin) {
    const smOverride = {
    };
    return {...shared, ...smOverride};
  }

  if (canvasProps.windowWidth <= breakpoints.screenLGMin) {
    const mdOverride = {
      segments: 5,
      growth: 50,
      step: 0.003,
      rows: 60,
      perspectiveOffset: 150,
      curveDiff: 0.50,
    };
    return {...shared, ...mdOverride};
  }

  if (canvasProps.windowWidth <= breakpoints.screenXLGMin) {
    const lgOverride = {
      segments: 5,
      growth: 60,
      step: 0.002,
      rows: 70,
      perspectiveOffset: 120,
      curveDiff: 0.50,
      lineDiff: 0.07,
    };
    return {...shared, ...lgOverride};
  }
  const xlgOverride = {
    segments: 5,
    growth: 60,
    step: 0.002,
    rows: 90,
    perspectiveOffset: 100,
    curveDiff: 0.5,
    lineDiff: 0.07,
  };
  return {...shared, ...xlgOverride};
};

export default staticProps;
