/**
 * This is taken from the polyfill
 * It does not include the HTMLCanvasElementFix as this does
 * not update on window resize.
 *
 * Also there is an if addition so it does not rerun on development.
 * Using the window.dvpAllReadyFixed boolean.
 *
 * There is also an addition so that the script is not run at build time.
 *
 * HiDPI Canvas Polyfill (1.0.10)
 *
 * Author: Jonathan D. Johnson (http://jondavidjohn.com)
 * Homepage: https://github.com/jondavidjohn/hidpi-canvas-polyfill
 * Issue Tracker: https://github.com/jondavidjohn/hidpi-canvas-polyfill/issues
 * License: Apache-2.0
*/
/* eslint-disable */
const hidpiCanvas = function(prototype) {

	var pixelRatio = (function() {
			var canvas = document.createElement('canvas'),
					context = canvas.getContext('2d'),
					backingStore = context.backingStorePixelRatio ||
						context.webkitBackingStorePixelRatio ||
						context.mozBackingStorePixelRatio ||
						context.msBackingStorePixelRatio ||
						context.oBackingStorePixelRatio ||
						context.backingStorePixelRatio || 1;

			return (window.devicePixelRatio || 1) / backingStore;
		})(),

		forEach = function(obj, func) {
			for (var p in obj) {
				if (obj.hasOwnProperty(p)) {
					func(obj[p], p);
				}
			}
		},

		ratioArgs = {
			'fillRect': 'all',
			'clearRect': 'all',
			'strokeRect': 'all',
			'moveTo': 'all',
			'lineTo': 'all',
			'arc': [0,1,2],
			'arcTo': 'all',
			'bezierCurveTo': 'all',
			'isPointinPath': 'all',
			'isPointinStroke': 'all',
			'quadraticCurveTo': 'all',
			'rect': 'all',
			'translate': 'all',
			'createRadialGradient': 'all',
			'createLinearGradient': 'all'
		};

  if (pixelRatio === 1 || window.dvpAllReadyFixed) return;

	forEach(ratioArgs, function(value, key) {
		prototype[key] = (function(_super) {
			return function() {
				var i, len,
					args = Array.prototype.slice.call(arguments);

				if (value === 'all') {
					args = args.map(function(a) {
						return a * pixelRatio;
					});
				}
				else if (Array.isArray(value)) {
					for (i = 0, len = value.length; i < len; i++) {
						args[value[i]] *= pixelRatio;
					}
				}

				return _super.apply(this, args);
			};
		})(prototype[key]);
	});

	 // Stroke lineWidth adjustment
	prototype.stroke = (function(_super) {
		return function() {
			this.lineWidth *= pixelRatio;
			_super.apply(this, arguments);
			this.lineWidth /= pixelRatio;
		};
	})(prototype.stroke);

	// Text
	//
	prototype.fillText = (function(_super) {
		return function() {
			var args = Array.prototype.slice.call(arguments);

			args[1] *= pixelRatio; // x
			args[2] *= pixelRatio; // y

			this.font = this.font.replace(
				/(\d+)(px|em|rem|pt)/g,
				function(w, m, u) {
					return (m * pixelRatio) + u;
				}
			);

			_super.apply(this, args);

			this.font = this.font.replace(
				/(\d+)(px|em|rem|pt)/g,
				function(w, m, u) {
					return (m / pixelRatio) + u;
				}
			);
		};
	})(prototype.fillText);

	prototype.strokeText = (function(_super) {
		return function() {
			var args = Array.prototype.slice.call(arguments);

			args[1] *= pixelRatio; // x
			args[2] *= pixelRatio; // y

			this.font = this.font.replace(
				/(\d+)(px|em|rem|pt)/g,
				function(w, m, u) {
					return (m * pixelRatio) + u;
				}
			);

			_super.apply(this, args);

			this.font = this.font.replace(
				/(\d+)(px|em|rem|pt)/g,
				function(w, m, u) {
					return (m / pixelRatio) + u;
				}
			);
		};
	})(prototype.strokeText);
  window.dvpAllReadyFixed = true;
};

if(typeof window !== 'undefined' && window) {
  hidpiCanvas(window.CanvasRenderingContext2D.prototype);
}

/* eslint-enable */
