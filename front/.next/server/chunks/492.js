"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 6889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const BasicBtn = ({
  onClickBtn,
  Content,
  style
}) => {
  return _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
    className: style,
    onClick: onClickBtn,
    children: Content
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(BasicBtn));

/***/ }),

/***/ 5388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Basic_BasicInputFocus)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Basic/BasicInputFocus/style.ts

const InputContainer = (styled_default()).section`
  .error-text {
    color: #f45452;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }

  .error-text::before {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
    background: url(/img/icon_error.png) center center no-repeat;
    background-size: 100% auto;
    display: inline-block;
    content: '';
  }
`;
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/Basic/BasicInputFocus/index.tsx





const BasicInputFocus = ({
  type,
  name,
  placeholder,
  maxLength,
  inputValue,
  setInputValue,
  setErrorText,
  errorText,
  style
}) => {
  const inputFocus = (0,external_react_.useRef)(null);
  const onChangeInputValue = (0,external_react_.useCallback)(e => {
    setInputValue(e.target.value);

    if (errorText) {
      setErrorText('');
    }
  }, [errorText]);
  (0,external_react_.useEffect)(() => {
    var _inputFocus$current;

    inputFocus === null || inputFocus === void 0 ? void 0 : (_inputFocus$current = inputFocus.current) === null || _inputFocus$current === void 0 ? void 0 : _inputFocus$current.focus();
  }, [inputFocus]);
  return (0,jsx_runtime_.jsxs)(InputContainer, {
    children: [jsx_runtime_.jsx("input", {
      ref: inputFocus,
      className: style,
      type: type,
      name: name,
      value: inputValue,
      placeholder: placeholder,
      onChange: onChangeInputValue,
      maxLength: maxLength,
      autoComplete: "new-password"
    }), errorText && jsx_runtime_.jsx("p", {
      className: "error-text",
      children: errorText
    })]
  });
};

/* harmony default export */ const Basic_BasicInputFocus = (/*#__PURE__*/external_react_default().memo(BasicInputFocus));

/***/ }),

/***/ 8433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_LoadingCircle)
});

// EXTERNAL MODULE: ./src/utils/Hooks/index.tsx
var Hooks = __webpack_require__(8684);
// EXTERNAL MODULE: external "react-spinners"
var external_react_spinners_ = __webpack_require__(8176);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/LoadingCircle/style.ts

const LoadingCircleContainer = (styled_default()).div`
  padding: 0 15px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
`;
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/LoadingCircle/index.tsx





const LoadingCircle = () => {
  const isTablet1024 = (0,Hooks/* useIsTablet1024 */.Wb)();
  return jsx_runtime_.jsx(LoadingCircleContainer, {
    children: jsx_runtime_.jsx(external_react_spinners_.ClipLoader, {
      color: '#D3D3D3',
      size: 36
    })
  });
};

/* harmony default export */ const components_LoadingCircle = (LoadingCircle);

/***/ })

};
;