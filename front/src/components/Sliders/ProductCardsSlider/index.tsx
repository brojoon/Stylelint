import ProductCard from '@components/ProductCard';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { ProductCardSlideWrapper } from './style';
import { IProducts } from '@typings/db';
import ModalBasket from '@components/Modals/ModalBasket';
import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';

interface Props {
  products: IProducts[];
}

const ProductsCardSlider: VFC<Props> = ({ products }) => {
  const ProductCards = 100;
  const [slidePosition, setSlidePosition] = useState(0);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isSlide, setIsSlide] = useState(false);
  const [isTransition, setIsTransition] = useState(true);
  const [savePosValue, setSavePosValue] = useState(0);
  const [slideStartX, setSlideStartX] = useState(0);
  const [slideClickedTime, setSlideClickedTime] = useState<Date>();
  const [isModalBasket, setIsModalBasket] = useState(false);
  const [productCardRepeatCount, setProductCardRepeatCount] = useState(0);
  const [slideViewRightMax, setSlideViewRightMax] = useState(0);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isTablet1024 = useIsTablet1024();
  useEffect(() => {
    if (isMobile) {
      //70
      setSlideViewRightMax(window.innerWidth / 8 + 16);
    } else if (isTablet) {
      setSlideViewRightMax(window.innerWidth / 11 + 14);
    } else if (isTablet1024) {
      setSlideViewRightMax(window.innerWidth / 13 + 12);
    } else {
      setSlideViewRightMax(115);
    }
  }, [isMobile, isTablet, isTablet1024]);
  useEffect(() => {
    if (isMobile) setProductCardRepeatCount(1);
    else if (isTablet) setProductCardRepeatCount(2);
    else setProductCardRepeatCount(3);
    setSlidePosition(0);
  }, [isMobile, isTablet]);

  const onMouseDownSlide = useCallback((e) => {
    setSlideClickedTime(new Date());
    setIsTransition(false);
    setSlideStartX(e.clientX);
    setIsSlide(true);
  }, []);

  const onMouseMoveSlide = useCallback(
    (e) => {
      if (isSlide) {
        setSlidePosition(
          ((slideStartX - e.clientX) / window.innerWidth) * -ProductCards +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.clientX) / window.innerWidth) * -ProductCards,
        );
      }
    },
    [slidePosition, isSlide, savePosValue],
  );

  const onMouseUpSlide = useCallback(async () => {
    if (!isSlide) return;
    setIsSlide(false);
    setIsTransition(true);
    let timeCompenstaion = 0;

    if (slideClickedTime) {
      timeCompenstaion = +new Date() - +slideClickedTime;
    }

    if (timeCompenstaion && timeCompenstaion > 500) timeCompenstaion = 0;
    if (timeCompenstaion) timeCompenstaion = (500 - timeCompenstaion) / 60;

    if (slidePosition + savePosValue * timeCompenstaion > 0) {
      // 왼쪽 범위 넘어갔을떄
      setSlidePosition(0);
    } else if (
      window.innerWidth > 1300 &&
      slidePosition + savePosValue * timeCompenstaion < -228
    ) {
      // PC
      setSlidePosition(-228);
    } else if (
      isMobile &&
      slidePosition + savePosValue * timeCompenstaion <
        -115 + window.innerWidth / 8
    ) {
      // 모바일
      setSlidePosition(-115 + window.innerWidth / 8);
    } else if (
      isTablet &&
      slidePosition + savePosValue * timeCompenstaion <
        -219 + window.innerWidth / 13
    ) {
      // 테블릿
      setSlidePosition(-219 + window.innerWidth / 13);
    } else if (
      window.innerWidth <= 1300 &&
      slidePosition + savePosValue * timeCompenstaion <
        -328 + window.innerWidth / 13
    ) {
      // 태블릿 ~ PC 사이
      setSlidePosition(-328 + window.innerWidth / 13);
    } else if (savePosValue > 0) {
      setSlidePosition(slidePosition + savePosValue * timeCompenstaion);
    } else if (savePosValue < 0) {
      setSlidePosition(slidePosition + savePosValue * timeCompenstaion);
    }
    setSavePosValue(0);
  }, [savePosValue, slidePosition, slideClickedTime]);

  const onTouchDownSlide = useCallback((e) => {
    setIsTransition(false);
    setSlideStartX(e.changedTouches[0].clientX);
    setSlideClickedTime(new Date());
    setIsSlide(true);
  }, []);

  const onTouchMoveSlide = useCallback(
    (e) => {
      if (isSlide) {
        setSlidePosition(
          ((slideStartX - e.changedTouches[0].clientX) / window.innerWidth) *
            -ProductCards +
            slidePosition -
            savePosValue,
        );
        setSavePosValue(
          ((slideStartX - e.changedTouches[0].clientX) / window.innerWidth) *
            -ProductCards,
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

  return (
    <>
      {isModalBasket && <ModalBasket setIsModalBasket={setIsModalBasket} />}
      <ProductCardSlideWrapper
        onMouseDown={onMouseDownSlide}
        onMouseMove={onMouseMoveSlide}
        onMouseUp={onMouseUpSlide}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchDownSlide}
        onTouchMove={onTouchMoveSlide}
        onTouchEnd={onTouchUpSlide}
        PosX={`${slidePosition}`}
        IsTransition={isTransition}
        IsMobile={isMobile}
      >
        <div>
          {products &&
            [...new Array(productCardRepeatCount)].map((data, index) => {
              return products.map((product, index2) => {
                return (
                  <ProductCard
                    key={index + product.name + index2}
                    data={product}
                    setIsModalBasket={setIsModalBasket}
                    visibility={
                      slidePosition + 20 * (index * 5 + index2) + 30 <
                        slideViewRightMax &&
                      slidePosition + 20 * (index * 5 + index2) + 30 > 1
                        ? true
                        : false
                    }
                  />
                );
              });
            })}
        </div>
      </ProductCardSlideWrapper>
    </>
  );
};

export default ProductsCardSlider;
