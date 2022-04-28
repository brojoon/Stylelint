"use strict";
(() => {
var exports = {};
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 1415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _code_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/store/modules/productReviewAdd/index.ts
var productReviewAdd = __webpack_require__(1076);
// EXTERNAL MODULE: ./src/utils/Hooks/index.tsx
var Hooks = __webpack_require__(8684);
// EXTERNAL MODULE: ./src/utils/utils/fetcher.ts
var fetcher = __webpack_require__(7981);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Modals/ModalCreateReivew/style.ts

const ModalBackground = (styled_default()).div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1) !important;
  z-index: 6000 !important;
`;
const ModalBasketContainer = (styled_default()).div`
  .modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6200;
    width: ${props => props.IsMobile ? '300px;' : '400px;'}
    


    padding: 40px 20px 32px 20px;
    text-align: center;
    background-color: white;
    border-radius: 8px;
  }

  .top-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    background-position: -442px -122px;
    background-image: url(/img/close-btn.png);
  }

  .bottom-close-btn {
    position: absolute;
    bottom: 12px;
    right: 22px;
    display: inline-block;
    font-size: 1.1rem;
    color: #1e2732;
    letter-spacing: -0.5px;

  }

  .modal-wrapper > div {
    display: flex;
    flex-direction: column;
    
  }

  .start-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
  }

  .start-img-wrapper  > span {
    margin: 0 5px;
  }

  .start-img-wrapper > span:nth-child(1) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${props => props.ReviewStarIndex >= 1 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
    

  }

  .start-img-wrapper > span:nth-child(2) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${props => props.ReviewStarIndex >= 2 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }

  .start-img-wrapper > span:nth-child(3) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${props => props.ReviewStarIndex >= 3 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }

  .start-img-wrapper > span:nth-child(4) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${props => props.ReviewStarIndex >= 4 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }

  .start-img-wrapper > span:nth-child(5) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${props => props.ReviewStarIndex >= 5 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }



  .modal-wrapper > div > h3 {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.3rem;
  }


  .modal-text-wrapper{

  }

  .modal-text-wrapper > textarea {
    width: 100%;
    border: 1px solid #c5c5c5;
    height: 100px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  .review-start-text-wrapper {
    margin: 8px 0 12px;    
    color: #fd0303;
  }
  
  .review-start-text-wrapper > .start-score {
    font-weight: 600;
  }


  .modal-wrapper > div > button {
    margin-top: 20px;
    background-color: #2563EB;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    height: 50px;
  }

 
  

`;
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/Modals/ModalCreateReivew/index.tsx












const ModalCreateReivew = ({
  setIsCreateReivewModal
}) => {
  const StarCount = 5;
  const StarText = ['선택하세요', '(별로에요)', '(그저그래요)', '(괜찮아요)', '(좋아요)', '(최고예요)'];
  const {
    0: textValue,
    1: setTextValue
  } = (0,external_react_.useState)('');
  const {
    0: reviewStarIndex,
    1: setReviewStarIndex
  } = (0,external_react_.useState)(0);
  const {
    0: reviewStarIndexSave,
    1: setReviewStarIndexSave
  } = (0,external_react_.useState)(0);
  const onClickModalClose = (0,external_react_.useCallback)(() => {
    setIsCreateReivewModal(false);
  }, []);
  const {
    data: user
  } = (0,external_react_query_.useQuery)('user', () => (0,fetcher/* default */.Z)(`api/user/profile`));
  const router = (0,router_.useRouter)();
  const {
    type,
    code
  } = router.query;
  const {
    data: productReviewList,
    refetch
  } = (0,external_react_query_.useQuery)('productReviewList', () => (0,fetcher/* default */.Z)(`api/product/${code}/review`));
  const dispatch = (0,external_react_redux_.useDispatch)();
  const onChangeReviewText = (0,external_react_.useCallback)(e => {
    if (e.target.value.length > 50) {
      alert('50자 이내로 입력해주세요');
      return;
    }

    setTextValue(e.target.value);
  }, []);
  const onClickReviewStart = (0,external_react_.useCallback)(e => {
    setReviewStarIndexSave(Number(e.target.id.substr(-1)));
    setReviewStarIndex(Number(e.target.id.substr(-1)));
  }, []);
  const onMouseEnterReviewStar = (0,external_react_.useCallback)(e => {
    if (reviewStarIndex < Number(e.target.id.substr(-1))) setReviewStarIndex(Number(e.target.id.substr(-1)));
  }, [reviewStarIndex]);
  const onMouseLeaveReviewStar = (0,external_react_.useCallback)(e => {
    setReviewStarIndex(reviewStarIndexSave);
  }, [reviewStarIndexSave]);
  const onClickReviewSubmit = (0,external_react_.useCallback)(async () => {
    if (!user) {
      alert('로그인후 이용 가능합니다.');
      return;
    } else if (productReviewList) {
      for (let i = 0; i < productReviewList.length; i++) {
        if (productReviewList[i].userId == user.userId) {
          alert('이미 리뷰를 작성 하셨습니다.');
          return;
        }
      }
    }

    if ((textValue === null || textValue === void 0 ? void 0 : textValue.length) > 0 && (textValue === null || textValue === void 0 ? void 0 : textValue.length) <= 50 && reviewStarIndexSave > 0 && code && user) {
      const res = await dispatch((0,productReviewAdd/* ProductReviewAddFetch */.P)({
        product_code: code,
        userId: user === null || user === void 0 ? void 0 : user.userId,
        nickname: user === null || user === void 0 ? void 0 : user.nickname,
        review_text: textValue,
        score: reviewStarIndexSave
      }));

      if (res.meta.requestStatus === 'fulfilled') {
        refetch().then(() => {
          setIsCreateReivewModal(false);
        });
      }
    }
  }, [reviewStarIndexSave, textValue, code, user, productReviewList]);
  const isMobile = (0,Hooks/* useIsMobile */.dD)();
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(ModalBackground, {
      onClick: onClickModalClose
    }), jsx_runtime_.jsx(ModalBasketContainer, {
      IsMobile: isMobile,
      ReviewStarIndex: reviewStarIndex,
      children: (0,jsx_runtime_.jsxs)("div", {
        className: "modal-wrapper",
        children: [jsx_runtime_.jsx("button", {
          className: "top-close-btn",
          onClick: onClickModalClose
        }), (0,jsx_runtime_.jsxs)("div", {
          children: [jsx_runtime_.jsx("h3", {
            children: "\uC0C1\uD488\uC740 \uB9CC\uC871\uD558\uC168\uB098\uC694?"
          }), jsx_runtime_.jsx("div", {
            className: "start-img-wrapper",
            onClick: onClickReviewStart,
            children: [...new Array(StarCount)].map((data, index) => jsx_runtime_.jsx("span", {
              id: `start-${index + 1}`,
              onMouseEnter: onMouseEnterReviewStar,
              onMouseLeave: onMouseLeaveReviewStar
            }, index))
          }), (0,jsx_runtime_.jsxs)("div", {
            className: "review-start-text-wrapper",
            children: [reviewStarIndex ? (0,jsx_runtime_.jsxs)("span", {
              className: "start-score",
              children: [reviewStarIndex, "\uC810 "]
            }) : null, jsx_runtime_.jsx("span", {
              children: StarText[reviewStarIndex]
            })]
          }), jsx_runtime_.jsx("div", {
            className: "modal-text-wrapper",
            children: jsx_runtime_.jsx("textarea", {
              placeholder: "50\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694",
              onChange: onChangeReviewText,
              value: textValue
            })
          }), jsx_runtime_.jsx("button", {
            onClick: onClickReviewSubmit,
            children: "\uB4F1\uB85D"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const Modals_ModalCreateReivew = (ModalCreateReivew);
// EXTERNAL MODULE: ./src/components/Paginate/index.tsx + 1 modules
var Paginate = __webpack_require__(6696);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/ProductReivewCard/style.ts

const ProductReviewCardWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ececec;

  .start-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .start-wrapper > span:nth-child(1) {
    background-image: url(/img/review-star-text.svg);
    background-size: 708px 690px;
    background-position: -601px -79px;
    width: 74px;
    height: 14px;
    display: inline-block;
    position: relative;
    vertical-align: top;
  }

  .start-wrapper > span:nth-child(1) > span {
    background-image: url(/img/review-star-text.svg);
    background-size: 708px 690px;
    background-position: -601px -101px;
    width: ${props => props.ReviewStarIndex * 20 + '%;'}
    height: 14px;
    display: block;
  }

  .start-wrapper > strong {
    margin-left: 5px;
  }
  & > div:nth-child(2) {
    display: flex;
    color: #999999;
    align-items: center;

  }

  .review-info > span {
    white-space: nowrap;
    font-size: 0.8rem;
    color: #999;
  }


  .review-info > span:nth-child(2):before {
    display: inline-block;
    width: 2px;
    height: 2px;
    margin: 0.8rem 5px 0 7px;
    background-color: #d8d8d8;
    vertical-align: top;
    content: '';
  }

  .review-text {
    margin-top 10px;
  }

  .review-text > span{
    color: #5f5f5f;  
  }
  
`;
;// CONCATENATED MODULE: ./src/components/ProductReivewCard/index.tsx







const ProductReviewCard = ({
  reviewInfo
}) => {
  var _reviewInfo$nickname, _reviewInfo$nickname2;

  const {
    0: reviewStarIndex,
    1: setReviewStarIndex
  } = (0,external_react_.useState)(reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.score);
  (0,external_react_.useEffect)(() => {
    if (reviewInfo) {
      setReviewStarIndex(reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.score);
    }
  }, [reviewInfo]);
  return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: reviewInfo && (0,jsx_runtime_.jsxs)(ProductReviewCardWrapper, {
      ReviewStarIndex: reviewStarIndex,
      children: [(0,jsx_runtime_.jsxs)("div", {
        children: [(0,jsx_runtime_.jsxs)("div", {
          className: "start-wrapper",
          children: [jsx_runtime_.jsx("span", {
            children: jsx_runtime_.jsx("span", {})
          }), jsx_runtime_.jsx("strong", {
            children: reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.score
          })]
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "review-info",
          children: [jsx_runtime_.jsx("span", {
            children: (reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.nickname.substring(0, Math.floor((reviewInfo === null || reviewInfo === void 0 ? void 0 : (_reviewInfo$nickname = reviewInfo.nickname) === null || _reviewInfo$nickname === void 0 ? void 0 : _reviewInfo$nickname.length) / 2))) + [...new Array(Math.ceil((reviewInfo === null || reviewInfo === void 0 ? void 0 : (_reviewInfo$nickname2 = reviewInfo.nickname) === null || _reviewInfo$nickname2 === void 0 ? void 0 : _reviewInfo$nickname2.length) / 2)).fill('*')].reduce((acc, value) => {
              return acc + '*';
            })
          }), jsx_runtime_.jsx("span", {
            children: external_dayjs_default()(reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.createdAt).year() + '.' + Number(external_dayjs_default()(reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.createdAt).month() + 1) + '.' + external_dayjs_default()(reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.createdAt).date() + '.'
          })]
        })]
      }), jsx_runtime_.jsx("div", {
        className: "review-text",
        children: jsx_runtime_.jsx("span", {
          children: reviewInfo === null || reviewInfo === void 0 ? void 0 : reviewInfo.review_text
        })
      })]
    })
  });
};

/* harmony default export */ const ProductReivewCard = (/*#__PURE__*/external_react_default().memo(ProductReviewCard));
;// CONCATENATED MODULE: ./src/components/ProductReviewContainer/style.ts

const ProductReviewWrapper = (styled_default()).div`
  padding: 50px 20px 50px;
  width: 100%;

  .header-wrapper {
    height: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #a4a9b0;
  }

  .header-wrapper > h3 {
    font-size: 1.4rem;
    letter-spacing: -1px;
    color: #1e2732;
    font-weight: 600;
  }

  .header-wrapper > h3 > span {
    margin-left: 3px;
    font-weight: 400;
    color: #2e8de5;
    vertical-align: baseline;
  }

  .review-modal-btn {
    display: block;
    text-align: center;
    border: 1px solid #ddd;
    width: 80px;
    height: 29px;
    color: #424242;
    font-size: 13px;
  }
`;
;// CONCATENATED MODULE: ./src/components/ProductReviewContainer/index.tsx












const ProductReviewContainer = () => {
  const router = (0,router_.useRouter)();
  const {
    type,
    code
  } = router.query;
  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(0);
  const {
    0: reverseData,
    1: setReverseData
  } = (0,external_react_.useState)([]);
  const perPage = 5;
  const {
    data,
    refetch
  } = (0,external_react_query_.useQuery)('productReviewList', () => (0,fetcher/* default */.Z)(`api/product/${code}/review`));
  const {
    data: user
  } = (0,external_react_query_.useQuery)('user', () => (0,fetcher/* default */.Z)(`api/user/profile`));
  const {
    0: isCreateReivewModal,
    1: setIsCreateReivewModal
  } = (0,external_react_.useState)(false);
  const onClickCreateReivew = (0,external_react_.useCallback)(() => {
    if (!user) {
      alert('로그인후 이용 가능합니다.');
      return;
    } else if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userId == user.userId) {
          alert('이미 리뷰를 작성 하셨습니다.');
          return;
        }
      }
    }

    setIsCreateReivewModal(true);
  }, [user, data]);
  (0,external_react_.useEffect)(() => {
    if (data) {
      setReverseData(data.reverse());
    }
  }, [data]);
  return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: reverseData && (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [isCreateReivewModal && jsx_runtime_.jsx(Modals_ModalCreateReivew, {
        setIsCreateReivewModal: setIsCreateReivewModal
      }), (0,jsx_runtime_.jsxs)(ProductReviewWrapper, {
        children: [(0,jsx_runtime_.jsxs)("div", {
          className: "header-wrapper",
          children: [(0,jsx_runtime_.jsxs)("h3", {
            children: ["\uC77C\uBC18 \uC0C1\uD488\uD3C9", jsx_runtime_.jsx("span", {
              children: reverseData === null || reverseData === void 0 ? void 0 : reverseData.length
            })]
          }), jsx_runtime_.jsx("button", {
            className: "review-modal-btn",
            onClick: onClickCreateReivew,
            children: "\uB9AC\uBDF0 \uC791\uC131"
          })]
        }), [...reverseData].slice(page * perPage, page * perPage + perPage).map(reviewInfo => jsx_runtime_.jsx(ProductReivewCard, {
          reviewInfo: reviewInfo
        }, reviewInfo.id)), jsx_runtime_.jsx(Paginate/* default */.Z, {
          setPage: setPage,
          totalCount: reverseData === null || reverseData === void 0 ? void 0 : reverseData.length,
          perPage: perPage
        })]
      })]
    })
  });
};

/* harmony default export */ const components_ProductReviewContainer = (ProductReviewContainer);
// EXTERNAL MODULE: ./src/utils/utils/const.ts
var utils_const = __webpack_require__(4820);
;// CONCATENATED MODULE: ./src/components/RroductDetailDescTabs/ProductDescTab/style.ts

const ProductDescTabContainer = (styled_default()).section`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  & .info-body-container {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: ${props => props.IsMoreProductInfo ? 'inherit' : '1000px'};
  }

  & .info-btn-wrapper {
    margin: 30px 0;
    background: ${props => props.IsMoreProductInfo ? 'url(/img/product-info-btn1.png)' : 'url(/img/product-info-btn2.png)'}
      no-repeat center;
    width: 100%;
    height: 120px;
    position: relative;
    cursor: pointer;
  }

  & .info-btn-wrapper:before {
    content: '';
    position: absolute;
    top: -96px;
    left: 0;
    display: ;
    width: 100%;
    height: 96px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8) 66%,
      rgba(255, 255, 255, 0.94) 83%,
      rgba(255, 255, 255, 0.98) 91%,
      #ffffff
    );
  }
`;
;// CONCATENATED MODULE: ./src/components/RroductDetailDescTabs/ProductDescTab/index.tsx









const ProductDescTab = () => {
  var _data$productSubImg;

  const {
    0: isMoreProductInfo,
    1: setIsMoreProductInfo
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const {
    type,
    code
  } = router.query;
  const {
    data,
    isLoading,
    error
  } = (0,external_react_query_.useQuery)('productDetailInfo', () => (0,fetcher/* default */.Z)(`api/product/${code}`));
  const onClickInfoBtn = (0,external_react_.useCallback)(() => {
    setIsMoreProductInfo(prev => !prev);
  }, []);
  return (0,jsx_runtime_.jsxs)(ProductDescTabContainer, {
    IsMoreProductInfo: isMoreProductInfo,
    children: [jsx_runtime_.jsx("div", {
      className: "info-body-container",
      children: data && (data === null || data === void 0 ? void 0 : (_data$productSubImg = data.productSubImg) === null || _data$productSubImg === void 0 ? void 0 : _data$productSubImg.map((subimg, index) => {
        if (index <= 7) return;
        return jsx_runtime_.jsx("div", {
          children: jsx_runtime_.jsx("img", {
            src: `${utils_const/* baseApiUrl */.td + subimg.subimage}`,
            alt: `상품 이미지 ${index}`
          })
        }, subimg.subimage);
      }))
    }), jsx_runtime_.jsx("div", {
      className: "info-btn-wrapper",
      onClick: onClickInfoBtn
    })]
  });
};

/* harmony default export */ const RroductDetailDescTabs_ProductDescTab = (/*#__PURE__*/external_react_default().memo(ProductDescTab));
;// CONCATENATED MODULE: ./src/components/ProductDetailDesc/style.ts

const ProductDetailDescWrapper = (styled_default()).section`
  margin-top: 100px;

  & .product-desc-nav {
    width: 100%;
    position: sticky;
    background: #a9b3bc;
    border-bottom: 1px solid #96a3ad;
    top: 66px;
    left: 0;
  }

  & .product-desc-nav-wrapper {
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
  }

  & .product-desc-nav-wrapper > ul {
    display: flex;
    margin: 0 1.6rem;
    padding: 16px 0;
    align-items: center;
  }

  & .product-desc-nav-wrapper > ul > li {
    margin-right: 0.6rem;
    color: #ffffff;
    cursor: pointer;
  }

  & .product-desc-nav-wrapper > ul > li > span {
    font-weight: bold;
    font-size: 1.25rem;

    padding: 0.4375rem 1.4375rem 0.5625rem;
  }

  & .product-desc-nav-wrapper > ul > li > span > span {
    font-size: 0.9rem;
    font-weight: 500;
    vertical-align: 0.125rem;
  }

  &
    .product-desc-nav-wrapper
    > ul
    > li:nth-child(${props => props.ProductDescNavIndex})
    > span {
    background: #858f9a;
    border-radius: 3.125rem;
  }

  & .product-desc-content-container {
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
  }

  & .product-desc-content-wrapper {
    width: 100%;
  }
`;
;// CONCATENATED MODULE: ./src/components/ProductDetailDesc/index.tsx










const ProductDetailDesc = () => {
  const {
    0: productDescNavIndex,
    1: setProductDescNavIndex
  } = (0,external_react_.useState)('1');
  const router = (0,router_.useRouter)();
  const {
    type,
    code
  } = router.query;
  const {
    data,
    refetch
  } = (0,external_react_query_.useQuery)('productReviewList', () => (0,fetcher/* default */.Z)(`api/product/${code}/review`));
  const onClickProductDescNav = (0,external_react_.useCallback)(e => {
    setProductDescNavIndex(e.target.dataset.index);
  }, []);
  return (0,jsx_runtime_.jsxs)(ProductDetailDescWrapper, {
    ProductDescNavIndex: productDescNavIndex,
    children: [jsx_runtime_.jsx("div", {
      className: "product-desc-nav",
      children: jsx_runtime_.jsx("div", {
        className: "product-desc-nav-wrapper",
        children: (0,jsx_runtime_.jsxs)("ul", {
          children: [jsx_runtime_.jsx("li", {
            children: jsx_runtime_.jsx("span", {
              onClick: onClickProductDescNav,
              "data-index": "1",
              children: "\uC0C1\uC138\uC124\uBA85"
            })
          }), jsx_runtime_.jsx("li", {
            children: (0,jsx_runtime_.jsxs)("span", {
              onClick: onClickProductDescNav,
              "data-index": "2",
              children: ["\uC0C1\uD488\uD3C9", (0,jsx_runtime_.jsxs)("span", {
                children: [" ", data === null || data === void 0 ? void 0 : data.length]
              })]
            })
          })]
        })
      })
    }), jsx_runtime_.jsx("div", {
      className: "product-desc-content-container",
      children: jsx_runtime_.jsx("div", {
        className: "product-desc-content-wrapper",
        children: productDescNavIndex == '1' ? jsx_runtime_.jsx(RroductDetailDescTabs_ProductDescTab, {}) : jsx_runtime_.jsx(components_ProductReviewContainer, {})
      })
    })]
  });
};

/* harmony default export */ const components_ProductDetailDesc = (ProductDetailDesc);
;// CONCATENATED MODULE: ./src/components/SelectedProductCardContainer/style.ts

const Container = (styled_default()).div`
  margin-top: 12px;

  .selected-list {
    position: relative;
    margin-top: 10px;
    padding: 14px 13px 8px;
    background: #f9f9fa;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    border-bottom: 1px solid #bec1c7;
    font-weight: bold;
    color: #233549;
    opacity: 0.8;
  }

  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-option {
    font-weight: 500;
    font-size: 14px;
  }

  .product-info > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close {
    margin-left: 10px;
    width: 26px;
    height: 26px;
    background-position: -442px -122px;
    background-image: url(/img/close-btn.png);
  }
`;
;// CONCATENATED MODULE: ./src/components/SelectedProductCardContainer/index.tsx





const SelectedProductCardContainer = ({
  selectedProductArr,
  setSelectedProductArr
}) => {
  const onClickDeleteProduct = (0,external_react_.useCallback)(e => {
    selectedProductArr.splice(e.target.dataset.index, 1);
    setSelectedProductArr([...selectedProductArr]);
  }, [selectedProductArr]);
  return jsx_runtime_.jsx(Container, {
    children: jsx_runtime_.jsx("ul", {
      children: selectedProductArr === null || selectedProductArr === void 0 ? void 0 : selectedProductArr.map((product, index) => {
        return jsx_runtime_.jsx("li", {
          className: "selected-list",
          children: (0,jsx_runtime_.jsxs)("div", {
            children: [(0,jsx_runtime_.jsxs)("span", {
              children: [product.product_name + ' ' + product.quantity + '개', ' ']
            }), (0,jsx_runtime_.jsxs)("div", {
              className: "product-info",
              children: [(0,jsx_runtime_.jsxs)("div", {
                className: "product-option",
                children: [(0,jsx_runtime_.jsxs)("span", {
                  children: ["\uC0AC\uC774\uC988: ", product.size, " "]
                }), (0,jsx_runtime_.jsxs)("span", {
                  children: ["\uC0C9\uC0C1: ", product.color]
                })]
              }), (0,jsx_runtime_.jsxs)("div", {
                children: [(0,jsx_runtime_.jsxs)("span", {
                  children: [(product.quantity * product.price).toLocaleString(), "\uC6D0"]
                }), jsx_runtime_.jsx("button", {
                  "data-index": index,
                  className: "close",
                  onClick: onClickDeleteProduct
                })]
              })]
            })]
          })
        }, product.size + product.color + product.price + index);
      })
    })
  });
};

/* harmony default export */ const components_SelectedProductCardContainer = (SelectedProductCardContainer);
;// CONCATENATED MODULE: ./src/components/Sliders/ProductDetailSlider/style.ts

const ProductDetailSlide = (styled_default()).div`
  width: 100%;

  border-radius: 0.8rem;
  position: relative;
  background-color: #000;
  & > img {
    border-radius: 0.625rem;
  }

  & > div {
    position: absolute;
    top: 50%;
    width: 100%;
  }

  & > div > img:nth-child(1) {
    width: 30px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  & > div > img:nth-child(2) {
    width: 30px;
    height: 40px;
    left: auto;
    right: 10px !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const ProductDetailSubSlide = (styled_default()).div`
  margin-top: 5px;

  & .sub-slide-container {
    width: calc(100% + 10px);
    margin-left: -5px;
  }

  & .sub-slide-wrapper {
    position: relative;
    width: 100%;
  }

  & .sub-slide-img-container {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
  }

  & .sub-slide-img-wrapper {
    opacity: 1;
    width: 160%;
    transform: ${props => `translateX(${props.ProductSubSlidePosX}%)`};
    transition: transform ease 0.5s;
    position: relative;
    display: flex;
    top: 0;
    left: 0;
  }

  & .sub-slide-img-wrapper > div {
    width: 100%;
    margin: 5px;
    position: relative;
  }

  & .sub-slide-img-wrapper > div > img {
    width: 100%;
    height: auto;
    margin-left: 0;
    border-radius: 0.625rem;
    z-index: 50;
  }

  &
    .sub-slide-img-wrapper
    > div:nth-child(${props => props.ProductSlideIndex - 1}):after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff70;
    border-radius: 0.625rem;
    outline: 2px solid #925fff;
  }
  & .product-sub-slide-left {
    display: ${props => `${props.ProductSubSlidePosX == '0' ? 'none' : 'block'}`};
    width: 48px;
    height: 48px;
    position: absolute;
    background-image: url(/img/product_sub_slide_left.png);
    background-repeat: no-repeat;
    left: 10px;
    top: 50%;
    z-index: 40;
    transform: translateY(-50%);
  }

  & .product-sub-slide-right {
    display: ${props => `${props.ProductSubSlidePosX == '0' ? 'block' : 'none'}`};

    width: 48px;
    height: 48px;
    transform: translateY(-50%) scale(1, 1);
    position: absolute;
    background-image: url(/img/product_sub_slide_right.png);
    background-repeat: no-repeat;
    right: 10px;
    top: 50%;
    z-index: 40;
  }
`;
;// CONCATENATED MODULE: ./src/components/Sliders/ProductDetailSlider/index.tsx










const ProductDetailSlider = ({
  ssrProductData
}) => {
  var _data$productSubImg, _data$productSubImg2;

  const startSlideIndex = 2;
  const endSlideIndex = 9;
  const {
    0: productSlideIndex,
    1: setProductSlideIndex
  } = (0,external_react_.useState)(startSlideIndex);
  const {
    0: productSubSlidePosX,
    1: setProductSubSlidePosX
  } = (0,external_react_.useState)('0');
  const router = (0,router_.useRouter)();
  const {
    type,
    code
  } = router.query;
  const {
    data,
    isLoading,
    error
  } = (0,external_react_query_.useQuery)('productDetailInfo', () => (0,fetcher/* default */.Z)(`api/product/${code}`), {
    initialData: ssrProductData
  });
  const onClickProductSlideLeft = (0,external_react_.useCallback)(() => {
    setProductSlideIndex(prev => {
      if (prev == startSlideIndex) {
        setProductSlideIndex(endSlideIndex);
        setProductSubSlidePosX('-37.5');
      } else if (prev == 5) {
        setProductSlideIndex(4);
        setProductSubSlidePosX('0');
      }

      return prev <= startSlideIndex ? endSlideIndex : prev - 1;
    });
  }, [startSlideIndex, endSlideIndex]);
  const onClickProductSlideRight = (0,external_react_.useCallback)(() => {
    setProductSlideIndex(prev => {
      if (prev == 6) {
        setProductSlideIndex(7);
        setProductSubSlidePosX('-37.5');
      } else if (prev == endSlideIndex) {
        setProductSlideIndex(startSlideIndex);
        setProductSubSlidePosX('0');
      }

      return prev >= endSlideIndex ? startSlideIndex : prev + 1;
    });
  }, [startSlideIndex, endSlideIndex]);
  const onClickSubSlideLeftBtn = (0,external_react_.useCallback)(() => {
    setProductSubSlidePosX('0');
  }, []);
  const onClickSubSlideRightBtn = (0,external_react_.useCallback)(() => {
    setProductSubSlidePosX('-37.5');
  }, []);

  const onClickSubSlideImg = e => {
    setProductSlideIndex(+e.target.dataset.index);
  };

  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [(0,jsx_runtime_.jsxs)(ProductDetailSlide, {
      children: [data && jsx_runtime_.jsx("img", {
        src: `${utils_const/* baseApiUrl */.td + ((_data$productSubImg = data.productSubImg[productSlideIndex - startSlideIndex]) === null || _data$productSubImg === void 0 ? void 0 : _data$productSubImg.subimage)}`
      }), (0,jsx_runtime_.jsxs)("div", {
        children: [jsx_runtime_.jsx("img", {
          onClick: onClickProductSlideLeft,
          src: "/img/product_slide_left.png"
        }), jsx_runtime_.jsx("img", {
          onClick: onClickProductSlideRight,
          src: "/img/product_slide_right.png"
        })]
      })]
    }), jsx_runtime_.jsx(ProductDetailSubSlide, {
      ProductSubSlidePosX: productSubSlidePosX,
      ProductSlideIndex: productSlideIndex,
      children: jsx_runtime_.jsx("div", {
        className: "sub-slide-container",
        children: (0,jsx_runtime_.jsxs)("div", {
          className: "sub-slide-wrapper",
          children: [jsx_runtime_.jsx("button", {
            className: "product-sub-slide-left",
            onClick: onClickSubSlideLeftBtn
          }), jsx_runtime_.jsx("div", {
            className: "sub-slide-img-container",
            children: jsx_runtime_.jsx("div", {
              className: "sub-slide-img-wrapper",
              children: data === null || data === void 0 ? void 0 : (_data$productSubImg2 = data.productSubImg) === null || _data$productSubImg2 === void 0 ? void 0 : _data$productSubImg2.map((subImg, index) => {
                if (index > 7) return;
                return jsx_runtime_.jsx("div", {
                  children: jsx_runtime_.jsx("img", {
                    onClick: onClickSubSlideImg,
                    "data-index": `${index + startSlideIndex}`,
                    src: `${utils_const/* baseApiUrl */.td + subImg.subimage}`
                  })
                }, index);
              })
            })
          }), jsx_runtime_.jsx("button", {
            className: "product-sub-slide-right",
            onClick: onClickSubSlideRightBtn
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const Sliders_ProductDetailSlider = (/*#__PURE__*/external_react_default().memo(ProductDetailSlider));
// EXTERNAL MODULE: ./src/store/modules/basketAdd/index.ts
var basketAdd = __webpack_require__(6295);
// EXTERNAL MODULE: ./src/store/modules/paymentSave/index.ts
var paymentSave = __webpack_require__(4959);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-spinners"
var external_react_spinners_ = __webpack_require__(8176);
;// CONCATENATED MODULE: ./styles/page/[code].ts

const ProductDetailContainer = (styled_default()).main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 15px;
  & .product-Deital-wrapper {
    display: flex;
    ${props => props.IsTablet ? 'flex-direction: column;' : ''}
  }

  & .product-slide-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & .product-purchase-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    ${props => props.IsTablet ? 'margin-top: 30px;' : ' margin-left: 10px;'}
  }

  & .product-purchase-wrapper > div {
    max-width: 500px;
  }
`;
const ProductPurchaseWrapper = (styled_default()).div`
  margin-top: 50px;

  & .option-header {
    font-weight: 600;
    margin-bottom: 10px;
  }

  & .option-container {
    position: relative;
    display: flex;
    flex-direction: column;
    outline: 0 none;
    margin-top: 10px;
  }

  & .option-size {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    height: 50px;
    padding: 0 5px;
    appearance: none;
    padding-left: 10px;
  }

  & .option-size:focus {
    outline-color: #a3a3a3;
  }

  & .option-size:focus + .icoArrow img {
    transform: rotate(180deg);
  }

  & .icoArrow {
    position: absolute;

    right: 5px;
    z-index: 1;
    width: 35px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .arrow1 {
    top: 50px;
  }

  & .arrow2 {
    top: 15px;
  }
  & .icoArrow img {
    width: 50%;
    transition: 0.3s;
  }

  .basket-product-select {
    margin-top: 25px;
  }

  .basket-product-select h2 {
    margin-bottom: 10px;
    letter-spacing: -1px;
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #1e2732;
  }

  .basket-product-select-wrapper {
    display: flex;
    align-items: center;
  }

  .basket-product-count {
    margin-top: 2px;
    display: flex;
    width: 106px;
    padding: 10px 10px;
    align-items: start;
    border: 1px solid #efeff0;
    border-radius: 2px;
    background: #f9f9fa;
  }

  .basket-product-count > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 30px;
    height: 21px;
    border: 1px solid #ececec;
    color: #233549;
    font-size: 14px;
    text-align: center;
    background: #fff;
    margin: 0 6px;
  }

  .basket-product-count > input::-webkit-inner-spin-button {
    appearance: none;
  }

  .basket-product-count > button:nth-child(1) {
    width: 21px;
    height: 21px;
    background: url('/img/basket_product_count.png') no-repeat;
    background-position: 0 0;
  }

  .basket-product-count > button:nth-child(3) {
    width: 21px;
    height: 21px;
    background: url(' /img/basket_product_count.png') no-repeat;
    background-position: -26px 0;
  }

  .basket-product-select-btn {
    margin-left: 10px;
    display: block;
    width: 58px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    line-height: 38px;
    height: 40px;
    color: #5e636d;
    background: #fff;
    border: 1px solid #d1d3d6;
    border-radius: 2px;
  }

  & .product-purchase-payment {
    margin-top: 40px;
  }

  & .purchase-button {
    margin-top: 25px;
    display: flex;
  }

  & .clip-loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13.5px 3px;
    width: 15%;
  }

  & .purchase-button > button:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 4px 3px;
    width: 15%;
  }

  & .purchase-button > button:nth-child(2) {
    width: 43%;
    border: 1px solid #dbdbdb;

    margin-left: 0.3125rem;
  }

  & .purchase-button > button:nth-child(3) {
    width: 43%;
    border: 1px solid #b095eb;
    margin-left: 0.3125rem;
    color: #ffffff;
    background-color: #b095eb;
  }

  @keyframes scale2 {
    0% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.5, 1.5);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  & .product-dibs {
    display: inline-block;
    width: 100%;
    ${props => props.IsProductDibs ? `background: url('/img/product_detail_dibs_fill.png') center center no-repeat;
        animation-name: scale2;
        animation-duration: 1s;` : `background: url('/img/product_detail_dibs.png') center center no-repeat`};
    height: 32px;
    background-size: contain;
  }

  & .purchase-result {
    padding-bottom: 5px;
    border-bottom: 1px solid #111111;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .purchase-result span:nth-child(1) {
    font-size: 16px;
    line-height: 22px;
    color: #5e636d;
    letter-spacing: -1px;
  }

  & .purchase-result span:nth-child(2) {
    line-height: 38px;
    font-size: 24px;
    color: #000;
    font-weight: bold;
   
    letter-spacing: -0.5px;
}
  }

  & .product-dibs-count {
    font-size: 0.6875rem;
    color: #b095eb;
  }
`;
;// CONCATENATED MODULE: ./pages/product/[type]/[code].tsx



















const ProductDetails = ({
  ssrProductData
}) => {
  var _data$price;

  const {
    0: isProductDibs,
    1: setIsProductDibs
  } = (0,external_react_.useState)(false);
  const {
    0: isDibLoading,
    1: setIsDibLoading
  } = (0,external_react_.useState)(false);
  const {
    0: productDescNavIndex,
    1: setProductDescNavIndex
  } = (0,external_react_.useState)('1');
  const {
    0: productCount,
    1: setProductCount
  } = (0,external_react_.useState)(1);
  const {
    0: selectSize,
    1: setSelectSize
  } = (0,external_react_.useState)('default');
  const {
    0: selectColor,
    1: setSelectColor
  } = (0,external_react_.useState)('default');
  const {
    0: totalPrice,
    1: setTotalPrice
  } = (0,external_react_.useState)(0);
  const {
    0: selectedProductArr,
    1: setSelectedProductArr
  } = (0,external_react_.useState)([]);
  const router = (0,router_.useRouter)();
  const {
    type,
    code
  } = router.query;
  const {
    data,
    isLoading,
    error,
    refetch: productDetailInfoRefetch
  } = (0,external_react_query_.useQuery)('productDetailInfo', () => (0,fetcher/* default */.Z)(`api/product/${code}`), {
    initialData: ssrProductData
  });
  const {
    data: user,
    refetch: userRefetch
  } = (0,external_react_query_.useQuery)('user', () => (0,fetcher/* default */.Z)(`api/user/profile`));
  const {
    data: dibs,
    refetch: dibsRefetch
  } = (0,external_react_query_.useQuery)('user/dibs', () => (0,fetcher/* default */.Z)(`api/user/dibs`));
  const isTablet1024 = (0,Hooks/* useIsTablet1024 */.Wb)();
  const isTablet = (0,Hooks/* useIsTablet */.Av)();
  const isMobile = (0,Hooks/* useIsMobile */.dD)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => {
    if (selectedProductArr.length) {
      let sum = 0;

      for (let i = 0; i < selectedProductArr.length; i++) {
        sum += selectedProductArr[i].price * selectedProductArr[i].quantity;
      }

      setTotalPrice(sum);
    } else {
      setTotalPrice(0);
    }
  }, [selectedProductArr]);
  (0,external_react_.useEffect)(() => {
    if (dibs && data) {
      for (let i = 0; i < dibs.length; i++) {
        if (dibs[i].product_name == data.name) {
          setIsProductDibs(true);
          break;
        }

        if (i === dibs.length - 1) setIsProductDibs(false);
      }
    }
  }, [dibs, data]);
  (0,external_react_.useEffect)(() => {
    if (code) {
      productDetailInfoRefetch().then(() => dibsRefetch());
      userRefetch();
      setSelectSize('default');
      setSelectColor('default');
      setTotalPrice(0);
      setSelectedProductArr([]);
      setProductDescNavIndex('1');
    }
  }, [code]);
  const onClickProductDibs = (0,external_react_.useCallback)(async () => {
    if (!user) {
      alert('로그인 후 찜하기가 가능합니다.');
      return;
    }

    setIsDibLoading(true);

    if (isProductDibs) {
      const ret = await external_axios_default().post('api/user/dibs/delete', {
        userId: user.userId,
        product_name: data.name
      });
      if (ret.status === 200) setIsProductDibs(false);
      await dibsRefetch();
      await productDetailInfoRefetch();
    } else {
      const ret = await external_axios_default().post('api/user/dibs/save', {
        userId: user.userId,
        product_name: data.name
      });
      if (ret.status === 200) setIsProductDibs(true);
      await dibsRefetch();
      await productDetailInfoRefetch();
    }

    setIsDibLoading(false);
  }, [isProductDibs, user, data]); // const onClickProductDescNav = useCallback((e) => {
  //   setProductDescNavIndex(e.target.dataset.index);
  // }, []);

  const onChangeProductCount = (0,external_react_.useCallback)(e => {
    setProductCount(e.target.value);
  }, []);
  const onClickProductSubstractCount = (0,external_react_.useCallback)(e => {
    if (productCount <= 1) {
      alert('1개 미만이 될수 없습니다.');
      return;
    }

    setProductCount(prev => +prev - 1);
  }, [productCount]);
  const onClickProductAddCount = (0,external_react_.useCallback)(e => {
    if (productCount >= 99) {
      alert('99개를 초과할수 없습니다.');
      return;
    }

    setProductCount(prev => +prev + 1);
  }, [productCount]);
  const onFocustOut = (0,external_react_.useCallback)(e => {
    if (e.target.value > 99) {
      alert('99개를 초과할수 없습니다.');
      setProductCount(99);
    } else if (e.target.value < 1) {
      alert('1개 미만이 될수 없습니다.');
      setProductCount(1);
    } else if (e.target.value[0] == 0) {
      alert('올바른 값을 입력해주세요');
      setProductCount(1);
    } else {
      setProductCount(e.target.value);
    }
  }, []);
  const onChangeSelectSize = (0,external_react_.useCallback)(e => {
    setSelectSize(e.target.value);
  }, []);
  const onChangeSelectColor = (0,external_react_.useCallback)(e => {
    setSelectColor(e.target.value);
  }, []);
  const onClickSelectBtn = (0,external_react_.useCallback)(() => {
    if (selectColor && selectSize && productCount >= 1) {
      setSelectedProductArr(prev => prev.concat([{
        userId: user === null || user === void 0 ? void 0 : user.userId,
        product_name: data.name,
        price: data.price,
        quantity: productCount,
        size: selectSize,
        color: selectColor,
        image: data.image,
        state: false
      }]));
    }

    setSelectColor('default');
    setSelectSize('default');
    setProductCount(1);
  }, [selectColor, selectSize, productCount, data]);
  const onClickProductsBasket = (0,external_react_.useCallback)(async () => {
    if (!user) {
      alert('로그인 후 장바구니 이용이 가능합니다.');
      return;
    }

    if (selectedProductArr) {
      const dataArr = [];

      for (let i = 0; i < selectedProductArr.length; i++) {
        dataArr.push({
          userId: user.userId,
          product_name: data.name,
          price: data.price,
          quantity: selectedProductArr[i].quantity,
          size: selectedProductArr[i].size,
          color: selectedProductArr[i].color,
          image: data.image
        });
      }

      const res = await dispatch((0,basketAdd/* BasketAddFetch */.W)(dataArr));

      if (res.meta.requestStatus === 'fulfilled') {
        setSelectedProductArr([]);
      }
    }
  }, [selectedProductArr, user, basketAdd/* BasketAddFetch */.W]);
  const onClickPurchase = (0,external_react_.useCallback)(async () => {
    if (!user) {
      router_default().push('/login');
      return;
    }

    if (selectedProductArr.length > 0) {
      var _res$meta;

      const res = await dispatch((0,paymentSave/* PaymentSaveFetch */.u)(selectedProductArr));

      if ((res === null || res === void 0 ? void 0 : (_res$meta = res.meta) === null || _res$meta === void 0 ? void 0 : _res$meta.requestStatus) === 'fulfilled') {
        router.push('/payment');
      }
    }
  }, [selectedProductArr, dispatch, user, paymentSave/* PaymentSaveFetch */.u]);
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(ProductDetailContainer, {
      IsTablet1024: isTablet1024,
      IsTablet: isTablet,
      children: (0,jsx_runtime_.jsxs)("div", {
        className: "product-Deital-wrapper",
        children: [jsx_runtime_.jsx("div", {
          className: "product-slide-wrapper flex flex-col w-[50%]",
          children: jsx_runtime_.jsx(Sliders_ProductDetailSlider, {
            ssrProductData: ssrProductData
          })
        }), jsx_runtime_.jsx("div", {
          className: "product-purchase-wrapper ",
          children: (0,jsx_runtime_.jsxs)("div", {
            children: [jsx_runtime_.jsx("h3", {
              className: "text-[1.125rem] text-[#7E7E7E] font-semibold",
              children: "\uC2A4\uD0C0\uC77C\uB9B0\uD2B8"
            }), jsx_runtime_.jsx("p", {
              className: "text-[1.5rem] text-[#333333] mb-[30px] font-bold",
              children: data === null || data === void 0 ? void 0 : data.name
            }), jsx_runtime_.jsx("p", {
              className: "text-[1.15rem] text-[#9D9D9D] line-through ",
              children: data && Math.floor((data === null || data === void 0 ? void 0 : data.price) * 1.5).toLocaleString()
            }), (0,jsx_runtime_.jsxs)("div", {
              className: "border-b-[1px] pb-[25px]",
              children: [jsx_runtime_.jsx("span", {
                className: "text-[0.75rem] text-[#ff9995] mr-[0.5rem]",
                children: "32% \uD560\uC778 \uC801\uC6A9\uC2DC"
              }), jsx_runtime_.jsx("span", {
                className: "text-[1.5625rem] font-semibold",
                children: data === null || data === void 0 ? void 0 : (_data$price = data.price) === null || _data$price === void 0 ? void 0 : _data$price.toLocaleString()
              }), jsx_runtime_.jsx("strong", {
                children: "\uC6D0"
              })]
            }), jsx_runtime_.jsx("table", {
              className: "mt-[25px]",
              children: (0,jsx_runtime_.jsxs)("tbody", {
                className: "text-[#333333] text-[0.875rem]",
                children: [(0,jsx_runtime_.jsxs)("tr", {
                  children: [jsx_runtime_.jsx("th", {
                    className: "pr-[1.75rem] pr-[1.75rem]",
                    children: "\uD310\uB9E4\uC218\uB7C9"
                  }), jsx_runtime_.jsx("td", {
                    children: data === null || data === void 0 ? void 0 : data.perchase_quantity
                  })]
                }), (0,jsx_runtime_.jsxs)("tr", {
                  children: [jsx_runtime_.jsx("th", {
                    className: "pr-[1.75rem] pt-[10px] ",
                    children: "\uBC30\uC1A1\uAD6C\uBD84"
                  }), jsx_runtime_.jsx("td", {
                    className: "pt-[10px]",
                    children: "\uBB34\uB8CC\uBC30\uC1A1"
                  })]
                }), (0,jsx_runtime_.jsxs)("tr", {
                  children: [jsx_runtime_.jsx("th", {
                    className: "pr-[1.75rem] pt-[10px]",
                    children: "\uBC30\uC1A1\uC608\uC0C1"
                  }), jsx_runtime_.jsx("td", {
                    className: "pt-[10px]",
                    children: utils_const/* months */.e7[new Date().getMonth()] + new Date().getDate() + '일 ' + utils_const/* days */.an[new Date().getDay()] + ' 오후 3시 이전 주문시'
                  })]
                })]
              })
            }), (0,jsx_runtime_.jsxs)(ProductPurchaseWrapper, {
              IsProductDibs: isProductDibs,
              children: [(0,jsx_runtime_.jsxs)("div", {
                className: "option-container",
                children: [jsx_runtime_.jsx("span", {
                  className: "option-header",
                  children: "\uC635\uC158\uC120\uD0DD"
                }), (0,jsx_runtime_.jsxs)("select", {
                  className: "option-size",
                  onChange: onChangeSelectSize,
                  value: selectSize,
                  name: "\uC0AC\uC774\uC988",
                  children: [jsx_runtime_.jsx("option", {
                    disabled: true,
                    value: "default",
                    children: "\uC0AC\uC774\uC988"
                  }), jsx_runtime_.jsx("option", {
                    value: "S",
                    children: "S"
                  }), jsx_runtime_.jsx("option", {
                    value: "M",
                    children: "M"
                  }), jsx_runtime_.jsx("option", {
                    value: "L",
                    children: "L"
                  })]
                }), jsx_runtime_.jsx("span", {
                  className: "icoArrow arrow1",
                  children: jsx_runtime_.jsx("img", {
                    src: "/img/select_dropdown.png",
                    alt: ""
                  })
                })]
              }), (0,jsx_runtime_.jsxs)("div", {
                className: "option-container",
                children: [(0,jsx_runtime_.jsxs)("select", {
                  className: "option-size",
                  onChange: onChangeSelectColor,
                  value: selectColor,
                  name: "\uC0C9\uC0C1",
                  children: [jsx_runtime_.jsx("option", {
                    disabled: true,
                    value: "default",
                    children: "\uC0C9\uC0C1"
                  }), jsx_runtime_.jsx("option", {
                    value: "Black",
                    children: "Black"
                  }), jsx_runtime_.jsx("option", {
                    value: "White",
                    children: "White"
                  }), jsx_runtime_.jsx("option", {
                    value: "Red",
                    children: "Red"
                  })]
                }), jsx_runtime_.jsx("span", {
                  className: "icoArrow arrow2",
                  children: jsx_runtime_.jsx("img", {
                    src: "/img/select_dropdown.png",
                    alt: ""
                  })
                })]
              }), selectSize !== 'default' && selectColor !== 'default' && (0,jsx_runtime_.jsxs)("div", {
                className: "basket-product-select",
                children: [jsx_runtime_.jsx("h2", {
                  children: "\uC218\uB7C9"
                }), (0,jsx_runtime_.jsxs)("div", {
                  className: "basket-product-select-wrapper",
                  children: [(0,jsx_runtime_.jsxs)("div", {
                    className: "basket-product-count",
                    children: [jsx_runtime_.jsx("button", {
                      onClick: onClickProductSubstractCount
                    }), jsx_runtime_.jsx("input", {
                      onChange: onChangeProductCount,
                      type: "number",
                      value: productCount,
                      onBlur: onFocustOut
                    }), jsx_runtime_.jsx("button", {
                      onClick: onClickProductAddCount
                    })]
                  }), jsx_runtime_.jsx("button", {
                    className: "basket-product-select-btn",
                    onClick: onClickSelectBtn,
                    children: "\uC120\uD0DD"
                  })]
                })]
              }), jsx_runtime_.jsx(components_SelectedProductCardContainer, {
                selectedProductArr: selectedProductArr,
                setSelectedProductArr: setSelectedProductArr
              }), (0,jsx_runtime_.jsxs)("div", {
                className: "product-purchase-payment",
                children: [(0,jsx_runtime_.jsxs)("div", {
                  className: "purchase-result",
                  children: [jsx_runtime_.jsx("span", {
                    children: "\uCD1D \uC0C1\uD488\uAE08\uC561"
                  }), (0,jsx_runtime_.jsxs)("span", {
                    children: [totalPrice.toLocaleString(), "\uC6D0"]
                  })]
                }), (0,jsx_runtime_.jsxs)("div", {
                  className: "purchase-button",
                  children: [isDibLoading ? jsx_runtime_.jsx("span", {
                    className: "clip-loader-wrapper",
                    children: jsx_runtime_.jsx(external_react_spinners_.ClipLoader, {
                      color: '#36d7b7',
                      size: 30
                    })
                  }) : (0,jsx_runtime_.jsxs)("button", {
                    onClick: onClickProductDibs,
                    children: [jsx_runtime_.jsx("span", {
                      className: "product-dibs"
                    }), jsx_runtime_.jsx("span", {
                      className: "product-dibs-count",
                      children: data === null || data === void 0 ? void 0 : data.dibs
                    })]
                  }), jsx_runtime_.jsx("button", {
                    onClick: onClickProductsBasket,
                    children: jsx_runtime_.jsx("span", {
                      children: "\uC7A5\uBC14\uAD6C\uB2C8"
                    })
                  }), jsx_runtime_.jsx("button", {
                    onClick: onClickPurchase,
                    children: jsx_runtime_.jsx("span", {
                      children: "\uAD6C\uB9E4\uD558\uAE30"
                    })
                  })]
                })]
              })]
            })]
          })
        })]
      })
    }), jsx_runtime_.jsx(components_ProductDetailDesc, {})]
  });
};

const getServerSideProps = async ctx => {
  const {
    code
  } = ctx.query;
  const ssrProductData = await (0,fetcher/* default */.Z)(`${utils_const/* baseApiUrl */.td}/api/product/${code}`); // data 없을 땐 리턴값을 달리함
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }
  //pageProps로 넘길 데이터

  return {
    props: {
      ssrProductData
    }
  };
};
/* harmony default export */ const _code_ = (ProductDetails);

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

/***/ }),

/***/ 1076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProductReviewAddFetch),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  status: ''
}; // 초기 상태 정의

const ProductReviewAddFetch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('product/ReviewAddFetch', async data => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/product/review/add', data);
  return response === null || response === void 0 ? void 0 : response.data;
});
const ProductReviewAddSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'ProductReviewAdd',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(ProductReviewAddFetch.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(ProductReviewAddFetch.fulfilled, (state, action) => {
      state.status = 'success';
    });
    builder.addCase(ProductReviewAddFetch.rejected, (state, action) => {
      state.status = 'rejected';
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviewAddSlice.reducer); // 리듀서

/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 3908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9700:
/***/ ((module) => {

module.exports = require("react-paginate");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 8176:
/***/ ((module) => {

module.exports = require("react-spinners");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [63,350,696], () => (__webpack_exec__(1415)));
module.exports = __webpack_exports__;

})();