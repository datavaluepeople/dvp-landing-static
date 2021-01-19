/*
 * WaveAnimator
 * Loop animator that can be stopped, started and reinitialised
 */
import wavePathGenerator from './wave-path-generator.js';
import ClassicalNoise from './classical-noise.js';

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
};

const clearCanvas = (viewProps, staticProps) => {
  viewProps.context.save();
  if (staticProps.bgColor) {
    viewProps.context.fillStyle = staticProps.bgColor;
  }
  viewProps.context.fillRect(
      0, 0, viewProps.canvas.width, viewProps.canvas.height);
  viewProps.context.restore();
};

const drawCurve = (
    row, viewProps, staticProps,
) => {
  const context = viewProps.context;
  context.save();
  context.strokeStyle = staticProps.lineColor;
  context.lineWidth = staticProps.lineWidth;
  context.beginPath();
  const path = wavePathGenerator(
      row,
      viewProps,
      staticProps,
  );
  context.stroke(path);
  context.restore();
};

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
  * @param {number} width - width of canvas
  * @param {number} height - height
  */
  reInitViewProps(width, height) {
    const segmentSize = distance(
        0,
        height / 2,
        width,
        height /2,
    ) / this.staticProps.segments;
    const canvas = this.canvasRef.current;
    const noiseObj = new ClassicalNoise();
    const viewProps = {
      noiseStep: 0,
      canvas: canvas,
      context: canvas.getContext('2d'),
      noiseObj: noiseObj,
      segmentSize: segmentSize,
    };
    viewProps.canvas.width = width;
    viewProps.canvas.height = height;
    this.viewProps = viewProps;
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
      );
    }
    this.viewProps.noiseStep = this.viewProps.noiseStep + this.staticProps.step;
  }
};


export default WaveAnimator;
