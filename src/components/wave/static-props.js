/**
 * staticProps calculate
 */
import colors from '../../styles/colors.scss';

const staticProps = (width, height) => {
  return {
    // Number of curve segments in x
    segments: 15,
    // Max growth in px of both + and negavtive
    growth: 80,
    // step size for the noise
    // speed
    step: 0.01,
    // Number of lines
    rows: 30,
    // The difference in noise between lines
    lineDiff: 0.14,
    // The difference in segments I think
    curveDiff: 0.50,
    lineWidth: 1,
    lineColor: colors.dvpWhite,
    bgColor: colors.dvpDark,
  };
};

export default staticProps;
