import React from 'react';
import { ProductReviewCardWrapper } from './style';

const ProductReviewCard = () => {
  return (
    <ProductReviewCardWrapper>
      <div>
        <span>
          좋아요 가격대비 짱입니다좋아요 가격대비 짱입니다좋아요 가격대비
        </span>
      </div>
      <div>
        <div>
          <span>작성자 :</span>
          <span>her****</span>
        </div>
        <div>
          <span>등록일 :</span>
          <span>2022.03.03</span>
        </div>
      </div>
    </ProductReviewCardWrapper>
  );
};

export default ProductReviewCard;
