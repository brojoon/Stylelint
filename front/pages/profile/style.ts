import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: #f3f3f3;
  padding-bottom: 100px;
  .profile-wrapper {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1%;
    background: #ffffff;
    padding: 20px 20px 60px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title > h2 {
    margin-top: 20px;
    margin-bottom: 70px;
    font-size: 32px;
    font-weight: 700;
  }

  .my-title {
    margin-bottom: 30px;
    font-size: 24px;

    font-weight: 600;
  }

  .my-info-header {
    padding-bottom: 16px;
    border-bottom: 1px solid #ddd;
  }

  .my-info-header > h4 {
    font-size: 20px;
    font-weight: 600;
    padding-right: 5px;
  }

  .my-info-header > h4 > b {
    color: #256feb;
  }

  .my-info-wrapper {
    display: flex;
    flex-direction: column;
  }

  .member-id-box {
    padding: 14px 0;
    border-bottom: 1px solid #eee;
  }

  .member-id-box dt {
    font-size: 16px;
    color: #999;
  }

  .member-id-box dd {
    margin-top: 4px;
    font-size: 20px;
  }

  & .option-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  & .option-email-sub {
    border-radius: 5px;
    height: 52px;
    padding-left: 15px;
    appearance: none;
    border: 1px solid #e0e0e0;
  }

  & .option-email-sub:focus {
    outline-color: #a3a3a3;
  }

  & .option-email-sub:focus + .icoArrow img {
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
    top: 23px;
  }

  & .icoArrow img {
    width: 50%;
    transition: 0.3s;
  }

  .payment-info-card {
    background-color: #ffffff;
    padding: 30px;
    position: relative;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    margin-top: 20px;
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
    background: url(./img/g_sprite__checkout.png) no-repeat;
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
    top: 16px;
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

  .info-submit {
    display: flex;
    justify-content: center;
    margin-top: 35px;
  }
  .info-submit > button {
    width: 400px;
    height: 62px;
    font-size: 16px;
    color: #fff;
    background-color: #256feb;
    border-radius: 6px;
    border: 1px solid #256feb;

    transition: 0.3s ease color, 0.3s ease background-color,
      0.3s ease border-color;
  }
  .info-submit > button:hover {
    background-color: #ffffff;
    color: #256feb;
    border: 1px solid #256feb;
  }
`;
