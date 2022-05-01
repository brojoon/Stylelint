import ProductCard from '@components/ProductCard';
import React, { useCallback, useState, VFC } from 'react';
import { ProductCardSlideWrapper } from './style';
import { IProducts } from '@typings/db';
import ModalBasket from '@components/Modals/ModalBasket';
import { useIsMobile } from '@utils/Hooks';

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
  const isMobile = useIsMobile();

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
      setSlidePosition(0);
    } else if (
      // 228
      window.innerWidth > 1300 &&
      slidePosition + savePosValue * timeCompenstaion < -228
    ) {
      setSlidePosition(-228);
    } else if (
      // 228
      window.innerWidth <= 480 &&
      slidePosition + savePosValue * timeCompenstaion <
        -328 + window.innerWidth / 9
    ) {
      setSlidePosition(-328 + window.innerWidth / 9);
    } else if (
      // 228
      window.innerWidth <= 1300 &&
      slidePosition + savePosValue * timeCompenstaion <
        -328 + window.innerWidth / 13
    ) {
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
            [...new Array(3)].map((data, index) => {
              return products.map((product, index2) => {
                return (
                  <ProductCard
                    key={product.code}
                    data={product}
                    setIsModalBasket={setIsModalBasket}
                    visibility={
                      slidePosition + 20 * (index * 5 + index2) + 30 < 115 &&
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
