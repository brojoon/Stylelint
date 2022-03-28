import BasicInput from '@components/Basic/BasicInput';
import Postcode from '@components/Modals/PostcodeModal';
import { UserInfoUpdateFetch } from '@store/modules/userInfoUpdate';
import fetcher from '@utils/utils/fetcher';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { ProfileContainer } from './style';

const Profile = () => {
  const [isPostCode, setIsPostCode] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordCheck, setInputPasswordCheck] = useState('');
  const [inputEmailHead, setInputEmailHead] = useState('');
  const [inputEmailSub, setInputEmailSub] = useState('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [addressInputValue, setAddressInputValue] = useState('주소');
  const [addressSubInputValue, setAddressSubInputValue] = useState('');

  const { data: user } = useQuery('user', () => fetcher(`/api/user/profile`));

  const dispatch = useDispatch();
  console.log('user', user);

  useEffect(() => {
    if (user) {
      if (user?.email) {
        const emailIndex = user.email.indexOf('@');
        setInputEmailHead(user.email.slice(undefined, emailIndex));
        setInputEmailSub(user.email.slice(emailIndex + 1));
      }

      if (user?.address) {
        const addressIndex = user.address.indexOf('/');
        setAddressInputValue(user.address.slice(undefined, addressIndex));
        setAddressSubInputValue(user.address.slice(addressIndex + 1));
      }

      if (user?.phone_number) setInputPhoneNumber(user.phone_number);
    }
  }, [user]);

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
    setInputPhoneNumber(
      e.target.value
        .replace(/[^0-9]/g, '')
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          '$1-$2-$3',
        )
        .replace('--', '-'),
    );
  }, []);

  const onClickChangeAddress = useCallback(() => {
    setIsPostCode((prev) => !prev);
  }, []);

  const onChangeEmailSelect = useCallback((e) => {
    setInputEmailSub(e.target.value);
  }, []);

  const onChangeSubInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddressSubInputValue(e.target.value);
    },
    [],
  );

  const onClickUserInfoUpdateBtn = useCallback(() => {
    dispatch(
      UserInfoUpdateFetch({
        userId: user.userId,
        password: inputPassword,
        address: addressInputValue + '/' + addressSubInputValue,
        email: inputEmailHead + '@' + inputEmailSub,
        phone_number: inputPhoneNumber,
      }),
    );
  }, [
    user,
    inputPassword,
    addressInputValue,
    addressSubInputValue,
    inputEmailHead,
    inputEmailSub,
    inputPhoneNumber,
  ]);

  return (
    <>
      {isPostCode && (
        <Postcode
          setAddressInputValue={setAddressInputValue}
          setIsPostCode={setIsPostCode}
        />
      )}
      <ProfileContainer>
        <div className="profile-wrapper">
          <div className="title">
            <h2>마이페이지</h2>
          </div>

          <h3 className="my-title">회원정보 변경</h3>
          <div className="my-info-header">
            <h4>
              <b>{user?.userId}</b>님의 회원정보
            </h4>
          </div>
          <div className="my-info-wrapper">
            <div className="member-id-box">
              <dl>
                <dt>아이디</dt>
                <dd>{user?.userId}</dd>
              </dl>
            </div>
            <label className="mb-3 mt-5">
              <span className="text-[1rem]">비밀번호</span>
              <BasicInput
                setInputValue={setInputPassword}
                inputValue={inputPassword}
                type="password"
                name="password"
                placeholder="영어, 숫자, 특수문자 중 2가지 이상 10~20자"
                maxLength={20}
                style="h-[50px] w-full outline-neutral-400 rounded px-3 border "
              />
            </label>
            <BasicInput
              setInputValue={setInputPasswordCheck}
              inputValue={inputPasswordCheck}
              type="password"
              name="password"
              placeholder="비밀번호 확인"
              maxLength={20}
              style="h-[50px] w-full mb-5 outline-neutral-400 rounded px-3 border "
            />
            <label>
              <span className="text-[1rem]">연락처</span>
              <input
                type="text"
                onChange={onChangePhoneNumber}
                value={inputPhoneNumber}
                maxLength={13}
                placeholder="-을 제외하고 입력해주세요"
                className="h-[50px] w-full mb-5 outline-neutral-400 border rounded px-3"
              />
            </label>
            <label>
              이메일
              <div className="flex items-center">
                <BasicInput
                  setInputValue={setInputEmailHead}
                  inputValue={inputEmailHead}
                  type="text"
                  name="email"
                  placeholder="이메일 앞자리"
                  maxLength={20}
                  style="h-[50px] w-full  outline-neutral-400 rounded px-3 border "
                />
                <span className="px-2.5">@</span>
                <BasicInput
                  setInputValue={setInputEmailSub}
                  inputValue={inputEmailSub}
                  type="text"
                  name="emailsub"
                  placeholder="이메일 뒷자리"
                  maxLength={20}
                  style="h-[50px] w-full outline-neutral-400 rounded px-3 border "
                />
              </div>
            </label>
            <div className="option-container">
              <select
                className="border rounded outline-neutral-400 mt-1.5 h-[50px] option-email-sub"
                name="email"
                onChange={onChangeEmailSelect}
              >
                <option value="">직접입력</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="daum.com">daum.com</option>
              </select>
              <span className="icoArrow">
                <img src="./img/select_dropdown.png" alt="" />
              </span>
              <div className="payment-info-card">
                <div>
                  <div>
                    <h3>배송정보</h3>
                  </div>
                </div>
                <div>
                  <div className="payment-address-text">
                    <input type="text" disabled value={addressInputValue} />
                    <input
                      type="text"
                      onChange={onChangeSubInput}
                      value={addressSubInputValue}
                      placeholder="상세주소"
                    />
                  </div>
                  <div className="payment-address-change">
                    <button onClick={onClickChangeAddress}>배송지 변경</button>
                  </div>
                </div>
              </div>
              <div className="info-submit">
                <button onClick={onClickUserInfoUpdateBtn}>저장 하기</button>
              </div>
            </div>
          </div>
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;
