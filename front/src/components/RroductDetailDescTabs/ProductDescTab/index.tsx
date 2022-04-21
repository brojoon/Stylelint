import { baseApiUrl } from '@utils/utils/const';
import fetcher from '@utils/utils/fetcher';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductDescTabContainer } from './style';

const ProductDescTab = () => {
  const [isMoreProductInfo, setIsMoreProductInfo] = useState(false);
  const router = useRouter();
  const { type, code } = router.query;
  const { data, isLoading, error } = useQuery('productDetailInfo', () =>
    fetcher(`api/product/${code}`),
  );
  const onClickInfoBtn = useCallback(() => {
    setIsMoreProductInfo((prev) => !prev);
  }, []);
  return (
    <ProductDescTabContainer IsMoreProductInfo={isMoreProductInfo}>
      <div className="info-body-container">
        {data &&
          data?.productSubImg?.map((subimg: any, index: number) => {
            if (index <= 7) return;

            return (
              <div key={subimg.subimage}>
                <img
                  src={`${baseApiUrl + subimg.subimage}`}
                  alt={`상품 이미지 ${index}`}
                />
              </div>
            );
          })}
      </div>
      <div className="info-btn-wrapper" onClick={onClickInfoBtn}></div>
    </ProductDescTabContainer>
  );
};
export default ProductDescTab;
