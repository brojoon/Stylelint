"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_states_Atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/states/Atom */ \"./src/states/Atom/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\joonn\\\\Desktop\\\\market\\\\front\\\\pages\\\\index.tsx\";\n\n\n\n\nconst IndexPage = () => {\n  const [pageName, setPageName] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_src_states_Atom__WEBPACK_IMPORTED_MODULE_1__.pageNameState);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"lg:flex grid grid-rows-4 grid-flow-col gap-4\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUVBLE1BQU1FLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCSixzREFBYyxDQUFDQywyREFBRCxDQUE5QztBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FKRDs7QUFNQSxpRUFBZUMsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtldC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnXHJcbmltcG9ydCB7IHBhZ2VOYW1lU3RhdGUgfSBmcm9tICdAc3RhdGVzL0F0b20nXHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2VOYW1lLCBzZXRQYWdlTmFtZV0gPSB1c2VSZWNvaWxTdGF0ZShwYWdlTmFtZVN0YXRlKVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGdyaWQgZ3JpZC1yb3dzLTQgZ3JpZC1mbG93LWNvbCBnYXAtNFwiPjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcclxuIl0sIm5hbWVzIjpbInVzZVJlY29pbFN0YXRlIiwicGFnZU5hbWVTdGF0ZSIsIkluZGV4UGFnZSIsInBhZ2VOYW1lIiwic2V0UGFnZU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/states/Atom/index.ts":
/*!**********************************!*\
  !*** ./src/states/Atom/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageNameState\": () => (/* binding */ pageNameState),\n/* harmony export */   \"getNameSelector\": () => (/* binding */ getNameSelector)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pageNameState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n  key: 'pageNameState',\n  default: 'ha'\n});\nconst getNameSelector = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({\n  key: 'getNameSelector',\n  get: async () => {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('http://localhost:3000/api/hello');\n    return res.data;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhdGVzL0F0b20vaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1HLGFBQWEsR0FBR0gsNENBQUksQ0FBQztBQUNoQ0ksRUFBQUEsR0FBRyxFQUFFLGVBRDJCO0FBRWhDQyxFQUFBQSxPQUFPLEVBQUU7QUFGdUIsQ0FBRCxDQUExQjtBQUtBLE1BQU1DLGVBQWUsR0FBR0wsZ0RBQVEsQ0FBQztBQUN0Q0csRUFBQUEsR0FBRyxFQUFFLGlCQURpQztBQUV0Q0csRUFBQUEsR0FBRyxFQUFFLFlBQVk7QUFDZixVQUFNQyxHQUFHLEdBQUcsTUFBTU4sZ0RBQUEsQ0FBVSxpQ0FBVixDQUFsQjtBQUNBLFdBQU9NLEdBQUcsQ0FBQ0MsSUFBWDtBQUNEO0FBTHFDLENBQUQsQ0FBaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQvLi9zcmMvc3RhdGVzL0F0b20vaW5kZXgudHM/MGZmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tLCBzZWxlY3RvciB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZU5hbWVTdGF0ZSA9IGF0b20oe1xyXG4gIGtleTogJ3BhZ2VOYW1lU3RhdGUnLFxyXG4gIGRlZmF1bHQ6ICdoYScsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5hbWVTZWxlY3RvciA9IHNlbGVjdG9yKHtcclxuICBrZXk6ICdnZXROYW1lU2VsZWN0b3InLFxyXG4gIGdldDogYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hlbGxvJyk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwic2VsZWN0b3IiLCJheGlvcyIsInBhZ2VOYW1lU3RhdGUiLCJrZXkiLCJkZWZhdWx0IiwiZ2V0TmFtZVNlbGVjdG9yIiwiZ2V0IiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/states/Atom/index.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();