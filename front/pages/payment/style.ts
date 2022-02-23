import styled from 'styled-components';

export const PaymentContainer = styled.section`
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

    background: url(./img/purchase_pagenation.png) right -113px no-repeat;
  }

  .payment-section-container {
    background: #f3f3f3;
  }

  .payment-section-wrapper {
    padding: 40px 1%;
    max-width: 1300px;
    margin: 0 auto;
  }

  .payment-info-card {
    background-color: #ffffff;
    padding: 30px;
    position: relative;
    width: 65%;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
  }

  .payment-info-card h3 {
    font-size: 1.125rem;
    position: relative;
    color: #ff7638;
    font-weight: 600;
    margin-bottom: 10px;
    padding-left: 30px;
  }

  .payment-info-card h3:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    overflow: hidden;
    display: inline-block;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__checkout.png)
      no-repeat;
    background-position: -52px -26px;
    font-size: 0;
    background-size: 300px auto;
  }

  .payment-address-name > span {
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    color: #222;
    font-weight: bold;
    vertical-align: top;
  }

  .payment-address-name > span:nth-child(2) {
    margin-left: 6px;
  }

  .payment-address-text {
    margin-top: 2px;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    font-weight: 500;
    letter-spacing: -0.16px;
    margin-left: -10px;
  }

  .payment-address-text > input:nth-child(1) {
    padding: 10px;
    background: #f5f5f5;
    border-radius: 5px 5px 0 0;
    width: 100%;
    border-left: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
  }

  .payment-address-text-sub {
    margin-top: 2px;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    font-weight: 500;
    letter-spacing: -0.16px;
    margin-left: -10px;
  }

  .payment-address-text > input:nth-child(2) {
    padding: 10px;
    border-radius: 0 0 5px 5px;
    width: 100%;
    border: 1px solid #dbdbdb;
  }

  .payment-address-change {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .payment-address-change > button {
    display: inline-block;
    padding: 10px 15px;
    line-height: 22px;
    font-size: 14px;
    background: #fff;
    color: #2c2c2c;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    font-weight: 600;
  }

  .daum-post-code {
    width: 5000px;
  }
`;
