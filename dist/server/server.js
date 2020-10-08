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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4344e9f428e2e9048b1f45b1e38d1e9f.svg");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var express_1 = __importDefault(__webpack_require__(4));
var server_1 = __importDefault(__webpack_require__(5));
var indexHtmlTemplate_1 = __webpack_require__(6);
var App_1 = __webpack_require__(7);
var react_router_dom_1 = __webpack_require__(1); //исправление ошибки Error: Invariant failed: Browser history needs a DOM
// еще какой-то вариант исправления той же ошибки
// let history
//
// if (typeof document !== 'undefined') {
//   const createBrowserHistory = require('history/createBrowserHistory').default
//
//   history = createBrowserHistory()
// }
//
// export default history
var app = express_1.default(); //инициализация. Теперь app это instance нашего приложения
app.use('/static', express_1.default.static('./dist/client')); //спец роут кот будет раздавать статические файлы. По urlу /static будут доступны все файлы кот лежат в папке dist/client.
app.get('/', function (req, res) {
    var context = {};
    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
        react_1.default.createElement(App_1.App, null)))));
});
app.listen(3000, function () {
    console.log('server started on http://localhost:3000');
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexHtmlTemplate = void 0;
exports.indexHtmlTemplate = function (content) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>JS Diploma Andrey</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <link\n          rel=\"stylesheet\"\n          href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n  />\n</head>\n<body>\n<!--Max, [21.07.20 17:12]-->\n<!--  \u0414\u0435\u043B\u0430\u044E \u0434\u0438\u043F\u043B\u043E\u043C \u043F\u043E js, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E fetch \u0438 async / await.-->\n<!--  \u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u0441\u044F \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0438 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0441\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u0435 10 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439.-->\n<!--  \u041C\u043E\u0436\u043D\u043E \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C \u0431\u043B\u043E\u043A \u0441 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438 \u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F async \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u043D\u043E \u0442\u043E\u0433\u0434\u0430 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u0434\u0435\u043B\u0430\u0442\u044C \u0431\u043B\u043E\u043A\u0443 \u0441 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438 \u0438 \u0432\u0441\u0435\u043C\u0443 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u043D\u044B\u0439 \u0441\u0442\u043E\u0440,-->\n<!--  \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043D\u0435 \u0436\u0434\u0430\u043B \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u043A\u0430 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435, \u0434\u043E \u0447\u0435\u0433\u043E \u044F \u0434\u043E\u0434\u0443\u043C\u0430\u043B\u0441\u044F, \u0437\u0430\u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C \u0441\u043A\u0440\u044B\u0442\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0439 \u0430\u0432\u0442\u043E\u0444\u043E\u043A\u0443\u0441 \u0438 \u043F\u043E\u0432\u0435\u0441\u0438\u0442\u044C-->\n<!--  \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A onFocus-->\n\n<!--  Aleksandr \u00AF\\_(\u30C4)_/\u00AF Kuznetsov, [21.07.20 17:12]-->\n<!--  \u0412\u0441\u0435 \u043F\u0440\u043E\u0449\u0435. \u0422\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043C\u0430\u0443\u043D\u0442 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u0435\u043B. \u0412 \u041A\u0443\u0440\u0441\u0435 \u0432\u043E\u0442 \u0420\u0435\u0430\u043A\u0442 \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u0445\u0443\u043A \u0432 \u043E\u0434\u043D\u043E \u0438\u0437 \u0443\u0440\u043E\u043A\u043E\u0432 useIsMounted \u0441 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435\u043C \u043A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.-->\n<!--  \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u043D\u0430\u043B\u043E\u0433. \u0414\u0430\u043B\u0435\u0435 \u043E\u0442\u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u044C \u0441\u0430\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u0435\u043B mount \u0438 \u0432 \u043D\u0435\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435.-->\n<!--  \u0418\u0442\u043E\u0433\u043E:-->\n<!--  1) \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0433\u0440\u0443\u0437\u0438\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438, \u0432\u043D\u0443\u0442\u0440\u0438 dispatch(loadFirstTenPhoto)-->\n<!--  2) \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0438\u0437 \u043F\u0443\u043D\u043A\u0442\u0430 \u043E\u0434\u0438\u043D \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 componentDidMount \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0445\u0443\u043A\u0430-->\n<!--  3) \u041F\u043E \u0444\u0430\u043A\u0442\u0443 \u0440\u0435\u043D\u0434\u0435\u0440\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0438\u0437 \u043F\u0443\u043D\u043A\u0442\u0430 1 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443.-->\n<!--  \u0412\u0430\u0436\u043D\u043E \u0447\u0442\u043E-\u0431\u044B \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0438\u0437 \u043F. 1 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043B\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437. \u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0430\u043A\u043E\u0439 action / \u0437\u0430\u043F\u0440\u043E\u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043F\u0435\u0440\u0432\u044B\u0445 10 \u0444\u043E\u0442\u043E \u0432 \u0441\u0442\u043E\u0440\u0435-->\n<!--  \u0424\u0430\u043A\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0430 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u043F\u0440\u043E\u0449\u0435 \u043E\u0442\u0441\u043B\u0435\u0434\u0438\u0442\u044C/\u043F\u0440\u0435\u0440\u0432\u0430\u0442\u044C, \u043D\u0435\u0436\u0435\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u043F\u0440\u043E\u0441 \u0432 didMount.-->\n<!--  \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0443\u0434\u043E\u0431\u043D\u043E \u0435\u0441\u043B\u0438 \u044E\u0437\u0430\u0442\u044C hooks \u0438 \u043F\u0440\u043E\u0441\u0442\u043E React.useEffect(() =>, []) \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C-->\n\n<!--  Max, [21.07.20 17:19]-->\n<!--  \u041E\u043A, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044E) \u043F\u043E\u0447\u0438\u0442\u0430\u044E \u043F\u0440\u043E \u0445\u0443\u043A\u0438 \u0438 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u043A\u043B. \u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0443 \u043C\u0435\u043D\u044F \u0438\u0434\u0451\u0442 \u043F\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0443 page \u0432 \u0441\u0442\u043E\u0440\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0440\u0430\u0432\u0435\u043D \u043D\u0443\u043B\u044E, \u0438 \u043F\u043E\u0442\u043E\u043C \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0435\u0434\u0438\u043D\u0438\u0446\u0443-->\n\n<!--  Aleksandr \u00AF\\_(\u30C4)_/\u00AF Kuznetsov, [21.07.20 17:20]-->\n<!--  \u0427\u0443\u0442\u044C \u043B\u0443\u0447\u0448\u0435 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0430\u043C\u0438\u0445 \u0444\u043E\u0442\u043E, \u0447\u0435\u043C \u043D\u0430 \u0441\u043E\u043F\u0443\u0442\u0441\u0432\u0443\u044E\u0449\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440.-->\n<!--  Page \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435 \u0440\u0430\u0432\u0435\u043D \u043D\u0443\u043B\u044E \u043F\u043E \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0435 \u0438 \u0442\u043E\u0433\u0434\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0441\u0440\u0430\u0437\u0443 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u044F\u0442\u0441\u044F.-->\n<!--  \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C \u043D\u0430 \u043A\u043E\u043B-\u0432\u043E \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u0442\u043E \u0441\u0430\u043C\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0441 \u0438\u0445 \u00AB\u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439\u00BB \u0431\u0443\u0434\u0435\u0442 \u043D\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430.-->\n<!--  \u042D\u0442\u043E \u0442\u0438\u043F\u043E \u0432\u0441\u044F\u043A\u0438\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F-->\n    <div id=\"react_root\">" + content + "</div>\n</body>\n</html>\n"; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(8);
var root_1 = __webpack_require__(9);
var unsplash_js_1 = __importStar(__webpack_require__(10));
var CardList_1 = __webpack_require__(11);
var react_router_dom_1 = __webpack_require__(1);
var Header_1 = __webpack_require__(25);
var Footer_1 = __webpack_require__(27);
var CardPage_1 = __webpack_require__(29);
// const accessKey=process.env.REACT_APP_ACCESSKEY;//ключ прячем в рут (файл .env) дабы никто не мог его прочитать.
// const apiRoot = 'http://api.unsplash.com';
// Создаем экземпляр объекта для доступа к API
var unsplash = new unsplash_js_1.default({
    accessKey: "sQ_OK-FHQD1dS6L4h98HkNOr-HHHKRE8KuUPVf9BXAw",
    secret: "Eu_hWiHa3mUGcHyGtq2Idfj_gGCGYq6Jp0mv1ZL_kjA",
    callbackUrl: "https://jsdiploma.nef-an.ru/auth",
});
var authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes" // и указываем требуемые разрешения (permissions)
]);
// location.assign(authenticationUrl);// Отправляем пользователя по этому адресу
var AppComponent = function () {
    var _a = react_1.useState([]), images = _a[0], setImages = _a[1]; //стейт списка фоток
    var _b = react_1.useState({}), openedImage = _b[0], setOpenedImage = _b[1];
    var _c = react_1.useState(1005), page = _c[0], setPage = _c[1];
    var _d = react_1.useState(''), likedId = _d[0], setLikedId = _d[1];
    var _e = react_1.useState(false), open = _e[0], setOpen = _e[1];
    var _f = react_1.useState(false), pressed = _f[0], setPressed = _f[1];
    var toAuthorize = function () {
        // alert('auth is pressed')
        location.assign(authenticationUrl); // Отправляем пользователя по этому адресу
        //после подтверждения, всяк сюда нажавший перенаправляется на эту страницу - callbackUrl: "https://jsdiploma.nef-an.ru/auth"
    };
    var getImageObj = function (chosenId) {
        var filteredImages = images.filter(function (eachElementOfArr) { return eachElementOfArr.id === chosenId; });
        setOpenedImage(filteredImages[0]);
        setOpen(true);
    };
    var listPhotos = function () {
        unsplash.photos.listPhotos(page, 10, "latest") // метод из библиотеки https://github.com/unsplash/unsplash-js#photos. photos.listPhotos(page, perPage, orderBy)
            .then(unsplash_js_1.toJson)
            .then(function (json) {
            setImages(__spreadArrays(images, json)); //установка нов стейта списка фоток
            setPage(page + 1);
            console.log('page is:', page);
            console.log('json is:', json);
            console.log('images is:', images);
        });
    };
    var likePhoto = function (id) {
        console.log(id + " liking is in process...");
        unsplash.photos.likePhoto(id) // метод из библиотеки https://github.com/unsplash/unsplash-js#photos
            .then(unsplash_js_1.toJson)
            .then(function (json) {
            console.log(id + " is liked");
        });
    };
    var unlikePhoto = function (likedId) {
        unsplash.photos.unlikePhoto({ likedId: likedId }) // метод из библиотеки https://github.com/unsplash/unsplash-js#photos
            .then(unsplash_js_1.toJson)
            .then(function (json) {
            //code
        });
    };
    react_1.useEffect(function () {
        listPhotos();
        // likePhoto();
        // unlikePhoto();
        // toAuthorize();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.Header, { toAuthorize: toAuthorize }),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: function () {
                    return react_1.default.createElement(CardList_1.CardList, { add: listPhotos, images: images, getImageObj: getImageObj, pressed: pressed, setPressed: setPressed, setLikedId: setLikedId });
                } }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/auth', component: function () {
                    return react_1.default.createElement(CardList_1.CardList, { add: listPhotos, images: images, getImageObj: getImageObj, pressed: pressed, setPressed: setPressed, setLikedId: setLikedId });
                } }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/cardpage', component: function () {
                    return react_1.default.createElement(CardPage_1.CardPage, { openedImage: openedImage, open: open, pressed: pressed, setPressed: setPressed, likePhoto: likePhoto, likedId: likedId, setLikedId: setLikedId });
                } })),
        react_1.default.createElement(Footer_1.Footer, null)));
};
exports.App = root_1.hot(function () {
    return (react_1.default.createElement(AppComponent, null));
}); // HOC. Если используются Hooks, тобишь UseState итд
// export const App = hot(AppComponent);//если не используются Hooks.
// <InfiniteScroll
//   dataLength={images.length}
//   next={fetchImages}
//   hasMore={true}
//   loader={<p>Loading...</p>}
// >
// </InfiniteScroll>
// componentDidMount = ()=>{//заводской метод, срабатывающий после метода render и указывающий что именно сделать после изначальной отрисовки.
//   this.setState({// установить состояние при условии
//     items: localStorage.commentItems //есть ли запись в локале?
//     ? JSON.parse(localStorage.getItem('commentItems'))// считать массив в JSON формате('text','text') из localeStorage а если его там нет то просто установить пустой массив
//     : this.state.items//если нет, то просто оставить как есть. Можно написать просто items вместо this.state.items.
//   })
// }
//
// updateLocalStorage(newSet) {
//   localStorage.setItem('commentItems', JSON.stringify(newSet))
// }
//
// handleChange(event) {//при любом изменении полей идет обновление состояния
//   const objKey = event.target.name === 'js-textContent' ? 'formText' : 'formName';//условие определяющее какой ключ менять
//   const targetValue = event.target.value// какую инфу записывать в значение
//   this.setState({//обновить состояние с добавлением изменений
// 		[objKey]: targetValue,
//   });
// }
// handleSubmit(event) {
//   event.preventDefault();//сброс отправки формы и открытия дефолтной нов страницы
//   const itemsArr = this.state.items;//считываем состояние базы
// 	const submittedName = this.state.formName;//считываем данные на отправку из базы
// 	const submittedText = this.state.formText;//считываем данные на отправку из базы
//   const submittedDate = new Date().toLocaleString('ru');//определяем нынешнее время
//   const newItem = {//создаем объект с этими свежими данными
//     name: submittedName,
//     text: submittedText,
//     date: submittedDate,
//   };
//   itemsArr.push(newItem);//засовываем этот новый объект в общее состояние (в конец)
//   this.setState(itemsArr);//устанавливаем новое состояние базы
//   this.updateLocalStorage(itemsArr); //записываем свежий массив в локал в формате('text','text'), тобишь в формате JSON
// 	this.setState({//обновляем состояние на пустые поля
//     formName:'',
//     formText:'',
//     formDate:''
//   });
// }
//   addToList() {
//     this.setState(prevState => ({
//         list: prevState.list.concat(this.state.text),
//         text: ''
//     }))
// }
// removeItem(item) {
//   const item = getItem(this.state.list, item.id) // Method to get item in list through comparison (IE: find some item with item.id), it has to return ITEM and INDEX in array
//   const newlist = [].concat(list) // Clone array with concat or slice(0)
//   newlist.splice(item.index, 1);
//   this.setState({list: newlist});
// }
// handleDelete = chosenItem => {//атрибут приходит с кнопки удалить
//   let itemsArr = this.state.items;//считываем состояние
//   itemsArr.splice(chosenItem, 1);//удаляем выбранный итем методом массива splice(начиная с chosenItem в количестве 1 шт)
//   this.setState({items: itemsArr});//обновляем состояние
//   this.updateLocalStorage(itemsArr); //записываем массив в локал в формате('text','text'), тобишь в формате JSON
//
//   arr.forEach((item,index) => {//перебирается существующий массив и
//     if(item.name === '7') {//если в элементе(обьект) есть св-во с этим значением
//       arr.splice(index,1);//то у себя же и удалить этот элемент(обьект)
//     }
//   });
// };
// export default App
// componentDidMount() {
// 	this.timerID = setInterval(
// 		() => this.tick(),
// 		1000
// 	);
// }
// componentWillUnmount() {
// 	clearInterval(this.timerID);
// }
// axios
//   .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
//   .then(res=>setImages([...images, ...res.data]))// Добавляем к уже имеющимся картинкам этот ответ кот приходит в res.data в виде массива обьектов где записаны данные о кажд картинке (url, id, categories etc).


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("unsplash-js");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var cardList_css_1 = __importDefault(__webpack_require__(12));
var Card_1 = __webpack_require__(13);
// import loader from '../../Icons/Gear.gif'
function CardList(_a) {
    var add = _a.add, images = _a.images, getImageObj = _a.getImageObj, pressed = _a.pressed, setPressed = _a.setPressed, setLikedId = _a.setLikedId;
    var allCardsArr;
    if (images.length === 0) {
        // allCardsArr=<img src={loader} alt={'loader'}/>
        allCardsArr = react_1.default.createElement("span", { className: cardList_css_1.default.loading }, "loading...");
    }
    else {
        allCardsArr = images.map(function (item, i) {
            return (react_1.default.createElement(Card_1.Card, { key: item.id, id: item.id, created: item.created_at, name: item.user.first_name, profile: item.user.links.html, likes: item.likes, url: item.urls.thumb, ava: item.user.profile_image.small, description: item.alt_description, getImageObj: getImageObj, pressed: pressed, setPressed: setPressed, setLikedId: setLikedId }));
        });
    }
    return (react_1.default.createElement("main", { className: cardList_css_1.default.mainContainer },
        react_1.default.createElement("section", { className: cardList_css_1.default.centralContainer },
            react_1.default.createElement("ul", { className: cardList_css_1.default.cardList }, allCardsArr)),
        react_1.default.createElement("button", { className: cardList_css_1.default.button, type: "button", onClick: add }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435")));
}
exports.CardList = CardList;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainContainer": "cardList__mainContainer--hECic",
	"centralContainer": "cardList__centralContainer--csiGQ",
	"loading": "cardList__loading--3YAQK",
	"cardList": "cardList__cardList--umYKk",
	"button": "cardList__button--3rprj"
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(14));
var Controls_1 = __webpack_require__(15);
var Info_1 = __webpack_require__(19);
var Preview_1 = __webpack_require__(23);
var react_router_dom_1 = __webpack_require__(1);
function Card(_a) {
    var add = _a.add, url = _a.url, created = _a.created, likes = _a.likes, profile = _a.profile, name = _a.name, ava = _a.ava, description = _a.description, open = _a.open, id = _a.id, getImageObj = _a.getImageObj, pressed = _a.pressed, setPressed = _a.setPressed, setLikedId = _a.setLikedId;
    return (react_1.default.createElement("div", { className: card_css_1.default.card },
        react_1.default.createElement(Info_1.Info, { created: created, profile: profile, name: name, ava: ava, description: description }),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/cardpage', onClick: function () { return getImageObj(id); } },
            react_1.default.createElement(Preview_1.Preview, { url: url })),
        react_1.default.createElement(Controls_1.Controls, { likes: likes, pressed: pressed, setPressed: setPressed, setLikedId: setLikedId })));
}
exports.Card = Card;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-"
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(16));
var LikesCounter_1 = __webpack_require__(17);
function Controls(_a) {
    var likes = _a.likes, pressed = _a.pressed, setPressed = _a.setPressed, setLikedId = _a.setLikedId;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(LikesCounter_1.LikesCounter, { likes: likes, pressed: pressed, setPressed: setPressed, setLikedId: setLikedId })));
}
exports.Controls = Controls;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI"
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var likesCounter_css_1 = __importDefault(__webpack_require__(18));
var HeartIconUnpressed_svg_1 = __importDefault(__webpack_require__(2));
function LikesCounter(_a) {
    var likes = _a.likes, pressed = _a.pressed, setLikedId = _a.setLikedId;
    return (react_1.default.createElement("div", { className: likesCounter_css_1.default.likesCounter },
        react_1.default.createElement("span", { className: likesCounter_css_1.default.likesValue }, likes),
        react_1.default.createElement("button", { className: likesCounter_css_1.default.button, onClick: function () { console.log('btn is pressed'); } },
            react_1.default.createElement("img", { src: HeartIconUnpressed_svg_1.default, alt: 'heart' }))));
}
exports.LikesCounter = LikesCounter;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"likesCounter": "likesCounter__likesCounter--1fP_X",
	"likesValue": "likesCounter__likesValue--2nDQs",
	"button": "likesCounter__button--3TsBj"
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var info_css_1 = __importDefault(__webpack_require__(20));
var MetaData_1 = __webpack_require__(21);
function Info(_a) {
    var created = _a.created, profile = _a.profile, name = _a.name, ava = _a.ava, description = _a.description;
    return (react_1.default.createElement("div", { className: info_css_1.default.infoContainer },
        react_1.default.createElement("div", { className: info_css_1.default.metaContainer },
            react_1.default.createElement(MetaData_1.MetaData, { created: created, profile: profile, name: name, ava: ava }))));
}
exports.Info = Info;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"infoContainer": "info__infoContainer--1ksMR",
	"metaContainer": "info__metaContainer--1ezA1",
	"titleContainer": "info__titleContainer--jZsG-"
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var metadata_css_1 = __importDefault(__webpack_require__(22));
function MetaData(_a) {
    var created = _a.created, profile = _a.profile, name = _a.name, ava = _a.ava;
    var date = created.slice(0, 10);
    // const time = created.slice(11,15);
    // const formattedDate = [date, time].join("/")
    return (react_1.default.createElement("div", { className: metadata_css_1.default.metaData },
        react_1.default.createElement("a", { href: profile, className: metadata_css_1.default.userLink },
            react_1.default.createElement("img", { className: metadata_css_1.default.avatar, src: ava, alt: "avatar" }),
            react_1.default.createElement("span", { className: metadata_css_1.default.userName }, name)),
        react_1.default.createElement("span", { className: metadata_css_1.default.createdAt }, date)));
}
exports.MetaData = MetaData;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"metaData": "metadata__metaData--1IsDb",
	"userLink": "metadata__userLink--2Eaw6",
	"avatar": "metadata__avatar--3vGDA",
	"userName": "metadata__userName--3VzLh",
	"createdAt": "metadata__createdAt--3NZno"
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(24));
function Preview(_a) {
    var url = _a.url;
    return (react_1.default.createElement("div", { className: preview_css_1.default.previewContainer },
        react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: url, alt: 'previewPic' })));
}
exports.Preview = Preview;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"previewContainer": "preview__previewContainer--3cwU_",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(26));
function Header(_a) {
    var openedThread = _a.openedThread, bookmark = _a.bookmark, toAuthorize = _a.toAuthorize;
    return (react_1.default.createElement("header", { className: header_css_1.default.headerContainer },
        react_1.default.createElement("div", { className: header_css_1.default.centralContainer },
            react_1.default.createElement("div", { className: header_css_1.default.logoContainer },
                react_1.default.createElement("img", { src: 'https://www.flaticon.com/svg/static/icons/svg/1/1394.svg', alt: 'logo' })),
            react_1.default.createElement("div", { className: header_css_1.default.authButtonContainer },
                react_1.default.createElement("button", { className: header_css_1.default.button, type: "button", onClick: toAuthorize }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
            react_1.default.createElement("div", { className: header_css_1.default.userContainer },
                react_1.default.createElement("img", { className: header_css_1.default.avatarImg, src: "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg", alt: "avatar" }),
                react_1.default.createElement("a", { className: header_css_1.default.avatarText, href: '#' }, "User")))));
}
exports.Header = Header;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerContainer": "header__headerContainer--2006E",
	"centralContainer": "header__centralContainer--3gBCl",
	"logoContainer": "header__logoContainer--3_S9B",
	"authButtonContainer": "header__authButtonContainer--QK4R_",
	"button": "header__button--5AAmb",
	"userContainer": "header__userContainer--2vUXG",
	"avatarImg": "header__avatarImg--1cwHr",
	"avatarText": "header__avatarText--1bEpo"
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var footer_css_1 = __importDefault(__webpack_require__(28));
exports.Footer = function (_a) {
    return (react_1.default.createElement("div", { className: footer_css_1.default.footerContainer },
        react_1.default.createElement("p", null, " \u00A9 2020 INSTAGRhmGhm FROM FOOTBOOK")));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footerContainer": "footer__footerContainer--Z6dsS"
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPage = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var cardPage_css_1 = __importDefault(__webpack_require__(30));
var react_router_dom_1 = __webpack_require__(1);
var cross1_svg_1 = __importDefault(__webpack_require__(31));
var cross2_svg_1 = __importDefault(__webpack_require__(32));
var HeartIconPressed_svg_1 = __importDefault(__webpack_require__(33));
var HeartIconUnpressed_svg_1 = __importDefault(__webpack_require__(2));
function CardPage(_a) {
    var openedImage = _a.openedImage, open = _a.open, pressed = _a.pressed, likePhoto = _a.likePhoto, setLikedId = _a.setLikedId, likedId = _a.likedId;
    var date = openedImage.created_at.slice(0, 9);
    return (react_1.default.createElement("div", { className: cardPage_css_1.default.cardPage },
        react_1.default.createElement("div", { className: cardPage_css_1.default.centralContainer },
            react_1.default.createElement("div", { className: cardPage_css_1.default.imageContainer },
                react_1.default.createElement("img", { src: openedImage.urls.regular, alt: openedImage.alt_description })),
            react_1.default.createElement("div", { className: cardPage_css_1.default.infoContainer },
                react_1.default.createElement("div", { className: cardPage_css_1.default.metaContainer },
                    react_1.default.createElement("div", { className: cardPage_css_1.default.authorContainer },
                        react_1.default.createElement("img", { className: cardPage_css_1.default.avatarImg, src: openedImage.user.profile_image.small, alt: "avatar" }),
                        react_1.default.createElement("a", { className: cardPage_css_1.default.avatarText, href: openedImage.user.links.html }, openedImage.user.first_name)),
                    react_1.default.createElement("span", { className: cardPage_css_1.default.createdAt }, date)),
                react_1.default.createElement("div", { className: cardPage_css_1.default.likesContainer },
                    react_1.default.createElement("span", { className: cardPage_css_1.default.likesValue }, openedImage.likes),
                    react_1.default.createElement("button", { className: cardPage_css_1.default.button, onClick: function () { console.log('btn is pressed'); } },
                        react_1.default.createElement("img", { src: pressed ? HeartIconPressed_svg_1.default : HeartIconUnpressed_svg_1.default, alt: 'heart' })))),
            react_1.default.createElement(react_router_dom_1.Link, { className: cardPage_css_1.default.exitButton, to: '/' },
                react_1.default.createElement("img", { src: cross1_svg_1.default, alt: 'exit', className: cardPage_css_1.default.exitImgBlack }),
                react_1.default.createElement("img", { src: cross2_svg_1.default, alt: 'exit', className: cardPage_css_1.default.exitImgWhite })))));
}
exports.CardPage = CardPage;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardPage": "cardPage__cardPage--2Lb-u",
	"centralContainer": "cardPage__centralContainer--1NaTX",
	"exitButton": "cardPage__exitButton--3FIGR",
	"exitImgBlack": "cardPage__exitImgBlack--3h5ZN",
	"exitImgWhite": "cardPage__exitImgWhite--iz8F1",
	"imageContainer": "cardPage__imageContainer--Vjd-J",
	"infoContainer": "cardPage__infoContainer--2OsQK",
	"metaContainer": "cardPage__metaContainer--1fn-j",
	"authorContainer": "cardPage__authorContainer--G_ZNa",
	"createdAt": "cardPage__createdAt--V-Sjh",
	"avatarImg": "cardPage__avatarImg--2oyM9",
	"avatarText": "cardPage__avatarText--2mxnK",
	"likesContainer": "cardPage__likesContainer--2cyqG",
	"likesValue": "cardPage__likesValue--1WsIo",
	"button": "cardPage__button--2gQ_H"
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b611139d4000f36ebb0ca2970d5ffbfc.svg");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eff8a935ab7fc48700c56201f9e4fbd3.svg");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd19e35bc5e9e56515f1eb9a9e1b8dab.svg");

/***/ })
/******/ ]);