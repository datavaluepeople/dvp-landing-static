/*
 * WaveAnimator
 * Loop animator that can be stopped, started and reinitialised
 */
import {drawCurve, clearCanvas} from './wave-draw.js';
import ClassicalNoise from './classical-noise.js';
import staticProps from './static-props.js';
import getCanvasAndContext from './canvas-context.js';
import sizesCreate from './sizes.js';

/**
* Represents a WaveAnimator.
*/
class WaveAnimator {
  /**
  * @constructor
  * @param {canvasRef} canvasRef - The ref to the canvas
  * @param {string} staticProps - StaticProps
  */
  constructor() {
    this.objectRef = null;
    this.canvasRef = null;
    this.staticProps = {};
    this.viewProps = {};
    this.stop = true;
    this.currentReference = false;
    this.noiseStep = 0;
    this.noiseStepMax = Number.MAX_SAFE_INTEGER;
    this.noiseObj = new ClassicalNoise();
  }

  /**
  * init
  * @param {canvasRef} canvasRef - The ref to the canvas
  * @param {string} staticProps - StaticProps
  */
  init(canvasRef, staticProps) {
    this.canvasRef = canvasRef;
    this.staticProps = staticProps;
  }

  /**
  * Reinit the view props
  * @param {object} window - window
  */
  reInitProps(window) {
    this.staticProps = staticProps(window);
    const canvasProps = getCanvasAndContext(
        this.canvasRef,
        window,
        staticProps,
    );

    const sizes = sizesCreate(
        canvasProps.canvasWidth,
        canvasProps.canvasHeight,
        this.staticProps,
    );
    const viewProps = {
      noiseObj: this.noiseObj,
      sizes: sizes,
    };
    this.viewProps = {...viewProps, ...canvasProps};
    window.dvpViewProps = this.viewProps;
  }

  /**
  * StartLoop if needed
  */
  startLoop() {
    this.stop = false;
    if (!this.currentReference) {
      this.__iterate();
    }
  }

  /**
  * StopLoop if needed
  */
  stopLoop() {
    this.stop = true;
    this.__cancel();
  }

  /**
   * Cancel the iteration
   */
  __cancel() {
    if (!this.currentReference) {
      cancelAnimationFrame(this.currentReference);
      this.currentReference = false;
    }
  }

  /**
  * Do an iteration loop
  */
  __iterate() {
    const that = this;
    that.__reDraw();
    if (!that.stop) {
      that.currentReference = requestAnimationFrame(
          that.__iterate.bind(this),
      );
    } else {
      that.__cancel();
    }
  }

  /**
  * Redraw
  */
  __reDraw() {
    clearCanvas(
        this.viewProps,
        this.staticProps,
    );
    for (let i = 1; i <= Math.floor(this.staticProps.rows); i++) {
      drawCurve(
          i,
          this.viewProps,
          this.staticProps,
          this.noiseStep,
      );
    }
    if (this.noiseStep >= this.noiseStepMax) {
      this.noiseStep = 0;
    } else {
      this.noiseStep = this.noiseStep + this.staticProps.step;
    }
  }
};


export default WaveAnimator;
