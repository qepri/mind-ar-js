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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/controller.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-any-array/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-any-array/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const toString = Object.prototype.toString;

function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}

module.exports = isAnyArray;


/***/ }),

/***/ "./node_modules/ml-array-max/lib-es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-array-max/lib-es6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "./node_modules/is-any-array/src/index.js");
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function max(input) {
  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var maxValue = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] > maxValue) maxValue = input[i];
  }

  return maxValue;
}

/* harmony default export */ __webpack_exports__["default"] = (max);


/***/ }),

/***/ "./node_modules/ml-array-min/lib-es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-array-min/lib-es6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "./node_modules/is-any-array/src/index.js");
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function min(input) {
  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var minValue = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] < minValue) minValue = input[i];
  }

  return minValue;
}

/* harmony default export */ __webpack_exports__["default"] = (min);


/***/ }),

/***/ "./node_modules/ml-array-rescale/lib-es6/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ml-array-rescale/lib-es6/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "./node_modules/is-any-array/src/index.js");
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ml_array_max__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-array-max */ "./node_modules/ml-array-max/lib-es6/index.js");
/* harmony import */ var ml_array_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml-array-min */ "./node_modules/ml-array-min/lib-es6/index.js");




/**
 *
 * @param {Array} input
 * @param {object} [options={}]
 * @param {Array} [options.output=[]] specify the output array, can be the input array for in place modification
 */

function rescale(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  } else if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var output;

  if (options.output !== undefined) {
    if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(options.output)) {
      throw new TypeError('output option must be an array if specified');
    }

    output = options.output;
  } else {
    output = new Array(input.length);
  }

  var currentMin = Object(ml_array_min__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
  var currentMax = Object(ml_array_max__WEBPACK_IMPORTED_MODULE_1__["default"])(input);

  if (currentMin === currentMax) {
    throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
  }

  var _options$min = options.min,
      minValue = _options$min === void 0 ? options.autoMinMax ? currentMin : 0 : _options$min,
      _options$max = options.max,
      maxValue = _options$max === void 0 ? options.autoMinMax ? currentMax : 1 : _options$max;

  if (minValue >= maxValue) {
    throw new RangeError('min option must be smaller than max option');
  }

  var factor = (maxValue - minValue) / (currentMax - currentMin);

  for (var i = 0; i < input.length; i++) {
    output[i] = (input[i] - currentMin) * factor + minValue;
  }

  return output;
}

/* harmony default export */ __webpack_exports__["default"] = (rescale);


/***/ }),

/***/ "./node_modules/ml-matrix/src/correlation.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/correlation.js ***!
  \***************************************************/
/*! exports provided: correlation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correlation", function() { return correlation; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");


function correlation(xMatrix, yMatrix = xMatrix, options = {}) {
  xMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](xMatrix);
  let yIsSame = false;
  if (
    typeof yMatrix === 'object' &&
    !_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(yMatrix) &&
    !Array.isArray(yMatrix)
  ) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](yMatrix);
  }
  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }

  const { center = true, scale = true } = options;
  if (center) {
    xMatrix.center('column');
    if (!yIsSame) {
      yMatrix.center('column');
    }
  }
  if (scale) {
    xMatrix.scale('column');
    if (!yIsSame) {
      yMatrix.scale('column');
    }
  }

  const sdx = xMatrix.standardDeviation('column', { unbiased: true });
  const sdy = yIsSame
    ? sdx
    : yMatrix.standardDeviation('column', { unbiased: true });

  const corr = xMatrix.transpose().mmul(yMatrix);
  for (let i = 0; i < corr.rows; i++) {
    for (let j = 0; j < corr.columns; j++) {
      corr.set(
        i,
        j,
        corr.get(i, j) * (1 / (sdx[i] * sdy[j])) * (1 / (xMatrix.rows - 1)),
      );
    }
  }
  return corr;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/covariance.js":
/*!**************************************************!*\
  !*** ./node_modules/ml-matrix/src/covariance.js ***!
  \**************************************************/
/*! exports provided: covariance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covariance", function() { return covariance; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");


function covariance(xMatrix, yMatrix = xMatrix, options = {}) {
  xMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](xMatrix);
  let yIsSame = false;
  if (
    typeof yMatrix === 'object' &&
    !_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(yMatrix) &&
    !Array.isArray(yMatrix)
  ) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](yMatrix);
  }
  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }
  const { center = true } = options;
  if (center) {
    xMatrix = xMatrix.center('column');
    if (!yIsSame) {
      yMatrix = yMatrix.center('column');
    }
  }
  const cov = xMatrix.transpose().mmul(yMatrix);
  for (let i = 0; i < cov.rows; i++) {
    for (let j = 0; j < cov.columns; j++) {
      cov.set(i, j, cov.get(i, j) * (1 / (xMatrix.rows - 1)));
    }
  }
  return cov;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/cholesky.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/cholesky.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CholeskyDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class CholeskyDecomposition {
  constructor(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);
    if (!value.isSymmetric()) {
      throw new Error('Matrix is not symmetric');
    }

    let a = value;
    let dimension = a.rows;
    let l = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](dimension, dimension);
    let positiveDefinite = true;
    let i, j, k;

    for (j = 0; j < dimension; j++) {
      let d = 0;
      for (k = 0; k < j; k++) {
        let s = 0;
        for (i = 0; i < k; i++) {
          s += l.get(k, i) * l.get(j, i);
        }
        s = (a.get(j, k) - s) / l.get(k, k);
        l.set(j, k, s);
        d = d + s * s;
      }

      d = a.get(j, j) - d;

      positiveDefinite &= d > 0;
      l.set(j, j, Math.sqrt(Math.max(d, 0)));
      for (k = j + 1; k < dimension; k++) {
        l.set(j, k, 0);
      }
    }

    this.L = l;
    this.positiveDefinite = Boolean(positiveDefinite);
  }

  isPositiveDefinite() {
    return this.positiveDefinite;
  }

  solve(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let l = this.L;
    let dimension = l.rows;

    if (value.rows !== dimension) {
      throw new Error('Matrix dimensions do not match');
    }
    if (this.isPositiveDefinite() === false) {
      throw new Error('Matrix is not positive definite');
    }

    let count = value.columns;
    let B = value.clone();
    let i, j, k;

    for (k = 0; k < dimension; k++) {
      for (j = 0; j < count; j++) {
        for (i = 0; i < k; i++) {
          B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(k, i));
        }
        B.set(k, j, B.get(k, j) / l.get(k, k));
      }
    }

    for (k = dimension - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        for (i = k + 1; i < dimension; i++) {
          B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(i, k));
        }
        B.set(k, j, B.get(k, j) / l.get(k, k));
      }
    }

    return B;
  }

  get lowerTriangularMatrix() {
    return this.L;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/evd.js":
/*!**********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/evd.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EigenvalueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/dc/util.js");





class EigenvalueDecomposition {
  constructor(matrix, options = {}) {
    const { assumeSymmetric = false } = options;

    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
    if (!matrix.isSquare()) {
      throw new Error('Matrix is not a square matrix');
    }

    let n = matrix.columns;
    let V = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let d = new Float64Array(n);
    let e = new Float64Array(n);
    let value = matrix;
    let i, j;

    let isSymmetric = false;
    if (assumeSymmetric) {
      isSymmetric = true;
    } else {
      isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          V.set(i, j, value.get(i, j));
        }
      }
      tred2(n, e, d, V);
      tql2(n, e, d, V);
    } else {
      let H = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
      let ort = new Float64Array(n);
      for (j = 0; j < n; j++) {
        for (i = 0; i < n; i++) {
          H.set(i, j, value.get(i, j));
        }
      }
      orthes(n, H, ort, V);
      hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
  }

  get realEigenvalues() {
    return Array.from(this.d);
  }

  get imaginaryEigenvalues() {
    return Array.from(this.e);
  }

  get eigenvectorMatrix() {
    return this.V;
  }

  get diagonalMatrix() {
    let n = this.n;
    let e = this.e;
    let d = this.d;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let i, j;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        X.set(i, j, 0);
      }
      X.set(i, i, d[i]);
      if (e[i] > 0) {
        X.set(i, i + 1, e[i]);
      } else if (e[i] < 0) {
        X.set(i, i - 1, e[i]);
      }
    }
    return X;
  }
}

function tred2(n, e, d, V) {
  let f, g, h, i, j, k, hh, scale;

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
  }

  for (i = n - 1; i > 0; i--) {
    scale = 0;
    h = 0;
    for (k = 0; k < i; k++) {
      scale = scale + Math.abs(d[k]);
    }

    if (scale === 0) {
      e[i] = d[i - 1];
      for (j = 0; j < i; j++) {
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
        V.set(j, i, 0);
      }
    } else {
      for (k = 0; k < i; k++) {
        d[k] /= scale;
        h += d[k] * d[k];
      }

      f = d[i - 1];
      g = Math.sqrt(h);
      if (f > 0) {
        g = -g;
      }

      e[i] = scale * g;
      h = h - f * g;
      d[i - 1] = f - g;
      for (j = 0; j < i; j++) {
        e[j] = 0;
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        V.set(j, i, f);
        g = e[j] + V.get(j, j) * f;
        for (k = j + 1; k <= i - 1; k++) {
          g += V.get(k, j) * d[k];
          e[k] += V.get(k, j) * f;
        }
        e[j] = g;
      }

      f = 0;
      for (j = 0; j < i; j++) {
        e[j] /= h;
        f += e[j] * d[j];
      }

      hh = f / (h + h);
      for (j = 0; j < i; j++) {
        e[j] -= hh * d[j];
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        g = e[j];
        for (k = j; k <= i - 1; k++) {
          V.set(k, j, V.get(k, j) - (f * e[k] + g * d[k]));
        }
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
      }
    }
    d[i] = h;
  }

  for (i = 0; i < n - 1; i++) {
    V.set(n - 1, i, V.get(i, i));
    V.set(i, i, 1);
    h = d[i + 1];
    if (h !== 0) {
      for (k = 0; k <= i; k++) {
        d[k] = V.get(k, i + 1) / h;
      }

      for (j = 0; j <= i; j++) {
        g = 0;
        for (k = 0; k <= i; k++) {
          g += V.get(k, i + 1) * V.get(k, j);
        }
        for (k = 0; k <= i; k++) {
          V.set(k, j, V.get(k, j) - g * d[k]);
        }
      }
    }

    for (k = 0; k <= i; k++) {
      V.set(k, i + 1, 0);
    }
  }

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
    V.set(n - 1, j, 0);
  }

  V.set(n - 1, n - 1, 1);
  e[0] = 0;
}

function tql2(n, e, d, V) {
  let g, h, i, j, k, l, m, p, r, dl1, c, c2, c3, el1, s, s2, iter;

  for (i = 1; i < n; i++) {
    e[i - 1] = e[i];
  }

  e[n - 1] = 0;

  let f = 0;
  let tst1 = 0;
  let eps = Number.EPSILON;

  for (l = 0; l < n; l++) {
    tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
    m = l;
    while (m < n) {
      if (Math.abs(e[m]) <= eps * tst1) {
        break;
      }
      m++;
    }

    if (m > l) {
      iter = 0;
      do {
        iter = iter + 1;

        g = d[l];
        p = (d[l + 1] - g) / (2 * e[l]);
        r = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(p, 1);
        if (p < 0) {
          r = -r;
        }

        d[l] = e[l] / (p + r);
        d[l + 1] = e[l] * (p + r);
        dl1 = d[l + 1];
        h = g - d[l];
        for (i = l + 2; i < n; i++) {
          d[i] -= h;
        }

        f = f + h;

        p = d[m];
        c = 1;
        c2 = c;
        c3 = c;
        el1 = e[l + 1];
        s = 0;
        s2 = 0;
        for (i = m - 1; i >= l; i--) {
          c3 = c2;
          c2 = c;
          s2 = s;
          g = c * e[i];
          h = c * p;
          r = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(p, e[i]);
          e[i + 1] = s * r;
          s = e[i] / r;
          c = p / r;
          p = c * d[i] - s * g;
          d[i + 1] = h + s * (c * g + s * d[i]);

          for (k = 0; k < n; k++) {
            h = V.get(k, i + 1);
            V.set(k, i + 1, s * V.get(k, i) + c * h);
            V.set(k, i, c * V.get(k, i) - s * h);
          }
        }

        p = (-s * s2 * c3 * el1 * e[l]) / dl1;
        e[l] = s * p;
        d[l] = c * p;
      } while (Math.abs(e[l]) > eps * tst1);
    }
    d[l] = d[l] + f;
    e[l] = 0;
  }

  for (i = 0; i < n - 1; i++) {
    k = i;
    p = d[i];
    for (j = i + 1; j < n; j++) {
      if (d[j] < p) {
        k = j;
        p = d[j];
      }
    }

    if (k !== i) {
      d[k] = d[i];
      d[i] = p;
      for (j = 0; j < n; j++) {
        p = V.get(j, i);
        V.set(j, i, V.get(j, k));
        V.set(j, k, p);
      }
    }
  }
}

function orthes(n, H, ort, V) {
  let low = 0;
  let high = n - 1;
  let f, g, h, i, j, m;
  let scale;

  for (m = low + 1; m <= high - 1; m++) {
    scale = 0;
    for (i = m; i <= high; i++) {
      scale = scale + Math.abs(H.get(i, m - 1));
    }

    if (scale !== 0) {
      h = 0;
      for (i = high; i >= m; i--) {
        ort[i] = H.get(i, m - 1) / scale;
        h += ort[i] * ort[i];
      }

      g = Math.sqrt(h);
      if (ort[m] > 0) {
        g = -g;
      }

      h = h - ort[m] * g;
      ort[m] = ort[m] - g;

      for (j = m; j < n; j++) {
        f = 0;
        for (i = high; i >= m; i--) {
          f += ort[i] * H.get(i, j);
        }

        f = f / h;
        for (i = m; i <= high; i++) {
          H.set(i, j, H.get(i, j) - f * ort[i]);
        }
      }

      for (i = 0; i <= high; i++) {
        f = 0;
        for (j = high; j >= m; j--) {
          f += ort[j] * H.get(i, j);
        }

        f = f / h;
        for (j = m; j <= high; j++) {
          H.set(i, j, H.get(i, j) - f * ort[j]);
        }
      }

      ort[m] = scale * ort[m];
      H.set(m, m - 1, scale * g);
    }
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      V.set(i, j, i === j ? 1 : 0);
    }
  }

  for (m = high - 1; m >= low + 1; m--) {
    if (H.get(m, m - 1) !== 0) {
      for (i = m + 1; i <= high; i++) {
        ort[i] = H.get(i, m - 1);
      }

      for (j = m; j <= high; j++) {
        g = 0;
        for (i = m; i <= high; i++) {
          g += ort[i] * V.get(i, j);
        }

        g = g / ort[m] / H.get(m, m - 1);
        for (i = m; i <= high; i++) {
          V.set(i, j, V.get(i, j) + g * ort[i]);
        }
      }
    }
  }
}

function hqr2(nn, e, d, V, H) {
  let n = nn - 1;
  let low = 0;
  let high = nn - 1;
  let eps = Number.EPSILON;
  let exshift = 0;
  let norm = 0;
  let p = 0;
  let q = 0;
  let r = 0;
  let s = 0;
  let z = 0;
  let iter = 0;
  let i, j, k, l, m, t, w, x, y;
  let ra, sa, vr, vi;
  let notlast, cdivres;

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      d[i] = H.get(i, i);
      e[i] = 0;
    }

    for (j = Math.max(i - 1, 0); j < nn; j++) {
      norm = norm + Math.abs(H.get(i, j));
    }
  }

  while (n >= low) {
    l = n;
    while (l > low) {
      s = Math.abs(H.get(l - 1, l - 1)) + Math.abs(H.get(l, l));
      if (s === 0) {
        s = norm;
      }
      if (Math.abs(H.get(l, l - 1)) < eps * s) {
        break;
      }
      l--;
    }

    if (l === n) {
      H.set(n, n, H.get(n, n) + exshift);
      d[n] = H.get(n, n);
      e[n] = 0;
      n--;
      iter = 0;
    } else if (l === n - 1) {
      w = H.get(n, n - 1) * H.get(n - 1, n);
      p = (H.get(n - 1, n - 1) - H.get(n, n)) / 2;
      q = p * p + w;
      z = Math.sqrt(Math.abs(q));
      H.set(n, n, H.get(n, n) + exshift);
      H.set(n - 1, n - 1, H.get(n - 1, n - 1) + exshift);
      x = H.get(n, n);

      if (q >= 0) {
        z = p >= 0 ? p + z : p - z;
        d[n - 1] = x + z;
        d[n] = d[n - 1];
        if (z !== 0) {
          d[n] = x - w / z;
        }
        e[n - 1] = 0;
        e[n] = 0;
        x = H.get(n, n - 1);
        s = Math.abs(x) + Math.abs(z);
        p = x / s;
        q = z / s;
        r = Math.sqrt(p * p + q * q);
        p = p / r;
        q = q / r;

        for (j = n - 1; j < nn; j++) {
          z = H.get(n - 1, j);
          H.set(n - 1, j, q * z + p * H.get(n, j));
          H.set(n, j, q * H.get(n, j) - p * z);
        }

        for (i = 0; i <= n; i++) {
          z = H.get(i, n - 1);
          H.set(i, n - 1, q * z + p * H.get(i, n));
          H.set(i, n, q * H.get(i, n) - p * z);
        }

        for (i = low; i <= high; i++) {
          z = V.get(i, n - 1);
          V.set(i, n - 1, q * z + p * V.get(i, n));
          V.set(i, n, q * V.get(i, n) - p * z);
        }
      } else {
        d[n - 1] = x + p;
        d[n] = x + p;
        e[n - 1] = z;
        e[n] = -z;
      }

      n = n - 2;
      iter = 0;
    } else {
      x = H.get(n, n);
      y = 0;
      w = 0;
      if (l < n) {
        y = H.get(n - 1, n - 1);
        w = H.get(n, n - 1) * H.get(n - 1, n);
      }

      if (iter === 10) {
        exshift += x;
        for (i = low; i <= n; i++) {
          H.set(i, i, H.get(i, i) - x);
        }
        s = Math.abs(H.get(n, n - 1)) + Math.abs(H.get(n - 1, n - 2));
        x = y = 0.75 * s;
        w = -0.4375 * s * s;
      }

      if (iter === 30) {
        s = (y - x) / 2;
        s = s * s + w;
        if (s > 0) {
          s = Math.sqrt(s);
          if (y < x) {
            s = -s;
          }
          s = x - w / ((y - x) / 2 + s);
          for (i = low; i <= n; i++) {
            H.set(i, i, H.get(i, i) - s);
          }
          exshift += s;
          x = y = w = 0.964;
        }
      }

      iter = iter + 1;

      m = n - 2;
      while (m >= l) {
        z = H.get(m, m);
        r = x - z;
        s = y - z;
        p = (r * s - w) / H.get(m + 1, m) + H.get(m, m + 1);
        q = H.get(m + 1, m + 1) - z - r - s;
        r = H.get(m + 2, m + 1);
        s = Math.abs(p) + Math.abs(q) + Math.abs(r);
        p = p / s;
        q = q / s;
        r = r / s;
        if (m === l) {
          break;
        }
        if (
          Math.abs(H.get(m, m - 1)) * (Math.abs(q) + Math.abs(r)) <
          eps *
            (Math.abs(p) *
              (Math.abs(H.get(m - 1, m - 1)) +
                Math.abs(z) +
                Math.abs(H.get(m + 1, m + 1))))
        ) {
          break;
        }
        m--;
      }

      for (i = m + 2; i <= n; i++) {
        H.set(i, i - 2, 0);
        if (i > m + 2) {
          H.set(i, i - 3, 0);
        }
      }

      for (k = m; k <= n - 1; k++) {
        notlast = k !== n - 1;
        if (k !== m) {
          p = H.get(k, k - 1);
          q = H.get(k + 1, k - 1);
          r = notlast ? H.get(k + 2, k - 1) : 0;
          x = Math.abs(p) + Math.abs(q) + Math.abs(r);
          if (x !== 0) {
            p = p / x;
            q = q / x;
            r = r / x;
          }
        }

        if (x === 0) {
          break;
        }

        s = Math.sqrt(p * p + q * q + r * r);
        if (p < 0) {
          s = -s;
        }

        if (s !== 0) {
          if (k !== m) {
            H.set(k, k - 1, -s * x);
          } else if (l !== m) {
            H.set(k, k - 1, -H.get(k, k - 1));
          }

          p = p + s;
          x = p / s;
          y = q / s;
          z = r / s;
          q = q / p;
          r = r / p;

          for (j = k; j < nn; j++) {
            p = H.get(k, j) + q * H.get(k + 1, j);
            if (notlast) {
              p = p + r * H.get(k + 2, j);
              H.set(k + 2, j, H.get(k + 2, j) - p * z);
            }

            H.set(k, j, H.get(k, j) - p * x);
            H.set(k + 1, j, H.get(k + 1, j) - p * y);
          }

          for (i = 0; i <= Math.min(n, k + 3); i++) {
            p = x * H.get(i, k) + y * H.get(i, k + 1);
            if (notlast) {
              p = p + z * H.get(i, k + 2);
              H.set(i, k + 2, H.get(i, k + 2) - p * r);
            }

            H.set(i, k, H.get(i, k) - p);
            H.set(i, k + 1, H.get(i, k + 1) - p * q);
          }

          for (i = low; i <= high; i++) {
            p = x * V.get(i, k) + y * V.get(i, k + 1);
            if (notlast) {
              p = p + z * V.get(i, k + 2);
              V.set(i, k + 2, V.get(i, k + 2) - p * r);
            }

            V.set(i, k, V.get(i, k) - p);
            V.set(i, k + 1, V.get(i, k + 1) - p * q);
          }
        }
      }
    }
  }

  if (norm === 0) {
    return;
  }

  for (n = nn - 1; n >= 0; n--) {
    p = d[n];
    q = e[n];

    if (q === 0) {
      l = n;
      H.set(n, n, 1);
      for (i = n - 1; i >= 0; i--) {
        w = H.get(i, i) - p;
        r = 0;
        for (j = l; j <= n; j++) {
          r = r + H.get(i, j) * H.get(j, n);
        }

        if (e[i] < 0) {
          z = w;
          s = r;
        } else {
          l = i;
          if (e[i] === 0) {
            H.set(i, n, w !== 0 ? -r / w : -r / (eps * norm));
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
            t = (x * s - z * r) / q;
            H.set(i, n, t);
            H.set(
              i + 1,
              n,
              Math.abs(x) > Math.abs(z) ? (-r - w * t) / x : (-s - y * t) / z,
            );
          }

          t = Math.abs(H.get(i, n));
          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    } else if (q < 0) {
      l = n - 1;

      if (Math.abs(H.get(n, n - 1)) > Math.abs(H.get(n - 1, n))) {
        H.set(n - 1, n - 1, q / H.get(n, n - 1));
        H.set(n - 1, n, -(H.get(n, n) - p) / H.get(n, n - 1));
      } else {
        cdivres = cdiv(0, -H.get(n - 1, n), H.get(n - 1, n - 1) - p, q);
        H.set(n - 1, n - 1, cdivres[0]);
        H.set(n - 1, n, cdivres[1]);
      }

      H.set(n, n - 1, 0);
      H.set(n, n, 1);
      for (i = n - 2; i >= 0; i--) {
        ra = 0;
        sa = 0;
        for (j = l; j <= n; j++) {
          ra = ra + H.get(i, j) * H.get(j, n - 1);
          sa = sa + H.get(i, j) * H.get(j, n);
        }

        w = H.get(i, i) - p;

        if (e[i] < 0) {
          z = w;
          r = ra;
          s = sa;
        } else {
          l = i;
          if (e[i] === 0) {
            cdivres = cdiv(-ra, -sa, w, q);
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
            vi = (d[i] - p) * 2 * q;
            if (vr === 0 && vi === 0) {
              vr =
                eps *
                norm *
                (Math.abs(w) +
                  Math.abs(q) +
                  Math.abs(x) +
                  Math.abs(y) +
                  Math.abs(z));
            }
            cdivres = cdiv(
              x * r - z * ra + q * sa,
              x * s - z * sa - q * ra,
              vr,
              vi,
            );
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
            if (Math.abs(x) > Math.abs(z) + Math.abs(q)) {
              H.set(
                i + 1,
                n - 1,
                (-ra - w * H.get(i, n - 1) + q * H.get(i, n)) / x,
              );
              H.set(
                i + 1,
                n,
                (-sa - w * H.get(i, n) - q * H.get(i, n - 1)) / x,
              );
            } else {
              cdivres = cdiv(
                -r - y * H.get(i, n - 1),
                -s - y * H.get(i, n),
                z,
                q,
              );
              H.set(i + 1, n - 1, cdivres[0]);
              H.set(i + 1, n, cdivres[1]);
            }
          }

          t = Math.max(Math.abs(H.get(i, n - 1)), Math.abs(H.get(i, n)));
          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n - 1, H.get(j, n - 1) / t);
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    }
  }

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      for (j = i; j < nn; j++) {
        V.set(i, j, H.get(i, j));
      }
    }
  }

  for (j = nn - 1; j >= low; j--) {
    for (i = low; i <= high; i++) {
      z = 0;
      for (k = low; k <= Math.min(j, high); k++) {
        z = z + V.get(i, k) * H.get(k, j);
      }
      V.set(i, j, z);
    }
  }
}

function cdiv(xr, xi, yr, yi) {
  let r, d;
  if (Math.abs(yr) > Math.abs(yi)) {
    r = yi / yr;
    d = yr + r * yi;
    return [(xr + r * xi) / d, (xi - r * xr) / d];
  } else {
    r = yr / yi;
    d = yi + r * yr;
    return [(r * xr + xi) / d, (r * xi - xr) / d];
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/lu.js":
/*!*********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/lu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LuDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class LuDecomposition {
  constructor(matrix) {
    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);

    let lu = matrix.clone();
    let rows = lu.rows;
    let columns = lu.columns;
    let pivotVector = new Float64Array(rows);
    let pivotSign = 1;
    let i, j, k, p, s, t, v;
    let LUcolj, kmax;

    for (i = 0; i < rows; i++) {
      pivotVector[i] = i;
    }

    LUcolj = new Float64Array(rows);

    for (j = 0; j < columns; j++) {
      for (i = 0; i < rows; i++) {
        LUcolj[i] = lu.get(i, j);
      }

      for (i = 0; i < rows; i++) {
        kmax = Math.min(i, j);
        s = 0;
        for (k = 0; k < kmax; k++) {
          s += lu.get(i, k) * LUcolj[k];
        }
        LUcolj[i] -= s;
        lu.set(i, j, LUcolj[i]);
      }

      p = j;
      for (i = j + 1; i < rows; i++) {
        if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
          p = i;
        }
      }

      if (p !== j) {
        for (k = 0; k < columns; k++) {
          t = lu.get(p, k);
          lu.set(p, k, lu.get(j, k));
          lu.set(j, k, t);
        }

        v = pivotVector[p];
        pivotVector[p] = pivotVector[j];
        pivotVector[j] = v;

        pivotSign = -pivotSign;
      }

      if (j < rows && lu.get(j, j) !== 0) {
        for (i = j + 1; i < rows; i++) {
          lu.set(i, j, lu.get(i, j) / lu.get(j, j));
        }
      }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
  }

  isSingular() {
    let data = this.LU;
    let col = data.columns;
    for (let j = 0; j < col; j++) {
      if (data.get(j, j) === 0) {
        return true;
      }
    }
    return false;
  }

  solve(value) {
    value = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].checkMatrix(value);

    let lu = this.LU;
    let rows = lu.rows;

    if (rows !== value.rows) {
      throw new Error('Invalid matrix dimensions');
    }
    if (this.isSingular()) {
      throw new Error('LU matrix is singular');
    }

    let count = value.columns;
    let X = value.subMatrixRow(this.pivotVector, 0, count - 1);
    let columns = lu.columns;
    let i, j, k;

    for (k = 0; k < columns; k++) {
      for (i = k + 1; i < columns; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
        }
      }
    }
    for (k = columns - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        X.set(k, j, X.get(k, j) / lu.get(k, k));
      }
      for (i = 0; i < k; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
        }
      }
    }
    return X;
  }

  get determinant() {
    let data = this.LU;
    if (!data.isSquare()) {
      throw new Error('Matrix must be square');
    }
    let determinant = this.pivotSign;
    let col = data.columns;
    for (let j = 0; j < col; j++) {
      determinant *= data.get(j, j);
    }
    return determinant;
  }

  get lowerTriangularMatrix() {
    let data = this.LU;
    let rows = data.rows;
    let columns = data.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i > j) {
          X.set(i, j, data.get(i, j));
        } else if (i === j) {
          X.set(i, j, 1);
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get upperTriangularMatrix() {
    let data = this.LU;
    let rows = data.rows;
    let columns = data.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i <= j) {
          X.set(i, j, data.get(i, j));
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get pivotPermutationVector() {
    return Array.from(this.pivotVector);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/nipals.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/nipals.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nipals; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class nipals {
  constructor(X, options = {}) {
    X = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(X);
    let { Y } = options;
    const {
      scaleScores = false,
      maxIterations = 1000,
      terminationCriteria = 1e-10,
    } = options;

    let u;
    if (Y) {
      if (Array.isArray(Y) && typeof Y[0] === 'number') {
        Y = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].columnVector(Y);
      } else {
        Y = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(Y);
      }
      if (!Y.isColumnVector() || Y.rows !== X.rows) {
        throw new Error('Y must be a column vector of length X.rows');
      }
      u = Y;
    } else {
      u = X.getColumnVector(0);
    }

    let diff = 1;
    let t, q, w, tOld;

    for (
      let counter = 0;
      counter < maxIterations && diff > terminationCriteria;
      counter++
    ) {
      w = X.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0));
      w = w.div(w.norm());

      t = X.mmul(w).div(w.transpose().mmul(w).get(0, 0));

      if (counter > 0) {
        diff = t.clone().sub(tOld).pow(2).sum();
      }
      tOld = t.clone();

      if (Y) {
        q = Y.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
        q = q.div(q.norm());

        u = Y.mmul(q).div(q.transpose().mmul(q).get(0, 0));
      } else {
        u = t;
      }
    }

    if (Y) {
      let p = X.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      p = p.div(p.norm());
      let xResidual = X.clone().sub(t.clone().mmul(p.transpose()));
      let residual = u.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      let yResidual = Y.clone().sub(
        t.clone().mulS(residual.get(0, 0)).mmul(q.transpose()),
      );

      this.t = t;
      this.p = p.transpose();
      this.w = w.transpose();
      this.q = q;
      this.u = u;
      this.s = t.transpose().mmul(t);
      this.xResidual = xResidual;
      this.yResidual = yResidual;
      this.betas = residual;
    } else {
      this.w = w.transpose();
      this.s = t.transpose().mmul(t).sqrt();
      if (scaleScores) {
        this.t = t.clone().div(this.s.get(0, 0));
      } else {
        this.t = t;
      }
      this.xResidual = X.sub(t.mmul(w.transpose()));
    }
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/qr.js":
/*!*********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/qr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QrDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/dc/util.js");





class QrDecomposition {
  constructor(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let qr = value.clone();
    let m = value.rows;
    let n = value.columns;
    let rdiag = new Float64Array(n);
    let i, j, k, s;

    for (k = 0; k < n; k++) {
      let nrm = 0;
      for (i = k; i < m; i++) {
        nrm = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(nrm, qr.get(i, k));
      }
      if (nrm !== 0) {
        if (qr.get(k, k) < 0) {
          nrm = -nrm;
        }
        for (i = k; i < m; i++) {
          qr.set(i, k, qr.get(i, k) / nrm);
        }
        qr.set(k, k, qr.get(k, k) + 1);
        for (j = k + 1; j < n; j++) {
          s = 0;
          for (i = k; i < m; i++) {
            s += qr.get(i, k) * qr.get(i, j);
          }
          s = -s / qr.get(k, k);
          for (i = k; i < m; i++) {
            qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
          }
        }
      }
      rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
  }

  solve(value) {
    value = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].checkMatrix(value);

    let qr = this.QR;
    let m = qr.rows;

    if (value.rows !== m) {
      throw new Error('Matrix row dimensions must agree');
    }
    if (!this.isFullRank()) {
      throw new Error('Matrix is rank deficient');
    }

    let count = value.columns;
    let X = value.clone();
    let n = qr.columns;
    let i, j, k, s;

    for (k = 0; k < n; k++) {
      for (j = 0; j < count; j++) {
        s = 0;
        for (i = k; i < m; i++) {
          s += qr.get(i, k) * X.get(i, j);
        }
        s = -s / qr.get(k, k);
        for (i = k; i < m; i++) {
          X.set(i, j, X.get(i, j) + s * qr.get(i, k));
        }
      }
    }
    for (k = n - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        X.set(k, j, X.get(k, j) / this.Rdiag[k]);
      }
      for (i = 0; i < k; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * qr.get(i, k));
        }
      }
    }

    return X.subMatrix(0, n - 1, 0, count - 1);
  }

  isFullRank() {
    let columns = this.QR.columns;
    for (let i = 0; i < columns; i++) {
      if (this.Rdiag[i] === 0) {
        return false;
      }
    }
    return true;
  }

  get upperTriangularMatrix() {
    let qr = this.QR;
    let n = qr.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let i, j;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (i < j) {
          X.set(i, j, qr.get(i, j));
        } else if (i === j) {
          X.set(i, j, this.Rdiag[i]);
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get orthogonalMatrix() {
    let qr = this.QR;
    let rows = qr.rows;
    let columns = qr.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    let i, j, k, s;

    for (k = columns - 1; k >= 0; k--) {
      for (i = 0; i < rows; i++) {
        X.set(i, k, 0);
      }
      X.set(k, k, 1);
      for (j = k; j < columns; j++) {
        if (qr.get(k, k) !== 0) {
          s = 0;
          for (i = k; i < rows; i++) {
            s += qr.get(i, k) * X.get(i, j);
          }

          s = -s / qr.get(k, k);

          for (i = k; i < rows; i++) {
            X.set(i, j, X.get(i, j) + s * qr.get(i, k));
          }
        }
      }
    }
    return X;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/svd.js":
/*!**********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/svd.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingularValueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/dc/util.js");





class SingularValueDecomposition {
  constructor(value, options = {}) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let m = value.rows;
    let n = value.columns;

    const {
      computeLeftSingularVectors = true,
      computeRightSingularVectors = true,
      autoTranspose = false,
    } = options;

    let wantu = Boolean(computeLeftSingularVectors);
    let wantv = Boolean(computeRightSingularVectors);

    let swapped = false;
    let a;
    if (m < n) {
      if (!autoTranspose) {
        a = value.clone();
        // eslint-disable-next-line no-console
        console.warn(
          'Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose',
        );
      } else {
        a = value.transpose();
        m = a.rows;
        n = a.columns;
        swapped = true;
        let aux = wantu;
        wantu = wantv;
        wantv = aux;
      }
    } else {
      a = value.clone();
    }

    let nu = Math.min(m, n);
    let ni = Math.min(m + 1, n);
    let s = new Float64Array(ni);
    let U = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](m, nu);
    let V = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);

    let e = new Float64Array(n);
    let work = new Float64Array(m);

    let si = new Float64Array(ni);
    for (let i = 0; i < ni; i++) si[i] = i;

    let nct = Math.min(m - 1, n);
    let nrt = Math.max(0, Math.min(n - 2, m));
    let mrc = Math.max(nct, nrt);

    for (let k = 0; k < mrc; k++) {
      if (k < nct) {
        s[k] = 0;
        for (let i = k; i < m; i++) {
          s[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[k], a.get(i, k));
        }
        if (s[k] !== 0) {
          if (a.get(k, k) < 0) {
            s[k] = -s[k];
          }
          for (let i = k; i < m; i++) {
            a.set(i, k, a.get(i, k) / s[k]);
          }
          a.set(k, k, a.get(k, k) + 1);
        }
        s[k] = -s[k];
      }

      for (let j = k + 1; j < n; j++) {
        if (k < nct && s[k] !== 0) {
          let t = 0;
          for (let i = k; i < m; i++) {
            t += a.get(i, k) * a.get(i, j);
          }
          t = -t / a.get(k, k);
          for (let i = k; i < m; i++) {
            a.set(i, j, a.get(i, j) + t * a.get(i, k));
          }
        }
        e[j] = a.get(k, j);
      }

      if (wantu && k < nct) {
        for (let i = k; i < m; i++) {
          U.set(i, k, a.get(i, k));
        }
      }

      if (k < nrt) {
        e[k] = 0;
        for (let i = k + 1; i < n; i++) {
          e[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(e[k], e[i]);
        }
        if (e[k] !== 0) {
          if (e[k + 1] < 0) {
            e[k] = 0 - e[k];
          }
          for (let i = k + 1; i < n; i++) {
            e[i] /= e[k];
          }
          e[k + 1] += 1;
        }
        e[k] = -e[k];
        if (k + 1 < m && e[k] !== 0) {
          for (let i = k + 1; i < m; i++) {
            work[i] = 0;
          }
          for (let i = k + 1; i < m; i++) {
            for (let j = k + 1; j < n; j++) {
              work[i] += e[j] * a.get(i, j);
            }
          }
          for (let j = k + 1; j < n; j++) {
            let t = -e[j] / e[k + 1];
            for (let i = k + 1; i < m; i++) {
              a.set(i, j, a.get(i, j) + t * work[i]);
            }
          }
        }
        if (wantv) {
          for (let i = k + 1; i < n; i++) {
            V.set(i, k, e[i]);
          }
        }
      }
    }

    let p = Math.min(n, m + 1);
    if (nct < n) {
      s[nct] = a.get(nct, nct);
    }
    if (m < p) {
      s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
      e[nrt] = a.get(nrt, p - 1);
    }
    e[p - 1] = 0;

    if (wantu) {
      for (let j = nct; j < nu; j++) {
        for (let i = 0; i < m; i++) {
          U.set(i, j, 0);
        }
        U.set(j, j, 1);
      }
      for (let k = nct - 1; k >= 0; k--) {
        if (s[k] !== 0) {
          for (let j = k + 1; j < nu; j++) {
            let t = 0;
            for (let i = k; i < m; i++) {
              t += U.get(i, k) * U.get(i, j);
            }
            t = -t / U.get(k, k);
            for (let i = k; i < m; i++) {
              U.set(i, j, U.get(i, j) + t * U.get(i, k));
            }
          }
          for (let i = k; i < m; i++) {
            U.set(i, k, -U.get(i, k));
          }
          U.set(k, k, 1 + U.get(k, k));
          for (let i = 0; i < k - 1; i++) {
            U.set(i, k, 0);
          }
        } else {
          for (let i = 0; i < m; i++) {
            U.set(i, k, 0);
          }
          U.set(k, k, 1);
        }
      }
    }

    if (wantv) {
      for (let k = n - 1; k >= 0; k--) {
        if (k < nrt && e[k] !== 0) {
          for (let j = k + 1; j < n; j++) {
            let t = 0;
            for (let i = k + 1; i < n; i++) {
              t += V.get(i, k) * V.get(i, j);
            }
            t = -t / V.get(k + 1, k);
            for (let i = k + 1; i < n; i++) {
              V.set(i, j, V.get(i, j) + t * V.get(i, k));
            }
          }
        }
        for (let i = 0; i < n; i++) {
          V.set(i, k, 0);
        }
        V.set(k, k, 1);
      }
    }

    let pp = p - 1;
    let iter = 0;
    let eps = Number.EPSILON;
    while (p > 0) {
      let k, kase;
      for (k = p - 2; k >= -1; k--) {
        if (k === -1) {
          break;
        }
        const alpha =
          Number.MIN_VALUE + eps * Math.abs(s[k] + Math.abs(s[k + 1]));
        if (Math.abs(e[k]) <= alpha || Number.isNaN(e[k])) {
          e[k] = 0;
          break;
        }
      }
      if (k === p - 2) {
        kase = 4;
      } else {
        let ks;
        for (ks = p - 1; ks >= k; ks--) {
          if (ks === k) {
            break;
          }
          let t =
            (ks !== p ? Math.abs(e[ks]) : 0) +
            (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
          if (Math.abs(s[ks]) <= eps * t) {
            s[ks] = 0;
            break;
          }
        }
        if (ks === k) {
          kase = 3;
        } else if (ks === p - 1) {
          kase = 1;
        } else {
          kase = 2;
          k = ks;
        }
      }

      k++;

      switch (kase) {
        case 1: {
          let f = e[p - 2];
          e[p - 2] = 0;
          for (let j = p - 2; j >= k; j--) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[j], f);
            let cs = s[j] / t;
            let sn = f / t;
            s[j] = t;
            if (j !== k) {
              f = -sn * e[j - 1];
              e[j - 1] = cs * e[j - 1];
            }
            if (wantv) {
              for (let i = 0; i < n; i++) {
                t = cs * V.get(i, j) + sn * V.get(i, p - 1);
                V.set(i, p - 1, -sn * V.get(i, j) + cs * V.get(i, p - 1));
                V.set(i, j, t);
              }
            }
          }
          break;
        }
        case 2: {
          let f = e[k - 1];
          e[k - 1] = 0;
          for (let j = k; j < p; j++) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[j], f);
            let cs = s[j] / t;
            let sn = f / t;
            s[j] = t;
            f = -sn * e[j];
            e[j] = cs * e[j];
            if (wantu) {
              for (let i = 0; i < m; i++) {
                t = cs * U.get(i, j) + sn * U.get(i, k - 1);
                U.set(i, k - 1, -sn * U.get(i, j) + cs * U.get(i, k - 1));
                U.set(i, j, t);
              }
            }
          }
          break;
        }
        case 3: {
          const scale = Math.max(
            Math.abs(s[p - 1]),
            Math.abs(s[p - 2]),
            Math.abs(e[p - 2]),
            Math.abs(s[k]),
            Math.abs(e[k]),
          );
          const sp = s[p - 1] / scale;
          const spm1 = s[p - 2] / scale;
          const epm1 = e[p - 2] / scale;
          const sk = s[k] / scale;
          const ek = e[k] / scale;
          const b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
          const c = sp * epm1 * (sp * epm1);
          let shift = 0;
          if (b !== 0 || c !== 0) {
            if (b < 0) {
              shift = 0 - Math.sqrt(b * b + c);
            } else {
              shift = Math.sqrt(b * b + c);
            }
            shift = c / (b + shift);
          }
          let f = (sk + sp) * (sk - sp) + shift;
          let g = sk * ek;
          for (let j = k; j < p - 1; j++) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(f, g);
            if (t === 0) t = Number.MIN_VALUE;
            let cs = f / t;
            let sn = g / t;
            if (j !== k) {
              e[j - 1] = t;
            }
            f = cs * s[j] + sn * e[j];
            e[j] = cs * e[j] - sn * s[j];
            g = sn * s[j + 1];
            s[j + 1] = cs * s[j + 1];
            if (wantv) {
              for (let i = 0; i < n; i++) {
                t = cs * V.get(i, j) + sn * V.get(i, j + 1);
                V.set(i, j + 1, -sn * V.get(i, j) + cs * V.get(i, j + 1));
                V.set(i, j, t);
              }
            }
            t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(f, g);
            if (t === 0) t = Number.MIN_VALUE;
            cs = f / t;
            sn = g / t;
            s[j] = t;
            f = cs * e[j] + sn * s[j + 1];
            s[j + 1] = -sn * e[j] + cs * s[j + 1];
            g = sn * e[j + 1];
            e[j + 1] = cs * e[j + 1];
            if (wantu && j < m - 1) {
              for (let i = 0; i < m; i++) {
                t = cs * U.get(i, j) + sn * U.get(i, j + 1);
                U.set(i, j + 1, -sn * U.get(i, j) + cs * U.get(i, j + 1));
                U.set(i, j, t);
              }
            }
          }
          e[p - 2] = f;
          iter = iter + 1;
          break;
        }
        case 4: {
          if (s[k] <= 0) {
            s[k] = s[k] < 0 ? -s[k] : 0;
            if (wantv) {
              for (let i = 0; i <= pp; i++) {
                V.set(i, k, -V.get(i, k));
              }
            }
          }
          while (k < pp) {
            if (s[k] >= s[k + 1]) {
              break;
            }
            let t = s[k];
            s[k] = s[k + 1];
            s[k + 1] = t;
            if (wantv && k < n - 1) {
              for (let i = 0; i < n; i++) {
                t = V.get(i, k + 1);
                V.set(i, k + 1, V.get(i, k));
                V.set(i, k, t);
              }
            }
            if (wantu && k < m - 1) {
              for (let i = 0; i < m; i++) {
                t = U.get(i, k + 1);
                U.set(i, k + 1, U.get(i, k));
                U.set(i, k, t);
              }
            }
            k++;
          }
          iter = 0;
          p--;
          break;
        }
        // no default
      }
    }

    if (swapped) {
      let tmp = V;
      V = U;
      U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
  }

  solve(value) {
    let Y = value;
    let e = this.threshold;
    let scols = this.s.length;
    let Ls = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].zeros(scols, scols);

    for (let i = 0; i < scols; i++) {
      if (Math.abs(this.s[i]) <= e) {
        Ls.set(i, i, 0);
      } else {
        Ls.set(i, i, 1 / this.s[i]);
      }
    }

    let U = this.U;
    let V = this.rightSingularVectors;

    let VL = V.mmul(Ls);
    let vrows = V.rows;
    let urows = U.rows;
    let VLU = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].zeros(vrows, urows);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < urows; j++) {
        let sum = 0;
        for (let k = 0; k < scols; k++) {
          sum += VL.get(i, k) * U.get(j, k);
        }
        VLU.set(i, j, sum);
      }
    }

    return VLU.mmul(Y);
  }

  solveForDiagonal(value) {
    return this.solve(_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].diag(value));
  }

  inverse() {
    let V = this.V;
    let e = this.threshold;
    let vrows = V.rows;
    let vcols = V.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](vrows, this.s.length);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < vcols; j++) {
        if (Math.abs(this.s[j]) > e) {
          X.set(i, j, V.get(i, j) / this.s[j]);
        }
      }
    }

    let U = this.U;

    let urows = U.rows;
    let ucols = U.columns;
    let Y = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](vrows, urows);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < urows; j++) {
        let sum = 0;
        for (let k = 0; k < ucols; k++) {
          sum += X.get(i, k) * U.get(j, k);
        }
        Y.set(i, j, sum);
      }
    }

    return Y;
  }

  get condition() {
    return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
  }

  get norm2() {
    return this.s[0];
  }

  get rank() {
    let tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
    let r = 0;
    let s = this.s;
    for (let i = 0, ii = s.length; i < ii; i++) {
      if (s[i] > tol) {
        r++;
      }
    }
    return r;
  }

  get diagonal() {
    return Array.from(this.s);
  }

  get threshold() {
    return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
  }

  get leftSingularVectors() {
    return this.U;
  }

  get rightSingularVectors() {
    return this.V;
  }

  get diagonalMatrix() {
    return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].diag(this.s);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/util.js":
/*!***********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/util.js ***!
  \***********************************************/
/*! exports provided: hypotenuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hypotenuse", function() { return hypotenuse; });
function hypotenuse(a, b) {
  let r = 0;
  if (Math.abs(a) > Math.abs(b)) {
    r = b / a;
    return Math.abs(a) * Math.sqrt(1 + r * r);
  }
  if (b !== 0) {
    r = a / b;
    return Math.abs(b) * Math.sqrt(1 + r * r);
  }
  return 0;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/decompositions.js":
/*!******************************************************!*\
  !*** ./node_modules/ml-matrix/src/decompositions.js ***!
  \******************************************************/
/*! exports provided: inverse, solve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return solve; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/lu */ "./node_modules/ml-matrix/src/dc/lu.js");
/* harmony import */ var _dc_qr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dc/qr */ "./node_modules/ml-matrix/src/dc/qr.js");
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dc/svd */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");






function inverse(matrix, useSVD = false) {
  matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(matrix);
  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__["default"](matrix).inverse();
  } else {
    return solve(matrix, _matrix__WEBPACK_IMPORTED_MODULE_3__["default"].eye(matrix.rows));
  }
}

function solve(leftHandSide, rightHandSide, useSVD = false) {
  leftHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(leftHandSide);
  rightHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(rightHandSide);
  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__["default"](leftHandSide).solve(rightHandSide);
  } else {
    return leftHandSide.isSquare()
      ? new _dc_lu__WEBPACK_IMPORTED_MODULE_0__["default"](leftHandSide).solve(rightHandSide)
      : new _dc_qr__WEBPACK_IMPORTED_MODULE_1__["default"](leftHandSide).solve(rightHandSide);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/determinant.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/determinant.js ***!
  \***************************************************/
/*! exports provided: determinant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/lu */ "./node_modules/ml-matrix/src/dc/lu.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _views_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/selection */ "./node_modules/ml-matrix/src/views/selection.js");




function determinant(matrix) {
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
  if (matrix.isSquare()) {
    let a, b, c, d;
    if (matrix.columns === 2) {
      // 2 x 2 matrix
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(1, 0);
      d = matrix.get(1, 1);

      return a * d - b * c;
    } else if (matrix.columns === 3) {
      // 3 x 3 matrix
      let subMatrix0, subMatrix1, subMatrix2;
      subMatrix0 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [1, 2]);
      subMatrix1 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [0, 2]);
      subMatrix2 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [0, 1]);
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(0, 2);

      return (
        a * determinant(subMatrix0) -
        b * determinant(subMatrix1) +
        c * determinant(subMatrix2)
      );
    } else {
      // general purpose determinant using the LU decomposition
      return new _dc_lu__WEBPACK_IMPORTED_MODULE_0__["default"](matrix).determinant;
    }
  } else {
    throw Error('determinant can only be calculated for a square matrix');
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ml-matrix/src/index.js ***!
  \*********************************************/
/*! exports provided: AbstractMatrix, default, Matrix, MatrixColumnView, MatrixColumnSelectionView, MatrixFlipColumnView, MatrixFlipRowView, MatrixRowView, MatrixRowSelectionView, MatrixSelectionView, MatrixSubView, MatrixTransposeView, wrap, WrapperMatrix1D, WrapperMatrix2D, solve, inverse, determinant, linearDependencies, pseudoInverse, covariance, correlation, SingularValueDecomposition, SVD, EigenvalueDecomposition, EVD, CholeskyDecomposition, CHO, LuDecomposition, LU, QrDecomposition, QR, Nipals, NIPALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/index */ "./node_modules/ml-matrix/src/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixColumnView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixColumnSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixFlipColumnView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixFlipRowView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixRowView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixRowSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixSubView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixTransposeView"]; });

/* harmony import */ var _wrap_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap/wrap */ "./node_modules/ml-matrix/src/wrap/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_wrap__WEBPACK_IMPORTED_MODULE_2__["wrap"]; });

/* harmony import */ var _wrap_WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrap/WrapperMatrix1D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix1D", function() { return _wrap_WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix2D", function() { return _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _decompositions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decompositions */ "./node_modules/ml-matrix/src/decompositions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return _decompositions__WEBPACK_IMPORTED_MODULE_5__["solve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return _decompositions__WEBPACK_IMPORTED_MODULE_5__["inverse"]; });

/* harmony import */ var _determinant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./determinant */ "./node_modules/ml-matrix/src/determinant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return _determinant__WEBPACK_IMPORTED_MODULE_6__["determinant"]; });

/* harmony import */ var _linearDependencies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linearDependencies */ "./node_modules/ml-matrix/src/linearDependencies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return _linearDependencies__WEBPACK_IMPORTED_MODULE_7__["linearDependencies"]; });

/* harmony import */ var _pseudoInverse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pseudoInverse */ "./node_modules/ml-matrix/src/pseudoInverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return _pseudoInverse__WEBPACK_IMPORTED_MODULE_8__["pseudoInverse"]; });

/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./covariance */ "./node_modules/ml-matrix/src/covariance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "covariance", function() { return _covariance__WEBPACK_IMPORTED_MODULE_9__["covariance"]; });

/* harmony import */ var _correlation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./correlation */ "./node_modules/ml-matrix/src/correlation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correlation", function() { return _correlation__WEBPACK_IMPORTED_MODULE_10__["correlation"]; });

/* harmony import */ var _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dc/svd.js */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVD", function() { return _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dc/evd.js */ "./node_modules/ml-matrix/src/dc/evd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVD", function() { return _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dc/cholesky.js */ "./node_modules/ml-matrix/src/dc/cholesky.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHO", function() { return _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dc/lu.js */ "./node_modules/ml-matrix/src/dc/lu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LU", function() { return _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dc/qr.js */ "./node_modules/ml-matrix/src/dc/qr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrDecomposition", function() { return _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QR", function() { return _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dc/nipals.js */ "./node_modules/ml-matrix/src/dc/nipals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nipals", function() { return _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIPALS", function() { return _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });























/***/ }),

/***/ "./node_modules/ml-matrix/src/inspect.js":
/*!***********************************************!*\
  !*** ./node_modules/ml-matrix/src/inspect.js ***!
  \***********************************************/
/*! exports provided: inspectMatrix, inspectMatrixWithOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectMatrix", function() { return inspectMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectMatrixWithOptions", function() { return inspectMatrixWithOptions; });
const indent = ' '.repeat(2);
const indentData = ' '.repeat(4);

function inspectMatrix() {
  return inspectMatrixWithOptions(this);
}

function inspectMatrixWithOptions(matrix, options = {}) {
  const { maxRows = 15, maxColumns = 10, maxNumSize = 8 } = options;
  return `${matrix.constructor.name} {
${indent}[
${indentData}${inspectData(matrix, maxRows, maxColumns, maxNumSize)}
${indent}]
${indent}rows: ${matrix.rows}
${indent}columns: ${matrix.columns}
}`;
}

function inspectData(matrix, maxRows, maxColumns, maxNumSize) {
  const { rows, columns } = matrix;
  const maxI = Math.min(rows, maxRows);
  const maxJ = Math.min(columns, maxColumns);
  const result = [];
  for (let i = 0; i < maxI; i++) {
    let line = [];
    for (let j = 0; j < maxJ; j++) {
      line.push(formatNumber(matrix.get(i, j), maxNumSize));
    }
    result.push(`${line.join(' ')}`);
  }
  if (maxJ !== columns) {
    result[result.length - 1] += ` ... ${columns - maxColumns} more columns`;
  }
  if (maxI !== rows) {
    result.push(`... ${rows - maxRows} more rows`);
  }
  return result.join(`\n${indentData}`);
}

function formatNumber(num, maxNumSize) {
  const numStr = String(num);
  if (numStr.length <= maxNumSize) {
    return numStr.padEnd(maxNumSize, ' ');
  }
  const precise = num.toPrecision(maxNumSize - 2);
  if (precise.length <= maxNumSize) {
    return precise;
  }
  const exponential = num.toExponential(maxNumSize - 2);
  const eIndex = exponential.indexOf('e');
  const e = exponential.slice(eIndex);
  return exponential.slice(0, maxNumSize - e.length) + e;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/linearDependencies.js":
/*!**********************************************************!*\
  !*** ./node_modules/ml-matrix/src/linearDependencies.js ***!
  \**********************************************************/
/*! exports provided: linearDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return linearDependencies; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/svd */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");



function xrange(n, exception) {
  let range = [];
  for (let i = 0; i < n; i++) {
    if (i !== exception) {
      range.push(i);
    }
  }
  return range;
}

function dependenciesOneRow(
  error,
  matrix,
  index,
  thresholdValue = 10e-10,
  thresholdError = 10e-10,
) {
  if (error > thresholdError) {
    return new Array(matrix.rows + 1).fill(0);
  } else {
    let returnArray = matrix.addRow(index, [0]);
    for (let i = 0; i < returnArray.rows; i++) {
      if (Math.abs(returnArray.get(i, 0)) < thresholdValue) {
        returnArray.set(i, 0, 0);
      }
    }
    return returnArray.to1DArray();
  }
}

function linearDependencies(matrix, options = {}) {
  const { thresholdValue = 10e-10, thresholdError = 10e-10 } = options;
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);

  let n = matrix.rows;
  let results = new _matrix__WEBPACK_IMPORTED_MODULE_1__["default"](n, n);

  for (let i = 0; i < n; i++) {
    let b = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].columnVector(matrix.getRow(i));
    let Abis = matrix.subMatrixRow(xrange(n, i)).transpose();
    let svd = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__["default"](Abis);
    let x = svd.solve(b);
    let error = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].sub(b, Abis.mmul(x)).abs().max();
    results.setRow(
      i,
      dependenciesOneRow(error, x, i, thresholdValue, thresholdError),
    );
  }
  return results;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/mathOperations.js":
/*!******************************************************!*\
  !*** ./node_modules/ml-matrix/src/mathOperations.js ***!
  \******************************************************/
/*! exports provided: installMathOperations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installMathOperations", function() { return installMathOperations; });
function installMathOperations(AbstractMatrix, Matrix) {
  AbstractMatrix.prototype.add = function add(value) {
    if (typeof value === 'number') return this.addS(value);
    return this.addM(value);
  };

  AbstractMatrix.prototype.addS = function addS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.addM = function addM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.add = function add(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.add(value);
  };

  AbstractMatrix.prototype.sub = function sub(value) {
    if (typeof value === 'number') return this.subS(value);
    return this.subM(value);
  };

  AbstractMatrix.prototype.subS = function subS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.subM = function subM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.sub = function sub(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sub(value);
  };
  AbstractMatrix.prototype.subtract = AbstractMatrix.prototype.sub;
  AbstractMatrix.prototype.subtractS = AbstractMatrix.prototype.subS;
  AbstractMatrix.prototype.subtractM = AbstractMatrix.prototype.subM;
  AbstractMatrix.subtract = AbstractMatrix.sub;

  AbstractMatrix.prototype.mul = function mul(value) {
    if (typeof value === 'number') return this.mulS(value);
    return this.mulM(value);
  };

  AbstractMatrix.prototype.mulS = function mulS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.mulM = function mulM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.mul = function mul(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.mul(value);
  };
  AbstractMatrix.prototype.multiply = AbstractMatrix.prototype.mul;
  AbstractMatrix.prototype.multiplyS = AbstractMatrix.prototype.mulS;
  AbstractMatrix.prototype.multiplyM = AbstractMatrix.prototype.mulM;
  AbstractMatrix.multiply = AbstractMatrix.mul;

  AbstractMatrix.prototype.div = function div(value) {
    if (typeof value === 'number') return this.divS(value);
    return this.divM(value);
  };

  AbstractMatrix.prototype.divS = function divS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.divM = function divM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.div = function div(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.div(value);
  };
  AbstractMatrix.prototype.divide = AbstractMatrix.prototype.div;
  AbstractMatrix.prototype.divideS = AbstractMatrix.prototype.divS;
  AbstractMatrix.prototype.divideM = AbstractMatrix.prototype.divM;
  AbstractMatrix.divide = AbstractMatrix.div;

  AbstractMatrix.prototype.mod = function mod(value) {
    if (typeof value === 'number') return this.modS(value);
    return this.modM(value);
  };

  AbstractMatrix.prototype.modS = function modS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.modM = function modM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.mod = function mod(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.mod(value);
  };
  AbstractMatrix.prototype.modulus = AbstractMatrix.prototype.mod;
  AbstractMatrix.prototype.modulusS = AbstractMatrix.prototype.modS;
  AbstractMatrix.prototype.modulusM = AbstractMatrix.prototype.modM;
  AbstractMatrix.modulus = AbstractMatrix.mod;

  AbstractMatrix.prototype.and = function and(value) {
    if (typeof value === 'number') return this.andS(value);
    return this.andM(value);
  };

  AbstractMatrix.prototype.andS = function andS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.andM = function andM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.and = function and(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.and(value);
  };

  AbstractMatrix.prototype.or = function or(value) {
    if (typeof value === 'number') return this.orS(value);
    return this.orM(value);
  };

  AbstractMatrix.prototype.orS = function orS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.orM = function orM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.or = function or(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.or(value);
  };

  AbstractMatrix.prototype.xor = function xor(value) {
    if (typeof value === 'number') return this.xorS(value);
    return this.xorM(value);
  };

  AbstractMatrix.prototype.xorS = function xorS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.xorM = function xorM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.xor = function xor(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.xor(value);
  };

  AbstractMatrix.prototype.leftShift = function leftShift(value) {
    if (typeof value === 'number') return this.leftShiftS(value);
    return this.leftShiftM(value);
  };

  AbstractMatrix.prototype.leftShiftS = function leftShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.leftShiftM = function leftShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.leftShift = function leftShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.leftShift(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShift = function signPropagatingRightShift(value) {
    if (typeof value === 'number') return this.signPropagatingRightShiftS(value);
    return this.signPropagatingRightShiftM(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShiftS = function signPropagatingRightShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.signPropagatingRightShiftM = function signPropagatingRightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.signPropagatingRightShift = function signPropagatingRightShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.signPropagatingRightShift(value);
  };

  AbstractMatrix.prototype.rightShift = function rightShift(value) {
    if (typeof value === 'number') return this.rightShiftS(value);
    return this.rightShiftM(value);
  };

  AbstractMatrix.prototype.rightShiftS = function rightShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.rightShiftM = function rightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.rightShift = function rightShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.rightShift(value);
  };
  AbstractMatrix.prototype.zeroFillRightShift = AbstractMatrix.prototype.rightShift;
  AbstractMatrix.prototype.zeroFillRightShiftS = AbstractMatrix.prototype.rightShiftS;
  AbstractMatrix.prototype.zeroFillRightShiftM = AbstractMatrix.prototype.rightShiftM;
  AbstractMatrix.zeroFillRightShift = AbstractMatrix.rightShift;

  AbstractMatrix.prototype.not = function not() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, ~(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.not = function not(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.not();
  };

  AbstractMatrix.prototype.abs = function abs() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.abs(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.abs = function abs(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.abs();
  };

  AbstractMatrix.prototype.acos = function acos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acos(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.acos = function acos(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.acos();
  };

  AbstractMatrix.prototype.acosh = function acosh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acosh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.acosh = function acosh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.acosh();
  };

  AbstractMatrix.prototype.asin = function asin() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asin(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.asin = function asin(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.asin();
  };

  AbstractMatrix.prototype.asinh = function asinh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asinh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.asinh = function asinh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.asinh();
  };

  AbstractMatrix.prototype.atan = function atan() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atan(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.atan = function atan(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.atan();
  };

  AbstractMatrix.prototype.atanh = function atanh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atanh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.atanh = function atanh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.atanh();
  };

  AbstractMatrix.prototype.cbrt = function cbrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cbrt(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cbrt = function cbrt(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cbrt();
  };

  AbstractMatrix.prototype.ceil = function ceil() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.ceil(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.ceil = function ceil(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.ceil();
  };

  AbstractMatrix.prototype.clz32 = function clz32() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.clz32(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.clz32 = function clz32(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.clz32();
  };

  AbstractMatrix.prototype.cos = function cos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cos(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cos = function cos(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cos();
  };

  AbstractMatrix.prototype.cosh = function cosh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cosh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cosh = function cosh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cosh();
  };

  AbstractMatrix.prototype.exp = function exp() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.exp(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.exp = function exp(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.exp();
  };

  AbstractMatrix.prototype.expm1 = function expm1() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.expm1(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.expm1 = function expm1(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.expm1();
  };

  AbstractMatrix.prototype.floor = function floor() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.floor(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.floor = function floor(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.floor();
  };

  AbstractMatrix.prototype.fround = function fround() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.fround(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.fround = function fround(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.fround();
  };

  AbstractMatrix.prototype.log = function log() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log = function log(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log();
  };

  AbstractMatrix.prototype.log1p = function log1p() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log1p(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log1p = function log1p(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log1p();
  };

  AbstractMatrix.prototype.log10 = function log10() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log10(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log10 = function log10(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log10();
  };

  AbstractMatrix.prototype.log2 = function log2() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log2(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log2 = function log2(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log2();
  };

  AbstractMatrix.prototype.round = function round() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.round(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.round = function round(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.round();
  };

  AbstractMatrix.prototype.sign = function sign() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sign(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sign = function sign(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sign();
  };

  AbstractMatrix.prototype.sin = function sin() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sin(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sin = function sin(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sin();
  };

  AbstractMatrix.prototype.sinh = function sinh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sinh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sinh = function sinh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sinh();
  };

  AbstractMatrix.prototype.sqrt = function sqrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sqrt(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sqrt = function sqrt(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sqrt();
  };

  AbstractMatrix.prototype.tan = function tan() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tan(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.tan = function tan(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.tan();
  };

  AbstractMatrix.prototype.tanh = function tanh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tanh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.tanh = function tanh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.tanh();
  };

  AbstractMatrix.prototype.trunc = function trunc() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.trunc(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.trunc = function trunc(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.trunc();
  };

  AbstractMatrix.pow = function pow(matrix, arg0) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.pow(arg0);
  };

  AbstractMatrix.prototype.pow = function pow(value) {
    if (typeof value === 'number') return this.powS(value);
    return this.powM(value);
  };

  AbstractMatrix.prototype.powS = function powS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), value));
      }
    }
    return this;
  };

  AbstractMatrix.prototype.powM = function powM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), matrix.get(i, j)));
      }
    }
    return this;
  };
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/matrix.js":
/*!**********************************************!*\
  !*** ./node_modules/ml-matrix/src/matrix.js ***!
  \**********************************************/
/*! exports provided: AbstractMatrix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return AbstractMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-array-rescale */ "./node_modules/ml-array-rescale/lib-es6/index.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/ml-matrix/src/inspect.js");
/* harmony import */ var _mathOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathOperations */ "./node_modules/ml-matrix/src/mathOperations.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat */ "./node_modules/ml-matrix/src/stat.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/util.js");







class AbstractMatrix {
  static from1DArray(newRows, newColumns, newData) {
    let length = newRows * newColumns;
    if (length !== newData.length) {
      throw new RangeError('data length does not match given dimensions');
    }
    let newMatrix = new Matrix(newRows, newColumns);
    for (let row = 0; row < newRows; row++) {
      for (let column = 0; column < newColumns; column++) {
        newMatrix.set(row, column, newData[row * newColumns + column]);
      }
    }
    return newMatrix;
  }

  static rowVector(newData) {
    let vector = new Matrix(1, newData.length);
    for (let i = 0; i < newData.length; i++) {
      vector.set(0, i, newData[i]);
    }
    return vector;
  }

  static columnVector(newData) {
    let vector = new Matrix(newData.length, 1);
    for (let i = 0; i < newData.length; i++) {
      vector.set(i, 0, newData[i]);
    }
    return vector;
  }

  static zeros(rows, columns) {
    return new Matrix(rows, columns);
  }

  static ones(rows, columns) {
    return new Matrix(rows, columns).fill(1);
  }

  static rand(rows, columns, options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { random = Math.random } = options;
    let matrix = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrix.set(i, j, random());
      }
    }
    return matrix;
  }

  static randInt(rows, columns, options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1000, random = Math.random } = options;
    if (!Number.isInteger(min)) throw new TypeError('min must be an integer');
    if (!Number.isInteger(max)) throw new TypeError('max must be an integer');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let interval = max - min;
    let matrix = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let value = min + Math.round(random() * interval);
        matrix.set(i, j, value);
      }
    }
    return matrix;
  }

  static eye(rows, columns, value) {
    if (columns === undefined) columns = rows;
    if (value === undefined) value = 1;
    let min = Math.min(rows, columns);
    let matrix = this.zeros(rows, columns);
    for (let i = 0; i < min; i++) {
      matrix.set(i, i, value);
    }
    return matrix;
  }

  static diag(data, rows, columns) {
    let l = data.length;
    if (rows === undefined) rows = l;
    if (columns === undefined) columns = rows;
    let min = Math.min(l, rows, columns);
    let matrix = this.zeros(rows, columns);
    for (let i = 0; i < min; i++) {
      matrix.set(i, i, data[i]);
    }
    return matrix;
  }

  static min(matrix1, matrix2) {
    matrix1 = this.checkMatrix(matrix1);
    matrix2 = this.checkMatrix(matrix2);
    let rows = matrix1.rows;
    let columns = matrix1.columns;
    let result = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
      }
    }
    return result;
  }

  static max(matrix1, matrix2) {
    matrix1 = this.checkMatrix(matrix1);
    matrix2 = this.checkMatrix(matrix2);
    let rows = matrix1.rows;
    let columns = matrix1.columns;
    let result = new this(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
      }
    }
    return result;
  }

  static checkMatrix(value) {
    return AbstractMatrix.isMatrix(value) ? value : new Matrix(value);
  }

  static isMatrix(value) {
    return value != null && value.klass === 'Matrix';
  }

  get size() {
    return this.rows * this.columns;
  }

  apply(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        callback.call(this, i, j);
      }
    }
    return this;
  }

  to1DArray() {
    let array = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        array.push(this.get(i, j));
      }
    }
    return array;
  }

  to2DArray() {
    let copy = [];
    for (let i = 0; i < this.rows; i++) {
      copy.push([]);
      for (let j = 0; j < this.columns; j++) {
        copy[i].push(this.get(i, j));
      }
    }
    return copy;
  }

  toJSON() {
    return this.to2DArray();
  }

  isRowVector() {
    return this.rows === 1;
  }

  isColumnVector() {
    return this.columns === 1;
  }

  isVector() {
    return this.rows === 1 || this.columns === 1;
  }

  isSquare() {
    return this.rows === this.columns;
  }

  isSymmetric() {
    if (this.isSquare()) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j <= i; j++) {
          if (this.get(i, j) !== this.get(j, i)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  isEchelonForm() {
    let i = 0;
    let j = 0;
    let previousColumn = -1;
    let isEchelonForm = true;
    let checked = false;
    while (i < this.rows && isEchelonForm) {
      j = 0;
      checked = false;
      while (j < this.columns && checked === false) {
        if (this.get(i, j) === 0) {
          j++;
        } else if (this.get(i, j) === 1 && j > previousColumn) {
          checked = true;
          previousColumn = j;
        } else {
          isEchelonForm = false;
          checked = true;
        }
      }
      i++;
    }
    return isEchelonForm;
  }

  isReducedEchelonForm() {
    let i = 0;
    let j = 0;
    let previousColumn = -1;
    let isReducedEchelonForm = true;
    let checked = false;
    while (i < this.rows && isReducedEchelonForm) {
      j = 0;
      checked = false;
      while (j < this.columns && checked === false) {
        if (this.get(i, j) === 0) {
          j++;
        } else if (this.get(i, j) === 1 && j > previousColumn) {
          checked = true;
          previousColumn = j;
        } else {
          isReducedEchelonForm = false;
          checked = true;
        }
      }
      for (let k = j + 1; k < this.rows; k++) {
        if (this.get(i, k) !== 0) {
          isReducedEchelonForm = false;
        }
      }
      i++;
    }
    return isReducedEchelonForm;
  }

  echelonForm() {
    let result = this.clone();
    let h = 0;
    let k = 0;
    while (h < result.rows && k < result.columns) {
      let iMax = h;
      for (let i = h; i < result.rows; i++) {
        if (result.get(i, k) > result.get(iMax, k)) {
          iMax = i;
        }
      }
      if (result.get(iMax, k) === 0) {
        k++;
      } else {
        result.swapRows(h, iMax);
        let tmp = result.get(h, k);
        for (let j = k; j < result.columns; j++) {
          result.set(h, j, result.get(h, j) / tmp);
        }
        for (let i = h + 1; i < result.rows; i++) {
          let factor = result.get(i, k) / result.get(h, k);
          result.set(i, k, 0);
          for (let j = k + 1; j < result.columns; j++) {
            result.set(i, j, result.get(i, j) - result.get(h, j) * factor);
          }
        }
        h++;
        k++;
      }
    }
    return result;
  }

  reducedEchelonForm() {
    let result = this.echelonForm();
    let m = result.columns;
    let n = result.rows;
    let h = n - 1;
    while (h >= 0) {
      if (result.maxRow(h) === 0) {
        h--;
      } else {
        let p = 0;
        let pivot = false;
        while (p < n && pivot === false) {
          if (result.get(h, p) === 1) {
            pivot = true;
          } else {
            p++;
          }
        }
        for (let i = 0; i < h; i++) {
          let factor = result.get(i, p);
          for (let j = p; j < m; j++) {
            let tmp = result.get(i, j) - factor * result.get(h, j);
            result.set(i, j, tmp);
          }
        }
        h--;
      }
    }
    return result;
  }

  set() {
    throw new Error('set method is unimplemented');
  }

  get() {
    throw new Error('get method is unimplemented');
  }

  repeat(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { rows = 1, columns = 1 } = options;
    if (!Number.isInteger(rows) || rows <= 0) {
      throw new TypeError('rows must be a positive integer');
    }
    if (!Number.isInteger(columns) || columns <= 0) {
      throw new TypeError('columns must be a positive integer');
    }
    let matrix = new Matrix(this.rows * rows, this.columns * columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrix.setSubMatrix(this, this.rows * i, this.columns * j);
      }
    }
    return matrix;
  }

  fill(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, value);
      }
    }
    return this;
  }

  neg() {
    return this.mulS(-1);
  }

  getRow(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    let row = [];
    for (let i = 0; i < this.columns; i++) {
      row.push(this.get(index, i));
    }
    return row;
  }

  getRowVector(index) {
    return Matrix.rowVector(this.getRow(index));
  }

  setRow(index, array) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, array);
    for (let i = 0; i < this.columns; i++) {
      this.set(index, i, array[i]);
    }
    return this;
  }

  swapRows(row1, row2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row1);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row2);
    for (let i = 0; i < this.columns; i++) {
      let temp = this.get(row1, i);
      this.set(row1, i, this.get(row2, i));
      this.set(row2, i, temp);
    }
    return this;
  }

  getColumn(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    let column = [];
    for (let i = 0; i < this.rows; i++) {
      column.push(this.get(i, index));
    }
    return column;
  }

  getColumnVector(index) {
    return Matrix.columnVector(this.getColumn(index));
  }

  setColumn(index, array) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, array);
    for (let i = 0; i < this.rows; i++) {
      this.set(i, index, array[i]);
    }
    return this;
  }

  swapColumns(column1, column2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column1);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column2);
    for (let i = 0; i < this.rows; i++) {
      let temp = this.get(i, column1);
      this.set(i, column1, this.get(i, column2));
      this.set(i, column2, temp);
    }
    return this;
  }

  addRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + vector[j]);
      }
    }
    return this;
  }

  subRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - vector[j]);
      }
    }
    return this;
  }

  mulRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * vector[j]);
      }
    }
    return this;
  }

  divRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / vector[j]);
      }
    }
    return this;
  }

  addColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + vector[i]);
      }
    }
    return this;
  }

  subColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - vector[i]);
      }
    }
    return this;
  }

  mulColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * vector[i]);
      }
    }
    return this;
  }

  divColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / vector[i]);
      }
    }
    return this;
  }

  mulRow(index, value) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    for (let i = 0; i < this.columns; i++) {
      this.set(index, i, this.get(index, i) * value);
    }
    return this;
  }

  mulColumn(index, value) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    for (let i = 0; i < this.rows; i++) {
      this.set(i, index, this.get(i, index) * value);
    }
    return this;
  }

  max() {
    let v = this.get(0, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) > v) {
          v = this.get(i, j);
        }
      }
    }
    return v;
  }

  maxIndex() {
    let v = this.get(0, 0);
    let idx = [0, 0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) > v) {
          v = this.get(i, j);
          idx[0] = i;
          idx[1] = j;
        }
      }
    }
    return idx;
  }

  min() {
    let v = this.get(0, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) < v) {
          v = this.get(i, j);
        }
      }
    }
    return v;
  }

  minIndex() {
    let v = this.get(0, 0);
    let idx = [0, 0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) < v) {
          v = this.get(i, j);
          idx[0] = i;
          idx[1] = j;
        }
      }
    }
    return idx;
  }

  maxRow(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) > v) {
        v = this.get(row, i);
      }
    }
    return v;
  }

  maxRowIndex(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    let idx = [row, 0];
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) > v) {
        v = this.get(row, i);
        idx[1] = i;
      }
    }
    return idx;
  }

  minRow(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) < v) {
        v = this.get(row, i);
      }
    }
    return v;
  }

  minRowIndex(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    let idx = [row, 0];
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) < v) {
        v = this.get(row, i);
        idx[1] = i;
      }
    }
    return idx;
  }

  maxColumn(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) > v) {
        v = this.get(i, column);
      }
    }
    return v;
  }

  maxColumnIndex(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    let idx = [0, column];
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) > v) {
        v = this.get(i, column);
        idx[0] = i;
      }
    }
    return idx;
  }

  minColumn(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) < v) {
        v = this.get(i, column);
      }
    }
    return v;
  }

  minColumnIndex(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    let idx = [0, column];
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) < v) {
        v = this.get(i, column);
        idx[0] = i;
      }
    }
    return idx;
  }

  diag() {
    let min = Math.min(this.rows, this.columns);
    let diag = [];
    for (let i = 0; i < min; i++) {
      diag.push(this.get(i, i));
    }
    return diag;
  }

  norm(type = 'frobenius') {
    let result = 0;
    if (type === 'max') {
      return this.max();
    } else if (type === 'frobenius') {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result = result + this.get(i, j) * this.get(i, j);
        }
      }
      return Math.sqrt(result);
    } else {
      throw new RangeError(`unknown norm type: ${type}`);
    }
  }

  cumulativeSum() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        sum += this.get(i, j);
        this.set(i, j, sum);
      }
    }
    return this;
  }

  dot(vector2) {
    if (AbstractMatrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
    let vector1 = this.to1DArray();
    if (vector1.length !== vector2.length) {
      throw new RangeError('vectors do not have the same size');
    }
    let dot = 0;
    for (let i = 0; i < vector1.length; i++) {
      dot += vector1[i] * vector2[i];
    }
    return dot;
  }

  mmul(other) {
    other = Matrix.checkMatrix(other);

    let m = this.rows;
    let n = this.columns;
    let p = other.columns;

    let result = new Matrix(m, p);

    let Bcolj = new Float64Array(n);
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        Bcolj[k] = other.get(k, j);
      }

      for (let i = 0; i < m; i++) {
        let s = 0;
        for (let k = 0; k < n; k++) {
          s += this.get(i, k) * Bcolj[k];
        }

        result.set(i, j, s);
      }
    }
    return result;
  }

  strassen2x2(other) {
    other = Matrix.checkMatrix(other);
    let result = new Matrix(2, 2);
    const a11 = this.get(0, 0);
    const b11 = other.get(0, 0);
    const a12 = this.get(0, 1);
    const b12 = other.get(0, 1);
    const a21 = this.get(1, 0);
    const b21 = other.get(1, 0);
    const a22 = this.get(1, 1);
    const b22 = other.get(1, 1);

    // Compute intermediate values.
    const m1 = (a11 + a22) * (b11 + b22);
    const m2 = (a21 + a22) * b11;
    const m3 = a11 * (b12 - b22);
    const m4 = a22 * (b21 - b11);
    const m5 = (a11 + a12) * b22;
    const m6 = (a21 - a11) * (b11 + b12);
    const m7 = (a12 - a22) * (b21 + b22);

    // Combine intermediate values into the output.
    const c00 = m1 + m4 - m5 + m7;
    const c01 = m3 + m5;
    const c10 = m2 + m4;
    const c11 = m1 - m2 + m3 + m6;

    result.set(0, 0, c00);
    result.set(0, 1, c01);
    result.set(1, 0, c10);
    result.set(1, 1, c11);
    return result;
  }

  strassen3x3(other) {
    other = Matrix.checkMatrix(other);
    let result = new Matrix(3, 3);

    const a00 = this.get(0, 0);
    const a01 = this.get(0, 1);
    const a02 = this.get(0, 2);
    const a10 = this.get(1, 0);
    const a11 = this.get(1, 1);
    const a12 = this.get(1, 2);
    const a20 = this.get(2, 0);
    const a21 = this.get(2, 1);
    const a22 = this.get(2, 2);

    const b00 = other.get(0, 0);
    const b01 = other.get(0, 1);
    const b02 = other.get(0, 2);
    const b10 = other.get(1, 0);
    const b11 = other.get(1, 1);
    const b12 = other.get(1, 2);
    const b20 = other.get(2, 0);
    const b21 = other.get(2, 1);
    const b22 = other.get(2, 2);

    const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
    const m2 = (a00 - a10) * (-b01 + b11);
    const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
    const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
    const m5 = (a10 + a11) * (-b00 + b01);
    const m6 = a00 * b00;
    const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
    const m8 = (-a00 + a20) * (b02 - b12);
    const m9 = (a20 + a21) * (-b00 + b02);
    const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
    const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
    const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
    const m13 = (a02 - a22) * (b11 - b21);
    const m14 = a02 * b20;
    const m15 = (a21 + a22) * (-b20 + b21);
    const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
    const m17 = (a02 - a12) * (b12 - b22);
    const m18 = (a11 + a12) * (-b20 + b22);
    const m19 = a01 * b10;
    const m20 = a12 * b21;
    const m21 = a10 * b02;
    const m22 = a20 * b01;
    const m23 = a22 * b22;

    const c00 = m6 + m14 + m19;
    const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
    const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
    const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
    const c11 = m2 + m4 + m5 + m6 + m20;
    const c12 = m14 + m16 + m17 + m18 + m21;
    const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
    const c21 = m12 + m13 + m14 + m15 + m22;
    const c22 = m6 + m7 + m8 + m9 + m23;

    result.set(0, 0, c00);
    result.set(0, 1, c01);
    result.set(0, 2, c02);
    result.set(1, 0, c10);
    result.set(1, 1, c11);
    result.set(1, 2, c12);
    result.set(2, 0, c20);
    result.set(2, 1, c21);
    result.set(2, 2, c22);
    return result;
  }

  mmulStrassen(y) {
    y = Matrix.checkMatrix(y);
    let x = this.clone();
    let r1 = x.rows;
    let c1 = x.columns;
    let r2 = y.rows;
    let c2 = y.columns;
    if (c1 !== r2) {
      // eslint-disable-next-line no-console
      console.warn(
        `Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`,
      );
    }

    // Put a matrix into the top left of a matrix of zeros.
    // `rows` and `cols` are the dimensions of the output matrix.
    function embed(mat, rows, cols) {
      let r = mat.rows;
      let c = mat.columns;
      if (r === rows && c === cols) {
        return mat;
      } else {
        let resultat = AbstractMatrix.zeros(rows, cols);
        resultat = resultat.setSubMatrix(mat, 0, 0);
        return resultat;
      }
    }

    // Make sure both matrices are the same size.
    // This is exclusively for simplicity:
    // this algorithm can be implemented with matrices of different sizes.

    let r = Math.max(r1, r2);
    let c = Math.max(c1, c2);
    x = embed(x, r, c);
    y = embed(y, r, c);

    // Our recursive multiplication function.
    function blockMult(a, b, rows, cols) {
      // For small matrices, resort to naive multiplication.
      if (rows <= 512 || cols <= 512) {
        return a.mmul(b); // a is equivalent to this
      }

      // Apply dynamic padding.
      if (rows % 2 === 1 && cols % 2 === 1) {
        a = embed(a, rows + 1, cols + 1);
        b = embed(b, rows + 1, cols + 1);
      } else if (rows % 2 === 1) {
        a = embed(a, rows + 1, cols);
        b = embed(b, rows + 1, cols);
      } else if (cols % 2 === 1) {
        a = embed(a, rows, cols + 1);
        b = embed(b, rows, cols + 1);
      }

      let halfRows = parseInt(a.rows / 2, 10);
      let halfCols = parseInt(a.columns / 2, 10);
      // Subdivide input matrices.
      let a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
      let b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

      let a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
      let b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

      let a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
      let b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

      let a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
      let b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

      // Compute intermediate values.
      let m1 = blockMult(
        AbstractMatrix.add(a11, a22),
        AbstractMatrix.add(b11, b22),
        halfRows,
        halfCols,
      );
      let m2 = blockMult(AbstractMatrix.add(a21, a22), b11, halfRows, halfCols);
      let m3 = blockMult(a11, AbstractMatrix.sub(b12, b22), halfRows, halfCols);
      let m4 = blockMult(a22, AbstractMatrix.sub(b21, b11), halfRows, halfCols);
      let m5 = blockMult(AbstractMatrix.add(a11, a12), b22, halfRows, halfCols);
      let m6 = blockMult(
        AbstractMatrix.sub(a21, a11),
        AbstractMatrix.add(b11, b12),
        halfRows,
        halfCols,
      );
      let m7 = blockMult(
        AbstractMatrix.sub(a12, a22),
        AbstractMatrix.add(b21, b22),
        halfRows,
        halfCols,
      );

      // Combine intermediate values into the output.
      let c11 = AbstractMatrix.add(m1, m4);
      c11.sub(m5);
      c11.add(m7);
      let c12 = AbstractMatrix.add(m3, m5);
      let c21 = AbstractMatrix.add(m2, m4);
      let c22 = AbstractMatrix.sub(m1, m2);
      c22.add(m3);
      c22.add(m6);

      // Crop output to the desired size (undo dynamic padding).
      let resultat = AbstractMatrix.zeros(2 * c11.rows, 2 * c11.columns);
      resultat = resultat.setSubMatrix(c11, 0, 0);
      resultat = resultat.setSubMatrix(c12, c11.rows, 0);
      resultat = resultat.setSubMatrix(c21, 0, c11.columns);
      resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
      return resultat.subMatrix(0, rows - 1, 0, cols - 1);
    }
    return blockMult(x, y, r, c);
  }

  scaleRows(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1 } = options;
    if (!Number.isFinite(min)) throw new TypeError('min must be a number');
    if (!Number.isFinite(max)) throw new TypeError('max must be a number');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.rows; i++) {
      const row = this.getRow(i);
      Object(ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__["default"])(row, { min, max, output: row });
      newMatrix.setRow(i, row);
    }
    return newMatrix;
  }

  scaleColumns(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1 } = options;
    if (!Number.isFinite(min)) throw new TypeError('min must be a number');
    if (!Number.isFinite(max)) throw new TypeError('max must be a number');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.columns; i++) {
      const column = this.getColumn(i);
      Object(ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__["default"])(column, {
        min: min,
        max: max,
        output: column,
      });
      newMatrix.setColumn(i, column);
    }
    return newMatrix;
  }

  flipRows() {
    const middle = Math.ceil(this.columns / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < middle; j++) {
        let first = this.get(i, j);
        let last = this.get(i, this.columns - 1 - j);
        this.set(i, j, last);
        this.set(i, this.columns - 1 - j, first);
      }
    }
    return this;
  }

  flipColumns() {
    const middle = Math.ceil(this.rows / 2);
    for (let j = 0; j < this.columns; j++) {
      for (let i = 0; i < middle; i++) {
        let first = this.get(i, j);
        let last = this.get(this.rows - 1 - i, j);
        this.set(i, j, last);
        this.set(this.rows - 1 - i, j, first);
      }
    }
    return this;
  }

  kroneckerProduct(other) {
    other = Matrix.checkMatrix(other);

    let m = this.rows;
    let n = this.columns;
    let p = other.rows;
    let q = other.columns;

    let result = new Matrix(m * p, n * q);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < p; k++) {
          for (let l = 0; l < q; l++) {
            result.set(p * i + k, q * j + l, this.get(i, j) * other.get(k, l));
          }
        }
      }
    }
    return result;
  }

  transpose() {
    let result = new Matrix(this.columns, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        result.set(j, i, this.get(i, j));
      }
    }
    return result;
  }

  sortRows(compareFunction = compareNumbers) {
    for (let i = 0; i < this.rows; i++) {
      this.setRow(i, this.getRow(i).sort(compareFunction));
    }
    return this;
  }

  sortColumns(compareFunction = compareNumbers) {
    for (let i = 0; i < this.columns; i++) {
      this.setColumn(i, this.getColumn(i).sort(compareFunction));
    }
    return this;
  }

  subMatrix(startRow, endRow, startColumn, endColumn) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRange"])(this, startRow, endRow, startColumn, endColumn);
    let newMatrix = new Matrix(
      endRow - startRow + 1,
      endColumn - startColumn + 1,
    );
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startColumn; j <= endColumn; j++) {
        newMatrix.set(i - startRow, j - startColumn, this.get(i, j));
      }
    }
    return newMatrix;
  }

  subMatrixRow(indices, startColumn, endColumn) {
    if (startColumn === undefined) startColumn = 0;
    if (endColumn === undefined) endColumn = this.columns - 1;
    if (
      startColumn > endColumn ||
      startColumn < 0 ||
      startColumn >= this.columns ||
      endColumn < 0 ||
      endColumn >= this.columns
    ) {
      throw new RangeError('Argument out of range');
    }

    let newMatrix = new Matrix(indices.length, endColumn - startColumn + 1);
    for (let i = 0; i < indices.length; i++) {
      for (let j = startColumn; j <= endColumn; j++) {
        if (indices[i] < 0 || indices[i] >= this.rows) {
          throw new RangeError(`Row index out of range: ${indices[i]}`);
        }
        newMatrix.set(i, j - startColumn, this.get(indices[i], j));
      }
    }
    return newMatrix;
  }

  subMatrixColumn(indices, startRow, endRow) {
    if (startRow === undefined) startRow = 0;
    if (endRow === undefined) endRow = this.rows - 1;
    if (
      startRow > endRow ||
      startRow < 0 ||
      startRow >= this.rows ||
      endRow < 0 ||
      endRow >= this.rows
    ) {
      throw new RangeError('Argument out of range');
    }

    let newMatrix = new Matrix(endRow - startRow + 1, indices.length);
    for (let i = 0; i < indices.length; i++) {
      for (let j = startRow; j <= endRow; j++) {
        if (indices[i] < 0 || indices[i] >= this.columns) {
          throw new RangeError(`Column index out of range: ${indices[i]}`);
        }
        newMatrix.set(j - startRow, i, this.get(j, indices[i]));
      }
    }
    return newMatrix;
  }

  setSubMatrix(matrix, startRow, startColumn) {
    matrix = Matrix.checkMatrix(matrix);
    let endRow = startRow + matrix.rows - 1;
    let endColumn = startColumn + matrix.columns - 1;
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRange"])(this, startRow, endRow, startColumn, endColumn);
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.columns; j++) {
        this.set(startRow + i, startColumn + j, matrix.get(i, j));
      }
    }
    return this;
  }

  selection(rowIndices, columnIndices) {
    let indices = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkIndices"])(this, rowIndices, columnIndices);
    let newMatrix = new Matrix(rowIndices.length, columnIndices.length);
    for (let i = 0; i < indices.row.length; i++) {
      let rowIndex = indices.row[i];
      for (let j = 0; j < indices.column.length; j++) {
        let columnIndex = indices.column[j];
        newMatrix.set(i, j, this.get(rowIndex, columnIndex));
      }
    }
    return newMatrix;
  }

  trace() {
    let min = Math.min(this.rows, this.columns);
    let trace = 0;
    for (let i = 0; i < min; i++) {
      trace += this.get(i, i);
    }
    return trace;
  }

  clone() {
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        newMatrix.set(row, column, this.get(row, column));
      }
    }
    return newMatrix;
  }

  sum(by) {
    switch (by) {
      case 'row':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumByRow"])(this);
      case 'column':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumByColumn"])(this);
      case undefined:
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumAll"])(this);
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  product(by) {
    switch (by) {
      case 'row':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productByRow"])(this);
      case 'column':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productByColumn"])(this);
      case undefined:
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productAll"])(this);
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  mean(by) {
    const sum = this.sum(by);
    switch (by) {
      case 'row': {
        for (let i = 0; i < this.rows; i++) {
          sum[i] /= this.columns;
        }
        return sum;
      }
      case 'column': {
        for (let i = 0; i < this.columns; i++) {
          sum[i] /= this.rows;
        }
        return sum;
      }
      case undefined:
        return sum / this.size;
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  variance(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { unbiased = true, mean = this.mean(by) } = options;
    if (typeof unbiased !== 'boolean') {
      throw new TypeError('unbiased must be a boolean');
    }
    switch (by) {
      case 'row': {
        if (!Array.isArray(mean)) {
          throw new TypeError('mean must be an array');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceByRow"])(this, unbiased, mean);
      }
      case 'column': {
        if (!Array.isArray(mean)) {
          throw new TypeError('mean must be an array');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceByColumn"])(this, unbiased, mean);
      }
      case undefined: {
        if (typeof mean !== 'number') {
          throw new TypeError('mean must be a number');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceAll"])(this, unbiased, mean);
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  standardDeviation(by, options) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    const variance = this.variance(by, options);
    if (by === undefined) {
      return Math.sqrt(variance);
    } else {
      for (let i = 0; i < variance.length; i++) {
        variance[i] = Math.sqrt(variance[i]);
      }
      return variance;
    }
  }

  center(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { center = this.mean(by) } = options;
    switch (by) {
      case 'row': {
        if (!Array.isArray(center)) {
          throw new TypeError('center must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerByRow"])(this, center);
        return this;
      }
      case 'column': {
        if (!Array.isArray(center)) {
          throw new TypeError('center must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerByColumn"])(this, center);
        return this;
      }
      case undefined: {
        if (typeof center !== 'number') {
          throw new TypeError('center must be a number');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerAll"])(this, center);
        return this;
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  scale(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    let scale = options.scale;
    switch (by) {
      case 'row': {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleByRow"])(this);
        } else if (!Array.isArray(scale)) {
          throw new TypeError('scale must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleByRow"])(this, scale);
        return this;
      }
      case 'column': {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleByColumn"])(this);
        } else if (!Array.isArray(scale)) {
          throw new TypeError('scale must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleByColumn"])(this, scale);
        return this;
      }
      case undefined: {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleAll"])(this);
        } else if (typeof scale !== 'number') {
          throw new TypeError('scale must be a number');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleAll"])(this, scale);
        return this;
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  toString(options) {
    return Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["inspectMatrixWithOptions"])(this, options);
  }
}

AbstractMatrix.prototype.klass = 'Matrix';
if (typeof Symbol !== 'undefined') {
  AbstractMatrix.prototype[
    Symbol.for('nodejs.util.inspect.custom')
  ] = _inspect__WEBPACK_IMPORTED_MODULE_1__["inspectMatrix"];
}

function compareNumbers(a, b) {
  return a - b;
}

// Synonyms
AbstractMatrix.random = AbstractMatrix.rand;
AbstractMatrix.randomInt = AbstractMatrix.randInt;
AbstractMatrix.diagonal = AbstractMatrix.diag;
AbstractMatrix.prototype.diagonal = AbstractMatrix.prototype.diag;
AbstractMatrix.identity = AbstractMatrix.eye;
AbstractMatrix.prototype.negate = AbstractMatrix.prototype.neg;
AbstractMatrix.prototype.tensorProduct =
  AbstractMatrix.prototype.kroneckerProduct;

class Matrix extends AbstractMatrix {
  constructor(nRows, nColumns) {
    super();
    if (Matrix.isMatrix(nRows)) {
      return nRows.clone();
    } else if (Number.isInteger(nRows) && nRows > 0) {
      // Create an empty matrix
      this.data = [];
      if (Number.isInteger(nColumns) && nColumns > 0) {
        for (let i = 0; i < nRows; i++) {
          this.data.push(new Float64Array(nColumns));
        }
      } else {
        throw new TypeError('nColumns must be a positive integer');
      }
    } else if (Array.isArray(nRows)) {
      // Copy the values from the 2D array
      const arrayData = nRows;
      nRows = arrayData.length;
      nColumns = arrayData[0].length;
      if (typeof nColumns !== 'number' || nColumns === 0) {
        throw new TypeError(
          'Data must be a 2D array with at least one element',
        );
      }
      this.data = [];
      for (let i = 0; i < nRows; i++) {
        if (arrayData[i].length !== nColumns) {
          throw new RangeError('Inconsistent array dimensions');
        }
        this.data.push(Float64Array.from(arrayData[i]));
      }
    } else {
      throw new TypeError(
        'First argument must be a positive number or an array',
      );
    }
    this.rows = nRows;
    this.columns = nColumns;
    return this;
  }

  set(rowIndex, columnIndex, value) {
    this.data[rowIndex][columnIndex] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.data[rowIndex][columnIndex];
  }

  removeRow(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    if (this.rows === 1) {
      throw new RangeError('A matrix cannot have less than one row');
    }
    this.data.splice(index, 1);
    this.rows -= 1;
    return this;
  }

  addRow(index, array) {
    if (array === undefined) {
      array = index;
      index = this.rows;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index, true);
    array = Float64Array.from(Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, array, true));
    this.data.splice(index, 0, array);
    this.rows += 1;
    return this;
  }

  removeColumn(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    if (this.columns === 1) {
      throw new RangeError('A matrix cannot have less than one column');
    }
    for (let i = 0; i < this.rows; i++) {
      const newRow = new Float64Array(this.columns - 1);
      for (let j = 0; j < index; j++) {
        newRow[j] = this.data[i][j];
      }
      for (let j = index + 1; j < this.columns; j++) {
        newRow[j - 1] = this.data[i][j];
      }
      this.data[i] = newRow;
    }
    this.columns -= 1;
    return this;
  }

  addColumn(index, array) {
    if (typeof array === 'undefined') {
      array = index;
      index = this.columns;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index, true);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, array);
    for (let i = 0; i < this.rows; i++) {
      const newRow = new Float64Array(this.columns + 1);
      let j = 0;
      for (; j < index; j++) {
        newRow[j] = this.data[i][j];
      }
      newRow[j++] = array[i];
      for (; j < this.columns + 1; j++) {
        newRow[j] = this.data[i][j - 1];
      }
      this.data[i] = newRow;
    }
    this.columns += 1;
    return this;
  }
}

Object(_mathOperations__WEBPACK_IMPORTED_MODULE_2__["installMathOperations"])(AbstractMatrix, Matrix);


/***/ }),

/***/ "./node_modules/ml-matrix/src/pseudoInverse.js":
/*!*****************************************************!*\
  !*** ./node_modules/ml-matrix/src/pseudoInverse.js ***!
  \*****************************************************/
/*! exports provided: pseudoInverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return pseudoInverse; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/svd */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");



function pseudoInverse(matrix, threshold = Number.EPSILON) {
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
  let svdSolution = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__["default"](matrix, { autoTranspose: true });

  let U = svdSolution.leftSingularVectors;
  let V = svdSolution.rightSingularVectors;
  let s = svdSolution.diagonal;

  for (let i = 0; i < s.length; i++) {
    if (Math.abs(s[i]) > threshold) {
      s[i] = 1.0 / s[i];
    } else {
      s[i] = 0.0;
    }
  }

  return V.mmul(_matrix__WEBPACK_IMPORTED_MODULE_1__["default"].diag(s).mmul(U.transpose()));
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/stat.js":
/*!********************************************!*\
  !*** ./node_modules/ml-matrix/src/stat.js ***!
  \********************************************/
/*! exports provided: sumByRow, sumByColumn, sumAll, productByRow, productByColumn, productAll, varianceByRow, varianceByColumn, varianceAll, centerByRow, centerByColumn, centerAll, getScaleByRow, scaleByRow, getScaleByColumn, scaleByColumn, getScaleAll, scaleAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumByRow", function() { return sumByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumByColumn", function() { return sumByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumAll", function() { return sumAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByRow", function() { return productByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByColumn", function() { return productByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productAll", function() { return productAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceByRow", function() { return varianceByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceByColumn", function() { return varianceByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceAll", function() { return varianceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerByRow", function() { return centerByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerByColumn", function() { return centerByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerAll", function() { return centerAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleByRow", function() { return getScaleByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleByRow", function() { return scaleByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleByColumn", function() { return getScaleByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleByColumn", function() { return scaleByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleAll", function() { return getScaleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAll", function() { return scaleAll; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/util.js");


function sumByRow(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.rows);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[i] += matrix.get(i, j);
    }
  }
  return sum;
}

function sumByColumn(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.columns);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[j] += matrix.get(i, j);
    }
  }
  return sum;
}

function sumAll(matrix) {
  let v = 0;
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      v += matrix.get(i, j);
    }
  }
  return v;
}

function productByRow(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.rows, 1);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[i] *= matrix.get(i, j);
    }
  }
  return sum;
}

function productByColumn(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.columns, 1);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[j] *= matrix.get(i, j);
    }
  }
  return sum;
}

function productAll(matrix) {
  let v = 1;
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      v *= matrix.get(i, j);
    }
  }
  return v;
}

function varianceByRow(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const variance = [];

  for (let i = 0; i < rows; i++) {
    let sum1 = 0;
    let sum2 = 0;
    let x = 0;
    for (let j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean[i];
      sum1 += x;
      sum2 += x * x;
    }
    if (unbiased) {
      variance.push((sum2 - (sum1 * sum1) / cols) / (cols - 1));
    } else {
      variance.push((sum2 - (sum1 * sum1) / cols) / cols);
    }
  }
  return variance;
}

function varianceByColumn(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const variance = [];

  for (let j = 0; j < cols; j++) {
    let sum1 = 0;
    let sum2 = 0;
    let x = 0;
    for (let i = 0; i < rows; i++) {
      x = matrix.get(i, j) - mean[j];
      sum1 += x;
      sum2 += x * x;
    }
    if (unbiased) {
      variance.push((sum2 - (sum1 * sum1) / rows) / (rows - 1));
    } else {
      variance.push((sum2 - (sum1 * sum1) / rows) / rows);
    }
  }
  return variance;
}

function varianceAll(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const size = rows * cols;

  let sum1 = 0;
  let sum2 = 0;
  let x = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean;
      sum1 += x;
      sum2 += x * x;
    }
  }
  if (unbiased) {
    return (sum2 - (sum1 * sum1) / size) / (size - 1);
  } else {
    return (sum2 - (sum1 * sum1) / size) / size;
  }
}

function centerByRow(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[i]);
    }
  }
}

function centerByColumn(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[j]);
    }
  }
}

function centerAll(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean);
    }
  }
}

function getScaleByRow(matrix) {
  const scale = [];
  for (let i = 0; i < matrix.rows; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.columns; j++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.columns - 1);
    }
    scale.push(Math.sqrt(sum));
  }
  return scale;
}

function scaleByRow(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[i]);
    }
  }
}

function getScaleByColumn(matrix) {
  const scale = [];
  for (let j = 0; j < matrix.columns; j++) {
    let sum = 0;
    for (let i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.rows - 1);
    }
    scale.push(Math.sqrt(sum));
  }
  return scale;
}

function scaleByColumn(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[j]);
    }
  }
}

function getScaleAll(matrix) {
  const divider = matrix.size - 1;
  let sum = 0;
  for (let j = 0; j < matrix.columns; j++) {
    for (let i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / divider;
    }
  }
  return Math.sqrt(sum);
}

function scaleAll(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale);
    }
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/util.js":
/*!********************************************!*\
  !*** ./node_modules/ml-matrix/src/util.js ***!
  \********************************************/
/*! exports provided: checkRowIndex, checkColumnIndex, checkRowVector, checkColumnVector, checkIndices, checkRowIndices, checkColumnIndices, checkRange, newArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowIndex", function() { return checkRowIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnIndex", function() { return checkColumnIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowVector", function() { return checkRowVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnVector", function() { return checkColumnVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIndices", function() { return checkIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowIndices", function() { return checkRowIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnIndices", function() { return checkColumnIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRange", function() { return checkRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArray", function() { return newArray; });
/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
  let max = outer ? matrix.rows : matrix.rows - 1;
  if (index < 0 || index > max) {
    throw new RangeError('Row index out of range');
  }
}

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkColumnIndex(matrix, index, outer) {
  let max = outer ? matrix.columns : matrix.columns - 1;
  if (index < 0 || index > max) {
    throw new RangeError('Column index out of range');
  }
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkRowVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }
  if (vector.length !== matrix.columns) {
    throw new RangeError(
      'vector size must be the same as the number of columns',
    );
  }
  return vector;
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkColumnVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }
  if (vector.length !== matrix.rows) {
    throw new RangeError('vector size must be the same as the number of rows');
  }
  return vector;
}

function checkIndices(matrix, rowIndices, columnIndices) {
  return {
    row: checkRowIndices(matrix, rowIndices),
    column: checkColumnIndices(matrix, columnIndices),
  };
}

function checkRowIndices(matrix, rowIndices) {
  if (typeof rowIndices !== 'object') {
    throw new TypeError('unexpected type for row indices');
  }

  let rowOut = rowIndices.some((r) => {
    return r < 0 || r >= matrix.rows;
  });

  if (rowOut) {
    throw new RangeError('row indices are out of range');
  }

  if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);

  return rowIndices;
}

function checkColumnIndices(matrix, columnIndices) {
  if (typeof columnIndices !== 'object') {
    throw new TypeError('unexpected type for column indices');
  }

  let columnOut = columnIndices.some((c) => {
    return c < 0 || c >= matrix.columns;
  });

  if (columnOut) {
    throw new RangeError('column indices are out of range');
  }
  if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);

  return columnIndices;
}

function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
  if (arguments.length !== 5) {
    throw new RangeError('expected 4 arguments');
  }
  checkNumber('startRow', startRow);
  checkNumber('endRow', endRow);
  checkNumber('startColumn', startColumn);
  checkNumber('endColumn', endColumn);
  if (
    startRow > endRow ||
    startColumn > endColumn ||
    startRow < 0 ||
    startRow >= matrix.rows ||
    endRow < 0 ||
    endRow >= matrix.rows ||
    startColumn < 0 ||
    startColumn >= matrix.columns ||
    endColumn < 0 ||
    endColumn >= matrix.columns
  ) {
    throw new RangeError('Submatrix indices are out of range');
  }
}

function newArray(length, value = 0) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(value);
  }
  return array;
}

function checkNumber(name, value) {
  if (typeof value !== 'number') {
    throw new TypeError(`${name} must be a number`);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/base.js":
/*!**************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/base.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseView; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");


class BaseView extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(matrix, rows, columns) {
    super();
    this.matrix = matrix;
    this.rows = rows;
    this.columns = columns;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/column.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/column.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixColumnView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixColumnView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkColumnIndex"])(matrix, column);
    super(matrix, matrix.rows, 1);
    this.column = column;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.column, value);
    return this;
  }

  get(rowIndex) {
    return this.matrix.get(rowIndex, this.column);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/columnSelection.js":
/*!*************************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/columnSelection.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixColumnSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixColumnSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, columnIndices) {
    columnIndices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkColumnIndices"])(matrix, columnIndices);
    super(matrix, matrix.rows, columnIndices.length);
    this.columnIndices = columnIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/flipColumn.js":
/*!********************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/flipColumn.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixFlipColumnView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");


class MatrixFlipColumnView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.rows, matrix.columns);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/flipRow.js":
/*!*****************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/flipRow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixFlipRowView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");


class MatrixFlipRowView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.rows, matrix.columns);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/index.js ***!
  \***************************************************/
/*! exports provided: MatrixColumnView, MatrixColumnSelectionView, MatrixFlipColumnView, MatrixFlipRowView, MatrixRowView, MatrixRowSelectionView, MatrixSelectionView, MatrixSubView, MatrixTransposeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./node_modules/ml-matrix/src/views/column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return _column__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _columnSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnSelection */ "./node_modules/ml-matrix/src/views/columnSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return _columnSelection__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _flipColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipColumn */ "./node_modules/ml-matrix/src/views/flipColumn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return _flipColumn__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _flipRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flipRow */ "./node_modules/ml-matrix/src/views/flipRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return _flipRow__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row */ "./node_modules/ml-matrix/src/views/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return _row__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _rowSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rowSelection */ "./node_modules/ml-matrix/src/views/rowSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return _rowSelection__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ "./node_modules/ml-matrix/src/views/selection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return _selection__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub */ "./node_modules/ml-matrix/src/views/sub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return _sub__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transpose */ "./node_modules/ml-matrix/src/views/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return _transpose__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./node_modules/ml-matrix/src/views/row.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/row.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixRowView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixRowView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRowIndex"])(matrix, row);
    super(matrix, 1, matrix.columns);
    this.row = row;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.row, columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.row, columnIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/rowSelection.js":
/*!**********************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/rowSelection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixRowSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixRowSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, rowIndices) {
    rowIndices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRowIndices"])(matrix, rowIndices);
    super(matrix, rowIndices.length, matrix.columns);
    this.rowIndices = rowIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/selection.js":
/*!*******************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/selection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, rowIndices, columnIndices) {
    let indices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkIndices"])(matrix, rowIndices, columnIndices);
    super(matrix, indices.row.length, indices.column.length);
    this.rowIndices = indices.row;
    this.columnIndices = indices.column;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
    );
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/sub.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/sub.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixSubView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixSubView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, startRow, endRow, startColumn, endColumn) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRange"])(matrix, startRow, endRow, startColumn, endColumn);
    super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
    this.startRow = startRow;
    this.startColumn = startColumn;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.startRow + rowIndex,
      this.startColumn + columnIndex,
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.startRow + rowIndex,
      this.startColumn + columnIndex,
    );
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/transpose.js":
/*!*******************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/transpose.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixTransposeView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");


class MatrixTransposeView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.columns, matrix.rows);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(columnIndex, rowIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(columnIndex, rowIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js":
/*!************************************************************!*\
  !*** ./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperMatrix1D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");


class WrapperMatrix1D extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(data, options = {}) {
    const { rows = 1 } = options;

    if (data.length % rows !== 0) {
      throw new Error('the data length is not divisible by the number of rows');
    }
    super();
    this.rows = rows;
    this.columns = data.length / rows;
    this.data = data;
  }

  set(rowIndex, columnIndex, value) {
    let index = this._calculateIndex(rowIndex, columnIndex);
    this.data[index] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    let index = this._calculateIndex(rowIndex, columnIndex);
    return this.data[index];
  }

  _calculateIndex(row, column) {
    return row * this.columns + column;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js":
/*!************************************************************!*\
  !*** ./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperMatrix2D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");


class WrapperMatrix2D extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(data) {
    super();
    this.data = data;
    this.rows = data.length;
    this.columns = data[0].length;
  }

  set(rowIndex, columnIndex, value) {
    this.data[rowIndex][columnIndex] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.data[rowIndex][columnIndex];
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/wrap/wrap.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/wrap/wrap.js ***!
  \*************************************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WrapperMatrix1D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js");
/* harmony import */ var _WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



function wrap(array, options) {
  if (Array.isArray(array)) {
    if (array[0] && Array.isArray(array[0])) {
      return new _WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"](array);
    } else {
      return new _WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_0__["default"](array, options);
    }
  } else {
    throw new Error('the argument is not an array');
  }
}


/***/ }),

/***/ "./node_modules/tinyqueue/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tinyqueue/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TinyQueue; });

class TinyQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
    }

    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }

    pop() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }

    _up(pos) {
        const {data, compare} = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    }

    _down(pos) {
        const {data, compare} = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}


/***/ }),

/***/ "./src/controller.worker.js":
/*!**********************************!*\
  !*** ./src/controller.worker.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Matcher} = __webpack_require__(/*! ./image-target/matching/matcher.js */ "./src/image-target/matching/matcher.js");
const {refineHomography} = __webpack_require__(/*! ./image-target/icp/refine_homography.js */ "./src/image-target/icp/refine_homography.js");
const {estimateHomography} = __webpack_require__(/*! ./image-target/icp/estimate_homography.js */ "./src/image-target/icp/estimate_homography.js");

//const AR2_TRACKING_THRESH = 5.0; // default
const AR2_TRACKING_THRESH = 5.0; // default


let projectionTransform = null;
let matchingDataList = null;
let debugMode = false;
let matcher = null;

onmessage = (msg) => {
  const {data} = msg;

  if (data.type === 'setup') {
    projectionTransform = data.projectionTransform;
    matchingDataList = data.matchingDataList;
    debugMode = data.debugMode;
    matcher = new Matcher(data.inputWidth, data.inputHeight, debugMode);
  }

  else if (data.type === 'match') {
    const skipTargetIndexes = data.skipTargetIndexes;

    let matchedTargetIndex = -1;
    let matchedModelViewTransform = null;
    let debugExtras = null;

    if (debugMode) {
      debugExtras = [];
    }

    for (let i = 0; i < matchingDataList.length; i++) {
      if (skipTargetIndexes.includes(i)) continue;

      const {keyframeIndex, screenCoords, worldCoords, debugExtra} = matcher.matchDetection(matchingDataList[i], data.featurePoints);

      if (debugMode) {
	debugExtras.push(debugExtra);
      }

      if (keyframeIndex === -1) continue;

      const modelViewTransform = estimateHomography({screenCoords, worldCoords, projectionTransform});
      if (modelViewTransform === null) continue;

      matchedTargetIndex = i;
      matchedModelViewTransform = modelViewTransform;
      break;
    }

    postMessage({
      type: 'matchDone',
      targetIndex: matchedTargetIndex,
      modelViewTransform: matchedModelViewTransform,
      debugExtras
    });
  }
  else if (data.type === 'track') {
    const {modelViewTransform, selectedFeatures} = data;
    const inlierProbs = [1.0, 0.8, 0.6, 0.4, 0.0];
    let err = null;
    let newModelViewTransform = modelViewTransform;
    let finalModelViewTransform = null;
    for (let i = 0; i < inlierProbs.length; i++) {
      let ret = _computeUpdatedTran({modelViewTransform: newModelViewTransform, selectedFeatures, projectionTransform, inlierProb: inlierProbs[i]});
      err = ret.err;
      newModelViewTransform = ret.newModelViewTransform;
      //console.log("_computeUpdatedTran", err)

      if (err < AR2_TRACKING_THRESH) {
        finalModelViewTransform = newModelViewTransform;
        break;
      }
    }

    postMessage({
      type: 'trackDone',
      modelViewTransform: finalModelViewTransform,
    });
  }
};

const _computeUpdatedTran = ({modelViewTransform, projectionTransform, selectedFeatures, inlierProb}) => {
  let dx = 0;
  let dy = 0;
  let dz = 0;
  for (let i = 0; i < selectedFeatures.length; i++) {
    dx += selectedFeatures[i].pos3D.x;
    dy += selectedFeatures[i].pos3D.y;
    dz += selectedFeatures[i].pos3D.z;
  }
  dx /= selectedFeatures.length;
  dy /= selectedFeatures.length;
  dz /= selectedFeatures.length;

  const worldCoords = [];
  const screenCoords = [];
  for (let i = 0; i < selectedFeatures.length; i++) {
    screenCoords.push({x: selectedFeatures[i].pos2D.x, y: selectedFeatures[i].pos2D.y});
    worldCoords.push({x: selectedFeatures[i].pos3D.x - dx, y: selectedFeatures[i].pos3D.y - dy, z: selectedFeatures[i].pos3D.z - dz});
  }

  const diffModelViewTransform = [[],[],[]];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      diffModelViewTransform[j][i] = modelViewTransform[j][i];
    }
  }
  diffModelViewTransform[0][3] = modelViewTransform[0][0] * dx + modelViewTransform[0][1] * dy + modelViewTransform[0][2] * dz + modelViewTransform[0][3];
  diffModelViewTransform[1][3] = modelViewTransform[1][0] * dx + modelViewTransform[1][1] * dy + modelViewTransform[1][2] * dz + modelViewTransform[1][3];
  diffModelViewTransform[2][3] = modelViewTransform[2][0] * dx + modelViewTransform[2][1] * dy + modelViewTransform[2][2] * dz + modelViewTransform[2][3];

  let ret;
  if (inlierProb < 1) {
     ret = refineHomography({initialModelViewTransform: diffModelViewTransform, projectionTransform, worldCoords, screenCoords, isRobustMode: true, inlierProb});
  } else {
     ret = refineHomography({initialModelViewTransform: diffModelViewTransform, projectionTransform, worldCoords, screenCoords, isRobustMode: false});
  }

  const newModelViewTransform = [[],[],[]];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      newModelViewTransform[j][i] = ret.modelViewTransform[j][i];
    }
  }
  newModelViewTransform[0][3] = ret.modelViewTransform[0][3] - ret.modelViewTransform[0][0] * dx - ret.modelViewTransform[0][1] * dy - ret.modelViewTransform[0][2] * dz;
  newModelViewTransform[1][3] = ret.modelViewTransform[1][3] - ret.modelViewTransform[1][0] * dx - ret.modelViewTransform[1][1] * dy - ret.modelViewTransform[1][2] * dz;
  newModelViewTransform[2][3] = ret.modelViewTransform[2][3] - ret.modelViewTransform[2][0] * dx - ret.modelViewTransform[2][1] * dy - ret.modelViewTransform[2][2] * dz;


  return {err: ret.err, newModelViewTransform};
};


/***/ }),

/***/ "./src/image-target/icp/estimate_homography.js":
/*!*****************************************************!*\
  !*** ./src/image-target/icp/estimate_homography.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Matrix, inverse} = __webpack_require__(/*! ml-matrix */ "./node_modules/ml-matrix/src/index.js");

// build world matrix with list of matching worldCoords|screenCoords
//
// Step 1. estimate homography with list of pairs
// Ref: https://www.uio.no/studier/emner/matnat/its/TEK5030/v19/lect/lecture_4_3-estimating-homographies-from-feature-correspondences.pdf  (Basic homography estimation from points)
//
// Step 2. decompose homography into rotation and translation matrixes (i.e. world matrix)
// Ref: can anyone provide reference?
const estimateHomography = ({screenCoords, worldCoords, projectionTransform}) => {
  const num = screenCoords.length;
  const AData = [];
  const BData = [];
  for (let j = 0; j < num; j++) {
    const row1 = [
      worldCoords[j].x,
      worldCoords[j].y,
      1,
      0,
      0,
      0,
      -(worldCoords[j].x * screenCoords[j].x),
      -(worldCoords[j].y * screenCoords[j].x),
    ];
    const row2 = [
      0,
      0,
      0,
      worldCoords[j].x,
      worldCoords[j].y,
      1,
      -(worldCoords[j].x * screenCoords[j].y),
      -(worldCoords[j].y * screenCoords[j].y),
    ];
    AData.push(row1);
    AData.push(row2);

    BData.push([screenCoords[j].x]);
    BData.push([screenCoords[j].y]);
  }

  const A = new Matrix(AData);
  const B = new Matrix(BData);
  const AT = A.transpose();
  const ATA = AT.mmul(A);
  const ATB = AT.mmul(B);
  const ATAInv = inverse(ATA);
  const C = ATAInv.mmul(ATB).to1DArray();

  const H = new Matrix([
    [C[0], C[1], C[2]],
    [C[3], C[4], C[5]],
    [C[6], C[7], 1]
  ]);

  const K = new Matrix(projectionTransform);
  const KInv = inverse(K);

  const _KInvH = KInv.mmul(H);
  const KInvH = _KInvH.to1DArray();

  const norm1 = Math.sqrt( KInvH[0] * KInvH[0] + KInvH[3] * KInvH[3] + KInvH[6] * KInvH[6]);
  const norm2 = Math.sqrt( KInvH[1] * KInvH[1] + KInvH[4] * KInvH[4] + KInvH[7] * KInvH[7]);
  const tnorm = (norm1 + norm2) / 2;

  const rotate = [];
  rotate[0] = KInvH[0] / norm1;
  rotate[3] = KInvH[3] / norm1;
  rotate[6] = KInvH[6] / norm1;

  rotate[1] = KInvH[1] / norm2;
  rotate[4] = KInvH[4] / norm2;
  rotate[7] = KInvH[7] / norm2;

  rotate[2] = rotate[3] * rotate[7] - rotate[6] * rotate[4];
  rotate[5] = rotate[6] * rotate[1] - rotate[0] * rotate[7];
  rotate[8] = rotate[0] * rotate[4] - rotate[1] * rotate[3];

  const norm3 = Math.sqrt(rotate[2] * rotate[2] + rotate[5] * rotate[5] + rotate[8] * rotate[8]);
  rotate[2] /= norm3;
  rotate[5] /= norm3;
  rotate[8] /= norm3;

  // TODO: artoolkit has check_rotation() that somehow switch the rotate vector. not sure what that does. Can anyone advice?
  // https://github.com/artoolkitx/artoolkit5/blob/5bf0b671ff16ead527b9b892e6aeb1a2771f97be/lib/SRC/ARICP/icpUtil.c#L215

  const tran = []
  tran[0] = KInvH[2] / tnorm;
  tran[1] = KInvH[5] / tnorm;
  tran[2] = KInvH[8] / tnorm;

  let initialModelViewTransform = [
    [rotate[0], rotate[1], rotate[2], tran[0]],
    [rotate[3], rotate[4], rotate[5], tran[1]],
    [rotate[6], rotate[7], rotate[8], tran[2]]
  ];

  return initialModelViewTransform;
};

module.exports = {
  estimateHomography
}


/***/ }),

/***/ "./src/image-target/icp/refine_homography.js":
/*!***************************************************!*\
  !*** ./src/image-target/icp/refine_homography.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Matrix, inverse} = __webpack_require__(/*! ml-matrix */ "./node_modules/ml-matrix/src/index.js");
const {applyModelViewProjectionTransform, buildModelViewProjectionTransform, computeScreenCoordiate} = __webpack_require__(/*! ./utils.js */ "./src/image-target/icp/utils.js");

// TODO: the error computation seems problematic. should it be relative to the size of detection?
//       now the values are hardcoded, e.g. K2_Factor = 4
const K2_FACTOR = 4.0;
const ICP_MAX_LOOP = 10;
const ICP_BREAK_LOOP_ERROR_THRESH = 0.1;
const ICP_BREAK_LOOP_ERROR_RATIO_THRESH = 0.99;
const ICP_BREAK_LOOP_ERROR_THRESH2 = 4.0;

// ICP iteration with points
// Can someone provide theoretical reference?
const refineHomography = ({initialModelViewTransform, projectionTransform, worldCoords, screenCoords, isRobustMode, inlierProb}) => {
  let modelViewTransform = initialModelViewTransform;

  let err0 = 0.0;
  let err1 = 0.0;
  for (let l = 0; l <= ICP_MAX_LOOP; l++) {

    const modelViewProjectionTransform = buildModelViewProjectionTransform(projectionTransform, modelViewTransform);

    const E = [];
    const dxs = [];
    const dys = [];
    for (let n = 0; n < worldCoords.length; n++) {
      const u = computeScreenCoordiate(modelViewProjectionTransform, worldCoords[n].x, worldCoords[n].y, worldCoords[n].z);
      const dx = screenCoords[n].x - u.x;
      const dy = screenCoords[n].y - u.y;
      dxs.push(dx);
      dys.push(dy);
      E.push(dx * dx + dy * dy);
    }

    let K2; // robust mode only
    err1 = 0.0;
    if (isRobustMode) {
      const inlierNum = Math.max(3, Math.floor(worldCoords.length * inlierProb) - 1);
      const E2 = []; // for robust mode only
      for (let n = 0; n < worldCoords.length; n++) {
        E2.push(E[n]);
      }
      E2.sort((a, b) => {return a-b;});


      K2 = Math.max(E2[inlierNum] * K2_FACTOR, 16.0);
      for (let n = 0; n < worldCoords.length; n++) {
        if (E2[n] > K2) err1 += K2/ 6;
        else err1 +=  K2/6.0 * (1.0 - (1.0-E2[n]/K2)*(1.0-E2[n]/K2)*(1.0-E2[n]/K2));
      }
    } else {
      for (let n = 0; n < worldCoords.length; n++) {
        err1 += E[n];
      }
    }
    err1 /= worldCoords.length;

    if (err1 < ICP_BREAK_LOOP_ERROR_THRESH) break;
    if (l > 0 && err1 < ICP_BREAK_LOOP_ERROR_THRESH2 && err1/err0 > ICP_BREAK_LOOP_ERROR_RATIO_THRESH) break;
    if (l === ICP_MAX_LOOP) break;

    err0 = err1;

    const dU = [];
    const allJ_U_S = [];
    for (let n = 0; n < worldCoords.length; n++) {
      if (isRobustMode && E[n] > K2) {
        continue;
      }

      const J_U_S = _getJ_U_S({modelViewProjectionTransform, modelViewTransform, projectionTransform, worldCoord: worldCoords[n]});

      if (isRobustMode) {
        const W = (1.0 - E[n]/K2)*(1.0 - E[n]/K2);

        for (let j = 0; j < 2; j++) {
          for (let i = 0; i < 6; i++) {
            J_U_S[j][i] *= W;
          }
        }
        dU.push([dxs[n] * W]);
        dU.push([dys[n] * W]);
      } else {
        dU.push([dxs[n]]);
        dU.push([dys[n]]);
      }

      for (let i = 0; i < J_U_S.length; i++) {
        allJ_U_S.push(J_U_S[i]);
      }
    }

    const dS = _getDeltaS({dU, J_U_S: allJ_U_S});
    if (dS === null) break;

    modelViewTransform = _updateModelViewTransform({modelViewTransform, dS});
  }
  return {modelViewTransform, err: err1};
}

_updateModelViewTransform = ({modelViewTransform, dS}) => {
  const q = [];
  let ra = dS[0] * dS[0] + dS[1] * dS[1] + dS[2] * dS[2];
  if( ra < 0.000001 ) {
    q[0] = 1.0;
    q[1] = 0.0;
    q[2] = 0.0;
    q[3] = 0.0;
  } else {
    ra = Math.sqrt(ra);
    q[0] = dS[0] / ra;
    q[1] = dS[1] / ra;
    q[2] = dS[2] / ra;
    q[3] = ra;
  }
  q[4] = dS[3];
  q[5] = dS[4];
  q[6] = dS[5];

  const cra = Math.cos(q[3]);
  const one_cra = 1.0 - cra;
  const sra = Math.sin(q[3]);
  const mat = [[],[],[]];

  mat[0][0] = q[0]*q[0]*one_cra + cra;
  mat[0][1] = q[0]*q[1]*one_cra - q[2]*sra;
  mat[0][2] = q[0]*q[2]*one_cra + q[1]*sra;
  mat[0][3] = q[4];
  mat[1][0] = q[1]*q[0]*one_cra + q[2]*sra;
  mat[1][1] = q[1]*q[1]*one_cra + cra;
  mat[1][2] = q[1]*q[2]*one_cra - q[0]*sra;
  mat[1][3] = q[5];
  mat[2][0] = q[2]*q[0]*one_cra - q[1]*sra;
  mat[2][1] = q[2]*q[1]*one_cra + q[0]*sra;
  mat[2][2] = q[2]*q[2]*one_cra + cra;
  mat[2][3] = q[6];

  const mat2 = [[],[],[]];
  for (let j = 0; j < 3; j++ ) {
    for (let i = 0; i < 4; i++ ) {
      mat2[j][i] = modelViewTransform[j][0] * mat[0][i]
                   + modelViewTransform[j][1] * mat[1][i]
                   + modelViewTransform[j][2] * mat[2][i];
    }
    mat2[j][3] += modelViewTransform[j][3];
  }
  return mat2;
}

_getDeltaS = ({dU, J_U_S}) => {
  const J = new Matrix(J_U_S);
  const U = new Matrix(dU);

  const JT = J.transpose();
  const JTJ = JT.mmul(J);
  const JTU = JT.mmul(U);

  let JTJInv;
  try {
    JTJInv = inverse(JTJ);
  } catch (e) {
    return null;
  }

  const S = JTJInv.mmul(JTU);
  return S.to1DArray();
}

_getJ_U_S = ({modelViewProjectionTransform, modelViewTransform, projectionTransform, worldCoord}) => {
  const T = modelViewTransform;
  const {x, y, z} = worldCoord;

  const u = applyModelViewProjectionTransform(modelViewProjectionTransform, x, y, z);

  const z2 = u.z * u.z;
  const J_U_Xc = [[],[]];
  J_U_Xc[0][0] = (projectionTransform[0][0] * u.z - projectionTransform[2][0] * u.x) / z2;
  J_U_Xc[0][1] = (projectionTransform[0][1] * u.z - projectionTransform[2][1] * u.x) / z2;
  J_U_Xc[0][2] = (projectionTransform[0][2] * u.z - projectionTransform[2][2] * u.x) / z2;
  J_U_Xc[1][0] = (projectionTransform[1][0] * u.z - projectionTransform[2][0] * u.y) / z2;
  J_U_Xc[1][1] = (projectionTransform[1][1] * u.z - projectionTransform[2][1] * u.y) / z2;
  J_U_Xc[1][2] = (projectionTransform[1][2] * u.z - projectionTransform[2][2] * u.y) / z2;

  const J_Xc_S = [
    [T[0][2] * y - T[0][1] * z, T[0][0] * z - T[0][2] * x, T[0][1] * x - T[0][0] * y, T[0][0], T[0][1], T[0][2]],
    [T[1][2] * y - T[1][1] * z, T[1][0] * z - T[1][2] * x, T[1][1] * x - T[1][0] * y, T[1][0], T[1][1], T[1][2]],
    [T[2][2] * y - T[2][1] * z, T[2][0] * z - T[2][2] * x, T[2][1] * x - T[2][0] * y, T[2][0], T[2][1], T[2][2]],
  ];

  const J_U_S = [[], []];
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 6; i++) {
      J_U_S[j][i] = 0.0;
      for (let k = 0; k < 3; k++ ) {
        J_U_S[j][i] += J_U_Xc[j][k] * J_Xc_S[k][i];
      }
    }
  }
  return J_U_S;
}

module.exports = {
  refineHomography
}


/***/ }),

/***/ "./src/image-target/icp/utils.js":
/*!***************************************!*\
  !*** ./src/image-target/icp/utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const buildModelViewProjectionTransform = (projectionTransform, modelViewTransform) => {
  const modelViewProjectionTransform = [[],[],[]];
  for (let j = 0; j < 3; j++ ) {
    for (let i = 0; i < 4; i++) {
      modelViewProjectionTransform[j][i] = projectionTransform[j][0] * modelViewTransform[0][i]
                                         + projectionTransform[j][1] * modelViewTransform[1][i]
                                         + projectionTransform[j][2] * modelViewTransform[2][i];
    }
  }
  return modelViewProjectionTransform;
}

const applyModelViewProjectionTransform = (modelViewProjectionTransform, x, y, z) => {
  const ux = modelViewProjectionTransform[0][0] * x + modelViewProjectionTransform[0][1] * y
     + modelViewProjectionTransform[0][2] * z + modelViewProjectionTransform[0][3];
  const uy = modelViewProjectionTransform[1][0] * x + modelViewProjectionTransform[1][1] * y
     + modelViewProjectionTransform[1][2] * z + modelViewProjectionTransform[1][3];
  const uz  = modelViewProjectionTransform[2][0] * x + modelViewProjectionTransform[2][1] * y
     + modelViewProjectionTransform[2][2] * z + modelViewProjectionTransform[2][3];
  return {x: ux, y: uy, z: uz};
}

const computeScreenCoordiate = (modelViewProjectionTransform, x, y, z) => {
  const {x: ux, y: uy, z: uz} = applyModelViewProjectionTransform(modelViewProjectionTransform, x, y, z);
  if( Math.abs(uz) < 0.000001 ) return null;
  return {x: ux/uz, y: uy/uz};
}

const screenToMarkerCoordinate = (modelViewProjectionTransform, sx, sy) => {
  const c11 = modelViewProjectionTransform[2][0] * sx - modelViewProjectionTransform[0][0];
  const c12 = modelViewProjectionTransform[2][1] * sx - modelViewProjectionTransform[0][1];
  const c21 = modelViewProjectionTransform[2][0] * sy - modelViewProjectionTransform[1][0];
  const c22 = modelViewProjectionTransform[2][1] * sy - modelViewProjectionTransform[1][1];
  const b1  = modelViewProjectionTransform[0][3] - modelViewProjectionTransform[2][3] * sx;
  const b2  = modelViewProjectionTransform[1][3] - modelViewProjectionTransform[2][3] * sy;

  const m = c11 * c22 - c12 * c21;
  return {
    x: (c22 * b1 - c12 * b2) / m,
    y: (c11 * b2 - c21 * b1) / m
  }
}

module.exports = {
  screenToMarkerCoordinate,
  buildModelViewProjectionTransform,
  applyModelViewProjectionTransform,
  computeScreenCoordiate
}


/***/ }),

/***/ "./src/image-target/matching/hamming-distance.js":
/*!*******************************************************!*\
  !*** ./src/image-target/matching/hamming-distance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Fast computation on number of bit sets
// Ref: https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel
const compute = (options) => {
  const {v1, v2} = options;
  let d = 0;
  for (let i = 0; i < v1.length; i++) {
    let x = (v1[i] ^ v2[i]) >>> 0;
    d += bitCount(x);
  }
  return d;
}

const bitCount = (v) => {
  var c = v - ((v >> 1) & 0x55555555);
  c = ((c >> 2) & 0x33333333) + (c & 0x33333333);
  c = ((c >> 4) + c) & 0x0F0F0F0F;
  c = ((c >> 8) + c) & 0x00FF00FF;
  c = ((c >> 16) + c) & 0x0000FFFF;
  return c;
}

module.exports = {
  compute
};


/***/ }),

/***/ "./src/image-target/matching/homography.js":
/*!*************************************************!*\
  !*** ./src/image-target/matching/homography.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {createRandomizer} = __webpack_require__(/*! ../utils/randomizer.js */ "./src/image-target/utils/randomizer.js");
const {quadrilateralConvex, matrixInverse33, smallestTriangleArea, multiplyPointHomographyInhomogenous, checkThreePointsConsistent, checkFourPointsConsistent, determinant} = __webpack_require__(/*! ../utils/geometry.js */ "./src/image-target/utils/geometry.js");

const EPSILON = 0.0000000000001;
const SQRT2 = 1.41421356237309504880;
const HOMOGRAPHY_DEFAULT_CAUCHY_SCALE = 0.01;
const HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES = 1024;
//const HOMOGRAPHY_DEFAULT_MAX_TRIALS = 1064;
const HOMOGRAPHY_DEFAULT_MAX_TRIALS = 100;
const HOMOGRAPHY_DEFAULT_CHUNK_SIZE = 50;

// testPoints is four corners of keyframe
const computeHomography = (options) => {
  const {srcPoints, dstPoints, keyframe} = options;

  const testPoints = [
    [0, 0],
    [keyframe.width, 0],
    [keyframe.width, keyframe.height],
    [0, keyframe.height]
  ]

  const sampleSize = 4; // use four points to compute homography
  if (srcPoints.length < sampleSize) return null;

  const scale = HOMOGRAPHY_DEFAULT_CAUCHY_SCALE;
  const oneOverScale2 = 1.0 / (scale * scale);
  const chuckSize = Math.min(HOMOGRAPHY_DEFAULT_CHUNK_SIZE, srcPoints.length);

  const randomizer = createRandomizer();

  const perm = [];
  for (let i = 0; i < srcPoints.length; i++) {
    perm[i] = i;
  }

  randomizer.arrayShuffle({arr: perm, sampleSize: perm.length});

  // build numerous hypotheses by randoming draw four points
  // TODO: optimize: if number of points is less than certain number, can brute force all combinations
  let trial = 0;
  const Hs = [];
  while (trial < HOMOGRAPHY_DEFAULT_MAX_TRIALS && Hs.length < HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES) {

    randomizer.arrayShuffle({arr: perm, sampleSize: sampleSize});

    trial +=1;

    if (!checkFourPointsConsistent(
      srcPoints[perm[0]], srcPoints[perm[1]], srcPoints[perm[2]], srcPoints[perm[3]],
      dstPoints[perm[0]], dstPoints[perm[1]], dstPoints[perm[2]], dstPoints[perm[3]])) {
      continue;
    }

    const H = _solveHomographyFourPoints({
      srcPoints: [srcPoints[perm[0]], srcPoints[perm[1]], srcPoints[perm[2]], srcPoints[perm[3]]],
      dstPoints: [dstPoints[perm[0]], dstPoints[perm[1]], dstPoints[perm[2]], dstPoints[perm[3]]],
    });

    if (H === null) continue;

    if(!_checkHomographyPointsGeometricallyConsistent({H, testPoints})) {
      continue;
    }

    Hs.push(H);
  }

  if (Hs.length === 0) return null;

  // pick the best hypothesis
  const hypotheses = [];
  for (let i = 0; i < Hs.length; i++) {
    hypotheses.push({
      H: Hs[i],
      cost: 0
    })
  }

  let curChuckSize = chuckSize;
  for (let i = 0; i < srcPoints.length && hypotheses.length > 2; i += curChuckSize) {
    curChuckSize = Math.min(chuckSize, srcPoints.length - i);
    let chuckEnd = i + curChuckSize;

    for (let j = 0; j < hypotheses.length; j++) {
      for (let k = i; k < chuckEnd; k++) {
        const cost = _cauchyProjectiveReprojectionCost({H: hypotheses[j].H, srcPoint: srcPoints[k], dstPoint: dstPoints[k], oneOverScale2});
        hypotheses[j].cost += cost;
      }
    }

    hypotheses.sort((h1, h2) => {return h1.cost - h2.cost});
    hypotheses.splice(-Math.floor((hypotheses.length+1)/2)); // keep the best half
  }

  let bestIndex = 0;
  for (let i = 1; i < hypotheses.length; i++) {
    if (hypotheses[i].cost < hypotheses[bestIndex].cost) bestIndex = i;
  }

  const finalH = _normalizeHomography({inH: hypotheses[bestIndex].H});

  if (!_checkHeuristics({H: finalH, testPoints, keyframe})) return null;
  return finalH;
}

const _checkHeuristics = ({H, testPoints, keyframe}) => {
  const HInv = matrixInverse33(H, 0.00001);
  // console.log("final H Inv: ", HInv);
  if (HInv === null) return false;

  const mp = []
  for (let i = 0; i < testPoints.length; i++) { // 4 test points, corner of keyframe
    mp.push(multiplyPointHomographyInhomogenous(testPoints[i], HInv));
  }
  const smallArea = smallestTriangleArea(mp[0], mp[1], mp[2], mp[3]);

  if (smallArea < keyframe.width * keyframe.height * 0.0001) return false;

  if (!quadrilateralConvex(mp[0], mp[1], mp[2], mp[3])) return false;

  return true;
}

const _normalizeHomography = ({inH}) => {
  const oneOver = 1.0 / inH[8];

  const H = [];
  for (let i = 0; i < 8; i++) {
    H[i] = inH[i] * oneOver;
  }
  H[8] = 1.0;
  return H;
}

const _cauchyProjectiveReprojectionCost = ({H, srcPoint, dstPoint, oneOverScale2}) => {
  const x = multiplyPointHomographyInhomogenous(srcPoint, H);
  const f =[
    x[0] - dstPoint[0],
    x[1] - dstPoint[1]
  ];
  return Math.log(1 + (f[0]*f[0]+f[1]*f[1]) * oneOverScale2);
}

const _checkHomographyPointsGeometricallyConsistent = ({H, testPoints}) => {
  const mappedPoints = [];
  for (let i = 0; i < testPoints.length; i++) {
    mappedPoints[i] = multiplyPointHomographyInhomogenous(testPoints[i], H);
    //console.log("map", testPoints[i], mappedPoints[i], H);
  }
  for (let i = 0; i < testPoints.length; i++) {
    const i1 = i;
    const i2 = (i+1) % testPoints.length;
    const i3 = (i+2) % testPoints.length;
    if (!checkThreePointsConsistent(
      testPoints[i1], testPoints[i2], testPoints[i3],
      mappedPoints[i1], mappedPoints[i2], mappedPoints[i3])) return false;
  }
  return true;
}

// Condition four 2D points such that the mean is zero and the standard deviation is sqrt(2).
const _condition4Points2d = ({x1, x2, x3, x4}) => {
  const mu = [];
  const d1 = [];
  const d2 = [];
  const d3 = [];
  const d4 = [];

  mu[0] = (x1[0]+x2[0]+x3[0]+x4[0])/4;
  mu[1] = (x1[1]+x2[1]+x3[1]+x4[1])/4;

  d1[0] = x1[0]-mu[0];
  d1[1] = x1[1]-mu[1];
  d2[0] = x2[0]-mu[0];
  d2[1] = x2[1]-mu[1];
  d3[0] = x3[0]-mu[0];
  d3[1] = x3[1]-mu[1];
  d4[0] = x4[0]-mu[0];
  d4[1] = x4[1]-mu[1];

  const ds1 = Math.sqrt(d1[0]*d1[0]+d1[1]*d1[1]);
  const ds2 = Math.sqrt(d2[0]*d2[0]+d2[1]*d2[1]);
  const ds3 = Math.sqrt(d3[0]*d3[0]+d3[1]*d3[1]);
  const ds4 = Math.sqrt(d4[0]*d4[0]+d4[1]*d4[1]);
  const d = (ds1+ds2+ds3+ds4)/4;

  if (d == 0) return null;

  const s = (1.0/d)*SQRT2;

  const xp1 = [];
  const xp2 = [];
  const xp3 = [];
  const xp4 = [];

  xp1[0] = d1[0]*s;
  xp1[1] = d1[1]*s;
  xp2[0] = d2[0]*s;
  xp2[1] = d2[1]*s;
  xp3[0] = d3[0]*s;
  xp3[1] = d3[1]*s;
  xp4[0] = d4[0]*s;
  xp4[1] = d4[1]*s;

  return {xp1, xp2, xp3, xp4, s, t: mu};
}

const _solveHomographyFourPoints = ({srcPoints, dstPoints}) => {
  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    window.debug.homographyIndex += 1;
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const {x1, x2, x3, x4, xp1, xp2, xp3, xp4} = dHomography;
    const l1 = [srcPoints[0],srcPoints[1],srcPoints[2],srcPoints[3],dstPoints[0],dstPoints[1],dstPoints[2],dstPoints[3]];
    const l2 = [x1, x2, x3, x4, xp1, xp2, xp3, xp4];
    for (let i = 0; i < l1.length; i++) {
      if (!window.cmp(l1[i][0], l2[i][0]) || !window.cmp(l1[i][1], l2[i][1])) {
        console.log('INCORRECT homography points', window.debug.homographyIndex, i, l1[i], l2[i]);
      }
    }
  }

  const res1 = _condition4Points2d({x1: srcPoints[0], x2: srcPoints[1], x3: srcPoints[2], x4: srcPoints[3]});

  if (res1 === null) return null;

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const {x1p, x2p, x3p, x4p, t, s} = dHomography;
    const l1 = [res1.xp1, res1.xp2, res1.xp3, res1.xp4, res1.t];
    const l2 = [x1p, x2p, x3p, x4p, t];
    for (let i = 0; i < l1.length; i++) {
      if (!window.cmp(l1[i][0], l2[i][0]) || !window.cmp(l1[i][1], l2[i][1])) {
        console.log('INCORRECT homography res1', window.debug.homographyIndex, i, l1[i], l2[i]);
      }
    }
    if (!window.cmp(res1.s, s)) {
      console.log('INCORRECT homography res1 S', window.debug.homographyIndex, res1.s, s);
    }
  }

  const res2 = _condition4Points2d({x1: dstPoints[0], x2: dstPoints[1], x3: dstPoints[2], x4: dstPoints[3]});
  if (res2 === null) return null;

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const {xp1p, xp2p, xp3p, xp4p, tp, sp} = dHomography;
    const l1 = [res2.xp1, res2.xp2, res2.xp3, res2.xp4, res2.t];
    const l2 = [xp1p, xp2p, xp3p, xp4p, tp];
    for (let i = 0; i < l1.length; i++) {
      if (!window.cmp(l1[i][0], l2[i][0]) || !window.cmp(l1[i][1], l2[i][1])) {
        console.log('INCORRECT homography res1', window.debug.homographyIndex, i, l1[i], l2[i]);
      }
    }
    if (!window.cmp(res2.s, sp)) {
      console.log('INCORRECT homography res1 S', window.debug.homographyIndex, i, res2.s, sp);
    }
  }

  const Hn = _solveHomography4PointsInhomogenous({
    x1: res1.xp1, x2: res1.xp2, x3: res1.xp3, x4: res1.xp4,
    xp1: res2.xp1, xp2: res2.xp2, xp3: res2.xp3, xp4: res2.xp4,
  });

  if (Hn === null) return null;

  if (Math.abs(determinant(Hn)) < 0.00001) return null;

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const dHn = dHomography.Hn;
    if (!window.cmpArray(Hn, dHn, 0.001)) {
      console.log("INCORRECT Hn", window.debug.querykeyframeIndex, window.debug.homographyIndex, Hn, dHn);
    }
    const dDetH = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].detH;
    if (!window.cmp(determinant(Hn), dDetH)) {
      console.log("INCORRECT determinant", determinant(Hn), dDetH);
    }
  }

  const H = _denomalizeHomography({H: Hn, s: res1.s, t: res1.t, sp: res2.s, tp: res2.t});

  return H;
}

// denormalize homography
// Hp = inv(Tp)*H*T
const _denomalizeHomography = ({H, s, t, sp, tp}) => {
  const a = H[6]*tp[0];
  const b = H[7]*tp[0];
  const c = H[0]/sp;
  const d = H[1]/sp;
  const apc = a+c;
  const bpd = b+d;

  const e = H[6]*tp[1];
  const f = H[7]*tp[1];
  const g = H[3]/sp;
  const h = H[4]/sp;
  const epg = e+g;
  const fph = f+h;

  const stx = s*t[0];
  const sty = s*t[1];

  const Hp = [];
  Hp[0] = s*apc;
  Hp[1] = s*bpd;
  Hp[2] = H[8]*tp[0] + H[2]/sp - stx*apc - sty*bpd;

  Hp[3] = s*epg;
  Hp[4] = s*fph;
  Hp[5] = H[8]*tp[1] + H[5]/sp - stx*epg - sty*fph;

  Hp[6] = H[6]*s;
  Hp[7] = H[7]*s;
  Hp[8] = H[8] - Hp[6]*t[0] - Hp[7]*t[1];

  return Hp;
};

// can someone verify the implementation of this QR decomposition?
const _solveHomography4PointsInhomogenous = ({x1, x2, x3, x4, xp1, xp2, xp3, xp4}) => {
  const xList = [x1, x2, x3, x4];
  const xpList = [xp1, xp2, xp3, xp4];

  const A = []; // 8 x 9
  for (let i = 0; i < 4; i++) {
    const offset = i * 18;
    const x = xList[i];
    const xp = xpList[i];
    A[offset+0] = -x[0];
    A[offset+1] = -x[1];
    A[offset+2] = -1;
    A[offset+3] = 0;
    A[offset+4] = 0;
    A[offset+5] = 0;
    A[offset+6] = xp[0]*x[0];
    A[offset+7] = xp[0]*x[1];
    A[offset+8] = xp[0];
    A[offset+9] = 0;
    A[offset+10] = 0;
    A[offset+11] = 0;
    A[offset+12] = -x[0];
    A[offset+13] = -x[1];
    A[offset+14] = -1;
    A[offset+15] = xp[1]*x[0];
    A[offset+16] = xp[1]*x[1];
    A[offset+17] = xp[1];
  }

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dA = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].A;
    if (!window.cmpArray(A, dA)) {
      console.log("INCORRECT A", window.debug.querykeyframeIndex, window.debug.homographyIndex, A, dA);
    }
  }

  const Q = [];
  for (let i = 0; i < 72; i++) {
    Q[i] = A[i];
  }

  // solve x for Ax=0 with QR decomposition with Gram-Schmidt
  for (let row = 0; row < 8; row++) {
    if (row > 0) {
      for (let j = row; j < 8; j++) {
        // project a vector "a" onto a normalized basis vector "e".
        // x = x - dot(a,e)*e

        let d = 0; // dot(a, e);
        for (let i = 0; i < 9; i++) {
          d += Q[(row-1) * 9 + i] * A[j * 9 + i];
        }

        for (let i = 0; i < 9; i++) {
          Q[j * 9 + i] -= d * Q[ (row-1) * 9 + i];
        }
      }
    }

    let maxValue = -1;
    let maxRow = -1;
    const ss = [];
    for (let j = row; j < 8; j++) {
      ss[j] = 0;
      for (let i = 0; i < 9; i++) {
        ss[j] += (Q[j*9+i] * Q[j*9+i]);
      }
      if (ss[j] > maxValue) {
        maxValue = ss[j];
        maxRow = j;
      }
    }
    if ( Math.abs(ss[maxRow]) < EPSILON) {
      return null; // no solution
    }

    // swap current row with maxindex row
    if (row !== maxRow) {
      for (let i = 0; i < 9; i++) {
        let tmp = A[row * 9 + i];
        A[row * 9 + i] = A[maxRow * 9 + i];
        A[maxRow * 9 + i] = tmp;

        let tmp2 = Q[row * 9 + i];
        Q[row * 9 + i] = Q[maxRow * 9 + i];
        Q[maxRow * 9 + i] = tmp2;
      }
    }

    for (let i = 0; i < 9; i++) {
      Q[row * 9 + i] = 1.0 * Q[row * 9 + i] / Math.sqrt(ss[maxRow]);
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dQ = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].Q8;
    if (!window.cmpArray(Q, dQ, 0.001)) {
      console.log("INCORRECT Q8", window.debug.querykeyframeIndex, window.debug.homographyIndex, Q, dQ);
    }
  }

  // compute x from Q
  const w = [];
  const X = [];
  for (let row = 0; row < 9; row++) {
    for (let i = 0; i < 9; i++) {
      X[row * 9 + i] = (Q[i] * -Q[row]);
    }
    X[row * 9 + row] = 1 + X[row * 9 + row];

    for (let j = 1; j < 8; j++) {
      for(let i = 0; i < 9; i++) {
        X[row * 9 + i] += (Q[j * 9 + i] * -Q[j * 9 + row]);
      }
    }

    let ss = 0;
    for (let i = 0; i < 9; i++) {
      ss += (X[row * 9 + i] * X[row * 9 + i]);
    }
    if (Math.abs(ss) < EPSILON) {
      w[row] = 0;
      continue;
    }

    w[row] = Math.sqrt(ss);
    for (let i = 0; i < 9; i++) {
      X[row * 9 + i] = X[row * 9 + i] / w[row];
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dX = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].X;
    const dw = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].w;
    if (!window.cmpArray(X, dX, 0.01)) {
      console.log("INCORRECT X", window.debug.querykeyframeIndex, window.debug.homographyIndex, JSON.parse(JSON.stringify(X)), dX);
    }
    if (!window.cmpArray(w, dw, 0.01)) {
      console.log("INCORRECT w", window.debug.querykeyframeIndex, window.debug.homographyIndex, JSON.parse(JSON.stringify(w)), dw);
    }
  }

  let maxRow = -1;
  let maxValue = -1;
  for (let j = 0; j < 9; j++) {
    if (w[j] > maxValue) {
      maxRow = j;
      maxValue = w[j];
    }
  }


  if (maxValue == 0) return null; // no solution

  const x = [];
  for (let i = 0; i < 9; i++) {
    x[i] = X[maxRow * 9 + i];
  }

  return x;
}

module.exports = {
  computeHomography,
}



/***/ }),

/***/ "./src/image-target/matching/hough.js":
/*!********************************************!*\
  !*** ./src/image-target/matching/hough.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const kHoughBinDelta = 1;

// mathces [querypointIndex:x, keypointIndex: x]
const computeHoughMatches = (options) => {
  const {keypoints, querypoints, keywidth, keyheight, querywidth, queryheight, matches} = options;

  const maxX = querywidth * 1.2;
  const minX = -maxX;
  const maxY = queryheight * 1.2;
  const minY = -maxY;
  const numAngleBins = 12;
  const numScaleBins = 10;
  const minScale = -1;
  const maxScale = 1;
  const scaleK = 10.0;
  const scaleOneOverLogK = 1.0 / Math.log(scaleK);
  const maxDim = Math.max(keywidth, keyheight);
  const keycenterX = Math.floor(keywidth / 2);
  const keycenterY = Math.floor(keyheight / 2);

  // compute numXBins and numYBins based on matches
  const projectedDims = [];
  for (let i = 0; i < matches.length; i++) {
    const queryscale = querypoints[matches[i].querypointIndex].scale;
    const keyscale = keypoints[matches[i].keypointIndex].scale;
    if (keyscale == 0) console.log("ERROR divide zero");
    const scale = queryscale / keyscale;
    projectedDims.push( scale * maxDim );
  }

  // TODO optimize median
  //   weird. median should be [Math.floor(projectedDims.length/2) - 1] ?
  projectedDims.sort((a1, a2) => {return a1 - a2});
  const medianProjectedDim = projectedDims[ Math.floor(projectedDims.length/2) - (projectedDims.length%2==0?1:0) -1 ];

  const binSize = 0.25 * medianProjectedDim;
  const numXBins = Math.max(5, Math.ceil((maxX - minX) / binSize));
  const numYBins = Math.max(5, Math.ceil((maxY - minY) / binSize));

  const numXYBins = numXBins * numYBins;
  const numXYAngleBins = numXYBins * numAngleBins;

  // do voting
  const querypointValids = [];
  const querypointBinLocations = [];
  const votes = {};
  for (let i = 0; i < matches.length; i++) {
    const querypoint = querypoints[matches[i].querypointIndex];
    const keypoint = keypoints[matches[i].keypointIndex];

    const {x, y, scale, angle} = _mapCorrespondence({querypoint, keypoint, keycenterX, keycenterY, scaleOneOverLogK});

    // Check that the vote is within range
    if (x < minX || x >= maxX || y < minY || y >= maxY || angle <= -Math.PI || angle > Math.PI || scale < minScale || scale >= maxScale) {
      querypointValids[i] = false;
      continue;
    }

    // map properties to bins
    let fbinX = numXBins * (x - minX) / (maxX - minX);
    let fbinY = numYBins * (y - minY) / (maxY - minY);
    let fbinAngle = numAngleBins * (angle + Math.PI) / (2.0 * Math.PI);
    let fbinScale = numScaleBins * (scale - minScale) / (maxScale - minScale);

    querypointBinLocations[i] = {binX: fbinX, binY: fbinY, binAngle: fbinAngle, binScale: fbinScale};

    let binX = Math.floor(fbinX - 0.5);
    let binY = Math.floor(fbinY - 0.5);
    let binScale = Math.floor(fbinScale - 0.5);
    let binAngle = (Math.floor(fbinAngle - 0.5) + numAngleBins) % numAngleBins;

    // check can vote all 16 bins
    if (binX < 0 || binX + 1 >= numXBins || binY < 0 || binY + 1 >= numYBins || binScale < 0 || binScale +1 >= numScaleBins) {
      querypointValids[i] = false;
      continue;
    }

    for (let dx = 0; dx < 2; dx++) {
      let binX2 = binX + dx;

      for (let dy = 0; dy < 2; dy++) {
        let binY2 = binY + dy;

        for (let dangle = 0; dangle < 2; dangle++) {
          let binAngle2 = (binAngle + dangle) % numAngleBins;

          for (let dscale = 0; dscale < 2; dscale++) {
            let binScale2 = binScale + dscale;

            const binIndex = binX2 + binY2 * numXBins + binAngle2 * numXYBins + binScale2 * numXYAngleBins;

            if (votes[binIndex] === undefined) votes[binIndex] = 0;
            votes[binIndex] += 1;
          }
        }
      }
    }
    querypointValids[i] = true;
  }

  let maxVotes = 0;
  let maxVoteIndex = -1;
  Object.keys(votes).forEach((index) => {
    if (votes[index] > maxVotes) {
      maxVotes = votes[index];
      maxVoteIndex = index;
    }
  });

  if (maxVotes < 3) return [];

  // get back bins from vote index
  const binX = Math.floor(((maxVoteIndex % numXYAngleBins) % numXYBins) % numXBins);
  const binY = Math.floor((((maxVoteIndex - binX) % numXYAngleBins) % numXYBins) / numXBins);
  const binAngle = Math.floor(((maxVoteIndex - binX - (binY * numXBins)) % numXYAngleBins) / numXYBins);
  const binScale = Math.floor((maxVoteIndex - binX - (binY * numXBins) - (binAngle * numXYBins)) / numXYAngleBins);

  //console.log("hough voted: ", {binX, binY, binAngle, binScale, maxVoteIndex});

  const houghMatches = [];
  for (let i = 0; i < matches.length; i++) {
    if (!querypointValids[i]) continue;

    const queryBins = querypointBinLocations[i];
    // compute bin difference
    const distBinX = Math.abs(queryBins.binX - (binX+0.5));
    if (distBinX >= kHoughBinDelta) continue;

    const distBinY = Math.abs(queryBins.binY - (binY+0.5));
    if (distBinY >= kHoughBinDelta) continue;

    const distBinScale = Math.abs(queryBins.binScale - (binScale+0.5));
    if (distBinScale >= kHoughBinDelta) continue;

    const temp = Math.abs(queryBins.binAngle - (binAngle+0.5));
    const distBinAngle = Math.min(temp, numAngleBins - temp);
    if (distBinAngle >= kHoughBinDelta) continue;

    houghMatches.push(matches[i]);
  }
  return houghMatches;
}

const _mapCorrespondence = ({querypoint, keypoint, keycenterX, keycenterY, scaleOneOverLogK}) => {
  // map angle to (-pi, pi]
  let angle = querypoint.angle - keypoint.angle;
  if (angle <= -Math.PI) angle += 2*Math.PI;
  else if (angle > Math.PI) angle -= 2*Math.PI;

  const scale = querypoint.scale / keypoint.scale;

  // 2x2 similarity
  const cos = scale * Math.cos(angle);
  const sin = scale * Math.sin(angle);
  const S = [cos, -sin, sin, cos];

  const tp = [
    S[0] * keypoint.x + S[1] * keypoint.y,
    S[2] * keypoint.x + S[3] * keypoint.y
  ];
  const tx = querypoint.x - tp[0];
  const ty = querypoint.y - tp[1];

  return {
    x: S[0] * keycenterX + S[1] * keycenterY + tx,
    y: S[2] * keycenterX + S[3] * keycenterY + ty,
    angle: angle,
    scale: Math.log(scale) * scaleOneOverLogK
  }
}

module.exports = {
  computeHoughMatches
}



/***/ }),

/***/ "./src/image-target/matching/matcher.js":
/*!**********************************************!*\
  !*** ./src/image-target/matching/matcher.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {match} = __webpack_require__(/*! ./matching */ "./src/image-target/matching/matching.js");

class Matcher {
  constructor(queryWidth, queryHeight, debugMode = false) {
    this.queryWidth = queryWidth;
    this.queryHeight = queryHeight;
    this.debugMode = debugMode;
  }

  matchDetection(keyframes, featurePoints) {
    const {result, debugExtra} = match({keyframes: keyframes, querypoints: featurePoints, querywidth: this.queryWidth, queryheight: this.queryHeight, debugMode: this.debugMode});
    if (result === null) {
      return {keyframeIndex: -1, debugExtra};
    }

    const screenCoords = [];
    const worldCoords = [];
    const keyframe = keyframes[result.keyframeIndex];

    for (let i = 0; i < result.matches.length; i++) {
      const querypointIndex = result.matches[i].querypointIndex;
      const keypointIndex = result.matches[i].keypointIndex;
      screenCoords.push({
        x: featurePoints[querypointIndex].x,
        y: featurePoints[querypointIndex].y,
      })
      worldCoords.push({
        x: (keyframe.points[keypointIndex].x + 0.5) / keyframe.scale,
        y: ((keyframe.height-0.5) -keyframe.points[keypointIndex].y) / keyframe.scale,
        z: 0,
      })
    }

    return {screenCoords, worldCoords, keyframeIndex: result.keyframeIndex, debugExtra};
  }
}

module.exports = {
  Matcher
}


/***/ }),

/***/ "./src/image-target/matching/matching.js":
/*!***********************************************!*\
  !*** ./src/image-target/matching/matching.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const TinyQueue = __webpack_require__(/*! tinyqueue */ "./node_modules/tinyqueue/index.js").default;
const {compute: hammingCompute} = __webpack_require__(/*! ./hamming-distance.js */ "./src/image-target/matching/hamming-distance.js");
const {computeHoughMatches} = __webpack_require__(/*! ./hough.js */ "./src/image-target/matching/hough.js");
const {computeHomography} = __webpack_require__(/*! ./homography.js */ "./src/image-target/matching/homography.js");
const {multiplyPointHomographyInhomogenous, matrixInverse33} = __webpack_require__(/*! ../utils/geometry.js */ "./src/image-target/utils/geometry.js");

const INLIER_THRESHOLD = 3;
//const MIN_NUM_INLIERS = 8;  //default
const MIN_NUM_INLIERS = 6;
const CLUSTER_MAX_POP = 8;
const HAMMING_THRESHOLD = 0.7;

// match list of querpoints against pre-built list of keyframes
const match = ({keyframes, querypoints, querywidth, queryheight, debugMode}) => {
  let debugExtra = null;
  if (debugMode) debugExtra = [];

  let result = null;
  for (let i = 0; i < keyframes.length; i++) {
    const keyframe = keyframes[i];
    const keypoints = keyframe.points;

    if (debugMode) {
      debugExtra[i] = {};
    }

    const matches = [];
    for (let j = 0; j < querypoints.length; j++) {
      const rootNode = keyframe.pointsCluster.rootNode;
      const querypoint = querypoints[j];
      const keypointIndexes = [];
      const queue = new TinyQueue([], (a1, a2) => {return a1.d - a2.d});

      _query({node: rootNode, keypoints, querypoint, queue, keypointIndexes, numPop: 0});

      let bestIndex = -1;
      let bestD1 = Number.MAX_SAFE_INTEGER;
      let bestD2 = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < keypointIndexes.length; k++) {
        const keypoint = keypoints[keypointIndexes[k]];
        if (keypoint.maxima != querypoint.maxima) continue;

        const d = hammingCompute({v1: keypoint.descriptors, v2: querypoint.descriptors});
        if (d < bestD1) {
          bestD2 = bestD1;
          bestD1 = d;
          bestIndex = keypointIndexes[k];
        } else if (d < bestD2) {
          bestD2 = d;
        }
      }
      if (bestIndex !== -1 && (bestD2 === Number.MAX_SAFE_INTEGER || (1.0 * bestD1 / bestD2) < HAMMING_THRESHOLD)) {
        matches.push({querypointIndex: j, keypointIndex: bestIndex});
      }
    }

    if (debugMode) {
      debugExtra[i].matches = matches;
    }

    if (matches.length < MIN_NUM_INLIERS) {
      continue;
    }

    const houghMatches = computeHoughMatches({
      keypoints: keyframe.points,
      querypoints,
      keywidth: keyframe.width,
      keyheight: keyframe.height,
      querywidth,
      queryheight,
      matches,
    });

    if (debugMode) {
      debugExtra[i].houghMatches = houghMatches;
    }

    const srcPoints = [];
    const dstPoints = [];
    for (let i = 0; i < houghMatches.length; i++) {
      const querypoint = querypoints[houghMatches[i].querypointIndex];
      const keypoint = keypoints[houghMatches[i].keypointIndex];
      srcPoints.push([ keypoint.x, keypoint.y ]);
      dstPoints.push([ querypoint.x, querypoint.y ]);
    }

    const H = computeHomography({
      srcPoints,
      dstPoints,
      keyframe,
    });

    if (H === null) continue;

    const inlierMatches = _findInlierMatches({
      querypoints,
      keypoints: keyframe.points,
      H,
      matches: houghMatches,
      threshold: INLIER_THRESHOLD
    });

    if (debugMode) {
      debugExtra[i].inlierMatches = inlierMatches;
    }

    if (inlierMatches.length < MIN_NUM_INLIERS) {
      continue;
    }


    // do another loop of match using the homography
    const HInv = matrixInverse33(H, 0.00001);
    const dThreshold2 = 10 * 10;
    const matches2 = [];
    for (let j = 0; j < querypoints.length; j++) {
      const querypoint = querypoints[j];
      const mapquerypoint = multiplyPointHomographyInhomogenous([querypoint.x, querypoint.y], HInv);

      let bestIndex = -1;
      let bestD1 = Number.MAX_SAFE_INTEGER;
      let bestD2 = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < keypoints.length; k++) {
        const keypoint = keypoints[k];
        if (keypoint.maxima != querypoint.maxima) continue;

        // check distance threshold
        const d2 = (keypoint.x - mapquerypoint[0]) * (keypoint.x - mapquerypoint[0])
                  + (keypoint.y - mapquerypoint[1]) * (keypoint.y - mapquerypoint[1]);
        if (d2 > dThreshold2) continue;

        const d = hammingCompute({v1: keypoint.descriptors, v2: querypoint.descriptors});
        if (d < bestD1) {
          bestD2 = bestD1;
          bestD1 = d;
          bestIndex = k;
        } else if (d < bestD2) {
          bestD2 = d;
        }
      }

      if (bestIndex !== -1 && (bestD2 === Number.MAX_SAFE_INTEGER || (1.0 * bestD1 / bestD2) < HAMMING_THRESHOLD)) {
        matches2.push({querypointIndex: j, keypointIndex: bestIndex});
      }
    }

    if (debugMode) {
      debugExtra[i].matches2 = matches2;
    }

    const houghMatches2 = computeHoughMatches({
      keypoints: keyframe.points,
      querypoints,
      keywidth: keyframe.width,
      keyheight: keyframe.height,
      querywidth,
      queryheight,
      matches: matches2,
    });

    if (debugMode) {
      debugExtra[i].houghMatches2 = houghMatches2;
    }

    const srcPoints2 = [];
    const dstPoints2 = [];
    for (let i = 0; i < houghMatches2.length; i++) {
      const querypoint = querypoints[houghMatches2[i].querypointIndex];
      const keypoint = keypoints[houghMatches2[i].keypointIndex];
      srcPoints2.push([ keypoint.x, keypoint.y ]);
      dstPoints2.push([ querypoint.x, querypoint.y ]);
    }

    const H2 = computeHomography({
      srcPoints: srcPoints2,
      dstPoints: dstPoints2,
      keyframe
    });

    if (H2 === null) continue;

    const inlierMatches2 = _findInlierMatches({
      querypoints,
      keypoints: keyframe.points,
      H: H2,
      matches: houghMatches2,
      threshold: INLIER_THRESHOLD
    });

    if (inlierMatches2.length < MIN_NUM_INLIERS) {
      continue;
    }

    if (debugMode) {
      debugExtra[i].inlierMatches2 = inlierMatches2;
      debugExtra[i].H2 = H2;
    }

    if (result === null || result.matches.length < inlierMatches2.length) {
      result = {
        keyframeIndex: i,
        matches: inlierMatches2,
        H: H2,
      }
    }
  }

  return {result, debugExtra};
};

const _query = ({node, keypoints, querypoint, queue, keypointIndexes, numPop}) => {
  if (node.leaf) {
    for (let i = 0; i < node.pointIndexes.length; i++) {
      keypointIndexes.push(node.pointIndexes[i]);
    }
    return;
  }

  const distances = [];
  for (let i = 0; i < node.children.length; i++) {
    const childNode = node.children[i];
    const centerPointIndex = childNode.centerPointIndex;
    const d = hammingCompute({v1: keypoints[centerPointIndex].descriptors, v2: querypoint.descriptors});
    distances.push(d);
  }

  let minD = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < node.children.length; i++) {
    minD = Math.min(minD, distances[i]);
  }

  for (let i = 0; i < node.children.length; i++) {
    if (distances[i] !== minD) {
      queue.push({node: node.children[i], d: distances[i]});
    }
  }
  for (let i = 0; i < node.children.length; i++) {
    if (distances[i] === minD) {
      _query({node: node.children[i], keypoints, querypoint, queue, keypointIndexes, numPop});
    }
  }

  if (numPop < CLUSTER_MAX_POP && queue.length > 0) {
    const {node, d} = queue.pop();
    numPop += 1;
    _query({node, keypoints, querypoint, queue, keypointIndexes, numPop});
  }
};

const _findInlierMatches = (options) => {
  const {keypoints, querypoints, H, matches, threshold} = options;

  const threshold2 = threshold * threshold;

  const goodMatches = [];
  for (let i = 0; i < matches.length; i++) {
    const querypoint = querypoints[matches[i].querypointIndex];
    const keypoint = keypoints[matches[i].keypointIndex];
    const mp = multiplyPointHomographyInhomogenous([keypoint.x, keypoint.y], H);
    const d2 = (mp[0] - querypoint.x) * (mp[0] - querypoint.x) + (mp[1] - querypoint.y) * (mp[1] - querypoint.y);
    if (d2 <= threshold2) {
      goodMatches.push( matches[i] );
    }
  }
  return goodMatches;
}

module.exports = {
  match
}


/***/ }),

/***/ "./src/image-target/utils/geometry.js":
/*!********************************************!*\
  !*** ./src/image-target/utils/geometry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// check which side point C on the line from A to B
const linePointSide = (A, B, C) => {
  return ((B[0]-A[0])*(C[1]-A[1])-(B[1]-A[1])*(C[0]-A[0]));
}

// srcPoints, dstPoints: array of four elements [x, y]
const checkFourPointsConsistent = (x1, x2, x3, x4, x1p, x2p, x3p, x4p) => {
  if ((linePointSide(x1, x2, x3) > 0) !== (linePointSide(x1p, x2p, x3p) > 0)) return false;
  if ((linePointSide(x2, x3, x4) > 0) !== (linePointSide(x2p, x3p, x4p) > 0)) return false;
  if ((linePointSide(x3, x4, x1) > 0) !== (linePointSide(x3p, x4p, x1p) > 0)) return false;
  if ((linePointSide(x4, x1, x2) > 0) !== (linePointSide(x4p, x1p, x2p) > 0)) return false;
  return true;
}

const checkThreePointsConsistent = (x1, x2, x3, x1p, x2p, x3p) => {
  if ((linePointSide(x1, x2, x3) > 0) !== (linePointSide(x1p, x2p, x3p) > 0)) return false;
  return true;
}

const determinant = (A) => {
  const C1 =  A[4] * A[8] - A[5] * A[7];
  const C2 =  A[3] * A[8] - A[5] * A[6];
  const C3 =  A[3] * A[7] - A[4] * A[6];
  return A[0] * C1 - A[1] * C2 + A[2] * C3;
}

const matrixInverse33 = (A, threshold) => {
  const det = determinant(A);
  if (Math.abs(det) <= threshold) return null;
  const oneOver = 1.0 / det;

  const B = [
    (A[4] * A[8] - A[5] * A[7]) * oneOver,
    (A[2] * A[7] - A[1] * A[8]) * oneOver,
    (A[1] * A[5] - A[2] * A[4]) * oneOver,
    (A[5] * A[6] - A[3] * A[8]) * oneOver,
    (A[0] * A[8] - A[2] * A[6]) * oneOver,
    (A[2] * A[3] - A[0] * A[5]) * oneOver,
    (A[3] * A[7] - A[4] * A[6]) * oneOver,
    (A[1] * A[6] - A[0] * A[7]) * oneOver,
    (A[0] * A[4] - A[1] * A[3]) * oneOver,
  ];
  return B;
}

const matrixMul33 = (A, B) => {
  const C = [];
  C[0] = A[0]*B[0] + A[1]*B[3] + A[2]*B[6];
  C[1] = A[0]*B[1] + A[1]*B[4] + A[2]*B[7];
  C[2] = A[0]*B[2] + A[1]*B[5] + A[2]*B[8];
  C[3] = A[3]*B[0] + A[4]*B[3] + A[5]*B[6];
  C[4] = A[3]*B[1] + A[4]*B[4] + A[5]*B[7];
  C[5] = A[3]*B[2] + A[4]*B[5] + A[5]*B[8];
  C[6] = A[6]*B[0] + A[7]*B[3] + A[8]*B[6];
  C[7] = A[6]*B[1] + A[7]*B[4] + A[8]*B[7];
  C[8] = A[6]*B[2] + A[7]*B[5] + A[8]*B[8];
  return C;
}

const multiplyPointHomographyInhomogenous = (x, H) => {
  const w = H[6]*x[0] + H[7]*x[1] + H[8];
  const xp = [];
  xp[0] = (H[0]*x[0] + H[1]*x[1] + H[2])/w;
  xp[1] = (H[3]*x[0] + H[4]*x[1] + H[5])/w;
  return xp;
}

const smallestTriangleArea = (x1, x2, x3, x4) => {
  const v12 = _vector(x2, x1);
  const v13 = _vector(x3, x1);
  const v14 = _vector(x4, x1);
  const v32 = _vector(x2, x3);
  const v34 = _vector(x4, x3);
  const a1 = _areaOfTriangle(v12, v13);
  const a2 = _areaOfTriangle(v13, v14);
  const a3 = _areaOfTriangle(v12, v14);
  const a4 = _areaOfTriangle(v32, v34);
  return Math.min(Math.min(Math.min(a1, a2), a3), a4);
}

// check if four points form a convex quadrilaternal.
// all four combinations should have same sign
const quadrilateralConvex = (x1, x2, x3, x4) => {
  const first = linePointSide(x1, x2, x3) <= 0;
  if ( (linePointSide(x2, x3, x4) <= 0) !== first) return false;
  if ( (linePointSide(x3, x4, x1) <= 0) !== first) return false;
  if ( (linePointSide(x4, x1, x2) <= 0) !== first) return false;

  //if (linePointSide(x1, x2, x3) <= 0) return false;
  //if (linePointSide(x2, x3, x4) <= 0) return false;
  //if (linePointSide(x3, x4, x1) <= 0) return false;
  //if (linePointSide(x4, x1, x2) <= 0) return false;
  return true;
}

const _vector = (a, b) => {
  return [
    a[0] - b[0],
    a[1] - b[1]
  ]
}

const _areaOfTriangle = (u, v) => {
  const a = u[0]*v[1] - u[1]*v[0];
  return Math.abs(a) * 0.5;
}

module.exports = {
  matrixInverse33,
  matrixMul33,
  quadrilateralConvex,
  smallestTriangleArea,
  multiplyPointHomographyInhomogenous,
  checkThreePointsConsistent,
  checkFourPointsConsistent,
  determinant
}



/***/ }),

/***/ "./src/image-target/utils/randomizer.js":
/*!**********************************************!*\
  !*** ./src/image-target/utils/randomizer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const mRandSeed = 1234;

const createRandomizer = () => {
  const randomizer = {
    seed: mRandSeed,

    arrayShuffle(options) {
      const {arr, sampleSize} = options;
      for (let i = 0; i < sampleSize; i++) {

        this.seed = (214013 * this.seed + 2531011) % (1 << 31);
        let k = (this.seed >> 16) & 0x7fff;
        k = k % arr.length;

        let tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
      }
    },

    nextInt(maxValue) {
      this.seed = (214013 * this.seed + 2531011) % (1 << 31);
      let k = (this.seed >> 16) & 0x7fff;
      k = k % maxValue;
      return k;
    }
  }
  return randomizer;
}

module.exports = {
  createRandomizer
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWFueS1hcnJheS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1heC9saWItZXM2L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1hcnJheS1taW4vbGliLWVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktcmVzY2FsZS9saWItZXM2L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2NvcnJlbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2NvdmFyaWFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvY2hvbGVza3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvZXZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2x1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL25pcGFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9xci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9zdmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kZWNvbXBvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kZXRlcm1pbmFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbnNwZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2xpbmVhckRlcGVuZGVuY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9tYXRoT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvcHNldWRvSW52ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zdGF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvZmxpcFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvcm93U2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueXF1ZXVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLndvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L2ljcC9lc3RpbWF0ZV9ob21vZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvaWNwL3JlZmluZV9ob21vZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvaWNwL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvbWF0Y2hpbmcvaGFtbWluZy1kaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L21hdGNoaW5nL2hvbW9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC9tYXRjaGluZy9ob3VnaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L21hdGNoaW5nL21hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC9tYXRjaGluZy9tYXRjaGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L3V0aWxzL2dlb21ldHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvdXRpbHMvcmFuZG9taXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFtQzs7QUFFbkM7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxPQUFPLG1EQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRWUsa0VBQUcsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFCbkI7QUFBQTtBQUFBO0FBQW1DOztBQUVuQztBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFlBQVk7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QUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLGFBQWEsZ0JBQWdCO0FBQzdCLHFCQUFxQixnQkFBZ0I7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJ3b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb250cm9sbGVyLndvcmtlci5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiBpc0FueUFycmF5KG9iamVjdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmplY3QpLmVuZHNXaXRoKCdBcnJheV0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FueUFycmF5O1xuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnaXMtYW55LWFycmF5JztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbWF4aW11bSBvZiB0aGUgZ2l2ZW4gdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuZnVuY3Rpb24gbWF4KGlucHV0KSB7XG4gIGlmICghaXNBcnJheShpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgfVxuXG4gIHZhciBtYXhWYWx1ZSA9IGlucHV0WzBdO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaW5wdXRbaV0gPiBtYXhWYWx1ZSkgbWF4VmFsdWUgPSBpbnB1dFtpXTtcbiAgfVxuXG4gIHJldHVybiBtYXhWYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF4O1xuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnaXMtYW55LWFycmF5JztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbWluaW11bSBvZiB0aGUgZ2l2ZW4gdmFsdWVzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuZnVuY3Rpb24gbWluKGlucHV0KSB7XG4gIGlmICghaXNBcnJheShpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgfVxuXG4gIHZhciBtaW5WYWx1ZSA9IGlucHV0WzBdO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaW5wdXRbaV0gPCBtaW5WYWx1ZSkgbWluVmFsdWUgPSBpbnB1dFtpXTtcbiAgfVxuXG4gIHJldHVybiBtaW5WYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWluO1xuIiwiaW1wb3J0IGlzQXJyYXkgZnJvbSAnaXMtYW55LWFycmF5JztcbmltcG9ydCBtYXggZnJvbSAnbWwtYXJyYXktbWF4JztcbmltcG9ydCBtaW4gZnJvbSAnbWwtYXJyYXktbWluJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaW5wdXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLm91dHB1dD1bXV0gc3BlY2lmeSB0aGUgb3V0cHV0IGFycmF5LCBjYW4gYmUgdGhlIGlucHV0IGFycmF5IGZvciBpbiBwbGFjZSBtb2RpZmljYXRpb25cbiAqL1xuXG5mdW5jdGlvbiByZXNjYWxlKGlucHV0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICB2YXIgb3V0cHV0O1xuXG4gIGlmIChvcHRpb25zLm91dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFpc0FycmF5KG9wdGlvbnMub3V0cHV0KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3V0cHV0IG9wdGlvbiBtdXN0IGJlIGFuIGFycmF5IGlmIHNwZWNpZmllZCcpO1xuICAgIH1cblxuICAgIG91dHB1dCA9IG9wdGlvbnMub3V0cHV0O1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IG5ldyBBcnJheShpbnB1dC5sZW5ndGgpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRNaW4gPSBtaW4oaW5wdXQpO1xuICB2YXIgY3VycmVudE1heCA9IG1heChpbnB1dCk7XG5cbiAgaWYgKGN1cnJlbnRNaW4gPT09IGN1cnJlbnRNYXgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluaW11bSBhbmQgbWF4aW11bSBpbnB1dCB2YWx1ZXMgYXJlIGVxdWFsLiBDYW5ub3QgcmVzY2FsZSBhIGNvbnN0YW50IGFycmF5Jyk7XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWluID0gb3B0aW9ucy5taW4sXG4gICAgICBtaW5WYWx1ZSA9IF9vcHRpb25zJG1pbiA9PT0gdm9pZCAwID8gb3B0aW9ucy5hdXRvTWluTWF4ID8gY3VycmVudE1pbiA6IDAgOiBfb3B0aW9ucyRtaW4sXG4gICAgICBfb3B0aW9ucyRtYXggPSBvcHRpb25zLm1heCxcbiAgICAgIG1heFZhbHVlID0gX29wdGlvbnMkbWF4ID09PSB2b2lkIDAgPyBvcHRpb25zLmF1dG9NaW5NYXggPyBjdXJyZW50TWF4IDogMSA6IF9vcHRpb25zJG1heDtcblxuICBpZiAobWluVmFsdWUgPj0gbWF4VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIG9wdGlvbiBtdXN0IGJlIHNtYWxsZXIgdGhhbiBtYXggb3B0aW9uJyk7XG4gIH1cblxuICB2YXIgZmFjdG9yID0gKG1heFZhbHVlIC0gbWluVmFsdWUpIC8gKGN1cnJlbnRNYXggLSBjdXJyZW50TWluKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0W2ldID0gKGlucHV0W2ldIC0gY3VycmVudE1pbikgKiBmYWN0b3IgKyBtaW5WYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2NhbGU7XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJy4vbWF0cml4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcnJlbGF0aW9uKHhNYXRyaXgsIHlNYXRyaXggPSB4TWF0cml4LCBvcHRpb25zID0ge30pIHtcbiAgeE1hdHJpeCA9IG5ldyBNYXRyaXgoeE1hdHJpeCk7XG4gIGxldCB5SXNTYW1lID0gZmFsc2U7XG4gIGlmIChcbiAgICB0eXBlb2YgeU1hdHJpeCA9PT0gJ29iamVjdCcgJiZcbiAgICAhTWF0cml4LmlzTWF0cml4KHlNYXRyaXgpICYmXG4gICAgIUFycmF5LmlzQXJyYXkoeU1hdHJpeClcbiAgKSB7XG4gICAgb3B0aW9ucyA9IHlNYXRyaXg7XG4gICAgeU1hdHJpeCA9IHhNYXRyaXg7XG4gICAgeUlzU2FtZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgeU1hdHJpeCA9IG5ldyBNYXRyaXgoeU1hdHJpeCk7XG4gIH1cbiAgaWYgKHhNYXRyaXgucm93cyAhPT0geU1hdHJpeC5yb3dzKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm90aCBtYXRyaWNlcyBtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHJvd3MnKTtcbiAgfVxuXG4gIGNvbnN0IHsgY2VudGVyID0gdHJ1ZSwgc2NhbGUgPSB0cnVlIH0gPSBvcHRpb25zO1xuICBpZiAoY2VudGVyKSB7XG4gICAgeE1hdHJpeC5jZW50ZXIoJ2NvbHVtbicpO1xuICAgIGlmICgheUlzU2FtZSkge1xuICAgICAgeU1hdHJpeC5jZW50ZXIoJ2NvbHVtbicpO1xuICAgIH1cbiAgfVxuICBpZiAoc2NhbGUpIHtcbiAgICB4TWF0cml4LnNjYWxlKCdjb2x1bW4nKTtcbiAgICBpZiAoIXlJc1NhbWUpIHtcbiAgICAgIHlNYXRyaXguc2NhbGUoJ2NvbHVtbicpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNkeCA9IHhNYXRyaXguc3RhbmRhcmREZXZpYXRpb24oJ2NvbHVtbicsIHsgdW5iaWFzZWQ6IHRydWUgfSk7XG4gIGNvbnN0IHNkeSA9IHlJc1NhbWVcbiAgICA/IHNkeFxuICAgIDogeU1hdHJpeC5zdGFuZGFyZERldmlhdGlvbignY29sdW1uJywgeyB1bmJpYXNlZDogdHJ1ZSB9KTtcblxuICBjb25zdCBjb3JyID0geE1hdHJpeC50cmFuc3Bvc2UoKS5tbXVsKHlNYXRyaXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcnIucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3JyLmNvbHVtbnM7IGorKykge1xuICAgICAgY29yci5zZXQoXG4gICAgICAgIGksXG4gICAgICAgIGosXG4gICAgICAgIGNvcnIuZ2V0KGksIGopICogKDEgLyAoc2R4W2ldICogc2R5W2pdKSkgKiAoMSAvICh4TWF0cml4LnJvd3MgLSAxKSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29ycjtcbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gY292YXJpYW5jZSh4TWF0cml4LCB5TWF0cml4ID0geE1hdHJpeCwgb3B0aW9ucyA9IHt9KSB7XG4gIHhNYXRyaXggPSBuZXcgTWF0cml4KHhNYXRyaXgpO1xuICBsZXQgeUlzU2FtZSA9IGZhbHNlO1xuICBpZiAoXG4gICAgdHlwZW9mIHlNYXRyaXggPT09ICdvYmplY3QnICYmXG4gICAgIU1hdHJpeC5pc01hdHJpeCh5TWF0cml4KSAmJlxuICAgICFBcnJheS5pc0FycmF5KHlNYXRyaXgpXG4gICkge1xuICAgIG9wdGlvbnMgPSB5TWF0cml4O1xuICAgIHlNYXRyaXggPSB4TWF0cml4O1xuICAgIHlJc1NhbWUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHlNYXRyaXggPSBuZXcgTWF0cml4KHlNYXRyaXgpO1xuICB9XG4gIGlmICh4TWF0cml4LnJvd3MgIT09IHlNYXRyaXgucm93cykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvdGggbWF0cmljZXMgbXVzdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiByb3dzJyk7XG4gIH1cbiAgY29uc3QgeyBjZW50ZXIgPSB0cnVlIH0gPSBvcHRpb25zO1xuICBpZiAoY2VudGVyKSB7XG4gICAgeE1hdHJpeCA9IHhNYXRyaXguY2VudGVyKCdjb2x1bW4nKTtcbiAgICBpZiAoIXlJc1NhbWUpIHtcbiAgICAgIHlNYXRyaXggPSB5TWF0cml4LmNlbnRlcignY29sdW1uJyk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvdiA9IHhNYXRyaXgudHJhbnNwb3NlKCkubW11bCh5TWF0cml4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3Yucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3YuY29sdW1uczsgaisrKSB7XG4gICAgICBjb3Yuc2V0KGksIGosIGNvdi5nZXQoaSwgaikgKiAoMSAvICh4TWF0cml4LnJvd3MgLSAxKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY292O1xufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuaW1wb3J0IFdyYXBwZXJNYXRyaXgyRCBmcm9tICcuLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2xlc2t5RGVjb21wb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuICAgIGlmICghdmFsdWUuaXNTeW1tZXRyaWMoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IHN5bW1ldHJpYycpO1xuICAgIH1cblxuICAgIGxldCBhID0gdmFsdWU7XG4gICAgbGV0IGRpbWVuc2lvbiA9IGEucm93cztcbiAgICBsZXQgbCA9IG5ldyBNYXRyaXgoZGltZW5zaW9uLCBkaW1lbnNpb24pO1xuICAgIGxldCBwb3NpdGl2ZURlZmluaXRlID0gdHJ1ZTtcbiAgICBsZXQgaSwgaiwgaztcblxuICAgIGZvciAoaiA9IDA7IGogPCBkaW1lbnNpb247IGorKykge1xuICAgICAgbGV0IGQgPSAwO1xuICAgICAgZm9yIChrID0gMDsgayA8IGo7IGsrKykge1xuICAgICAgICBsZXQgcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICBzICs9IGwuZ2V0KGssIGkpICogbC5nZXQoaiwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcyA9IChhLmdldChqLCBrKSAtIHMpIC8gbC5nZXQoaywgayk7XG4gICAgICAgIGwuc2V0KGosIGssIHMpO1xuICAgICAgICBkID0gZCArIHMgKiBzO1xuICAgICAgfVxuXG4gICAgICBkID0gYS5nZXQoaiwgaikgLSBkO1xuXG4gICAgICBwb3NpdGl2ZURlZmluaXRlICY9IGQgPiAwO1xuICAgICAgbC5zZXQoaiwgaiwgTWF0aC5zcXJ0KE1hdGgubWF4KGQsIDApKSk7XG4gICAgICBmb3IgKGsgPSBqICsgMTsgayA8IGRpbWVuc2lvbjsgaysrKSB7XG4gICAgICAgIGwuc2V0KGosIGssIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuTCA9IGw7XG4gICAgdGhpcy5wb3NpdGl2ZURlZmluaXRlID0gQm9vbGVhbihwb3NpdGl2ZURlZmluaXRlKTtcbiAgfVxuXG4gIGlzUG9zaXRpdmVEZWZpbml0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGl2ZURlZmluaXRlO1xuICB9XG5cbiAgc29sdmUodmFsdWUpIHtcbiAgICB2YWx1ZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICBsZXQgbCA9IHRoaXMuTDtcbiAgICBsZXQgZGltZW5zaW9uID0gbC5yb3dzO1xuXG4gICAgaWYgKHZhbHVlLnJvd3MgIT09IGRpbWVuc2lvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggZGltZW5zaW9ucyBkbyBub3QgbWF0Y2gnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNQb3NpdGl2ZURlZmluaXRlKCkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBpcyBub3QgcG9zaXRpdmUgZGVmaW5pdGUnKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnQgPSB2YWx1ZS5jb2x1bW5zO1xuICAgIGxldCBCID0gdmFsdWUuY2xvbmUoKTtcbiAgICBsZXQgaSwgaiwgaztcblxuICAgIGZvciAoayA9IDA7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgIEIuc2V0KGssIGosIEIuZ2V0KGssIGopIC0gQi5nZXQoaSwgaikgKiBsLmdldChrLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgQi5zZXQoaywgaiwgQi5nZXQoaywgaikgLyBsLmdldChrLCBrKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChrID0gZGltZW5zaW9uIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgZGltZW5zaW9uOyBpKyspIHtcbiAgICAgICAgICBCLnNldChrLCBqLCBCLmdldChrLCBqKSAtIEIuZ2V0KGksIGopICogbC5nZXQoaSwgaykpO1xuICAgICAgICB9XG4gICAgICAgIEIuc2V0KGssIGosIEIuZ2V0KGssIGopIC8gbC5nZXQoaywgaykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBCO1xuICB9XG5cbiAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5MO1xuICB9XG59XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJy4uL21hdHJpeCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4uL3dyYXAvV3JhcHBlck1hdHJpeDJEJztcblxuaW1wb3J0IHsgaHlwb3RlbnVzZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IGFzc3VtZVN5bW1ldHJpYyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuXG4gICAgbWF0cml4ID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKCFtYXRyaXguaXNTcXVhcmUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IGEgc3F1YXJlIG1hdHJpeCcpO1xuICAgIH1cblxuICAgIGxldCBuID0gbWF0cml4LmNvbHVtbnM7XG4gICAgbGV0IFYgPSBuZXcgTWF0cml4KG4sIG4pO1xuICAgIGxldCBkID0gbmV3IEZsb2F0NjRBcnJheShuKTtcbiAgICBsZXQgZSA9IG5ldyBGbG9hdDY0QXJyYXkobik7XG4gICAgbGV0IHZhbHVlID0gbWF0cml4O1xuICAgIGxldCBpLCBqO1xuXG4gICAgbGV0IGlzU3ltbWV0cmljID0gZmFsc2U7XG4gICAgaWYgKGFzc3VtZVN5bW1ldHJpYykge1xuICAgICAgaXNTeW1tZXRyaWMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc1N5bW1ldHJpYyA9IG1hdHJpeC5pc1N5bW1ldHJpYygpO1xuICAgIH1cblxuICAgIGlmIChpc1N5bW1ldHJpYykge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgVi5zZXQoaSwgaiwgdmFsdWUuZ2V0KGksIGopKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdHJlZDIobiwgZSwgZCwgVik7XG4gICAgICB0cWwyKG4sIGUsIGQsIFYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgSCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgICBsZXQgb3J0ID0gbmV3IEZsb2F0NjRBcnJheShuKTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIEguc2V0KGksIGosIHZhbHVlLmdldChpLCBqKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9ydGhlcyhuLCBILCBvcnQsIFYpO1xuICAgICAgaHFyMihuLCBlLCBkLCBWLCBIKTtcbiAgICB9XG5cbiAgICB0aGlzLm4gPSBuO1xuICAgIHRoaXMuZSA9IGU7XG4gICAgdGhpcy5kID0gZDtcbiAgICB0aGlzLlYgPSBWO1xuICB9XG5cbiAgZ2V0IHJlYWxFaWdlbnZhbHVlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmQpO1xuICB9XG5cbiAgZ2V0IGltYWdpbmFyeUVpZ2VudmFsdWVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZSk7XG4gIH1cblxuICBnZXQgZWlnZW52ZWN0b3JNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuVjtcbiAgfVxuXG4gIGdldCBkaWFnb25hbE1hdHJpeCgpIHtcbiAgICBsZXQgbiA9IHRoaXMubjtcbiAgICBsZXQgZSA9IHRoaXMuZTtcbiAgICBsZXQgZCA9IHRoaXMuZDtcbiAgICBsZXQgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgbGV0IGksIGo7XG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICBYLnNldChpLCBqLCAwKTtcbiAgICAgIH1cbiAgICAgIFguc2V0KGksIGksIGRbaV0pO1xuICAgICAgaWYgKGVbaV0gPiAwKSB7XG4gICAgICAgIFguc2V0KGksIGkgKyAxLCBlW2ldKTtcbiAgICAgIH0gZWxzZSBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgWC5zZXQoaSwgaSAtIDEsIGVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gWDtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmVkMihuLCBlLCBkLCBWKSB7XG4gIGxldCBmLCBnLCBoLCBpLCBqLCBrLCBoaCwgc2NhbGU7XG5cbiAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgIGRbal0gPSBWLmdldChuIC0gMSwgaik7XG4gIH1cblxuICBmb3IgKGkgPSBuIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIHNjYWxlID0gMDtcbiAgICBoID0gMDtcbiAgICBmb3IgKGsgPSAwOyBrIDwgaTsgaysrKSB7XG4gICAgICBzY2FsZSA9IHNjYWxlICsgTWF0aC5hYnMoZFtrXSk7XG4gICAgfVxuXG4gICAgaWYgKHNjYWxlID09PSAwKSB7XG4gICAgICBlW2ldID0gZFtpIC0gMV07XG4gICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgIGRbal0gPSBWLmdldChpIC0gMSwgaik7XG4gICAgICAgIFYuc2V0KGksIGosIDApO1xuICAgICAgICBWLnNldChqLCBpLCAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrID0gMDsgayA8IGk7IGsrKykge1xuICAgICAgICBkW2tdIC89IHNjYWxlO1xuICAgICAgICBoICs9IGRba10gKiBkW2tdO1xuICAgICAgfVxuXG4gICAgICBmID0gZFtpIC0gMV07XG4gICAgICBnID0gTWF0aC5zcXJ0KGgpO1xuICAgICAgaWYgKGYgPiAwKSB7XG4gICAgICAgIGcgPSAtZztcbiAgICAgIH1cblxuICAgICAgZVtpXSA9IHNjYWxlICogZztcbiAgICAgIGggPSBoIC0gZiAqIGc7XG4gICAgICBkW2kgLSAxXSA9IGYgLSBnO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBlW2pdID0gMDtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBmID0gZFtqXTtcbiAgICAgICAgVi5zZXQoaiwgaSwgZik7XG4gICAgICAgIGcgPSBlW2pdICsgVi5nZXQoaiwgaikgKiBmO1xuICAgICAgICBmb3IgKGsgPSBqICsgMTsgayA8PSBpIC0gMTsgaysrKSB7XG4gICAgICAgICAgZyArPSBWLmdldChrLCBqKSAqIGRba107XG4gICAgICAgICAgZVtrXSArPSBWLmdldChrLCBqKSAqIGY7XG4gICAgICAgIH1cbiAgICAgICAgZVtqXSA9IGc7XG4gICAgICB9XG5cbiAgICAgIGYgPSAwO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBlW2pdIC89IGg7XG4gICAgICAgIGYgKz0gZVtqXSAqIGRbal07XG4gICAgICB9XG5cbiAgICAgIGhoID0gZiAvIChoICsgaCk7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgIGVbal0gLT0gaGggKiBkW2pdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgIGYgPSBkW2pdO1xuICAgICAgICBnID0gZVtqXTtcbiAgICAgICAgZm9yIChrID0gajsgayA8PSBpIC0gMTsgaysrKSB7XG4gICAgICAgICAgVi5zZXQoaywgaiwgVi5nZXQoaywgaikgLSAoZiAqIGVba10gKyBnICogZFtrXSkpO1xuICAgICAgICB9XG4gICAgICAgIGRbal0gPSBWLmdldChpIC0gMSwgaik7XG4gICAgICAgIFYuc2V0KGksIGosIDApO1xuICAgICAgfVxuICAgIH1cbiAgICBkW2ldID0gaDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgVi5zZXQobiAtIDEsIGksIFYuZ2V0KGksIGkpKTtcbiAgICBWLnNldChpLCBpLCAxKTtcbiAgICBoID0gZFtpICsgMV07XG4gICAgaWYgKGggIT09IDApIHtcbiAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgIGRba10gPSBWLmdldChrLCBpICsgMSkgLyBoO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGogPSAwOyBqIDw9IGk7IGorKykge1xuICAgICAgICBnID0gMDtcbiAgICAgICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgICAgICBnICs9IFYuZ2V0KGssIGkgKyAxKSAqIFYuZ2V0KGssIGopO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgVi5zZXQoaywgaiwgVi5nZXQoaywgaikgLSBnICogZFtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgVi5zZXQoaywgaSArIDEsIDApO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBkW2pdID0gVi5nZXQobiAtIDEsIGopO1xuICAgIFYuc2V0KG4gLSAxLCBqLCAwKTtcbiAgfVxuXG4gIFYuc2V0KG4gLSAxLCBuIC0gMSwgMSk7XG4gIGVbMF0gPSAwO1xufVxuXG5mdW5jdGlvbiB0cWwyKG4sIGUsIGQsIFYpIHtcbiAgbGV0IGcsIGgsIGksIGosIGssIGwsIG0sIHAsIHIsIGRsMSwgYywgYzIsIGMzLCBlbDEsIHMsIHMyLCBpdGVyO1xuXG4gIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICBlW2kgLSAxXSA9IGVbaV07XG4gIH1cblxuICBlW24gLSAxXSA9IDA7XG5cbiAgbGV0IGYgPSAwO1xuICBsZXQgdHN0MSA9IDA7XG4gIGxldCBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcblxuICBmb3IgKGwgPSAwOyBsIDwgbjsgbCsrKSB7XG4gICAgdHN0MSA9IE1hdGgubWF4KHRzdDEsIE1hdGguYWJzKGRbbF0pICsgTWF0aC5hYnMoZVtsXSkpO1xuICAgIG0gPSBsO1xuICAgIHdoaWxlIChtIDwgbikge1xuICAgICAgaWYgKE1hdGguYWJzKGVbbV0pIDw9IGVwcyAqIHRzdDEpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBtKys7XG4gICAgfVxuXG4gICAgaWYgKG0gPiBsKSB7XG4gICAgICBpdGVyID0gMDtcbiAgICAgIGRvIHtcbiAgICAgICAgaXRlciA9IGl0ZXIgKyAxO1xuXG4gICAgICAgIGcgPSBkW2xdO1xuICAgICAgICBwID0gKGRbbCArIDFdIC0gZykgLyAoMiAqIGVbbF0pO1xuICAgICAgICByID0gaHlwb3RlbnVzZShwLCAxKTtcbiAgICAgICAgaWYgKHAgPCAwKSB7XG4gICAgICAgICAgciA9IC1yO1xuICAgICAgICB9XG5cbiAgICAgICAgZFtsXSA9IGVbbF0gLyAocCArIHIpO1xuICAgICAgICBkW2wgKyAxXSA9IGVbbF0gKiAocCArIHIpO1xuICAgICAgICBkbDEgPSBkW2wgKyAxXTtcbiAgICAgICAgaCA9IGcgLSBkW2xdO1xuICAgICAgICBmb3IgKGkgPSBsICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGRbaV0gLT0gaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGYgPSBmICsgaDtcblxuICAgICAgICBwID0gZFttXTtcbiAgICAgICAgYyA9IDE7XG4gICAgICAgIGMyID0gYztcbiAgICAgICAgYzMgPSBjO1xuICAgICAgICBlbDEgPSBlW2wgKyAxXTtcbiAgICAgICAgcyA9IDA7XG4gICAgICAgIHMyID0gMDtcbiAgICAgICAgZm9yIChpID0gbSAtIDE7IGkgPj0gbDsgaS0tKSB7XG4gICAgICAgICAgYzMgPSBjMjtcbiAgICAgICAgICBjMiA9IGM7XG4gICAgICAgICAgczIgPSBzO1xuICAgICAgICAgIGcgPSBjICogZVtpXTtcbiAgICAgICAgICBoID0gYyAqIHA7XG4gICAgICAgICAgciA9IGh5cG90ZW51c2UocCwgZVtpXSk7XG4gICAgICAgICAgZVtpICsgMV0gPSBzICogcjtcbiAgICAgICAgICBzID0gZVtpXSAvIHI7XG4gICAgICAgICAgYyA9IHAgLyByO1xuICAgICAgICAgIHAgPSBjICogZFtpXSAtIHMgKiBnO1xuICAgICAgICAgIGRbaSArIDFdID0gaCArIHMgKiAoYyAqIGcgKyBzICogZFtpXSk7XG5cbiAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBoID0gVi5nZXQoaywgaSArIDEpO1xuICAgICAgICAgICAgVi5zZXQoaywgaSArIDEsIHMgKiBWLmdldChrLCBpKSArIGMgKiBoKTtcbiAgICAgICAgICAgIFYuc2V0KGssIGksIGMgKiBWLmdldChrLCBpKSAtIHMgKiBoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwID0gKC1zICogczIgKiBjMyAqIGVsMSAqIGVbbF0pIC8gZGwxO1xuICAgICAgICBlW2xdID0gcyAqIHA7XG4gICAgICAgIGRbbF0gPSBjICogcDtcbiAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGVbbF0pID4gZXBzICogdHN0MSk7XG4gICAgfVxuICAgIGRbbF0gPSBkW2xdICsgZjtcbiAgICBlW2xdID0gMDtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgayA9IGk7XG4gICAgcCA9IGRbaV07XG4gICAgZm9yIChqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgIGlmIChkW2pdIDwgcCkge1xuICAgICAgICBrID0gajtcbiAgICAgICAgcCA9IGRbal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGsgIT09IGkpIHtcbiAgICAgIGRba10gPSBkW2ldO1xuICAgICAgZFtpXSA9IHA7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIHAgPSBWLmdldChqLCBpKTtcbiAgICAgICAgVi5zZXQoaiwgaSwgVi5nZXQoaiwgaykpO1xuICAgICAgICBWLnNldChqLCBrLCBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb3J0aGVzKG4sIEgsIG9ydCwgVikge1xuICBsZXQgbG93ID0gMDtcbiAgbGV0IGhpZ2ggPSBuIC0gMTtcbiAgbGV0IGYsIGcsIGgsIGksIGosIG07XG4gIGxldCBzY2FsZTtcblxuICBmb3IgKG0gPSBsb3cgKyAxOyBtIDw9IGhpZ2ggLSAxOyBtKyspIHtcbiAgICBzY2FsZSA9IDA7XG4gICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgIHNjYWxlID0gc2NhbGUgKyBNYXRoLmFicyhILmdldChpLCBtIC0gMSkpO1xuICAgIH1cblxuICAgIGlmIChzY2FsZSAhPT0gMCkge1xuICAgICAgaCA9IDA7XG4gICAgICBmb3IgKGkgPSBoaWdoOyBpID49IG07IGktLSkge1xuICAgICAgICBvcnRbaV0gPSBILmdldChpLCBtIC0gMSkgLyBzY2FsZTtcbiAgICAgICAgaCArPSBvcnRbaV0gKiBvcnRbaV07XG4gICAgICB9XG5cbiAgICAgIGcgPSBNYXRoLnNxcnQoaCk7XG4gICAgICBpZiAob3J0W21dID4gMCkge1xuICAgICAgICBnID0gLWc7XG4gICAgICB9XG5cbiAgICAgIGggPSBoIC0gb3J0W21dICogZztcbiAgICAgIG9ydFttXSA9IG9ydFttXSAtIGc7XG5cbiAgICAgIGZvciAoaiA9IG07IGogPCBuOyBqKyspIHtcbiAgICAgICAgZiA9IDA7XG4gICAgICAgIGZvciAoaSA9IGhpZ2g7IGkgPj0gbTsgaS0tKSB7XG4gICAgICAgICAgZiArPSBvcnRbaV0gKiBILmdldChpLCBqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGYgPSBmIC8gaDtcbiAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICBILnNldChpLCBqLCBILmdldChpLCBqKSAtIGYgKiBvcnRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgIGYgPSAwO1xuICAgICAgICBmb3IgKGogPSBoaWdoOyBqID49IG07IGotLSkge1xuICAgICAgICAgIGYgKz0gb3J0W2pdICogSC5nZXQoaSwgaik7XG4gICAgICAgIH1cblxuICAgICAgICBmID0gZiAvIGg7XG4gICAgICAgIGZvciAoaiA9IG07IGogPD0gaGlnaDsgaisrKSB7XG4gICAgICAgICAgSC5zZXQoaSwgaiwgSC5nZXQoaSwgaikgLSBmICogb3J0W2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcnRbbV0gPSBzY2FsZSAqIG9ydFttXTtcbiAgICAgIEguc2V0KG0sIG0gLSAxLCBzY2FsZSAqIGcpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICBWLnNldChpLCBqLCBpID09PSBqID8gMSA6IDApO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobSA9IGhpZ2ggLSAxOyBtID49IGxvdyArIDE7IG0tLSkge1xuICAgIGlmIChILmdldChtLCBtIC0gMSkgIT09IDApIHtcbiAgICAgIGZvciAoaSA9IG0gKyAxOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICBvcnRbaV0gPSBILmdldChpLCBtIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IG07IGogPD0gaGlnaDsgaisrKSB7XG4gICAgICAgIGcgPSAwO1xuICAgICAgICBmb3IgKGkgPSBtOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgIGcgKz0gb3J0W2ldICogVi5nZXQoaSwgaik7XG4gICAgICAgIH1cblxuICAgICAgICBnID0gZyAvIG9ydFttXSAvIEguZ2V0KG0sIG0gLSAxKTtcbiAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICBWLnNldChpLCBqLCBWLmdldChpLCBqKSArIGcgKiBvcnRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhxcjIobm4sIGUsIGQsIFYsIEgpIHtcbiAgbGV0IG4gPSBubiAtIDE7XG4gIGxldCBsb3cgPSAwO1xuICBsZXQgaGlnaCA9IG5uIC0gMTtcbiAgbGV0IGVwcyA9IE51bWJlci5FUFNJTE9OO1xuICBsZXQgZXhzaGlmdCA9IDA7XG4gIGxldCBub3JtID0gMDtcbiAgbGV0IHAgPSAwO1xuICBsZXQgcSA9IDA7XG4gIGxldCByID0gMDtcbiAgbGV0IHMgPSAwO1xuICBsZXQgeiA9IDA7XG4gIGxldCBpdGVyID0gMDtcbiAgbGV0IGksIGosIGssIGwsIG0sIHQsIHcsIHgsIHk7XG4gIGxldCByYSwgc2EsIHZyLCB2aTtcbiAgbGV0IG5vdGxhc3QsIGNkaXZyZXM7XG5cbiAgZm9yIChpID0gMDsgaSA8IG5uOyBpKyspIHtcbiAgICBpZiAoaSA8IGxvdyB8fCBpID4gaGlnaCkge1xuICAgICAgZFtpXSA9IEguZ2V0KGksIGkpO1xuICAgICAgZVtpXSA9IDA7XG4gICAgfVxuXG4gICAgZm9yIChqID0gTWF0aC5tYXgoaSAtIDEsIDApOyBqIDwgbm47IGorKykge1xuICAgICAgbm9ybSA9IG5vcm0gKyBNYXRoLmFicyhILmdldChpLCBqKSk7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKG4gPj0gbG93KSB7XG4gICAgbCA9IG47XG4gICAgd2hpbGUgKGwgPiBsb3cpIHtcbiAgICAgIHMgPSBNYXRoLmFicyhILmdldChsIC0gMSwgbCAtIDEpKSArIE1hdGguYWJzKEguZ2V0KGwsIGwpKTtcbiAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgIHMgPSBub3JtO1xuICAgICAgfVxuICAgICAgaWYgKE1hdGguYWJzKEguZ2V0KGwsIGwgLSAxKSkgPCBlcHMgKiBzKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbC0tO1xuICAgIH1cblxuICAgIGlmIChsID09PSBuKSB7XG4gICAgICBILnNldChuLCBuLCBILmdldChuLCBuKSArIGV4c2hpZnQpO1xuICAgICAgZFtuXSA9IEguZ2V0KG4sIG4pO1xuICAgICAgZVtuXSA9IDA7XG4gICAgICBuLS07XG4gICAgICBpdGVyID0gMDtcbiAgICB9IGVsc2UgaWYgKGwgPT09IG4gLSAxKSB7XG4gICAgICB3ID0gSC5nZXQobiwgbiAtIDEpICogSC5nZXQobiAtIDEsIG4pO1xuICAgICAgcCA9IChILmdldChuIC0gMSwgbiAtIDEpIC0gSC5nZXQobiwgbikpIC8gMjtcbiAgICAgIHEgPSBwICogcCArIHc7XG4gICAgICB6ID0gTWF0aC5zcXJ0KE1hdGguYWJzKHEpKTtcbiAgICAgIEguc2V0KG4sIG4sIEguZ2V0KG4sIG4pICsgZXhzaGlmdCk7XG4gICAgICBILnNldChuIC0gMSwgbiAtIDEsIEguZ2V0KG4gLSAxLCBuIC0gMSkgKyBleHNoaWZ0KTtcbiAgICAgIHggPSBILmdldChuLCBuKTtcblxuICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICB6ID0gcCA+PSAwID8gcCArIHogOiBwIC0gejtcbiAgICAgICAgZFtuIC0gMV0gPSB4ICsgejtcbiAgICAgICAgZFtuXSA9IGRbbiAtIDFdO1xuICAgICAgICBpZiAoeiAhPT0gMCkge1xuICAgICAgICAgIGRbbl0gPSB4IC0gdyAvIHo7XG4gICAgICAgIH1cbiAgICAgICAgZVtuIC0gMV0gPSAwO1xuICAgICAgICBlW25dID0gMDtcbiAgICAgICAgeCA9IEguZ2V0KG4sIG4gLSAxKTtcbiAgICAgICAgcyA9IE1hdGguYWJzKHgpICsgTWF0aC5hYnMoeik7XG4gICAgICAgIHAgPSB4IC8gcztcbiAgICAgICAgcSA9IHogLyBzO1xuICAgICAgICByID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEpO1xuICAgICAgICBwID0gcCAvIHI7XG4gICAgICAgIHEgPSBxIC8gcjtcblxuICAgICAgICBmb3IgKGogPSBuIC0gMTsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICB6ID0gSC5nZXQobiAtIDEsIGopO1xuICAgICAgICAgIEguc2V0KG4gLSAxLCBqLCBxICogeiArIHAgKiBILmdldChuLCBqKSk7XG4gICAgICAgICAgSC5zZXQobiwgaiwgcSAqIEguZ2V0KG4sIGopIC0gcCAqIHopO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICB6ID0gSC5nZXQoaSwgbiAtIDEpO1xuICAgICAgICAgIEguc2V0KGksIG4gLSAxLCBxICogeiArIHAgKiBILmdldChpLCBuKSk7XG4gICAgICAgICAgSC5zZXQoaSwgbiwgcSAqIEguZ2V0KGksIG4pIC0gcCAqIHopO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgIHogPSBWLmdldChpLCBuIC0gMSk7XG4gICAgICAgICAgVi5zZXQoaSwgbiAtIDEsIHEgKiB6ICsgcCAqIFYuZ2V0KGksIG4pKTtcbiAgICAgICAgICBWLnNldChpLCBuLCBxICogVi5nZXQoaSwgbikgLSBwICogeik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRbbiAtIDFdID0geCArIHA7XG4gICAgICAgIGRbbl0gPSB4ICsgcDtcbiAgICAgICAgZVtuIC0gMV0gPSB6O1xuICAgICAgICBlW25dID0gLXo7XG4gICAgICB9XG5cbiAgICAgIG4gPSBuIC0gMjtcbiAgICAgIGl0ZXIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gSC5nZXQobiwgbik7XG4gICAgICB5ID0gMDtcbiAgICAgIHcgPSAwO1xuICAgICAgaWYgKGwgPCBuKSB7XG4gICAgICAgIHkgPSBILmdldChuIC0gMSwgbiAtIDEpO1xuICAgICAgICB3ID0gSC5nZXQobiwgbiAtIDEpICogSC5nZXQobiAtIDEsIG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlciA9PT0gMTApIHtcbiAgICAgICAgZXhzaGlmdCArPSB4O1xuICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgSC5zZXQoaSwgaSwgSC5nZXQoaSwgaSkgLSB4KTtcbiAgICAgICAgfVxuICAgICAgICBzID0gTWF0aC5hYnMoSC5nZXQobiwgbiAtIDEpKSArIE1hdGguYWJzKEguZ2V0KG4gLSAxLCBuIC0gMikpO1xuICAgICAgICB4ID0geSA9IDAuNzUgKiBzO1xuICAgICAgICB3ID0gLTAuNDM3NSAqIHMgKiBzO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlciA9PT0gMzApIHtcbiAgICAgICAgcyA9ICh5IC0geCkgLyAyO1xuICAgICAgICBzID0gcyAqIHMgKyB3O1xuICAgICAgICBpZiAocyA+IDApIHtcbiAgICAgICAgICBzID0gTWF0aC5zcXJ0KHMpO1xuICAgICAgICAgIGlmICh5IDwgeCkge1xuICAgICAgICAgICAgcyA9IC1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzID0geCAtIHcgLyAoKHkgLSB4KSAvIDIgKyBzKTtcbiAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgICBILnNldChpLCBpLCBILmdldChpLCBpKSAtIHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleHNoaWZ0ICs9IHM7XG4gICAgICAgICAgeCA9IHkgPSB3ID0gMC45NjQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXRlciA9IGl0ZXIgKyAxO1xuXG4gICAgICBtID0gbiAtIDI7XG4gICAgICB3aGlsZSAobSA+PSBsKSB7XG4gICAgICAgIHogPSBILmdldChtLCBtKTtcbiAgICAgICAgciA9IHggLSB6O1xuICAgICAgICBzID0geSAtIHo7XG4gICAgICAgIHAgPSAociAqIHMgLSB3KSAvIEguZ2V0KG0gKyAxLCBtKSArIEguZ2V0KG0sIG0gKyAxKTtcbiAgICAgICAgcSA9IEguZ2V0KG0gKyAxLCBtICsgMSkgLSB6IC0gciAtIHM7XG4gICAgICAgIHIgPSBILmdldChtICsgMiwgbSArIDEpO1xuICAgICAgICBzID0gTWF0aC5hYnMocCkgKyBNYXRoLmFicyhxKSArIE1hdGguYWJzKHIpO1xuICAgICAgICBwID0gcCAvIHM7XG4gICAgICAgIHEgPSBxIC8gcztcbiAgICAgICAgciA9IHIgLyBzO1xuICAgICAgICBpZiAobSA9PT0gbCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBNYXRoLmFicyhILmdldChtLCBtIC0gMSkpICogKE1hdGguYWJzKHEpICsgTWF0aC5hYnMocikpIDxcbiAgICAgICAgICBlcHMgKlxuICAgICAgICAgICAgKE1hdGguYWJzKHApICpcbiAgICAgICAgICAgICAgKE1hdGguYWJzKEguZ2V0KG0gLSAxLCBtIC0gMSkpICtcbiAgICAgICAgICAgICAgICBNYXRoLmFicyh6KSArXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoSC5nZXQobSArIDEsIG0gKyAxKSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBtLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IG0gKyAyOyBpIDw9IG47IGkrKykge1xuICAgICAgICBILnNldChpLCBpIC0gMiwgMCk7XG4gICAgICAgIGlmIChpID4gbSArIDIpIHtcbiAgICAgICAgICBILnNldChpLCBpIC0gMywgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChrID0gbTsgayA8PSBuIC0gMTsgaysrKSB7XG4gICAgICAgIG5vdGxhc3QgPSBrICE9PSBuIC0gMTtcbiAgICAgICAgaWYgKGsgIT09IG0pIHtcbiAgICAgICAgICBwID0gSC5nZXQoaywgayAtIDEpO1xuICAgICAgICAgIHEgPSBILmdldChrICsgMSwgayAtIDEpO1xuICAgICAgICAgIHIgPSBub3RsYXN0ID8gSC5nZXQoayArIDIsIGsgLSAxKSA6IDA7XG4gICAgICAgICAgeCA9IE1hdGguYWJzKHApICsgTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKTtcbiAgICAgICAgICBpZiAoeCAhPT0gMCkge1xuICAgICAgICAgICAgcCA9IHAgLyB4O1xuICAgICAgICAgICAgcSA9IHEgLyB4O1xuICAgICAgICAgICAgciA9IHIgLyB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4ID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzID0gTWF0aC5zcXJ0KHAgKiBwICsgcSAqIHEgKyByICogcik7XG4gICAgICAgIGlmIChwIDwgMCkge1xuICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzICE9PSAwKSB7XG4gICAgICAgICAgaWYgKGsgIT09IG0pIHtcbiAgICAgICAgICAgIEguc2V0KGssIGsgLSAxLCAtcyAqIHgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobCAhPT0gbSkge1xuICAgICAgICAgICAgSC5zZXQoaywgayAtIDEsIC1ILmdldChrLCBrIC0gMSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAgPSBwICsgcztcbiAgICAgICAgICB4ID0gcCAvIHM7XG4gICAgICAgICAgeSA9IHEgLyBzO1xuICAgICAgICAgIHogPSByIC8gcztcbiAgICAgICAgICBxID0gcSAvIHA7XG4gICAgICAgICAgciA9IHIgLyBwO1xuXG4gICAgICAgICAgZm9yIChqID0gazsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgICAgIHAgPSBILmdldChrLCBqKSArIHEgKiBILmdldChrICsgMSwgaik7XG4gICAgICAgICAgICBpZiAobm90bGFzdCkge1xuICAgICAgICAgICAgICBwID0gcCArIHIgKiBILmdldChrICsgMiwgaik7XG4gICAgICAgICAgICAgIEguc2V0KGsgKyAyLCBqLCBILmdldChrICsgMiwgaikgLSBwICogeik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEguc2V0KGssIGosIEguZ2V0KGssIGopIC0gcCAqIHgpO1xuICAgICAgICAgICAgSC5zZXQoayArIDEsIGosIEguZ2V0KGsgKyAxLCBqKSAtIHAgKiB5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IE1hdGgubWluKG4sIGsgKyAzKTsgaSsrKSB7XG4gICAgICAgICAgICBwID0geCAqIEguZ2V0KGksIGspICsgeSAqIEguZ2V0KGksIGsgKyAxKTtcbiAgICAgICAgICAgIGlmIChub3RsYXN0KSB7XG4gICAgICAgICAgICAgIHAgPSBwICsgeiAqIEguZ2V0KGksIGsgKyAyKTtcbiAgICAgICAgICAgICAgSC5zZXQoaSwgayArIDIsIEguZ2V0KGksIGsgKyAyKSAtIHAgKiByKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgSC5zZXQoaSwgaywgSC5nZXQoaSwgaykgLSBwKTtcbiAgICAgICAgICAgIEguc2V0KGksIGsgKyAxLCBILmdldChpLCBrICsgMSkgLSBwICogcSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICAgICAgcCA9IHggKiBWLmdldChpLCBrKSArIHkgKiBWLmdldChpLCBrICsgMSk7XG4gICAgICAgICAgICBpZiAobm90bGFzdCkge1xuICAgICAgICAgICAgICBwID0gcCArIHogKiBWLmdldChpLCBrICsgMik7XG4gICAgICAgICAgICAgIFYuc2V0KGksIGsgKyAyLCBWLmdldChpLCBrICsgMikgLSBwICogcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFYuc2V0KGksIGssIFYuZ2V0KGksIGspIC0gcCk7XG4gICAgICAgICAgICBWLnNldChpLCBrICsgMSwgVi5nZXQoaSwgayArIDEpIC0gcCAqIHEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub3JtID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChuID0gbm4gLSAxOyBuID49IDA7IG4tLSkge1xuICAgIHAgPSBkW25dO1xuICAgIHEgPSBlW25dO1xuXG4gICAgaWYgKHEgPT09IDApIHtcbiAgICAgIGwgPSBuO1xuICAgICAgSC5zZXQobiwgbiwgMSk7XG4gICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdyA9IEguZ2V0KGksIGkpIC0gcDtcbiAgICAgICAgciA9IDA7XG4gICAgICAgIGZvciAoaiA9IGw7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgciA9IHIgKyBILmdldChpLCBqKSAqIEguZ2V0KGosIG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVbaV0gPCAwKSB7XG4gICAgICAgICAgeiA9IHc7XG4gICAgICAgICAgcyA9IHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbCA9IGk7XG4gICAgICAgICAgaWYgKGVbaV0gPT09IDApIHtcbiAgICAgICAgICAgIEguc2V0KGksIG4sIHcgIT09IDAgPyAtciAvIHcgOiAtciAvIChlcHMgKiBub3JtKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBILmdldChpLCBpICsgMSk7XG4gICAgICAgICAgICB5ID0gSC5nZXQoaSArIDEsIGkpO1xuICAgICAgICAgICAgcSA9IChkW2ldIC0gcCkgKiAoZFtpXSAtIHApICsgZVtpXSAqIGVbaV07XG4gICAgICAgICAgICB0ID0gKHggKiBzIC0geiAqIHIpIC8gcTtcbiAgICAgICAgICAgIEguc2V0KGksIG4sIHQpO1xuICAgICAgICAgICAgSC5zZXQoXG4gICAgICAgICAgICAgIGkgKyAxLFxuICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICBNYXRoLmFicyh4KSA+IE1hdGguYWJzKHopID8gKC1yIC0gdyAqIHQpIC8geCA6ICgtcyAtIHkgKiB0KSAvIHosXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHQgPSBNYXRoLmFicyhILmdldChpLCBuKSk7XG4gICAgICAgICAgaWYgKGVwcyAqIHQgKiB0ID4gMSkge1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICAgICAgSC5zZXQoaiwgbiwgSC5nZXQoaiwgbikgLyB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHEgPCAwKSB7XG4gICAgICBsID0gbiAtIDE7XG5cbiAgICAgIGlmIChNYXRoLmFicyhILmdldChuLCBuIC0gMSkpID4gTWF0aC5hYnMoSC5nZXQobiAtIDEsIG4pKSkge1xuICAgICAgICBILnNldChuIC0gMSwgbiAtIDEsIHEgLyBILmdldChuLCBuIC0gMSkpO1xuICAgICAgICBILnNldChuIC0gMSwgbiwgLShILmdldChuLCBuKSAtIHApIC8gSC5nZXQobiwgbiAtIDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNkaXZyZXMgPSBjZGl2KDAsIC1ILmdldChuIC0gMSwgbiksIEguZ2V0KG4gLSAxLCBuIC0gMSkgLSBwLCBxKTtcbiAgICAgICAgSC5zZXQobiAtIDEsIG4gLSAxLCBjZGl2cmVzWzBdKTtcbiAgICAgICAgSC5zZXQobiAtIDEsIG4sIGNkaXZyZXNbMV0pO1xuICAgICAgfVxuXG4gICAgICBILnNldChuLCBuIC0gMSwgMCk7XG4gICAgICBILnNldChuLCBuLCAxKTtcbiAgICAgIGZvciAoaSA9IG4gLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICByYSA9IDA7XG4gICAgICAgIHNhID0gMDtcbiAgICAgICAgZm9yIChqID0gbDsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgICByYSA9IHJhICsgSC5nZXQoaSwgaikgKiBILmdldChqLCBuIC0gMSk7XG4gICAgICAgICAgc2EgPSBzYSArIEguZ2V0KGksIGopICogSC5nZXQoaiwgbik7XG4gICAgICAgIH1cblxuICAgICAgICB3ID0gSC5nZXQoaSwgaSkgLSBwO1xuXG4gICAgICAgIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgIHogPSB3O1xuICAgICAgICAgIHIgPSByYTtcbiAgICAgICAgICBzID0gc2E7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbCA9IGk7XG4gICAgICAgICAgaWYgKGVbaV0gPT09IDApIHtcbiAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KC1yYSwgLXNhLCB3LCBxKTtcbiAgICAgICAgICAgIEguc2V0KGksIG4gLSAxLCBjZGl2cmVzWzBdKTtcbiAgICAgICAgICAgIEguc2V0KGksIG4sIGNkaXZyZXNbMV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gSC5nZXQoaSwgaSArIDEpO1xuICAgICAgICAgICAgeSA9IEguZ2V0KGkgKyAxLCBpKTtcbiAgICAgICAgICAgIHZyID0gKGRbaV0gLSBwKSAqIChkW2ldIC0gcCkgKyBlW2ldICogZVtpXSAtIHEgKiBxO1xuICAgICAgICAgICAgdmkgPSAoZFtpXSAtIHApICogMiAqIHE7XG4gICAgICAgICAgICBpZiAodnIgPT09IDAgJiYgdmkgPT09IDApIHtcbiAgICAgICAgICAgICAgdnIgPVxuICAgICAgICAgICAgICAgIGVwcyAqXG4gICAgICAgICAgICAgICAgbm9ybSAqXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKHcpICtcbiAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHEpICtcbiAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHgpICtcbiAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHkpICtcbiAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KFxuICAgICAgICAgICAgICB4ICogciAtIHogKiByYSArIHEgKiBzYSxcbiAgICAgICAgICAgICAgeCAqIHMgLSB6ICogc2EgLSBxICogcmEsXG4gICAgICAgICAgICAgIHZyLFxuICAgICAgICAgICAgICB2aSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBILnNldChpLCBuIC0gMSwgY2RpdnJlc1swXSk7XG4gICAgICAgICAgICBILnNldChpLCBuLCBjZGl2cmVzWzFdKTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4KSA+IE1hdGguYWJzKHopICsgTWF0aC5hYnMocSkpIHtcbiAgICAgICAgICAgICAgSC5zZXQoXG4gICAgICAgICAgICAgICAgaSArIDEsXG4gICAgICAgICAgICAgICAgbiAtIDEsXG4gICAgICAgICAgICAgICAgKC1yYSAtIHcgKiBILmdldChpLCBuIC0gMSkgKyBxICogSC5nZXQoaSwgbikpIC8geCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgSC5zZXQoXG4gICAgICAgICAgICAgICAgaSArIDEsXG4gICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICAoLXNhIC0gdyAqIEguZ2V0KGksIG4pIC0gcSAqIEguZ2V0KGksIG4gLSAxKSkgLyB4LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2RpdnJlcyA9IGNkaXYoXG4gICAgICAgICAgICAgICAgLXIgLSB5ICogSC5nZXQoaSwgbiAtIDEpLFxuICAgICAgICAgICAgICAgIC1zIC0geSAqIEguZ2V0KGksIG4pLFxuICAgICAgICAgICAgICAgIHosXG4gICAgICAgICAgICAgICAgcSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgSC5zZXQoaSArIDEsIG4gLSAxLCBjZGl2cmVzWzBdKTtcbiAgICAgICAgICAgICAgSC5zZXQoaSArIDEsIG4sIGNkaXZyZXNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHQgPSBNYXRoLm1heChNYXRoLmFicyhILmdldChpLCBuIC0gMSkpLCBNYXRoLmFicyhILmdldChpLCBuKSkpO1xuICAgICAgICAgIGlmIChlcHMgKiB0ICogdCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgICAgIEguc2V0KGosIG4gLSAxLCBILmdldChqLCBuIC0gMSkgLyB0KTtcbiAgICAgICAgICAgICAgSC5zZXQoaiwgbiwgSC5nZXQoaiwgbikgLyB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbm47IGkrKykge1xuICAgIGlmIChpIDwgbG93IHx8IGkgPiBoaWdoKSB7XG4gICAgICBmb3IgKGogPSBpOyBqIDwgbm47IGorKykge1xuICAgICAgICBWLnNldChpLCBqLCBILmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChqID0gbm4gLSAxOyBqID49IGxvdzsgai0tKSB7XG4gICAgZm9yIChpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgeiA9IDA7XG4gICAgICBmb3IgKGsgPSBsb3c7IGsgPD0gTWF0aC5taW4oaiwgaGlnaCk7IGsrKykge1xuICAgICAgICB6ID0geiArIFYuZ2V0KGksIGspICogSC5nZXQoaywgaik7XG4gICAgICB9XG4gICAgICBWLnNldChpLCBqLCB6KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2Rpdih4ciwgeGksIHlyLCB5aSkge1xuICBsZXQgciwgZDtcbiAgaWYgKE1hdGguYWJzKHlyKSA+IE1hdGguYWJzKHlpKSkge1xuICAgIHIgPSB5aSAvIHlyO1xuICAgIGQgPSB5ciArIHIgKiB5aTtcbiAgICByZXR1cm4gWyh4ciArIHIgKiB4aSkgLyBkLCAoeGkgLSByICogeHIpIC8gZF07XG4gIH0gZWxzZSB7XG4gICAgciA9IHlyIC8geWk7XG4gICAgZCA9IHlpICsgciAqIHlyO1xuICAgIHJldHVybiBbKHIgKiB4ciArIHhpKSAvIGQsIChyICogeGkgLSB4cikgLyBkXTtcbiAgfVxufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuaW1wb3J0IFdyYXBwZXJNYXRyaXgyRCBmcm9tICcuLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEx1RGVjb21wb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChtYXRyaXgpO1xuXG4gICAgbGV0IGx1ID0gbWF0cml4LmNsb25lKCk7XG4gICAgbGV0IHJvd3MgPSBsdS5yb3dzO1xuICAgIGxldCBjb2x1bW5zID0gbHUuY29sdW1ucztcbiAgICBsZXQgcGl2b3RWZWN0b3IgPSBuZXcgRmxvYXQ2NEFycmF5KHJvd3MpO1xuICAgIGxldCBwaXZvdFNpZ24gPSAxO1xuICAgIGxldCBpLCBqLCBrLCBwLCBzLCB0LCB2O1xuICAgIGxldCBMVWNvbGosIGttYXg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBwaXZvdFZlY3RvcltpXSA9IGk7XG4gICAgfVxuXG4gICAgTFVjb2xqID0gbmV3IEZsb2F0NjRBcnJheShyb3dzKTtcblxuICAgIGZvciAoaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgTFVjb2xqW2ldID0gbHUuZ2V0KGksIGopO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgIGttYXggPSBNYXRoLm1pbihpLCBqKTtcbiAgICAgICAgcyA9IDA7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBrbWF4OyBrKyspIHtcbiAgICAgICAgICBzICs9IGx1LmdldChpLCBrKSAqIExVY29saltrXTtcbiAgICAgICAgfVxuICAgICAgICBMVWNvbGpbaV0gLT0gcztcbiAgICAgICAgbHUuc2V0KGksIGosIExVY29saltpXSk7XG4gICAgICB9XG5cbiAgICAgIHAgPSBqO1xuICAgICAgZm9yIChpID0gaiArIDE7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKExVY29saltpXSkgPiBNYXRoLmFicyhMVWNvbGpbcF0pKSB7XG4gICAgICAgICAgcCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHAgIT09IGopIHtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGNvbHVtbnM7IGsrKykge1xuICAgICAgICAgIHQgPSBsdS5nZXQocCwgayk7XG4gICAgICAgICAgbHUuc2V0KHAsIGssIGx1LmdldChqLCBrKSk7XG4gICAgICAgICAgbHUuc2V0KGosIGssIHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdiA9IHBpdm90VmVjdG9yW3BdO1xuICAgICAgICBwaXZvdFZlY3RvcltwXSA9IHBpdm90VmVjdG9yW2pdO1xuICAgICAgICBwaXZvdFZlY3RvcltqXSA9IHY7XG5cbiAgICAgICAgcGl2b3RTaWduID0gLXBpdm90U2lnbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGogPCByb3dzICYmIGx1LmdldChqLCBqKSAhPT0gMCkge1xuICAgICAgICBmb3IgKGkgPSBqICsgMTsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgIGx1LnNldChpLCBqLCBsdS5nZXQoaSwgaikgLyBsdS5nZXQoaiwgaikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5MVSA9IGx1O1xuICAgIHRoaXMucGl2b3RWZWN0b3IgPSBwaXZvdFZlY3RvcjtcbiAgICB0aGlzLnBpdm90U2lnbiA9IHBpdm90U2lnbjtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLkxVO1xuICAgIGxldCBjb2wgPSBkYXRhLmNvbHVtbnM7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2w7IGorKykge1xuICAgICAgaWYgKGRhdGEuZ2V0KGosIGopID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzb2x2ZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gTWF0cml4LmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgIGxldCBsdSA9IHRoaXMuTFU7XG4gICAgbGV0IHJvd3MgPSBsdS5yb3dzO1xuXG4gICAgaWYgKHJvd3MgIT09IHZhbHVlLnJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXRyaXggZGltZW5zaW9ucycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1Npbmd1bGFyKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFUgbWF0cml4IGlzIHNpbmd1bGFyJyk7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICBsZXQgWCA9IHZhbHVlLnN1Yk1hdHJpeFJvdyh0aGlzLnBpdm90VmVjdG9yLCAwLCBjb3VudCAtIDEpO1xuICAgIGxldCBjb2x1bW5zID0gbHUuY29sdW1ucztcbiAgICBsZXQgaSwgaiwgaztcblxuICAgIGZvciAoayA9IDA7IGsgPCBjb2x1bW5zOyBrKyspIHtcbiAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgWC5nZXQoaSwgaikgLSBYLmdldChrLCBqKSAqIGx1LmdldChpLCBrKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrID0gY29sdW1ucyAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICBYLnNldChrLCBqLCBYLmdldChrLCBqKSAvIGx1LmdldChrLCBrKSk7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgWC5nZXQoaSwgaikgLSBYLmdldChrLCBqKSAqIGx1LmdldChpLCBrKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFg7XG4gIH1cblxuICBnZXQgZGV0ZXJtaW5hbnQoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLkxVO1xuICAgIGlmICghZGF0YS5pc1NxdWFyZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCBtdXN0IGJlIHNxdWFyZScpO1xuICAgIH1cbiAgICBsZXQgZGV0ZXJtaW5hbnQgPSB0aGlzLnBpdm90U2lnbjtcbiAgICBsZXQgY29sID0gZGF0YS5jb2x1bW5zO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sOyBqKyspIHtcbiAgICAgIGRldGVybWluYW50ICo9IGRhdGEuZ2V0KGosIGopO1xuICAgIH1cbiAgICByZXR1cm4gZGV0ZXJtaW5hbnQ7XG4gIH1cblxuICBnZXQgbG93ZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5MVTtcbiAgICBsZXQgcm93cyA9IGRhdGEucm93cztcbiAgICBsZXQgY29sdW1ucyA9IGRhdGEuY29sdW1ucztcbiAgICBsZXQgWCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGlmIChpID4gaikge1xuICAgICAgICAgIFguc2V0KGksIGosIGRhdGEuZ2V0KGksIGopKTtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFg7XG4gIH1cblxuICBnZXQgdXBwZXJUcmlhbmd1bGFyTWF0cml4KCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5MVTtcbiAgICBsZXQgcm93cyA9IGRhdGEucm93cztcbiAgICBsZXQgY29sdW1ucyA9IGRhdGEuY29sdW1ucztcbiAgICBsZXQgWCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGlmIChpIDw9IGopIHtcbiAgICAgICAgICBYLnNldChpLCBqLCBkYXRhLmdldChpLCBqKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFg7XG4gIH1cblxuICBnZXQgcGl2b3RQZXJtdXRhdGlvblZlY3RvcigpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnBpdm90VmVjdG9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuaW1wb3J0IFdyYXBwZXJNYXRyaXgyRCBmcm9tICcuLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5pcGFscyB7XG4gIGNvbnN0cnVjdG9yKFgsIG9wdGlvbnMgPSB7fSkge1xuICAgIFggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgoWCk7XG4gICAgbGV0IHsgWSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7XG4gICAgICBzY2FsZVNjb3JlcyA9IGZhbHNlLFxuICAgICAgbWF4SXRlcmF0aW9ucyA9IDEwMDAsXG4gICAgICB0ZXJtaW5hdGlvbkNyaXRlcmlhID0gMWUtMTAsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBsZXQgdTtcbiAgICBpZiAoWSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoWSkgJiYgdHlwZW9mIFlbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIFkgPSBNYXRyaXguY29sdW1uVmVjdG9yKFkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChZKTtcbiAgICAgIH1cbiAgICAgIGlmICghWS5pc0NvbHVtblZlY3RvcigpIHx8IFkucm93cyAhPT0gWC5yb3dzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWSBtdXN0IGJlIGEgY29sdW1uIHZlY3RvciBvZiBsZW5ndGggWC5yb3dzJyk7XG4gICAgICB9XG4gICAgICB1ID0gWTtcbiAgICB9IGVsc2Uge1xuICAgICAgdSA9IFguZ2V0Q29sdW1uVmVjdG9yKDApO1xuICAgIH1cblxuICAgIGxldCBkaWZmID0gMTtcbiAgICBsZXQgdCwgcSwgdywgdE9sZDtcblxuICAgIGZvciAoXG4gICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICBjb3VudGVyIDwgbWF4SXRlcmF0aW9ucyAmJiBkaWZmID4gdGVybWluYXRpb25Dcml0ZXJpYTtcbiAgICAgIGNvdW50ZXIrK1xuICAgICkge1xuICAgICAgdyA9IFgudHJhbnNwb3NlKCkubW11bCh1KS5kaXYodS50cmFuc3Bvc2UoKS5tbXVsKHUpLmdldCgwLCAwKSk7XG4gICAgICB3ID0gdy5kaXYody5ub3JtKCkpO1xuXG4gICAgICB0ID0gWC5tbXVsKHcpLmRpdih3LnRyYW5zcG9zZSgpLm1tdWwodykuZ2V0KDAsIDApKTtcblxuICAgICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIGRpZmYgPSB0LmNsb25lKCkuc3ViKHRPbGQpLnBvdygyKS5zdW0oKTtcbiAgICAgIH1cbiAgICAgIHRPbGQgPSB0LmNsb25lKCk7XG5cbiAgICAgIGlmIChZKSB7XG4gICAgICAgIHEgPSBZLnRyYW5zcG9zZSgpLm1tdWwodCkuZGl2KHQudHJhbnNwb3NlKCkubW11bCh0KS5nZXQoMCwgMCkpO1xuICAgICAgICBxID0gcS5kaXYocS5ub3JtKCkpO1xuXG4gICAgICAgIHUgPSBZLm1tdWwocSkuZGl2KHEudHJhbnNwb3NlKCkubW11bChxKS5nZXQoMCwgMCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdSA9IHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFkpIHtcbiAgICAgIGxldCBwID0gWC50cmFuc3Bvc2UoKS5tbXVsKHQpLmRpdih0LnRyYW5zcG9zZSgpLm1tdWwodCkuZ2V0KDAsIDApKTtcbiAgICAgIHAgPSBwLmRpdihwLm5vcm0oKSk7XG4gICAgICBsZXQgeFJlc2lkdWFsID0gWC5jbG9uZSgpLnN1Yih0LmNsb25lKCkubW11bChwLnRyYW5zcG9zZSgpKSk7XG4gICAgICBsZXQgcmVzaWR1YWwgPSB1LnRyYW5zcG9zZSgpLm1tdWwodCkuZGl2KHQudHJhbnNwb3NlKCkubW11bCh0KS5nZXQoMCwgMCkpO1xuICAgICAgbGV0IHlSZXNpZHVhbCA9IFkuY2xvbmUoKS5zdWIoXG4gICAgICAgIHQuY2xvbmUoKS5tdWxTKHJlc2lkdWFsLmdldCgwLCAwKSkubW11bChxLnRyYW5zcG9zZSgpKSxcbiAgICAgICk7XG5cbiAgICAgIHRoaXMudCA9IHQ7XG4gICAgICB0aGlzLnAgPSBwLnRyYW5zcG9zZSgpO1xuICAgICAgdGhpcy53ID0gdy50cmFuc3Bvc2UoKTtcbiAgICAgIHRoaXMucSA9IHE7XG4gICAgICB0aGlzLnUgPSB1O1xuICAgICAgdGhpcy5zID0gdC50cmFuc3Bvc2UoKS5tbXVsKHQpO1xuICAgICAgdGhpcy54UmVzaWR1YWwgPSB4UmVzaWR1YWw7XG4gICAgICB0aGlzLnlSZXNpZHVhbCA9IHlSZXNpZHVhbDtcbiAgICAgIHRoaXMuYmV0YXMgPSByZXNpZHVhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53ID0gdy50cmFuc3Bvc2UoKTtcbiAgICAgIHRoaXMucyA9IHQudHJhbnNwb3NlKCkubW11bCh0KS5zcXJ0KCk7XG4gICAgICBpZiAoc2NhbGVTY29yZXMpIHtcbiAgICAgICAgdGhpcy50ID0gdC5jbG9uZSgpLmRpdih0aGlzLnMuZ2V0KDAsIDApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudCA9IHQ7XG4gICAgICB9XG4gICAgICB0aGlzLnhSZXNpZHVhbCA9IFguc3ViKHQubW11bCh3LnRyYW5zcG9zZSgpKSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJy4uL21hdHJpeCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4uL3dyYXAvV3JhcHBlck1hdHJpeDJEJztcblxuaW1wb3J0IHsgaHlwb3RlbnVzZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFyRGVjb21wb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgbGV0IHFyID0gdmFsdWUuY2xvbmUoKTtcbiAgICBsZXQgbSA9IHZhbHVlLnJvd3M7XG4gICAgbGV0IG4gPSB2YWx1ZS5jb2x1bW5zO1xuICAgIGxldCByZGlhZyA9IG5ldyBGbG9hdDY0QXJyYXkobik7XG4gICAgbGV0IGksIGosIGssIHM7XG5cbiAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICBsZXQgbnJtID0gMDtcbiAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgbnJtID0gaHlwb3RlbnVzZShucm0sIHFyLmdldChpLCBrKSk7XG4gICAgICB9XG4gICAgICBpZiAobnJtICE9PSAwKSB7XG4gICAgICAgIGlmIChxci5nZXQoaywgaykgPCAwKSB7XG4gICAgICAgICAgbnJtID0gLW5ybTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgcXIuc2V0KGksIGssIHFyLmdldChpLCBrKSAvIG5ybSk7XG4gICAgICAgIH1cbiAgICAgICAgcXIuc2V0KGssIGssIHFyLmdldChrLCBrKSArIDEpO1xuICAgICAgICBmb3IgKGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgIHMgKz0gcXIuZ2V0KGksIGspICogcXIuZ2V0KGksIGopO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzID0gLXMgLyBxci5nZXQoaywgayk7XG4gICAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgcXIuc2V0KGksIGosIHFyLmdldChpLCBqKSArIHMgKiBxci5nZXQoaSwgaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmRpYWdba10gPSAtbnJtO1xuICAgIH1cblxuICAgIHRoaXMuUVIgPSBxcjtcbiAgICB0aGlzLlJkaWFnID0gcmRpYWc7XG4gIH1cblxuICBzb2x2ZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gTWF0cml4LmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgIGxldCBxciA9IHRoaXMuUVI7XG4gICAgbGV0IG0gPSBxci5yb3dzO1xuXG4gICAgaWYgKHZhbHVlLnJvd3MgIT09IG0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IHJvdyBkaW1lbnNpb25zIG11c3QgYWdyZWUnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzRnVsbFJhbmsoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgcmFuayBkZWZpY2llbnQnKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnQgPSB2YWx1ZS5jb2x1bW5zO1xuICAgIGxldCBYID0gdmFsdWUuY2xvbmUoKTtcbiAgICBsZXQgbiA9IHFyLmNvbHVtbnM7XG4gICAgbGV0IGksIGosIGssIHM7XG5cbiAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICBzID0gMDtcbiAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgIHMgKz0gcXIuZ2V0KGksIGspICogWC5nZXQoaSwgaik7XG4gICAgICAgIH1cbiAgICAgICAgcyA9IC1zIC8gcXIuZ2V0KGssIGspO1xuICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgWC5nZXQoaSwgaikgKyBzICogcXIuZ2V0KGksIGspKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGsgPSBuIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgIFguc2V0KGssIGosIFguZ2V0KGssIGopIC8gdGhpcy5SZGlhZ1trXSk7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgWC5nZXQoaSwgaikgLSBYLmdldChrLCBqKSAqIHFyLmdldChpLCBrKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWC5zdWJNYXRyaXgoMCwgbiAtIDEsIDAsIGNvdW50IC0gMSk7XG4gIH1cblxuICBpc0Z1bGxSYW5rKCkge1xuICAgIGxldCBjb2x1bW5zID0gdGhpcy5RUi5jb2x1bW5zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5SZGlhZ1tpXSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwcGVyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICBsZXQgcXIgPSB0aGlzLlFSO1xuICAgIGxldCBuID0gcXIuY29sdW1ucztcbiAgICBsZXQgWCA9IG5ldyBNYXRyaXgobiwgbik7XG4gICAgbGV0IGksIGo7XG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICBpZiAoaSA8IGopIHtcbiAgICAgICAgICBYLnNldChpLCBqLCBxci5nZXQoaSwgaikpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGopIHtcbiAgICAgICAgICBYLnNldChpLCBqLCB0aGlzLlJkaWFnW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBYLnNldChpLCBqLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gWDtcbiAgfVxuXG4gIGdldCBvcnRob2dvbmFsTWF0cml4KCkge1xuICAgIGxldCBxciA9IHRoaXMuUVI7XG4gICAgbGV0IHJvd3MgPSBxci5yb3dzO1xuICAgIGxldCBjb2x1bW5zID0gcXIuY29sdW1ucztcbiAgICBsZXQgWCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgbGV0IGksIGosIGssIHM7XG5cbiAgICBmb3IgKGsgPSBjb2x1bW5zIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgWC5zZXQoaSwgaywgMCk7XG4gICAgICB9XG4gICAgICBYLnNldChrLCBrLCAxKTtcbiAgICAgIGZvciAoaiA9IGs7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKHFyLmdldChrLCBrKSAhPT0gMCkge1xuICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHMgKz0gcXIuZ2V0KGksIGspICogWC5nZXQoaSwgaik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcyA9IC1zIC8gcXIuZ2V0KGssIGspO1xuXG4gICAgICAgICAgZm9yIChpID0gazsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICAgICAgWC5zZXQoaSwgaiwgWC5nZXQoaSwgaikgKyBzICogcXIuZ2V0KGksIGspKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFg7XG4gIH1cbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuXG5pbXBvcnQgeyBoeXBvdGVudXNlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgbGV0IG0gPSB2YWx1ZS5yb3dzO1xuICAgIGxldCBuID0gdmFsdWUuY29sdW1ucztcblxuICAgIGNvbnN0IHtcbiAgICAgIGNvbXB1dGVMZWZ0U2luZ3VsYXJWZWN0b3JzID0gdHJ1ZSxcbiAgICAgIGNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycyA9IHRydWUsXG4gICAgICBhdXRvVHJhbnNwb3NlID0gZmFsc2UsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBsZXQgd2FudHUgPSBCb29sZWFuKGNvbXB1dGVMZWZ0U2luZ3VsYXJWZWN0b3JzKTtcbiAgICBsZXQgd2FudHYgPSBCb29sZWFuKGNvbXB1dGVSaWdodFNpbmd1bGFyVmVjdG9ycyk7XG5cbiAgICBsZXQgc3dhcHBlZCA9IGZhbHNlO1xuICAgIGxldCBhO1xuICAgIGlmIChtIDwgbikge1xuICAgICAgaWYgKCFhdXRvVHJhbnNwb3NlKSB7XG4gICAgICAgIGEgPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ0NvbXB1dGluZyBTVkQgb24gYSBtYXRyaXggd2l0aCBtb3JlIGNvbHVtbnMgdGhhbiByb3dzLiBDb25zaWRlciBlbmFibGluZyBhdXRvVHJhbnNwb3NlJyxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEgPSB2YWx1ZS50cmFuc3Bvc2UoKTtcbiAgICAgICAgbSA9IGEucm93cztcbiAgICAgICAgbiA9IGEuY29sdW1ucztcbiAgICAgICAgc3dhcHBlZCA9IHRydWU7XG4gICAgICAgIGxldCBhdXggPSB3YW50dTtcbiAgICAgICAgd2FudHUgPSB3YW50djtcbiAgICAgICAgd2FudHYgPSBhdXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSB2YWx1ZS5jbG9uZSgpO1xuICAgIH1cblxuICAgIGxldCBudSA9IE1hdGgubWluKG0sIG4pO1xuICAgIGxldCBuaSA9IE1hdGgubWluKG0gKyAxLCBuKTtcbiAgICBsZXQgcyA9IG5ldyBGbG9hdDY0QXJyYXkobmkpO1xuICAgIGxldCBVID0gbmV3IE1hdHJpeChtLCBudSk7XG4gICAgbGV0IFYgPSBuZXcgTWF0cml4KG4sIG4pO1xuXG4gICAgbGV0IGUgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIGxldCB3b3JrID0gbmV3IEZsb2F0NjRBcnJheShtKTtcblxuICAgIGxldCBzaSA9IG5ldyBGbG9hdDY0QXJyYXkobmkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmk7IGkrKykgc2lbaV0gPSBpO1xuXG4gICAgbGV0IG5jdCA9IE1hdGgubWluKG0gLSAxLCBuKTtcbiAgICBsZXQgbnJ0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obiAtIDIsIG0pKTtcbiAgICBsZXQgbXJjID0gTWF0aC5tYXgobmN0LCBucnQpO1xuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBtcmM7IGsrKykge1xuICAgICAgaWYgKGsgPCBuY3QpIHtcbiAgICAgICAgc1trXSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgc1trXSA9IGh5cG90ZW51c2Uoc1trXSwgYS5nZXQoaSwgaykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzW2tdICE9PSAwKSB7XG4gICAgICAgICAgaWYgKGEuZ2V0KGssIGspIDwgMCkge1xuICAgICAgICAgICAgc1trXSA9IC1zW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgYS5zZXQoaSwgaywgYS5nZXQoaSwgaykgLyBzW2tdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5zZXQoaywgaywgYS5nZXQoaywgaykgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBzW2tdID0gLXNba107XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICBpZiAoayA8IG5jdCAmJiBzW2tdICE9PSAwKSB7XG4gICAgICAgICAgbGV0IHQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICB0ICs9IGEuZ2V0KGksIGspICogYS5nZXQoaSwgaik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHQgPSAtdCAvIGEuZ2V0KGssIGspO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBhLnNldChpLCBqLCBhLmdldChpLCBqKSArIHQgKiBhLmdldChpLCBrKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVbal0gPSBhLmdldChrLCBqKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdhbnR1ICYmIGsgPCBuY3QpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICBVLnNldChpLCBrLCBhLmdldChpLCBrKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGsgPCBucnQpIHtcbiAgICAgICAgZVtrXSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGVba10gPSBoeXBvdGVudXNlKGVba10sIGVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlW2tdICE9PSAwKSB7XG4gICAgICAgICAgaWYgKGVbayArIDFdIDwgMCkge1xuICAgICAgICAgICAgZVtrXSA9IDAgLSBlW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGVbaV0gLz0gZVtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZVtrICsgMV0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlW2tdID0gLWVba107XG4gICAgICAgIGlmIChrICsgMSA8IG0gJiYgZVtrXSAhPT0gMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgd29ya1tpXSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgIHdvcmtbaV0gKz0gZVtqXSAqIGEuZ2V0KGksIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gLWVbal0gLyBlW2sgKyAxXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICBhLnNldChpLCBqLCBhLmdldChpLCBqKSArIHQgKiB3b3JrW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBWLnNldChpLCBrLCBlW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcCA9IE1hdGgubWluKG4sIG0gKyAxKTtcbiAgICBpZiAobmN0IDwgbikge1xuICAgICAgc1tuY3RdID0gYS5nZXQobmN0LCBuY3QpO1xuICAgIH1cbiAgICBpZiAobSA8IHApIHtcbiAgICAgIHNbcCAtIDFdID0gMDtcbiAgICB9XG4gICAgaWYgKG5ydCArIDEgPCBwKSB7XG4gICAgICBlW25ydF0gPSBhLmdldChucnQsIHAgLSAxKTtcbiAgICB9XG4gICAgZVtwIC0gMV0gPSAwO1xuXG4gICAgaWYgKHdhbnR1KSB7XG4gICAgICBmb3IgKGxldCBqID0gbmN0OyBqIDwgbnU7IGorKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgIFUuc2V0KGksIGosIDApO1xuICAgICAgICB9XG4gICAgICAgIFUuc2V0KGosIGosIDEpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgayA9IG5jdCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGlmIChzW2tdICE9PSAwKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDwgbnU7IGorKykge1xuICAgICAgICAgICAgbGV0IHQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgdCArPSBVLmdldChpLCBrKSAqIFUuZ2V0KGksIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCA9IC10IC8gVS5nZXQoaywgayk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICBVLnNldChpLCBqLCBVLmdldChpLCBqKSArIHQgKiBVLmdldChpLCBrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBVLnNldChpLCBrLCAtVS5nZXQoaSwgaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBVLnNldChrLCBrLCAxICsgVS5nZXQoaywgaykpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgayAtIDE7IGkrKykge1xuICAgICAgICAgICAgVS5zZXQoaSwgaywgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBVLnNldChpLCBrLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgVS5zZXQoaywgaywgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2FudHYpIHtcbiAgICAgIGZvciAobGV0IGsgPSBuIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgaWYgKGsgPCBucnQgJiYgZVtrXSAhPT0gMCkge1xuICAgICAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgbGV0IHQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgIHQgKz0gVi5nZXQoaSwgaykgKiBWLmdldChpLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSAtdCAvIFYuZ2V0KGsgKyAxLCBrKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICBWLnNldChpLCBqLCBWLmdldChpLCBqKSArIHQgKiBWLmdldChpLCBrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgVi5zZXQoaSwgaywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgVi5zZXQoaywgaywgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBwID0gcCAtIDE7XG4gICAgbGV0IGl0ZXIgPSAwO1xuICAgIGxldCBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcbiAgICB3aGlsZSAocCA+IDApIHtcbiAgICAgIGxldCBrLCBrYXNlO1xuICAgICAgZm9yIChrID0gcCAtIDI7IGsgPj0gLTE7IGstLSkge1xuICAgICAgICBpZiAoayA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHBoYSA9XG4gICAgICAgICAgTnVtYmVyLk1JTl9WQUxVRSArIGVwcyAqIE1hdGguYWJzKHNba10gKyBNYXRoLmFicyhzW2sgKyAxXSkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZVtrXSkgPD0gYWxwaGEgfHwgTnVtYmVyLmlzTmFOKGVba10pKSB7XG4gICAgICAgICAgZVtrXSA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrID09PSBwIC0gMikge1xuICAgICAgICBrYXNlID0gNDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBrcztcbiAgICAgICAgZm9yIChrcyA9IHAgLSAxOyBrcyA+PSBrOyBrcy0tKSB7XG4gICAgICAgICAgaWYgKGtzID09PSBrKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHQgPVxuICAgICAgICAgICAgKGtzICE9PSBwID8gTWF0aC5hYnMoZVtrc10pIDogMCkgK1xuICAgICAgICAgICAgKGtzICE9PSBrICsgMSA/IE1hdGguYWJzKGVba3MgLSAxXSkgOiAwKTtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoc1trc10pIDw9IGVwcyAqIHQpIHtcbiAgICAgICAgICAgIHNba3NdID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa3MgPT09IGspIHtcbiAgICAgICAgICBrYXNlID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChrcyA9PT0gcCAtIDEpIHtcbiAgICAgICAgICBrYXNlID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrYXNlID0gMjtcbiAgICAgICAgICBrID0ga3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaysrO1xuXG4gICAgICBzd2l0Y2ggKGthc2UpIHtcbiAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgbGV0IGYgPSBlW3AgLSAyXTtcbiAgICAgICAgICBlW3AgLSAyXSA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IHAgLSAyOyBqID49IGs7IGotLSkge1xuICAgICAgICAgICAgbGV0IHQgPSBoeXBvdGVudXNlKHNbal0sIGYpO1xuICAgICAgICAgICAgbGV0IGNzID0gc1tqXSAvIHQ7XG4gICAgICAgICAgICBsZXQgc24gPSBmIC8gdDtcbiAgICAgICAgICAgIHNbal0gPSB0O1xuICAgICAgICAgICAgaWYgKGogIT09IGspIHtcbiAgICAgICAgICAgICAgZiA9IC1zbiAqIGVbaiAtIDFdO1xuICAgICAgICAgICAgICBlW2ogLSAxXSA9IGNzICogZVtqIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gY3MgKiBWLmdldChpLCBqKSArIHNuICogVi5nZXQoaSwgcCAtIDEpO1xuICAgICAgICAgICAgICAgIFYuc2V0KGksIHAgLSAxLCAtc24gKiBWLmdldChpLCBqKSArIGNzICogVi5nZXQoaSwgcCAtIDEpKTtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBqLCB0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICBsZXQgZiA9IGVbayAtIDFdO1xuICAgICAgICAgIGVbayAtIDFdID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBqID0gazsgaiA8IHA7IGorKykge1xuICAgICAgICAgICAgbGV0IHQgPSBoeXBvdGVudXNlKHNbal0sIGYpO1xuICAgICAgICAgICAgbGV0IGNzID0gc1tqXSAvIHQ7XG4gICAgICAgICAgICBsZXQgc24gPSBmIC8gdDtcbiAgICAgICAgICAgIHNbal0gPSB0O1xuICAgICAgICAgICAgZiA9IC1zbiAqIGVbal07XG4gICAgICAgICAgICBlW2pdID0gY3MgKiBlW2pdO1xuICAgICAgICAgICAgaWYgKHdhbnR1KSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdCA9IGNzICogVS5nZXQoaSwgaikgKyBzbiAqIFUuZ2V0KGksIGsgLSAxKTtcbiAgICAgICAgICAgICAgICBVLnNldChpLCBrIC0gMSwgLXNuICogVS5nZXQoaSwgaikgKyBjcyAqIFUuZ2V0KGksIGsgLSAxKSk7XG4gICAgICAgICAgICAgICAgVS5zZXQoaSwgaiwgdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1heChcbiAgICAgICAgICAgIE1hdGguYWJzKHNbcCAtIDFdKSxcbiAgICAgICAgICAgIE1hdGguYWJzKHNbcCAtIDJdKSxcbiAgICAgICAgICAgIE1hdGguYWJzKGVbcCAtIDJdKSxcbiAgICAgICAgICAgIE1hdGguYWJzKHNba10pLFxuICAgICAgICAgICAgTWF0aC5hYnMoZVtrXSksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBzcCA9IHNbcCAtIDFdIC8gc2NhbGU7XG4gICAgICAgICAgY29uc3Qgc3BtMSA9IHNbcCAtIDJdIC8gc2NhbGU7XG4gICAgICAgICAgY29uc3QgZXBtMSA9IGVbcCAtIDJdIC8gc2NhbGU7XG4gICAgICAgICAgY29uc3Qgc2sgPSBzW2tdIC8gc2NhbGU7XG4gICAgICAgICAgY29uc3QgZWsgPSBlW2tdIC8gc2NhbGU7XG4gICAgICAgICAgY29uc3QgYiA9ICgoc3BtMSArIHNwKSAqIChzcG0xIC0gc3ApICsgZXBtMSAqIGVwbTEpIC8gMjtcbiAgICAgICAgICBjb25zdCBjID0gc3AgKiBlcG0xICogKHNwICogZXBtMSk7XG4gICAgICAgICAgbGV0IHNoaWZ0ID0gMDtcbiAgICAgICAgICBpZiAoYiAhPT0gMCB8fCBjICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoYiA8IDApIHtcbiAgICAgICAgICAgICAgc2hpZnQgPSAwIC0gTWF0aC5zcXJ0KGIgKiBiICsgYyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaGlmdCA9IE1hdGguc3FydChiICogYiArIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpZnQgPSBjIC8gKGIgKyBzaGlmdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBmID0gKHNrICsgc3ApICogKHNrIC0gc3ApICsgc2hpZnQ7XG4gICAgICAgICAgbGV0IGcgPSBzayAqIGVrO1xuICAgICAgICAgIGZvciAobGV0IGogPSBrOyBqIDwgcCAtIDE7IGorKykge1xuICAgICAgICAgICAgbGV0IHQgPSBoeXBvdGVudXNlKGYsIGcpO1xuICAgICAgICAgICAgaWYgKHQgPT09IDApIHQgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICAgICAgbGV0IGNzID0gZiAvIHQ7XG4gICAgICAgICAgICBsZXQgc24gPSBnIC8gdDtcbiAgICAgICAgICAgIGlmIChqICE9PSBrKSB7XG4gICAgICAgICAgICAgIGVbaiAtIDFdID0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGYgPSBjcyAqIHNbal0gKyBzbiAqIGVbal07XG4gICAgICAgICAgICBlW2pdID0gY3MgKiBlW2pdIC0gc24gKiBzW2pdO1xuICAgICAgICAgICAgZyA9IHNuICogc1tqICsgMV07XG4gICAgICAgICAgICBzW2ogKyAxXSA9IGNzICogc1tqICsgMV07XG4gICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gY3MgKiBWLmdldChpLCBqKSArIHNuICogVi5nZXQoaSwgaiArIDEpO1xuICAgICAgICAgICAgICAgIFYuc2V0KGksIGogKyAxLCAtc24gKiBWLmdldChpLCBqKSArIGNzICogVi5nZXQoaSwgaiArIDEpKTtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBqLCB0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCA9IGh5cG90ZW51c2UoZiwgZyk7XG4gICAgICAgICAgICBpZiAodCA9PT0gMCkgdCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgICAgICBjcyA9IGYgLyB0O1xuICAgICAgICAgICAgc24gPSBnIC8gdDtcbiAgICAgICAgICAgIHNbal0gPSB0O1xuICAgICAgICAgICAgZiA9IGNzICogZVtqXSArIHNuICogc1tqICsgMV07XG4gICAgICAgICAgICBzW2ogKyAxXSA9IC1zbiAqIGVbal0gKyBjcyAqIHNbaiArIDFdO1xuICAgICAgICAgICAgZyA9IHNuICogZVtqICsgMV07XG4gICAgICAgICAgICBlW2ogKyAxXSA9IGNzICogZVtqICsgMV07XG4gICAgICAgICAgICBpZiAod2FudHUgJiYgaiA8IG0gLSAxKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdCA9IGNzICogVS5nZXQoaSwgaikgKyBzbiAqIFUuZ2V0KGksIGogKyAxKTtcbiAgICAgICAgICAgICAgICBVLnNldChpLCBqICsgMSwgLXNuICogVS5nZXQoaSwgaikgKyBjcyAqIFUuZ2V0KGksIGogKyAxKSk7XG4gICAgICAgICAgICAgICAgVS5zZXQoaSwgaiwgdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZVtwIC0gMl0gPSBmO1xuICAgICAgICAgIGl0ZXIgPSBpdGVyICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIDQ6IHtcbiAgICAgICAgICBpZiAoc1trXSA8PSAwKSB7XG4gICAgICAgICAgICBzW2tdID0gc1trXSA8IDAgPyAtc1trXSA6IDA7XG4gICAgICAgICAgICBpZiAod2FudHYpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcHA7IGkrKykge1xuICAgICAgICAgICAgICAgIFYuc2V0KGksIGssIC1WLmdldChpLCBrKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGsgPCBwcCkge1xuICAgICAgICAgICAgaWYgKHNba10gPj0gc1trICsgMV0pIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdCA9IHNba107XG4gICAgICAgICAgICBzW2tdID0gc1trICsgMV07XG4gICAgICAgICAgICBzW2sgKyAxXSA9IHQ7XG4gICAgICAgICAgICBpZiAod2FudHYgJiYgayA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdCA9IFYuZ2V0KGksIGsgKyAxKTtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBrICsgMSwgVi5nZXQoaSwgaykpO1xuICAgICAgICAgICAgICAgIFYuc2V0KGksIGssIHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2FudHUgJiYgayA8IG0gLSAxKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdCA9IFUuZ2V0KGksIGsgKyAxKTtcbiAgICAgICAgICAgICAgICBVLnNldChpLCBrICsgMSwgVS5nZXQoaSwgaykpO1xuICAgICAgICAgICAgICAgIFUuc2V0KGksIGssIHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICAgIHAtLTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3YXBwZWQpIHtcbiAgICAgIGxldCB0bXAgPSBWO1xuICAgICAgViA9IFU7XG4gICAgICBVID0gdG1wO1xuICAgIH1cblxuICAgIHRoaXMubSA9IG07XG4gICAgdGhpcy5uID0gbjtcbiAgICB0aGlzLnMgPSBzO1xuICAgIHRoaXMuVSA9IFU7XG4gICAgdGhpcy5WID0gVjtcbiAgfVxuXG4gIHNvbHZlKHZhbHVlKSB7XG4gICAgbGV0IFkgPSB2YWx1ZTtcbiAgICBsZXQgZSA9IHRoaXMudGhyZXNob2xkO1xuICAgIGxldCBzY29scyA9IHRoaXMucy5sZW5ndGg7XG4gICAgbGV0IExzID0gTWF0cml4Lnplcm9zKHNjb2xzLCBzY29scyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb2xzOyBpKyspIHtcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnNbaV0pIDw9IGUpIHtcbiAgICAgICAgTHMuc2V0KGksIGksIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTHMuc2V0KGksIGksIDEgLyB0aGlzLnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBVID0gdGhpcy5VO1xuICAgIGxldCBWID0gdGhpcy5yaWdodFNpbmd1bGFyVmVjdG9ycztcblxuICAgIGxldCBWTCA9IFYubW11bChMcyk7XG4gICAgbGV0IHZyb3dzID0gVi5yb3dzO1xuICAgIGxldCB1cm93cyA9IFUucm93cztcbiAgICBsZXQgVkxVID0gTWF0cml4Lnplcm9zKHZyb3dzLCB1cm93cyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZyb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdXJvd3M7IGorKykge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzY29sczsgaysrKSB7XG4gICAgICAgICAgc3VtICs9IFZMLmdldChpLCBrKSAqIFUuZ2V0KGosIGspO1xuICAgICAgICB9XG4gICAgICAgIFZMVS5zZXQoaSwgaiwgc3VtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gVkxVLm1tdWwoWSk7XG4gIH1cblxuICBzb2x2ZUZvckRpYWdvbmFsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc29sdmUoTWF0cml4LmRpYWcodmFsdWUpKTtcbiAgfVxuXG4gIGludmVyc2UoKSB7XG4gICAgbGV0IFYgPSB0aGlzLlY7XG4gICAgbGV0IGUgPSB0aGlzLnRocmVzaG9sZDtcbiAgICBsZXQgdnJvd3MgPSBWLnJvd3M7XG4gICAgbGV0IHZjb2xzID0gVi5jb2x1bW5zO1xuICAgIGxldCBYID0gbmV3IE1hdHJpeCh2cm93cywgdGhpcy5zLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZyb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmNvbHM7IGorKykge1xuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5zW2pdKSA+IGUpIHtcbiAgICAgICAgICBYLnNldChpLCBqLCBWLmdldChpLCBqKSAvIHRoaXMuc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgVSA9IHRoaXMuVTtcblxuICAgIGxldCB1cm93cyA9IFUucm93cztcbiAgICBsZXQgdWNvbHMgPSBVLmNvbHVtbnM7XG4gICAgbGV0IFkgPSBuZXcgTWF0cml4KHZyb3dzLCB1cm93cyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZyb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdXJvd3M7IGorKykge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB1Y29sczsgaysrKSB7XG4gICAgICAgICAgc3VtICs9IFguZ2V0KGksIGspICogVS5nZXQoaiwgayk7XG4gICAgICAgIH1cbiAgICAgICAgWS5zZXQoaSwgaiwgc3VtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWTtcbiAgfVxuXG4gIGdldCBjb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc1swXSAvIHRoaXMuc1tNYXRoLm1pbih0aGlzLm0sIHRoaXMubikgLSAxXTtcbiAgfVxuXG4gIGdldCBub3JtMigpIHtcbiAgICByZXR1cm4gdGhpcy5zWzBdO1xuICB9XG5cbiAgZ2V0IHJhbmsoKSB7XG4gICAgbGV0IHRvbCA9IE1hdGgubWF4KHRoaXMubSwgdGhpcy5uKSAqIHRoaXMuc1swXSAqIE51bWJlci5FUFNJTE9OO1xuICAgIGxldCByID0gMDtcbiAgICBsZXQgcyA9IHRoaXMucztcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgIGlmIChzW2ldID4gdG9sKSB7XG4gICAgICAgIHIrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICBnZXQgZGlhZ29uYWwoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zKTtcbiAgfVxuXG4gIGdldCB0aHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIChOdW1iZXIuRVBTSUxPTiAvIDIpICogTWF0aC5tYXgodGhpcy5tLCB0aGlzLm4pICogdGhpcy5zWzBdO1xuICB9XG5cbiAgZ2V0IGxlZnRTaW5ndWxhclZlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuVTtcbiAgfVxuXG4gIGdldCByaWdodFNpbmd1bGFyVmVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5WO1xuICB9XG5cbiAgZ2V0IGRpYWdvbmFsTWF0cml4KCkge1xuICAgIHJldHVybiBNYXRyaXguZGlhZyh0aGlzLnMpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaHlwb3RlbnVzZShhLCBiKSB7XG4gIGxldCByID0gMDtcbiAgaWYgKE1hdGguYWJzKGEpID4gTWF0aC5hYnMoYikpIHtcbiAgICByID0gYiAvIGE7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEpICogTWF0aC5zcXJ0KDEgKyByICogcik7XG4gIH1cbiAgaWYgKGIgIT09IDApIHtcbiAgICByID0gYSAvIGI7XG4gICAgcmV0dXJuIE1hdGguYWJzKGIpICogTWF0aC5zcXJ0KDEgKyByICogcik7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG4iLCJpbXBvcnQgTHVEZWNvbXBvc2l0aW9uIGZyb20gJy4vZGMvbHUnO1xuaW1wb3J0IFFyRGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL3FyJztcbmltcG9ydCBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL3N2ZCc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4vbWF0cml4JztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG1hdHJpeCwgdXNlU1ZEID0gZmFsc2UpIHtcbiAgbWF0cml4ID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gIGlmICh1c2VTVkQpIHtcbiAgICByZXR1cm4gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKG1hdHJpeCkuaW52ZXJzZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb2x2ZShtYXRyaXgsIE1hdHJpeC5leWUobWF0cml4LnJvd3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29sdmUobGVmdEhhbmRTaWRlLCByaWdodEhhbmRTaWRlLCB1c2VTVkQgPSBmYWxzZSkge1xuICBsZWZ0SGFuZFNpZGUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobGVmdEhhbmRTaWRlKTtcbiAgcmlnaHRIYW5kU2lkZSA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChyaWdodEhhbmRTaWRlKTtcbiAgaWYgKHVzZVNWRCkge1xuICAgIHJldHVybiBuZXcgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGVmdEhhbmRTaWRlLmlzU3F1YXJlKClcbiAgICAgID8gbmV3IEx1RGVjb21wb3NpdGlvbihsZWZ0SGFuZFNpZGUpLnNvbHZlKHJpZ2h0SGFuZFNpZGUpXG4gICAgICA6IG5ldyBRckRlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IEx1RGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL2x1JztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xuaW1wb3J0IE1hdHJpeFNlbGVjdGlvblZpZXcgZnJvbSAnLi92aWV3cy9zZWxlY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQobWF0cml4KSB7XG4gIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICBpZiAobWF0cml4LmlzU3F1YXJlKCkpIHtcbiAgICBsZXQgYSwgYiwgYywgZDtcbiAgICBpZiAobWF0cml4LmNvbHVtbnMgPT09IDIpIHtcbiAgICAgIC8vIDIgeCAyIG1hdHJpeFxuICAgICAgYSA9IG1hdHJpeC5nZXQoMCwgMCk7XG4gICAgICBiID0gbWF0cml4LmdldCgwLCAxKTtcbiAgICAgIGMgPSBtYXRyaXguZ2V0KDEsIDApO1xuICAgICAgZCA9IG1hdHJpeC5nZXQoMSwgMSk7XG5cbiAgICAgIHJldHVybiBhICogZCAtIGIgKiBjO1xuICAgIH0gZWxzZSBpZiAobWF0cml4LmNvbHVtbnMgPT09IDMpIHtcbiAgICAgIC8vIDMgeCAzIG1hdHJpeFxuICAgICAgbGV0IHN1Yk1hdHJpeDAsIHN1Yk1hdHJpeDEsIHN1Yk1hdHJpeDI7XG4gICAgICBzdWJNYXRyaXgwID0gbmV3IE1hdHJpeFNlbGVjdGlvblZpZXcobWF0cml4LCBbMSwgMl0sIFsxLCAyXSk7XG4gICAgICBzdWJNYXRyaXgxID0gbmV3IE1hdHJpeFNlbGVjdGlvblZpZXcobWF0cml4LCBbMSwgMl0sIFswLCAyXSk7XG4gICAgICBzdWJNYXRyaXgyID0gbmV3IE1hdHJpeFNlbGVjdGlvblZpZXcobWF0cml4LCBbMSwgMl0sIFswLCAxXSk7XG4gICAgICBhID0gbWF0cml4LmdldCgwLCAwKTtcbiAgICAgIGIgPSBtYXRyaXguZ2V0KDAsIDEpO1xuICAgICAgYyA9IG1hdHJpeC5nZXQoMCwgMik7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIGEgKiBkZXRlcm1pbmFudChzdWJNYXRyaXgwKSAtXG4gICAgICAgIGIgKiBkZXRlcm1pbmFudChzdWJNYXRyaXgxKSArXG4gICAgICAgIGMgKiBkZXRlcm1pbmFudChzdWJNYXRyaXgyKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZ2VuZXJhbCBwdXJwb3NlIGRldGVybWluYW50IHVzaW5nIHRoZSBMVSBkZWNvbXBvc2l0aW9uXG4gICAgICByZXR1cm4gbmV3IEx1RGVjb21wb3NpdGlvbihtYXRyaXgpLmRldGVybWluYW50O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcignZGV0ZXJtaW5hbnQgY2FuIG9ubHkgYmUgY2FsY3VsYXRlZCBmb3IgYSBzcXVhcmUgbWF0cml4Jyk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEFic3RyYWN0TWF0cml4LCBkZWZhdWx0LCBkZWZhdWx0IGFzIE1hdHJpeCB9IGZyb20gJy4vbWF0cml4JztcbmV4cG9ydCAqIGZyb20gJy4vdmlld3MvaW5kZXgnO1xuXG5leHBvcnQgeyB3cmFwIH0gZnJvbSAnLi93cmFwL3dyYXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXcmFwcGVyTWF0cml4MUQgfSBmcm9tICcuL3dyYXAvV3JhcHBlck1hdHJpeDFEJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV3JhcHBlck1hdHJpeDJEIH0gZnJvbSAnLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmV4cG9ydCB7IHNvbHZlLCBpbnZlcnNlIH0gZnJvbSAnLi9kZWNvbXBvc2l0aW9ucyc7XG5leHBvcnQgeyBkZXRlcm1pbmFudCB9IGZyb20gJy4vZGV0ZXJtaW5hbnQnO1xuZXhwb3J0IHsgbGluZWFyRGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9saW5lYXJEZXBlbmRlbmNpZXMnO1xuZXhwb3J0IHsgcHNldWRvSW52ZXJzZSB9IGZyb20gJy4vcHNldWRvSW52ZXJzZSc7XG5leHBvcnQgeyBjb3ZhcmlhbmNlIH0gZnJvbSAnLi9jb3ZhcmlhbmNlJztcbmV4cG9ydCB7IGNvcnJlbGF0aW9uIH0gZnJvbSAnLi9jb3JyZWxhdGlvbic7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24sXG4gIGRlZmF1bHQgYXMgU1ZELFxufSBmcm9tICcuL2RjL3N2ZC5qcyc7XG5leHBvcnQge1xuICBkZWZhdWx0IGFzIEVpZ2VudmFsdWVEZWNvbXBvc2l0aW9uLFxuICBkZWZhdWx0IGFzIEVWRCxcbn0gZnJvbSAnLi9kYy9ldmQuanMnO1xuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBDaG9sZXNreURlY29tcG9zaXRpb24sXG4gIGRlZmF1bHQgYXMgQ0hPLFxufSBmcm9tICcuL2RjL2Nob2xlc2t5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTHVEZWNvbXBvc2l0aW9uLCBkZWZhdWx0IGFzIExVIH0gZnJvbSAnLi9kYy9sdS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFFyRGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBRUiB9IGZyb20gJy4vZGMvcXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOaXBhbHMsIGRlZmF1bHQgYXMgTklQQUxTIH0gZnJvbSAnLi9kYy9uaXBhbHMuanMnO1xuIiwiY29uc3QgaW5kZW50ID0gJyAnLnJlcGVhdCgyKTtcbmNvbnN0IGluZGVudERhdGEgPSAnICcucmVwZWF0KDQpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zcGVjdE1hdHJpeCgpIHtcbiAgcmV0dXJuIGluc3BlY3RNYXRyaXhXaXRoT3B0aW9ucyh0aGlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3BlY3RNYXRyaXhXaXRoT3B0aW9ucyhtYXRyaXgsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IG1heFJvd3MgPSAxNSwgbWF4Q29sdW1ucyA9IDEwLCBtYXhOdW1TaXplID0gOCB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIGAke21hdHJpeC5jb25zdHJ1Y3Rvci5uYW1lfSB7XG4ke2luZGVudH1bXG4ke2luZGVudERhdGF9JHtpbnNwZWN0RGF0YShtYXRyaXgsIG1heFJvd3MsIG1heENvbHVtbnMsIG1heE51bVNpemUpfVxuJHtpbmRlbnR9XVxuJHtpbmRlbnR9cm93czogJHttYXRyaXgucm93c31cbiR7aW5kZW50fWNvbHVtbnM6ICR7bWF0cml4LmNvbHVtbnN9XG59YDtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdERhdGEobWF0cml4LCBtYXhSb3dzLCBtYXhDb2x1bW5zLCBtYXhOdW1TaXplKSB7XG4gIGNvbnN0IHsgcm93cywgY29sdW1ucyB9ID0gbWF0cml4O1xuICBjb25zdCBtYXhJID0gTWF0aC5taW4ocm93cywgbWF4Um93cyk7XG4gIGNvbnN0IG1heEogPSBNYXRoLm1pbihjb2x1bW5zLCBtYXhDb2x1bW5zKTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4STsgaSsrKSB7XG4gICAgbGV0IGxpbmUgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heEo7IGorKykge1xuICAgICAgbGluZS5wdXNoKGZvcm1hdE51bWJlcihtYXRyaXguZ2V0KGksIGopLCBtYXhOdW1TaXplKSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKGAke2xpbmUuam9pbignICcpfWApO1xuICB9XG4gIGlmIChtYXhKICE9PSBjb2x1bW5zKSB7XG4gICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSArPSBgIC4uLiAke2NvbHVtbnMgLSBtYXhDb2x1bW5zfSBtb3JlIGNvbHVtbnNgO1xuICB9XG4gIGlmIChtYXhJICE9PSByb3dzKSB7XG4gICAgcmVzdWx0LnB1c2goYC4uLiAke3Jvd3MgLSBtYXhSb3dzfSBtb3JlIHJvd3NgKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LmpvaW4oYFxcbiR7aW5kZW50RGF0YX1gKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSwgbWF4TnVtU2l6ZSkge1xuICBjb25zdCBudW1TdHIgPSBTdHJpbmcobnVtKTtcbiAgaWYgKG51bVN0ci5sZW5ndGggPD0gbWF4TnVtU2l6ZSkge1xuICAgIHJldHVybiBudW1TdHIucGFkRW5kKG1heE51bVNpemUsICcgJyk7XG4gIH1cbiAgY29uc3QgcHJlY2lzZSA9IG51bS50b1ByZWNpc2lvbihtYXhOdW1TaXplIC0gMik7XG4gIGlmIChwcmVjaXNlLmxlbmd0aCA8PSBtYXhOdW1TaXplKSB7XG4gICAgcmV0dXJuIHByZWNpc2U7XG4gIH1cbiAgY29uc3QgZXhwb25lbnRpYWwgPSBudW0udG9FeHBvbmVudGlhbChtYXhOdW1TaXplIC0gMik7XG4gIGNvbnN0IGVJbmRleCA9IGV4cG9uZW50aWFsLmluZGV4T2YoJ2UnKTtcbiAgY29uc3QgZSA9IGV4cG9uZW50aWFsLnNsaWNlKGVJbmRleCk7XG4gIHJldHVybiBleHBvbmVudGlhbC5zbGljZSgwLCBtYXhOdW1TaXplIC0gZS5sZW5ndGgpICsgZTtcbn1cbiIsImltcG9ydCBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL3N2ZCc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4vbWF0cml4JztcblxuZnVuY3Rpb24geHJhbmdlKG4sIGV4Y2VwdGlvbikge1xuICBsZXQgcmFuZ2UgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaSAhPT0gZXhjZXB0aW9uKSB7XG4gICAgICByYW5nZS5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmFuZ2U7XG59XG5cbmZ1bmN0aW9uIGRlcGVuZGVuY2llc09uZVJvdyhcbiAgZXJyb3IsXG4gIG1hdHJpeCxcbiAgaW5kZXgsXG4gIHRocmVzaG9sZFZhbHVlID0gMTBlLTEwLFxuICB0aHJlc2hvbGRFcnJvciA9IDEwZS0xMCxcbikge1xuICBpZiAoZXJyb3IgPiB0aHJlc2hvbGRFcnJvcikge1xuICAgIHJldHVybiBuZXcgQXJyYXkobWF0cml4LnJvd3MgKyAxKS5maWxsKDApO1xuICB9IGVsc2Uge1xuICAgIGxldCByZXR1cm5BcnJheSA9IG1hdHJpeC5hZGRSb3coaW5kZXgsIFswXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXR1cm5BcnJheS5yb3dzOyBpKyspIHtcbiAgICAgIGlmIChNYXRoLmFicyhyZXR1cm5BcnJheS5nZXQoaSwgMCkpIDwgdGhyZXNob2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuQXJyYXkuc2V0KGksIDAsIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuQXJyYXkudG8xREFycmF5KCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhckRlcGVuZGVuY2llcyhtYXRyaXgsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHRocmVzaG9sZFZhbHVlID0gMTBlLTEwLCB0aHJlc2hvbGRFcnJvciA9IDEwZS0xMCB9ID0gb3B0aW9ucztcbiAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG5cbiAgbGV0IG4gPSBtYXRyaXgucm93cztcbiAgbGV0IHJlc3VsdHMgPSBuZXcgTWF0cml4KG4sIG4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IGIgPSBNYXRyaXguY29sdW1uVmVjdG9yKG1hdHJpeC5nZXRSb3coaSkpO1xuICAgIGxldCBBYmlzID0gbWF0cml4LnN1Yk1hdHJpeFJvdyh4cmFuZ2UobiwgaSkpLnRyYW5zcG9zZSgpO1xuICAgIGxldCBzdmQgPSBuZXcgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24oQWJpcyk7XG4gICAgbGV0IHggPSBzdmQuc29sdmUoYik7XG4gICAgbGV0IGVycm9yID0gTWF0cml4LnN1YihiLCBBYmlzLm1tdWwoeCkpLmFicygpLm1heCgpO1xuICAgIHJlc3VsdHMuc2V0Um93KFxuICAgICAgaSxcbiAgICAgIGRlcGVuZGVuY2llc09uZVJvdyhlcnJvciwgeCwgaSwgdGhyZXNob2xkVmFsdWUsIHRocmVzaG9sZEVycm9yKSxcbiAgICApO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGxNYXRoT3BlcmF0aW9ucyhBYnN0cmFjdE1hdHJpeCwgTWF0cml4KSB7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMuYWRkUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuYWRkTSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFkZFMgPSBmdW5jdGlvbiBhZGRTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSArIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFkZE0gPSBmdW5jdGlvbiBhZGRNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKyBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguYWRkID0gZnVuY3Rpb24gYWRkKG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hZGQodmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbiBzdWIodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMuc3ViUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuc3ViTSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1YlMgPSBmdW5jdGlvbiBzdWJTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAtIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1Yk0gPSBmdW5jdGlvbiBzdWJNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLSBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguc3ViID0gZnVuY3Rpb24gc3ViKG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5zdWIodmFsdWUpO1xuICB9O1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3QgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc3ViO1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3RTID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1YlM7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zdWJ0cmFjdE0gPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc3ViTTtcbiAgQWJzdHJhY3RNYXRyaXguc3VidHJhY3QgPSBBYnN0cmFjdE1hdHJpeC5zdWI7XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uIG11bCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5tdWxTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5tdWxNKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsUyA9IGZ1bmN0aW9uIG11bFModmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICogdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsTSA9IGZ1bmN0aW9uIG11bE0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5tdWwgPSBmdW5jdGlvbiBtdWwobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4Lm11bCh2YWx1ZSk7XG4gIH07XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tdWx0aXBseSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tdWw7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tdWx0aXBseVMgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsUztcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm11bHRpcGx5TSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tdWxNO1xuICBBYnN0cmFjdE1hdHJpeC5tdWx0aXBseSA9IEFic3RyYWN0TWF0cml4Lm11bDtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGl2ID0gZnVuY3Rpb24gZGl2KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLmRpdlModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLmRpdk0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZTID0gZnVuY3Rpb24gZGl2Uyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZNID0gZnVuY3Rpb24gZGl2TShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmRpdiA9IGZ1bmN0aW9uIGRpdihtYXRyaXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguZGl2KHZhbHVlKTtcbiAgfTtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmRpdmlkZSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXY7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZpZGVTID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmRpdlM7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZpZGVNID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmRpdk07XG4gIEFic3RyYWN0TWF0cml4LmRpdmlkZSA9IEFic3RyYWN0TWF0cml4LmRpdjtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubW9kID0gZnVuY3Rpb24gbW9kKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLm1vZFModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLm1vZE0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tb2RTID0gZnVuY3Rpb24gbW9kUyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgJSB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tb2RNID0gZnVuY3Rpb24gbW9kTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICUgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4Lm1vZCA9IGZ1bmN0aW9uIG1vZChtYXRyaXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgubW9kKHZhbHVlKTtcbiAgfTtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZHVsdXMgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubW9kO1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubW9kdWx1c1MgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubW9kUztcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZHVsdXNNID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZE07XG4gIEFic3RyYWN0TWF0cml4Lm1vZHVsdXMgPSBBYnN0cmFjdE1hdHJpeC5tb2Q7XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIGFuZCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5hbmRTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5hbmRNKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYW5kUyA9IGZ1bmN0aW9uIGFuZFModmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICYgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYW5kTSA9IGZ1bmN0aW9uIGFuZE0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAmIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5hbmQgPSBmdW5jdGlvbiBhbmQobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmFuZCh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gb3IodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMub3JTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5vck0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5vclMgPSBmdW5jdGlvbiBvclModmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIHwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUub3JNID0gZnVuY3Rpb24gb3JNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgfCBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgub3IgPSBmdW5jdGlvbiBvcihtYXRyaXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgub3IodmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiB4b3IodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMueG9yUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMueG9yTSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnhvclMgPSBmdW5jdGlvbiB4b3JTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSBeIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnhvck0gPSBmdW5jdGlvbiB4b3JNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgXiBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgueG9yID0gZnVuY3Rpb24geG9yKG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC54b3IodmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5sZWZ0U2hpZnQgPSBmdW5jdGlvbiBsZWZ0U2hpZnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMubGVmdFNoaWZ0Uyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMubGVmdFNoaWZ0TSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmxlZnRTaGlmdFMgPSBmdW5jdGlvbiBsZWZ0U2hpZnRTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSA8PCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5sZWZ0U2hpZnRNID0gZnVuY3Rpb24gbGVmdFNoaWZ0TShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIDw8IG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5sZWZ0U2hpZnQgPSBmdW5jdGlvbiBsZWZ0U2hpZnQobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmxlZnRTaGlmdCh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnQgPSBmdW5jdGlvbiBzaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLnNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnRTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5zaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0TSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnRTID0gZnVuY3Rpb24gc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdFModmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopID4+IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnRNID0gZnVuY3Rpb24gc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdE0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSA+PiBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdCA9IGZ1bmN0aW9uIHNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnQobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnQodmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5yaWdodFNoaWZ0ID0gZnVuY3Rpb24gcmlnaHRTaGlmdCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5yaWdodFNoaWZ0Uyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRTaGlmdE0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5yaWdodFNoaWZ0UyA9IGZ1bmN0aW9uIHJpZ2h0U2hpZnRTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSA+Pj4gdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUucmlnaHRTaGlmdE0gPSBmdW5jdGlvbiByaWdodFNoaWZ0TShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopID4+PiBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucmlnaHRTaGlmdCA9IGZ1bmN0aW9uIHJpZ2h0U2hpZnQobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnJpZ2h0U2hpZnQodmFsdWUpO1xuICB9O1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuemVyb0ZpbGxSaWdodFNoaWZ0ID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnJpZ2h0U2hpZnQ7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS56ZXJvRmlsbFJpZ2h0U2hpZnRTID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnJpZ2h0U2hpZnRTO1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuemVyb0ZpbGxSaWdodFNoaWZ0TSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5yaWdodFNoaWZ0TTtcbiAgQWJzdHJhY3RNYXRyaXguemVyb0ZpbGxSaWdodFNoaWZ0ID0gQWJzdHJhY3RNYXRyaXgucmlnaHRTaGlmdDtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubm90ID0gZnVuY3Rpb24gbm90KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgfih0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5ub3QgPSBmdW5jdGlvbiBub3QobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgubm90KCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uIGFicygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguYWJzKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmFicyA9IGZ1bmN0aW9uIGFicyhtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hYnMoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYWNvcyA9IGZ1bmN0aW9uIGFjb3MoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmFjb3ModGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguYWNvcyA9IGZ1bmN0aW9uIGFjb3MobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguYWNvcygpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hY29zaCA9IGZ1bmN0aW9uIGFjb3NoKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5hY29zaCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5hY29zaCA9IGZ1bmN0aW9uIGFjb3NoKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmFjb3NoKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFzaW4gPSBmdW5jdGlvbiBhc2luKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5hc2luKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmFzaW4gPSBmdW5jdGlvbiBhc2luKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmFzaW4oKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYXNpbmggPSBmdW5jdGlvbiBhc2luaCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguYXNpbmgodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguYXNpbmggPSBmdW5jdGlvbiBhc2luaChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hc2luaCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hdGFuID0gZnVuY3Rpb24gYXRhbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguYXRhbih0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5hdGFuID0gZnVuY3Rpb24gYXRhbihtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hdGFuKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmF0YW5oID0gZnVuY3Rpb24gYXRhbmgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmF0YW5oKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmF0YW5oID0gZnVuY3Rpb24gYXRhbmgobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguYXRhbmgoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuY2JydCA9IGZ1bmN0aW9uIGNicnQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmNicnQodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguY2JydCA9IGZ1bmN0aW9uIGNicnQobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguY2JydCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5jZWlsID0gZnVuY3Rpb24gY2VpbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguY2VpbCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5jZWlsID0gZnVuY3Rpb24gY2VpbChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5jZWlsKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmNsejMyID0gZnVuY3Rpb24gY2x6MzIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmNsejMyKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmNsejMyID0gZnVuY3Rpb24gY2x6MzIobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguY2x6MzIoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuY29zID0gZnVuY3Rpb24gY29zKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5jb3ModGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguY29zID0gZnVuY3Rpb24gY29zKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmNvcygpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5jb3NoID0gZnVuY3Rpb24gY29zaCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguY29zaCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5jb3NoID0gZnVuY3Rpb24gY29zaChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5jb3NoKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmV4cCA9IGZ1bmN0aW9uIGV4cCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguZXhwKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmV4cCA9IGZ1bmN0aW9uIGV4cChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5leHAoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZXhwbTEgPSBmdW5jdGlvbiBleHBtMSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguZXhwbTEodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguZXhwbTEgPSBmdW5jdGlvbiBleHBtMShtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5leHBtMSgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5mbG9vciA9IGZ1bmN0aW9uIGZsb29yKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5mbG9vcih0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5mbG9vciA9IGZ1bmN0aW9uIGZsb29yKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmZsb29yKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmZyb3VuZCA9IGZ1bmN0aW9uIGZyb3VuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguZnJvdW5kKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmZyb3VuZCA9IGZ1bmN0aW9uIGZyb3VuZChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5mcm91bmQoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gbG9nKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5sb2codGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgubG9nID0gZnVuY3Rpb24gbG9nKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmxvZygpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5sb2cxcCA9IGZ1bmN0aW9uIGxvZzFwKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5sb2cxcCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5sb2cxcCA9IGZ1bmN0aW9uIGxvZzFwKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmxvZzFwKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmxvZzEwID0gZnVuY3Rpb24gbG9nMTAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmxvZzEwKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmxvZzEwID0gZnVuY3Rpb24gbG9nMTAobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgubG9nMTAoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubG9nMiA9IGZ1bmN0aW9uIGxvZzIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmxvZzIodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgubG9nMiA9IGZ1bmN0aW9uIGxvZzIobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgubG9nMigpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIHJvdW5kKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5yb3VuZCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5yb3VuZCA9IGZ1bmN0aW9uIHJvdW5kKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnJvdW5kKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnNpZ24gPSBmdW5jdGlvbiBzaWduKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5zaWduKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnNpZ24gPSBmdW5jdGlvbiBzaWduKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnNpZ24oKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc2luID0gZnVuY3Rpb24gc2luKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5zaW4odGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguc2luID0gZnVuY3Rpb24gc2luKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnNpbigpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zaW5oID0gZnVuY3Rpb24gc2luaCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguc2luaCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5zaW5oID0gZnVuY3Rpb24gc2luaChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5zaW5oKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnNxcnQgPSBmdW5jdGlvbiBzcXJ0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5zcXJ0KHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnNxcnQgPSBmdW5jdGlvbiBzcXJ0KG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnNxcnQoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUudGFuID0gZnVuY3Rpb24gdGFuKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC50YW4odGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgudGFuID0gZnVuY3Rpb24gdGFuKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnRhbigpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS50YW5oID0gZnVuY3Rpb24gdGFuaCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGgudGFuaCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC50YW5oID0gZnVuY3Rpb24gdGFuaChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC50YW5oKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnRydW5jID0gZnVuY3Rpb24gdHJ1bmMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLnRydW5jKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnRydW5jID0gZnVuY3Rpb24gdHJ1bmMobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgudHJ1bmMoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wb3cgPSBmdW5jdGlvbiBwb3cobWF0cml4LCBhcmcwKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgucG93KGFyZzApO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiBwb3codmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMucG93Uyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucG93TSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnBvd1MgPSBmdW5jdGlvbiBwb3dTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLnBvdyh0aGlzLmdldChpLCBqKSwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnBvd00gPSBmdW5jdGlvbiBwb3dNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5wb3codGhpcy5nZXQoaSwgaiksIG1hdHJpeC5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG4iLCJpbXBvcnQgcmVzY2FsZSBmcm9tICdtbC1hcnJheS1yZXNjYWxlJztcblxuaW1wb3J0IHsgaW5zcGVjdE1hdHJpeCwgaW5zcGVjdE1hdHJpeFdpdGhPcHRpb25zIH0gZnJvbSAnLi9pbnNwZWN0JztcbmltcG9ydCB7IGluc3RhbGxNYXRoT3BlcmF0aW9ucyB9IGZyb20gJy4vbWF0aE9wZXJhdGlvbnMnO1xuaW1wb3J0IHtcbiAgc3VtQnlSb3csXG4gIHN1bUJ5Q29sdW1uLFxuICBzdW1BbGwsXG4gIHByb2R1Y3RCeVJvdyxcbiAgcHJvZHVjdEJ5Q29sdW1uLFxuICBwcm9kdWN0QWxsLFxuICB2YXJpYW5jZUJ5Um93LFxuICB2YXJpYW5jZUJ5Q29sdW1uLFxuICB2YXJpYW5jZUFsbCxcbiAgY2VudGVyQnlSb3csXG4gIGNlbnRlckJ5Q29sdW1uLFxuICBjZW50ZXJBbGwsXG4gIHNjYWxlQnlSb3csXG4gIHNjYWxlQnlDb2x1bW4sXG4gIHNjYWxlQWxsLFxuICBnZXRTY2FsZUJ5Um93LFxuICBnZXRTY2FsZUJ5Q29sdW1uLFxuICBnZXRTY2FsZUFsbCxcbn0gZnJvbSAnLi9zdGF0JztcbmltcG9ydCB7XG4gIGNoZWNrUm93VmVjdG9yLFxuICBjaGVja1Jvd0luZGV4LFxuICBjaGVja0NvbHVtbkluZGV4LFxuICBjaGVja0NvbHVtblZlY3RvcixcbiAgY2hlY2tSYW5nZSxcbiAgY2hlY2tJbmRpY2VzLFxufSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RNYXRyaXgge1xuICBzdGF0aWMgZnJvbTFEQXJyYXkobmV3Um93cywgbmV3Q29sdW1ucywgbmV3RGF0YSkge1xuICAgIGxldCBsZW5ndGggPSBuZXdSb3dzICogbmV3Q29sdW1ucztcbiAgICBpZiAobGVuZ3RoICE9PSBuZXdEYXRhLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2RhdGEgbGVuZ3RoIGRvZXMgbm90IG1hdGNoIGdpdmVuIGRpbWVuc2lvbnMnKTtcbiAgICB9XG4gICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobmV3Um93cywgbmV3Q29sdW1ucyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbmV3Um93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IG5ld0NvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIG5ld01hdHJpeC5zZXQocm93LCBjb2x1bW4sIG5ld0RhdGFbcm93ICogbmV3Q29sdW1ucyArIGNvbHVtbl0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3TWF0cml4O1xuICB9XG5cbiAgc3RhdGljIHJvd1ZlY3RvcihuZXdEYXRhKSB7XG4gICAgbGV0IHZlY3RvciA9IG5ldyBNYXRyaXgoMSwgbmV3RGF0YS5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdmVjdG9yLnNldCgwLCBpLCBuZXdEYXRhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBjb2x1bW5WZWN0b3IobmV3RGF0YSkge1xuICAgIGxldCB2ZWN0b3IgPSBuZXcgTWF0cml4KG5ld0RhdGEubGVuZ3RoLCAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZlY3Rvci5zZXQoaSwgMCwgbmV3RGF0YVtpXSk7XG4gICAgfVxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgemVyb3Mocm93cywgY29sdW1ucykge1xuICAgIHJldHVybiBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICB9XG5cbiAgc3RhdGljIG9uZXMocm93cywgY29sdW1ucykge1xuICAgIHJldHVybiBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpLmZpbGwoMSk7XG4gIH1cblxuICBzdGF0aWMgcmFuZChyb3dzLCBjb2x1bW5zLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIGNvbnN0IHsgcmFuZG9tID0gTWF0aC5yYW5kb20gfSA9IG9wdGlvbnM7XG4gICAgbGV0IG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIG1hdHJpeC5zZXQoaSwgaiwgcmFuZG9tKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIHJhbmRJbnQocm93cywgY29sdW1ucywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICBjb25zdCB7IG1pbiA9IDAsIG1heCA9IDEwMDAsIHJhbmRvbSA9IE1hdGgucmFuZG9tIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihtaW4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaW4gbXVzdCBiZSBhbiBpbnRlZ2VyJyk7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG1heCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBtdXN0IGJlIGFuIGludGVnZXInKTtcbiAgICBpZiAobWluID49IG1heCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBtdXN0IGJlIHNtYWxsZXIgdGhhbiBtYXgnKTtcbiAgICBsZXQgaW50ZXJ2YWwgPSBtYXggLSBtaW47XG4gICAgbGV0IG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG1pbiArIE1hdGgucm91bmQocmFuZG9tKCkgKiBpbnRlcnZhbCk7XG4gICAgICAgIG1hdHJpeC5zZXQoaSwgaiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGV5ZShyb3dzLCBjb2x1bW5zLCB2YWx1ZSkge1xuICAgIGlmIChjb2x1bW5zID09PSB1bmRlZmluZWQpIGNvbHVtbnMgPSByb3dzO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB2YWx1ZSA9IDE7XG4gICAgbGV0IG1pbiA9IE1hdGgubWluKHJvd3MsIGNvbHVtbnMpO1xuICAgIGxldCBtYXRyaXggPSB0aGlzLnplcm9zKHJvd3MsIGNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgaSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGRpYWcoZGF0YSwgcm93cywgY29sdW1ucykge1xuICAgIGxldCBsID0gZGF0YS5sZW5ndGg7XG4gICAgaWYgKHJvd3MgPT09IHVuZGVmaW5lZCkgcm93cyA9IGw7XG4gICAgaWYgKGNvbHVtbnMgPT09IHVuZGVmaW5lZCkgY29sdW1ucyA9IHJvd3M7XG4gICAgbGV0IG1pbiA9IE1hdGgubWluKGwsIHJvd3MsIGNvbHVtbnMpO1xuICAgIGxldCBtYXRyaXggPSB0aGlzLnplcm9zKHJvd3MsIGNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluOyBpKyspIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgaSwgZGF0YVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgbWluKG1hdHJpeDEsIG1hdHJpeDIpIHtcbiAgICBtYXRyaXgxID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgxKTtcbiAgICBtYXRyaXgyID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgyKTtcbiAgICBsZXQgcm93cyA9IG1hdHJpeDEucm93cztcbiAgICBsZXQgY29sdW1ucyA9IG1hdHJpeDEuY29sdW1ucztcbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgcmVzdWx0LnNldChpLCBqLCBNYXRoLm1pbihtYXRyaXgxLmdldChpLCBqKSwgbWF0cml4Mi5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBtYXgobWF0cml4MSwgbWF0cml4Mikge1xuICAgIG1hdHJpeDEgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDEpO1xuICAgIG1hdHJpeDIgPSB0aGlzLmNoZWNrTWF0cml4KG1hdHJpeDIpO1xuICAgIGxldCByb3dzID0gbWF0cml4MS5yb3dzO1xuICAgIGxldCBjb2x1bW5zID0gbWF0cml4MS5jb2x1bW5zO1xuICAgIGxldCByZXN1bHQgPSBuZXcgdGhpcyhyb3dzLCBjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgcmVzdWx0LnNldChpLCBqLCBNYXRoLm1heChtYXRyaXgxLmdldChpLCBqKSwgbWF0cml4Mi5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja01hdHJpeCh2YWx1ZSkge1xuICAgIHJldHVybiBBYnN0cmFjdE1hdHJpeC5pc01hdHJpeCh2YWx1ZSkgPyB2YWx1ZSA6IG5ldyBNYXRyaXgodmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGlzTWF0cml4KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdmFsdWUua2xhc3MgPT09ICdNYXRyaXgnO1xuICB9XG5cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cyAqIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGFwcGx5KGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0bzFEQXJyYXkoKSB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICBhcnJheS5wdXNoKHRoaXMuZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgdG8yREFycmF5KCkge1xuICAgIGxldCBjb3B5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgY29weS5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgY29weVtpXS5wdXNoKHRoaXMuZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG8yREFycmF5KCk7XG4gIH1cblxuICBpc1Jvd1ZlY3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzID09PSAxO1xuICB9XG5cbiAgaXNDb2x1bW5WZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucyA9PT0gMTtcbiAgfVxuXG4gIGlzVmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLnJvd3MgPT09IDEgfHwgdGhpcy5jb2x1bW5zID09PSAxO1xuICB9XG5cbiAgaXNTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cyA9PT0gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgaXNTeW1tZXRyaWMoKSB7XG4gICAgaWYgKHRoaXMuaXNTcXVhcmUoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBpOyBqKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgIT09IHRoaXMuZ2V0KGosIGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNFY2hlbG9uRm9ybSgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAwO1xuICAgIGxldCBwcmV2aW91c0NvbHVtbiA9IC0xO1xuICAgIGxldCBpc0VjaGVsb25Gb3JtID0gdHJ1ZTtcbiAgICBsZXQgY2hlY2tlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgdGhpcy5yb3dzICYmIGlzRWNoZWxvbkZvcm0pIHtcbiAgICAgIGogPSAwO1xuICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGogPCB0aGlzLmNvbHVtbnMgJiYgY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopID09PSAwKSB7XG4gICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0KGksIGopID09PSAxICYmIGogPiBwcmV2aW91c0NvbHVtbikge1xuICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIHByZXZpb3VzQ29sdW1uID0gajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0VjaGVsb25Gb3JtID0gZmFsc2U7XG4gICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGlzRWNoZWxvbkZvcm07XG4gIH1cblxuICBpc1JlZHVjZWRFY2hlbG9uRm9ybSgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAwO1xuICAgIGxldCBwcmV2aW91c0NvbHVtbiA9IC0xO1xuICAgIGxldCBpc1JlZHVjZWRFY2hlbG9uRm9ybSA9IHRydWU7XG4gICAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IHRoaXMucm93cyAmJiBpc1JlZHVjZWRFY2hlbG9uRm9ybSkge1xuICAgICAgaiA9IDA7XG4gICAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoaiA8IHRoaXMuY29sdW1ucyAmJiBjaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPT09IDApIHtcbiAgICAgICAgICBqKys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXQoaSwgaikgPT09IDEgJiYgaiA+IHByZXZpb3VzQ29sdW1uKSB7XG4gICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgcHJldmlvdXNDb2x1bW4gPSBqO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzUmVkdWNlZEVjaGVsb25Gb3JtID0gZmFsc2U7XG4gICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGsgPSBqICsgMTsgayA8IHRoaXMucm93czsgaysrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChpLCBrKSAhPT0gMCkge1xuICAgICAgICAgIGlzUmVkdWNlZEVjaGVsb25Gb3JtID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGlzUmVkdWNlZEVjaGVsb25Gb3JtO1xuICB9XG5cbiAgZWNoZWxvbkZvcm0oKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuY2xvbmUoKTtcbiAgICBsZXQgaCA9IDA7XG4gICAgbGV0IGsgPSAwO1xuICAgIHdoaWxlIChoIDwgcmVzdWx0LnJvd3MgJiYgayA8IHJlc3VsdC5jb2x1bW5zKSB7XG4gICAgICBsZXQgaU1heCA9IGg7XG4gICAgICBmb3IgKGxldCBpID0gaDsgaSA8IHJlc3VsdC5yb3dzOyBpKyspIHtcbiAgICAgICAgaWYgKHJlc3VsdC5nZXQoaSwgaykgPiByZXN1bHQuZ2V0KGlNYXgsIGspKSB7XG4gICAgICAgICAgaU1heCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuZ2V0KGlNYXgsIGspID09PSAwKSB7XG4gICAgICAgIGsrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5zd2FwUm93cyhoLCBpTWF4KTtcbiAgICAgICAgbGV0IHRtcCA9IHJlc3VsdC5nZXQoaCwgayk7XG4gICAgICAgIGZvciAobGV0IGogPSBrOyBqIDwgcmVzdWx0LmNvbHVtbnM7IGorKykge1xuICAgICAgICAgIHJlc3VsdC5zZXQoaCwgaiwgcmVzdWx0LmdldChoLCBqKSAvIHRtcCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IGggKyAxOyBpIDwgcmVzdWx0LnJvd3M7IGkrKykge1xuICAgICAgICAgIGxldCBmYWN0b3IgPSByZXN1bHQuZ2V0KGksIGspIC8gcmVzdWx0LmdldChoLCBrKTtcbiAgICAgICAgICByZXN1bHQuc2V0KGksIGssIDApO1xuICAgICAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IHJlc3VsdC5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgcmVzdWx0LmdldChpLCBqKSAtIHJlc3VsdC5nZXQoaCwgaikgKiBmYWN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoKys7XG4gICAgICAgIGsrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJlZHVjZWRFY2hlbG9uRm9ybSgpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5lY2hlbG9uRm9ybSgpO1xuICAgIGxldCBtID0gcmVzdWx0LmNvbHVtbnM7XG4gICAgbGV0IG4gPSByZXN1bHQucm93cztcbiAgICBsZXQgaCA9IG4gLSAxO1xuICAgIHdoaWxlIChoID49IDApIHtcbiAgICAgIGlmIChyZXN1bHQubWF4Um93KGgpID09PSAwKSB7XG4gICAgICAgIGgtLTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwID0gMDtcbiAgICAgICAgbGV0IHBpdm90ID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChwIDwgbiAmJiBwaXZvdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAocmVzdWx0LmdldChoLCBwKSA9PT0gMSkge1xuICAgICAgICAgICAgcGl2b3QgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGZhY3RvciA9IHJlc3VsdC5nZXQoaSwgcCk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IHA7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSByZXN1bHQuZ2V0KGksIGopIC0gZmFjdG9yICogcmVzdWx0LmdldChoLCBqKTtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgdG1wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaC0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0IG1ldGhvZCBpcyB1bmltcGxlbWVudGVkJyk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnZXQgbWV0aG9kIGlzIHVuaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIHJlcGVhdChvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIGNvbnN0IHsgcm93cyA9IDEsIGNvbHVtbnMgPSAxIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihyb3dzKSB8fCByb3dzIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jvd3MgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKTtcbiAgICB9XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGNvbHVtbnMpIHx8IGNvbHVtbnMgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29sdW1ucyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcicpO1xuICAgIH1cbiAgICBsZXQgbWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLnJvd3MgKiByb3dzLCB0aGlzLmNvbHVtbnMgKiBjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgbWF0cml4LnNldFN1Yk1hdHJpeCh0aGlzLCB0aGlzLnJvd3MgKiBpLCB0aGlzLmNvbHVtbnMgKiBqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIGZpbGwodmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZWcoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsUygtMSk7XG4gIH1cblxuICBnZXRSb3coaW5kZXgpIHtcbiAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICBsZXQgcm93ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgcm93LnB1c2godGhpcy5nZXQoaW5kZXgsIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdztcbiAgfVxuXG4gIGdldFJvd1ZlY3RvcihpbmRleCkge1xuICAgIHJldHVybiBNYXRyaXgucm93VmVjdG9yKHRoaXMuZ2V0Um93KGluZGV4KSk7XG4gIH1cblxuICBzZXRSb3coaW5kZXgsIGFycmF5KSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgYXJyYXkgPSBjaGVja1Jvd1ZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgdGhpcy5zZXQoaW5kZXgsIGksIGFycmF5W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzd2FwUm93cyhyb3cxLCByb3cyKSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cxKTtcbiAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdzIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5nZXQocm93MSwgaSk7XG4gICAgICB0aGlzLnNldChyb3cxLCBpLCB0aGlzLmdldChyb3cyLCBpKSk7XG4gICAgICB0aGlzLnNldChyb3cyLCBpLCB0ZW1wKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRDb2x1bW4oaW5kZXgpIHtcbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4KTtcbiAgICBsZXQgY29sdW1uID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgY29sdW1uLnB1c2godGhpcy5nZXQoaSwgaW5kZXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGdldENvbHVtblZlY3RvcihpbmRleCkge1xuICAgIHJldHVybiBNYXRyaXguY29sdW1uVmVjdG9yKHRoaXMuZ2V0Q29sdW1uKGluZGV4KSk7XG4gIH1cblxuICBzZXRDb2x1bW4oaW5kZXgsIGFycmF5KSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgYXJyYXkgPSBjaGVja0NvbHVtblZlY3Rvcih0aGlzLCBhcnJheSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy5zZXQoaSwgaW5kZXgsIGFycmF5W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzd2FwQ29sdW1ucyhjb2x1bW4xLCBjb2x1bW4yKSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4xKTtcbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbjIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5nZXQoaSwgY29sdW1uMSk7XG4gICAgICB0aGlzLnNldChpLCBjb2x1bW4xLCB0aGlzLmdldChpLCBjb2x1bW4yKSk7XG4gICAgICB0aGlzLnNldChpLCBjb2x1bW4yLCB0ZW1wKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICsgdmVjdG9yW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC0gdmVjdG9yW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWxSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICogdmVjdG9yW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXZSb3dWZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tSb3dWZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gdmVjdG9yW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICsgdmVjdG9yW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC0gdmVjdG9yW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWxDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICogdmVjdG9yW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXZDb2x1bW5WZWN0b3IodmVjdG9yKSB7XG4gICAgdmVjdG9yID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgdmVjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gdmVjdG9yW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWxSb3coaW5kZXgsIHZhbHVlKSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgdGhpcy5zZXQoaW5kZXgsIGksIHRoaXMuZ2V0KGluZGV4LCBpKSAqIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWxDb2x1bW4oaW5kZXgsIHZhbHVlKSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy5zZXQoaSwgaW5kZXgsIHRoaXMuZ2V0KGksIGluZGV4KSAqIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtYXgoKSB7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA+IHYpIHtcbiAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICBtYXhJbmRleCgpIHtcbiAgICBsZXQgdiA9IHRoaXMuZ2V0KDAsIDApO1xuICAgIGxldCBpZHggPSBbMCwgMF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPiB2KSB7XG4gICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICAgIGlkeFswXSA9IGk7XG4gICAgICAgICAgaWR4WzFdID0gajtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWR4O1xuICB9XG5cbiAgbWluKCkge1xuICAgIGxldCB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPCB2KSB7XG4gICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgbWluSW5kZXgoKSB7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICBsZXQgaWR4ID0gWzAsIDBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopIDwgdikge1xuICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgIGlkeFsxXSA9IGo7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuXG4gIG1heFJvdyhyb3cpIHtcbiAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgbGV0IHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdldChyb3csIGkpID4gdikge1xuICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICBtYXhSb3dJbmRleChyb3cpIHtcbiAgICBjaGVja1Jvd0luZGV4KHRoaXMsIHJvdyk7XG4gICAgbGV0IHYgPSB0aGlzLmdldChyb3csIDApO1xuICAgIGxldCBpZHggPSBbcm93LCAwXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA+IHYpIHtcbiAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICAgIGlkeFsxXSA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH1cblxuICBtaW5Sb3cocm93KSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgIGxldCB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA8IHYpIHtcbiAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgbWluUm93SW5kZXgocm93KSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgIGxldCB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICBsZXQgaWR4ID0gW3JvdywgMF07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPCB2KSB7XG4gICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICBpZHhbMV0gPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWR4O1xuICB9XG5cbiAgbWF4Q29sdW1uKGNvbHVtbikge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICBsZXQgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPiB2KSB7XG4gICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIG1heENvbHVtbkluZGV4KGNvbHVtbikge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uKTtcbiAgICBsZXQgdiA9IHRoaXMuZ2V0KDAsIGNvbHVtbik7XG4gICAgbGV0IGlkeCA9IFswLCBjb2x1bW5dO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pID4gdikge1xuICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgICAgaWR4WzBdID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuXG4gIG1pbkNvbHVtbihjb2x1bW4pIHtcbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pIDwgdikge1xuICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICBtaW5Db2x1bW5JbmRleChjb2x1bW4pIHtcbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgIGxldCBpZHggPSBbMCwgY29sdW1uXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA8IHYpIHtcbiAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgIGlkeFswXSA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH1cblxuICBkaWFnKCkge1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbih0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgbGV0IGRpYWcgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICBkaWFnLnB1c2godGhpcy5nZXQoaSwgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gZGlhZztcbiAgfVxuXG4gIG5vcm0odHlwZSA9ICdmcm9iZW5pdXMnKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgaWYgKHR5cGUgPT09ICdtYXgnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXgoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmcm9iZW5pdXMnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyB0aGlzLmdldChpLCBqKSAqIHRoaXMuZ2V0KGksIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGB1bmtub3duIG5vcm0gdHlwZTogJHt0eXBlfWApO1xuICAgIH1cbiAgfVxuXG4gIGN1bXVsYXRpdmVTdW0oKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICBzdW0gKz0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHN1bSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG90KHZlY3RvcjIpIHtcbiAgICBpZiAoQWJzdHJhY3RNYXRyaXguaXNNYXRyaXgodmVjdG9yMikpIHZlY3RvcjIgPSB2ZWN0b3IyLnRvMURBcnJheSgpO1xuICAgIGxldCB2ZWN0b3IxID0gdGhpcy50bzFEQXJyYXkoKTtcbiAgICBpZiAodmVjdG9yMS5sZW5ndGggIT09IHZlY3RvcjIubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndmVjdG9ycyBkbyBub3QgaGF2ZSB0aGUgc2FtZSBzaXplJyk7XG4gICAgfVxuICAgIGxldCBkb3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKykge1xuICAgICAgZG90ICs9IHZlY3RvcjFbaV0gKiB2ZWN0b3IyW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZG90O1xuICB9XG5cbiAgbW11bChvdGhlcikge1xuICAgIG90aGVyID0gTWF0cml4LmNoZWNrTWF0cml4KG90aGVyKTtcblxuICAgIGxldCBtID0gdGhpcy5yb3dzO1xuICAgIGxldCBuID0gdGhpcy5jb2x1bW5zO1xuICAgIGxldCBwID0gb3RoZXIuY29sdW1ucztcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWF0cml4KG0sIHApO1xuXG4gICAgbGV0IEJjb2xqID0gbmV3IEZsb2F0NjRBcnJheShuKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHA7IGorKykge1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgQmNvbGpba10gPSBvdGhlci5nZXQoaywgaik7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgIGxldCBzID0gMDtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICBzICs9IHRoaXMuZ2V0KGksIGspICogQmNvbGpba107XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc2V0KGksIGosIHMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RyYXNzZW4yeDIob3RoZXIpIHtcbiAgICBvdGhlciA9IE1hdHJpeC5jaGVja01hdHJpeChvdGhlcik7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXRyaXgoMiwgMik7XG4gICAgY29uc3QgYTExID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgY29uc3QgYjExID0gb3RoZXIuZ2V0KDAsIDApO1xuICAgIGNvbnN0IGExMiA9IHRoaXMuZ2V0KDAsIDEpO1xuICAgIGNvbnN0IGIxMiA9IG90aGVyLmdldCgwLCAxKTtcbiAgICBjb25zdCBhMjEgPSB0aGlzLmdldCgxLCAwKTtcbiAgICBjb25zdCBiMjEgPSBvdGhlci5nZXQoMSwgMCk7XG4gICAgY29uc3QgYTIyID0gdGhpcy5nZXQoMSwgMSk7XG4gICAgY29uc3QgYjIyID0gb3RoZXIuZ2V0KDEsIDEpO1xuXG4gICAgLy8gQ29tcHV0ZSBpbnRlcm1lZGlhdGUgdmFsdWVzLlxuICAgIGNvbnN0IG0xID0gKGExMSArIGEyMikgKiAoYjExICsgYjIyKTtcbiAgICBjb25zdCBtMiA9IChhMjEgKyBhMjIpICogYjExO1xuICAgIGNvbnN0IG0zID0gYTExICogKGIxMiAtIGIyMik7XG4gICAgY29uc3QgbTQgPSBhMjIgKiAoYjIxIC0gYjExKTtcbiAgICBjb25zdCBtNSA9IChhMTEgKyBhMTIpICogYjIyO1xuICAgIGNvbnN0IG02ID0gKGEyMSAtIGExMSkgKiAoYjExICsgYjEyKTtcbiAgICBjb25zdCBtNyA9IChhMTIgLSBhMjIpICogKGIyMSArIGIyMik7XG5cbiAgICAvLyBDb21iaW5lIGludGVybWVkaWF0ZSB2YWx1ZXMgaW50byB0aGUgb3V0cHV0LlxuICAgIGNvbnN0IGMwMCA9IG0xICsgbTQgLSBtNSArIG03O1xuICAgIGNvbnN0IGMwMSA9IG0zICsgbTU7XG4gICAgY29uc3QgYzEwID0gbTIgKyBtNDtcbiAgICBjb25zdCBjMTEgPSBtMSAtIG0yICsgbTMgKyBtNjtcblxuICAgIHJlc3VsdC5zZXQoMCwgMCwgYzAwKTtcbiAgICByZXN1bHQuc2V0KDAsIDEsIGMwMSk7XG4gICAgcmVzdWx0LnNldCgxLCAwLCBjMTApO1xuICAgIHJlc3VsdC5zZXQoMSwgMSwgYzExKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RyYXNzZW4zeDMob3RoZXIpIHtcbiAgICBvdGhlciA9IE1hdHJpeC5jaGVja01hdHJpeChvdGhlcik7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXRyaXgoMywgMyk7XG5cbiAgICBjb25zdCBhMDAgPSB0aGlzLmdldCgwLCAwKTtcbiAgICBjb25zdCBhMDEgPSB0aGlzLmdldCgwLCAxKTtcbiAgICBjb25zdCBhMDIgPSB0aGlzLmdldCgwLCAyKTtcbiAgICBjb25zdCBhMTAgPSB0aGlzLmdldCgxLCAwKTtcbiAgICBjb25zdCBhMTEgPSB0aGlzLmdldCgxLCAxKTtcbiAgICBjb25zdCBhMTIgPSB0aGlzLmdldCgxLCAyKTtcbiAgICBjb25zdCBhMjAgPSB0aGlzLmdldCgyLCAwKTtcbiAgICBjb25zdCBhMjEgPSB0aGlzLmdldCgyLCAxKTtcbiAgICBjb25zdCBhMjIgPSB0aGlzLmdldCgyLCAyKTtcblxuICAgIGNvbnN0IGIwMCA9IG90aGVyLmdldCgwLCAwKTtcbiAgICBjb25zdCBiMDEgPSBvdGhlci5nZXQoMCwgMSk7XG4gICAgY29uc3QgYjAyID0gb3RoZXIuZ2V0KDAsIDIpO1xuICAgIGNvbnN0IGIxMCA9IG90aGVyLmdldCgxLCAwKTtcbiAgICBjb25zdCBiMTEgPSBvdGhlci5nZXQoMSwgMSk7XG4gICAgY29uc3QgYjEyID0gb3RoZXIuZ2V0KDEsIDIpO1xuICAgIGNvbnN0IGIyMCA9IG90aGVyLmdldCgyLCAwKTtcbiAgICBjb25zdCBiMjEgPSBvdGhlci5nZXQoMiwgMSk7XG4gICAgY29uc3QgYjIyID0gb3RoZXIuZ2V0KDIsIDIpO1xuXG4gICAgY29uc3QgbTEgPSAoYTAwICsgYTAxICsgYTAyIC0gYTEwIC0gYTExIC0gYTIxIC0gYTIyKSAqIGIxMTtcbiAgICBjb25zdCBtMiA9IChhMDAgLSBhMTApICogKC1iMDEgKyBiMTEpO1xuICAgIGNvbnN0IG0zID0gYTExICogKC1iMDAgKyBiMDEgKyBiMTAgLSBiMTEgLSBiMTIgLSBiMjAgKyBiMjIpO1xuICAgIGNvbnN0IG00ID0gKC1hMDAgKyBhMTAgKyBhMTEpICogKGIwMCAtIGIwMSArIGIxMSk7XG4gICAgY29uc3QgbTUgPSAoYTEwICsgYTExKSAqICgtYjAwICsgYjAxKTtcbiAgICBjb25zdCBtNiA9IGEwMCAqIGIwMDtcbiAgICBjb25zdCBtNyA9ICgtYTAwICsgYTIwICsgYTIxKSAqIChiMDAgLSBiMDIgKyBiMTIpO1xuICAgIGNvbnN0IG04ID0gKC1hMDAgKyBhMjApICogKGIwMiAtIGIxMik7XG4gICAgY29uc3QgbTkgPSAoYTIwICsgYTIxKSAqICgtYjAwICsgYjAyKTtcbiAgICBjb25zdCBtMTAgPSAoYTAwICsgYTAxICsgYTAyIC0gYTExIC0gYTEyIC0gYTIwIC0gYTIxKSAqIGIxMjtcbiAgICBjb25zdCBtMTEgPSBhMjEgKiAoLWIwMCArIGIwMiArIGIxMCAtIGIxMSAtIGIxMiAtIGIyMCArIGIyMSk7XG4gICAgY29uc3QgbTEyID0gKC1hMDIgKyBhMjEgKyBhMjIpICogKGIxMSArIGIyMCAtIGIyMSk7XG4gICAgY29uc3QgbTEzID0gKGEwMiAtIGEyMikgKiAoYjExIC0gYjIxKTtcbiAgICBjb25zdCBtMTQgPSBhMDIgKiBiMjA7XG4gICAgY29uc3QgbTE1ID0gKGEyMSArIGEyMikgKiAoLWIyMCArIGIyMSk7XG4gICAgY29uc3QgbTE2ID0gKC1hMDIgKyBhMTEgKyBhMTIpICogKGIxMiArIGIyMCAtIGIyMik7XG4gICAgY29uc3QgbTE3ID0gKGEwMiAtIGExMikgKiAoYjEyIC0gYjIyKTtcbiAgICBjb25zdCBtMTggPSAoYTExICsgYTEyKSAqICgtYjIwICsgYjIyKTtcbiAgICBjb25zdCBtMTkgPSBhMDEgKiBiMTA7XG4gICAgY29uc3QgbTIwID0gYTEyICogYjIxO1xuICAgIGNvbnN0IG0yMSA9IGExMCAqIGIwMjtcbiAgICBjb25zdCBtMjIgPSBhMjAgKiBiMDE7XG4gICAgY29uc3QgbTIzID0gYTIyICogYjIyO1xuXG4gICAgY29uc3QgYzAwID0gbTYgKyBtMTQgKyBtMTk7XG4gICAgY29uc3QgYzAxID0gbTEgKyBtNCArIG01ICsgbTYgKyBtMTIgKyBtMTQgKyBtMTU7XG4gICAgY29uc3QgYzAyID0gbTYgKyBtNyArIG05ICsgbTEwICsgbTE0ICsgbTE2ICsgbTE4O1xuICAgIGNvbnN0IGMxMCA9IG0yICsgbTMgKyBtNCArIG02ICsgbTE0ICsgbTE2ICsgbTE3O1xuICAgIGNvbnN0IGMxMSA9IG0yICsgbTQgKyBtNSArIG02ICsgbTIwO1xuICAgIGNvbnN0IGMxMiA9IG0xNCArIG0xNiArIG0xNyArIG0xOCArIG0yMTtcbiAgICBjb25zdCBjMjAgPSBtNiArIG03ICsgbTggKyBtMTEgKyBtMTIgKyBtMTMgKyBtMTQ7XG4gICAgY29uc3QgYzIxID0gbTEyICsgbTEzICsgbTE0ICsgbTE1ICsgbTIyO1xuICAgIGNvbnN0IGMyMiA9IG02ICsgbTcgKyBtOCArIG05ICsgbTIzO1xuXG4gICAgcmVzdWx0LnNldCgwLCAwLCBjMDApO1xuICAgIHJlc3VsdC5zZXQoMCwgMSwgYzAxKTtcbiAgICByZXN1bHQuc2V0KDAsIDIsIGMwMik7XG4gICAgcmVzdWx0LnNldCgxLCAwLCBjMTApO1xuICAgIHJlc3VsdC5zZXQoMSwgMSwgYzExKTtcbiAgICByZXN1bHQuc2V0KDEsIDIsIGMxMik7XG4gICAgcmVzdWx0LnNldCgyLCAwLCBjMjApO1xuICAgIHJlc3VsdC5zZXQoMiwgMSwgYzIxKTtcbiAgICByZXN1bHQuc2V0KDIsIDIsIGMyMik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG1tdWxTdHJhc3Nlbih5KSB7XG4gICAgeSA9IE1hdHJpeC5jaGVja01hdHJpeCh5KTtcbiAgICBsZXQgeCA9IHRoaXMuY2xvbmUoKTtcbiAgICBsZXQgcjEgPSB4LnJvd3M7XG4gICAgbGV0IGMxID0geC5jb2x1bW5zO1xuICAgIGxldCByMiA9IHkucm93cztcbiAgICBsZXQgYzIgPSB5LmNvbHVtbnM7XG4gICAgaWYgKGMxICE9PSByMikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE11bHRpcGx5aW5nICR7cjF9IHggJHtjMX0gYW5kICR7cjJ9IHggJHtjMn0gbWF0cml4OiBkaW1lbnNpb25zIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBQdXQgYSBtYXRyaXggaW50byB0aGUgdG9wIGxlZnQgb2YgYSBtYXRyaXggb2YgemVyb3MuXG4gICAgLy8gYHJvd3NgIGFuZCBgY29sc2AgYXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBvdXRwdXQgbWF0cml4LlxuICAgIGZ1bmN0aW9uIGVtYmVkKG1hdCwgcm93cywgY29scykge1xuICAgICAgbGV0IHIgPSBtYXQucm93cztcbiAgICAgIGxldCBjID0gbWF0LmNvbHVtbnM7XG4gICAgICBpZiAociA9PT0gcm93cyAmJiBjID09PSBjb2xzKSB7XG4gICAgICAgIHJldHVybiBtYXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcmVzdWx0YXQgPSBBYnN0cmFjdE1hdHJpeC56ZXJvcyhyb3dzLCBjb2xzKTtcbiAgICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgobWF0LCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdGF0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBib3RoIG1hdHJpY2VzIGFyZSB0aGUgc2FtZSBzaXplLlxuICAgIC8vIFRoaXMgaXMgZXhjbHVzaXZlbHkgZm9yIHNpbXBsaWNpdHk6XG4gICAgLy8gdGhpcyBhbGdvcml0aG0gY2FuIGJlIGltcGxlbWVudGVkIHdpdGggbWF0cmljZXMgb2YgZGlmZmVyZW50IHNpemVzLlxuXG4gICAgbGV0IHIgPSBNYXRoLm1heChyMSwgcjIpO1xuICAgIGxldCBjID0gTWF0aC5tYXgoYzEsIGMyKTtcbiAgICB4ID0gZW1iZWQoeCwgciwgYyk7XG4gICAgeSA9IGVtYmVkKHksIHIsIGMpO1xuXG4gICAgLy8gT3VyIHJlY3Vyc2l2ZSBtdWx0aXBsaWNhdGlvbiBmdW5jdGlvbi5cbiAgICBmdW5jdGlvbiBibG9ja011bHQoYSwgYiwgcm93cywgY29scykge1xuICAgICAgLy8gRm9yIHNtYWxsIG1hdHJpY2VzLCByZXNvcnQgdG8gbmFpdmUgbXVsdGlwbGljYXRpb24uXG4gICAgICBpZiAocm93cyA8PSA1MTIgfHwgY29scyA8PSA1MTIpIHtcbiAgICAgICAgcmV0dXJuIGEubW11bChiKTsgLy8gYSBpcyBlcXVpdmFsZW50IHRvIHRoaXNcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgZHluYW1pYyBwYWRkaW5nLlxuICAgICAgaWYgKHJvd3MgJSAyID09PSAxICYmIGNvbHMgJSAyID09PSAxKSB7XG4gICAgICAgIGEgPSBlbWJlZChhLCByb3dzICsgMSwgY29scyArIDEpO1xuICAgICAgICBiID0gZW1iZWQoYiwgcm93cyArIDEsIGNvbHMgKyAxKTtcbiAgICAgIH0gZWxzZSBpZiAocm93cyAlIDIgPT09IDEpIHtcbiAgICAgICAgYSA9IGVtYmVkKGEsIHJvd3MgKyAxLCBjb2xzKTtcbiAgICAgICAgYiA9IGVtYmVkKGIsIHJvd3MgKyAxLCBjb2xzKTtcbiAgICAgIH0gZWxzZSBpZiAoY29scyAlIDIgPT09IDEpIHtcbiAgICAgICAgYSA9IGVtYmVkKGEsIHJvd3MsIGNvbHMgKyAxKTtcbiAgICAgICAgYiA9IGVtYmVkKGIsIHJvd3MsIGNvbHMgKyAxKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGhhbGZSb3dzID0gcGFyc2VJbnQoYS5yb3dzIC8gMiwgMTApO1xuICAgICAgbGV0IGhhbGZDb2xzID0gcGFyc2VJbnQoYS5jb2x1bW5zIC8gMiwgMTApO1xuICAgICAgLy8gU3ViZGl2aWRlIGlucHV0IG1hdHJpY2VzLlxuICAgICAgbGV0IGExMSA9IGEuc3ViTWF0cml4KDAsIGhhbGZSb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcbiAgICAgIGxldCBiMTEgPSBiLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG5cbiAgICAgIGxldCBhMTIgPSBhLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIGhhbGZDb2xzLCBhLmNvbHVtbnMgLSAxKTtcbiAgICAgIGxldCBiMTIgPSBiLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIGhhbGZDb2xzLCBiLmNvbHVtbnMgLSAxKTtcblxuICAgICAgbGV0IGEyMSA9IGEuc3ViTWF0cml4KGhhbGZSb3dzLCBhLnJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuICAgICAgbGV0IGIyMSA9IGIuc3ViTWF0cml4KGhhbGZSb3dzLCBiLnJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuXG4gICAgICBsZXQgYTIyID0gYS5zdWJNYXRyaXgoaGFsZlJvd3MsIGEucm93cyAtIDEsIGhhbGZDb2xzLCBhLmNvbHVtbnMgLSAxKTtcbiAgICAgIGxldCBiMjIgPSBiLnN1Yk1hdHJpeChoYWxmUm93cywgYi5yb3dzIC0gMSwgaGFsZkNvbHMsIGIuY29sdW1ucyAtIDEpO1xuXG4gICAgICAvLyBDb21wdXRlIGludGVybWVkaWF0ZSB2YWx1ZXMuXG4gICAgICBsZXQgbTEgPSBibG9ja011bHQoXG4gICAgICAgIEFic3RyYWN0TWF0cml4LmFkZChhMTEsIGEyMiksXG4gICAgICAgIEFic3RyYWN0TWF0cml4LmFkZChiMTEsIGIyMiksXG4gICAgICAgIGhhbGZSb3dzLFxuICAgICAgICBoYWxmQ29scyxcbiAgICAgICk7XG4gICAgICBsZXQgbTIgPSBibG9ja011bHQoQWJzdHJhY3RNYXRyaXguYWRkKGEyMSwgYTIyKSwgYjExLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgbGV0IG0zID0gYmxvY2tNdWx0KGExMSwgQWJzdHJhY3RNYXRyaXguc3ViKGIxMiwgYjIyKSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgIGxldCBtNCA9IGJsb2NrTXVsdChhMjIsIEFic3RyYWN0TWF0cml4LnN1YihiMjEsIGIxMSksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICBsZXQgbTUgPSBibG9ja011bHQoQWJzdHJhY3RNYXRyaXguYWRkKGExMSwgYTEyKSwgYjIyLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgbGV0IG02ID0gYmxvY2tNdWx0KFxuICAgICAgICBBYnN0cmFjdE1hdHJpeC5zdWIoYTIxLCBhMTEpLFxuICAgICAgICBBYnN0cmFjdE1hdHJpeC5hZGQoYjExLCBiMTIpLFxuICAgICAgICBoYWxmUm93cyxcbiAgICAgICAgaGFsZkNvbHMsXG4gICAgICApO1xuICAgICAgbGV0IG03ID0gYmxvY2tNdWx0KFxuICAgICAgICBBYnN0cmFjdE1hdHJpeC5zdWIoYTEyLCBhMjIpLFxuICAgICAgICBBYnN0cmFjdE1hdHJpeC5hZGQoYjIxLCBiMjIpLFxuICAgICAgICBoYWxmUm93cyxcbiAgICAgICAgaGFsZkNvbHMsXG4gICAgICApO1xuXG4gICAgICAvLyBDb21iaW5lIGludGVybWVkaWF0ZSB2YWx1ZXMgaW50byB0aGUgb3V0cHV0LlxuICAgICAgbGV0IGMxMSA9IEFic3RyYWN0TWF0cml4LmFkZChtMSwgbTQpO1xuICAgICAgYzExLnN1YihtNSk7XG4gICAgICBjMTEuYWRkKG03KTtcbiAgICAgIGxldCBjMTIgPSBBYnN0cmFjdE1hdHJpeC5hZGQobTMsIG01KTtcbiAgICAgIGxldCBjMjEgPSBBYnN0cmFjdE1hdHJpeC5hZGQobTIsIG00KTtcbiAgICAgIGxldCBjMjIgPSBBYnN0cmFjdE1hdHJpeC5zdWIobTEsIG0yKTtcbiAgICAgIGMyMi5hZGQobTMpO1xuICAgICAgYzIyLmFkZChtNik7XG5cbiAgICAgIC8vIENyb3Agb3V0cHV0IHRvIHRoZSBkZXNpcmVkIHNpemUgKHVuZG8gZHluYW1pYyBwYWRkaW5nKS5cbiAgICAgIGxldCByZXN1bHRhdCA9IEFic3RyYWN0TWF0cml4Lnplcm9zKDIgKiBjMTEucm93cywgMiAqIGMxMS5jb2x1bW5zKTtcbiAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMxMSwgMCwgMCk7XG4gICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMTIsIGMxMS5yb3dzLCAwKTtcbiAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMyMSwgMCwgYzExLmNvbHVtbnMpO1xuICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgoYzIyLCBjMTEucm93cywgYzExLmNvbHVtbnMpO1xuICAgICAgcmV0dXJuIHJlc3VsdGF0LnN1Yk1hdHJpeCgwLCByb3dzIC0gMSwgMCwgY29scyAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tNdWx0KHgsIHksIHIsIGMpO1xuICB9XG5cbiAgc2NhbGVSb3dzKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgY29uc3QgeyBtaW4gPSAwLCBtYXggPSAxIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1pbikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21pbiBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobWF4KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4IG11c3QgYmUgYSBudW1iZXInKTtcbiAgICBpZiAobWluID49IG1heCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBtdXN0IGJlIHNtYWxsZXIgdGhhbiBtYXgnKTtcbiAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRSb3coaSk7XG4gICAgICByZXNjYWxlKHJvdywgeyBtaW4sIG1heCwgb3V0cHV0OiByb3cgfSk7XG4gICAgICBuZXdNYXRyaXguc2V0Um93KGksIHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXRyaXg7XG4gIH1cblxuICBzY2FsZUNvbHVtbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICBjb25zdCB7IG1pbiA9IDAsIG1heCA9IDEgfSA9IG9wdGlvbnM7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobWluKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbWluIG11c3QgYmUgYSBudW1iZXInKTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShtYXgpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG51bWJlcicpO1xuICAgIGlmIChtaW4gPj0gbWF4KSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWluIG11c3QgYmUgc21hbGxlciB0aGFuIG1heCcpO1xuICAgIGxldCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpKTtcbiAgICAgIHJlc2NhbGUoY29sdW1uLCB7XG4gICAgICAgIG1pbjogbWluLFxuICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgb3V0cHV0OiBjb2x1bW4sXG4gICAgICB9KTtcbiAgICAgIG5ld01hdHJpeC5zZXRDb2x1bW4oaSwgY29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgfVxuXG4gIGZsaXBSb3dzKCkge1xuICAgIGNvbnN0IG1pZGRsZSA9IE1hdGguY2VpbCh0aGlzLmNvbHVtbnMgLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pZGRsZTsgaisrKSB7XG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuZ2V0KGksIHRoaXMuY29sdW1ucyAtIDEgLSBqKTtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgbGFzdCk7XG4gICAgICAgIHRoaXMuc2V0KGksIHRoaXMuY29sdW1ucyAtIDEgLSBqLCBmaXJzdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZmxpcENvbHVtbnMoKSB7XG4gICAgY29uc3QgbWlkZGxlID0gTWF0aC5jZWlsKHRoaXMucm93cyAvIDIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWlkZGxlOyBpKyspIHtcbiAgICAgICAgbGV0IGZpcnN0ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgIGxldCBsYXN0ID0gdGhpcy5nZXQodGhpcy5yb3dzIC0gMSAtIGksIGopO1xuICAgICAgICB0aGlzLnNldChpLCBqLCBsYXN0KTtcbiAgICAgICAgdGhpcy5zZXQodGhpcy5yb3dzIC0gMSAtIGksIGosIGZpcnN0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBrcm9uZWNrZXJQcm9kdWN0KG90aGVyKSB7XG4gICAgb3RoZXIgPSBNYXRyaXguY2hlY2tNYXRyaXgob3RoZXIpO1xuXG4gICAgbGV0IG0gPSB0aGlzLnJvd3M7XG4gICAgbGV0IG4gPSB0aGlzLmNvbHVtbnM7XG4gICAgbGV0IHAgPSBvdGhlci5yb3dzO1xuICAgIGxldCBxID0gb3RoZXIuY29sdW1ucztcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWF0cml4KG0gKiBwLCBuICogcSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcDsgaysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBxOyBsKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZXQocCAqIGkgKyBrLCBxICogaiArIGwsIHRoaXMuZ2V0KGksIGopICogb3RoZXIuZ2V0KGssIGwpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRyYW5zcG9zZSgpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hdHJpeCh0aGlzLmNvbHVtbnMsIHRoaXMucm93cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICByZXN1bHQuc2V0KGosIGksIHRoaXMuZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNvcnRSb3dzKGNvbXBhcmVGdW5jdGlvbiA9IGNvbXBhcmVOdW1iZXJzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy5zZXRSb3coaSwgdGhpcy5nZXRSb3coaSkuc29ydChjb21wYXJlRnVuY3Rpb24pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzb3J0Q29sdW1ucyhjb21wYXJlRnVuY3Rpb24gPSBjb21wYXJlTnVtYmVycykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0Q29sdW1uKGksIHRoaXMuZ2V0Q29sdW1uKGkpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3ViTWF0cml4KHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICBjaGVja1JhbmdlKHRoaXMsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pO1xuICAgIGxldCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KFxuICAgICAgZW5kUm93IC0gc3RhcnRSb3cgKyAxLFxuICAgICAgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW4gKyAxLFxuICAgICk7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2x1bW47IGogPD0gZW5kQ29sdW1uOyBqKyspIHtcbiAgICAgICAgbmV3TWF0cml4LnNldChpIC0gc3RhcnRSb3csIGogLSBzdGFydENvbHVtbiwgdGhpcy5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3TWF0cml4O1xuICB9XG5cbiAgc3ViTWF0cml4Um93KGluZGljZXMsIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICBpZiAoc3RhcnRDb2x1bW4gPT09IHVuZGVmaW5lZCkgc3RhcnRDb2x1bW4gPSAwO1xuICAgIGlmIChlbmRDb2x1bW4gPT09IHVuZGVmaW5lZCkgZW5kQ29sdW1uID0gdGhpcy5jb2x1bW5zIC0gMTtcbiAgICBpZiAoXG4gICAgICBzdGFydENvbHVtbiA+IGVuZENvbHVtbiB8fFxuICAgICAgc3RhcnRDb2x1bW4gPCAwIHx8XG4gICAgICBzdGFydENvbHVtbiA+PSB0aGlzLmNvbHVtbnMgfHxcbiAgICAgIGVuZENvbHVtbiA8IDAgfHxcbiAgICAgIGVuZENvbHVtbiA+PSB0aGlzLmNvbHVtbnNcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBcmd1bWVudCBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChpbmRpY2VzLmxlbmd0aCwgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW4gKyAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBzdGFydENvbHVtbjsgaiA8PSBlbmRDb2x1bW47IGorKykge1xuICAgICAgICBpZiAoaW5kaWNlc1tpXSA8IDAgfHwgaW5kaWNlc1tpXSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgUm93IGluZGV4IG91dCBvZiByYW5nZTogJHtpbmRpY2VzW2ldfWApO1xuICAgICAgICB9XG4gICAgICAgIG5ld01hdHJpeC5zZXQoaSwgaiAtIHN0YXJ0Q29sdW1uLCB0aGlzLmdldChpbmRpY2VzW2ldLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXRyaXg7XG4gIH1cblxuICBzdWJNYXRyaXhDb2x1bW4oaW5kaWNlcywgc3RhcnRSb3csIGVuZFJvdykge1xuICAgIGlmIChzdGFydFJvdyA9PT0gdW5kZWZpbmVkKSBzdGFydFJvdyA9IDA7XG4gICAgaWYgKGVuZFJvdyA9PT0gdW5kZWZpbmVkKSBlbmRSb3cgPSB0aGlzLnJvd3MgLSAxO1xuICAgIGlmIChcbiAgICAgIHN0YXJ0Um93ID4gZW5kUm93IHx8XG4gICAgICBzdGFydFJvdyA8IDAgfHxcbiAgICAgIHN0YXJ0Um93ID49IHRoaXMucm93cyB8fFxuICAgICAgZW5kUm93IDwgMCB8fFxuICAgICAgZW5kUm93ID49IHRoaXMucm93c1xuICAgICkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0FyZ3VtZW50IG91dCBvZiByYW5nZScpO1xuICAgIH1cblxuICAgIGxldCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KGVuZFJvdyAtIHN0YXJ0Um93ICsgMSwgaW5kaWNlcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Um93OyBqIDw9IGVuZFJvdzsgaisrKSB7XG4gICAgICAgIGlmIChpbmRpY2VzW2ldIDwgMCB8fCBpbmRpY2VzW2ldID49IHRoaXMuY29sdW1ucykge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBDb2x1bW4gaW5kZXggb3V0IG9mIHJhbmdlOiAke2luZGljZXNbaV19YCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3TWF0cml4LnNldChqIC0gc3RhcnRSb3csIGksIHRoaXMuZ2V0KGosIGluZGljZXNbaV0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgfVxuXG4gIHNldFN1Yk1hdHJpeChtYXRyaXgsIHN0YXJ0Um93LCBzdGFydENvbHVtbikge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdyArIG1hdHJpeC5yb3dzIC0gMTtcbiAgICBsZXQgZW5kQ29sdW1uID0gc3RhcnRDb2x1bW4gKyBtYXRyaXguY29sdW1ucyAtIDE7XG4gICAgY2hlY2tSYW5nZSh0aGlzLCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChzdGFydFJvdyArIGksIHN0YXJ0Q29sdW1uICsgaiwgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0aW9uKHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICBsZXQgaW5kaWNlcyA9IGNoZWNrSW5kaWNlcyh0aGlzLCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChyb3dJbmRpY2VzLmxlbmd0aCwgY29sdW1uSW5kaWNlcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlcy5yb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3dJbmRleCA9IGluZGljZXMucm93W2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbmRpY2VzLmNvbHVtbi5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgY29sdW1uSW5kZXggPSBpbmRpY2VzLmNvbHVtbltqXTtcbiAgICAgICAgbmV3TWF0cml4LnNldChpLCBqLCB0aGlzLmdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgfVxuXG4gIHRyYWNlKCkge1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbih0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgbGV0IHRyYWNlID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICB0cmFjZSArPSB0aGlzLmdldChpLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMuY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgbmV3TWF0cml4LnNldChyb3csIGNvbHVtbiwgdGhpcy5nZXQocm93LCBjb2x1bW4pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgfVxuXG4gIHN1bShieSkge1xuICAgIHN3aXRjaCAoYnkpIHtcbiAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICAgIHJldHVybiBzdW1CeVJvdyh0aGlzKTtcbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIHJldHVybiBzdW1CeUNvbHVtbih0aGlzKTtcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gc3VtQWxsKHRoaXMpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9wdGlvbjogJHtieX1gKTtcbiAgICB9XG4gIH1cblxuICBwcm9kdWN0KGJ5KSB7XG4gICAgc3dpdGNoIChieSkge1xuICAgICAgY2FzZSAncm93JzpcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RCeVJvdyh0aGlzKTtcbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIHJldHVybiBwcm9kdWN0QnlDb2x1bW4odGhpcyk7XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RBbGwodGhpcyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgb3B0aW9uOiAke2J5fWApO1xuICAgIH1cbiAgfVxuXG4gIG1lYW4oYnkpIHtcbiAgICBjb25zdCBzdW0gPSB0aGlzLnN1bShieSk7XG4gICAgc3dpdGNoIChieSkge1xuICAgICAgY2FzZSAncm93Jzoge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgc3VtW2ldIC89IHRoaXMuY29sdW1ucztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgfVxuICAgICAgY2FzZSAnY29sdW1uJzoge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICAgICAgc3VtW2ldIC89IHRoaXMucm93cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgfVxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiBzdW0gLyB0aGlzLnNpemU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgb3B0aW9uOiAke2J5fWApO1xuICAgIH1cbiAgfVxuXG4gIHZhcmlhbmNlKGJ5LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IGJ5O1xuICAgICAgYnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgY29uc3QgeyB1bmJpYXNlZCA9IHRydWUsIG1lYW4gPSB0aGlzLm1lYW4oYnkpIH0gPSBvcHRpb25zO1xuICAgIGlmICh0eXBlb2YgdW5iaWFzZWQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5iaWFzZWQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB9XG4gICAgc3dpdGNoIChieSkge1xuICAgICAgY2FzZSAncm93Jzoge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVhbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtZWFuIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFuY2VCeVJvdyh0aGlzLCB1bmJpYXNlZCwgbWVhbik7XG4gICAgICB9XG4gICAgICBjYXNlICdjb2x1bW4nOiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZWFuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21lYW4gbXVzdCBiZSBhbiBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YXJpYW5jZUJ5Q29sdW1uKHRoaXMsIHVuYmlhc2VkLCBtZWFuKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgdW5kZWZpbmVkOiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVhbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtZWFuIG11c3QgYmUgYSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFuY2VBbGwodGhpcywgdW5iaWFzZWQsIG1lYW4pO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9wdGlvbjogJHtieX1gKTtcbiAgICB9XG4gIH1cblxuICBzdGFuZGFyZERldmlhdGlvbihieSwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgYnkgPT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRpb25zID0gYnk7XG4gICAgICBieSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgdmFyaWFuY2UgPSB0aGlzLnZhcmlhbmNlKGJ5LCBvcHRpb25zKTtcbiAgICBpZiAoYnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh2YXJpYW5jZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyaWFuY2VbaV0gPSBNYXRoLnNxcnQodmFyaWFuY2VbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhcmlhbmNlO1xuICAgIH1cbiAgfVxuXG4gIGNlbnRlcihieSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBieSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSBieTtcbiAgICAgIGJ5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIGNvbnN0IHsgY2VudGVyID0gdGhpcy5tZWFuKGJ5KSB9ID0gb3B0aW9ucztcbiAgICBzd2l0Y2ggKGJ5KSB7XG4gICAgICBjYXNlICdyb3cnOiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjZW50ZXIpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2VudGVyIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBjZW50ZXJCeVJvdyh0aGlzLCBjZW50ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NvbHVtbic6IHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNlbnRlcikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjZW50ZXIgbXVzdCBiZSBhbiBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIGNlbnRlckJ5Q29sdW1uKHRoaXMsIGNlbnRlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgY2FzZSB1bmRlZmluZWQ6IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjZW50ZXIgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2VudGVyIG11c3QgYmUgYSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgICAgICBjZW50ZXJBbGwodGhpcywgY2VudGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgb3B0aW9uOiAke2J5fWApO1xuICAgIH1cbiAgfVxuXG4gIHNjYWxlKGJ5LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IGJ5O1xuICAgICAgYnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgbGV0IHNjYWxlID0gb3B0aW9ucy5zY2FsZTtcbiAgICBzd2l0Y2ggKGJ5KSB7XG4gICAgICBjYXNlICdyb3cnOiB7XG4gICAgICAgIGlmIChzY2FsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2NhbGUgPSBnZXRTY2FsZUJ5Um93KHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHNjYWxlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NjYWxlIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBzY2FsZUJ5Um93KHRoaXMsIHNjYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBjYXNlICdjb2x1bW4nOiB7XG4gICAgICAgIGlmIChzY2FsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2NhbGUgPSBnZXRTY2FsZUJ5Q29sdW1uKHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHNjYWxlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NjYWxlIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBzY2FsZUJ5Q29sdW1uKHRoaXMsIHNjYWxlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBjYXNlIHVuZGVmaW5lZDoge1xuICAgICAgICBpZiAoc2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNjYWxlID0gZ2V0U2NhbGVBbGwodGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjYWxlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NjYWxlIG11c3QgYmUgYSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgICAgICBzY2FsZUFsbCh0aGlzLCBzY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9wdGlvbjogJHtieX1gKTtcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3BlY3RNYXRyaXhXaXRoT3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuXG5BYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUua2xhc3MgPSAnTWF0cml4JztcbmlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGVbXG4gICAgU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKVxuICBdID0gaW5zcGVjdE1hdHJpeDtcbn1cblxuZnVuY3Rpb24gY29tcGFyZU51bWJlcnMoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59XG5cbi8vIFN5bm9ueW1zXG5BYnN0cmFjdE1hdHJpeC5yYW5kb20gPSBBYnN0cmFjdE1hdHJpeC5yYW5kO1xuQWJzdHJhY3RNYXRyaXgucmFuZG9tSW50ID0gQWJzdHJhY3RNYXRyaXgucmFuZEludDtcbkFic3RyYWN0TWF0cml4LmRpYWdvbmFsID0gQWJzdHJhY3RNYXRyaXguZGlhZztcbkFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaWFnb25hbCA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaWFnO1xuQWJzdHJhY3RNYXRyaXguaWRlbnRpdHkgPSBBYnN0cmFjdE1hdHJpeC5leWU7XG5BYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubmVnYXRlID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm5lZztcbkFic3RyYWN0TWF0cml4LnByb3RvdHlwZS50ZW5zb3JQcm9kdWN0ID1cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmtyb25lY2tlclByb2R1Y3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCBleHRlbmRzIEFic3RyYWN0TWF0cml4IHtcbiAgY29uc3RydWN0b3IoblJvd3MsIG5Db2x1bW5zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoTWF0cml4LmlzTWF0cml4KG5Sb3dzKSkge1xuICAgICAgcmV0dXJuIG5Sb3dzLmNsb25lKCk7XG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG5Sb3dzKSAmJiBuUm93cyA+IDApIHtcbiAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBtYXRyaXhcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIobkNvbHVtbnMpICYmIG5Db2x1bW5zID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmRhdGEucHVzaChuZXcgRmxvYXQ2NEFycmF5KG5Db2x1bW5zKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25Db2x1bW5zIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5Sb3dzKSkge1xuICAgICAgLy8gQ29weSB0aGUgdmFsdWVzIGZyb20gdGhlIDJEIGFycmF5XG4gICAgICBjb25zdCBhcnJheURhdGEgPSBuUm93cztcbiAgICAgIG5Sb3dzID0gYXJyYXlEYXRhLmxlbmd0aDtcbiAgICAgIG5Db2x1bW5zID0gYXJyYXlEYXRhWzBdLmxlbmd0aDtcbiAgICAgIGlmICh0eXBlb2YgbkNvbHVtbnMgIT09ICdudW1iZXInIHx8IG5Db2x1bW5zID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgJ0RhdGEgbXVzdCBiZSBhIDJEIGFycmF5IHdpdGggYXQgbGVhc3Qgb25lIGVsZW1lbnQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5Sb3dzOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5RGF0YVtpXS5sZW5ndGggIT09IG5Db2x1bW5zKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luY29uc2lzdGVudCBhcnJheSBkaW1lbnNpb25zJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLnB1c2goRmxvYXQ2NEFycmF5LmZyb20oYXJyYXlEYXRhW2ldKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyIG9yIGFuIGFycmF5JyxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucm93cyA9IG5Sb3dzO1xuICAgIHRoaXMuY29sdW1ucyA9IG5Db2x1bW5zO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLmRhdGFbcm93SW5kZXhdW2NvbHVtbkluZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgfVxuXG4gIHJlbW92ZVJvdyhpbmRleCkge1xuICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgIGlmICh0aGlzLnJvd3MgPT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBIG1hdHJpeCBjYW5ub3QgaGF2ZSBsZXNzIHRoYW4gb25lIHJvdycpO1xuICAgIH1cbiAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnJvd3MgLT0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFJvdyhpbmRleCwgYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXJyYXkgPSBpbmRleDtcbiAgICAgIGluZGV4ID0gdGhpcy5yb3dzO1xuICAgIH1cbiAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4LCB0cnVlKTtcbiAgICBhcnJheSA9IEZsb2F0NjRBcnJheS5mcm9tKGNoZWNrUm93VmVjdG9yKHRoaXMsIGFycmF5LCB0cnVlKSk7XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMCwgYXJyYXkpO1xuICAgIHRoaXMucm93cyArPSAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlQ29sdW1uKGluZGV4KSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgaWYgKHRoaXMuY29sdW1ucyA9PT0gMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0EgbWF0cml4IGNhbm5vdCBoYXZlIGxlc3MgdGhhbiBvbmUgY29sdW1uJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1JvdyA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5jb2x1bW5zIC0gMSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGluZGV4OyBqKyspIHtcbiAgICAgICAgbmV3Um93W2pdID0gdGhpcy5kYXRhW2ldW2pdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaiA9IGluZGV4ICsgMTsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIG5ld1Jvd1tqIC0gMV0gPSB0aGlzLmRhdGFbaV1bal07XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFbaV0gPSBuZXdSb3c7XG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyAtPSAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29sdW1uKGluZGV4LCBhcnJheSkge1xuICAgIGlmICh0eXBlb2YgYXJyYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhcnJheSA9IGluZGV4O1xuICAgICAgaW5kZXggPSB0aGlzLmNvbHVtbnM7XG4gICAgfVxuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgsIHRydWUpO1xuICAgIGFycmF5ID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgYXJyYXkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1JvdyA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5jb2x1bW5zICsgMSk7XG4gICAgICBsZXQgaiA9IDA7XG4gICAgICBmb3IgKDsgaiA8IGluZGV4OyBqKyspIHtcbiAgICAgICAgbmV3Um93W2pdID0gdGhpcy5kYXRhW2ldW2pdO1xuICAgICAgfVxuICAgICAgbmV3Um93W2orK10gPSBhcnJheVtpXTtcbiAgICAgIGZvciAoOyBqIDwgdGhpcy5jb2x1bW5zICsgMTsgaisrKSB7XG4gICAgICAgIG5ld1Jvd1tqXSA9IHRoaXMuZGF0YVtpXVtqIC0gMV07XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFbaV0gPSBuZXdSb3c7XG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyArPSAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmluc3RhbGxNYXRoT3BlcmF0aW9ucyhBYnN0cmFjdE1hdHJpeCwgTWF0cml4KTtcbiIsImltcG9ydCBTVkQgZnJvbSAnLi9kYy9zdmQnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9JbnZlcnNlKG1hdHJpeCwgdGhyZXNob2xkID0gTnVtYmVyLkVQU0lMT04pIHtcbiAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gIGxldCBzdmRTb2x1dGlvbiA9IG5ldyBTVkQobWF0cml4LCB7IGF1dG9UcmFuc3Bvc2U6IHRydWUgfSk7XG5cbiAgbGV0IFUgPSBzdmRTb2x1dGlvbi5sZWZ0U2luZ3VsYXJWZWN0b3JzO1xuICBsZXQgViA9IHN2ZFNvbHV0aW9uLnJpZ2h0U2luZ3VsYXJWZWN0b3JzO1xuICBsZXQgcyA9IHN2ZFNvbHV0aW9uLmRpYWdvbmFsO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChNYXRoLmFicyhzW2ldKSA+IHRocmVzaG9sZCkge1xuICAgICAgc1tpXSA9IDEuMCAvIHNbaV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNbaV0gPSAwLjA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFYubW11bChNYXRyaXguZGlhZyhzKS5tbXVsKFUudHJhbnNwb3NlKCkpKTtcbn1cbiIsImltcG9ydCB7IG5ld0FycmF5IH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5Um93KG1hdHJpeCkge1xuICBsZXQgc3VtID0gbmV3QXJyYXkobWF0cml4LnJvd3MpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgIHN1bVtpXSArPSBtYXRyaXguZ2V0KGksIGopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQnlDb2x1bW4obWF0cml4KSB7XG4gIGxldCBzdW0gPSBuZXdBcnJheShtYXRyaXguY29sdW1ucyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7ICsraSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7ICsraikge1xuICAgICAgc3VtW2pdICs9IG1hdHJpeC5nZXQoaSwgaik7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1BbGwobWF0cml4KSB7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICB2ICs9IG1hdHJpeC5nZXQoaSwgaik7XG4gICAgfVxuICB9XG4gIHJldHVybiB2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdEJ5Um93KG1hdHJpeCkge1xuICBsZXQgc3VtID0gbmV3QXJyYXkobWF0cml4LnJvd3MsIDEpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgIHN1bVtpXSAqPSBtYXRyaXguZ2V0KGksIGopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdEJ5Q29sdW1uKG1hdHJpeCkge1xuICBsZXQgc3VtID0gbmV3QXJyYXkobWF0cml4LmNvbHVtbnMsIDEpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgIHN1bVtqXSAqPSBtYXRyaXguZ2V0KGksIGopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdEFsbChtYXRyaXgpIHtcbiAgbGV0IHYgPSAxO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgIHYgKj0gbWF0cml4LmdldChpLCBqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYW5jZUJ5Um93KG1hdHJpeCwgdW5iaWFzZWQsIG1lYW4pIHtcbiAgY29uc3Qgcm93cyA9IG1hdHJpeC5yb3dzO1xuICBjb25zdCBjb2xzID0gbWF0cml4LmNvbHVtbnM7XG4gIGNvbnN0IHZhcmlhbmNlID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBsZXQgc3VtMSA9IDA7XG4gICAgbGV0IHN1bTIgPSAwO1xuICAgIGxldCB4ID0gMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgeCA9IG1hdHJpeC5nZXQoaSwgaikgLSBtZWFuW2ldO1xuICAgICAgc3VtMSArPSB4O1xuICAgICAgc3VtMiArPSB4ICogeDtcbiAgICB9XG4gICAgaWYgKHVuYmlhc2VkKSB7XG4gICAgICB2YXJpYW5jZS5wdXNoKChzdW0yIC0gKHN1bTEgKiBzdW0xKSAvIGNvbHMpIC8gKGNvbHMgLSAxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhbmNlLnB1c2goKHN1bTIgLSAoc3VtMSAqIHN1bTEpIC8gY29scykgLyBjb2xzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhcmlhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFuY2VCeUNvbHVtbihtYXRyaXgsIHVuYmlhc2VkLCBtZWFuKSB7XG4gIGNvbnN0IHJvd3MgPSBtYXRyaXgucm93cztcbiAgY29uc3QgY29scyA9IG1hdHJpeC5jb2x1bW5zO1xuICBjb25zdCB2YXJpYW5jZSA9IFtdO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG4gICAgbGV0IHN1bTEgPSAwO1xuICAgIGxldCBzdW0yID0gMDtcbiAgICBsZXQgeCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIHggPSBtYXRyaXguZ2V0KGksIGopIC0gbWVhbltqXTtcbiAgICAgIHN1bTEgKz0geDtcbiAgICAgIHN1bTIgKz0geCAqIHg7XG4gICAgfVxuICAgIGlmICh1bmJpYXNlZCkge1xuICAgICAgdmFyaWFuY2UucHVzaCgoc3VtMiAtIChzdW0xICogc3VtMSkgLyByb3dzKSAvIChyb3dzIC0gMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYW5jZS5wdXNoKChzdW0yIC0gKHN1bTEgKiBzdW0xKSAvIHJvd3MpIC8gcm93cyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YXJpYW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhbmNlQWxsKG1hdHJpeCwgdW5iaWFzZWQsIG1lYW4pIHtcbiAgY29uc3Qgcm93cyA9IG1hdHJpeC5yb3dzO1xuICBjb25zdCBjb2xzID0gbWF0cml4LmNvbHVtbnM7XG4gIGNvbnN0IHNpemUgPSByb3dzICogY29scztcblxuICBsZXQgc3VtMSA9IDA7XG4gIGxldCBzdW0yID0gMDtcbiAgbGV0IHggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG4gICAgICB4ID0gbWF0cml4LmdldChpLCBqKSAtIG1lYW47XG4gICAgICBzdW0xICs9IHg7XG4gICAgICBzdW0yICs9IHggKiB4O1xuICAgIH1cbiAgfVxuICBpZiAodW5iaWFzZWQpIHtcbiAgICByZXR1cm4gKHN1bTIgLSAoc3VtMSAqIHN1bTEpIC8gc2l6ZSkgLyAoc2l6ZSAtIDEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoc3VtMiAtIChzdW0xICogc3VtMSkgLyBzaXplKSAvIHNpemU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlckJ5Um93KG1hdHJpeCwgbWVhbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgaiwgbWF0cml4LmdldChpLCBqKSAtIG1lYW5baV0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyQnlDb2x1bW4obWF0cml4LCBtZWFuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgbWF0cml4LnNldChpLCBqLCBtYXRyaXguZ2V0KGksIGopIC0gbWVhbltqXSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJBbGwobWF0cml4LCBtZWFuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgbWF0cml4LnNldChpLCBqLCBtYXRyaXguZ2V0KGksIGopIC0gbWVhbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsZUJ5Um93KG1hdHJpeCkge1xuICBjb25zdCBzY2FsZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgIHN1bSArPSBNYXRoLnBvdyhtYXRyaXguZ2V0KGksIGopLCAyKSAvIChtYXRyaXguY29sdW1ucyAtIDEpO1xuICAgIH1cbiAgICBzY2FsZS5wdXNoKE1hdGguc3FydChzdW0pKTtcbiAgfVxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUJ5Um93KG1hdHJpeCwgc2NhbGUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICBtYXRyaXguc2V0KGksIGosIG1hdHJpeC5nZXQoaSwgaikgLyBzY2FsZVtpXSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsZUJ5Q29sdW1uKG1hdHJpeCkge1xuICBjb25zdCBzY2FsZSA9IFtdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICAgIHN1bSArPSBNYXRoLnBvdyhtYXRyaXguZ2V0KGksIGopLCAyKSAvIChtYXRyaXgucm93cyAtIDEpO1xuICAgIH1cbiAgICBzY2FsZS5wdXNoKE1hdGguc3FydChzdW0pKTtcbiAgfVxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUJ5Q29sdW1uKG1hdHJpeCwgc2NhbGUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICBtYXRyaXguc2V0KGksIGosIG1hdHJpeC5nZXQoaSwgaikgLyBzY2FsZVtqXSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsZUFsbChtYXRyaXgpIHtcbiAgY29uc3QgZGl2aWRlciA9IG1hdHJpeC5zaXplIC0gMTtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgICAgc3VtICs9IE1hdGgucG93KG1hdHJpeC5nZXQoaSwgaiksIDIpIC8gZGl2aWRlcjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE1hdGguc3FydChzdW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbGwobWF0cml4LCBzY2FsZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgaiwgbWF0cml4LmdldChpLCBqKSAvIHNjYWxlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgYSByb3cgaW5kZXggaXMgbm90IG91dCBvZiBib3VuZHNcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtib29sZWFufSBbb3V0ZXJdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd0luZGV4KG1hdHJpeCwgaW5kZXgsIG91dGVyKSB7XG4gIGxldCBtYXggPSBvdXRlciA/IG1hdHJpeC5yb3dzIDogbWF0cml4LnJvd3MgLSAxO1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbWF4KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1JvdyBpbmRleCBvdXQgb2YgcmFuZ2UnKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IGEgY29sdW1uIGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW291dGVyXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2x1bW5JbmRleChtYXRyaXgsIGluZGV4LCBvdXRlcikge1xuICBsZXQgbWF4ID0gb3V0ZXIgPyBtYXRyaXguY29sdW1ucyA6IG1hdHJpeC5jb2x1bW5zIC0gMTtcbiAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IG1heCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDb2x1bW4gaW5kZXggb3V0IG9mIHJhbmdlJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGlzIGFuIGFycmF5IHdpdGggdGhlIHJpZ2h0IGxlbmd0aFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvclxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dWZWN0b3IobWF0cml4LCB2ZWN0b3IpIHtcbiAgaWYgKHZlY3Rvci50bzFEQXJyYXkpIHtcbiAgICB2ZWN0b3IgPSB2ZWN0b3IudG8xREFycmF5KCk7XG4gIH1cbiAgaWYgKHZlY3Rvci5sZW5ndGggIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAndmVjdG9yIHNpemUgbXVzdCBiZSB0aGUgc2FtZSBhcyB0aGUgbnVtYmVyIG9mIGNvbHVtbnMnLFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHZlY3Rvcjtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGlzIGFuIGFycmF5IHdpdGggdGhlIHJpZ2h0IGxlbmd0aFxuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtBcnJheXxNYXRyaXh9IHZlY3RvclxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2x1bW5WZWN0b3IobWF0cml4LCB2ZWN0b3IpIHtcbiAgaWYgKHZlY3Rvci50bzFEQXJyYXkpIHtcbiAgICB2ZWN0b3IgPSB2ZWN0b3IudG8xREFycmF5KCk7XG4gIH1cbiAgaWYgKHZlY3Rvci5sZW5ndGggIT09IG1hdHJpeC5yb3dzKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZlY3RvciBzaXplIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhlIG51bWJlciBvZiByb3dzJyk7XG4gIH1cbiAgcmV0dXJuIHZlY3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgcmV0dXJuIHtcbiAgICByb3c6IGNoZWNrUm93SW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMpLFxuICAgIGNvbHVtbjogY2hlY2tDb2x1bW5JbmRpY2VzKG1hdHJpeCwgY29sdW1uSW5kaWNlcyksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKSB7XG4gIGlmICh0eXBlb2Ygcm93SW5kaWNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmV4cGVjdGVkIHR5cGUgZm9yIHJvdyBpbmRpY2VzJyk7XG4gIH1cblxuICBsZXQgcm93T3V0ID0gcm93SW5kaWNlcy5zb21lKChyKSA9PiB7XG4gICAgcmV0dXJuIHIgPCAwIHx8IHIgPj0gbWF0cml4LnJvd3M7XG4gIH0pO1xuXG4gIGlmIChyb3dPdXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigncm93IGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHJvd0luZGljZXMpKSByb3dJbmRpY2VzID0gQXJyYXkuZnJvbShyb3dJbmRpY2VzKTtcblxuICByZXR1cm4gcm93SW5kaWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uSW5kaWNlcyhtYXRyaXgsIGNvbHVtbkluZGljZXMpIHtcbiAgaWYgKHR5cGVvZiBjb2x1bW5JbmRpY2VzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZXhwZWN0ZWQgdHlwZSBmb3IgY29sdW1uIGluZGljZXMnKTtcbiAgfVxuXG4gIGxldCBjb2x1bW5PdXQgPSBjb2x1bW5JbmRpY2VzLnNvbWUoKGMpID0+IHtcbiAgICByZXR1cm4gYyA8IDAgfHwgYyA+PSBtYXRyaXguY29sdW1ucztcbiAgfSk7XG5cbiAgaWYgKGNvbHVtbk91dCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdjb2x1bW4gaW5kaWNlcyBhcmUgb3V0IG9mIHJhbmdlJyk7XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvbHVtbkluZGljZXMpKSBjb2x1bW5JbmRpY2VzID0gQXJyYXkuZnJvbShjb2x1bW5JbmRpY2VzKTtcblxuICByZXR1cm4gY29sdW1uSW5kaWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2V4cGVjdGVkIDQgYXJndW1lbnRzJyk7XG4gIH1cbiAgY2hlY2tOdW1iZXIoJ3N0YXJ0Um93Jywgc3RhcnRSb3cpO1xuICBjaGVja051bWJlcignZW5kUm93JywgZW5kUm93KTtcbiAgY2hlY2tOdW1iZXIoJ3N0YXJ0Q29sdW1uJywgc3RhcnRDb2x1bW4pO1xuICBjaGVja051bWJlcignZW5kQ29sdW1uJywgZW5kQ29sdW1uKTtcbiAgaWYgKFxuICAgIHN0YXJ0Um93ID4gZW5kUm93IHx8XG4gICAgc3RhcnRDb2x1bW4gPiBlbmRDb2x1bW4gfHxcbiAgICBzdGFydFJvdyA8IDAgfHxcbiAgICBzdGFydFJvdyA+PSBtYXRyaXgucm93cyB8fFxuICAgIGVuZFJvdyA8IDAgfHxcbiAgICBlbmRSb3cgPj0gbWF0cml4LnJvd3MgfHxcbiAgICBzdGFydENvbHVtbiA8IDAgfHxcbiAgICBzdGFydENvbHVtbiA+PSBtYXRyaXguY29sdW1ucyB8fFxuICAgIGVuZENvbHVtbiA8IDAgfHxcbiAgICBlbmRDb2x1bW4gPj0gbWF0cml4LmNvbHVtbnNcbiAgKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1N1Ym1hdHJpeCBpbmRpY2VzIGFyZSBvdXQgb2YgcmFuZ2UnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3QXJyYXkobGVuZ3RoLCB2YWx1ZSA9IDApIHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTnVtYmVyKG5hbWUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtuYW1lfSBtdXN0IGJlIGEgbnVtYmVyYCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFic3RyYWN0TWF0cml4IH0gZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgcm93cywgY29sdW1ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjaGVja0NvbHVtbkluZGV4IH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhDb2x1bW5WaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIGNvbHVtbikge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgobWF0cml4LCBjb2x1bW4pO1xuICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LnJvd3MsIDEpO1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQocm93SW5kZXgsIHRoaXMuY29sdW1uLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHJvd0luZGV4LCB0aGlzLmNvbHVtbik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNoZWNrQ29sdW1uSW5kaWNlcyB9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Q29sdW1uU2VsZWN0aW9uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgY29sdW1uSW5kaWNlcyA9IGNoZWNrQ29sdW1uSW5kaWNlcyhtYXRyaXgsIGNvbHVtbkluZGljZXMpO1xuICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LnJvd3MsIGNvbHVtbkluZGljZXMubGVuZ3RoKTtcbiAgICB0aGlzLmNvbHVtbkluZGljZXMgPSBjb2x1bW5JbmRpY2VzO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQocm93SW5kZXgsIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0sIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHJvd0luZGV4LCB0aGlzLmNvbHVtbkluZGljZXNbY29sdW1uSW5kZXhdKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeEZsaXBDb2x1bW5WaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCBtYXRyaXguY29sdW1ucyk7XG4gIH1cblxuICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubWF0cml4LnNldChyb3dJbmRleCwgdGhpcy5jb2x1bW5zIC0gY29sdW1uSW5kZXggLSAxLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChyb3dJbmRleCwgdGhpcy5jb2x1bW5zIC0gY29sdW1uSW5kZXggLSAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeEZsaXBSb3dWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCBtYXRyaXguY29sdW1ucyk7XG4gIH1cblxuICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvd3MgLSByb3dJbmRleCAtIDEsIGNvbHVtbkluZGV4KTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXRyaXhDb2x1bW5WaWV3IH0gZnJvbSAnLi9jb2x1bW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXRyaXhDb2x1bW5TZWxlY3Rpb25WaWV3IH0gZnJvbSAnLi9jb2x1bW5TZWxlY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXRyaXhGbGlwQ29sdW1uVmlldyB9IGZyb20gJy4vZmxpcENvbHVtbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeEZsaXBSb3dWaWV3IH0gZnJvbSAnLi9mbGlwUm93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4Um93VmlldyB9IGZyb20gJy4vcm93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4Um93U2VsZWN0aW9uVmlldyB9IGZyb20gJy4vcm93U2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4U2VsZWN0aW9uVmlldyB9IGZyb20gJy4vc2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4U3ViVmlldyB9IGZyb20gJy4vc3ViJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4VHJhbnNwb3NlVmlldyB9IGZyb20gJy4vdHJhbnNwb3NlJztcbiIsImltcG9ydCB7IGNoZWNrUm93SW5kZXggfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1ZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgcm93KSB7XG4gICAgY2hlY2tSb3dJbmRleChtYXRyaXgsIHJvdyk7XG4gICAgc3VwZXIobWF0cml4LCAxLCBtYXRyaXguY29sdW1ucyk7XG4gICAgdGhpcy5yb3cgPSByb3c7XG4gIH1cblxuICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubWF0cml4LnNldCh0aGlzLnJvdywgY29sdW1uSW5kZXgsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93LCBjb2x1bW5JbmRleCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNoZWNrUm93SW5kaWNlcyB9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Um93U2VsZWN0aW9uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzKSB7XG4gICAgcm93SW5kaWNlcyA9IGNoZWNrUm93SW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMpO1xuICAgIHN1cGVyKG1hdHJpeCwgcm93SW5kaWNlcy5sZW5ndGgsIG1hdHJpeC5jb2x1bW5zKTtcbiAgICB0aGlzLnJvd0luZGljZXMgPSByb3dJbmRpY2VzO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQodGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSwgY29sdW1uSW5kZXgsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIGNvbHVtbkluZGV4KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2hlY2tJbmRpY2VzIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhTZWxlY3Rpb25WaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpIHtcbiAgICBsZXQgaW5kaWNlcyA9IGNoZWNrSW5kaWNlcyhtYXRyaXgsIHJvd0luZGljZXMsIGNvbHVtbkluZGljZXMpO1xuICAgIHN1cGVyKG1hdHJpeCwgaW5kaWNlcy5yb3cubGVuZ3RoLCBpbmRpY2VzLmNvbHVtbi5sZW5ndGgpO1xuICAgIHRoaXMucm93SW5kaWNlcyA9IGluZGljZXMucm93O1xuICAgIHRoaXMuY29sdW1uSW5kaWNlcyA9IGluZGljZXMuY29sdW1uO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQoXG4gICAgICB0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLFxuICAgICAgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChcbiAgICAgIHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sXG4gICAgICB0aGlzLmNvbHVtbkluZGljZXNbY29sdW1uSW5kZXhdLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNoZWNrUmFuZ2UgfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFN1YlZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICAgIGNoZWNrUmFuZ2UobWF0cml4LCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICBzdXBlcihtYXRyaXgsIGVuZFJvdyAtIHN0YXJ0Um93ICsgMSwgZW5kQ29sdW1uIC0gc3RhcnRDb2x1bW4gKyAxKTtcbiAgICB0aGlzLnN0YXJ0Um93ID0gc3RhcnRSb3c7XG4gICAgdGhpcy5zdGFydENvbHVtbiA9IHN0YXJ0Q29sdW1uO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQoXG4gICAgICB0aGlzLnN0YXJ0Um93ICsgcm93SW5kZXgsXG4gICAgICB0aGlzLnN0YXJ0Q29sdW1uICsgY29sdW1uSW5kZXgsXG4gICAgICB2YWx1ZSxcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQoXG4gICAgICB0aGlzLnN0YXJ0Um93ICsgcm93SW5kZXgsXG4gICAgICB0aGlzLnN0YXJ0Q29sdW1uICsgY29sdW1uSW5kZXgsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFRyYW5zcG9zZVZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHN1cGVyKG1hdHJpeCwgbWF0cml4LmNvbHVtbnMsIG1hdHJpeC5yb3dzKTtcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXRyaXguc2V0KGNvbHVtbkluZGV4LCByb3dJbmRleCwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQoY29sdW1uSW5kZXgsIHJvd0luZGV4KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RNYXRyaXggfSBmcm9tICcuLi9tYXRyaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcmFwcGVyTWF0cml4MUQgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgcm93cyA9IDEgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggJSByb3dzICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBkYXRhIGxlbmd0aCBpcyBub3QgZGl2aXNpYmxlIGJ5IHRoZSBudW1iZXIgb2Ygcm93cycpO1xuICAgIH1cbiAgICBzdXBlcigpO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jb2x1bW5zID0gZGF0YS5sZW5ndGggLyByb3dzO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuX2NhbGN1bGF0ZUluZGV4KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgdGhpcy5kYXRhW2luZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuX2NhbGN1bGF0ZUluZGV4KHJvd0luZGV4LCBjb2x1bW5JbmRleCk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleF07XG4gIH1cblxuICBfY2FsY3VsYXRlSW5kZXgocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gcm93ICogdGhpcy5jb2x1bW5zICsgY29sdW1uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdE1hdHJpeCB9IGZyb20gJy4uL21hdHJpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyYXBwZXJNYXRyaXgyRCBleHRlbmRzIEFic3RyYWN0TWF0cml4IHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnJvd3MgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLmNvbHVtbnMgPSBkYXRhWzBdLmxlbmd0aDtcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gIH1cbn1cbiIsImltcG9ydCBXcmFwcGVyTWF0cml4MUQgZnJvbSAnLi9XcmFwcGVyTWF0cml4MUQnO1xuaW1wb3J0IFdyYXBwZXJNYXRyaXgyRCBmcm9tICcuL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKGFycmF5LCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIGlmIChhcnJheVswXSAmJiBBcnJheS5pc0FycmF5KGFycmF5WzBdKSkge1xuICAgICAgcmV0dXJuIG5ldyBXcmFwcGVyTWF0cml4MkQoYXJyYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFdyYXBwZXJNYXRyaXgxRChhcnJheSwgb3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcigndGhlIGFyZ3VtZW50IGlzIG5vdCBhbiBhcnJheScpO1xuICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbnlRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IFtdLCBjb21wYXJlID0gZGVmYXVsdENvbXBhcmUpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLmNvbXBhcmUgPSBjb21wYXJlO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAodGhpcy5sZW5ndGggPj4gMSkgLSAxOyBpID49IDA7IGktLSkgdGhpcy5fZG93bihpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1c2goaXRlbSkge1xuICAgICAgICB0aGlzLmRhdGEucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgdGhpcy5fdXAodGhpcy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBwb3AoKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmRhdGFbMF07XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuZGF0YS5wb3AoKTtcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbMF0gPSBib3R0b207XG4gICAgICAgICAgICB0aGlzLl9kb3duKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvcDtcbiAgICB9XG5cbiAgICBwZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdO1xuICAgIH1cblxuICAgIF91cChwb3MpIHtcbiAgICAgICAgY29uc3Qge2RhdGEsIGNvbXBhcmV9ID0gdGhpcztcbiAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbcG9zXTtcblxuICAgICAgICB3aGlsZSAocG9zID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gKHBvcyAtIDEpID4+IDE7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGF0YVtwYXJlbnRdO1xuICAgICAgICAgICAgaWYgKGNvbXBhcmUoaXRlbSwgY3VycmVudCkgPj0gMCkgYnJlYWs7XG4gICAgICAgICAgICBkYXRhW3Bvc10gPSBjdXJyZW50O1xuICAgICAgICAgICAgcG9zID0gcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtwb3NdID0gaXRlbTtcbiAgICB9XG5cbiAgICBfZG93bihwb3MpIHtcbiAgICAgICAgY29uc3Qge2RhdGEsIGNvbXBhcmV9ID0gdGhpcztcbiAgICAgICAgY29uc3QgaGFsZkxlbmd0aCA9IHRoaXMubGVuZ3RoID4+IDE7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhW3Bvc107XG5cbiAgICAgICAgd2hpbGUgKHBvcyA8IGhhbGZMZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBsZWZ0ID0gKHBvcyA8PCAxKSArIDE7XG4gICAgICAgICAgICBsZXQgYmVzdCA9IGRhdGFbbGVmdF07XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGxlZnQgKyAxO1xuXG4gICAgICAgICAgICBpZiAocmlnaHQgPCB0aGlzLmxlbmd0aCAmJiBjb21wYXJlKGRhdGFbcmlnaHRdLCBiZXN0KSA8IDApIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgYmVzdCA9IGRhdGFbcmlnaHRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBhcmUoYmVzdCwgaXRlbSkgPj0gMCkgYnJlYWs7XG5cbiAgICAgICAgICAgIGRhdGFbcG9zXSA9IGJlc3Q7XG4gICAgICAgICAgICBwb3MgPSBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtwb3NdID0gaXRlbTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG59XG4iLCJjb25zdCB7TWF0Y2hlcn0gPSByZXF1aXJlKCcuL2ltYWdlLXRhcmdldC9tYXRjaGluZy9tYXRjaGVyLmpzJyk7XG5jb25zdCB7cmVmaW5lSG9tb2dyYXBoeX0gPSByZXF1aXJlKCcuL2ltYWdlLXRhcmdldC9pY3AvcmVmaW5lX2hvbW9ncmFwaHkuanMnKTtcbmNvbnN0IHtlc3RpbWF0ZUhvbW9ncmFwaHl9ID0gcmVxdWlyZSgnLi9pbWFnZS10YXJnZXQvaWNwL2VzdGltYXRlX2hvbW9ncmFwaHkuanMnKTtcblxuLy9jb25zdCBBUjJfVFJBQ0tJTkdfVEhSRVNIID0gNS4wOyAvLyBkZWZhdWx0XG5jb25zdCBBUjJfVFJBQ0tJTkdfVEhSRVNIID0gNS4wOyAvLyBkZWZhdWx0XG5cblxubGV0IHByb2plY3Rpb25UcmFuc2Zvcm0gPSBudWxsO1xubGV0IG1hdGNoaW5nRGF0YUxpc3QgPSBudWxsO1xubGV0IGRlYnVnTW9kZSA9IGZhbHNlO1xubGV0IG1hdGNoZXIgPSBudWxsO1xuXG5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gIGNvbnN0IHtkYXRhfSA9IG1zZztcblxuICBpZiAoZGF0YS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgcHJvamVjdGlvblRyYW5zZm9ybSA9IGRhdGEucHJvamVjdGlvblRyYW5zZm9ybTtcbiAgICBtYXRjaGluZ0RhdGFMaXN0ID0gZGF0YS5tYXRjaGluZ0RhdGFMaXN0O1xuICAgIGRlYnVnTW9kZSA9IGRhdGEuZGVidWdNb2RlO1xuICAgIG1hdGNoZXIgPSBuZXcgTWF0Y2hlcihkYXRhLmlucHV0V2lkdGgsIGRhdGEuaW5wdXRIZWlnaHQsIGRlYnVnTW9kZSk7XG4gIH1cblxuICBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdtYXRjaCcpIHtcbiAgICBjb25zdCBza2lwVGFyZ2V0SW5kZXhlcyA9IGRhdGEuc2tpcFRhcmdldEluZGV4ZXM7XG5cbiAgICBsZXQgbWF0Y2hlZFRhcmdldEluZGV4ID0gLTE7XG4gICAgbGV0IG1hdGNoZWRNb2RlbFZpZXdUcmFuc2Zvcm0gPSBudWxsO1xuICAgIGxldCBkZWJ1Z0V4dHJhcyA9IG51bGw7XG5cbiAgICBpZiAoZGVidWdNb2RlKSB7XG4gICAgICBkZWJ1Z0V4dHJhcyA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hpbmdEYXRhTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNraXBUYXJnZXRJbmRleGVzLmluY2x1ZGVzKGkpKSBjb250aW51ZTtcblxuICAgICAgY29uc3Qge2tleWZyYW1lSW5kZXgsIHNjcmVlbkNvb3Jkcywgd29ybGRDb29yZHMsIGRlYnVnRXh0cmF9ID0gbWF0Y2hlci5tYXRjaERldGVjdGlvbihtYXRjaGluZ0RhdGFMaXN0W2ldLCBkYXRhLmZlYXR1cmVQb2ludHMpO1xuXG4gICAgICBpZiAoZGVidWdNb2RlKSB7XG5cdGRlYnVnRXh0cmFzLnB1c2goZGVidWdFeHRyYSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlmcmFtZUluZGV4ID09PSAtMSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IG1vZGVsVmlld1RyYW5zZm9ybSA9IGVzdGltYXRlSG9tb2dyYXBoeSh7c2NyZWVuQ29vcmRzLCB3b3JsZENvb3JkcywgcHJvamVjdGlvblRyYW5zZm9ybX0pO1xuICAgICAgaWYgKG1vZGVsVmlld1RyYW5zZm9ybSA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgIG1hdGNoZWRUYXJnZXRJbmRleCA9IGk7XG4gICAgICBtYXRjaGVkTW9kZWxWaWV3VHJhbnNmb3JtID0gbW9kZWxWaWV3VHJhbnNmb3JtO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogJ21hdGNoRG9uZScsXG4gICAgICB0YXJnZXRJbmRleDogbWF0Y2hlZFRhcmdldEluZGV4LFxuICAgICAgbW9kZWxWaWV3VHJhbnNmb3JtOiBtYXRjaGVkTW9kZWxWaWV3VHJhbnNmb3JtLFxuICAgICAgZGVidWdFeHRyYXNcbiAgICB9KTtcbiAgfVxuICBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICd0cmFjaycpIHtcbiAgICBjb25zdCB7bW9kZWxWaWV3VHJhbnNmb3JtLCBzZWxlY3RlZEZlYXR1cmVzfSA9IGRhdGE7XG4gICAgY29uc3QgaW5saWVyUHJvYnMgPSBbMS4wLCAwLjgsIDAuNiwgMC40LCAwLjBdO1xuICAgIGxldCBlcnIgPSBudWxsO1xuICAgIGxldCBuZXdNb2RlbFZpZXdUcmFuc2Zvcm0gPSBtb2RlbFZpZXdUcmFuc2Zvcm07XG4gICAgbGV0IGZpbmFsTW9kZWxWaWV3VHJhbnNmb3JtID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubGllclByb2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmV0ID0gX2NvbXB1dGVVcGRhdGVkVHJhbih7bW9kZWxWaWV3VHJhbnNmb3JtOiBuZXdNb2RlbFZpZXdUcmFuc2Zvcm0sIHNlbGVjdGVkRmVhdHVyZXMsIHByb2plY3Rpb25UcmFuc2Zvcm0sIGlubGllclByb2I6IGlubGllclByb2JzW2ldfSk7XG4gICAgICBlcnIgPSByZXQuZXJyO1xuICAgICAgbmV3TW9kZWxWaWV3VHJhbnNmb3JtID0gcmV0Lm5ld01vZGVsVmlld1RyYW5zZm9ybTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJfY29tcHV0ZVVwZGF0ZWRUcmFuXCIsIGVycilcblxuICAgICAgaWYgKGVyciA8IEFSMl9UUkFDS0lOR19USFJFU0gpIHtcbiAgICAgICAgZmluYWxNb2RlbFZpZXdUcmFuc2Zvcm0gPSBuZXdNb2RlbFZpZXdUcmFuc2Zvcm07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICd0cmFja0RvbmUnLFxuICAgICAgbW9kZWxWaWV3VHJhbnNmb3JtOiBmaW5hbE1vZGVsVmlld1RyYW5zZm9ybSxcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgX2NvbXB1dGVVcGRhdGVkVHJhbiA9ICh7bW9kZWxWaWV3VHJhbnNmb3JtLCBwcm9qZWN0aW9uVHJhbnNmb3JtLCBzZWxlY3RlZEZlYXR1cmVzLCBpbmxpZXJQcm9ifSkgPT4ge1xuICBsZXQgZHggPSAwO1xuICBsZXQgZHkgPSAwO1xuICBsZXQgZHogPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICBkeCArPSBzZWxlY3RlZEZlYXR1cmVzW2ldLnBvczNELng7XG4gICAgZHkgKz0gc2VsZWN0ZWRGZWF0dXJlc1tpXS5wb3MzRC55O1xuICAgIGR6ICs9IHNlbGVjdGVkRmVhdHVyZXNbaV0ucG9zM0QuejtcbiAgfVxuICBkeCAvPSBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDtcbiAgZHkgLz0gc2VsZWN0ZWRGZWF0dXJlcy5sZW5ndGg7XG4gIGR6IC89IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoO1xuXG4gIGNvbnN0IHdvcmxkQ29vcmRzID0gW107XG4gIGNvbnN0IHNjcmVlbkNvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzY3JlZW5Db29yZHMucHVzaCh7eDogc2VsZWN0ZWRGZWF0dXJlc1tpXS5wb3MyRC54LCB5OiBzZWxlY3RlZEZlYXR1cmVzW2ldLnBvczJELnl9KTtcbiAgICB3b3JsZENvb3Jkcy5wdXNoKHt4OiBzZWxlY3RlZEZlYXR1cmVzW2ldLnBvczNELnggLSBkeCwgeTogc2VsZWN0ZWRGZWF0dXJlc1tpXS5wb3MzRC55IC0gZHksIHo6IHNlbGVjdGVkRmVhdHVyZXNbaV0ucG9zM0QueiAtIGR6fSk7XG4gIH1cblxuICBjb25zdCBkaWZmTW9kZWxWaWV3VHJhbnNmb3JtID0gW1tdLFtdLFtdXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgZGlmZk1vZGVsVmlld1RyYW5zZm9ybVtqXVtpXSA9IG1vZGVsVmlld1RyYW5zZm9ybVtqXVtpXTtcbiAgICB9XG4gIH1cbiAgZGlmZk1vZGVsVmlld1RyYW5zZm9ybVswXVszXSA9IG1vZGVsVmlld1RyYW5zZm9ybVswXVswXSAqIGR4ICsgbW9kZWxWaWV3VHJhbnNmb3JtWzBdWzFdICogZHkgKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMF1bMl0gKiBkeiArIG1vZGVsVmlld1RyYW5zZm9ybVswXVszXTtcbiAgZGlmZk1vZGVsVmlld1RyYW5zZm9ybVsxXVszXSA9IG1vZGVsVmlld1RyYW5zZm9ybVsxXVswXSAqIGR4ICsgbW9kZWxWaWV3VHJhbnNmb3JtWzFdWzFdICogZHkgKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMV1bMl0gKiBkeiArIG1vZGVsVmlld1RyYW5zZm9ybVsxXVszXTtcbiAgZGlmZk1vZGVsVmlld1RyYW5zZm9ybVsyXVszXSA9IG1vZGVsVmlld1RyYW5zZm9ybVsyXVswXSAqIGR4ICsgbW9kZWxWaWV3VHJhbnNmb3JtWzJdWzFdICogZHkgKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMl1bMl0gKiBkeiArIG1vZGVsVmlld1RyYW5zZm9ybVsyXVszXTtcblxuICBsZXQgcmV0O1xuICBpZiAoaW5saWVyUHJvYiA8IDEpIHtcbiAgICAgcmV0ID0gcmVmaW5lSG9tb2dyYXBoeSh7aW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybTogZGlmZk1vZGVsVmlld1RyYW5zZm9ybSwgcHJvamVjdGlvblRyYW5zZm9ybSwgd29ybGRDb29yZHMsIHNjcmVlbkNvb3JkcywgaXNSb2J1c3RNb2RlOiB0cnVlLCBpbmxpZXJQcm9ifSk7XG4gIH0gZWxzZSB7XG4gICAgIHJldCA9IHJlZmluZUhvbW9ncmFwaHkoe2luaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm06IGRpZmZNb2RlbFZpZXdUcmFuc2Zvcm0sIHByb2plY3Rpb25UcmFuc2Zvcm0sIHdvcmxkQ29vcmRzLCBzY3JlZW5Db29yZHMsIGlzUm9idXN0TW9kZTogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbnN0IG5ld01vZGVsVmlld1RyYW5zZm9ybSA9IFtbXSxbXSxbXV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIG5ld01vZGVsVmlld1RyYW5zZm9ybVtqXVtpXSA9IHJldC5tb2RlbFZpZXdUcmFuc2Zvcm1bal1baV07XG4gICAgfVxuICB9XG4gIG5ld01vZGVsVmlld1RyYW5zZm9ybVswXVszXSA9IHJldC5tb2RlbFZpZXdUcmFuc2Zvcm1bMF1bM10gLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzBdWzBdICogZHggLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzBdWzFdICogZHkgLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzBdWzJdICogZHo7XG4gIG5ld01vZGVsVmlld1RyYW5zZm9ybVsxXVszXSA9IHJldC5tb2RlbFZpZXdUcmFuc2Zvcm1bMV1bM10gLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzFdWzBdICogZHggLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzFdWzFdICogZHkgLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzFdWzJdICogZHo7XG4gIG5ld01vZGVsVmlld1RyYW5zZm9ybVsyXVszXSA9IHJldC5tb2RlbFZpZXdUcmFuc2Zvcm1bMl1bM10gLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzJdWzBdICogZHggLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzJdWzFdICogZHkgLSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzJdWzJdICogZHo7XG5cblxuICByZXR1cm4ge2VycjogcmV0LmVyciwgbmV3TW9kZWxWaWV3VHJhbnNmb3JtfTtcbn07XG4iLCJjb25zdCB7TWF0cml4LCBpbnZlcnNlfSA9IHJlcXVpcmUoJ21sLW1hdHJpeCcpO1xuXG4vLyBidWlsZCB3b3JsZCBtYXRyaXggd2l0aCBsaXN0IG9mIG1hdGNoaW5nIHdvcmxkQ29vcmRzfHNjcmVlbkNvb3Jkc1xuLy9cbi8vIFN0ZXAgMS4gZXN0aW1hdGUgaG9tb2dyYXBoeSB3aXRoIGxpc3Qgb2YgcGFpcnNcbi8vIFJlZjogaHR0cHM6Ly93d3cudWlvLm5vL3N0dWRpZXIvZW1uZXIvbWF0bmF0L2l0cy9URUs1MDMwL3YxOS9sZWN0L2xlY3R1cmVfNF8zLWVzdGltYXRpbmctaG9tb2dyYXBoaWVzLWZyb20tZmVhdHVyZS1jb3JyZXNwb25kZW5jZXMucGRmICAoQmFzaWMgaG9tb2dyYXBoeSBlc3RpbWF0aW9uIGZyb20gcG9pbnRzKVxuLy9cbi8vIFN0ZXAgMi4gZGVjb21wb3NlIGhvbW9ncmFwaHkgaW50byByb3RhdGlvbiBhbmQgdHJhbnNsYXRpb24gbWF0cml4ZXMgKGkuZS4gd29ybGQgbWF0cml4KVxuLy8gUmVmOiBjYW4gYW55b25lIHByb3ZpZGUgcmVmZXJlbmNlP1xuY29uc3QgZXN0aW1hdGVIb21vZ3JhcGh5ID0gKHtzY3JlZW5Db29yZHMsIHdvcmxkQ29vcmRzLCBwcm9qZWN0aW9uVHJhbnNmb3JtfSkgPT4ge1xuICBjb25zdCBudW0gPSBzY3JlZW5Db29yZHMubGVuZ3RoO1xuICBjb25zdCBBRGF0YSA9IFtdO1xuICBjb25zdCBCRGF0YSA9IFtdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XG4gICAgY29uc3Qgcm93MSA9IFtcbiAgICAgIHdvcmxkQ29vcmRzW2pdLngsXG4gICAgICB3b3JsZENvb3Jkc1tqXS55LFxuICAgICAgMSxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIC0od29ybGRDb29yZHNbal0ueCAqIHNjcmVlbkNvb3Jkc1tqXS54KSxcbiAgICAgIC0od29ybGRDb29yZHNbal0ueSAqIHNjcmVlbkNvb3Jkc1tqXS54KSxcbiAgICBdO1xuICAgIGNvbnN0IHJvdzIgPSBbXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB3b3JsZENvb3Jkc1tqXS54LFxuICAgICAgd29ybGRDb29yZHNbal0ueSxcbiAgICAgIDEsXG4gICAgICAtKHdvcmxkQ29vcmRzW2pdLnggKiBzY3JlZW5Db29yZHNbal0ueSksXG4gICAgICAtKHdvcmxkQ29vcmRzW2pdLnkgKiBzY3JlZW5Db29yZHNbal0ueSksXG4gICAgXTtcbiAgICBBRGF0YS5wdXNoKHJvdzEpO1xuICAgIEFEYXRhLnB1c2gocm93Mik7XG5cbiAgICBCRGF0YS5wdXNoKFtzY3JlZW5Db29yZHNbal0ueF0pO1xuICAgIEJEYXRhLnB1c2goW3NjcmVlbkNvb3Jkc1tqXS55XSk7XG4gIH1cblxuICBjb25zdCBBID0gbmV3IE1hdHJpeChBRGF0YSk7XG4gIGNvbnN0IEIgPSBuZXcgTWF0cml4KEJEYXRhKTtcbiAgY29uc3QgQVQgPSBBLnRyYW5zcG9zZSgpO1xuICBjb25zdCBBVEEgPSBBVC5tbXVsKEEpO1xuICBjb25zdCBBVEIgPSBBVC5tbXVsKEIpO1xuICBjb25zdCBBVEFJbnYgPSBpbnZlcnNlKEFUQSk7XG4gIGNvbnN0IEMgPSBBVEFJbnYubW11bChBVEIpLnRvMURBcnJheSgpO1xuXG4gIGNvbnN0IEggPSBuZXcgTWF0cml4KFtcbiAgICBbQ1swXSwgQ1sxXSwgQ1syXV0sXG4gICAgW0NbM10sIENbNF0sIENbNV1dLFxuICAgIFtDWzZdLCBDWzddLCAxXVxuICBdKTtcblxuICBjb25zdCBLID0gbmV3IE1hdHJpeChwcm9qZWN0aW9uVHJhbnNmb3JtKTtcbiAgY29uc3QgS0ludiA9IGludmVyc2UoSyk7XG5cbiAgY29uc3QgX0tJbnZIID0gS0ludi5tbXVsKEgpO1xuICBjb25zdCBLSW52SCA9IF9LSW52SC50bzFEQXJyYXkoKTtcblxuICBjb25zdCBub3JtMSA9IE1hdGguc3FydCggS0ludkhbMF0gKiBLSW52SFswXSArIEtJbnZIWzNdICogS0ludkhbM10gKyBLSW52SFs2XSAqIEtJbnZIWzZdKTtcbiAgY29uc3Qgbm9ybTIgPSBNYXRoLnNxcnQoIEtJbnZIWzFdICogS0ludkhbMV0gKyBLSW52SFs0XSAqIEtJbnZIWzRdICsgS0ludkhbN10gKiBLSW52SFs3XSk7XG4gIGNvbnN0IHRub3JtID0gKG5vcm0xICsgbm9ybTIpIC8gMjtcblxuICBjb25zdCByb3RhdGUgPSBbXTtcbiAgcm90YXRlWzBdID0gS0ludkhbMF0gLyBub3JtMTtcbiAgcm90YXRlWzNdID0gS0ludkhbM10gLyBub3JtMTtcbiAgcm90YXRlWzZdID0gS0ludkhbNl0gLyBub3JtMTtcblxuICByb3RhdGVbMV0gPSBLSW52SFsxXSAvIG5vcm0yO1xuICByb3RhdGVbNF0gPSBLSW52SFs0XSAvIG5vcm0yO1xuICByb3RhdGVbN10gPSBLSW52SFs3XSAvIG5vcm0yO1xuXG4gIHJvdGF0ZVsyXSA9IHJvdGF0ZVszXSAqIHJvdGF0ZVs3XSAtIHJvdGF0ZVs2XSAqIHJvdGF0ZVs0XTtcbiAgcm90YXRlWzVdID0gcm90YXRlWzZdICogcm90YXRlWzFdIC0gcm90YXRlWzBdICogcm90YXRlWzddO1xuICByb3RhdGVbOF0gPSByb3RhdGVbMF0gKiByb3RhdGVbNF0gLSByb3RhdGVbMV0gKiByb3RhdGVbM107XG5cbiAgY29uc3Qgbm9ybTMgPSBNYXRoLnNxcnQocm90YXRlWzJdICogcm90YXRlWzJdICsgcm90YXRlWzVdICogcm90YXRlWzVdICsgcm90YXRlWzhdICogcm90YXRlWzhdKTtcbiAgcm90YXRlWzJdIC89IG5vcm0zO1xuICByb3RhdGVbNV0gLz0gbm9ybTM7XG4gIHJvdGF0ZVs4XSAvPSBub3JtMztcblxuICAvLyBUT0RPOiBhcnRvb2xraXQgaGFzIGNoZWNrX3JvdGF0aW9uKCkgdGhhdCBzb21laG93IHN3aXRjaCB0aGUgcm90YXRlIHZlY3Rvci4gbm90IHN1cmUgd2hhdCB0aGF0IGRvZXMuIENhbiBhbnlvbmUgYWR2aWNlP1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXJ0b29sa2l0eC9hcnRvb2xraXQ1L2Jsb2IvNWJmMGI2NzFmZjE2ZWFkNTI3YjliODkyZTZhZWIxYTI3NzFmOTdiZS9saWIvU1JDL0FSSUNQL2ljcFV0aWwuYyNMMjE1XG5cbiAgY29uc3QgdHJhbiA9IFtdXG4gIHRyYW5bMF0gPSBLSW52SFsyXSAvIHRub3JtO1xuICB0cmFuWzFdID0gS0ludkhbNV0gLyB0bm9ybTtcbiAgdHJhblsyXSA9IEtJbnZIWzhdIC8gdG5vcm07XG5cbiAgbGV0IGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm0gPSBbXG4gICAgW3JvdGF0ZVswXSwgcm90YXRlWzFdLCByb3RhdGVbMl0sIHRyYW5bMF1dLFxuICAgIFtyb3RhdGVbM10sIHJvdGF0ZVs0XSwgcm90YXRlWzVdLCB0cmFuWzFdXSxcbiAgICBbcm90YXRlWzZdLCByb3RhdGVbN10sIHJvdGF0ZVs4XSwgdHJhblsyXV1cbiAgXTtcblxuICByZXR1cm4gaW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlc3RpbWF0ZUhvbW9ncmFwaHlcbn1cbiIsImNvbnN0IHtNYXRyaXgsIGludmVyc2V9ID0gcmVxdWlyZSgnbWwtbWF0cml4Jyk7XG5jb25zdCB7YXBwbHlNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCBidWlsZE1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIGNvbXB1dGVTY3JlZW5Db29yZGlhdGV9ID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuXG4vLyBUT0RPOiB0aGUgZXJyb3IgY29tcHV0YXRpb24gc2VlbXMgcHJvYmxlbWF0aWMuIHNob3VsZCBpdCBiZSByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiBkZXRlY3Rpb24/XG4vLyAgICAgICBub3cgdGhlIHZhbHVlcyBhcmUgaGFyZGNvZGVkLCBlLmcuIEsyX0ZhY3RvciA9IDRcbmNvbnN0IEsyX0ZBQ1RPUiA9IDQuMDtcbmNvbnN0IElDUF9NQVhfTE9PUCA9IDEwO1xuY29uc3QgSUNQX0JSRUFLX0xPT1BfRVJST1JfVEhSRVNIID0gMC4xO1xuY29uc3QgSUNQX0JSRUFLX0xPT1BfRVJST1JfUkFUSU9fVEhSRVNIID0gMC45OTtcbmNvbnN0IElDUF9CUkVBS19MT09QX0VSUk9SX1RIUkVTSDIgPSA0LjA7XG5cbi8vIElDUCBpdGVyYXRpb24gd2l0aCBwb2ludHNcbi8vIENhbiBzb21lb25lIHByb3ZpZGUgdGhlb3JldGljYWwgcmVmZXJlbmNlP1xuY29uc3QgcmVmaW5lSG9tb2dyYXBoeSA9ICh7aW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybSwgcHJvamVjdGlvblRyYW5zZm9ybSwgd29ybGRDb29yZHMsIHNjcmVlbkNvb3JkcywgaXNSb2J1c3RNb2RlLCBpbmxpZXJQcm9ifSkgPT4ge1xuICBsZXQgbW9kZWxWaWV3VHJhbnNmb3JtID0gaW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybTtcblxuICBsZXQgZXJyMCA9IDAuMDtcbiAgbGV0IGVycjEgPSAwLjA7XG4gIGZvciAobGV0IGwgPSAwOyBsIDw9IElDUF9NQVhfTE9PUDsgbCsrKSB7XG5cbiAgICBjb25zdCBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtID0gYnVpbGRNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtKHByb2plY3Rpb25UcmFuc2Zvcm0sIG1vZGVsVmlld1RyYW5zZm9ybSk7XG5cbiAgICBjb25zdCBFID0gW107XG4gICAgY29uc3QgZHhzID0gW107XG4gICAgY29uc3QgZHlzID0gW107XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3JsZENvb3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgY29uc3QgdSA9IGNvbXB1dGVTY3JlZW5Db29yZGlhdGUobW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgd29ybGRDb29yZHNbbl0ueCwgd29ybGRDb29yZHNbbl0ueSwgd29ybGRDb29yZHNbbl0ueik7XG4gICAgICBjb25zdCBkeCA9IHNjcmVlbkNvb3Jkc1tuXS54IC0gdS54O1xuICAgICAgY29uc3QgZHkgPSBzY3JlZW5Db29yZHNbbl0ueSAtIHUueTtcbiAgICAgIGR4cy5wdXNoKGR4KTtcbiAgICAgIGR5cy5wdXNoKGR5KTtcbiAgICAgIEUucHVzaChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgbGV0IEsyOyAvLyByb2J1c3QgbW9kZSBvbmx5XG4gICAgZXJyMSA9IDAuMDtcbiAgICBpZiAoaXNSb2J1c3RNb2RlKSB7XG4gICAgICBjb25zdCBpbmxpZXJOdW0gPSBNYXRoLm1heCgzLCBNYXRoLmZsb29yKHdvcmxkQ29vcmRzLmxlbmd0aCAqIGlubGllclByb2IpIC0gMSk7XG4gICAgICBjb25zdCBFMiA9IFtdOyAvLyBmb3Igcm9idXN0IG1vZGUgb25seVxuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3JsZENvb3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBFMi5wdXNoKEVbbl0pO1xuICAgICAgfVxuICAgICAgRTIuc29ydCgoYSwgYikgPT4ge3JldHVybiBhLWI7fSk7XG5cblxuICAgICAgSzIgPSBNYXRoLm1heChFMltpbmxpZXJOdW1dICogSzJfRkFDVE9SLCAxNi4wKTtcbiAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgd29ybGRDb29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgaWYgKEUyW25dID4gSzIpIGVycjEgKz0gSzIvIDY7XG4gICAgICAgIGVsc2UgZXJyMSArPSAgSzIvNi4wICogKDEuMCAtICgxLjAtRTJbbl0vSzIpKigxLjAtRTJbbl0vSzIpKigxLjAtRTJbbl0vSzIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3JsZENvb3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBlcnIxICs9IEVbbl07XG4gICAgICB9XG4gICAgfVxuICAgIGVycjEgLz0gd29ybGRDb29yZHMubGVuZ3RoO1xuXG4gICAgaWYgKGVycjEgPCBJQ1BfQlJFQUtfTE9PUF9FUlJPUl9USFJFU0gpIGJyZWFrO1xuICAgIGlmIChsID4gMCAmJiBlcnIxIDwgSUNQX0JSRUFLX0xPT1BfRVJST1JfVEhSRVNIMiAmJiBlcnIxL2VycjAgPiBJQ1BfQlJFQUtfTE9PUF9FUlJPUl9SQVRJT19USFJFU0gpIGJyZWFrO1xuICAgIGlmIChsID09PSBJQ1BfTUFYX0xPT1ApIGJyZWFrO1xuXG4gICAgZXJyMCA9IGVycjE7XG5cbiAgICBjb25zdCBkVSA9IFtdO1xuICAgIGNvbnN0IGFsbEpfVV9TID0gW107XG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3JsZENvb3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgaWYgKGlzUm9idXN0TW9kZSAmJiBFW25dID4gSzIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IEpfVV9TID0gX2dldEpfVV9TKHttb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCBtb2RlbFZpZXdUcmFuc2Zvcm0sIHByb2plY3Rpb25UcmFuc2Zvcm0sIHdvcmxkQ29vcmQ6IHdvcmxkQ29vcmRzW25dfSk7XG5cbiAgICAgIGlmIChpc1JvYnVzdE1vZGUpIHtcbiAgICAgICAgY29uc3QgVyA9ICgxLjAgLSBFW25dL0syKSooMS4wIC0gRVtuXS9LMik7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgSl9VX1Nbal1baV0gKj0gVztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZFUucHVzaChbZHhzW25dICogV10pO1xuICAgICAgICBkVS5wdXNoKFtkeXNbbl0gKiBXXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkVS5wdXNoKFtkeHNbbl1dKTtcbiAgICAgICAgZFUucHVzaChbZHlzW25dXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSl9VX1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWxsSl9VX1MucHVzaChKX1VfU1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZFMgPSBfZ2V0RGVsdGFTKHtkVSwgSl9VX1M6IGFsbEpfVV9TfSk7XG4gICAgaWYgKGRTID09PSBudWxsKSBicmVhaztcblxuICAgIG1vZGVsVmlld1RyYW5zZm9ybSA9IF91cGRhdGVNb2RlbFZpZXdUcmFuc2Zvcm0oe21vZGVsVmlld1RyYW5zZm9ybSwgZFN9KTtcbiAgfVxuICByZXR1cm4ge21vZGVsVmlld1RyYW5zZm9ybSwgZXJyOiBlcnIxfTtcbn1cblxuX3VwZGF0ZU1vZGVsVmlld1RyYW5zZm9ybSA9ICh7bW9kZWxWaWV3VHJhbnNmb3JtLCBkU30pID0+IHtcbiAgY29uc3QgcSA9IFtdO1xuICBsZXQgcmEgPSBkU1swXSAqIGRTWzBdICsgZFNbMV0gKiBkU1sxXSArIGRTWzJdICogZFNbMl07XG4gIGlmKCByYSA8IDAuMDAwMDAxICkge1xuICAgIHFbMF0gPSAxLjA7XG4gICAgcVsxXSA9IDAuMDtcbiAgICBxWzJdID0gMC4wO1xuICAgIHFbM10gPSAwLjA7XG4gIH0gZWxzZSB7XG4gICAgcmEgPSBNYXRoLnNxcnQocmEpO1xuICAgIHFbMF0gPSBkU1swXSAvIHJhO1xuICAgIHFbMV0gPSBkU1sxXSAvIHJhO1xuICAgIHFbMl0gPSBkU1syXSAvIHJhO1xuICAgIHFbM10gPSByYTtcbiAgfVxuICBxWzRdID0gZFNbM107XG4gIHFbNV0gPSBkU1s0XTtcbiAgcVs2XSA9IGRTWzVdO1xuXG4gIGNvbnN0IGNyYSA9IE1hdGguY29zKHFbM10pO1xuICBjb25zdCBvbmVfY3JhID0gMS4wIC0gY3JhO1xuICBjb25zdCBzcmEgPSBNYXRoLnNpbihxWzNdKTtcbiAgY29uc3QgbWF0ID0gW1tdLFtdLFtdXTtcblxuICBtYXRbMF1bMF0gPSBxWzBdKnFbMF0qb25lX2NyYSArIGNyYTtcbiAgbWF0WzBdWzFdID0gcVswXSpxWzFdKm9uZV9jcmEgLSBxWzJdKnNyYTtcbiAgbWF0WzBdWzJdID0gcVswXSpxWzJdKm9uZV9jcmEgKyBxWzFdKnNyYTtcbiAgbWF0WzBdWzNdID0gcVs0XTtcbiAgbWF0WzFdWzBdID0gcVsxXSpxWzBdKm9uZV9jcmEgKyBxWzJdKnNyYTtcbiAgbWF0WzFdWzFdID0gcVsxXSpxWzFdKm9uZV9jcmEgKyBjcmE7XG4gIG1hdFsxXVsyXSA9IHFbMV0qcVsyXSpvbmVfY3JhIC0gcVswXSpzcmE7XG4gIG1hdFsxXVszXSA9IHFbNV07XG4gIG1hdFsyXVswXSA9IHFbMl0qcVswXSpvbmVfY3JhIC0gcVsxXSpzcmE7XG4gIG1hdFsyXVsxXSA9IHFbMl0qcVsxXSpvbmVfY3JhICsgcVswXSpzcmE7XG4gIG1hdFsyXVsyXSA9IHFbMl0qcVsyXSpvbmVfY3JhICsgY3JhO1xuICBtYXRbMl1bM10gPSBxWzZdO1xuXG4gIGNvbnN0IG1hdDIgPSBbW10sW10sW11dO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKyApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKyApIHtcbiAgICAgIG1hdDJbal1baV0gPSBtb2RlbFZpZXdUcmFuc2Zvcm1bal1bMF0gKiBtYXRbMF1baV1cbiAgICAgICAgICAgICAgICAgICArIG1vZGVsVmlld1RyYW5zZm9ybVtqXVsxXSAqIG1hdFsxXVtpXVxuICAgICAgICAgICAgICAgICAgICsgbW9kZWxWaWV3VHJhbnNmb3JtW2pdWzJdICogbWF0WzJdW2ldO1xuICAgIH1cbiAgICBtYXQyW2pdWzNdICs9IG1vZGVsVmlld1RyYW5zZm9ybVtqXVszXTtcbiAgfVxuICByZXR1cm4gbWF0Mjtcbn1cblxuX2dldERlbHRhUyA9ICh7ZFUsIEpfVV9TfSkgPT4ge1xuICBjb25zdCBKID0gbmV3IE1hdHJpeChKX1VfUyk7XG4gIGNvbnN0IFUgPSBuZXcgTWF0cml4KGRVKTtcblxuICBjb25zdCBKVCA9IEoudHJhbnNwb3NlKCk7XG4gIGNvbnN0IEpUSiA9IEpULm1tdWwoSik7XG4gIGNvbnN0IEpUVSA9IEpULm1tdWwoVSk7XG5cbiAgbGV0IEpUSkludjtcbiAgdHJ5IHtcbiAgICBKVEpJbnYgPSBpbnZlcnNlKEpUSik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IFMgPSBKVEpJbnYubW11bChKVFUpO1xuICByZXR1cm4gUy50bzFEQXJyYXkoKTtcbn1cblxuX2dldEpfVV9TID0gKHttb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCBtb2RlbFZpZXdUcmFuc2Zvcm0sIHByb2plY3Rpb25UcmFuc2Zvcm0sIHdvcmxkQ29vcmR9KSA9PiB7XG4gIGNvbnN0IFQgPSBtb2RlbFZpZXdUcmFuc2Zvcm07XG4gIGNvbnN0IHt4LCB5LCB6fSA9IHdvcmxkQ29vcmQ7XG5cbiAgY29uc3QgdSA9IGFwcGx5TW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybShtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCB4LCB5LCB6KTtcblxuICBjb25zdCB6MiA9IHUueiAqIHUuejtcbiAgY29uc3QgSl9VX1hjID0gW1tdLFtdXTtcbiAgSl9VX1hjWzBdWzBdID0gKHByb2plY3Rpb25UcmFuc2Zvcm1bMF1bMF0gKiB1LnogLSBwcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzBdICogdS54KSAvIHoyO1xuICBKX1VfWGNbMF1bMV0gPSAocHJvamVjdGlvblRyYW5zZm9ybVswXVsxXSAqIHUueiAtIHByb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiB1LngpIC8gejI7XG4gIEpfVV9YY1swXVsyXSA9IChwcm9qZWN0aW9uVHJhbnNmb3JtWzBdWzJdICogdS56IC0gcHJvamVjdGlvblRyYW5zZm9ybVsyXVsyXSAqIHUueCkgLyB6MjtcbiAgSl9VX1hjWzFdWzBdID0gKHByb2plY3Rpb25UcmFuc2Zvcm1bMV1bMF0gKiB1LnogLSBwcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzBdICogdS55KSAvIHoyO1xuICBKX1VfWGNbMV1bMV0gPSAocHJvamVjdGlvblRyYW5zZm9ybVsxXVsxXSAqIHUueiAtIHByb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiB1LnkpIC8gejI7XG4gIEpfVV9YY1sxXVsyXSA9IChwcm9qZWN0aW9uVHJhbnNmb3JtWzFdWzJdICogdS56IC0gcHJvamVjdGlvblRyYW5zZm9ybVsyXVsyXSAqIHUueSkgLyB6MjtcblxuICBjb25zdCBKX1hjX1MgPSBbXG4gICAgW1RbMF1bMl0gKiB5IC0gVFswXVsxXSAqIHosIFRbMF1bMF0gKiB6IC0gVFswXVsyXSAqIHgsIFRbMF1bMV0gKiB4IC0gVFswXVswXSAqIHksIFRbMF1bMF0sIFRbMF1bMV0sIFRbMF1bMl1dLFxuICAgIFtUWzFdWzJdICogeSAtIFRbMV1bMV0gKiB6LCBUWzFdWzBdICogeiAtIFRbMV1bMl0gKiB4LCBUWzFdWzFdICogeCAtIFRbMV1bMF0gKiB5LCBUWzFdWzBdLCBUWzFdWzFdLCBUWzFdWzJdXSxcbiAgICBbVFsyXVsyXSAqIHkgLSBUWzJdWzFdICogeiwgVFsyXVswXSAqIHogLSBUWzJdWzJdICogeCwgVFsyXVsxXSAqIHggLSBUWzJdWzBdICogeSwgVFsyXVswXSwgVFsyXVsxXSwgVFsyXVsyXV0sXG4gIF07XG5cbiAgY29uc3QgSl9VX1MgPSBbW10sIFtdXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgSl9VX1Nbal1baV0gPSAwLjA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKyApIHtcbiAgICAgICAgSl9VX1Nbal1baV0gKz0gSl9VX1hjW2pdW2tdICogSl9YY19TW2tdW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gSl9VX1M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWZpbmVIb21vZ3JhcGh5XG59XG4iLCJjb25zdCBidWlsZE1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0gPSAocHJvamVjdGlvblRyYW5zZm9ybSwgbW9kZWxWaWV3VHJhbnNmb3JtKSA9PiB7XG4gIGNvbnN0IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0gPSBbW10sW10sW11dO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKyApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVtqXVtpXSA9IHByb2plY3Rpb25UcmFuc2Zvcm1bal1bMF0gKiBtb2RlbFZpZXdUcmFuc2Zvcm1bMF1baV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwcm9qZWN0aW9uVHJhbnNmb3JtW2pdWzFdICogbW9kZWxWaWV3VHJhbnNmb3JtWzFdW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgcHJvamVjdGlvblRyYW5zZm9ybVtqXVsyXSAqIG1vZGVsVmlld1RyYW5zZm9ybVsyXVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm07XG59XG5cbmNvbnN0IGFwcGx5TW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSA9IChtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCB4LCB5LCB6KSA9PiB7XG4gIGNvbnN0IHV4ID0gbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVswXVswXSAqIHggKyBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzBdWzFdICogeVxuICAgICArIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bMl0gKiB6ICsgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVswXVszXTtcbiAgY29uc3QgdXkgPSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzFdWzBdICogeCArIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bMV0gKiB5XG4gICAgICsgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVsxXVsyXSAqIHogKyBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzFdWzNdO1xuICBjb25zdCB1eiAgPSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzBdICogeCArIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiB5XG4gICAgICsgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVsyXVsyXSAqIHogKyBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzNdO1xuICByZXR1cm4ge3g6IHV4LCB5OiB1eSwgejogdXp9O1xufVxuXG5jb25zdCBjb21wdXRlU2NyZWVuQ29vcmRpYXRlID0gKG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIHgsIHksIHopID0+IHtcbiAgY29uc3Qge3g6IHV4LCB5OiB1eSwgejogdXp9ID0gYXBwbHlNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtKG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIHgsIHksIHopO1xuICBpZiggTWF0aC5hYnModXopIDwgMC4wMDAwMDEgKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHt4OiB1eC91eiwgeTogdXkvdXp9O1xufVxuXG5jb25zdCBzY3JlZW5Ub01hcmtlckNvb3JkaW5hdGUgPSAobW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgc3gsIHN5KSA9PiB7XG4gIGNvbnN0IGMxMSA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMF0gKiBzeCAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bMF07XG4gIGNvbnN0IGMxMiA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiBzeCAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bMV07XG4gIGNvbnN0IGMyMSA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMF0gKiBzeSAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bMF07XG4gIGNvbnN0IGMyMiA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiBzeSAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bMV07XG4gIGNvbnN0IGIxICA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bM10gLSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzNdICogc3g7XG4gIGNvbnN0IGIyICA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bM10gLSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzNdICogc3k7XG5cbiAgY29uc3QgbSA9IGMxMSAqIGMyMiAtIGMxMiAqIGMyMTtcbiAgcmV0dXJuIHtcbiAgICB4OiAoYzIyICogYjEgLSBjMTIgKiBiMikgLyBtLFxuICAgIHk6IChjMTEgKiBiMiAtIGMyMSAqIGIxKSAvIG1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2NyZWVuVG9NYXJrZXJDb29yZGluYXRlLFxuICBidWlsZE1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sXG4gIGFwcGx5TW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSxcbiAgY29tcHV0ZVNjcmVlbkNvb3JkaWF0ZVxufVxuIiwiLy8gRmFzdCBjb21wdXRhdGlvbiBvbiBudW1iZXIgb2YgYml0IHNldHNcbi8vIFJlZjogaHR0cHM6Ly9ncmFwaGljcy5zdGFuZm9yZC5lZHUvfnNlYW5kZXIvYml0aGFja3MuaHRtbCNDb3VudEJpdHNTZXRQYXJhbGxlbFxuY29uc3QgY29tcHV0ZSA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHt2MSwgdjJ9ID0gb3B0aW9ucztcbiAgbGV0IGQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHYxLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHggPSAodjFbaV0gXiB2MltpXSkgPj4+IDA7XG4gICAgZCArPSBiaXRDb3VudCh4KTtcbiAgfVxuICByZXR1cm4gZDtcbn1cblxuY29uc3QgYml0Q291bnQgPSAodikgPT4ge1xuICB2YXIgYyA9IHYgLSAoKHYgPj4gMSkgJiAweDU1NTU1NTU1KTtcbiAgYyA9ICgoYyA+PiAyKSAmIDB4MzMzMzMzMzMpICsgKGMgJiAweDMzMzMzMzMzKTtcbiAgYyA9ICgoYyA+PiA0KSArIGMpICYgMHgwRjBGMEYwRjtcbiAgYyA9ICgoYyA+PiA4KSArIGMpICYgMHgwMEZGMDBGRjtcbiAgYyA9ICgoYyA+PiAxNikgKyBjKSAmIDB4MDAwMEZGRkY7XG4gIHJldHVybiBjO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcHV0ZVxufTtcbiIsImNvbnN0IHtjcmVhdGVSYW5kb21pemVyfSA9IHJlcXVpcmUoJy4uL3V0aWxzL3JhbmRvbWl6ZXIuanMnKTtcbmNvbnN0IHtxdWFkcmlsYXRlcmFsQ29udmV4LCBtYXRyaXhJbnZlcnNlMzMsIHNtYWxsZXN0VHJpYW5nbGVBcmVhLCBtdWx0aXBseVBvaW50SG9tb2dyYXBoeUluaG9tb2dlbm91cywgY2hlY2tUaHJlZVBvaW50c0NvbnNpc3RlbnQsIGNoZWNrRm91clBvaW50c0NvbnNpc3RlbnQsIGRldGVybWluYW50fSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dlb21ldHJ5LmpzJyk7XG5cbmNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMDAwMDAwMDE7XG5jb25zdCBTUVJUMiA9IDEuNDE0MjEzNTYyMzczMDk1MDQ4ODA7XG5jb25zdCBIT01PR1JBUEhZX0RFRkFVTFRfQ0FVQ0hZX1NDQUxFID0gMC4wMTtcbmNvbnN0IEhPTU9HUkFQSFlfREVGQVVMVF9OVU1fSFlQT1RIRVNFUyA9IDEwMjQ7XG4vL2NvbnN0IEhPTU9HUkFQSFlfREVGQVVMVF9NQVhfVFJJQUxTID0gMTA2NDtcbmNvbnN0IEhPTU9HUkFQSFlfREVGQVVMVF9NQVhfVFJJQUxTID0gMTAwO1xuY29uc3QgSE9NT0dSQVBIWV9ERUZBVUxUX0NIVU5LX1NJWkUgPSA1MDtcblxuLy8gdGVzdFBvaW50cyBpcyBmb3VyIGNvcm5lcnMgb2Yga2V5ZnJhbWVcbmNvbnN0IGNvbXB1dGVIb21vZ3JhcGh5ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge3NyY1BvaW50cywgZHN0UG9pbnRzLCBrZXlmcmFtZX0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRlc3RQb2ludHMgPSBbXG4gICAgWzAsIDBdLFxuICAgIFtrZXlmcmFtZS53aWR0aCwgMF0sXG4gICAgW2tleWZyYW1lLndpZHRoLCBrZXlmcmFtZS5oZWlnaHRdLFxuICAgIFswLCBrZXlmcmFtZS5oZWlnaHRdXG4gIF1cblxuICBjb25zdCBzYW1wbGVTaXplID0gNDsgLy8gdXNlIGZvdXIgcG9pbnRzIHRvIGNvbXB1dGUgaG9tb2dyYXBoeVxuICBpZiAoc3JjUG9pbnRzLmxlbmd0aCA8IHNhbXBsZVNpemUpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNjYWxlID0gSE9NT0dSQVBIWV9ERUZBVUxUX0NBVUNIWV9TQ0FMRTtcbiAgY29uc3Qgb25lT3ZlclNjYWxlMiA9IDEuMCAvIChzY2FsZSAqIHNjYWxlKTtcbiAgY29uc3QgY2h1Y2tTaXplID0gTWF0aC5taW4oSE9NT0dSQVBIWV9ERUZBVUxUX0NIVU5LX1NJWkUsIHNyY1BvaW50cy5sZW5ndGgpO1xuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjcmVhdGVSYW5kb21pemVyKCk7XG5cbiAgY29uc3QgcGVybSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY1BvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIHBlcm1baV0gPSBpO1xuICB9XG5cbiAgcmFuZG9taXplci5hcnJheVNodWZmbGUoe2FycjogcGVybSwgc2FtcGxlU2l6ZTogcGVybS5sZW5ndGh9KTtcblxuICAvLyBidWlsZCBudW1lcm91cyBoeXBvdGhlc2VzIGJ5IHJhbmRvbWluZyBkcmF3IGZvdXIgcG9pbnRzXG4gIC8vIFRPRE86IG9wdGltaXplOiBpZiBudW1iZXIgb2YgcG9pbnRzIGlzIGxlc3MgdGhhbiBjZXJ0YWluIG51bWJlciwgY2FuIGJydXRlIGZvcmNlIGFsbCBjb21iaW5hdGlvbnNcbiAgbGV0IHRyaWFsID0gMDtcbiAgY29uc3QgSHMgPSBbXTtcbiAgd2hpbGUgKHRyaWFsIDwgSE9NT0dSQVBIWV9ERUZBVUxUX01BWF9UUklBTFMgJiYgSHMubGVuZ3RoIDwgSE9NT0dSQVBIWV9ERUZBVUxUX05VTV9IWVBPVEhFU0VTKSB7XG5cbiAgICByYW5kb21pemVyLmFycmF5U2h1ZmZsZSh7YXJyOiBwZXJtLCBzYW1wbGVTaXplOiBzYW1wbGVTaXplfSk7XG5cbiAgICB0cmlhbCArPTE7XG5cbiAgICBpZiAoIWNoZWNrRm91clBvaW50c0NvbnNpc3RlbnQoXG4gICAgICBzcmNQb2ludHNbcGVybVswXV0sIHNyY1BvaW50c1twZXJtWzFdXSwgc3JjUG9pbnRzW3Blcm1bMl1dLCBzcmNQb2ludHNbcGVybVszXV0sXG4gICAgICBkc3RQb2ludHNbcGVybVswXV0sIGRzdFBvaW50c1twZXJtWzFdXSwgZHN0UG9pbnRzW3Blcm1bMl1dLCBkc3RQb2ludHNbcGVybVszXV0pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBIID0gX3NvbHZlSG9tb2dyYXBoeUZvdXJQb2ludHMoe1xuICAgICAgc3JjUG9pbnRzOiBbc3JjUG9pbnRzW3Blcm1bMF1dLCBzcmNQb2ludHNbcGVybVsxXV0sIHNyY1BvaW50c1twZXJtWzJdXSwgc3JjUG9pbnRzW3Blcm1bM11dXSxcbiAgICAgIGRzdFBvaW50czogW2RzdFBvaW50c1twZXJtWzBdXSwgZHN0UG9pbnRzW3Blcm1bMV1dLCBkc3RQb2ludHNbcGVybVsyXV0sIGRzdFBvaW50c1twZXJtWzNdXV0sXG4gICAgfSk7XG5cbiAgICBpZiAoSCA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICBpZighX2NoZWNrSG9tb2dyYXBoeVBvaW50c0dlb21ldHJpY2FsbHlDb25zaXN0ZW50KHtILCB0ZXN0UG9pbnRzfSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIEhzLnB1c2goSCk7XG4gIH1cblxuICBpZiAoSHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAvLyBwaWNrIHRoZSBiZXN0IGh5cG90aGVzaXNcbiAgY29uc3QgaHlwb3RoZXNlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEhzLmxlbmd0aDsgaSsrKSB7XG4gICAgaHlwb3RoZXNlcy5wdXNoKHtcbiAgICAgIEg6IEhzW2ldLFxuICAgICAgY29zdDogMFxuICAgIH0pXG4gIH1cblxuICBsZXQgY3VyQ2h1Y2tTaXplID0gY2h1Y2tTaXplO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY1BvaW50cy5sZW5ndGggJiYgaHlwb3RoZXNlcy5sZW5ndGggPiAyOyBpICs9IGN1ckNodWNrU2l6ZSkge1xuICAgIGN1ckNodWNrU2l6ZSA9IE1hdGgubWluKGNodWNrU2l6ZSwgc3JjUG9pbnRzLmxlbmd0aCAtIGkpO1xuICAgIGxldCBjaHVja0VuZCA9IGkgKyBjdXJDaHVja1NpemU7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh5cG90aGVzZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSBpOyBrIDwgY2h1Y2tFbmQ7IGsrKykge1xuICAgICAgICBjb25zdCBjb3N0ID0gX2NhdWNoeVByb2plY3RpdmVSZXByb2plY3Rpb25Db3N0KHtIOiBoeXBvdGhlc2VzW2pdLkgsIHNyY1BvaW50OiBzcmNQb2ludHNba10sIGRzdFBvaW50OiBkc3RQb2ludHNba10sIG9uZU92ZXJTY2FsZTJ9KTtcbiAgICAgICAgaHlwb3RoZXNlc1tqXS5jb3N0ICs9IGNvc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaHlwb3RoZXNlcy5zb3J0KChoMSwgaDIpID0+IHtyZXR1cm4gaDEuY29zdCAtIGgyLmNvc3R9KTtcbiAgICBoeXBvdGhlc2VzLnNwbGljZSgtTWF0aC5mbG9vcigoaHlwb3RoZXNlcy5sZW5ndGgrMSkvMikpOyAvLyBrZWVwIHRoZSBiZXN0IGhhbGZcbiAgfVxuXG4gIGxldCBiZXN0SW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGh5cG90aGVzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaHlwb3RoZXNlc1tpXS5jb3N0IDwgaHlwb3RoZXNlc1tiZXN0SW5kZXhdLmNvc3QpIGJlc3RJbmRleCA9IGk7XG4gIH1cblxuICBjb25zdCBmaW5hbEggPSBfbm9ybWFsaXplSG9tb2dyYXBoeSh7aW5IOiBoeXBvdGhlc2VzW2Jlc3RJbmRleF0uSH0pO1xuXG4gIGlmICghX2NoZWNrSGV1cmlzdGljcyh7SDogZmluYWxILCB0ZXN0UG9pbnRzLCBrZXlmcmFtZX0pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGZpbmFsSDtcbn1cblxuY29uc3QgX2NoZWNrSGV1cmlzdGljcyA9ICh7SCwgdGVzdFBvaW50cywga2V5ZnJhbWV9KSA9PiB7XG4gIGNvbnN0IEhJbnYgPSBtYXRyaXhJbnZlcnNlMzMoSCwgMC4wMDAwMSk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmluYWwgSCBJbnY6IFwiLCBISW52KTtcbiAgaWYgKEhJbnYgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBtcCA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdFBvaW50cy5sZW5ndGg7IGkrKykgeyAvLyA0IHRlc3QgcG9pbnRzLCBjb3JuZXIgb2Yga2V5ZnJhbWVcbiAgICBtcC5wdXNoKG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzKHRlc3RQb2ludHNbaV0sIEhJbnYpKTtcbiAgfVxuICBjb25zdCBzbWFsbEFyZWEgPSBzbWFsbGVzdFRyaWFuZ2xlQXJlYShtcFswXSwgbXBbMV0sIG1wWzJdLCBtcFszXSk7XG5cbiAgaWYgKHNtYWxsQXJlYSA8IGtleWZyYW1lLndpZHRoICoga2V5ZnJhbWUuaGVpZ2h0ICogMC4wMDAxKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCFxdWFkcmlsYXRlcmFsQ29udmV4KG1wWzBdLCBtcFsxXSwgbXBbMl0sIG1wWzNdKSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBfbm9ybWFsaXplSG9tb2dyYXBoeSA9ICh7aW5IfSkgPT4ge1xuICBjb25zdCBvbmVPdmVyID0gMS4wIC8gaW5IWzhdO1xuXG4gIGNvbnN0IEggPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBIW2ldID0gaW5IW2ldICogb25lT3ZlcjtcbiAgfVxuICBIWzhdID0gMS4wO1xuICByZXR1cm4gSDtcbn1cblxuY29uc3QgX2NhdWNoeVByb2plY3RpdmVSZXByb2plY3Rpb25Db3N0ID0gKHtILCBzcmNQb2ludCwgZHN0UG9pbnQsIG9uZU92ZXJTY2FsZTJ9KSA9PiB7XG4gIGNvbnN0IHggPSBtdWx0aXBseVBvaW50SG9tb2dyYXBoeUluaG9tb2dlbm91cyhzcmNQb2ludCwgSCk7XG4gIGNvbnN0IGYgPVtcbiAgICB4WzBdIC0gZHN0UG9pbnRbMF0sXG4gICAgeFsxXSAtIGRzdFBvaW50WzFdXG4gIF07XG4gIHJldHVybiBNYXRoLmxvZygxICsgKGZbMF0qZlswXStmWzFdKmZbMV0pICogb25lT3ZlclNjYWxlMik7XG59XG5cbmNvbnN0IF9jaGVja0hvbW9ncmFwaHlQb2ludHNHZW9tZXRyaWNhbGx5Q29uc2lzdGVudCA9ICh7SCwgdGVzdFBvaW50c30pID0+IHtcbiAgY29uc3QgbWFwcGVkUG9pbnRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdFBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIG1hcHBlZFBvaW50c1tpXSA9IG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzKHRlc3RQb2ludHNbaV0sIEgpO1xuICAgIC8vY29uc29sZS5sb2coXCJtYXBcIiwgdGVzdFBvaW50c1tpXSwgbWFwcGVkUG9pbnRzW2ldLCBIKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpMSA9IGk7XG4gICAgY29uc3QgaTIgPSAoaSsxKSAlIHRlc3RQb2ludHMubGVuZ3RoO1xuICAgIGNvbnN0IGkzID0gKGkrMikgJSB0ZXN0UG9pbnRzLmxlbmd0aDtcbiAgICBpZiAoIWNoZWNrVGhyZWVQb2ludHNDb25zaXN0ZW50KFxuICAgICAgdGVzdFBvaW50c1tpMV0sIHRlc3RQb2ludHNbaTJdLCB0ZXN0UG9pbnRzW2kzXSxcbiAgICAgIG1hcHBlZFBvaW50c1tpMV0sIG1hcHBlZFBvaW50c1tpMl0sIG1hcHBlZFBvaW50c1tpM10pKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIENvbmRpdGlvbiBmb3VyIDJEIHBvaW50cyBzdWNoIHRoYXQgdGhlIG1lYW4gaXMgemVybyBhbmQgdGhlIHN0YW5kYXJkIGRldmlhdGlvbiBpcyBzcXJ0KDIpLlxuY29uc3QgX2NvbmRpdGlvbjRQb2ludHMyZCA9ICh7eDEsIHgyLCB4MywgeDR9KSA9PiB7XG4gIGNvbnN0IG11ID0gW107XG4gIGNvbnN0IGQxID0gW107XG4gIGNvbnN0IGQyID0gW107XG4gIGNvbnN0IGQzID0gW107XG4gIGNvbnN0IGQ0ID0gW107XG5cbiAgbXVbMF0gPSAoeDFbMF0reDJbMF0reDNbMF0reDRbMF0pLzQ7XG4gIG11WzFdID0gKHgxWzFdK3gyWzFdK3gzWzFdK3g0WzFdKS80O1xuXG4gIGQxWzBdID0geDFbMF0tbXVbMF07XG4gIGQxWzFdID0geDFbMV0tbXVbMV07XG4gIGQyWzBdID0geDJbMF0tbXVbMF07XG4gIGQyWzFdID0geDJbMV0tbXVbMV07XG4gIGQzWzBdID0geDNbMF0tbXVbMF07XG4gIGQzWzFdID0geDNbMV0tbXVbMV07XG4gIGQ0WzBdID0geDRbMF0tbXVbMF07XG4gIGQ0WzFdID0geDRbMV0tbXVbMV07XG5cbiAgY29uc3QgZHMxID0gTWF0aC5zcXJ0KGQxWzBdKmQxWzBdK2QxWzFdKmQxWzFdKTtcbiAgY29uc3QgZHMyID0gTWF0aC5zcXJ0KGQyWzBdKmQyWzBdK2QyWzFdKmQyWzFdKTtcbiAgY29uc3QgZHMzID0gTWF0aC5zcXJ0KGQzWzBdKmQzWzBdK2QzWzFdKmQzWzFdKTtcbiAgY29uc3QgZHM0ID0gTWF0aC5zcXJ0KGQ0WzBdKmQ0WzBdK2Q0WzFdKmQ0WzFdKTtcbiAgY29uc3QgZCA9IChkczErZHMyK2RzMytkczQpLzQ7XG5cbiAgaWYgKGQgPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgcyA9ICgxLjAvZCkqU1FSVDI7XG5cbiAgY29uc3QgeHAxID0gW107XG4gIGNvbnN0IHhwMiA9IFtdO1xuICBjb25zdCB4cDMgPSBbXTtcbiAgY29uc3QgeHA0ID0gW107XG5cbiAgeHAxWzBdID0gZDFbMF0qcztcbiAgeHAxWzFdID0gZDFbMV0qcztcbiAgeHAyWzBdID0gZDJbMF0qcztcbiAgeHAyWzFdID0gZDJbMV0qcztcbiAgeHAzWzBdID0gZDNbMF0qcztcbiAgeHAzWzFdID0gZDNbMV0qcztcbiAgeHA0WzBdID0gZDRbMF0qcztcbiAgeHA0WzFdID0gZDRbMV0qcztcblxuICByZXR1cm4ge3hwMSwgeHAyLCB4cDMsIHhwNCwgcywgdDogbXV9O1xufVxuXG5jb25zdCBfc29sdmVIb21vZ3JhcGh5Rm91clBvaW50cyA9ICh7c3JjUG9pbnRzLCBkc3RQb2ludHN9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICB3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4ICs9IDE7XG4gICAgY29uc3QgZEhvbW9ncmFwaHkgPSB3aW5kb3cuZGVidWdNYXRjaC5xdWVyeWtleWZyYW1lc1t3aW5kb3cuZGVidWcucXVlcnlrZXlmcmFtZUluZGV4XS5ob21vZ3JhcGh5W3dpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXhdO1xuICAgIGNvbnN0IHt4MSwgeDIsIHgzLCB4NCwgeHAxLCB4cDIsIHhwMywgeHA0fSA9IGRIb21vZ3JhcGh5O1xuICAgIGNvbnN0IGwxID0gW3NyY1BvaW50c1swXSxzcmNQb2ludHNbMV0sc3JjUG9pbnRzWzJdLHNyY1BvaW50c1szXSxkc3RQb2ludHNbMF0sZHN0UG9pbnRzWzFdLGRzdFBvaW50c1syXSxkc3RQb2ludHNbM11dO1xuICAgIGNvbnN0IGwyID0gW3gxLCB4MiwgeDMsIHg0LCB4cDEsIHhwMiwgeHAzLCB4cDRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghd2luZG93LmNtcChsMVtpXVswXSwgbDJbaV1bMF0pIHx8ICF3aW5kb3cuY21wKGwxW2ldWzFdLCBsMltpXVsxXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCBob21vZ3JhcGh5IHBvaW50cycsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIGksIGwxW2ldLCBsMltpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzMSA9IF9jb25kaXRpb240UG9pbnRzMmQoe3gxOiBzcmNQb2ludHNbMF0sIHgyOiBzcmNQb2ludHNbMV0sIHgzOiBzcmNQb2ludHNbMl0sIHg0OiBzcmNQb2ludHNbM119KTtcblxuICBpZiAocmVzMSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgIGNvbnN0IGRIb21vZ3JhcGh5ID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XTtcbiAgICBjb25zdCB7eDFwLCB4MnAsIHgzcCwgeDRwLCB0LCBzfSA9IGRIb21vZ3JhcGh5O1xuICAgIGNvbnN0IGwxID0gW3JlczEueHAxLCByZXMxLnhwMiwgcmVzMS54cDMsIHJlczEueHA0LCByZXMxLnRdO1xuICAgIGNvbnN0IGwyID0gW3gxcCwgeDJwLCB4M3AsIHg0cCwgdF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsMS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF3aW5kb3cuY21wKGwxW2ldWzBdLCBsMltpXVswXSkgfHwgIXdpbmRvdy5jbXAobDFbaV1bMV0sIGwyW2ldWzFdKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnSU5DT1JSRUNUIGhvbW9ncmFwaHkgcmVzMScsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIGksIGwxW2ldLCBsMltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghd2luZG93LmNtcChyZXMxLnMsIHMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnSU5DT1JSRUNUIGhvbW9ncmFwaHkgcmVzMSBTJywgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgcmVzMS5zLCBzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXMyID0gX2NvbmRpdGlvbjRQb2ludHMyZCh7eDE6IGRzdFBvaW50c1swXSwgeDI6IGRzdFBvaW50c1sxXSwgeDM6IGRzdFBvaW50c1syXSwgeDQ6IGRzdFBvaW50c1szXX0pO1xuICBpZiAocmVzMiA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgIGNvbnN0IGRIb21vZ3JhcGh5ID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XTtcbiAgICBjb25zdCB7eHAxcCwgeHAycCwgeHAzcCwgeHA0cCwgdHAsIHNwfSA9IGRIb21vZ3JhcGh5O1xuICAgIGNvbnN0IGwxID0gW3JlczIueHAxLCByZXMyLnhwMiwgcmVzMi54cDMsIHJlczIueHA0LCByZXMyLnRdO1xuICAgIGNvbnN0IGwyID0gW3hwMXAsIHhwMnAsIHhwM3AsIHhwNHAsIHRwXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXdpbmRvdy5jbXAobDFbaV1bMF0sIGwyW2ldWzBdKSB8fCAhd2luZG93LmNtcChsMVtpXVsxXSwgbDJbaV1bMV0pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJTkNPUlJFQ1QgaG9tb2dyYXBoeSByZXMxJywgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgaSwgbDFbaV0sIGwyW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY21wKHJlczIucywgc3ApKSB7XG4gICAgICBjb25zb2xlLmxvZygnSU5DT1JSRUNUIGhvbW9ncmFwaHkgcmVzMSBTJywgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgaSwgcmVzMi5zLCBzcCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgSG4gPSBfc29sdmVIb21vZ3JhcGh5NFBvaW50c0luaG9tb2dlbm91cyh7XG4gICAgeDE6IHJlczEueHAxLCB4MjogcmVzMS54cDIsIHgzOiByZXMxLnhwMywgeDQ6IHJlczEueHA0LFxuICAgIHhwMTogcmVzMi54cDEsIHhwMjogcmVzMi54cDIsIHhwMzogcmVzMi54cDMsIHhwNDogcmVzMi54cDQsXG4gIH0pO1xuXG4gIGlmIChIbiA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKE1hdGguYWJzKGRldGVybWluYW50KEhuKSkgPCAwLjAwMDAxKSByZXR1cm4gbnVsbDtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgY29uc3QgZEhvbW9ncmFwaHkgPSB3aW5kb3cuZGVidWdNYXRjaC5xdWVyeWtleWZyYW1lc1t3aW5kb3cuZGVidWcucXVlcnlrZXlmcmFtZUluZGV4XS5ob21vZ3JhcGh5W3dpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXhdO1xuICAgIGNvbnN0IGRIbiA9IGRIb21vZ3JhcGh5LkhuO1xuICAgIGlmICghd2luZG93LmNtcEFycmF5KEhuLCBkSG4sIDAuMDAxKSkge1xuICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgSG5cIiwgd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleCwgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgSG4sIGRIbik7XG4gICAgfVxuICAgIGNvbnN0IGREZXRIID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XS5kZXRIO1xuICAgIGlmICghd2luZG93LmNtcChkZXRlcm1pbmFudChIbiksIGREZXRIKSkge1xuICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgZGV0ZXJtaW5hbnRcIiwgZGV0ZXJtaW5hbnQoSG4pLCBkRGV0SCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgSCA9IF9kZW5vbWFsaXplSG9tb2dyYXBoeSh7SDogSG4sIHM6IHJlczEucywgdDogcmVzMS50LCBzcDogcmVzMi5zLCB0cDogcmVzMi50fSk7XG5cbiAgcmV0dXJuIEg7XG59XG5cbi8vIGRlbm9ybWFsaXplIGhvbW9ncmFwaHlcbi8vIEhwID0gaW52KFRwKSpIKlRcbmNvbnN0IF9kZW5vbWFsaXplSG9tb2dyYXBoeSA9ICh7SCwgcywgdCwgc3AsIHRwfSkgPT4ge1xuICBjb25zdCBhID0gSFs2XSp0cFswXTtcbiAgY29uc3QgYiA9IEhbN10qdHBbMF07XG4gIGNvbnN0IGMgPSBIWzBdL3NwO1xuICBjb25zdCBkID0gSFsxXS9zcDtcbiAgY29uc3QgYXBjID0gYStjO1xuICBjb25zdCBicGQgPSBiK2Q7XG5cbiAgY29uc3QgZSA9IEhbNl0qdHBbMV07XG4gIGNvbnN0IGYgPSBIWzddKnRwWzFdO1xuICBjb25zdCBnID0gSFszXS9zcDtcbiAgY29uc3QgaCA9IEhbNF0vc3A7XG4gIGNvbnN0IGVwZyA9IGUrZztcbiAgY29uc3QgZnBoID0gZitoO1xuXG4gIGNvbnN0IHN0eCA9IHMqdFswXTtcbiAgY29uc3Qgc3R5ID0gcyp0WzFdO1xuXG4gIGNvbnN0IEhwID0gW107XG4gIEhwWzBdID0gcyphcGM7XG4gIEhwWzFdID0gcypicGQ7XG4gIEhwWzJdID0gSFs4XSp0cFswXSArIEhbMl0vc3AgLSBzdHgqYXBjIC0gc3R5KmJwZDtcblxuICBIcFszXSA9IHMqZXBnO1xuICBIcFs0XSA9IHMqZnBoO1xuICBIcFs1XSA9IEhbOF0qdHBbMV0gKyBIWzVdL3NwIC0gc3R4KmVwZyAtIHN0eSpmcGg7XG5cbiAgSHBbNl0gPSBIWzZdKnM7XG4gIEhwWzddID0gSFs3XSpzO1xuICBIcFs4XSA9IEhbOF0gLSBIcFs2XSp0WzBdIC0gSHBbN10qdFsxXTtcblxuICByZXR1cm4gSHA7XG59O1xuXG4vLyBjYW4gc29tZW9uZSB2ZXJpZnkgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoaXMgUVIgZGVjb21wb3NpdGlvbj9cbmNvbnN0IF9zb2x2ZUhvbW9ncmFwaHk0UG9pbnRzSW5ob21vZ2Vub3VzID0gKHt4MSwgeDIsIHgzLCB4NCwgeHAxLCB4cDIsIHhwMywgeHA0fSkgPT4ge1xuICBjb25zdCB4TGlzdCA9IFt4MSwgeDIsIHgzLCB4NF07XG4gIGNvbnN0IHhwTGlzdCA9IFt4cDEsIHhwMiwgeHAzLCB4cDRdO1xuXG4gIGNvbnN0IEEgPSBbXTsgLy8gOCB4IDlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpICogMTg7XG4gICAgY29uc3QgeCA9IHhMaXN0W2ldO1xuICAgIGNvbnN0IHhwID0geHBMaXN0W2ldO1xuICAgIEFbb2Zmc2V0KzBdID0gLXhbMF07XG4gICAgQVtvZmZzZXQrMV0gPSAteFsxXTtcbiAgICBBW29mZnNldCsyXSA9IC0xO1xuICAgIEFbb2Zmc2V0KzNdID0gMDtcbiAgICBBW29mZnNldCs0XSA9IDA7XG4gICAgQVtvZmZzZXQrNV0gPSAwO1xuICAgIEFbb2Zmc2V0KzZdID0geHBbMF0qeFswXTtcbiAgICBBW29mZnNldCs3XSA9IHhwWzBdKnhbMV07XG4gICAgQVtvZmZzZXQrOF0gPSB4cFswXTtcbiAgICBBW29mZnNldCs5XSA9IDA7XG4gICAgQVtvZmZzZXQrMTBdID0gMDtcbiAgICBBW29mZnNldCsxMV0gPSAwO1xuICAgIEFbb2Zmc2V0KzEyXSA9IC14WzBdO1xuICAgIEFbb2Zmc2V0KzEzXSA9IC14WzFdO1xuICAgIEFbb2Zmc2V0KzE0XSA9IC0xO1xuICAgIEFbb2Zmc2V0KzE1XSA9IHhwWzFdKnhbMF07XG4gICAgQVtvZmZzZXQrMTZdID0geHBbMV0qeFsxXTtcbiAgICBBW29mZnNldCsxN10gPSB4cFsxXTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICBjb25zdCBkQSA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF0uQTtcbiAgICBpZiAoIXdpbmRvdy5jbXBBcnJheShBLCBkQSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIEFcIiwgd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleCwgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgQSwgZEEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFEgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3MjsgaSsrKSB7XG4gICAgUVtpXSA9IEFbaV07XG4gIH1cblxuICAvLyBzb2x2ZSB4IGZvciBBeD0wIHdpdGggUVIgZGVjb21wb3NpdGlvbiB3aXRoIEdyYW0tU2NobWlkdFxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xuICAgIGlmIChyb3cgPiAwKSB7XG4gICAgICBmb3IgKGxldCBqID0gcm93OyBqIDwgODsgaisrKSB7XG4gICAgICAgIC8vIHByb2plY3QgYSB2ZWN0b3IgXCJhXCIgb250byBhIG5vcm1hbGl6ZWQgYmFzaXMgdmVjdG9yIFwiZVwiLlxuICAgICAgICAvLyB4ID0geCAtIGRvdChhLGUpKmVcblxuICAgICAgICBsZXQgZCA9IDA7IC8vIGRvdChhLCBlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICBkICs9IFFbKHJvdy0xKSAqIDkgKyBpXSAqIEFbaiAqIDkgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgUVtqICogOSArIGldIC09IGQgKiBRWyAocm93LTEpICogOSArIGldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1heFZhbHVlID0gLTE7XG4gICAgbGV0IG1heFJvdyA9IC0xO1xuICAgIGNvbnN0IHNzID0gW107XG4gICAgZm9yIChsZXQgaiA9IHJvdzsgaiA8IDg7IGorKykge1xuICAgICAgc3Nbal0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgc3Nbal0gKz0gKFFbaio5K2ldICogUVtqKjkraV0pO1xuICAgICAgfVxuICAgICAgaWYgKHNzW2pdID4gbWF4VmFsdWUpIHtcbiAgICAgICAgbWF4VmFsdWUgPSBzc1tqXTtcbiAgICAgICAgbWF4Um93ID0gajtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCBNYXRoLmFicyhzc1ttYXhSb3ddKSA8IEVQU0lMT04pIHtcbiAgICAgIHJldHVybiBudWxsOyAvLyBubyBzb2x1dGlvblxuICAgIH1cblxuICAgIC8vIHN3YXAgY3VycmVudCByb3cgd2l0aCBtYXhpbmRleCByb3dcbiAgICBpZiAocm93ICE9PSBtYXhSb3cpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGxldCB0bXAgPSBBW3JvdyAqIDkgKyBpXTtcbiAgICAgICAgQVtyb3cgKiA5ICsgaV0gPSBBW21heFJvdyAqIDkgKyBpXTtcbiAgICAgICAgQVttYXhSb3cgKiA5ICsgaV0gPSB0bXA7XG5cbiAgICAgICAgbGV0IHRtcDIgPSBRW3JvdyAqIDkgKyBpXTtcbiAgICAgICAgUVtyb3cgKiA5ICsgaV0gPSBRW21heFJvdyAqIDkgKyBpXTtcbiAgICAgICAgUVttYXhSb3cgKiA5ICsgaV0gPSB0bXAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBRW3JvdyAqIDkgKyBpXSA9IDEuMCAqIFFbcm93ICogOSArIGldIC8gTWF0aC5zcXJ0KHNzW21heFJvd10pO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICBjb25zdCBkUSA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF0uUTg7XG4gICAgaWYgKCF3aW5kb3cuY21wQXJyYXkoUSwgZFEsIDAuMDAxKSkge1xuICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgUThcIiwgd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleCwgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgUSwgZFEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXB1dGUgeCBmcm9tIFFcbiAgY29uc3QgdyA9IFtdO1xuICBjb25zdCBYID0gW107XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDk7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgIFhbcm93ICogOSArIGldID0gKFFbaV0gKiAtUVtyb3ddKTtcbiAgICB9XG4gICAgWFtyb3cgKiA5ICsgcm93XSA9IDEgKyBYW3JvdyAqIDkgKyByb3ddO1xuXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCA4OyBqKyspIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgWFtyb3cgKiA5ICsgaV0gKz0gKFFbaiAqIDkgKyBpXSAqIC1RW2ogKiA5ICsgcm93XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHNzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgc3MgKz0gKFhbcm93ICogOSArIGldICogWFtyb3cgKiA5ICsgaV0pO1xuICAgIH1cbiAgICBpZiAoTWF0aC5hYnMoc3MpIDwgRVBTSUxPTikge1xuICAgICAgd1tyb3ddID0gMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHdbcm93XSA9IE1hdGguc3FydChzcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgIFhbcm93ICogOSArIGldID0gWFtyb3cgKiA5ICsgaV0gLyB3W3Jvd107XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgIGNvbnN0IGRYID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XS5YO1xuICAgIGNvbnN0IGR3ID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XS53O1xuICAgIGlmICghd2luZG93LmNtcEFycmF5KFgsIGRYLCAwLjAxKSkge1xuICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgWFwiLCB3aW5kb3cuZGVidWcucXVlcnlrZXlmcmFtZUluZGV4LCB3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFgpKSwgZFgpO1xuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbXBBcnJheSh3LCBkdywgMC4wMSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHdcIiwgd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleCwgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh3KSksIGR3KTtcbiAgICB9XG4gIH1cblxuICBsZXQgbWF4Um93ID0gLTE7XG4gIGxldCBtYXhWYWx1ZSA9IC0xO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDk7IGorKykge1xuICAgIGlmICh3W2pdID4gbWF4VmFsdWUpIHtcbiAgICAgIG1heFJvdyA9IGo7XG4gICAgICBtYXhWYWx1ZSA9IHdbal07XG4gICAgfVxuICB9XG5cblxuICBpZiAobWF4VmFsdWUgPT0gMCkgcmV0dXJuIG51bGw7IC8vIG5vIHNvbHV0aW9uXG5cbiAgY29uc3QgeCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIHhbaV0gPSBYW21heFJvdyAqIDkgKyBpXTtcbiAgfVxuXG4gIHJldHVybiB4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcHV0ZUhvbW9ncmFwaHksXG59XG5cbiIsImNvbnN0IGtIb3VnaEJpbkRlbHRhID0gMTtcblxuLy8gbWF0aGNlcyBbcXVlcnlwb2ludEluZGV4OngsIGtleXBvaW50SW5kZXg6IHhdXG5jb25zdCBjb21wdXRlSG91Z2hNYXRjaGVzID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge2tleXBvaW50cywgcXVlcnlwb2ludHMsIGtleXdpZHRoLCBrZXloZWlnaHQsIHF1ZXJ5d2lkdGgsIHF1ZXJ5aGVpZ2h0LCBtYXRjaGVzfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgbWF4WCA9IHF1ZXJ5d2lkdGggKiAxLjI7XG4gIGNvbnN0IG1pblggPSAtbWF4WDtcbiAgY29uc3QgbWF4WSA9IHF1ZXJ5aGVpZ2h0ICogMS4yO1xuICBjb25zdCBtaW5ZID0gLW1heFk7XG4gIGNvbnN0IG51bUFuZ2xlQmlucyA9IDEyO1xuICBjb25zdCBudW1TY2FsZUJpbnMgPSAxMDtcbiAgY29uc3QgbWluU2NhbGUgPSAtMTtcbiAgY29uc3QgbWF4U2NhbGUgPSAxO1xuICBjb25zdCBzY2FsZUsgPSAxMC4wO1xuICBjb25zdCBzY2FsZU9uZU92ZXJMb2dLID0gMS4wIC8gTWF0aC5sb2coc2NhbGVLKTtcbiAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgoa2V5d2lkdGgsIGtleWhlaWdodCk7XG4gIGNvbnN0IGtleWNlbnRlclggPSBNYXRoLmZsb29yKGtleXdpZHRoIC8gMik7XG4gIGNvbnN0IGtleWNlbnRlclkgPSBNYXRoLmZsb29yKGtleWhlaWdodCAvIDIpO1xuXG4gIC8vIGNvbXB1dGUgbnVtWEJpbnMgYW5kIG51bVlCaW5zIGJhc2VkIG9uIG1hdGNoZXNcbiAgY29uc3QgcHJvamVjdGVkRGltcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBxdWVyeXNjYWxlID0gcXVlcnlwb2ludHNbbWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXhdLnNjYWxlO1xuICAgIGNvbnN0IGtleXNjYWxlID0ga2V5cG9pbnRzW21hdGNoZXNbaV0ua2V5cG9pbnRJbmRleF0uc2NhbGU7XG4gICAgaWYgKGtleXNjYWxlID09IDApIGNvbnNvbGUubG9nKFwiRVJST1IgZGl2aWRlIHplcm9cIik7XG4gICAgY29uc3Qgc2NhbGUgPSBxdWVyeXNjYWxlIC8ga2V5c2NhbGU7XG4gICAgcHJvamVjdGVkRGltcy5wdXNoKCBzY2FsZSAqIG1heERpbSApO1xuICB9XG5cbiAgLy8gVE9ETyBvcHRpbWl6ZSBtZWRpYW5cbiAgLy8gICB3ZWlyZC4gbWVkaWFuIHNob3VsZCBiZSBbTWF0aC5mbG9vcihwcm9qZWN0ZWREaW1zLmxlbmd0aC8yKSAtIDFdID9cbiAgcHJvamVjdGVkRGltcy5zb3J0KChhMSwgYTIpID0+IHtyZXR1cm4gYTEgLSBhMn0pO1xuICBjb25zdCBtZWRpYW5Qcm9qZWN0ZWREaW0gPSBwcm9qZWN0ZWREaW1zWyBNYXRoLmZsb29yKHByb2plY3RlZERpbXMubGVuZ3RoLzIpIC0gKHByb2plY3RlZERpbXMubGVuZ3RoJTI9PTA/MTowKSAtMSBdO1xuXG4gIGNvbnN0IGJpblNpemUgPSAwLjI1ICogbWVkaWFuUHJvamVjdGVkRGltO1xuICBjb25zdCBudW1YQmlucyA9IE1hdGgubWF4KDUsIE1hdGguY2VpbCgobWF4WCAtIG1pblgpIC8gYmluU2l6ZSkpO1xuICBjb25zdCBudW1ZQmlucyA9IE1hdGgubWF4KDUsIE1hdGguY2VpbCgobWF4WSAtIG1pblkpIC8gYmluU2l6ZSkpO1xuXG4gIGNvbnN0IG51bVhZQmlucyA9IG51bVhCaW5zICogbnVtWUJpbnM7XG4gIGNvbnN0IG51bVhZQW5nbGVCaW5zID0gbnVtWFlCaW5zICogbnVtQW5nbGVCaW5zO1xuXG4gIC8vIGRvIHZvdGluZ1xuICBjb25zdCBxdWVyeXBvaW50VmFsaWRzID0gW107XG4gIGNvbnN0IHF1ZXJ5cG9pbnRCaW5Mb2NhdGlvbnMgPSBbXTtcbiAgY29uc3Qgdm90ZXMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcXVlcnlwb2ludCA9IHF1ZXJ5cG9pbnRzW21hdGNoZXNbaV0ucXVlcnlwb2ludEluZGV4XTtcbiAgICBjb25zdCBrZXlwb2ludCA9IGtleXBvaW50c1ttYXRjaGVzW2ldLmtleXBvaW50SW5kZXhdO1xuXG4gICAgY29uc3Qge3gsIHksIHNjYWxlLCBhbmdsZX0gPSBfbWFwQ29ycmVzcG9uZGVuY2Uoe3F1ZXJ5cG9pbnQsIGtleXBvaW50LCBrZXljZW50ZXJYLCBrZXljZW50ZXJZLCBzY2FsZU9uZU92ZXJMb2dLfSk7XG5cbiAgICAvLyBDaGVjayB0aGF0IHRoZSB2b3RlIGlzIHdpdGhpbiByYW5nZVxuICAgIGlmICh4IDwgbWluWCB8fCB4ID49IG1heFggfHwgeSA8IG1pblkgfHwgeSA+PSBtYXhZIHx8IGFuZ2xlIDw9IC1NYXRoLlBJIHx8IGFuZ2xlID4gTWF0aC5QSSB8fCBzY2FsZSA8IG1pblNjYWxlIHx8IHNjYWxlID49IG1heFNjYWxlKSB7XG4gICAgICBxdWVyeXBvaW50VmFsaWRzW2ldID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBtYXAgcHJvcGVydGllcyB0byBiaW5zXG4gICAgbGV0IGZiaW5YID0gbnVtWEJpbnMgKiAoeCAtIG1pblgpIC8gKG1heFggLSBtaW5YKTtcbiAgICBsZXQgZmJpblkgPSBudW1ZQmlucyAqICh5IC0gbWluWSkgLyAobWF4WSAtIG1pblkpO1xuICAgIGxldCBmYmluQW5nbGUgPSBudW1BbmdsZUJpbnMgKiAoYW5nbGUgKyBNYXRoLlBJKSAvICgyLjAgKiBNYXRoLlBJKTtcbiAgICBsZXQgZmJpblNjYWxlID0gbnVtU2NhbGVCaW5zICogKHNjYWxlIC0gbWluU2NhbGUpIC8gKG1heFNjYWxlIC0gbWluU2NhbGUpO1xuXG4gICAgcXVlcnlwb2ludEJpbkxvY2F0aW9uc1tpXSA9IHtiaW5YOiBmYmluWCwgYmluWTogZmJpblksIGJpbkFuZ2xlOiBmYmluQW5nbGUsIGJpblNjYWxlOiBmYmluU2NhbGV9O1xuXG4gICAgbGV0IGJpblggPSBNYXRoLmZsb29yKGZiaW5YIC0gMC41KTtcbiAgICBsZXQgYmluWSA9IE1hdGguZmxvb3IoZmJpblkgLSAwLjUpO1xuICAgIGxldCBiaW5TY2FsZSA9IE1hdGguZmxvb3IoZmJpblNjYWxlIC0gMC41KTtcbiAgICBsZXQgYmluQW5nbGUgPSAoTWF0aC5mbG9vcihmYmluQW5nbGUgLSAwLjUpICsgbnVtQW5nbGVCaW5zKSAlIG51bUFuZ2xlQmlucztcblxuICAgIC8vIGNoZWNrIGNhbiB2b3RlIGFsbCAxNiBiaW5zXG4gICAgaWYgKGJpblggPCAwIHx8IGJpblggKyAxID49IG51bVhCaW5zIHx8IGJpblkgPCAwIHx8IGJpblkgKyAxID49IG51bVlCaW5zIHx8IGJpblNjYWxlIDwgMCB8fCBiaW5TY2FsZSArMSA+PSBudW1TY2FsZUJpbnMpIHtcbiAgICAgIHF1ZXJ5cG9pbnRWYWxpZHNbaV0gPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGR4ID0gMDsgZHggPCAyOyBkeCsrKSB7XG4gICAgICBsZXQgYmluWDIgPSBiaW5YICsgZHg7XG5cbiAgICAgIGZvciAobGV0IGR5ID0gMDsgZHkgPCAyOyBkeSsrKSB7XG4gICAgICAgIGxldCBiaW5ZMiA9IGJpblkgKyBkeTtcblxuICAgICAgICBmb3IgKGxldCBkYW5nbGUgPSAwOyBkYW5nbGUgPCAyOyBkYW5nbGUrKykge1xuICAgICAgICAgIGxldCBiaW5BbmdsZTIgPSAoYmluQW5nbGUgKyBkYW5nbGUpICUgbnVtQW5nbGVCaW5zO1xuXG4gICAgICAgICAgZm9yIChsZXQgZHNjYWxlID0gMDsgZHNjYWxlIDwgMjsgZHNjYWxlKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5TY2FsZTIgPSBiaW5TY2FsZSArIGRzY2FsZTtcblxuICAgICAgICAgICAgY29uc3QgYmluSW5kZXggPSBiaW5YMiArIGJpblkyICogbnVtWEJpbnMgKyBiaW5BbmdsZTIgKiBudW1YWUJpbnMgKyBiaW5TY2FsZTIgKiBudW1YWUFuZ2xlQmlucztcblxuICAgICAgICAgICAgaWYgKHZvdGVzW2JpbkluZGV4XSA9PT0gdW5kZWZpbmVkKSB2b3Rlc1tiaW5JbmRleF0gPSAwO1xuICAgICAgICAgICAgdm90ZXNbYmluSW5kZXhdICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHF1ZXJ5cG9pbnRWYWxpZHNbaV0gPSB0cnVlO1xuICB9XG5cbiAgbGV0IG1heFZvdGVzID0gMDtcbiAgbGV0IG1heFZvdGVJbmRleCA9IC0xO1xuICBPYmplY3Qua2V5cyh2b3RlcykuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICBpZiAodm90ZXNbaW5kZXhdID4gbWF4Vm90ZXMpIHtcbiAgICAgIG1heFZvdGVzID0gdm90ZXNbaW5kZXhdO1xuICAgICAgbWF4Vm90ZUluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBpZiAobWF4Vm90ZXMgPCAzKSByZXR1cm4gW107XG5cbiAgLy8gZ2V0IGJhY2sgYmlucyBmcm9tIHZvdGUgaW5kZXhcbiAgY29uc3QgYmluWCA9IE1hdGguZmxvb3IoKChtYXhWb3RlSW5kZXggJSBudW1YWUFuZ2xlQmlucykgJSBudW1YWUJpbnMpICUgbnVtWEJpbnMpO1xuICBjb25zdCBiaW5ZID0gTWF0aC5mbG9vcigoKChtYXhWb3RlSW5kZXggLSBiaW5YKSAlIG51bVhZQW5nbGVCaW5zKSAlIG51bVhZQmlucykgLyBudW1YQmlucyk7XG4gIGNvbnN0IGJpbkFuZ2xlID0gTWF0aC5mbG9vcigoKG1heFZvdGVJbmRleCAtIGJpblggLSAoYmluWSAqIG51bVhCaW5zKSkgJSBudW1YWUFuZ2xlQmlucykgLyBudW1YWUJpbnMpO1xuICBjb25zdCBiaW5TY2FsZSA9IE1hdGguZmxvb3IoKG1heFZvdGVJbmRleCAtIGJpblggLSAoYmluWSAqIG51bVhCaW5zKSAtIChiaW5BbmdsZSAqIG51bVhZQmlucykpIC8gbnVtWFlBbmdsZUJpbnMpO1xuXG4gIC8vY29uc29sZS5sb2coXCJob3VnaCB2b3RlZDogXCIsIHtiaW5YLCBiaW5ZLCBiaW5BbmdsZSwgYmluU2NhbGUsIG1heFZvdGVJbmRleH0pO1xuXG4gIGNvbnN0IGhvdWdoTWF0Y2hlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXF1ZXJ5cG9pbnRWYWxpZHNbaV0pIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgcXVlcnlCaW5zID0gcXVlcnlwb2ludEJpbkxvY2F0aW9uc1tpXTtcbiAgICAvLyBjb21wdXRlIGJpbiBkaWZmZXJlbmNlXG4gICAgY29uc3QgZGlzdEJpblggPSBNYXRoLmFicyhxdWVyeUJpbnMuYmluWCAtIChiaW5YKzAuNSkpO1xuICAgIGlmIChkaXN0QmluWCA+PSBrSG91Z2hCaW5EZWx0YSkgY29udGludWU7XG5cbiAgICBjb25zdCBkaXN0QmluWSA9IE1hdGguYWJzKHF1ZXJ5Qmlucy5iaW5ZIC0gKGJpblkrMC41KSk7XG4gICAgaWYgKGRpc3RCaW5ZID49IGtIb3VnaEJpbkRlbHRhKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGRpc3RCaW5TY2FsZSA9IE1hdGguYWJzKHF1ZXJ5Qmlucy5iaW5TY2FsZSAtIChiaW5TY2FsZSswLjUpKTtcbiAgICBpZiAoZGlzdEJpblNjYWxlID49IGtIb3VnaEJpbkRlbHRhKSBjb250aW51ZTtcblxuICAgIGNvbnN0IHRlbXAgPSBNYXRoLmFicyhxdWVyeUJpbnMuYmluQW5nbGUgLSAoYmluQW5nbGUrMC41KSk7XG4gICAgY29uc3QgZGlzdEJpbkFuZ2xlID0gTWF0aC5taW4odGVtcCwgbnVtQW5nbGVCaW5zIC0gdGVtcCk7XG4gICAgaWYgKGRpc3RCaW5BbmdsZSA+PSBrSG91Z2hCaW5EZWx0YSkgY29udGludWU7XG5cbiAgICBob3VnaE1hdGNoZXMucHVzaChtYXRjaGVzW2ldKTtcbiAgfVxuICByZXR1cm4gaG91Z2hNYXRjaGVzO1xufVxuXG5jb25zdCBfbWFwQ29ycmVzcG9uZGVuY2UgPSAoe3F1ZXJ5cG9pbnQsIGtleXBvaW50LCBrZXljZW50ZXJYLCBrZXljZW50ZXJZLCBzY2FsZU9uZU92ZXJMb2dLfSkgPT4ge1xuICAvLyBtYXAgYW5nbGUgdG8gKC1waSwgcGldXG4gIGxldCBhbmdsZSA9IHF1ZXJ5cG9pbnQuYW5nbGUgLSBrZXlwb2ludC5hbmdsZTtcbiAgaWYgKGFuZ2xlIDw9IC1NYXRoLlBJKSBhbmdsZSArPSAyKk1hdGguUEk7XG4gIGVsc2UgaWYgKGFuZ2xlID4gTWF0aC5QSSkgYW5nbGUgLT0gMipNYXRoLlBJO1xuXG4gIGNvbnN0IHNjYWxlID0gcXVlcnlwb2ludC5zY2FsZSAvIGtleXBvaW50LnNjYWxlO1xuXG4gIC8vIDJ4MiBzaW1pbGFyaXR5XG4gIGNvbnN0IGNvcyA9IHNjYWxlICogTWF0aC5jb3MoYW5nbGUpO1xuICBjb25zdCBzaW4gPSBzY2FsZSAqIE1hdGguc2luKGFuZ2xlKTtcbiAgY29uc3QgUyA9IFtjb3MsIC1zaW4sIHNpbiwgY29zXTtcblxuICBjb25zdCB0cCA9IFtcbiAgICBTWzBdICoga2V5cG9pbnQueCArIFNbMV0gKiBrZXlwb2ludC55LFxuICAgIFNbMl0gKiBrZXlwb2ludC54ICsgU1szXSAqIGtleXBvaW50LnlcbiAgXTtcbiAgY29uc3QgdHggPSBxdWVyeXBvaW50LnggLSB0cFswXTtcbiAgY29uc3QgdHkgPSBxdWVyeXBvaW50LnkgLSB0cFsxXTtcblxuICByZXR1cm4ge1xuICAgIHg6IFNbMF0gKiBrZXljZW50ZXJYICsgU1sxXSAqIGtleWNlbnRlclkgKyB0eCxcbiAgICB5OiBTWzJdICoga2V5Y2VudGVyWCArIFNbM10gKiBrZXljZW50ZXJZICsgdHksXG4gICAgYW5nbGU6IGFuZ2xlLFxuICAgIHNjYWxlOiBNYXRoLmxvZyhzY2FsZSkgKiBzY2FsZU9uZU92ZXJMb2dLXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVIb3VnaE1hdGNoZXNcbn1cblxuIiwiY29uc3Qge21hdGNofSA9IHJlcXVpcmUoJy4vbWF0Y2hpbmcnKTtcblxuY2xhc3MgTWF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHF1ZXJ5V2lkdGgsIHF1ZXJ5SGVpZ2h0LCBkZWJ1Z01vZGUgPSBmYWxzZSkge1xuICAgIHRoaXMucXVlcnlXaWR0aCA9IHF1ZXJ5V2lkdGg7XG4gICAgdGhpcy5xdWVyeUhlaWdodCA9IHF1ZXJ5SGVpZ2h0O1xuICAgIHRoaXMuZGVidWdNb2RlID0gZGVidWdNb2RlO1xuICB9XG5cbiAgbWF0Y2hEZXRlY3Rpb24oa2V5ZnJhbWVzLCBmZWF0dXJlUG9pbnRzKSB7XG4gICAgY29uc3Qge3Jlc3VsdCwgZGVidWdFeHRyYX0gPSBtYXRjaCh7a2V5ZnJhbWVzOiBrZXlmcmFtZXMsIHF1ZXJ5cG9pbnRzOiBmZWF0dXJlUG9pbnRzLCBxdWVyeXdpZHRoOiB0aGlzLnF1ZXJ5V2lkdGgsIHF1ZXJ5aGVpZ2h0OiB0aGlzLnF1ZXJ5SGVpZ2h0LCBkZWJ1Z01vZGU6IHRoaXMuZGVidWdNb2RlfSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtrZXlmcmFtZUluZGV4OiAtMSwgZGVidWdFeHRyYX07XG4gICAgfVxuXG4gICAgY29uc3Qgc2NyZWVuQ29vcmRzID0gW107XG4gICAgY29uc3Qgd29ybGRDb29yZHMgPSBbXTtcbiAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tyZXN1bHQua2V5ZnJhbWVJbmRleF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5tYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBxdWVyeXBvaW50SW5kZXggPSByZXN1bHQubWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXg7XG4gICAgICBjb25zdCBrZXlwb2ludEluZGV4ID0gcmVzdWx0Lm1hdGNoZXNbaV0ua2V5cG9pbnRJbmRleDtcbiAgICAgIHNjcmVlbkNvb3Jkcy5wdXNoKHtcbiAgICAgICAgeDogZmVhdHVyZVBvaW50c1txdWVyeXBvaW50SW5kZXhdLngsXG4gICAgICAgIHk6IGZlYXR1cmVQb2ludHNbcXVlcnlwb2ludEluZGV4XS55LFxuICAgICAgfSlcbiAgICAgIHdvcmxkQ29vcmRzLnB1c2goe1xuICAgICAgICB4OiAoa2V5ZnJhbWUucG9pbnRzW2tleXBvaW50SW5kZXhdLnggKyAwLjUpIC8ga2V5ZnJhbWUuc2NhbGUsXG4gICAgICAgIHk6ICgoa2V5ZnJhbWUuaGVpZ2h0LTAuNSkgLWtleWZyYW1lLnBvaW50c1trZXlwb2ludEluZGV4XS55KSAvIGtleWZyYW1lLnNjYWxlLFxuICAgICAgICB6OiAwLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge3NjcmVlbkNvb3Jkcywgd29ybGRDb29yZHMsIGtleWZyYW1lSW5kZXg6IHJlc3VsdC5rZXlmcmFtZUluZGV4LCBkZWJ1Z0V4dHJhfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTWF0Y2hlclxufVxuIiwiY29uc3QgVGlueVF1ZXVlID0gcmVxdWlyZSgndGlueXF1ZXVlJykuZGVmYXVsdDtcbmNvbnN0IHtjb21wdXRlOiBoYW1taW5nQ29tcHV0ZX0gPSByZXF1aXJlKCcuL2hhbW1pbmctZGlzdGFuY2UuanMnKTtcbmNvbnN0IHtjb21wdXRlSG91Z2hNYXRjaGVzfSA9IHJlcXVpcmUoJy4vaG91Z2guanMnKTtcbmNvbnN0IHtjb21wdXRlSG9tb2dyYXBoeX0gPSByZXF1aXJlKCcuL2hvbW9ncmFwaHkuanMnKTtcbmNvbnN0IHttdWx0aXBseVBvaW50SG9tb2dyYXBoeUluaG9tb2dlbm91cywgbWF0cml4SW52ZXJzZTMzfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dlb21ldHJ5LmpzJyk7XG5cbmNvbnN0IElOTElFUl9USFJFU0hPTEQgPSAzO1xuLy9jb25zdCBNSU5fTlVNX0lOTElFUlMgPSA4OyAgLy9kZWZhdWx0XG5jb25zdCBNSU5fTlVNX0lOTElFUlMgPSA2O1xuY29uc3QgQ0xVU1RFUl9NQVhfUE9QID0gODtcbmNvbnN0IEhBTU1JTkdfVEhSRVNIT0xEID0gMC43O1xuXG4vLyBtYXRjaCBsaXN0IG9mIHF1ZXJwb2ludHMgYWdhaW5zdCBwcmUtYnVpbHQgbGlzdCBvZiBrZXlmcmFtZXNcbmNvbnN0IG1hdGNoID0gKHtrZXlmcmFtZXMsIHF1ZXJ5cG9pbnRzLCBxdWVyeXdpZHRoLCBxdWVyeWhlaWdodCwgZGVidWdNb2RlfSkgPT4ge1xuICBsZXQgZGVidWdFeHRyYSA9IG51bGw7XG4gIGlmIChkZWJ1Z01vZGUpIGRlYnVnRXh0cmEgPSBbXTtcblxuICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tpXTtcbiAgICBjb25zdCBrZXlwb2ludHMgPSBrZXlmcmFtZS5wb2ludHM7XG5cbiAgICBpZiAoZGVidWdNb2RlKSB7XG4gICAgICBkZWJ1Z0V4dHJhW2ldID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcXVlcnlwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHJvb3ROb2RlID0ga2V5ZnJhbWUucG9pbnRzQ2x1c3Rlci5yb290Tm9kZTtcbiAgICAgIGNvbnN0IHF1ZXJ5cG9pbnQgPSBxdWVyeXBvaW50c1tqXTtcbiAgICAgIGNvbnN0IGtleXBvaW50SW5kZXhlcyA9IFtdO1xuICAgICAgY29uc3QgcXVldWUgPSBuZXcgVGlueVF1ZXVlKFtdLCAoYTEsIGEyKSA9PiB7cmV0dXJuIGExLmQgLSBhMi5kfSk7XG5cbiAgICAgIF9xdWVyeSh7bm9kZTogcm9vdE5vZGUsIGtleXBvaW50cywgcXVlcnlwb2ludCwgcXVldWUsIGtleXBvaW50SW5kZXhlcywgbnVtUG9wOiAwfSk7XG5cbiAgICAgIGxldCBiZXN0SW5kZXggPSAtMTtcbiAgICAgIGxldCBiZXN0RDEgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgIGxldCBiZXN0RDIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcblxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBrZXlwb2ludEluZGV4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY29uc3Qga2V5cG9pbnQgPSBrZXlwb2ludHNba2V5cG9pbnRJbmRleGVzW2tdXTtcbiAgICAgICAgaWYgKGtleXBvaW50Lm1heGltYSAhPSBxdWVyeXBvaW50Lm1heGltYSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgZCA9IGhhbW1pbmdDb21wdXRlKHt2MToga2V5cG9pbnQuZGVzY3JpcHRvcnMsIHYyOiBxdWVyeXBvaW50LmRlc2NyaXB0b3JzfSk7XG4gICAgICAgIGlmIChkIDwgYmVzdEQxKSB7XG4gICAgICAgICAgYmVzdEQyID0gYmVzdEQxO1xuICAgICAgICAgIGJlc3REMSA9IGQ7XG4gICAgICAgICAgYmVzdEluZGV4ID0ga2V5cG9pbnRJbmRleGVzW2tdO1xuICAgICAgICB9IGVsc2UgaWYgKGQgPCBiZXN0RDIpIHtcbiAgICAgICAgICBiZXN0RDIgPSBkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYmVzdEluZGV4ICE9PSAtMSAmJiAoYmVzdEQyID09PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCAoMS4wICogYmVzdEQxIC8gYmVzdEQyKSA8IEhBTU1JTkdfVEhSRVNIT0xEKSkge1xuICAgICAgICBtYXRjaGVzLnB1c2goe3F1ZXJ5cG9pbnRJbmRleDogaiwga2V5cG9pbnRJbmRleDogYmVzdEluZGV4fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnTW9kZSkge1xuICAgICAgZGVidWdFeHRyYVtpXS5tYXRjaGVzID0gbWF0Y2hlcztcbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPCBNSU5fTlVNX0lOTElFUlMpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGhvdWdoTWF0Y2hlcyA9IGNvbXB1dGVIb3VnaE1hdGNoZXMoe1xuICAgICAga2V5cG9pbnRzOiBrZXlmcmFtZS5wb2ludHMsXG4gICAgICBxdWVyeXBvaW50cyxcbiAgICAgIGtleXdpZHRoOiBrZXlmcmFtZS53aWR0aCxcbiAgICAgIGtleWhlaWdodDoga2V5ZnJhbWUuaGVpZ2h0LFxuICAgICAgcXVlcnl3aWR0aCxcbiAgICAgIHF1ZXJ5aGVpZ2h0LFxuICAgICAgbWF0Y2hlcyxcbiAgICB9KTtcblxuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgIGRlYnVnRXh0cmFbaV0uaG91Z2hNYXRjaGVzID0gaG91Z2hNYXRjaGVzO1xuICAgIH1cblxuICAgIGNvbnN0IHNyY1BvaW50cyA9IFtdO1xuICAgIGNvbnN0IGRzdFBvaW50cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91Z2hNYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBxdWVyeXBvaW50ID0gcXVlcnlwb2ludHNbaG91Z2hNYXRjaGVzW2ldLnF1ZXJ5cG9pbnRJbmRleF07XG4gICAgICBjb25zdCBrZXlwb2ludCA9IGtleXBvaW50c1tob3VnaE1hdGNoZXNbaV0ua2V5cG9pbnRJbmRleF07XG4gICAgICBzcmNQb2ludHMucHVzaChbIGtleXBvaW50LngsIGtleXBvaW50LnkgXSk7XG4gICAgICBkc3RQb2ludHMucHVzaChbIHF1ZXJ5cG9pbnQueCwgcXVlcnlwb2ludC55IF0pO1xuICAgIH1cblxuICAgIGNvbnN0IEggPSBjb21wdXRlSG9tb2dyYXBoeSh7XG4gICAgICBzcmNQb2ludHMsXG4gICAgICBkc3RQb2ludHMsXG4gICAgICBrZXlmcmFtZSxcbiAgICB9KTtcblxuICAgIGlmIChIID09PSBudWxsKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGlubGllck1hdGNoZXMgPSBfZmluZElubGllck1hdGNoZXMoe1xuICAgICAgcXVlcnlwb2ludHMsXG4gICAgICBrZXlwb2ludHM6IGtleWZyYW1lLnBvaW50cyxcbiAgICAgIEgsXG4gICAgICBtYXRjaGVzOiBob3VnaE1hdGNoZXMsXG4gICAgICB0aHJlc2hvbGQ6IElOTElFUl9USFJFU0hPTERcbiAgICB9KTtcblxuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgIGRlYnVnRXh0cmFbaV0uaW5saWVyTWF0Y2hlcyA9IGlubGllck1hdGNoZXM7XG4gICAgfVxuXG4gICAgaWYgKGlubGllck1hdGNoZXMubGVuZ3RoIDwgTUlOX05VTV9JTkxJRVJTKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cblxuICAgIC8vIGRvIGFub3RoZXIgbG9vcCBvZiBtYXRjaCB1c2luZyB0aGUgaG9tb2dyYXBoeVxuICAgIGNvbnN0IEhJbnYgPSBtYXRyaXhJbnZlcnNlMzMoSCwgMC4wMDAwMSk7XG4gICAgY29uc3QgZFRocmVzaG9sZDIgPSAxMCAqIDEwO1xuICAgIGNvbnN0IG1hdGNoZXMyID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVyeXBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcXVlcnlwb2ludCA9IHF1ZXJ5cG9pbnRzW2pdO1xuICAgICAgY29uc3QgbWFwcXVlcnlwb2ludCA9IG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzKFtxdWVyeXBvaW50LngsIHF1ZXJ5cG9pbnQueV0sIEhJbnYpO1xuXG4gICAgICBsZXQgYmVzdEluZGV4ID0gLTE7XG4gICAgICBsZXQgYmVzdEQxID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICBsZXQgYmVzdEQyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5cG9pbnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNvbnN0IGtleXBvaW50ID0ga2V5cG9pbnRzW2tdO1xuICAgICAgICBpZiAoa2V5cG9pbnQubWF4aW1hICE9IHF1ZXJ5cG9pbnQubWF4aW1hKSBjb250aW51ZTtcblxuICAgICAgICAvLyBjaGVjayBkaXN0YW5jZSB0aHJlc2hvbGRcbiAgICAgICAgY29uc3QgZDIgPSAoa2V5cG9pbnQueCAtIG1hcHF1ZXJ5cG9pbnRbMF0pICogKGtleXBvaW50LnggLSBtYXBxdWVyeXBvaW50WzBdKVxuICAgICAgICAgICAgICAgICAgKyAoa2V5cG9pbnQueSAtIG1hcHF1ZXJ5cG9pbnRbMV0pICogKGtleXBvaW50LnkgLSBtYXBxdWVyeXBvaW50WzFdKTtcbiAgICAgICAgaWYgKGQyID4gZFRocmVzaG9sZDIpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGQgPSBoYW1taW5nQ29tcHV0ZSh7djE6IGtleXBvaW50LmRlc2NyaXB0b3JzLCB2MjogcXVlcnlwb2ludC5kZXNjcmlwdG9yc30pO1xuICAgICAgICBpZiAoZCA8IGJlc3REMSkge1xuICAgICAgICAgIGJlc3REMiA9IGJlc3REMTtcbiAgICAgICAgICBiZXN0RDEgPSBkO1xuICAgICAgICAgIGJlc3RJbmRleCA9IGs7XG4gICAgICAgIH0gZWxzZSBpZiAoZCA8IGJlc3REMikge1xuICAgICAgICAgIGJlc3REMiA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGJlc3RJbmRleCAhPT0gLTEgJiYgKGJlc3REMiA9PT0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgKDEuMCAqIGJlc3REMSAvIGJlc3REMikgPCBIQU1NSU5HX1RIUkVTSE9MRCkpIHtcbiAgICAgICAgbWF0Y2hlczIucHVzaCh7cXVlcnlwb2ludEluZGV4OiBqLCBrZXlwb2ludEluZGV4OiBiZXN0SW5kZXh9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVidWdNb2RlKSB7XG4gICAgICBkZWJ1Z0V4dHJhW2ldLm1hdGNoZXMyID0gbWF0Y2hlczI7XG4gICAgfVxuXG4gICAgY29uc3QgaG91Z2hNYXRjaGVzMiA9IGNvbXB1dGVIb3VnaE1hdGNoZXMoe1xuICAgICAga2V5cG9pbnRzOiBrZXlmcmFtZS5wb2ludHMsXG4gICAgICBxdWVyeXBvaW50cyxcbiAgICAgIGtleXdpZHRoOiBrZXlmcmFtZS53aWR0aCxcbiAgICAgIGtleWhlaWdodDoga2V5ZnJhbWUuaGVpZ2h0LFxuICAgICAgcXVlcnl3aWR0aCxcbiAgICAgIHF1ZXJ5aGVpZ2h0LFxuICAgICAgbWF0Y2hlczogbWF0Y2hlczIsXG4gICAgfSk7XG5cbiAgICBpZiAoZGVidWdNb2RlKSB7XG4gICAgICBkZWJ1Z0V4dHJhW2ldLmhvdWdoTWF0Y2hlczIgPSBob3VnaE1hdGNoZXMyO1xuICAgIH1cblxuICAgIGNvbnN0IHNyY1BvaW50czIgPSBbXTtcbiAgICBjb25zdCBkc3RQb2ludHMyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VnaE1hdGNoZXMyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBxdWVyeXBvaW50ID0gcXVlcnlwb2ludHNbaG91Z2hNYXRjaGVzMltpXS5xdWVyeXBvaW50SW5kZXhdO1xuICAgICAgY29uc3Qga2V5cG9pbnQgPSBrZXlwb2ludHNbaG91Z2hNYXRjaGVzMltpXS5rZXlwb2ludEluZGV4XTtcbiAgICAgIHNyY1BvaW50czIucHVzaChbIGtleXBvaW50LngsIGtleXBvaW50LnkgXSk7XG4gICAgICBkc3RQb2ludHMyLnB1c2goWyBxdWVyeXBvaW50LngsIHF1ZXJ5cG9pbnQueSBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBIMiA9IGNvbXB1dGVIb21vZ3JhcGh5KHtcbiAgICAgIHNyY1BvaW50czogc3JjUG9pbnRzMixcbiAgICAgIGRzdFBvaW50czogZHN0UG9pbnRzMixcbiAgICAgIGtleWZyYW1lXG4gICAgfSk7XG5cbiAgICBpZiAoSDIgPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgaW5saWVyTWF0Y2hlczIgPSBfZmluZElubGllck1hdGNoZXMoe1xuICAgICAgcXVlcnlwb2ludHMsXG4gICAgICBrZXlwb2ludHM6IGtleWZyYW1lLnBvaW50cyxcbiAgICAgIEg6IEgyLFxuICAgICAgbWF0Y2hlczogaG91Z2hNYXRjaGVzMixcbiAgICAgIHRocmVzaG9sZDogSU5MSUVSX1RIUkVTSE9MRFxuICAgIH0pO1xuXG4gICAgaWYgKGlubGllck1hdGNoZXMyLmxlbmd0aCA8IE1JTl9OVU1fSU5MSUVSUykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnTW9kZSkge1xuICAgICAgZGVidWdFeHRyYVtpXS5pbmxpZXJNYXRjaGVzMiA9IGlubGllck1hdGNoZXMyO1xuICAgICAgZGVidWdFeHRyYVtpXS5IMiA9IEgyO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0Lm1hdGNoZXMubGVuZ3RoIDwgaW5saWVyTWF0Y2hlczIubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIGtleWZyYW1lSW5kZXg6IGksXG4gICAgICAgIG1hdGNoZXM6IGlubGllck1hdGNoZXMyLFxuICAgICAgICBIOiBIMixcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3Jlc3VsdCwgZGVidWdFeHRyYX07XG59O1xuXG5jb25zdCBfcXVlcnkgPSAoe25vZGUsIGtleXBvaW50cywgcXVlcnlwb2ludCwgcXVldWUsIGtleXBvaW50SW5kZXhlcywgbnVtUG9wfSkgPT4ge1xuICBpZiAobm9kZS5sZWFmKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnBvaW50SW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cG9pbnRJbmRleGVzLnB1c2gobm9kZS5wb2ludEluZGV4ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkaXN0YW5jZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICBjb25zdCBjZW50ZXJQb2ludEluZGV4ID0gY2hpbGROb2RlLmNlbnRlclBvaW50SW5kZXg7XG4gICAgY29uc3QgZCA9IGhhbW1pbmdDb21wdXRlKHt2MToga2V5cG9pbnRzW2NlbnRlclBvaW50SW5kZXhdLmRlc2NyaXB0b3JzLCB2MjogcXVlcnlwb2ludC5kZXNjcmlwdG9yc30pO1xuICAgIGRpc3RhbmNlcy5wdXNoKGQpO1xuICB9XG5cbiAgbGV0IG1pbkQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgbWluRCA9IE1hdGgubWluKG1pbkQsIGRpc3RhbmNlc1tpXSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGlzdGFuY2VzW2ldICE9PSBtaW5EKSB7XG4gICAgICBxdWV1ZS5wdXNoKHtub2RlOiBub2RlLmNoaWxkcmVuW2ldLCBkOiBkaXN0YW5jZXNbaV19KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRpc3RhbmNlc1tpXSA9PT0gbWluRCkge1xuICAgICAgX3F1ZXJ5KHtub2RlOiBub2RlLmNoaWxkcmVuW2ldLCBrZXlwb2ludHMsIHF1ZXJ5cG9pbnQsIHF1ZXVlLCBrZXlwb2ludEluZGV4ZXMsIG51bVBvcH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChudW1Qb3AgPCBDTFVTVEVSX01BWF9QT1AgJiYgcXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHtub2RlLCBkfSA9IHF1ZXVlLnBvcCgpO1xuICAgIG51bVBvcCArPSAxO1xuICAgIF9xdWVyeSh7bm9kZSwga2V5cG9pbnRzLCBxdWVyeXBvaW50LCBxdWV1ZSwga2V5cG9pbnRJbmRleGVzLCBudW1Qb3B9KTtcbiAgfVxufTtcblxuY29uc3QgX2ZpbmRJbmxpZXJNYXRjaGVzID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge2tleXBvaW50cywgcXVlcnlwb2ludHMsIEgsIG1hdGNoZXMsIHRocmVzaG9sZH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHRocmVzaG9sZDIgPSB0aHJlc2hvbGQgKiB0aHJlc2hvbGQ7XG5cbiAgY29uc3QgZ29vZE1hdGNoZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcXVlcnlwb2ludCA9IHF1ZXJ5cG9pbnRzW21hdGNoZXNbaV0ucXVlcnlwb2ludEluZGV4XTtcbiAgICBjb25zdCBrZXlwb2ludCA9IGtleXBvaW50c1ttYXRjaGVzW2ldLmtleXBvaW50SW5kZXhdO1xuICAgIGNvbnN0IG1wID0gbXVsdGlwbHlQb2ludEhvbW9ncmFwaHlJbmhvbW9nZW5vdXMoW2tleXBvaW50LngsIGtleXBvaW50LnldLCBIKTtcbiAgICBjb25zdCBkMiA9IChtcFswXSAtIHF1ZXJ5cG9pbnQueCkgKiAobXBbMF0gLSBxdWVyeXBvaW50LngpICsgKG1wWzFdIC0gcXVlcnlwb2ludC55KSAqIChtcFsxXSAtIHF1ZXJ5cG9pbnQueSk7XG4gICAgaWYgKGQyIDw9IHRocmVzaG9sZDIpIHtcbiAgICAgIGdvb2RNYXRjaGVzLnB1c2goIG1hdGNoZXNbaV0gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdvb2RNYXRjaGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWF0Y2hcbn1cbiIsIi8vIGNoZWNrIHdoaWNoIHNpZGUgcG9pbnQgQyBvbiB0aGUgbGluZSBmcm9tIEEgdG8gQlxuY29uc3QgbGluZVBvaW50U2lkZSA9IChBLCBCLCBDKSA9PiB7XG4gIHJldHVybiAoKEJbMF0tQVswXSkqKENbMV0tQVsxXSktKEJbMV0tQVsxXSkqKENbMF0tQVswXSkpO1xufVxuXG4vLyBzcmNQb2ludHMsIGRzdFBvaW50czogYXJyYXkgb2YgZm91ciBlbGVtZW50cyBbeCwgeV1cbmNvbnN0IGNoZWNrRm91clBvaW50c0NvbnNpc3RlbnQgPSAoeDEsIHgyLCB4MywgeDQsIHgxcCwgeDJwLCB4M3AsIHg0cCkgPT4ge1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDEsIHgyLCB4MykgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDFwLCB4MnAsIHgzcCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDIsIHgzLCB4NCkgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDJwLCB4M3AsIHg0cCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDMsIHg0LCB4MSkgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDNwLCB4NHAsIHgxcCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDQsIHgxLCB4MikgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDRwLCB4MXAsIHgycCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgY2hlY2tUaHJlZVBvaW50c0NvbnNpc3RlbnQgPSAoeDEsIHgyLCB4MywgeDFwLCB4MnAsIHgzcCkgPT4ge1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDEsIHgyLCB4MykgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDFwLCB4MnAsIHgzcCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgZGV0ZXJtaW5hbnQgPSAoQSkgPT4ge1xuICBjb25zdCBDMSA9ICBBWzRdICogQVs4XSAtIEFbNV0gKiBBWzddO1xuICBjb25zdCBDMiA9ICBBWzNdICogQVs4XSAtIEFbNV0gKiBBWzZdO1xuICBjb25zdCBDMyA9ICBBWzNdICogQVs3XSAtIEFbNF0gKiBBWzZdO1xuICByZXR1cm4gQVswXSAqIEMxIC0gQVsxXSAqIEMyICsgQVsyXSAqIEMzO1xufVxuXG5jb25zdCBtYXRyaXhJbnZlcnNlMzMgPSAoQSwgdGhyZXNob2xkKSA9PiB7XG4gIGNvbnN0IGRldCA9IGRldGVybWluYW50KEEpO1xuICBpZiAoTWF0aC5hYnMoZGV0KSA8PSB0aHJlc2hvbGQpIHJldHVybiBudWxsO1xuICBjb25zdCBvbmVPdmVyID0gMS4wIC8gZGV0O1xuXG4gIGNvbnN0IEIgPSBbXG4gICAgKEFbNF0gKiBBWzhdIC0gQVs1XSAqIEFbN10pICogb25lT3ZlcixcbiAgICAoQVsyXSAqIEFbN10gLSBBWzFdICogQVs4XSkgKiBvbmVPdmVyLFxuICAgIChBWzFdICogQVs1XSAtIEFbMl0gKiBBWzRdKSAqIG9uZU92ZXIsXG4gICAgKEFbNV0gKiBBWzZdIC0gQVszXSAqIEFbOF0pICogb25lT3ZlcixcbiAgICAoQVswXSAqIEFbOF0gLSBBWzJdICogQVs2XSkgKiBvbmVPdmVyLFxuICAgIChBWzJdICogQVszXSAtIEFbMF0gKiBBWzVdKSAqIG9uZU92ZXIsXG4gICAgKEFbM10gKiBBWzddIC0gQVs0XSAqIEFbNl0pICogb25lT3ZlcixcbiAgICAoQVsxXSAqIEFbNl0gLSBBWzBdICogQVs3XSkgKiBvbmVPdmVyLFxuICAgIChBWzBdICogQVs0XSAtIEFbMV0gKiBBWzNdKSAqIG9uZU92ZXIsXG4gIF07XG4gIHJldHVybiBCO1xufVxuXG5jb25zdCBtYXRyaXhNdWwzMyA9IChBLCBCKSA9PiB7XG4gIGNvbnN0IEMgPSBbXTtcbiAgQ1swXSA9IEFbMF0qQlswXSArIEFbMV0qQlszXSArIEFbMl0qQls2XTtcbiAgQ1sxXSA9IEFbMF0qQlsxXSArIEFbMV0qQls0XSArIEFbMl0qQls3XTtcbiAgQ1syXSA9IEFbMF0qQlsyXSArIEFbMV0qQls1XSArIEFbMl0qQls4XTtcbiAgQ1szXSA9IEFbM10qQlswXSArIEFbNF0qQlszXSArIEFbNV0qQls2XTtcbiAgQ1s0XSA9IEFbM10qQlsxXSArIEFbNF0qQls0XSArIEFbNV0qQls3XTtcbiAgQ1s1XSA9IEFbM10qQlsyXSArIEFbNF0qQls1XSArIEFbNV0qQls4XTtcbiAgQ1s2XSA9IEFbNl0qQlswXSArIEFbN10qQlszXSArIEFbOF0qQls2XTtcbiAgQ1s3XSA9IEFbNl0qQlsxXSArIEFbN10qQls0XSArIEFbOF0qQls3XTtcbiAgQ1s4XSA9IEFbNl0qQlsyXSArIEFbN10qQls1XSArIEFbOF0qQls4XTtcbiAgcmV0dXJuIEM7XG59XG5cbmNvbnN0IG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzID0gKHgsIEgpID0+IHtcbiAgY29uc3QgdyA9IEhbNl0qeFswXSArIEhbN10qeFsxXSArIEhbOF07XG4gIGNvbnN0IHhwID0gW107XG4gIHhwWzBdID0gKEhbMF0qeFswXSArIEhbMV0qeFsxXSArIEhbMl0pL3c7XG4gIHhwWzFdID0gKEhbM10qeFswXSArIEhbNF0qeFsxXSArIEhbNV0pL3c7XG4gIHJldHVybiB4cDtcbn1cblxuY29uc3Qgc21hbGxlc3RUcmlhbmdsZUFyZWEgPSAoeDEsIHgyLCB4MywgeDQpID0+IHtcbiAgY29uc3QgdjEyID0gX3ZlY3Rvcih4MiwgeDEpO1xuICBjb25zdCB2MTMgPSBfdmVjdG9yKHgzLCB4MSk7XG4gIGNvbnN0IHYxNCA9IF92ZWN0b3IoeDQsIHgxKTtcbiAgY29uc3QgdjMyID0gX3ZlY3Rvcih4MiwgeDMpO1xuICBjb25zdCB2MzQgPSBfdmVjdG9yKHg0LCB4Myk7XG4gIGNvbnN0IGExID0gX2FyZWFPZlRyaWFuZ2xlKHYxMiwgdjEzKTtcbiAgY29uc3QgYTIgPSBfYXJlYU9mVHJpYW5nbGUodjEzLCB2MTQpO1xuICBjb25zdCBhMyA9IF9hcmVhT2ZUcmlhbmdsZSh2MTIsIHYxNCk7XG4gIGNvbnN0IGE0ID0gX2FyZWFPZlRyaWFuZ2xlKHYzMiwgdjM0KTtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWluKE1hdGgubWluKGExLCBhMiksIGEzKSwgYTQpO1xufVxuXG4vLyBjaGVjayBpZiBmb3VyIHBvaW50cyBmb3JtIGEgY29udmV4IHF1YWRyaWxhdGVybmFsLlxuLy8gYWxsIGZvdXIgY29tYmluYXRpb25zIHNob3VsZCBoYXZlIHNhbWUgc2lnblxuY29uc3QgcXVhZHJpbGF0ZXJhbENvbnZleCA9ICh4MSwgeDIsIHgzLCB4NCkgPT4ge1xuICBjb25zdCBmaXJzdCA9IGxpbmVQb2ludFNpZGUoeDEsIHgyLCB4MykgPD0gMDtcbiAgaWYgKCAobGluZVBvaW50U2lkZSh4MiwgeDMsIHg0KSA8PSAwKSAhPT0gZmlyc3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKCAobGluZVBvaW50U2lkZSh4MywgeDQsIHgxKSA8PSAwKSAhPT0gZmlyc3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKCAobGluZVBvaW50U2lkZSh4NCwgeDEsIHgyKSA8PSAwKSAhPT0gZmlyc3QpIHJldHVybiBmYWxzZTtcblxuICAvL2lmIChsaW5lUG9pbnRTaWRlKHgxLCB4MiwgeDMpIDw9IDApIHJldHVybiBmYWxzZTtcbiAgLy9pZiAobGluZVBvaW50U2lkZSh4MiwgeDMsIHg0KSA8PSAwKSByZXR1cm4gZmFsc2U7XG4gIC8vaWYgKGxpbmVQb2ludFNpZGUoeDMsIHg0LCB4MSkgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAvL2lmIChsaW5lUG9pbnRTaWRlKHg0LCB4MSwgeDIpIDw9IDApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IF92ZWN0b3IgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gW1xuICAgIGFbMF0gLSBiWzBdLFxuICAgIGFbMV0gLSBiWzFdXG4gIF1cbn1cblxuY29uc3QgX2FyZWFPZlRyaWFuZ2xlID0gKHUsIHYpID0+IHtcbiAgY29uc3QgYSA9IHVbMF0qdlsxXSAtIHVbMV0qdlswXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEpICogMC41O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWF0cml4SW52ZXJzZTMzLFxuICBtYXRyaXhNdWwzMyxcbiAgcXVhZHJpbGF0ZXJhbENvbnZleCxcbiAgc21hbGxlc3RUcmlhbmdsZUFyZWEsXG4gIG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzLFxuICBjaGVja1RocmVlUG9pbnRzQ29uc2lzdGVudCxcbiAgY2hlY2tGb3VyUG9pbnRzQ29uc2lzdGVudCxcbiAgZGV0ZXJtaW5hbnRcbn1cblxuIiwiY29uc3QgbVJhbmRTZWVkID0gMTIzNDtcblxuY29uc3QgY3JlYXRlUmFuZG9taXplciA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9taXplciA9IHtcbiAgICBzZWVkOiBtUmFuZFNlZWQsXG5cbiAgICBhcnJheVNodWZmbGUob3B0aW9ucykge1xuICAgICAgY29uc3Qge2Fyciwgc2FtcGxlU2l6ZX0gPSBvcHRpb25zO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVTaXplOyBpKyspIHtcblxuICAgICAgICB0aGlzLnNlZWQgPSAoMjE0MDEzICogdGhpcy5zZWVkICsgMjUzMTAxMSkgJSAoMSA8PCAzMSk7XG4gICAgICAgIGxldCBrID0gKHRoaXMuc2VlZCA+PiAxNikgJiAweDdmZmY7XG4gICAgICAgIGsgPSBrICUgYXJyLmxlbmd0aDtcblxuICAgICAgICBsZXQgdG1wID0gYXJyW2ldO1xuICAgICAgICBhcnJbaV0gPSBhcnJba107XG4gICAgICAgIGFycltrXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbmV4dEludChtYXhWYWx1ZSkge1xuICAgICAgdGhpcy5zZWVkID0gKDIxNDAxMyAqIHRoaXMuc2VlZCArIDI1MzEwMTEpICUgKDEgPDwgMzEpO1xuICAgICAgbGV0IGsgPSAodGhpcy5zZWVkID4+IDE2KSAmIDB4N2ZmZjtcbiAgICAgIGsgPSBrICUgbWF4VmFsdWU7XG4gICAgICByZXR1cm4gaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhbmRvbWl6ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVSYW5kb21pemVyXG59XG4iXSwic291cmNlUm9vdCI6IiJ9