import Postcode from '@components/Modals/PostcodeModal';
import React, { useCallback, useEffect, useState } from 'react';

import PaymentSlider from '@components/Sliders/PaymentSlider';
import fetcher from '@utils/utils/fetcher';
import { useQuery } from 'react-query';
import { baseApiUrl } from '@utils/utils/const';
import { useDispatch } from 'react-redux';
import { PaymentDoneUpdateFetch } from '@store/modules/paymentDoneUpdate';
import Router, { useRouter } from 'next/router';
import { PaymentRecentSaveFetch } from '@store/modules/paymentRecentSave';
import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';
import MobilePaymentSlider from '@components/Sliders/MobilePaymentSlider';
import LoadingCircle from '@components/LoadingCircle';
import { IPostType } from '@typings/IRequest';
import { PaymentContainer } from 'styles/page/payment';

const Payment = () => {
  const [isPostCode, setIsPostCode] = useState(false);
  const [addressInputValue, setAddressInputValue] = useState('주소');
  const [addressSubInputValue, setAddressSubInputValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [totaLQuantity, setTotaLQuantity] = useState(0);
  const [postName, setPostName] = useState('');
  const [postPhoneNumber, setPostPhoneNumber] = useState('');
  const [nameErrorText, setNameErrorText] = useState('');
  const [addressErrorText, setAddressErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { data: user } = useQuery('user', () => fetcher(`/api/user/profile`));
  const { data } = useQuery('paymentList', () => fetcher(`/api/payment`));

  const dispatch = useDispatch();
  const router = useRouter();
  const isTablet1024 = useIsTablet1024();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (user == false) Router.push('/login');
    else if (user) setIsLoading(false);
  }, [user]);

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

  const onChangeName = useCallback(
    (e) => {
      setPostName(e.target.value);
      if (nameErrorText) setNameErrorText('');
    },
    [nameErrorText],
  );

  const onChangePhoneNumber = useCallback(
    (e) => {
      if (nameErrorText) setNameErrorText('');
      setPostPhoneNumber(
        e.target.value
          .replace(/[^0-9]/g, '')
          .replace(
            /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
            '$1-$2-$3',
          )
          .replace('--', '-'),
      );
    },
    [nameErrorText],
  );

  const onChangeSubInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddressSubInputValue(e.target.value);
      if (addressErrorText) setAddressErrorText('');
    },
    [addressErrorText],
  );

  const onClickChangeAddress = useCallback(() => {
    setIsPostCode((prev) => !prev);
  }, []);

  const onClickPurchase = useCallback(async () => {
    if (!postName) {
      setNameErrorText('이름을 입력해주세요');
      return;
    }
    if (!postPhoneNumber) {
      setNameErrorText('연락처를 입력해주세요');
      return;
    }

    if (
      postPhoneNumber.length !== 13 ||
      postPhoneNumber[3] !== '-' ||
      postPhoneNumber[8] !== '-'
    ) {
      setNameErrorText('연락처를 올바르게 입력해주세요');
      return;
    }

    if (addressInputValue == '주소' || !addressSubInputValue) {
      setAddressErrorText('주소를 입력해주세요');
      return;
    }
    if (data && addressSubInputValue && postName && postPhoneNumber) {
      const post: IPostType = {
        address: addressInputValue + '/' + addressSubInputValue,
        receiver: postName,
        phone_number: postPhoneNumber,
        basket_numbers: [],
      };

      for (let i = 0; i < data.length; i++) {
        post.basket_numbers.push({ id: data[i].basket_number });
      }
      const res: any = await dispatch(PaymentDoneUpdateFetch(post));
      if (res?.meta?.requestStatus === 'fulfilled') {
        const res2: any = await dispatch(
          PaymentRecentSaveFetch({
            userId: user.userId,
            receiver: postName,
            total_price: totalPrice,
            total_purchase_quantity: totaLQuantity,
            address: addressInputValue + ' ' + addressSubInputValue,
            phone_number: postPhoneNumber,
          }),
        );

        if (res2?.meta?.requestStatus === 'fulfilled') {
          router.push('/payment/result');
        }
      }
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
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          {data && (
            <>
              {isPostCode && (
                <Postcode
                  setAddressInputValue={setAddressInputValue}
                  setAddressErrorText={setAddressErrorText}
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
                                  maxLength={15}
                                  autoComplete="new-password"
                                />
                                <input
                                  type="text"
                                  onChange={onChangePhoneNumber}
                                  maxLength={13}
                                  value={postPhoneNumber}
                                  placeholder="연락처"
                                  autoComplete="new-password"
                                />
                                {nameErrorText && (
                                  <p className="error-text">{nameErrorText}</p>
                                )}
                              </div>
                              <div className="payment-address-text">
                                <input
                                  type="text"
                                  disabled
                                  value={addressInputValue}
                                  autoComplete="new-password"
                                />
                                <input
                                  type="text"
                                  onChange={onChangeSubInput}
                                  value={addressSubInputValue}
                                  placeholder="상세주소"
                                  maxLength={50}
                                  autoComplete="new-password"
                                />
                                {addressErrorText && (
                                  <p className="error-text">
                                    {addressErrorText}
                                  </p>
                                )}
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

                          {isTablet ? (
                            <MobilePaymentSlider />
                          ) : (
                            <PaymentSlider />
                          )}
                        </div>
                        <div>
                          <div className="payment-purchase-card">
                            <div className="payment-purchase-header">
                              <h3>주문상품 {totaLQuantity}개</h3>
                            </div>
                            <div>
                              {data?.map((product: any, index: number) => {
                                return (
                                  <div
                                    key={index}
                                    className="payment-purchase-info"
                                  >
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
                                          <span>
                                            {product.price.toLocaleString()}
                                          </span>
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
                              <button onClick={onClickPurchase}>
                                결제하기
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PaymentContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Payment;
