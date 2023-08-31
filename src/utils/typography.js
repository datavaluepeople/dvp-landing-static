import Typography from 'typography';
import * as scssvariables from '../styles/variables.module.scss';


const typography = new Typography({
  baseFontSize: scssvariables.baseFontSize,
  baseLineHeight: parseFloat(scssvariables.baseLineHeight),
  headerFontFamily: [
    'camptonbold_demo',
    'sans-serif',
  ],
  // Since we are using a bold font
  headerWeight: 'normal',
  bodyFontFamily: ['Raleway', 'serif'],
});

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
