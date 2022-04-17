import React, { useCallback, useState } from 'react';
import { MainEventSliderContainer } from './style';

const MainEventSlider = () => {
  const [paginationIndex, setPaginationIndex] = useState(1);
  // const [isTransition, setIsTransition] = useState(true);
  // const [isSlide, setIsSlide] = useState(false);
  // const [slideStartX, setSlideStartX] = useState(0);
  // const [savePosValue, setSavePosValue] = useState(0);

  // const OnMouseDownSlide = useCallback((e) => {
  //   setIsTransition(false);
  //   setSlideStartX(e.clientX);
  //   setIsSlide(true);
  // }, []);

  // const onMouseMoveSlide = useCallback(
  //   (e) => {
  //     if (isSlide) {
  //       setPaginationIndex(
  //         ((slideStartX - e.clientX) / window.innerWidth) * paginationIndex -
  //           savePosValue,
  //       );
  //       setSavePosValue((slideStartX - e.clientX) / window.innerWidth);
  //     }
  //   },
  //   [paginationIndex, isSlide, savePosValue],
  // );

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
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
