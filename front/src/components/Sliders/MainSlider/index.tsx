import React, { useCallback, useEffect, useState } from 'react';
import { SlideWrapper } from './style';
import { asleep } from '@utils/utils1';

const MainSlider = () => {
  const slideImgCount = 7;
  const slideImgRatio = 100 / slideImgCount;
  const [slidePosition, setSlidePosition] = useState(-slideImgRatio);
  const [isSlide, setIsSlide] = useState(false);
  const [slideStartX, setSlideStartX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [savePosValue, setSavePosValue] = useState(0);

  const onClickPrev = useCallback(async () => {
    if (slidePosition + slideImgRatio >= -5) {
      setSlidePosition(
        (Math.floor(slidePosition / slideImgCount / 2) + 2) * slideImgRatio,
      );
      await asleep(500, '성공');
      setIsTransition(false);
      setSlidePosition(-(slideImgRatio * 5));
      await asleep(100, '성공');
      setIsTransition(true);
    } else
      setSlidePosition(
        (Math.floor(slidePosition / slideImgCount / 2) + 2) * slideImgRatio,
      );
  }, [slidePosition]);

  const autoSlideFunc = useCallback(async () => {
    if (isMouseEnter) return;
    if (slidePosition - slideImgRatio < -80) {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
      await asleep(500, '성공');
      setIsTransition(false);
      setSlidePosition(-slideImgRatio);
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
    }
  }, [slidePosition, isMouseEnter]);

  const onClickNext = useCallback(async () => {
    if (slidePosition - slideImgRatio < -80) {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
      await asleep(500, '성공');
      setIsTransition(false);
      setSlidePosition(-slideImgRatio);
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
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
          ((slideStartX - e.clientX) / window.innerWidth) * -slideImgRatio +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.clientX) / window.innerWidth) * -slideImgRatio,
        );
      }
    },
    [slidePosition, isSlide, savePosValue, isMouseEnter],
  );

  const onMouseUpSlide = useCallback(async () => {
    setIsSlide(false);
    setIsTransition(true);
    const curPage = Math.floor(slidePosition / slideImgCount / 2);

    if (savePosValue > 2) {
      if (slidePosition + slideImgRatio >= -5) {
        setSlidePosition((curPage + 1) * slideImgRatio);
        await asleep(500, '성공');
        setIsTransition(false);
        setSlidePosition(-(slideImgRatio * 5));
        await asleep(100, '성공');
        setIsTransition(true);
      } else setSlidePosition((curPage + 1) * slideImgRatio);
    } else if (savePosValue < -2) {
      if (slidePosition - slideImgRatio < -80) {
        setSlidePosition(curPage * slideImgRatio);
        await asleep(500, '성공');
        setIsTransition(false);
        setSlidePosition(-slideImgRatio);
        await asleep(100, '성공');
      } else setSlidePosition(curPage * slideImgRatio);
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
        const curPage = Math.floor(slidePosition / slideImgCount / 2);

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
    <div className="relative w-[700%] h-[50vw]">
      <button
        onClick={onClickPrev}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute z-10 top-[45%] translate-y-[-50%] translate-x-[-50%] left-[1%] bg-no-repeat w-[45px] h-[45px] bg-[url('~@../../../public/img/sliderbtn.png')]"
      />
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
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.webp')]"></div>
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%]  bg-[url('~@../../../public/img/page1.webp')]"></div>
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page2.webp')]"></div>
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page3.webp')]"></div>
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.jpg')]"></div>
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.webp')]"></div>
        <div className="w-full bg-no-repeat bg-contain bg-[length:100%_100%]  bg-[url('~@../../../public/img/page1.webp')]"></div>
      </SlideWrapper>
      <button
        onClick={onClickNext}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        className="absolute top-[45%] translate-y-[-50%] translate-x-[-50%] left-[13.2%] bg-no-repeat w-[45px] h-[45px] bg-right bg-[url('~@../../../public/img/sliderbtn.png')]"
      />
    </div>
  );
};

export default MainSlider;
