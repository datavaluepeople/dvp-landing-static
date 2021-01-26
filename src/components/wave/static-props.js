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
    growth: 60,
    // Step size for the noise, effusively speed
    step: 0.002,
    // Number of lines
    rows: 90,
    // Line Width, [1,10]
    // Value below 1 causes rendering imperfections
    lineWidth: 1,
    // Variability in waves across y dimension, [0,1]
    // At 1 get fully independent rows (lines)
    lineDiff: 0.07,
    // Variability in waves across x dimension, [0,1]
    // At 0 get "planar" waves
    curveDiff: 0.5,
    // Scaler that will be used to position
    // x1 of the curve
    // Using anything but 0.5 gives non-symmetrical waves
    x1OffsetScaler: 0.5,
    // The total xOffset that will be used to create
    // visual persective.
    perspectiveOffset: 200,
    // Line color, note that color and alpha can make
    // unexpected to changes to line rendering
    lineColor: colors.dvpWave,
    // Background color for the canvas
    bgColor: colors.dvpDark,
  };
  return shared
};

export default staticProps;
