import ModalCreateReivew from '@components/Modals/ModalCreateReivew';
import Paginate from '@components/Paginate';
import ProductReivewCard from '@components/ProductReivewCard';
import { IReviewInfo } from '@typings/db';
import fetcher from '@utils/utils/fetcher';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductReviewWrapper } from './style';

const ProductReviewContainer = () => {
  const router = useRouter();
  const { type, code } = router.query;
  const { data, refetch } = useQuery('productReviewList', () =>
    fetcher(`api/product/${code}/review`),
  );

  const [isCreateReivewModal, setIsCreateReivewModal] = useState(false);
  const onClickCreateReivew = useCallback(() => {
    setIsCreateReivewModal(true);
  }, []);

  useEffect(() => {});
  return (
    <>
      {isCreateReivewModal && (
        <ModalCreateReivew setIsCreateReivewModal={setIsCreateReivewModal} />
      )}
      {data && (
        <ProductReviewWrapper>
          <div className="header-wrapper">
            <h3>
              일반 상품평<span>{data?.length}</span>
            </h3>
            <button onClick={onClickCreateReivew}>리뷰 작성</button>
          </div>
          {[...data].reverse().map((reviewInfo: IReviewInfo) => (
            <ProductReivewCard
              key={reviewInfo.review_text + reviewInfo.createdAt}
              reviewInfo={reviewInfo}
            />
          ))}
          <Paginate />
        </ProductReviewWrapper>
      )}
    </>
  );
};

export default ProductReviewContainer;
