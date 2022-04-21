import React, { useCallback, useRef, useState } from 'react';
import { MainEventSliderContainer } from './style';

const MainEventSlider = () => {
  const imgCountRef = useRef(7);
  const [paginationIndex, setPaginationIndex] = useState(1);

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
  }, []);

  return (
    <MainEventSliderContainer PaginationIndex={paginationIndex}>
      {[...new Array(imgCountRef.current)].map((data, index) => (
        <input
          key={index}
          type="radio"
          name="event-slide-radios"
          className="slide-radio"
          id={`event-slide-radio-${index + 1}`}
          onChange={onChangePaginationIndex}
          checked={paginationIndex == index + 1 ? true : false}
        />
      ))}

      <div className="pagination">
        {[...new Array(imgCountRef.current)].map((data, index) => (
          <label key={index} htmlFor={`event-slide-radio-${index + 1}`}></label>
        ))}
      </div>
      <div className="event-slide-wrapper">
        {[...new Array(imgCountRef.current + 1)].map((data, index) => (
          <div key={index} className="slide-img-wrapper">
            <img src={`/img/main-event-slideImg/event_${index + 1}.png`}></img>
          </div>
        ))}
      </div>
    </MainEventSliderContainer>
  );
};

export default MainEventSlider;
