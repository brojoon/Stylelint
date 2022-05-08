import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SlideContainer, SlideWrapper } from './style';
import { asleep } from '@utils/utils/asleep';
import { useIsMobile } from '@utils/Hooks';

const MainSlider = () => {
  const slideImgCount = useRef(7);
  const slideImgRatio = useRef(100 / slideImgCount.current);
  const slidePageNationCount = useRef(5);
  const [slidePosition, setSlidePosition] = useState(-slideImgRatio.current);
  const [isSlide, setIsSlide] = useState(false);
  const [slideStartX, setSlideStartX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [savePosValue, setSavePosValue] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(1);

  const isMobile = useIsMobile();

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
    setSlidePosition(
      Number(e.target.id.substr(-1)) * -1 * slideImgRatio.current,
    );
  }, []);

  const onClickPrev = useCallback(async () => {
    if (slidePosition + slideImgRatio.current >= -5) {
      setSlidePosition(
        (Math.floor(slidePosition / slideImgCount.current / 2) + 2) *
          slideImgRatio.current,
      );
      setPaginationIndex(5);
      await asleep(1000, '성공');
      setIsTransition(false);
      setSlidePosition(-(slideImgRatio.current * 5));
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        (Math.floor(slidePosition / slideImgCount.current / 2) + 2) *
          slideImgRatio.current,
      );
      setPaginationIndex(
        Math.floor((slidePosition / slideImgCount.current / 2) * -1 - 1),
      );
    }
  }, [slidePosition]);

  const autoSlideFunc = useCallback(async () => {
    if (isMouseEnter) return;
    if (slidePosition - slideImgRatio.current < -80) {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount.current / 2) *
          slideImgRatio.current,
      );
      setPaginationIndex(1);
      await asleep(1000, '성공');
      setIsTransition(false);
      setSlidePosition(-slideImgRatio.current);
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount.current / 2) *
          slideImgRatio.current,
      );
      setPaginationIndex(
        Math.floor((slidePosition / slideImgCount.current / 2) * -1 + 1),
      );
    }
  }, [slidePosition, isMouseEnter]);

  const onClickNext = useCallback(async () => {
    if (slidePosition - slideImgRatio.current < -80) {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount.current / 2) *
          slideImgRatio.current,
      );
      setPaginationIndex(1);
      await asleep(1000, '성공');
      setIsTransition(false);
      setSlidePosition(-slideImgRatio.current);
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount.current / 2) *
          slideImgRatio.current,
      );
      setPaginationIndex(
        Math.floor((slidePosition / slideImgCount.current / 2) * -1 + 1),
      );
    }
  }, [slidePosition, isMouseEnter]);

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
    [slidePosition, isSlide, savePosValue, isMouseEnter],
  );

  const onMouseUpSlide = useCallback(async () => {
    setIsSlide(false);
    setIsTransition(true);
    const curPage = Math.floor(slidePosition / slideImgCount.current / 2);

    if (savePosValue > 2) {
      if (slidePosition + slideImgRatio.current >= -5) {
        setSlidePosition((curPage + 1) * slideImgRatio.current);
        setPaginationIndex(5);
        await asleep(1000, '성공');
        setIsTransition(false);
        setSlidePosition(-(slideImgRatio.current * 5));
        await asleep(100, '성공');
        setIsTransition(true);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio.current);
        setPaginationIndex(
          Math.floor((slidePosition / slideImgCount.current / 2) * -1),
        );
      }
    } else if (savePosValue < -2) {
      if (slidePosition - slideImgRatio.current < -80) {
        setSlidePosition(curPage * slideImgRatio.current);
        setPaginationIndex(1);
        await asleep(1000, '성공');
        setIsTransition(false);
        setSlidePosition(-slideImgRatio.current);
        await asleep(100, '성공');
      } else {
        setSlidePosition(curPage * slideImgRatio.current);
        setPaginationIndex(
          Math.floor((slidePosition / slideImgCount.current / 2) * -1 + 1),
        );
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
        const curPage = Math.floor(slidePosition / slideImgCount.current / 2);

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

  const onMouseEnter = useCallback(() => {
    setIsMouseEnter(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsMouseEnter(false);
    setIsTransition(true);
    setIsSlide(false);
    setSavePosValue(0);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(autoSlideFunc, 3000);

    return () => {
      clearInterval(slideTimer);
    };
  }, [autoSlideFunc]);

  return (
    <SlideContainer className="relative w-[700%] h-[40vw]">
      {[...new Array(slidePageNationCount.current)].map((data, index) => (
        <input
          key={index}
          onChange={onChangePaginationIndex}
          type="radio"
          name="slide-radios"
          className="slide-radio"
          id={`slide-radio-${index + 1}`}
          checked={paginationIndex == index + 1 ? true : false}
        />
      ))}

      <div className="pagination">
        {[...new Array(slidePageNationCount.current)].map((data, index) => (
          <label key={index} htmlFor={`slide-radio-${index + 1}`}></label>
        ))}
      </div>
      {!isMobile && (
        <button
          onClick={onClickPrev}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute z-10 top-[45%] translate-y-[-50%] translate-x-[-50%] left-[1%] bg-no-repeat w-[45px] h-[45px] bg-[url('~@../../../public/img/sliderbtn.png')]"
        />
      )}
      <SlideWrapper
        onMouseDown={OnMouseDownSlide}
        onMouseMove={onMouseMoveSlide}
        onMouseUp={onMouseUpSlide}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchDownSlide}
        onTouchMove={onTouchMoveSlide}
        onTouchEnd={onTouchUpSlide}
        posX={`${slidePosition}`}
        IsTransition={isTransition}
      >
        <div className="w-full relative  bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page5.webp')]"></div>
        {[...new Array(slidePageNationCount.current)].map((data, index) => (
          <div
            key={index}
            className={`w-full relative bg-no-repeat bg-contain bg-[length:100%_100%]  slide-img-bg-${
              index + 1
            }`}
          ></div>
        ))}
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%]  bg-[url('~@../../../public/img/page1.webp')]"></div>
      </SlideWrapper>
      {!isMobile && (
        <button
          onClick={onClickNext}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          className="absolute top-[45%] translate-y-[-50%] translate-x-[-50%] left-[13.2%] bg-no-repeat w-[45px] h-[45px] bg-right bg-[url('~@../../../public/img/sliderbtn.png')]"
        />
      )}
    </SlideContainer>
  );
};

export default React.memo(MainSlider);
