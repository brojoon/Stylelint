"use strict";
exports.id = 407;
exports.ids = [407];
exports.modules = {

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

/***/ }),

/***/ 8552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostcodeModal)
});

// EXTERNAL MODULE: ./src/utils/Hooks/index.tsx
var Hooks = __webpack_require__(8684);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-daum-postcode"
var external_react_daum_postcode_ = __webpack_require__(478);
var external_react_daum_postcode_default = /*#__PURE__*/__webpack_require__.n(external_react_daum_postcode_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Modals/PostcodeModal/style.ts

const DaumPostcodeContainer = (styled_default()).div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9000;
  background-color: rgba(200, 200, 200, 0.5);

  .post-code {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/Modals/PostcodeModal/index.tsx






const Postcode = ({
  setAddressInputValue,
  setIsPostCode,
  setAddressErrorText
}) => {
  const onClickPostCodeModal = (0,external_react_.useCallback)(() => {
    setIsPostCode(false);
  }, []);

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }

      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddressInputValue(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

    setIsPostCode(false);
    setAddressErrorText('');
  };

  const isTablet1024 = (0,Hooks/* useIsTablet1024 */.Wb)();
  const isTablet = (0,Hooks/* useIsTablet */.Av)();
  const isMobile = (0,Hooks/* useIsMobile */.dD)();
  return jsx_runtime_.jsx(DaumPostcodeContainer, {
    onClick: onClickPostCodeModal,
    children: jsx_runtime_.jsx((external_react_daum_postcode_default()), {
      onComplete: handleComplete,
      className: "post-code",
      style: {
        width: isMobile ? '300px' : isTablet ? '400px' : '500px',
        height: isMobile ? '350px' : isTablet ? '380px' : '470px'
      }
    })
  });
};

/* harmony default export */ const PostcodeModal = (Postcode);

/***/ })

};
;