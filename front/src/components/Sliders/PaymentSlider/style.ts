import styled from 'styled-components';

export const PaymentSliderContainer = styled.div<{ SlideIndex: number }>`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 30px;
  width: 727px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;

  & > div > h3 {
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

  .slide-container > ul > li:nth-child(1) > div {
    width: 287px;
    min-height: 177px;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__payment-card.png)
      no-repeat;
    background-size: 1455px auto;
  }

  .slide-container > ul > li > div > div {
    position: absolute;
    bottom: 10%;
    left: 10%;
  }

  .slide-container > ul > li > div > div > p:nth-child(1) {
    font-size: 15px;
    line-height: 15px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 1px rgb(0 0 0 / 15%);
  }

  .slide-container > ul > li > div > div > p:nth-child(2) {
    font-size: 14px;
    color: #fff;
    text-shadow: 0 1px 1px rgb(0 0 0 / 15%);
    letter-spacing: 2px;
  }

  .slide-container > ul > li:nth-child(2) > div {
    width: 287px;
    min-height: 177px;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__payment-card.png)
      no-repeat;
    background-size: 1455px auto;
    background-position: -1168px 0;
  }

  .slide-container > ul > li:nth-child(3) > div {
    width: 287px;
    min-height: 177px;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__payment-card.png)
      no-repeat;
    background-size: 1455px auto;
    background-position: 0px -1092px;
  }

  .slide-container > ul > li:nth-child(4) > div {
    width: 287px;
    min-height: 177px;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__payment-card.png)
      no-repeat;
    background-size: 1455px auto;
    background-position: -1168px -1638px;
  }

  .slide-container > ul > li:last-child {
    background-color: white;
  }

  .slide-container > ul > li:last-child button {
    width: 287px;
    height: 177px;
    border-radius: 8px;
    border: solid 1px #000;
    background: #fff;
    font-size: 15px;
    font-weight: 500;
    color: #000;
    text-align: center;
  }

  .slide-container > ul > li:last-child button:before {
    overflow: hidden;
    display: inline-block;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__checkout.png)
      no-repeat;
    background-size: 300px auto;
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 12px;
    background-position: 0 -183px;
  }

  .slide-container > button:nth-child(2) {
    content: '';
    overflow: hidden;

    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__checkout.png)
      no-repeat;
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

  .slide-container > button:nth-child(3) {
    content: '';
    display: ${(props) => {
      return props.SlideIndex <= 0 ? 'none' : 'inline-block';
    }};
    overflow: hidden;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/checkout/sprite__checkout.png)
      no-repeat;
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
