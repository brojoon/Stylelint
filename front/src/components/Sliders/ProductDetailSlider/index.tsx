import fetcher from '@utils/utils/fetcher';
import React, { useCallback, useState, VFC } from 'react';
import { useQuery } from 'react-query';
import { ProductDetailSlide, ProductDetailSubSlide } from './style';
import { useRouter } from 'next/router';
import { baseApiUrl } from '@utils/utils/const';
import { IProductDetailInfo } from '@typings/db';

interface Props {
  ssrProductData: IProductDetailInfo;
}

const ProductDetailSlider: VFC<Props> = ({ ssrProductData }) => {
  const startSlideIndex = 2;
  const endSlideIndex = 9;
  const [productSlideIndex, setProductSlideIndex] = useState(startSlideIndex);
  const [productSubSlidePosX, setProductSubSlidePosX] = useState('0');
  const router = useRouter();
  const { type, code } = router.query;
  const { data, isLoading, error } = useQuery(
    'productDetailInfo',
    () => fetcher(`api/product/${code}`),
    {
      initialData: ssrProductData,
    },
  );
  const onClickProductSlideLeft = useCallback(() => {
    setProductSlideIndex((prev) => {
      if (prev == startSlideIndex) {
        setProductSlideIndex(endSlideIndex);
        setProductSubSlidePosX('-37.5');
      } else if (prev == 5) {
        setProductSlideIndex(4);
        setProductSubSlidePosX('0');
      }
      return prev <= startSlideIndex ? endSlideIndex : prev - 1;
    });
  }, [startSlideIndex, endSlideIndex]);
  const onClickProductSlideRight = useCallback(() => {
    setProductSlideIndex((prev) => {
      if (prev == 6) {
        setProductSlideIndex(7);
        setProductSubSlidePosX('-37.5');
      } else if (prev == endSlideIndex) {
        setProductSlideIndex(startSlideIndex);
        setProductSubSlidePosX('0');
      }
      return prev >= endSlideIndex ? startSlideIndex : prev + 1;
    });
  }, [startSlideIndex, endSlideIndex]);

  const onClickSubSlideLeftBtn = useCallback(() => {
    setProductSubSlidePosX('0');
  }, []);

  const onClickSubSlideRightBtn = useCallback(() => {
    setProductSubSlidePosX('-37.5');
  }, []);

  const onClickSubSlideImg = (e: any) => {
    setProductSlideIndex(+e.target.dataset.index);
  };
  return (
    <>
      <ProductDetailSlide>
        {data && (
          <img
            src={`${
              baseApiUrl +
              data.productSubImg[productSlideIndex - startSlideIndex]?.subimage
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
                {data?.productSubImg?.map((subImg: any, index: number) => {
                  if (index > 7) return;
                  return (
                    <div key={index}>
                      <img
                        onClick={onClickSubSlideImg}
                        data-index={`${index + startSlideIndex}`}
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
