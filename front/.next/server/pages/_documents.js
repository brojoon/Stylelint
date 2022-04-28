(() => {
var exports = {};
exports.id = 161;
exports.ids = [161,660];
exports.modules = {

/***/ 8682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__["default"] {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;
  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) =>
  //           sheet.collectStyles(<App {...props} />),
  //       });
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }
  render() {
    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("body", {
        children: [_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ 6859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8613)


/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,613], () => (__webpack_exec__(8682)));
module.exports = __webpack_exports__;

})();