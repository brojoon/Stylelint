import { ProductSearchCardContainer } from '@components/ProductSearchCard/style';
import { useIsMobile } from '@utils/Hooks';
import Link from 'next/link';
import React, { useCallback, useState, VFC } from 'react';
import { ModalBackground, ModalBasketContainer } from './style';

interface Props {
  setIsCreateReivewModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateReivew: VFC<Props> = ({ setIsCreateReivewModal }) => {
  const StarCount = 5;
  const [textValue, setTextValue] = useState('');
  const [reviewStarIndex, setReviewStarIndex] = useState(0);
  const [reviewStarIndexSave, setReviewStarIndexSave] = useState(0);
  const onClickModalClose = useCallback(() => {
    setIsCreateReivewModal(false);
  }, []);

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
            <div className="start-img-wrapper" onClick={onClickReviewStart}>
              {[...new Array(StarCount)].map((data, index) => (
                <span
                  id={`start-${index + 1}`}
                  onMouseEnter={onMouseEnterReviewStar}
                  onMouseLeave={onMouseLeaveReviewStar}
                ></span>
              ))}
            </div>
            <h3>상품은 만족하셨나요?</h3>
            <div className="modal-text-wrapper">
              <textarea onChange={onChangeReviewText} value={textValue} />
            </div>
            <button>등록</button>
          </div>

          {/* <button className="bottom-close-btn">확인</button> */}
        </div>
      </ModalBasketContainer>
    </>
  );
};

export default ModalCreateReivew;

// .modal-text-wrapper > textarea::-webkit-scrollbar {
//   display: none; /* Chrome, Safari, Opera*/
// }
