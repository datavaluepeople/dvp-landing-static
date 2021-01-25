/**
 * Canvas and context height and width
 *
 */
import './hidpi-canvas.js';

const getPixelRatio = (window, context) => {
  const backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;

  return (window.devicePixelRatio || 1) / backingStore;
};

const getCanvasAndContext = (canvasRef, window, staticProps) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const dpr = getPixelRatio(window, context);
  const computedStyle = window.getComputedStyle(canvas);
  const canvasComputedWidth = computedStyle.getPropertyValue('width');
  const canvasWidthProcessed = parseFloat(canvasComputedWidth.slice(0, -2));
  const canvasComputedHeight = computedStyle.getPropertyValue('height');
  const canvasHeightProcessed = parseFloat(canvasComputedHeight.slice(0, -2));
  const canvasWidth = canvasWidthProcessed * dpr;
  const canvasHeight = canvasHeightProcessed * dpr;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  return {
    canvas: canvas,
    context: context,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    canvasComputedWidth: canvasComputedWidth,
    canvasComputedHeight: canvasComputedHeight,
    canvasWidthProcessed: canvasWidthProcessed,
    canvasHeightProcessed: canvasHeightProcessed,
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    computedDevicePixelRatio: dpr,
  };
};


export default getCanvasAndContext;
