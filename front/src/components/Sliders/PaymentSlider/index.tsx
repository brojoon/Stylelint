import { useIsTablet } from '@utils/Hooks';
import React, { useCallback, useRef, useState } from 'react';
import { PaymentSliderContainer } from './style';

const PaymentSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const cardInfoArray = useRef([
    ['신한카드', '9410 61** **** 3323'],
    ['토스', '4402 61** **** 3323'],
    ['우리은행', '1002 *** 242312'],
    ['카카오뱅크', '1020 **** 82213'],
    ['SK페이', '9410 61** **** 3323'],
  ]);
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
        <div className="payment-card-config">
          <button>설정</button>
        </div>
        <div className="slide-container">
          <ul>
            {cardInfoArray.current?.map((data: string[], index: number) => (
              <li key={index}>
                <div>
                  <div>
                    <p>{data[0]}</p>
                    <p>{data[1]}</p>
                  </div>
                </div>
              </li>
            ))}

            {/* <li>
              <div>
                <button>카드 등록</button>
              </div>
            </li> */}
          </ul>
          <button onClick={onClickNext}></button>
          <button onClick={onClickPrev}></button>
        </div>
      </div>
    </PaymentSliderContainer>
  );
};

export default React.memo(PaymentSlider);
