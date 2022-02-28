import Postcode from '@components/Modals/PostcodeModal';
import React, { useCallback, useState } from 'react';
import { PaymentContainer } from './style';
import Link from 'next/link';
import PaymentSlider from '@components/Sliders/PaymentSlider';

const Payment = () => {
  const [isPostCode, setIsPostCode] = useState(false);
  const [addressInputValue, setAddressInputValue] = useState('주소');
  const onClickChangeAddress = useCallback(() => {
    setIsPostCode((prev) => !prev);
  }, []);
  return (
    <>
      {isPostCode && (
        <>
          <Postcode
            setAddressInputValue={setAddressInputValue}
            setIsPostCode={setIsPostCode}
          />
        </>
      )}
      <PaymentContainer>
        <div>
          <div className="title-container">
            <div className="title-wrapper">
              <h3 className="title">주문결제</h3>
            </div>
          </div>
          <div className="payment-section-container">
            <div className="payment-section-wrapper">
              <div className="payment-section-flex-wrapper">
                <div>
                  <div className="payment-info-card">
                    <div>
                      <div>
                        <h3>홍길동</h3>
                      </div>
                    </div>
                    <div>
                      <div className="payment-address-name">
                        <span>홍길동</span>
                        <span> 010-3333-4444</span>
                      </div>
                      <div className="payment-address-text">
                        <input type="text" disabled value={addressInputValue} />
                        <input type="text" placeholder="상세주소" />
                      </div>
                      <div className="option-container">
                        <select className="option-post" name="요청사항">
                          <option value="배송시 요청사항을 선택해주세요.">
                            배송시 요청사항을 선택해주세요.
                          </option>
                          <option value="직접 수령하겠습니다.">
                            직접 수령하겠습니다.
                          </option>
                          <option value="배송 전 연락바랍니다.">
                            배송 전 연락바랍니다.
                          </option>
                          <option value="부재 시 경비실에 맡겨주세요.">
                            부재 시 경비실에 맡겨주세요.
                          </option>
                          <option value="부재 시 문 앞에 놓아주세요.">
                            부재 시 문 앞에 놓아주세요.
                          </option>
                          <option value="부재 시 택배함에 넣어주세요.">
                            부재 시 택배함에 넣어주세요.
                          </option>
                        </select>
                        <span className="icoArrow arrow2">
                          <img src="./img/select_dropdown.png" alt="" />
                        </span>
                      </div>
                      <div className="payment-address-change">
                        <button onClick={onClickChangeAddress}>
                          배송지 변경
                        </button>
                      </div>
                    </div>
                  </div>
                  <PaymentSlider />
                </div>
                <div>
                  <div className="payment-purchase-card">
                    <div className="payment-purchase-header">
                      <h3>주문상품 1개</h3>
                    </div>
                    <div>
                      <div className="payment-purchase-info">
                        <div>
                          <Link href="/test">
                            <img src="./img/product1/product_detail_1.jpg" />
                          </Link>
                        </div>
                        <div>
                          <div>
                            <Link href="/test">
                              백제백제 멸치맛 쌀국수 92g x 30개 (한박스)
                            </Link>
                          </div>
                          <div>
                            <span>{(+'28350').toLocaleString()}</span>
                            <span>원</span>
                            <span>/ 1개</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="payment-purchase-price">
                          <span>상품금액</span>
                          <span>31,500원</span>
                        </div>
                      </div>
                    </div>
                    <div className="payment-purchas-total">
                      <span>총 결제금액</span>
                      <span>30,240원</span>
                    </div>
                    <div className="payment-purchas-btn">
                      <button>결제하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PaymentContainer>
    </>
  );
};

export default Payment;
