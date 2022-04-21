import React, { useCallback, useRef, useState } from 'react';
import { MainEventSliderContainer } from './style';

const MobileMainEventSlider = () => {
  const slideImgCount = useRef(8);
  const slideImgRatio = useRef(100 / slideImgCount.current);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [slidePosition, setSlidePosition] = useState(0);
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
    if (savePosValue > 2) {
      if (slidePosition + slideImgRatio.current >= -5) {
        setSlidePosition(0);
        setPaginationIndex(1);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio.current);
        setPaginationIndex(curPage * -1);
      }
    } else if (savePosValue < -2) {
      if (slidePosition - slideImgRatio.current < -87.5) {
        setSlidePosition(-87.5);
        setPaginationIndex(slideImgCount.current);
      } else {
        setSlidePosition(curPage * slideImgRatio.current);
        setPaginationIndex((curPage - 1) * -1);
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

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
    setSlidePosition(
      (Number(e.target.id.substr(-1)) - 1) * -slideImgRatio.current,
    );
  }, []);

  return (
    <MainEventSliderContainer
      PaginationIndex={paginationIndex}
      SlideIndex={paginationIndex}
      posX={`${slidePosition}`}
      IsTransition={isTransition}
    >
      {[...new Array(slideImgCount.current)].map((data, index) => (
        <input
          key={index}
          onChange={onChangePaginationIndex}
          type="radio"
          name="event-slide-radios"
          className="slide-radio"
          id={`event-slide-radio-${index + 1}`}
          checked={paginationIndex == index + 1 ? true : false}
        />
      ))}

      <div className="pagination">
        {[...new Array(slideImgCount.current)].map((data, index) => (
          <label key={index} htmlFor={`event-slide-radio-${index + 1}`}></label>
        ))}
      </div>
      <div
        className="event-slide-wrapper"
        onMouseMove={onMouseMoveSlide}
        onMouseUp={onMouseUpSlide}
        onMouseDown={OnMouseDownSlide}
        onTouchStart={onTouchDownSlide}
        onTouchMove={onTouchMoveSlide}
        onTouchEnd={onTouchUpSlide}
      >
        {[...new Array(slideImgCount.current)].map((data, index) => (
          <div key={index} className={`slide-img-wrapper${index + 1}`}></div>
        ))}
      </div>
    </MainEventSliderContainer>
  );
};

export default MobileMainEventSlider;
