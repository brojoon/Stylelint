import { useIsTablet } from '@utils/Hooks';
import React, { useCallback, useState } from 'react';
import { PaymentSliderContainer } from './style';

const PaymentSlider = () => {
  const isTablet = useIsTablet();
  const [slideIndex, setSlideIndex] = useState(1);
  const onClickPrev = useCallback(() => {
    setSlideIndex((prev) => prev - 1);
  }, []);
  const onClickNext = useCallback(() => {
    setSlideIndex((prev) => prev + 1);
  }, []);

  return (
    <PaymentSliderContainer SlideIndex={slideIndex}>
      <div>
        <div>
          <h3>결제수단</h3>
        </div>

        <div className="slide-container">
          <ul>
            <li>
              <div>
                <div>
                  <img src="/img/payment-cards/kakao_card.png"></img>
                  <p>SK페이</p>
                  <p>9410 61** **** 3323</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <p>신한카드</p>
                  <p>9410 61** **** 3323</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <p>우리은행</p>
                  <p>1002***242312</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <p>카카오뱅크</p>
                  <p>1020****82213</p>
                </div>
              </div>
            </li>

            <li>
              <div>
                <button>카드 등록</button>
              </div>
            </li>
          </ul>
          <button onClick={onClickNext}></button>
          <button onClick={onClickPrev}></button>
        </div>
      </div>
    </PaymentSliderContainer>
  );
};

export default PaymentSlider;
