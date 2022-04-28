"use strict";
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 1047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Modals_ModalBasket)
});

// EXTERNAL MODULE: ./src/utils/Hooks/index.tsx
var Hooks = __webpack_require__(8684);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Modals/ModalBasket/style.ts

const ModalBackground = (styled_default()).div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3) !important;
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

  .modal-wrapper > button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 28px;
    height: 28px;
    background-position: -442px -122px;
    background-image: url(/img/close-btn.png);
  }

  .modal-wrapper > div {
    display: flex;
    flex-direction: column;
  }

  .modal-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .modal-img-wrapper > img {
    width: 50px;
    height: 44px;
  }

  .modal-img-wrapper > strong {
    font-size: 1.25rem;
    color: #1e2732;
    letter-spacing: -0.5px;
    line-height: 50px;
    font-weight: bold;
  }

  .modal-button-wrapper {
  }

  .modal-button-wrapper > button {
    background: #a4a9b0;
    border: 1px solid #9ba0a8;
    cursor: pointer;
    height: 32px;
    padding: 0;
    width: 112px;
    text-align: center;
    letter-spacing: 0;
    margin-right: 8px;
    border-radius: 50px;
    display: inline-block;
    line-height: 32px;
    vertical-align: middle;
  }

  .modal-button-wrapper > button > strong {
    font-weight: bold;
    line-height: 10px;
    font-size: 1rem;
    color: #fff;
  }

  .modal-button-wrapper a {
    height: 32px;
    padding: 0;
    width: 112px;
    text-align: center;
    letter-spacing: 0;
    margin-right: 8px;
    border-radius: 50px;
    display: inline-block;
    line-height: 32px;
    vertical-align: middle;
    background: #2e8de5;
    border: 1px solid #217fd7;
  }

  .modal-button-wrapper a > strong {
    font-weight: bold;
    line-height: 10px;
    font-size: 1rem;
    color: #fff;
  }
`;
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/Modals/ModalBasket/index.tsx








const ModalBasket = ({
  setIsModalBasket
}) => {
  const onClickModalClose = (0,external_react_.useCallback)(() => {
    setIsModalBasket(false);
  }, []);
  const isMobile = (0,Hooks/* useIsMobile */.dD)();
  return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [jsx_runtime_.jsx(ModalBackground, {
      onClick: onClickModalClose
    }), jsx_runtime_.jsx(ModalBasketContainer, {
      IsMobile: isMobile,
      children: (0,jsx_runtime_.jsxs)("div", {
        className: "modal-wrapper",
        children: [jsx_runtime_.jsx("button", {
          onClick: onClickModalClose
        }), (0,jsx_runtime_.jsxs)("div", {
          children: [(0,jsx_runtime_.jsxs)("div", {
            className: "modal-img-wrapper",
            children: [jsx_runtime_.jsx("img", {
              src: "/img/basket_modal.png",
              alt: "basket_modal.png"
            }), jsx_runtime_.jsx("strong", {
              children: "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uC0C1\uD488\uC744 \uB2F4\uC558\uC2B5\uB2C8\uB2E4."
            })]
          }), (0,jsx_runtime_.jsxs)("div", {
            className: "modal-button-wrapper",
            children: [jsx_runtime_.jsx("button", {
              onClick: onClickModalClose,
              children: jsx_runtime_.jsx("strong", {
                children: "\uACC4\uC18D \uC1FC\uD551"
              })
            }), jsx_runtime_.jsx(next_link["default"], {
              href: "/basket",
              children: jsx_runtime_.jsx("a", {
                children: jsx_runtime_.jsx("strong", {
                  children: "\uC7A5\uBC14\uAD6C\uB2C8\uB85C"
                })
              })
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const Modals_ModalBasket = (ModalBasket);

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ProductCard)
});

// EXTERNAL MODULE: ./src/utils/utils/const.ts
var utils_const = __webpack_require__(4820);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/ProductCard/style.ts

const ProductCardContainer = (styled_default()).div`
  .product-desc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const ProductCardIconWrapper = (styled_default()).div`
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

  & > span:nth-child(1) {
    ${props => props.IsProductDibs ? `    background-position: -85px -177px;
        animation-name: scale2;
        animation-duration: 1s;` : ''}
  }
`;
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/modules/basketAdd/index.ts
var basketAdd = __webpack_require__(6295);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/utils/utils/fetcher.ts
var fetcher = __webpack_require__(7981);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-spinners"
var external_react_spinners_ = __webpack_require__(8176);
// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/components/ProductCard/index.tsx














const ProductCard = ({
  data,
  setIsModalBasket
}) => {
  const {
    0: quickview,
    1: setQuickview
  } = (0,external_react_.useState)(false);
  const {
    0: isClickProductImg,
    1: setIsClickProductImg
  } = (0,external_react_.useState)(false);
  const {
    0: isDibLoading,
    1: setIsDibLoading
  } = (0,external_react_.useState)(false);
  const {
    0: isBasketLoading,
    1: setIsBasketLoading
  } = (0,external_react_.useState)(false);
  const {
    0: isProductDibs,
    1: setIsProductDibs
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)(); // const cardDecoColorRef = useRef([
  //   '#EBCBBD',
  //   '#4A8FA9',
  //   '#DA3737',
  //   '#B6E0EF',
  //   '#464646',
  //   '#923B55',
  //   '#79B0E4',
  //   '#E0A564',
  //   '#BF95C7',
  //   '#FFF5A0',
  //   '#FFFDF0',
  //   '#E4CBAD',
  // ]);

  const {
    data: user,
    isLoading,
    error
  } = (0,external_react_query_.useQuery)('user', () => (0,fetcher/* default */.Z)(`api/user/profile`));
  const {
    data: dibs
  } = (0,external_react_query_.useQuery)('user/dibs', () => (0,fetcher/* default */.Z)(`api/user/dibs`));
  (0,external_react_.useEffect)(() => {
    if (dibs) {
      for (let i = 0; i < dibs.length; i++) {
        if (dibs[i].product_name == data.name) setIsProductDibs(true);
      }
    }
  }, [dibs, data]);
  const onClickProductBasket = (0,external_react_.useCallback)(async () => {
    if (!user) {
      alert('로그인 후 장바구니 이용이 가능합니다.');
      return;
    } else {
      setIsBasketLoading(true);
      const res = await dispatch((0,basketAdd/* BasketAddFetch */.W)([{
        userId: user.userId,
        product_name: data.name,
        price: data.price,
        quantity: 1,
        size: 'S',
        color: 'Red',
        image: data.image
      }]));

      if (res.meta.requestStatus === 'fulfilled') {
        setIsModalBasket(true);
      }

      setIsBasketLoading(false);
    }
  }, [user]);
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
    } else {
      const ret = await external_axios_default().post('api/user/dibs/save', {
        userId: user.userId,
        product_name: data.name
      });
      if (ret.status === 200) setIsProductDibs(true); // dibsRefetch();
    }

    setIsDibLoading(false);
  }, [isProductDibs, user, data]); // const onClickProductCardImg = useCallback(() => {
  //   router.push(baseFrontUrl + `/product/${data.type}/${data.code}`);
  // }, [data, router, baseFrontUrl]);

  const onMouseDownSlide = (0,external_react_.useCallback)(e => {
    setIsClickProductImg(true);
  }, []);
  const onMouseMoveSlide = (0,external_react_.useCallback)(e => {
    setIsClickProductImg(false);
  }, []);
  const onMouseUpSlide = (0,external_react_.useCallback)(e => {
    if (isClickProductImg) router.push(`/product/${data.type}/${data.code}`);
  }, [router, data, isClickProductImg]); // const CardDecoColor = [
  //   '#EBCBBD',
  //   '#4A8FA9',
  //   '#DA3737',
  //   '#B6E0EF',
  //   '#464646',
  //   '#923B55',
  //   '#79B0E4',
  //   '#E0A564',
  //   '#BF95C7',
  //   '#FFF5A0',
  //   '#FFFDF0',
  //   '#E4CBAD',
  // ];

  return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: (0,jsx_runtime_.jsxs)(ProductCardContainer, {
      children: [(0,jsx_runtime_.jsxs)("div", {
        // onClick={onClickProductCardImg}
        className: "relative z-10 rounded-[10px] w-[100%]",
        onMouseEnter: () => {
          setQuickview(true);
        },
        onMouseLeave: () => {
          setQuickview(false);
        },
        onMouseDown: onMouseDownSlide,
        onMouseMove: onMouseMoveSlide,
        onMouseUp: onMouseUpSlide,
        children: [jsx_runtime_.jsx("img", {
          className: " w-[100%] h-[100%] rounded-[10px] bg-contain",
          src: `${utils_const/* baseApiUrl */.td}${data.image}`
        }), jsx_runtime_.jsx("div", {
          className: `${quickview ? 'flex' : 'hidden'} items-center justify-center absolute left-[0] top-[0] w-[100%] h-[100%] rounded-[10px] bg-white-rgba`,
          children: jsx_runtime_.jsx("div", {
            className: " h-[34px] w-[120px] bg-[position:-113px_-229px] bg-no-repeat bg-[url('~@../../../public/img/imags.png')]"
          })
        })]
      }), (0,jsx_runtime_.jsxs)("div", {
        children: [(0,jsx_runtime_.jsxs)("div", {
          className: "flex mt-[10px] mb-[5px]",
          children: [jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#EBCBBD] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#4A8FA9] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#DA3737] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#B6E0EF] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#464646] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#923B55] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#79B0E4] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#E0A564] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#BF95C7] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#FFF5A0] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#FFFDF0] border border-[#efefef] rounded-[3px] block`
          }), jsx_runtime_.jsx("span", {
            className: `w-[17px] h-[9px] ml-[3px] bg-[#E4CBAD] border border-[#efefef] rounded-[3px] block`
          })]
        }), jsx_runtime_.jsx("h3", {
          className: "text-[#969696] text-[0.75rem]",
          children: "\uC2A4\uD0C0\uC77C\uB9B0\uD2B8[\uC790\uCCB4\uC81C\uC791]"
        }), jsx_runtime_.jsx("div", {
          className: "text-[#212121] text-[0.85rem] tracking-[-0.5px] product-desc",
          children: data.name
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center tracking-[-0.5px] justify-between my-[10px] py-[12px] border-b-[1px] border-[#F7F7F7]",
          children: [(0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [jsx_runtime_.jsx("span", {
              className: "font-semibold",
              children: data.price.toLocaleString()
            }), jsx_runtime_.jsx("span", {
              className: "ml-[5px] text-[17px] text-[#FF9995]",
              children: "32%"
            })]
          }), jsx_runtime_.jsx("span", {
            children: jsx_runtime_.jsx("span", {
              className: "text-[0.75rem]",
              children: "\uBB34\uB8CC\uBC30\uC1A1"
            })
          })]
        }), (0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-between items-center text-[#969696] text-[7.5px]",
          children: [(0,jsx_runtime_.jsxs)("div", {
            className: "flex",
            children: [(0,jsx_runtime_.jsxs)("span", {
              className: "flex items-center after:w-[1px] after:h-[6.25px] after:bg-[#e8e8e8] after:mx-[5px] after:inline-block",
              children: ["\uD310\uB9E4\uC218 ", data.perchase_quantity]
            }), (0,jsx_runtime_.jsxs)("span", {
              children: ["\uB9AC\uBDF0\uC218 ", data === null || data === void 0 ? void 0 : data.review_count]
            })]
          }), (0,jsx_runtime_.jsxs)(ProductCardIconWrapper, {
            IsProductDibs: isProductDibs,
            className: "flex items-center",
            children: [isDibLoading ? jsx_runtime_.jsx(external_react_spinners_.ClipLoader, {
              color: '#36d7b7',
              size: 20
            }) : jsx_runtime_.jsx("span", {
              onClick: onClickProductDibs,
              className: "w-[23px] h-[20px] bg-[position:-45px_-177px] bg-[url('~@../../../public/img/imags.png')] inline-block"
            }), isBasketLoading ? jsx_runtime_.jsx("span", {
              className: "ml-[13px]",
              children: jsx_runtime_.jsx(external_react_spinners_.ClipLoader, {
                color: '#36d7b7',
                size: 20
              })
            }) : jsx_runtime_.jsx("span", {
              onClick: onClickProductBasket,
              className: "ml-[10px] w-[23px] h-[24px] bg-[position:-123px_-174px] bg-[url('~@../../../public/img/imags.png')] inline-block"
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_ProductCard = (ProductCard);

/***/ })

};
;