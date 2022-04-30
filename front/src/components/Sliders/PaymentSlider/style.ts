import styled from '@emotion/styled';
export const PaymentSliderContainer = styled.div<{ SlideIndex: number }>`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  margin-top: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  & > div {
    padding: 30px;
    width: 727px;
  }
  & > div > div > h3 {
    border-bottom: 1px solid #333;
    padding-bottom: 20px;
    font-weight: 600;
  }
  .slide-container {
    position: relative;
    height: 265px;
    overflow: hidden;
  }
  .payment-card-config {
    margin-top: 15px;
    display: flex;
    justify-content: end;
  }
  .payment-card-config > button {
    height: 28px;
    padding: 4px 7px 4px;
    font-size: 12px;
    line-height: 16px;
    color: #2c2c2c;
    background: #fff;
    border: 1px solid #bdbdbd;
    border-radius: 6px;
  }
  .slide-container > ul {
    text-align: left;
    float: none;
    position: absolute;
    inset: 0px auto auto
      ${(props) => {
        return props.SlideIndex == 1 ? -179 : 170 - props.SlideIndex * 349;
      }}px;
    transition: inset 0.3s;
    margin: 0px;
    width: 6288px;
    height: 100%;
    z-index: auto;
    display: flex;
    align-items: center;
  }
  .slide-container > ul > li {
    width: 287px;
    min-height: 177px;
    margin: 0 31px;
    position: relative;
  }
  .slide-container > ul > li > div > div {
    position: absolute;
    bottom: 10%;
    left: 10%;
  }
  .slide-container > ul > li > div > div > p:nth-of-type(1) {
    font-size: 15px;
    line-height: 15px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 1px rgb(0 0 0 / 15%);
  }
  .slide-container > ul > li > div > div > p:nth-of-type(2) {
    font-size: 14px;
    color: #fff;
    text-shadow: 0 1px 1px rgb(0 0 0 / 15%);
    letter-spacing: 2px;
  }

  .slide-container > ul > li:nth-of-type(1) > div {
    width: 287px;
    min-height: 177px;
    background: url(/img/payment_card.png) no-repeat;
    background-size: 1455px auto;
    background-position: -1168px 0;
  }

  .slide-container > ul > li:nth-of-type(2) > div {
    width: 287px;
    min-height: 177px;
    background: url(/img/payment_card.png) no-repeat;
    background-size: 1455px auto;
    background-position: 0px -1820px;
  }
  .slide-container > ul > li:nth-of-type(3) > div {
    width: 287px;
    min-height: 177px;
    background: url(/img/payment_card.png) no-repeat;
    background-size: 1455px auto;
    background-position: 0px -1092px;
  }
  .slide-container > ul > li:nth-of-type(4) > div {
    width: 287px;
    min-height: 177px;
    background: url(/img/payment_card.png) no-repeat;
    background-size: 1455px auto;
    background-position: -1168px -1638px;
  }
  .slide-container > ul > li:nth-of-type(5) > div {
    width: 287px;
    min-height: 177px;
    background: url(/img/payment_card.png) no-repeat;
    background-size: 1455px auto;
  }

  .slide-container > button:nth-of-type(1) {
    content: '';
    overflow: hidden;
    display: ${(props) => {
      return props.SlideIndex >= 4 ? 'none' : 'inline-block';
    }};
    background: url(/img/sprite__checkout.png) no-repeat;
    background-position: -163px -92px;
    background-size: 300px auto;
    font-size: 0;
    right: 21%;
    position: absolute;
    z-index: 50;
    top: 50%;
    transform: translate(50%, -50%);
    width: 32px;
    height: 32px;
  }
  .slide-container > button:nth-of-type(2) {
    content: '';
    display: ${(props) => {
      return props.SlideIndex <= 0 ? 'none' : 'inline-block';
    }};
    overflow: hidden;
    background: url(/img/sprite__checkout.png) no-repeat;
    background-position: -197px -92px;
    background-size: 300px auto;
    transform: translate(50%, -50%);
    font-size: 0;
    position: absolute;
    z-index: 5;
    top: 50%;
    width: 32px;
    height: 32px;
    left: 20%;
  }
`;
