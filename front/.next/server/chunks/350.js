"use strict";
exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 6295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BasketAddFetch),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  status: ''
}; // 초기 상태 정의

const BasketAddFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/BasketAddFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/basket/add', data);
  return response === null || response === void 0 ? void 0 : response.data;
});
const BasketAddSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'BasketAdd',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(BasketAddFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(BasketAddFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(BasketAddFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketAddSlice.reducer); // 리듀서

/***/ }),

/***/ 4820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "td": () => (/* binding */ baseApiUrl),
/* harmony export */   "e7": () => (/* binding */ months),
/* harmony export */   "an": () => (/* binding */ days)
/* harmony export */ });
// export const baseApiUrl = 'http://localhost';
const baseApiUrl = 'http://stylelint.ml'; // export const baseFrontUrl = 'http://localhost:3000';

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

/***/ })

};
;