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
    rows: 40,
    // The difference in noise between lines
    lineDiff: 0.095,
    // The difference in segments I think
    curveDiff: 0.30,
    lineWidth: 0.5,
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
      growth: 60,
      segments: 10,
      step: 0.005,
      rows: 40,
      perspectiveOffset: 100,
      curveDiff: 0.20,
      heightCalculatorProps: {
        cal: 'fixed',
        value: 400,
      },
      lineWidth: 0.3,
      widthCalculatorProps: {
        cal: 'scaler',
        value: 1.1,
      },
    };
    return {...shared, ...mdOverride};
  }

  if (width <= breakpoints.screenXLGMin) {
    const lgOverride = {
      segments: 10,
      growth: 80,
      step: 0.001,
      rows: 80,
      perspectiveOffset: 100,
      curveDiff: 0.20,
      lineWidth: 0.3,
      heightCalculatorProps: {
        cal: 'fixed',
        value: 500,
      },
      widthCalculatorProps: {
        cal: 'scaler',
        value: 1,
      },
    };
    return {...shared, ...lgOverride};
  }
  const xlgOverride = {
    segments: 10,
    growth: 80,
    step: 0.002,
    rows: 80,
    perspectiveOffset: 150,
    curveDiff: 0.20,
    lineWidth: 0.3,
    heightCalculatorProps: {
      cal: 'fixed',
      value: 650,
    },
    widthCalculatorProps: {
      cal: 'scaler',
      value: 1,
    },
  };
  return {...shared, ...xlgOverride};
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
