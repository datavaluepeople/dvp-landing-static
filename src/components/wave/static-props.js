/**
 * staticProps calculate
 */
import colors from '../../styles/colors.scss';
import breakpoints from '../../styles/breakpoints.scss';

const staticProps = (window) => {
  const width = window.innerWidth;
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
    lineWidth: 0.3,
    lineColor: colors.dvpWhite,
    bgColor: colors.dvpDark,
    // Scaler that will be used to position
    // x1 of the curve
    x1OffsetScaler: 0.5,
    // The total xOffset that will be used to create
    // visual persective.
    perspectiveOffset: 0,
  };
  if (width <= breakpoints.screenMDMin) {
    const smOverride = {
    };
    return {...shared, ...smOverride};
  }

  if (width <= breakpoints.screenLGMin) {
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

  if (width <= breakpoints.screenXLGMin) {
    const lgOverride = {
      segments: 5,
      growth: 60,
      step: 0.002,
      rows: 70,
      perspectiveOffset: 120,
      curveDiff: 0.50,
      lineDiff: 0.07,
      lineWidth: 0.3,
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
    lineWidth: 0.3,
  };
  return {...shared, ...xlgOverride};
};


/*
 * From blog post
 * https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
 */
const heightCalculator = (window, canvas, staticProps) => {
  const h = window.getComputedStyle(
      canvas,
  ).getPropertyValue('height').slice(0, -2);
  return h * window.devicePixelRatio;
};

const widthCalculator = (window, canvas, staticProps) => {
  const w = window.getComputedStyle(
      canvas,
  ).getPropertyValue('width').slice(0, -2);
  return w * window.devicePixelRatio;
};

export {staticProps, heightCalculator, widthCalculator};
