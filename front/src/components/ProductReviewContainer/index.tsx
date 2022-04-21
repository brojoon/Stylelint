import ModalCreateReivew from '@components/Modals/ModalCreateReivew';
import ProductReivewCard from '@components/ProductReivewCard';
import React, { useCallback, useState } from 'react';
import { ProductReviewWrapper } from './style';

const ProductReviewContainer = () => {
  const [isCreateReivewModal, setIsCreateReivewModal] = useState(false);
  const onClickCreateReivew = useCallback(() => {
    setIsCreateReivewModal(true);
  }, []);
  return (
    <>
      {isCreateReivewModal && (
        <ModalCreateReivew setIsCreateReivewModal={setIsCreateReivewModal} />
      )}
      <ProductReviewWrapper>
        <div className="header-wrapper">
          <h3>
            일반 상품평<span>7</span>
          </h3>
          <button onClick={onClickCreateReivew}>리뷰 작성</button>
        </div>
        <ProductReivewCard />
        <ProductReivewCard />
        <ProductReivewCard />
        <ProductReivewCard />
        <ProductReivewCard />
      </ProductReviewWrapper>
    </>
  );
};

export default ProductReviewContainer;
