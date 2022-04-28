"use strict";
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nV": () => (/* binding */ LoginFetch),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  status: '',
  token: ''
}; // 초기 상태 정의

const LoginFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/LoginFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/auth/login', {
    userId: data.userId,
    password: data.password
  });
  return response === null || response === void 0 ? void 0 : response.data;
});
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'login',
  initialState,
  reducers: {
    removeToken: state => {
      state.token = '';
    }
  },
  extraReducers: builder => {
    builder.addCase(LoginFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(LoginFetch.fulfilled, (state, action) => {
      state.status = 'success';
      state.token = action.payload;
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
    });
    builder.addCase(LoginFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
const {
  removeToken
} = loginSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer); // 리듀서

/***/ })

};
;