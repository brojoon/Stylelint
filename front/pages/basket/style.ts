import styled from 'styled-components';

export const BasketContainer = styled.section<{ IsCheckedAll: boolean }>`
  & .title-container {
    border-bottom: 1px solid #eeeeee;
  }

  & .title-wrapper {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
  }

  & .title {
    font-size: 2.375rem;
    color: #363636;
    font-weight: bold;
    letter-spacing: -1px;

    width: 100%;
    margin: 20px 0;

    background: url(./img/purchase_pagenation.png) right -18px no-repeat;
  }

  & .basket-tab-container {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #d7d7d7;
  }

  & .basket-tab-wrapper {
    max-width: 1300px;
    padding: 0 1%;
    margin: 0 auto;
    display: flex;
  }
  .basket-tab-wrapper > span:nth-child(1) {
    font-weight: bold;
    color: #067dfd;
    display: block;
    padding: 15px 0;
    font-size: 1.25rem;
  }

  .basket-count {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #e6f1fd;
    line-height: 20px;
    float: left;
    border-radius: 50%;
    text-align: center;
    margin-left: 6px;
    line-height: 1;
    margin-top: 20px;
  }

  .basket-count > em {
    font-size: 0.75rem;
    letter-spacing: -0.5px;
    text-align: center;
    display: block;
    line-height: 20px;
    font-weight: inherit;
    font-weight: bold;
    color: #067dfd;
  }

  .basket-option {
    display: block;
    width: 100%;
    overflow: hidden;
    height: auto;
    background: #f3f3f3;
  }

  .basket-option-conatiner {
    max-width: 1300px;
    padding: 0 1%;
    margin: 0 auto;
  }

  .basket-option-wrapper {
    display: block;
    height: 60px;
  }

  .basket-option-wrapper > ul {
    width: auto;
    overflow: auto;
    height: auto;
    padding: 20px 0 20px 8px;
    display: flex;
  }

  .basket-option-wrapper > ul > li {
    line-height: 20px;
    margin-right: 14px;
    position: relative;
    margin-left: 14px;
    vertical-align: top;
    height: 20px;
    color: #676767;
    font-size: 14px;
  }

  .basket-option-wrapper > ul > li:nth-child(2):before {
    content: '';
    position: absolute;
    background: #d8d8d8;
    width: 1px;
    height: 10px;
    top: 5px;
    left: -13px;
  }

  .basket-option-select-wrapper {
    color: #7f8590;
    display: inline;
    font-size: 14px;
    letter-spacing: -0.5px;
    font-weight: normal;
    line-height: 20px;

    position: relative;
  }

  .basket-option-select-wrapper > label > input {
    display: none;
  }

  .basket-option-select-wrapper > label {
    white-space: nowrap;
    padding-left: 25px;
    display: inline-block;
    cursor: pointer;
    background: url(./img/input_checkbox_custom.png) no-repeat;
    background-position: ${(props) =>
      props.IsCheckedAll ? '0px -24px' : '0px 0'};
  }

  .basket-products-container {
    background: #f3f3f3;
    padding-bottom: 300px;
    width: 100%;
  }

  .basket-products-wrapper {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
  }

  .basket-product-order-container {
    background: #ffffff;
    max-width: 330px;
    padding: 20px;
    width: 30%;
    height: 200px;
    margin-left: 15px;
    border: 1px solid #000;
    border-radius: 6px;
  }

  .basket-product-order-wrapper > ul > li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .basket-product-order-wrapper > ul > li:nth-child(1) > span {
    color: #7f8590;
    font-size: 14px;
  }

  .basket-product-order-wrapper > ul > li:nth-child(1) > div > span {
    color: #444444;
    font-size: 14px;
  }

  .basket-product-order-wrapper > ul > li:nth-child(2) > span {
    color: #000000;
    font-size: 16px;
    letter-spacing: -0.5px;
  }

  .basket-product-order-wrapper > ul > li:nth-child(2) {
    display: flex;
    align-items: center;
  }

  .basket-product-order-wrapper > ul > li:nth-child(2) > div {
    color: #000000;
    display: flex;
    align-items: center;
  }

  .basket-product-order-wrapper
    > ul
    > li:nth-child(2)
    > div
    > span:nth-child(1) {
    font-size: 30px;
    color: #000;
    letter-spacing: -0.7px;
    font-weight: bold;
  }

  .basket-product-order-wrapper
    > ul
    > li:nth-child(2)
    > div
    > span:nth-child(2) {
    font-weight: normal;
    vertical-align: top;
    margin-top: 9px;
    display: inline-block;
    color: #000;
  }

  .basket-product-order-btn {
    display: flex;
    justify-content: center;
    aling-items: center;
  }

  .basket-product-order-btn > button {
    width: 100%;
    height: 60px;
    display: block;
    background: #2e8de5;
    border-radius: 2px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    vertical-align: middle;
  }

  .empty-container {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
  }

  .empty-container h2 {
    font-size: 62px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .empty-container > span {
    margin-top: 18px;
    font-size: 22px;
    font-weight: 500;
  }
`;
