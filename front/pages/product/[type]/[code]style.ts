import styled from 'styled-components';

export const ProductDetailContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;

  & .product-Deital-wrapper {
    margin: 1.6rem;
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

  & .product-purchase-payment {
    margin-top: 70px;
  }

  & .purchase-button {
    margin-top: 30px;
    display: flex;
  }

  & .purchase-button > button:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 4px 3px;
    width: 12%;
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
    padding-bottom: 30px;
    border-bottom: 1px solid #111111;
  }

  & .product-dibs-count {
    font-size: 0.6875rem;
    color: #b095eb;
  }
`;
