/**
 * staticProps calculate
 */
import colors from '../../styles/colors.scss';
import breakpoints from '../../styles/breakpoints.scss';

const staticProps = (window) => {
  const width = window.innerWidth;
  const shared = {
    // Number of curve segments in x
    segments: 10,
    // Max growth in px of both + and negavtive
    growth: 80,
    // step size for the noise
    // speed
    step: 0.008,
    // Number of lines
    rows: 10,
    // The difference in noise between lines
    lineDiff: 0.15,
    // The difference in segments I think
    curveDiff: 0.50,
    lineWidth: 1,
    lineColor: colors.dvpWhite,
    bgColor: colors.dvpDark,
    // Scaler that will be used to position
    // x1 of the curve
    x1OffsetScaler: 0.5,
    // The total xOffset that will be used to create
    // visual persective.
    perspectiveOffset: 0,
    heightCalculatorProps: {
      cal: 'fixed',
      value: 583,
    },
    widthCalculatorProps: {
      cal: 'scaler',
      value: 1.0,
    },
  };
  if (width <= breakpoints.screenMDMin) {
    const smOverride = {
    };
    return {...shared, ...smOverride};
  }

  if (width <= breakpoints.screenLGMin) {
    const mdOverride = {
      segments: 15,
      step: 0.01,
      perspectiveOffset: 100,
    };
    return {...shared, ...mdOverride};
  }

  const lgOverride = {
    segments: 20,
    growth: 90,
    step: 0.01,
    rows: 20,
    perspectiveOffset: 100,
  };
  return {...shared, ...lgOverride};
};

const calculator = (windowValue, calProps) => {
  if (calProps.cal === 'fixed') {
    return calProps.value;
  }
  return windowValue * calProps.value;
};

const heightCalculator = (window, staticProps) => {
  return calculator(window.height, staticProps.heightCalculatorProps);
};

const widthCalculator = (window, staticProps) => {
  return calculator(window.innerWidth, staticProps.widthCalculatorProps);
};

export {staticProps, heightCalculator, widthCalculator};
