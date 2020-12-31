import Typography from 'typography';
import styles from '../styles/base_values.scss';

const typography = new Typography({
  baseFontSize: styles.baseFontSize,
  baseLineHeight: styles.baseLineHeight,
  headerFontFamily: [
    'camptonbold_demo',
    'sans-serif',
  ],
  bodyFontFamily: ['Raleway', 'serif'],
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '400',
        '500',
        '700',
      ],
    },
  ],
});

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
