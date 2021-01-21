/**
 * staticProps calculate
 */
import colors from '../../styles/colors.scss';
import breakpoints from '../../styles/breakpoints.scss';

const staticProps = (width, height) => {
  if (width <= breakpoints.screenMDMin) {
    return {
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
      // The total xOffset that will be used to create
      // visual persective.
      perspectiveOffset: 0,
    };
  }

  if (width <= breakpoints.screenLGMin) {
    return {
      // Number of curve segments in x
      segments: 15,
      // Max growth in px of both + and negavtive
      growth: 80,
      // step size for the noise
      // speed
      step: 0.01,
      // Number of lines
      rows: 10,
      // The difference in noise between lines
      lineDiff: 0.15,
      // The difference in segments I think
      curveDiff: 0.50,
      lineWidth: 1,
      lineColor: colors.dvpWhite,
      bgColor: colors.dvpDark,
      // The total xOffset that will be used to create
      // visual persective.
      perspectiveOffset: 100,
    };
  }

  return {
    // Number of curve segments in x
    segments: 20,
    // Max growth in px of both + and negavtive
    growth: 90,
    // step size for the noise
    // speed
    step: 0.01,
    // Number of lines
    rows: 20,
    // The difference in noise between lines
    lineDiff: 0.15,
    // The difference in segments I think
    curveDiff: 0.50,
    lineWidth: 1,
    lineColor: colors.dvpWhite,
    bgColor: colors.dvpDark,
    // The total xOffset that will be used to create
    // visual persective.
    perspectiveOffset: 100,
  };
};

export default staticProps;
