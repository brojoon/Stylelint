import styled from '@emotion/styled';

export const PaymentContainer = styled.section<{
  IsTablet1024: boolean;
  IsMobile: boolean;
}>`
  & .title-container {
    border-bottom: 1px solid #eeeeee;
  }

  & .title-wrapper {
    padding: 0 15px;
    max-width: 1300px;
    margin: 0 auto;
  }

  & .title {
    font-size: 1.8rem;
    color: #363636;
    font-weight: bold;
    letter-spacing: -1px;
    width: 100%;
    margin: 20px 0;
    background: url(/img/purchase_pagenation.png) right -120px no-repeat;
    ${(props) => (props.IsMobile ? 'text-indent: -9999px;' : '')}
  }

  .payment-section-container {
    background: #f3f3f3;
  }

  .payment-section-wrapper {
    padding: 40px 15px;
    max-width: 1300px;
    margin: 0 auto;
  }

  .payment-section-flex-wrapper {
    display: flex;
    justify-content: space-between;
    ${(props) => (props.IsTablet1024 ? 'flex-direction: column; ' : '')}
  }

  .payment-section-flex-wrapper > div:nth-child(1) {
    ${(props) => (props.IsTablet1024 ? '' : 'margin-right: 25px;')}
    width: 100%;
  }

  .payment-section-flex-wrapper > div:nth-child(2) {
  }

  .payment-info-card {
    background-color: #ffffff;
    padding: 30px;
    position: relative;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
  }

  .payment-info-card h3 {
    font-size: 17px;
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
    background: url(/img/g_sprite__checkout.png) no-repeat;
    background-position: -52px -26px;
    font-size: 0;
    background-size: 300px auto;
  }

  .payment-info-text {
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    font-weight: 500;
    letter-spacing: -0.16px;
  }

  .payment-info-text > input:nth-child(1) {
    padding: 10px;

    border-radius: 5px 0 0 5px;
    width: 50%;
    border-left: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
  }

  .payment-info-text > input:nth-child(2) {
    padding: 10px;
    border-radius: 0 5px 5px 0;
    width: 50%;
    border: 1px solid #dbdbdb;
  }

  .payment-info-text > input:focus {
    outline-color: #a3a3a3;
  }

  .payment-address-text {
    margin-top: 5px;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    font-weight: 500;
    letter-spacing: -0.16px;
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

  .payment-address-text > input:nth-child(2) {
    padding: 10px;
    border-radius: 0 0 5px 5px;
    width: 100%;
    border: 1px solid #dbdbdb;
  }

  .payment-address-text > input:nth-child(2):focus {
    outline-color: #a3a3a3;
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

  & .option-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  & .option-post {
    border-radius: 2px;
    height: 52px;
    padding-left: 15px;
    appearance: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    color: #000000;
  }

  & .option-post:focus {
    outline-color: #a3a3a3;
  }

  & .option-post:focus + .icoArrow img {
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
    top: 16px;
  }

  & .icoArrow img {
    width: 50%;
    transition: 0.3s;
  }

  \ .payment-purchase-card {
    background-color: #ffffff;
    padding: 20px;
    position: relative;

    border-radius: 8px;
    border: 1px solid #000;
    box-sizing: border-box;
    ${(props) => (props.IsTablet1024 ? 'width: 100%;' : 'width: 460px;')}
    ${(props) => (props.IsTablet1024 ? 'margin-top: 20px;' : '')}
  }

  .payment-purchase-header {
    padding-bottom: 20px;
    border-bottom: 1px solid #000000;
  }

  .payment-purchase-header > h3 {
    font-size: 18px;
    line-height: 18px;
    color: #222;
    letter-spacing: -0.18px;
    font-weight: 600;
  }

  .payment-purchase-info {
    padding: 20px 0;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .payment-purchase-info h3 {
    color: #233549;
    font-weight: bold;
    opacity: 0.9;
  }

  .payment-purchase-info img {
    width: 86px;
    height: 86px;
    cursor: pointer;
  }

  .payment-purchase-info > div:nth-child(2) {
    margin-left: 15px;
  }

  .payment-purchase-info > div:nth-child(2) > div:nth-child(2) {
    margin-top: 4px;
  }

  .payment-purchase-info-detail-wrapper > div:nth-child(1) > span {
    color: #233549;
    opacity: 0.8;
    font-size: 0.825rem;
  }

  .payment-purchase-info-detail-wrapper > div:nth-child(2) > span:nth-child(1) {
    font-size: 18px;
    line-height: 24px;
    color: #000;
    font-weight: bold;
  }

  .payment-purchase-info-detail-wrapper > div:nth-child(2) > span:nth-child(2) {
    display: inline-block;
    font-size: 15px;
    line-height: 24px;
    color: #000;
    vertical-align: bottom;
    margin-left: 1px;
    font-weight: bold;
  }

  .payment-purchase-info-detail-wrapper > span:nth-child(3) {
    margin-left: 5px;
    display: inline-block;
    font-size: 15px;
    line-height: 24px;
    color: #000;
    vertical-align: bottom;
  }

  .payment-purchase-price {
    display: flex;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    justify-content: space-between;
    padding: 20px 0;
  }

  .payment-purchase-price > span:nth-child(1) {
    font-size: 16px;
    line-height: 27px;
    color: #616161;
  }

  .payment-purchase-price > span:nth-child(2) {
    float: right;
    line-height: 27px;
    font-size: 17px;
    color: #000;
  }

  .payment-purchas-total {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }

  .payment-purchas-total > span:nth-child(1) {
    font-size: 18px;
    line-height: 30px;
    color: #000;
    letter-spacing: -0.3px;
  }

  .payment-purchas-total > span:nth-child(2) {
    font-size: 30px;
    color: #000;
    line-height: 30px;
    letter-spacing: -0.3px;
    font-weight: 700;
  }

  .payment-purchas-btn > button {
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    line-height: 56px;
    color: #fff;
    background: #0028ac;
    text-align: center;
    border-radius: 8px;
    letter-spacing: -0.22px;
  }

  .error-text {
    color: #f45452;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }

  .error-text::before {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
    background: url(/img/icon_error.png) center center no-repeat;
    background-size: 100% auto;
    display: inline-block;
    content: '';
  }
`;
