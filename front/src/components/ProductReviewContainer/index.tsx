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
  const [page, setPage] = useState(0);
  const [reverseData, setReverseData] = useState([]);
  const perPage = 5;

  const { data, refetch } = useQuery('productReviewList', () =>
    fetcher(`api/product/${code}/review`),
  );

  const [isCreateReivewModal, setIsCreateReivewModal] = useState(false);
  const onClickCreateReivew = useCallback(() => {
    setIsCreateReivewModal(true);
  }, []);

  useEffect(() => {
    if (data) {
      setReverseData(data.reverse());
    }
  }, [data]);
  console.log(page);
  return (
    <>
      {isCreateReivewModal && (
        <ModalCreateReivew setIsCreateReivewModal={setIsCreateReivewModal} />
      )}

      <ProductReviewWrapper>
        <div className="header-wrapper">
          <h3>
            일반 상품평<span>{reverseData?.length}</span>
          </h3>
          <button className="review-modal-btn" onClick={onClickCreateReivew}>
            리뷰 작성
          </button>
        </div>
        {[...reverseData]
          .slice(page * perPage, page * perPage + perPage)
          .map((reviewInfo: IReviewInfo) => (
            <ProductReivewCard
              key={reviewInfo.review_text + reviewInfo.createdAt}
              reviewInfo={reviewInfo}
            />
          ))}
        <Paginate
          setPage={setPage}
          totalCount={reverseData?.length}
          perPage={perPage}
        />
      </ProductReviewWrapper>
    </>
  );
};

export default ProductReviewContainer;
