import React, { useCallback, useState } from 'react';
import { MainEventSliderContainer } from './style';

const MobileMainEventSlider = () => {
  const [paginationIndex, setPaginationIndex] = useState(1);
  const slideImgCount = 8;
  const slideImgRatio = 100 / slideImgCount;
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
    if (savePosValue > 2) {
      if (slidePosition + slideImgRatio >= -5) {
        setSlidePosition(0);
        setPaginationIndex(1);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio);
        setPaginationIndex(curPage * -1);
      }
    } else if (savePosValue < -2) {
      if (slidePosition - slideImgRatio < -87.5) {
        setSlidePosition(-87.5);
        setPaginationIndex(slideImgCount);
      } else {
        setSlidePosition(curPage * slideImgRatio);
        setPaginationIndex((curPage - 1) * -1);
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

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
    setSlidePosition((Number(e.target.id.substr(-1)) - 1) * -slideImgRatio);
    console.log(Number(e.target.id.substr(-1)));
  }, []);

  return (
    <MainEventSliderContainer
      PaginationIndex={paginationIndex}
      SlideIndex={paginationIndex}
      posX={`${slidePosition}`}
      IsTransition={isTransition}
    >
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-1"
        checked={paginationIndex == 1 ? true : false}
      />
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-2"
        checked={paginationIndex == 2 ? true : false}
      />
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-3"
        checked={paginationIndex == 3 ? true : false}
      />
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-4"
        checked={paginationIndex == 4 ? true : false}
      />
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-5"
        checked={paginationIndex == 5 ? true : false}
      />
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-6"
        checked={paginationIndex == 6 ? true : false}
      />
      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-7"
        checked={paginationIndex == 7 ? true : false}
      />

      <input
        type="radio"
        name="event-slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="event-slide-radio-8"
        checked={paginationIndex == 8 ? true : false}
      />

      <div className="pagination">
        <label htmlFor="event-slide-radio-1"></label>
        <label htmlFor="event-slide-radio-2"></label>
        <label htmlFor="event-slide-radio-3"></label>
        <label htmlFor="event-slide-radio-4"></label>
        <label htmlFor="event-slide-radio-5"></label>
        <label htmlFor="event-slide-radio-6"></label>
        <label htmlFor="event-slide-radio-7"></label>
        <label htmlFor="event-slide-radio-8"></label>
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
        <div className="slide-img-wrapper1"></div>
        <div className="slide-img-wrapper2"></div>
        <div className="slide-img-wrapper3"></div>
        <div className="slide-img-wrapper4"></div>
        <div className="slide-img-wrapper5"></div>
        <div className="slide-img-wrapper6"></div>
        <div className="slide-img-wrapper7"></div>
        <div className="slide-img-wrapper8"></div>
      </div>
    </MainEventSliderContainer>
  );
};

export default MobileMainEventSlider;
