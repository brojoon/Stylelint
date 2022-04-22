import { ProductReviewAddFetch } from '@store/modules/productReviewAdd';
import { useIsMobile } from '@utils/Hooks';
import fetcher from '@utils/utils/fetcher';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState, VFC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { ModalBackground, ModalBasketContainer } from './style';

interface Props {
  setIsCreateReivewModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateReivew: VFC<Props> = ({ setIsCreateReivewModal }) => {
  const StarCount = 5;
  const StarText = [
    '선택하세요',
    '(별로에요)',
    '(그저그래요)',
    '(괜찮아요)',
    '(좋아요)',
    '(최고예요)',
  ];
  const [textValue, setTextValue] = useState('');
  const [reviewStarIndex, setReviewStarIndex] = useState(0);
  const [reviewStarIndexSave, setReviewStarIndexSave] = useState(0);
  const onClickModalClose = useCallback(() => {
    setIsCreateReivewModal(false);
  }, []);
  const { data: user } = useQuery('user', () => fetcher(`api/user/profile`));
  const router = useRouter();
  const { type, code } = router.query;
  const { data: productReviewList, refetch } = useQuery(
    'productReviewList',
    () => fetcher(`api/product/${code}/review`),
  );

  const dispatch = useDispatch();

  const onChangeReviewText = useCallback((e) => {
    if (e.target.value.length > 50) {
      alert('50자 이내로 입력해주세요');
      return;
    }
    setTextValue(e.target.value);
  }, []);

  const onClickReviewStart = useCallback((e) => {
    console.log('click!!', Number(e.target.id.substr(-1)));
    setReviewStarIndexSave(Number(e.target.id.substr(-1)));
    setReviewStarIndex(Number(e.target.id.substr(-1)));
  }, []);

  const onMouseEnterReviewStar = useCallback(
    (e) => {
      console.log('enter!!', Number(e.target.id.substr(-1)));
      if (reviewStarIndex < Number(e.target.id.substr(-1)))
        setReviewStarIndex(Number(e.target.id.substr(-1)));
    },
    [reviewStarIndex],
  );

  const onMouseLeaveReviewStar = useCallback(
    (e) => {
      setReviewStarIndex(reviewStarIndexSave);
    },
    [reviewStarIndexSave],
  );

  const onClickReviewSubmit = useCallback(async () => {
    if (textValue?.length > 0 && reviewStarIndexSave > 0 && code && user) {
      const res: any = await dispatch(
        ProductReviewAddFetch({
          product_code: code,
          userId: user?.userId,
          nickname: user?.nickname,
          review_text: textValue,
          score: reviewStarIndexSave,
        }),
      );
      if (res.meta.requestStatus === 'fulfilled') {
        refetch().then(() => {
          setIsCreateReivewModal(false);
        });
      }
    }
  }, [reviewStarIndexSave, textValue, code, user]);

  const isMobile = useIsMobile();
  console.log(textValue);

  return (
    <>
      <ModalBackground onClick={onClickModalClose} />
      <ModalBasketContainer
        IsMobile={isMobile}
        ReviewStarIndex={reviewStarIndex}
      >
        <div className="modal-wrapper">
          <button
            className="top-close-btn"
            onClick={onClickModalClose}
          ></button>
          <div>
            <h3>상품은 만족하셨나요?</h3>
            <div className="start-img-wrapper" onClick={onClickReviewStart}>
              {[...new Array(StarCount)].map((data, index) => (
                <span
                  key={index}
                  id={`start-${index + 1}`}
                  onMouseEnter={onMouseEnterReviewStar}
                  onMouseLeave={onMouseLeaveReviewStar}
                ></span>
              ))}
            </div>
            <div className="review-start-text-wrapper">
              {reviewStarIndex ? (
                <span className="start-score">{reviewStarIndex}점 </span>
              ) : null}
              <span>{StarText[reviewStarIndex]}</span>
            </div>
            <div className="modal-text-wrapper">
              <textarea
                placeholder="50자 이내로 입력해주세요"
                onChange={onChangeReviewText}
                value={textValue}
              />
            </div>
            <button onClick={onClickReviewSubmit}>등록</button>
          </div>

          {/* <button className="bottom-close-btn">확인</button> */}
        </div>
      </ModalBasketContainer>
    </>
  );
};

export default ModalCreateReivew;
