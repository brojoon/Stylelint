"use strict";
exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 3343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ refetchProductsArr),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  productCardArr: new Array(1).fill(0)
}; // 초기 상태 정의

const BasketProductsSelectArrSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'BasketProductsSelectArr',
  initialState,
  reducers: {
    refetchProductsArr(state, action) {
      state.productCardArr = action.payload;
    }

  }
});
const {
  refetchProductsArr
} = BasketProductsSelectArrSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketProductsSelectArrSlice.reducer); // 리듀서

/***/ }),

/***/ 3330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ BasketRemoveFetch),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  status: ''
}; // 초기 상태 정의

const BasketRemoveFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/BasketRemoveFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/basket/remove', data);
  return response === null || response === void 0 ? void 0 : response.data;
});
const BasketRemoveSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'BasketRemove',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(BasketRemoveFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(BasketRemoveFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(BasketRemoveFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasketRemoveSlice.reducer); // 리듀서

/***/ }),

/***/ 4959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ PaymentSaveFetch),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  status: ''
}; // 초기 상태 정의

const PaymentSaveFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('PaymentSaveFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/payment/save', data);
  return response === null || response === void 0 ? void 0 : response.data;
});
const PaymentSaveSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'PaymentSave',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(PaymentSaveFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(PaymentSaveFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(PaymentSaveFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentSaveSlice.reducer); // 리듀서

/***/ })

};
;