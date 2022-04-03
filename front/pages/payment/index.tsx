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
import { PaymentRecentSaveFetch } from '@store/modules/paymentRecentSave';
import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';
import MobilePaymentSlider from '@components/Sliders/MobilePaymentSlider';

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
  const [totaLQuantity, setTotaLQuantity] = useState(0);
  const [postName, setPostName] = useState('');
  const [postPhoneNumber, setPostPhoneNumber] = useState('');

  const { data: user } = useQuery('user', () => fetcher(`/api/user/profile`));
  const { data, isLoading, error } = useQuery('paymentList', () =>
    fetcher(`/api/payment`),
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const isTablet1024 = useIsTablet1024();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (user) {
      if (user?.address) {
        const addressIndex = user.address.indexOf('/');
        setAddressInputValue(user.address.slice(undefined, addressIndex));
        setAddressSubInputValue(user.address.slice(addressIndex + 1));
      }

      if (user?.phone_number) setPostPhoneNumber(user.phone_number);
    }
  }, [user]);

  useEffect(() => {
    if (data) {
      let sum = 0;
      let num = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i].quantity * data[i].price;
        num += data[i].quantity;
      }
      setTotalPrice(sum);
      setTotaLQuantity(num);
    }
  }, [data]);

  const onChangeName = useCallback((e) => {
    setPostName(e.target.value);
  }, []);

  const onChangePhoneNumber = useCallback((e) => {
    console.log(
      e.target.value
        .replace(/[^0-9]/g, '')
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          '$1-$2-$3',
        )
        .replace('--', '-'),
    );
    setPostPhoneNumber(
      e.target.value
        .replace(/[^0-9]/g, '')
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          '$1-$2-$3',
        )
        .replace('--', '-'),
    );
  }, []);

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
    if (data && addressSubInputValue && postName && postPhoneNumber) {
      const post: IPostType = {
        address: addressInputValue + '/' + addressSubInputValue,
        receiver: postName,
        phone_number: postPhoneNumber,
        basket_numbers: [],
      };
      console.log('isdata', data);
      for (let i = 0; i < data.length; i++) {
        console.log('data', data[i].basket_number);
        post.basket_numbers.push({ id: data[i].basket_number });
      }
      dispatch(PaymentDoneUpdateFetch(post));
      dispatch(
        PaymentRecentSaveFetch({
          userId: user.userId,
          receiver: postName,
          total_price: totalPrice,
          total_purchase_quantity: totaLQuantity,
          address: addressInputValue + ' ' + addressSubInputValue,
          phone_number: postPhoneNumber,
        }),
      );
      router.push(baseFrontUrl + '/payment/result');
    }
  }, [
    data,
    addressSubInputValue,
    addressInputValue,
    postName,
    postPhoneNumber,
    totalPrice,
    totaLQuantity,
    user,
  ]);

  return (
    <>
      {isPostCode && (
        <Postcode
          setAddressInputValue={setAddressInputValue}
          setIsPostCode={setIsPostCode}
        />
      )}
      <PaymentContainer IsTablet1024={isTablet1024} IsMobile={isMobile}>
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
                        <h3>배송정보</h3>
                      </div>
                    </div>
                    <div>
                      <div className="payment-info-text">
                        <input
                          type="text"
                          onChange={onChangeName}
                          value={postName}
                          placeholder="이름"
                        />
                        <input
                          type="text"
                          onChange={onChangePhoneNumber}
                          maxLength={13}
                          value={postPhoneNumber}
                          placeholder="연락처"
                        />
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

                  {isTablet ? <MobilePaymentSlider /> : <PaymentSlider />}
                </div>
                <div>
                  <div className="payment-purchase-card">
                    <div className="payment-purchase-header">
                      <h3>주문상품 {totaLQuantity}개</h3>
                    </div>
                    <div>
                      {data?.map((product: any) => {
                        return (
                          <div className="payment-purchase-info">
                            <div>
                              <img src={baseApiUrl + product.image} />
                            </div>
                            <div>
                              <h3>{product.product_name}</h3>
                              <div className="payment-purchase-info-detail-wrapper">
                                <div>
                                  <span>사이즈: {product.size}</span>{' '}
                                  <span>색상: {product.color}</span>
                                </div>
                                <div>
                                  <span>{product.price.toLocaleString()}</span>
                                  <span>원</span>
                                  <span> / {product.quantity}개</span>
                                </div>
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
