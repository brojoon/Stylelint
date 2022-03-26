import Link from 'next/link';
import React, { useCallback, VFC } from 'react';
import { ModalBackground, ModalBasketContainer } from './style';

interface Props {
  setIsModalBasket: any;
}

const ModalBasket: VFC<Props> = ({ setIsModalBasket }) => {
  const onClickModalClose = useCallback(() => {
    setIsModalBasket(false);
  }, []);
  return (
    <>
      <ModalBackground onClick={onClickModalClose} />
      <ModalBasketContainer>
        <div className="modal-wrapper">
          <button onClick={onClickModalClose}></button>
          <div>
            <div className="modal-img-wrapper">
              <img src="./img/basket_modal.png" alt="basket_modal.png" />
              <strong>장바구니에 상품을 담았습니다.</strong>
            </div>
            <div className="modal-button-wrapper">
              <button onClick={onClickModalClose}>
                <strong>계속 쇼핑</strong>
              </button>
              <Link href="basket">
                <a>
                  <strong>장바구니로</strong>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </ModalBasketContainer>
    </>
  );
};

export default ModalBasket;
