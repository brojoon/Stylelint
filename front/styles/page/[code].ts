import styled from '@emotion/styled';

export const ProductDetailContainer = styled.main<{
  IsTablet1024: boolean;
  IsTablet: boolean;
}>`
  max-width: 1300px;
  margin: 0 auto;
  padding: 15px;
  & .product-Deital-wrapper {
    display: flex;
    ${(props) => (props.IsTablet ? 'flex-direction: column;' : '')}
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
    ${(props) => (props.IsTablet ? 'margin-top: 30px;' : ' margin-left: 10px;')}
  }

  & .product-purchase-wrapper > div {
    max-width: 500px;
  }
`;

export const ProductPurchaseWrapper = styled.div<{ IsProductDibs: boolean }>`
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

  .basket-product-count > button:nth-of-type(1) {
    width: 21px;
    height: 21px;
    background: url('/img/basket_product_count.png') no-repeat;
    background-position: 0 0;
  }

  .basket-product-count > button:nth-of-type(2) {
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

  & .purchase-button > button:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 4px 3px;
    width: 15%;
  }

  & .purchase-button > button:nth-of-type(2) {
    width: 43%;
    border: 1px solid #dbdbdb;

    margin-left: 0.3125rem;
  }

  & .purchase-button > button:nth-of-type(3) {
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
    ${(props) =>
      props.IsProductDibs
        ? `background: url('/img/product_detail_dibs_fill.png') center center no-repeat;
        animation-name: scale2;
        animation-duration: 1s;`
        : `background: url('/img/product_detail_dibs.png') center center no-repeat`};
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

  & .purchase-result span:nth-of-type(1) {
    font-size: 16px;
    line-height: 22px;
    color: #5e636d;
    letter-spacing: -1px;
  }

  & .purchase-result span:nth-of-type(2) {
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
