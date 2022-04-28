"use strict";
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 8590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ PaymentDoneUpdateFetch),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  status: ''
}; // 초기 상태 정의

const PaymentDoneUpdateFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('PaymentDoneUpdateFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/payment/save/done', data);
  return response === null || response === void 0 ? void 0 : response.data;
});
const PaymentDoneUpdateSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'PaymentDoneUpdate',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(PaymentDoneUpdateFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(PaymentDoneUpdateFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(PaymentDoneUpdateFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentDoneUpdateSlice.reducer); // 리듀서

/***/ }),

/***/ 6197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ PaymentRecentSaveFetch),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  status: ''
}; // 초기 상태 정의

const PaymentRecentSaveFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('PaymentRecentSaveFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/user/payment/recent', data);
  return response === null || response === void 0 ? void 0 : response.data;
});
const PaymentRecentSaveSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'PaymentRecentSave',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(PaymentRecentSaveFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(PaymentRecentSaveFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(PaymentRecentSaveFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentRecentSaveSlice.reducer); // 리듀서

/***/ })

};
;