/* Taken from
 * https://codepen.io/FabioG/pen/VmOYJz
 * https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
 * https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
 */
import React, {useRef, useEffect} from 'react';

import styles from './wave.module.scss';

import WaveAnimator from './wave-animator.js';

const Wave = () => {
  const objectRef = useRef();
  const canvasRef = useRef(null);
  const waveAnimator = new WaveAnimator();
  waveAnimator.init(canvasRef);
  objectRef.current = waveAnimator;
  const redraw = () => {
    waveAnimator.reInitProps(window);
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
