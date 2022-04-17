import { useIsMobile } from '@utils/Hooks';
import Link from 'next/link';
import React, { useCallback, VFC } from 'react';
import { ModalBackground, ModalBasketContainer } from './style';

interface Props {
  setIsModalNotice: React.Dispatch<React.SetStateAction<boolean>>;
  noticeText: string;
}

const ModalBasket: VFC<Props> = ({ setIsModalNotice, noticeText }) => {
  const onClickModalClose = useCallback(() => {
    setIsModalNotice(false);
  }, []);

  const isMobile = useIsMobile();

  return (
    <>
      <ModalBackground onClick={onClickModalClose} />
      <ModalBasketContainer IsMobile={isMobile}>
        <div className="modal-wrapper">
          <button
            className="top-close-btn"
            onClick={onClickModalClose}
          ></button>
          <div>
            <div className="modal-text-wrapper">
              <strong>{noticeText}</strong>
            </div>
          </div>

          {/* <button className="bottom-close-btn">확인</button> */}
        </div>
      </ModalBasketContainer>
    </>
  );
};

export default ModalBasket;
