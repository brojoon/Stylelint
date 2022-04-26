import { useIsTablet } from '@utils/Hooks';
import React, { useCallback, useRef, useState } from 'react';
import { PaymentSliderContainer } from './style';

const MobilePaymentSlider = () => {
  const slideImgCount = useRef(5);
  const slideImgRatio = useRef(100 / slideImgCount.current);
  const cardInfoArray = useRef([
    ['신한카드', '9410 61** **** 3323'],
    ['토스', '4402 61** **** 3323'],
    ['우리은행', '1002 *** 242312'],
    ['카카오뱅크', '1020 **** 82213'],
    ['SK페이', '9410 61** **** 3323'],
  ]);
  const [slidePosition, setSlidePosition] = useState(-20);
  const [slideIndex, setSlideIndex] = useState(2);
  const [isSlide, setIsSlide] = useState(false);
  const [slideStartX, setSlideStartX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [savePosValue, setSavePosValue] = useState(0);
  const isTablet = useIsTablet();

  const OnMouseDownSlide = useCallback((e) => {
    setIsTransition(false);
    setSlideStartX(e.clientX);
    setIsSlide(true);
  }, []);

  const onMouseMoveSlide = useCallback(
    (e) => {
      if (isSlide) {
        setSlidePosition(
          ((slideStartX - e.clientX) / window.innerWidth) *
            -slideImgRatio.current +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.clientX) / window.innerWidth) *
            -slideImgRatio.current,
        );
      }
    },
    [slidePosition, isSlide, savePosValue],
  );

  const onMouseUpSlide = useCallback(async () => {
    setIsSlide(false);
    setIsTransition(true);
    const curPage = Math.floor(slidePosition / slideImgRatio.current);
    if (savePosValue > 3) {
      if (slidePosition + slideImgRatio.current >= -5) {
        setSlidePosition(0);
        setSlideIndex(1);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio.current);
        setSlideIndex(curPage * -1);
      }
    } else if (savePosValue < -3) {
      if (slidePosition - slideImgRatio.current < -80) {
        setSlidePosition(-80);
        setSlideIndex(slideImgCount.current);
      } else {
        setSlidePosition(curPage * slideImgRatio.current);
        setSlideIndex((curPage - 1) * -1);
      }
    } else {
      savePosValue <= 0
        ? setSlidePosition((curPage + 1) * slideImgRatio.current)
        : setSlidePosition(curPage * slideImgRatio.current);
    }
    setSavePosValue(0);
  }, [savePosValue, slidePosition]);

  const onTouchDownSlide = useCallback((e) => {
    setIsTransition(false);
    setSlideStartX(e.changedTouches[0].clientX);
    setIsSlide(true);
  }, []);

  const onTouchMoveSlide = useCallback(
    (e) => {
      if (isSlide) {
        setSlidePosition(
          ((slideStartX - e.changedTouches[0].clientX) / window.innerWidth) *
            -slideImgRatio.current +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.changedTouches[0].clientX) / window.innerWidth) *
            -slideImgRatio.current,
        );
      }
    },
    [slidePosition, isSlide, savePosValue],
  );

  const onTouchUpSlide = useCallback(() => {
    onMouseUpSlide();
  }, [onMouseUpSlide]);

  return (
    <PaymentSliderContainer
      SlideIndex={slideIndex}
      posX={`${slidePosition}`}
      IsTransition={isTransition}
    >
      <div>
        {/* <div>
          <h3>결제수단</h3>
        </div> */}
        <div className="pagenation-wrapper">
          <span>{slideIndex + ' / ' + slideImgCount.current}</span>
        </div>
        <div className="slide-container">
          <div
            onMouseMove={onMouseMoveSlide}
            onMouseUp={onMouseUpSlide}
            onMouseDown={OnMouseDownSlide}
            onTouchStart={onTouchDownSlide}
            onTouchMove={onTouchMoveSlide}
            onTouchEnd={onTouchUpSlide}
          >
            {cardInfoArray.current?.map((data: string[], index: number) => (
              <div key={index}>
                <div className={`card-text text${index + 1}`}>
                  <p>{data[0]}</p>
                  <p>{data[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PaymentSliderContainer>
  );
};

export default React.memo(MobilePaymentSlider);
