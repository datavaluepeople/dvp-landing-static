/* Taken from
 * https://codepen.io/FabioG/pen/VmOYJz
 * https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
 * https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
 */
import React, {useRef, useEffect} from 'react';

import colors from '../../styles/colors.scss';
import styles from './wave.module.scss';

import WaveAnimator from './wave-animator.js';

const calculateWidth = (window) => {
  return window.innerWidth;
};

const calculateHeight = (window) => {
  return '400';
};


const Wave = () => {
  const objectRef = useRef();
  const canvasRef = useRef(null);
  const effectProps = {
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
  const waveAnimator = new WaveAnimator();
  waveAnimator.init(canvasRef, effectProps);
  objectRef.current = waveAnimator;
  const redraw = () => {
    const width = calculateWidth(window);
    const height = calculateHeight(window);
    waveAnimator.reInitViewProps(width, height);
    waveAnimator.startLoop();
  };


  useEffect(() => {
    redraw();
    window.addEventListener('resize', redraw);
    return () => {
      window.removeEventListener('resize', redraw);
      objectRef.current.stopLoop();
    };
  });

  return (
    <div className={styles.waveImgContainer}>
      <canvas
        ref={canvasRef}
      />
    </div>
  );
};

export default Wave;
