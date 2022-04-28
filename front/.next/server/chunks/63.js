"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 8684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vO": () => (/* binding */ useScroll),
/* harmony export */   "Wb": () => (/* binding */ useIsTablet1024),
/* harmony export */   "Av": () => (/* binding */ useIsTablet),
/* harmony export */   "dD": () => (/* binding */ useIsMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);



function useScroll() {
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [bodyOffset, setBodyOffset] = useState(
  //   document.body.getBoundingClientRect(),
  // );
  const {
    0: scrollY,
    1: setScrollY
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // const [scrollX, setScrollX] = useState(bodyOffset.left);
  // const [scrollDirection, setScrollDirection] = useState();

  const listener = () => {
    // setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(window.pageYOffset); // setScrollX(bodyOffset.left);
    // setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    // setLastScrollTop(-bodyOffset.top);
  };

  const delay = 30;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(listener, delay));
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });
  return {
    scrollY
  };
}
function useIsTablet1024() {
  const {
    0: isTablet1024,
    1: setIsTablet1024
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const Tablet = (0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({
    query: '(max-width: 1024px)'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTablet1024(Tablet);
  }, [Tablet]);
  return isTablet1024;
}
function useIsTablet() {
  const {
    0: isTablet,
    1: setIsTablet
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const Tablet = (0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({
    query: '(max-width: 768px)'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsTablet(Tablet);
  }, [Tablet]);
  return isTablet;
}
function useIsMobile() {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const mobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)({
    query: '(max-width: 480px)'
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

/***/ }),

/***/ 7981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
  withCredentials: true // headers: {
  // 	Authorization: `Bearer ${getToken()}`,
  // }

}).then(response => response.data).catch(error => {
  return false;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

/***/ })

};
;