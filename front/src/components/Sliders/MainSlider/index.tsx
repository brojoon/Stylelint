import React, { useCallback, useEffect, useState } from 'react';
import { SlideContainer, SlideWrapper } from './style';
import { asleep } from '@utils/utils/asleep';
import { useIsMobile } from '@utils/Hooks';

const MainSlider = () => {
  const slideImgCount = 7;
  const slideImgRatio = 100 / slideImgCount;
  const [slidePosition, setSlidePosition] = useState(-slideImgRatio);
  const [isSlide, setIsSlide] = useState(false);
  const [slideStartX, setSlideStartX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [savePosValue, setSavePosValue] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(1);

  const isMobile = useIsMobile();

  const onChangePaginationIndex = useCallback((e) => {
    setPaginationIndex(Number(e.target.id.substr(-1)));
    setSlidePosition(Number(e.target.id.substr(-1)) * -1 * slideImgRatio);
  }, []);

  const onClickPrev = useCallback(async () => {
    if (slidePosition + slideImgRatio >= -5) {
      setSlidePosition(
        (Math.floor(slidePosition / slideImgCount / 2) + 2) * slideImgRatio,
      );
      setPaginationIndex(5);
      await asleep(1000, '성공');
      setIsTransition(false);
      setSlidePosition(-(slideImgRatio * 5));
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        (Math.floor(slidePosition / slideImgCount / 2) + 2) * slideImgRatio,
      );
      setPaginationIndex(
        Math.floor((slidePosition / slideImgCount / 2) * -1 - 1),
      );
    }
    console.log(slidePosition / slideImgCount / 2);
  }, [slidePosition]);

  const autoSlideFunc = useCallback(async () => {
    if (isMouseEnter) return;
    if (slidePosition - slideImgRatio < -80) {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
      setPaginationIndex(1);
      await asleep(1000, '성공');
      setIsTransition(false);
      setSlidePosition(-slideImgRatio);
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
      setPaginationIndex(
        Math.floor((slidePosition / slideImgCount / 2) * -1 + 1),
      );
    }
  }, [slidePosition, isMouseEnter]);

  const onClickNext = useCallback(async () => {
    if (slidePosition - slideImgRatio < -80) {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
      setPaginationIndex(1);
      await asleep(1000, '성공');
      setIsTransition(false);
      setSlidePosition(-slideImgRatio);
      await asleep(100, '성공');
      setIsTransition(true);
    } else {
      setSlidePosition(
        Math.floor(slidePosition / slideImgCount / 2) * slideImgRatio,
      );
      setPaginationIndex(
        Math.floor((slidePosition / slideImgCount / 2) * -1 + 1),
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
        setPaginationIndex(5);
        await asleep(1000, '성공');
        setIsTransition(false);
        setSlidePosition(-(slideImgRatio * 5));
        await asleep(100, '성공');
        setIsTransition(true);
      } else {
        setSlidePosition((curPage + 1) * slideImgRatio);
        setPaginationIndex(
          Math.floor((slidePosition / slideImgCount / 2) * -1),
        );
      }
    } else if (savePosValue < -2) {
      if (slidePosition - slideImgRatio < -80) {
        setSlidePosition(curPage * slideImgRatio);
        setPaginationIndex(1);
        await asleep(1000, '성공');
        setIsTransition(false);
        setSlidePosition(-slideImgRatio);
        await asleep(100, '성공');
      } else {
        setSlidePosition(curPage * slideImgRatio);
        setPaginationIndex(
          Math.floor((slidePosition / slideImgCount / 2) * -1 + 1),
        );
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
    <SlideContainer className="relative w-[700%] h-[40vw]">
      <input
        type="radio"
        name="slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="slide-radio-1"
        checked={paginationIndex == 1 ? true : false}
      />
      <input
        type="radio"
        name="slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="slide-radio-2"
        checked={paginationIndex == 2 ? true : false}
      />
      <input
        type="radio"
        name="slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="slide-radio-3"
        checked={paginationIndex == 3 ? true : false}
      />
      <input
        type="radio"
        name="slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="slide-radio-4"
        checked={paginationIndex == 4 ? true : false}
      />
      <input
        type="radio"
        name="slide-radios"
        className="slide-radio"
        onChange={onChangePaginationIndex}
        id="slide-radio-5"
        checked={paginationIndex == 5 ? true : false}
      />
      <div className="pagination">
        <label htmlFor="slide-radio-1"></label>
        <label htmlFor="slide-radio-2"></label>
        <label htmlFor="slide-radio-3"></label>
        <label htmlFor="slide-radio-4"></label>
        <label htmlFor="slide-radio-5"></label>
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
        <div className="w-full relative  bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.webp')]">
          <div className="slide-img-text"></div>
        </div>
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%]  bg-[url('~@../../../public/img/page1.webp')]">
          <div
            className={`slide-img-text ${
              Math.floor(slidePosition / 7 / 2) == -2 ? 'active' : ''
            }`}
          >
            <p>가볍고 트렌디한</p>
            <p>언발런스 코튼 셔츠</p>
          </div>
        </div>
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page2.webp')]">
          <div
            className={`slide-img-text ${
              Math.floor(slidePosition / 7 / 2) == -3 ? 'active' : ''
            }`}
          >
            <p>산뜻하게 즐기는</p>
            <p>봄 스타일링 </p>
          </div>
        </div>
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page3.webp')]">
          <div
            className={`slide-img-text ${
              Math.floor(slidePosition / 7 / 2) == -4 ? 'active' : ''
            }`}
          >
            <p>숨어있던 라인을 찾다</p>
            <p>오픈 카라 블라우스</p>
          </div>
        </div>
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page5.webp')]">
          <div
            className={`slide-img-text ${
              Math.floor(slidePosition / 7 / 2) == -5 ? 'active' : ''
            }`}
          >
            <p>자연스러움을 지향하는</p>
            <p>데일리 감성 룩</p>
          </div>
        </div>
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%] bg-[url('~@../../../public/img/page4.webp')]">
          <div
            className={`slide-img-text ${
              Math.floor(slidePosition / 7 / 2) == -6 ? 'active' : ''
            }`}
          >
            <p>다채로운 코디룩</p>
            <p>7컬러 루즈핏</p>
          </div>
        </div>
        <div className="w-full relative bg-no-repeat bg-contain bg-[length:100%_100%]  bg-[url('~@../../../public/img/page1.webp')]">
          <div className={`slide-img-text`}></div>
        </div>
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

export default MainSlider;
