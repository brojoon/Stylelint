import Postcode from '@components/Modals/PostcodeModal';
import React, { useCallback, useEffect, useState } from 'react';
import { PaymentContainer } from './style';
import Link from 'next/link';
import PaymentSlider from '@components/Sliders/PaymentSlider';
import fetcher from '@utils/utils/fetcher';
import { useQuery } from 'react-query';
import { baseApiUrl, baseFrontUrl } from '@utils/utils/const';
import { useDispatch } from 'react-redux';
import { PaymentDoneUpdateFetch } from '@store/modules/paymentDoneUpdate';
import { useRouter } from 'next/router';

interface IPostType {
  address: string;
  basket_numbers: IBasket_numbersType[];
  receiver: string;
  phone_number: string;
}
interface IBasket_numbersType {
  id: string;
}

const Payment = () => {
  const [isPostCode, setIsPostCode] = useState(false);
  const [addressInputValue, setAddressInputValue] = useState('주소');
  const [addressSubInputValue, setAddressSubInputValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const { data, isLoading, error } = useQuery('paymentList', () =>
    fetcher(`/api/payment`),
  );

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      let sum = 0;
      let num = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i].quantity * data[i].price;
        num += data[i].quantity;
      }
      setTotalPrice(sum);
      setTotalNumber(num);
    }
  }, [data]);

  const onChangeSubInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddressSubInputValue(e.target.value);
    },
    [],
  );

  const onClickChangeAddress = useCallback(() => {
    setIsPostCode((prev) => !prev);
  }, []);

  const onClickPurchase = useCallback(() => {
    if (data && addressSubInputValue && addressInputValue) {
      const post: IPostType = {
        address: addressInputValue + ' ' + addressSubInputValue,
        receiver: '홍길동',
        phone_number: '010-9420-8033',
        basket_numbers: [],
      };
      console.log('isdata', data);
      for (let i = 0; i < data.length; i++) {
        console.log('data', data[i].basket_number);
        post.basket_numbers.push({ id: data[i].basket_number });
      }
      dispatch(PaymentDoneUpdateFetch(post));
      router.push(baseFrontUrl + '/payment/result');
    }
  }, [data, addressSubInputValue, addressInputValue]);

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
                        <input
                          type="text"
                          onChange={onChangeSubInput}
                          value={addressSubInputValue}
                          placeholder="상세주소"
                        />
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
                      <h3>주문상품 {totalNumber}개</h3>
                    </div>
                    <div>
                      {data?.map((product: any) => {
                        return (
                          <div className="payment-purchase-info">
                            <div>
                              <img src={baseApiUrl + product.image} />
                            </div>
                            <div>
                              <div>{product.product_name}</div>
                              <div>
                                <span>{product.price.toLocaleString()}</span>
                                <span>원</span>
                                <span>/ {product.quantity}개</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div>
                        <div className="payment-purchase-price">
                          <span>상품금액</span>
                          <span>{totalPrice.toLocaleString()}원</span>
                        </div>
                      </div>
                    </div>
                    <div className="payment-purchas-total">
                      <span>총 결제금액</span>
                      <span>{totalPrice.toLocaleString()}원</span>
                    </div>
                    <div className="payment-purchas-btn">
                      <button onClick={onClickPurchase}>결제하기</button>
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
