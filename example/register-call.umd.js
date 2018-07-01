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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/register-call-wrapper/lib/config.js":
/*!***********************************************************!*\
  !*** ../node_modules/register-call-wrapper/lib/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API_URL = exports.API_URL = 'https://api-registercall.herokuapp.com';\n\nvar HEADERS = exports.HEADERS = {\n  headers: {}\n};\n\n//# sourceURL=webpack:///../node_modules/register-call-wrapper/lib/config.js?");

/***/ }),

/***/ "../node_modules/register-call-wrapper/lib/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/register-call-wrapper/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */\n\nvar _register = __webpack_require__(/*! ./register */ \"../node_modules/register-call-wrapper/lib/register.js\");\n\nvar _register2 = _interopRequireDefault(_register);\n\nvar _config = __webpack_require__(/*! ./config */ \"../node_modules/register-call-wrapper/lib/config.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"../node_modules/register-call-wrapper/lib/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RegisterCallWrapper = function () {\n  function RegisterCallWrapper(options) {\n    _classCallCheck(this, RegisterCallWrapper);\n\n    this.apiURL = options.apiURL || _config.API_URL;\n    this.register = _register2.default.bind(this)();\n  }\n\n  _createClass(RegisterCallWrapper, [{\n    key: 'request',\n    value: function request(url) {\n      var headers = null;\n      return fetch(url, headers).then(_utils.toJson);\n    }\n  }]);\n\n  return RegisterCallWrapper;\n}();\n\nexports.default = RegisterCallWrapper;\n\n//# sourceURL=webpack:///../node_modules/register-call-wrapper/lib/index.js?");

/***/ }),

/***/ "../node_modules/register-call-wrapper/lib/register.js":
/*!*************************************************************!*\
  !*** ../node_modules/register-call-wrapper/lib/register.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = register;\nfunction registerRout() {\n  return this.request(this.apiURL + \"/register/?format=json\");\n}\n\nfunction register() {\n  return {\n    registers: registerRout.bind(this)\n  };\n}\n\n//# sourceURL=webpack:///../node_modules/register-call-wrapper/lib/register.js?");

/***/ }),

/***/ "../node_modules/register-call-wrapper/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/register-call-wrapper/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  toJson: function toJson(data) {\n    return data.json();\n  }\n};\n\n//# sourceURL=webpack:///../node_modules/register-call-wrapper/lib/utils.js?");

/***/ }),

/***/ "./attendances.js":
/*!************************!*\
  !*** ./attendances.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = renderAttendance;\nfunction createMarkup(data) {\n  return data.map(function (album) {\n    return '\\n      <div class=\"open-attendance\">\\n        <span>' + album.call_datetime + '</span>\\n        <span></span>\\n        <a href=\"#\">\\n          <span></span>\\n        </a>\\n      </div>      \\n    ';\n  }).join('');\n}\n\nfunction renderAttendance(data, element) {\n  var markup = createMarkup(data);\n  var el = element;\n  el.innerHTML = markup;\n  return data;\n}\n\n//# sourceURL=webpack:///./attendances.js?");

/***/ }),

/***/ "./attendancesTrigger.js":
/*!*******************************!*\
  !*** ./attendancesTrigger.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = attendancesTrigger;\n\nvar _registerCall = __webpack_require__(/*! ./registerCall */ \"./registerCall.js\");\n\nvar _registerCall2 = _interopRequireDefault(_registerCall);\n\nvar _attendances = __webpack_require__(/*! ./attendances */ \"./attendances.js\");\n\nvar _attendances2 = _interopRequireDefault(_attendances);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-env browser */\n\nvar listAttendances = document.getElementById('attendances');\n\nfunction makeRequest() {\n  _registerCall2.default.register.registers().then(function (data) {\n    return (0, _attendances2.default)(data, listAttendances);\n  });\n}\n\nfunction attendancesTrigger() {\n  setInterval(makeRequest, 1000);\n}\n\n//# sourceURL=webpack:///./attendancesTrigger.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _attendancesTrigger = __webpack_require__(/*! ./attendancesTrigger */ \"./attendancesTrigger.js\");\n\nvar _attendancesTrigger2 = _interopRequireDefault(_attendancesTrigger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _attendancesTrigger2.default)();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./registerCall.js":
/*!*************************!*\
  !*** ./registerCall.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _registerCallWrapper = __webpack_require__(/*! register-call-wrapper */ \"../node_modules/register-call-wrapper/lib/index.js\");\n\nvar _registerCallWrapper2 = _interopRequireDefault(_registerCallWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar registerCall = new _registerCallWrapper2.default({});\n\nexports.default = registerCall;\n\n//# sourceURL=webpack:///./registerCall.js?");

/***/ })

/******/ });