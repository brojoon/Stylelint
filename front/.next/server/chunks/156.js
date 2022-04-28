"use strict";
exports.id = 156;
exports.ids = [156];
exports.modules = {

/***/ 8351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Basic_BasicInput)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Basic/BasicInput/style.ts

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
;// CONCATENATED MODULE: ./src/components/Basic/BasicInput/index.tsx





const BasicInput = ({
  type,
  name,
  placeholder,
  maxLength,
  style,
  inputValue,
  setInputValue,
  setErrorText,
  errorText
}) => {
  const onChangeInputValue = (0,external_react_.useCallback)(e => {
    setInputValue(e.target.value);

    if (errorText) {
      setErrorText('');
    }
  }, [errorText]);
  return (0,jsx_runtime_.jsxs)(InputContainer, {
    children: [jsx_runtime_.jsx("input", {
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

/* harmony default export */ const Basic_BasicInput = (/*#__PURE__*/external_react_default().memo(BasicInput));

/***/ }),

/***/ 5364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isPassword(asValue) {
  let regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPassword);

/***/ })

};
;