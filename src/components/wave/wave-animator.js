/*
 * WaveAnimator
 * Loop animator that can be stopped, started and reinitialised
 */
import wavePathGenerator from './wave-path-generator.js';

// Perlin noise function creted by Banksean
// https://gist.github.com/banksean/304522
/* eslint-disable */
const ClassicalNoise = function(a){void 0==a&&(a=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var b=0;b<256;b++)this.p[b]=Math.floor(256*a.random());this.perm=[];for(var b=0;b<512;b++)this.perm[b]=this.p[255&b]};ClassicalNoise.prototype.dot=function(a,b,c,d){return a[0]*b+a[1]*c+a[2]*d},ClassicalNoise.prototype.mix=function(a,b,c){return(1-c)*a+c*b},ClassicalNoise.prototype.fade=function(a){return a*a*a*(a*(6*a-15)+10)},ClassicalNoise.prototype.noise=function(a,b,c){var d=Math.floor(a),e=Math.floor(b),f=Math.floor(c);a-=d,b-=e,c-=f,d&=255,e&=255,f&=255;var g=this.perm[d+this.perm[e+this.perm[f]]]%12,h=this.perm[d+this.perm[e+this.perm[f+1]]]%12,i=this.perm[d+this.perm[e+1+this.perm[f]]]%12,j=this.perm[d+this.perm[e+1+this.perm[f+1]]]%12,k=this.perm[d+1+this.perm[e+this.perm[f]]]%12,l=this.perm[d+1+this.perm[e+this.perm[f+1]]]%12,m=this.perm[d+1+this.perm[e+1+this.perm[f]]]%12,n=this.perm[d+1+this.perm[e+1+this.perm[f+1]]]%12,o=this.dot(this.grad3[g],a,b,c),p=this.dot(this.grad3[k],a-1,b,c),q=this.dot(this.grad3[i],a,b-1,c),r=this.dot(this.grad3[m],a-1,b-1,c),s=this.dot(this.grad3[h],a,b,c-1),t=this.dot(this.grad3[l],a-1,b,c-1),u=this.dot(this.grad3[j],a,b-1,c-1),v=this.dot(this.grad3[n],a-1,b-1,c-1),w=this.fade(a),x=this.fade(b),y=this.fade(c),z=this.mix(o,p,w),A=this.mix(s,t,w),B=this.mix(q,r,w),C=this.mix(u,v,w),D=this.mix(z,B,x),E=this.mix(A,C,x),F=this.mix(D,E,y);return F};
/* eslint-enable */

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
