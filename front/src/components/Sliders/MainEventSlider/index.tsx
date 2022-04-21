import React, { useCallback, useState } from 'react';
import { MainEventSliderContainer } from './style';

const MainEventSlider = () => {
  const imgCount = 7;
  const [paginationIndex, setPaginationIndex] = useState(1);

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
  }, []);

  return (
    <MainEventSliderContainer
      onChange={onChangePaginationIndex}
      PaginationIndex={paginationIndex}
    >
      {[...new Array(imgCount)].map((data, index) => (
        <input
          type="radio"
          name="event-slide-radios"
          className="slide-radio"
          id={`event-slide-radio-${index + 1}`}
          checked={paginationIndex == index + 1 ? true : false}
        />
      ))}

      <div className="pagination">
        {[...new Array(imgCount)].map((data, index) => (
          <label htmlFor={`event-slide-radio-${index + 1}`}></label>
        ))}
      </div>
      <div className="event-slide-wrapper">
        {[...new Array(imgCount + 1)].map((data, index) => (
          <div className="slide-img-wrapper">
            <img src={`/img/main-event-slideImg/event_${index + 1}.png`}></img>
          </div>
        ))}
      </div>
    </MainEventSliderContainer>
  );
};

export default MainEventSlider;
