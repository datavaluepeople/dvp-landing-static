/* Taken from
 * https://codepen.io/FabioG/pen/VmOYJz
 * https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
 * https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
 */
import React, {useRef, useEffect} from 'react';

import colors from '../../styles/colors.scss';
import styles from './wave.module.scss';

import wavePathGenerator from './wave-path-generator.js';

// Perlin noise function creted by Banksean
// https://gist.github.com/banksean/304522
/* eslint-disable */
const ClassicalNoise = function(a){void 0==a&&(a=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var b=0;b<256;b++)this.p[b]=Math.floor(256*a.random());this.perm=[];for(var b=0;b<512;b++)this.perm[b]=this.p[255&b]};ClassicalNoise.prototype.dot=function(a,b,c,d){return a[0]*b+a[1]*c+a[2]*d},ClassicalNoise.prototype.mix=function(a,b,c){return(1-c)*a+c*b},ClassicalNoise.prototype.fade=function(a){return a*a*a*(a*(6*a-15)+10)},ClassicalNoise.prototype.noise=function(a,b,c){var d=Math.floor(a),e=Math.floor(b),f=Math.floor(c);a-=d,b-=e,c-=f,d&=255,e&=255,f&=255;var g=this.perm[d+this.perm[e+this.perm[f]]]%12,h=this.perm[d+this.perm[e+this.perm[f+1]]]%12,i=this.perm[d+this.perm[e+1+this.perm[f]]]%12,j=this.perm[d+this.perm[e+1+this.perm[f+1]]]%12,k=this.perm[d+1+this.perm[e+this.perm[f]]]%12,l=this.perm[d+1+this.perm[e+this.perm[f+1]]]%12,m=this.perm[d+1+this.perm[e+1+this.perm[f]]]%12,n=this.perm[d+1+this.perm[e+1+this.perm[f+1]]]%12,o=this.dot(this.grad3[g],a,b,c),p=this.dot(this.grad3[k],a-1,b,c),q=this.dot(this.grad3[i],a,b-1,c),r=this.dot(this.grad3[m],a-1,b-1,c),s=this.dot(this.grad3[h],a,b,c-1),t=this.dot(this.grad3[l],a-1,b,c-1),u=this.dot(this.grad3[j],a,b-1,c-1),v=this.dot(this.grad3[n],a-1,b-1,c-1),w=this.fade(a),x=this.fade(b),y=this.fade(c),z=this.mix(o,p,w),A=this.mix(s,t,w),B=this.mix(q,r,w),C=this.mix(u,v,w),D=this.mix(z,B,x),E=this.mix(A,C,x),F=this.mix(D,E,y);return F};
/* eslint-enable */

const iterate = (
    timeoutRef, stepNumber, segmentSize, noiseObj, context, canvas, effectProps,
) => {
  clearCanvas(context, canvas, effectProps);
  for (let i = 1; i <= Math.floor(effectProps.rows); i++) {
    drawCurve(
        stepNumber, segmentSize, noiseObj, context, canvas, effectProps, i,
    );
  }
  const newStepNumber = stepNumber + effectProps.step;
  timeoutRef.push(
      setTimeout(function() {
        iterate(
            timeoutRef,
            newStepNumber,
            segmentSize, noiseObj, context, canvas, effectProps,
        );
      }, effectProps.milSecBetweenFrames),
  );
};


const clearCanvas = (context, canvas, effectProps) => {
  context.save();
  if (effectProps.bgColor) {
    context.fillStyle = effectProps.bgColor;
  }
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
};

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
};

const drawCurve = (
    stepNumber, segmentSize, noiseObj, context, canvas, effectProps, row,
) => {
  context.save();
  context.strokeStyle = effectProps.lineColor;
  context.lineWidth = effectProps.lineWidth;
  context.beginPath();
  const path = wavePathGenerator(
      stepNumber, segmentSize, noiseObj, context, canvas, effectProps, row,
  );
  context.stroke(path);
  context.restore();
};

const calculateWidth = (window) => {
  return window.innerWidth;
};

const calculateHeight = (window) => {
  return '400';
};

const Wave = () => {
  const canvasRef = useRef(null);
  const effectProps = {
    // Number of curve segments in x
    segments: 15,
    // Max growth in px of both + and negavtive
    growth: 80,
    // Not sure
    step: 0.03,
    // Number of lines
    rows: 30,
    // The difference in noise between lines
    lineDiff: 0.14,
    // The difference in segments I think
    curveDiff: 0.40,
    lineWidth: 1,
    lineColor: colors.dvpWhite,
    bgColor: colors.dvpDark,
    milSecBetweenFrames: 80,
  };
  let timeoutRef = [];
  const redraw = () => {
    if (timeoutRef.length > 0) {
      console.log(timeoutRef);
      timeoutRef.map((key, timeout) => {
        clearTimeout(timeout);
      });
      timeoutRef = [];
    }
    const canvas = canvasRef.current;
    console.log('redraw');
    const context = canvas.getContext('2d');
    const noiseObj = new ClassicalNoise();
    canvas.height = calculateHeight(window);
    canvas.width = calculateWidth(window);
    console.log(canvas.height);
    console.log(canvas.width);
    const segmentSize = distance(
        0,
        canvas.height / 2,
        canvas.width,
        canvas.height /2,
    ) / effectProps.segments;
    iterate(timeoutRef, 0, segmentSize, noiseObj, context, canvas, effectProps);
  };


  useEffect(() => {
    console.log('use Effect');
    redraw();
    window.addEventListener('resize', redraw);
    return () => {
      window.removeEventListener('resize', redraw);
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
