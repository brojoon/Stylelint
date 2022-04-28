import styled from '@emotion/styled';

export const OrderHistoryProductContainer = styled.section<{
  IsTable1024: boolean;
}>`
  position: relative;

  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  .order-product-content {
    display: flex;
    padding: 30px 20px;
    background-color: #ffffff;

    justify-content: space-between;
    border-radius: 6px;
    align-items: center;
    flex-direction: ${(props) => (props.IsTable1024 ? 'column' : 'row')};
    text-align: center;
  }

  .order-product-info {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${(props) => (props.IsTable1024 ? 'width: 100%;' : '')}
    ${(props) => (props.IsTable1024 ? 'margin-bottom: 10px' : '')}
  }

  .order-product-info h3 {
    font-size: ${(props) => (props.IsTable1024 ? '16px' : '14px')};
    color: #444;
    font-weight: 600;

    margin-bottom: ${(props) => (props.IsTable1024 ? '8px' : '1px')};
    white-space: nowrap;
  }

  .order-product-info > div > img {
    width: ${(props) => (props.IsTable1024 ? '100%' : '80px')};
    height: ${(props) => (props.IsTable1024 ? '100%' : '80px')};
  }

  .order-product-info > div {
    width: 100%;
  }

  .order-product-desc {
    font-size: 15px;
    letter-spacing: -0.5px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${(props) => (props.IsTable1024 ? 'margin-bottom: 10px' : '')}
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
    color: #444;
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
    font-size: 1.125rem;
    font-weight: bold;
    word-wrap: break-word;
    word-break: break-all;
  }

  .order-product-price > button {
    width: 14px;
    height: 14px;
    margin-left: 14px;
    background: url('/img/basket_product_count.png') no-repeat;
    background-position: -102px -60px;
  }
`;
