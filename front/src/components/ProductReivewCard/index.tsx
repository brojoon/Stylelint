import { IReviewInfo } from '@typings/db';
import fetcher from '@utils/utils/fetcher';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useState, VFC } from 'react';
import { useQuery } from 'react-query';
import { ProductReviewCardWrapper } from './style';

interface Props {
  reviewInfo: IReviewInfo;
}

const ProductReviewCard: VFC<Props> = ({ reviewInfo }) => {
  const [reviewStarIndex, setReviewStarIndex] = useState(reviewInfo?.score);

  return (
    <>
      {reviewInfo && (
        <ProductReviewCardWrapper ReviewStarIndex={reviewStarIndex}>
          <div>
            <div className="start-wrapper">
              <span>
                <span></span>
              </span>

              <strong>{reviewInfo?.score}</strong>
            </div>
            <div className="review-info">
              <span>
                {reviewInfo?.nickname.substring(
                  0,
                  Math.floor(reviewInfo?.nickname?.length / 2),
                ) +
                  [
                    ...new Array(
                      Math.ceil(reviewInfo?.nickname?.length / 2),
                    ).fill('*'),
                  ].reduce((acc, value) => {
                    return acc + '*';
                  })}
              </span>
              <span>
                {dayjs(reviewInfo?.createdAt).year() +
                  '.' +
                  Number(dayjs(reviewInfo?.createdAt).month() + 1) +
                  '.' +
                  dayjs(reviewInfo?.createdAt).date() +
                  '.'}
              </span>
            </div>
          </div>
          <div className="review-text">
            <span>{reviewInfo?.review_text}</span>
          </div>
        </ProductReviewCardWrapper>
      )}
    </>
  );
};

export default ProductReviewCard;
