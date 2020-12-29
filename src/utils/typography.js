import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
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
