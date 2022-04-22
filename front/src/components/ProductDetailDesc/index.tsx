import ProductReviewContainer from '@components/ProductReviewContainer';
import ProductDescTab from '@components/RroductDetailDescTabs/ProductDescTab';
import fetcher from '@utils/utils/fetcher';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductDetailDescWrapper } from './style';

const ProductDetailDesc = () => {
  const [productDescNavIndex, setProductDescNavIndex] = useState('1');
  const router = useRouter();
  const { type, code } = router.query;
  const { data, refetch } = useQuery('productReviewList', () =>
    fetcher(`api/product/${code}/review`),
  );
  const onClickProductDescNav = useCallback((e) => {
    setProductDescNavIndex(e.target.dataset.index);
  }, []);
  return (
    <ProductDetailDescWrapper ProductDescNavIndex={productDescNavIndex}>
      <div className="product-desc-nav">
        <div className="product-desc-nav-wrapper">
          <ul>
            <li>
              <span onClick={onClickProductDescNav} data-index="1">
                상세설명
              </span>
            </li>
            <li>
              <span onClick={onClickProductDescNav} data-index="2">
                상품평<span> {data?.length}</span>
              </span>
            </li>
            {/* <li>
              <span onClick={onClickProductDescNav} data-index="3">
                상품문의
              </span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="product-desc-content-container">
        <div className="product-desc-content-wrapper">
          {productDescNavIndex == '1' ? (
            <ProductDescTab />
          ) : (
            <ProductReviewContainer />
          )}
        </div>
      </div>
    </ProductDetailDescWrapper>
  );
};
export default ProductDetailDesc;
