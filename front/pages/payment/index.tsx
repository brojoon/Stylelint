import Postcode from '@components/Modals/PostcodeModal';
import React, { useCallback, useState } from 'react';
import { PaymentContainer } from './style';

const Payment = () => {
  const [isPostCode, setIsPostCode] = useState(false);
  const [addressInputValue, setAddressInputValue] = useState('주소');
  const onClickChangeAddress = useCallback(() => {
    setIsPostCode((prev) => !prev);
  }, []);
  return (
    <PaymentContainer>
      {isPostCode && (
        <>
          <Postcode
            setAddressInputValue={setAddressInputValue}
            setIsPostCode={setIsPostCode}
          />
        </>
      )}
      <div>
        <div className="title-container">
          <div className="title-wrapper">
            <h3 className="title">주문결제</h3>
          </div>
        </div>
        <div className="payment-section-container">
          <div className="payment-section-wrapper">
            <div>
              <div className="payment-info-card">
                <div>
                  <div>
                    <h3>김형준</h3>
                  </div>
                </div>
                <div>
                  <div className="payment-address-name">
                    <span>김형준</span>
                    <span> 010-9420-8042</span>
                  </div>
                  <div className="payment-address-text">
                    <input type="text" disabled value={addressInputValue} />
                    <input type="text" placeholder="상세주소" />
                  </div>
                  <div className="payment-address-text-sub"></div>
                  <div>
                    <div></div>
                    <label></label>
                    <select></select>
                  </div>
                  <div className="payment-address-change">
                    <button onClick={onClickChangeAddress}>배송지 변경</button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </PaymentContainer>
  );
};

export default Payment;
