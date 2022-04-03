import React, { useCallback, useState } from 'react';
import { MainEventSliderContainer } from './style';

const MainEventSlider = () => {
  const slideImgCount = 7;
  const slideImgRatio = 100 / slideImgCount;
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [slidePosition, setSlidePosition] = useState(-20);
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
        setPaginationIndex(1);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio);
        setPaginationIndex(curPage * -1);
      }
    } else if (savePosValue < -3) {
      if (slidePosition - slideImgRatio < -80) {
        setSlidePosition(-80);
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
    console.log(Number(e.target.id.substr(-1)));
  }, []);

  return (
    <MainEventSliderContainer PaginationIndex={paginationIndex}>
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

      <div className="pagination">
        <label htmlFor="event-slide-radio-1"></label>
        <label htmlFor="event-slide-radio-2"></label>
        <label htmlFor="event-slide-radio-3"></label>
        <label htmlFor="event-slide-radio-4"></label>
        <label htmlFor="event-slide-radio-5"></label>
        <label htmlFor="event-slide-radio-6"></label>
        <label htmlFor="event-slide-radio-7"></label>
      </div>
      <div className="event-slide-wrapper">
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_1.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_2.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_3.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_4.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_5.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_6.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_7.png"></img>
        </div>
        <div className="slide-img-wrapper">
          <img src="/img/main-event-slideImg/event_8.png"></img>
        </div>
      </div>
    </MainEventSliderContainer>
  );
};

export default MainEventSlider;
