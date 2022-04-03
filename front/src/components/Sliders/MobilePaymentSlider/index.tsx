import { useIsTablet } from '@utils/Hooks';
import { asleep } from '@utils/utils/asleep';
import React, { useCallback, useState } from 'react';
import { PaymentSliderContainer } from './style';

const MobilePaymentSlider = () => {
  const isTablet = useIsTablet();
  const slideImgCount = 5;
  const slideImgRatio = 100 / slideImgCount;
  const [slidePosition, setSlidePosition] = useState(-20);
  const [slideIndex, setSlideIndex] = useState(2);
  const [isSlide, setIsSlide] = useState(false);
  const [slideStartX, setSlideStartX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [savePosValue, setSavePosValue] = useState(0);

  const OnMouseDownSlide = useCallback((e) => {
    setIsTransition(false);
    setSlideStartX(e.clientX);
    setIsSlide(true);
  }, []);

  const onMouseMoveSlide = useCallback(
    (e) => {
      if (isSlide) {
        setSlidePosition(
          ((slideStartX - e.clientX) / window.innerWidth) * -slideImgRatio +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.clientX) / window.innerWidth) * -slideImgRatio,
        );
      }
    },
    [slidePosition, isSlide, savePosValue],
  );

  const onMouseUpSlide = useCallback(async () => {
    setIsSlide(false);
    setIsTransition(true);
    const curPage = Math.floor(slidePosition / slideImgRatio);
    console.log('curPage: ', curPage);
    console.log('slidePosition:', slidePosition);
    if (savePosValue > 3) {
      if (slidePosition + slideImgRatio >= -5) {
        setSlidePosition(0);
        setSlideIndex(1);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio);
        setSlideIndex(curPage * -1);
      }
    } else if (savePosValue < -3) {
      if (slidePosition - slideImgRatio < -80) {
        setSlidePosition(-80);
        setSlideIndex(slideImgCount);
      } else {
        setSlidePosition(curPage * slideImgRatio);
        setSlideIndex((curPage - 1) * -1);
      }
    } else {
      savePosValue <= 0
        ? setSlidePosition((curPage + 1) * slideImgRatio)
        : setSlidePosition(curPage * slideImgRatio);
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
            -slideImgRatio +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.changedTouches[0].clientX) / window.innerWidth) *
            -slideImgRatio,
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
          <span>{slideIndex + ' / ' + slideImgCount}</span>
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
            <div>
              <div className="card-text text1">
                <p>신한카드</p>
                <p>9410 61** **** 3323</p>
              </div>
            </div>
            <div>
              <div className="card-text text2">
                <p>토스</p>
                <p>4402 61** **** 3323</p>
              </div>
            </div>

            <div>
              <div className="card-text text3">
                <p>우리은행</p>
                <p>1002***242312</p>
              </div>
            </div>

            <div>
              <div className="card-text text4">
                <p>카카오뱅크</p>
                <p>1020****82213</p>
              </div>
            </div>
            <div>
              <div className="card-text text5">
                <p>SK페이</p>
                <p>9410 61** **** 3323</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PaymentSliderContainer>
  );
};

export default MobilePaymentSlider;
