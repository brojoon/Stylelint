import fetcher from '@utils/utils/fetcher';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductDetailSlide, ProductDetailSubSlide } from './style';
import { useRouter } from 'next/router';
import { baseApiUrl } from '@utils/utils/const';
import { IProductsWithSubImg } from '@typings/db';

const ProductDetailSlider = () => {
  const [productSlideIndex, setProductSlideIndex] = useState(2);
  const [productSubSlidePosX, setProductSubSlidePosX] = useState('0');
  const router = useRouter();
  const { type, code } = router.query;

  const { data, isLoading, error } = useQuery('productDetailInfo', () =>
    fetcher(`api/product/${code}`),
  );

  console.log('data', data);

  const onClickProductSlideLeft = useCallback(() => {
    setProductSlideIndex((prev) => {
      if (prev == 2) {
        setProductSlideIndex(9);
        setProductSubSlidePosX('-37.5');
      } else if (prev == 5) {
        setProductSlideIndex(4);
        setProductSubSlidePosX('0');
      }
      return prev <= 2 ? 9 : prev - 1;
    });
  }, []);
  const onClickProductSlideRight = useCallback(() => {
    setProductSlideIndex((prev) => {
      if (prev == 6) {
        setProductSlideIndex(7);
        setProductSubSlidePosX('-37.5');
      } else if (prev == 9) {
        setProductSlideIndex(2);
        setProductSubSlidePosX('0');
      }
      return prev >= 9 ? 2 : prev + 1;
    });
  }, []);

  const onClickSubSlideLeftBtn = useCallback(() => {
    setProductSubSlidePosX('0');
  }, []);

  const onClickSubSlideRightBtn = useCallback(() => {
    setProductSubSlidePosX('-37.5');
  }, []);

  const onClickSubSlideImg = (e: any) => {
    setProductSlideIndex(+e.target.dataset.index);
    console.log(e.target.dataset);
  };
  return (
    <>
      <ProductDetailSlide>
        {data && (
          <img
            src={`${
              baseApiUrl + data.productSubImg[productSlideIndex - 2]?.subimage
            }`}
          />
        )}

        <div>
          <img
            onClick={onClickProductSlideLeft}
            src="/img/product_slide_left.png"
          />
          <img
            onClick={onClickProductSlideRight}
            src="/img/product_slide_right.png"
          />
        </div>
      </ProductDetailSlide>
      <ProductDetailSubSlide
        ProductSubSlidePosX={productSubSlidePosX}
        ProductSlideIndex={productSlideIndex}
      >
        <div className="sub-slide-container">
          <div className="sub-slide-wrapper">
            <button
              className="product-sub-slide-left"
              onClick={onClickSubSlideLeftBtn}
            ></button>
            <div className="sub-slide-img-container">
              <div className="sub-slide-img-wrapper">
                {data &&
                  data?.productSubImg?.map((subImg: any, index: number) => {
                    if (index > 7) return;
                    return (
                      <div>
                        <img
                          onClick={onClickSubSlideImg}
                          data-index={`${index + 2}`}
                          src={`${baseApiUrl + subImg.subimage}`}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <button
              className="product-sub-slide-right"
              onClick={onClickSubSlideRightBtn}
            ></button>
          </div>
        </div>
      </ProductDetailSubSlide>
    </>
  );
};

export default ProductDetailSlider;
