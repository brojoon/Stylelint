import ProductCard from '@components/ProductCard';
import React, { useCallback, useState, VFC } from 'react';
import { ProductCardSlideWrapper } from './style';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import { IProducts } from '@typings/db';

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

  const OnMouseDownSlide = useCallback((e) => {
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
    } else if (slidePosition + savePosValue * timeCompenstaion < -228) {
      setSlidePosition(-228);
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
    <ProductCardSlideWrapper
      onMouseDown={OnMouseDownSlide}
      onMouseMove={onMouseMoveSlide}
      onMouseUp={onMouseUpSlide}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchDownSlide}
      onTouchMove={onTouchMoveSlide}
      onTouchEnd={onTouchUpSlide}
      PosX={`${slidePosition}`}
      IsTransition={isTransition}
    >
      {products &&
        products.map((product) => {
          return <ProductCard key={product.code} data={product} />;
        })}
      {products &&
        products.map((product) => {
          return <ProductCard key={product.code} data={product} />;
        })}
      {products &&
        products.map((product) => {
          return <ProductCard key={product.code} data={product} />;
        })}
    </ProductCardSlideWrapper>
  );
};

export default ProductsCardSlider;
