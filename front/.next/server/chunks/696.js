"use strict";
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Paginate)
});

// EXTERNAL MODULE: ./src/utils/Hooks/index.tsx
var Hooks = __webpack_require__(8684);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-paginate"
var external_react_paginate_ = __webpack_require__(9700);
var external_react_paginate_default = /*#__PURE__*/__webpack_require__.n(external_react_paginate_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Paginate/style.ts

const PaginateContainer = (styled_default()).div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination a {
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border: 1px solid #dee2e6;
    line-height: 1.25;
    color: #777;
    background-color: #fff;
  }

  .pagination a:hover {
    color: #6c757d;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }

  .pagination li:first-child a {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .pagination li:last-child a {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .pagination .active a {
    color: #fff;
    background-color: #777;
    border-color: #777;
  }

  .disabled a {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .list-group {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding-left: 0;
    border-radius: 0.25rem;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .list-group-item + .list-group-item {
    border-top-width: 0;
  }

  .pagination .active:hover {
    color: #fff;
    background-color: #777;
    border-color: #777;
  }
`;
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/Paginate/index.tsx






const Paginate = ({
  setPage,
  totalCount,
  perPage
}) => {
  const onChangePaginate = (0,external_react_.useCallback)(({
    selected
  }) => {
    setPage(selected);
  }, []);
  const isTablet = (0,Hooks/* useIsTablet */.Av)();
  return jsx_runtime_.jsx(PaginateContainer, {
    children: jsx_runtime_.jsx((external_react_paginate_default()), {
      previousLabel: '이전',
      nextLabel: '다음',
      breakLabel: '...',
      onPageChange: onChangePaginate,
      breakClassName: 'break-me',
      pageCount: Math.ceil(totalCount / perPage),
      marginPagesDisplayed: 1,
      pageRangeDisplayed: isTablet ? 1 : 2,
      containerClassName: 'pagination',
      activeClassName: 'active'
    })
  });
};

/* harmony default export */ const components_Paginate = (Paginate);

/***/ })

};
;