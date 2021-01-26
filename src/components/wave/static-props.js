/**
 * staticProps that define wave rendering and behaviour
 */
import colors from '../../styles/colors.scss';
import breakpoints from '../../styles/breakpoints.scss';

const staticProps = (canvasProps) => {
  const shared = {
    // Number of curve segments in x
    segments: 5,
    // Max growth in px in y direction
    // Effectively wave height
    growth: 80,
    // Step size for the noise, effusively speed
    step: 0.002,
    // Number of lines
    rows: 50,
    // Variability in waves across y dimension, [0,1]
    // At 1 get fully independent rows (lines)
    lineDiff: 0.1,
    // Variability in waves across x dimension, [0,1]
    // At 0 get "planar" waves
    curveDiff: 0.50,
    // Background color for the canvas
    bgColor: colors.dvpDark,
    // Scaler that will be used to position
    // x1 of the curve
    // Using anything but 0.5 gives non-symmetrical waves
    x1OffsetScaler: 0.5,
    // The total xOffset that will be used to create
    // visual persective.
    perspectiveOffset: 0,
    // Line Width, [1,10]
    // Value below 1 causes rendering imperfections
    lineWidth: 1,
    // Line color, note that color and alpha can make
    // unexpected to changes to line rendering
    lineColor: colors.dvpWave,
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
