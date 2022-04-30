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
  const [perPage, _] = useState(5);
  const [reverseData, setReverseData] = useState([]);

  const { data, refetch } = useQuery('productReviewList', () =>
    fetcher(`api/product/${code}/review`),
  );

  const { data: user } = useQuery('user', () => fetcher(`api/user/profile`));

  const [isCreateReivewModal, setIsCreateReivewModal] = useState(false);
  const onClickCreateReivew = useCallback(() => {
    if (!user) {
      alert('로그인후 이용 가능합니다.');
      return;
    } else if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userId == user.userId) {
          alert('이미 리뷰를 작성 하셨습니다.');
          return;
        }
      }
    }
    setIsCreateReivewModal(true);
  }, [user, data]);

  useEffect(() => {
    if (data) {
      setReverseData(data.reverse());
    }
  }, [data]);

  return (
    <>
      {reverseData.length > 1 && (
        <>
          {isCreateReivewModal && (
            <ModalCreateReivew
              setIsCreateReivewModal={setIsCreateReivewModal}
            />
          )}
          <ProductReviewWrapper>
            <div className="header-wrapper">
              <h3>
                일반 상품평<span>{reverseData?.length}</span>
              </h3>
              <button
                className="review-modal-btn"
                onClick={onClickCreateReivew}
              >
                리뷰 작성
              </button>
            </div>
            {[...reverseData]
              .slice(page * perPage, page * perPage + perPage)
              .map((reviewInfo: IReviewInfo) => (
                <ProductReivewCard
                  key={reviewInfo.id}
                  reviewInfo={reviewInfo}
                />
              ))}

            <Paginate
              setPage={setPage}
              totalCount={reverseData?.length ? reverseData?.length : 0}
              perPage={perPage}
            />
          </ProductReviewWrapper>
        </>
      )}
    </>
  );
};

export default ProductReviewContainer;
