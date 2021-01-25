/**
 * Canvas and context height and width
 *
 */

/*
 * From blog post
 * https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
 */
const getCanvasAndContext = (canvasRef, window, staticProps) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const computedStyle = window.getComputedStyle(canvas);
  const canvasComputedWidth = computedStyle.getPropertyValue('width');
  const canvasWidthProcessed = parseFloat(canvasComputedWidth.slice(0, -2));
  const canvasComputedHeight = computedStyle.getPropertyValue('height');
  const canvasHeightProcessed = parseFloat(canvasComputedHeight.slice(0, -2));
  const dpr = window.devicePixelRatio;
  const width = canvasWidthProcessed * dpr;
  const height = canvasHeightProcessed * dpr;
  canvas.width = width;
  canvas.height = height;
  return {
    canvas: canvas,
    context: context,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    canvasComputedWidth: canvasComputedWidth,
    canvasComputedHeight: canvasComputedHeight,
    canvasWidthProcessed: canvasWidthProcessed,
    canvasHeightProcessed: canvasHeightProcessed,
    canvasWidth: width,
    canvasHeight: height,
    computedDevicePixelRatio: dpr,
  };
};


export default getCanvasAndContext;
