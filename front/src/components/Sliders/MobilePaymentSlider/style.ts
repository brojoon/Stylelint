import styled from 'styled-components';

export const PaymentSliderContainer = styled.div<{
  SlideIndex: number;
  posX: string;
  IsTransition: boolean;
}>`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  margin-top: 20px;
  border-radius: 8px;
  box-sizing: border-box;

  width: 100%;

  padding: 20px;

  & > div {
    width: 100%;
    height: 42vw;
    position: relative;
    overflow: hidden;
  }

  .slide-container {
    width: 500%;
    height: 100%;
  }

  .slide-container > div {
    display: flex;
    height: 100%;
    transform: ${(props) => `translateX(${props.posX}%)`};
    transition: ${(props) =>
      props.IsTransition
        ? 'transform cubic-bezier(0.60, 0.20, 0.30, 1) 0.5s'
        : ''};
  }

  & > div > div > h3 {
    border-bottom: 1px solid #333;
    padding-bottom: 20px;
    font-weight: 600;
  }

  .pagenation-wrapper {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    min-height: 30px;
    min-width: 50px;
    border-radius: 3.1rem;
    width: 12%;
    height: 11%;

    bottom: 8%;
    right: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    z-index: 1000;
  }

  .slide-container > div > div:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: url(/img/payment-cards/신한_card.png) no-repeat;
    width: 20%;
    background-size: 100% 100%;
  }

  .slide-container > div > div:nth-child(2) {
    position: absolute;
    top: 0;
    left: 20%;
    height: 100%;
    width: 20%;
    background: url(/img/payment-cards/toss_card.png) no-repeat;
    background-size: 100% 100%;
  }

  .slide-container > div > div:nth-child(3) {
    position: absolute;
    top: 0;
    left: 40%;
    height: 100%;
    width: 20%;
    background: url(/img/payment-cards/우리_card.png) no-repeat;
    background-size: 100% 100%;
  }

  .slide-container > div > div:nth-child(4) {
    position: absolute;
    top: 0;
    left: 60%;
    height: 100%;
    width: 20%;
    background: url(/img/payment-cards/kakao_card.png) no-repeat;
    background-size: 100% 100%;
  }

  .slide-container > div > div:nth-child(5) {
    position: absolute;
    top: 0;
    left: 80%;
    height: 100%;
    width: 20%;
    background: url(/img/payment-cards/sk_card.png) no-repeat;
    background-size: 100% 100%;
  }

  .card-text {
    position: absolute;
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 1px 1px rgb(0 0 0 / 15%);
    bottom: 8%;
    left: 7%;
  }
`;
