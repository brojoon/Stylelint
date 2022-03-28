import styled from 'styled-components';

export const OrderHistoryProductContainer = styled.section`
  position: relative;

  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  .order-product-content {
    display: flex;
    padding: 30px 20px;
    background-color: #ffffff;
    height: 130px;
    justify-content: space-between;
    border-radius: 6px;
    align-items: center;
  }

  .order-product-info {
    margin: 0 10px;
    display: flex;
    align-items: center;
  }

  .order-product-info h3 {
    margin-right: 20px;
    font-size: 18px;
    font-weight: 600;
  }

  .order-product-info > div > img {
    width: 80px;
    height: 80px;
  }

  .order-product-desc {
    font-size: 15px;
    letter-spacing: -0.5px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .order-product-desc span:nth-child(1) {
    font-weight: bold;
    color: #233549;
  }

  .order-product-desc span:nth-child(2) {
    color: #233549;
    opacity: 0.8;
    font-size: 14px;
    font-weight: 500;
  }

  .order-justfy-between-div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
  }

  .order-user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
  }

  .order-user-info > div {
    margin-top: 12px;
  }

  .order-product-price {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .order-product-price > span {
    color: #000;
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    word-wrap: break-word;
    word-break: break-all;
  }

  .order-product-price > button {
    width: 14px;
    height: 14px;
    margin-left: 14px;
    background: url('./img/basket_product_count.png') no-repeat;
    background-position: -102px -60px;
  }
`;
