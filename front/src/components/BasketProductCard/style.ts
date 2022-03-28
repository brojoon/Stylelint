import styled from 'styled-components';

export const BasketProductContainer = styled.section<{ IsChecked: boolean }>`
  position: relative;
  min-width: 800px;
  width: 70%;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  .basket-product-content {
    display: flex;
    padding: 30px 20px;
    background-color: #ffffff;
    height: 130px;
    justify-content: space-between;
    border-radius: 6px;
  }

  .basket-product-info {
    margin: 0 10px;
    display: flex;
  }

  .basket-product-info > span > label {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
    background: url(./img/input_checkbox_custom.png) no-repeat;
    background-position: ${(props) =>
      props.IsChecked ? '0px -24px' : '0px 0'};
  }
  .basket-product-info > span > label > input {
    display: none;
  }

  .basket-product-info > div > img {
    width: 80px;
    height: 80px;
  }

  .basket-product-desc {
    font-size: 15px;
    letter-spacing: -0.5px;
    max-width: 180px;
    display: flex;
    flex-direction: column;
  }

  .basket-product-desc span:nth-child(1) {
    font-weight: bold;
    color: #233549;
  }

  .basket-product-desc span:nth-child(2) {
    color: #233549;
    opacity: 0.8;
    font-size: 14px;
    font-weight: 500;
  }

  .basket-product-count {
    margin-left: 1.25rem;
    margin-top: 2px;
    display: flex;
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
    background: url('./img/basket_product_count.png') no-repeat;
    background-position: 0 0;
  }

  .basket-product-count > button:nth-child(3) {
    width: 21px;
    height: 21px;
    background: url('./img/basket_product_count.png') no-repeat;
    background-position: -26px 0;
  }

  .basket-justfy-between-div {
    flex: 1;
  }

  .basket-product-price {
    display: block;
  }

  .basket-product-price > span {
    color: #000;
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    word-wrap: break-word;
    word-break: break-all;
  }

  .basket-product-price > button {
    width: 14px;
    height: 14px;
    margin-left: 14px;
    background: url('./img/basket_product_count.png') no-repeat;
    background-position: -102px -60px;
  }

  .basket-product-order {
    width: 35%;
    height: 500px;
    background-color: #ffffff;
  }
`;
