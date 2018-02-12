/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);


$(() => {
  // Create the application
  window.app = new __WEBPACK_IMPORTED_MODULE_0__app_js__["a" /* default */]();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_resolution_resolution_js__ = __webpack_require__(2);

window.Resolution = __WEBPACK_IMPORTED_MODULE_0__components_resolution_resolution_js__["a" /* default */];

/**
 * Main application code for one view
 */
class App {
  /**
   * Construct the view from components
   */
  constructor() {
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Resolution component
 */
class Resolution {
  /**
   * Construct a resolution on the page
   * @param {String} container ID of container
   * @param {String} goal Title of resolution
   * @param {Boolean} progressBar True if progressbar should be rendered
   * @param {Number} progressGoal Quantity for resolution
   * @param {String} unit Type of thing being measured
   */
  constructor(opts) {
    this._opts = Object.assign({
      container : "body",
      goal : "Do a thing.",
      progressBar : false,
      progressGoal : 100,
      unit : "%"
    }, opts);

    this._element = $(`
      <li class="resolution">
        ${this._opts.goal}
        ${this._opts.progressBar ? `
          <div class="progress progress-striped">
            <div class="progress-bar" style="width:0%">
              0 ${this._opts.unit}
            </div>
          </div>
        ` : ""}
      </li>
    `);

    $(`#${this._opts.container}`).append(this._element);
  }

  /**
   * Complete the resolution
   */
  complete() {
    this._element.addClass("done");
  }

  /**
   * Set the progress bar
   * @param {Number} value Value to set
   * @throws {Error} Throws error if no progress bar is found
   */
  setProgress(value = 0) {
    if (this._opts.progressBar) {
      const progress = Math.round(100 * value / this._opts.progressGoal);

      this._element
        .find(".progress-bar")
        .css("width", `${progress}%`)
        .text(`${value} ${this._opts.unit}`);
    } else {
      throw new Error("No progress bar in this resolution.");
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Resolution;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map