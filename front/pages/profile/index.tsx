import BasicInput from '@components/Basic/BasicInput';
import LoadingCircle from '@components/LoadingCircle';
import Postcode from '@components/Modals/PostcodeModal';
import { UserInfoUpdateFetch } from '@store/modules/userInfoUpdate';
import fetcher from '@utils/utils/fetcher';
import isPassword from '@utils/utils/regexPassword';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { ProfileContainer } from 'styles/page/profile';

const Profile = () => {
  const [isPostCode, setIsPostCode] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordCheck, setInputPasswordCheck] = useState('');
  const [inputEmailHead, setInputEmailHead] = useState('');
  const [inputEmailSub, setInputEmailSub] = useState('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [addressInputValue, setAddressInputValue] = useState('주소');
  const [addressSubInputValue, setAddressSubInputValue] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [passwordCheckErrorText, setPasswordCheckErrorText] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [nameErrorText, setNameErrorText] = useState('');
  const [addressErrorText, setAddressErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const { data: user } = useQuery('user', () => fetcher(`/api/user/profile`));

  const dispatch = useDispatch();

  useEffect(() => {
    if (user == false) Router.push('/login');
    else if (user) setIsLoading(false);
  }, [user]);

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

  const onChangePhoneNumber = useCallback(
    (e) => {
      if (nameErrorText) setNameErrorText('');
      setInputPhoneNumber(
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

  const onChangeEmail = useCallback(
    (e) => {
      setInputEmailHead(e.target.value);
      if (emailErrorText) setEmailErrorText('');
    },
    [emailErrorText],
  );
  const onChangeSubEmail = useCallback(
    (e) => {
      setInputEmailSub(e.target.value);
      if (emailErrorText) setEmailErrorText('');
    },
    [emailErrorText],
  );

  const onChangeEmailSelect = useCallback(
    (e) => {
      setInputEmailSub(e.target.value);
      if (emailErrorText) setEmailErrorText('');
    },
    [emailErrorText],
  );

  const onClickChangeAddress = useCallback(() => {
    setIsPostCode((prev) => !prev);
  }, []);

  const onChangeSubInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddressSubInputValue(e.target.value);
      if (addressErrorText) setAddressErrorText('');
    },
    [addressErrorText],
  );

  const onClickUserInfoUpdateBtn = useCallback(async () => {
    if (!inputPassword && inputPasswordCheck) {
      setPasswordErrorText('비밀번호를 입력해주세요');
      return;
    }
    if (inputPassword && !inputPasswordCheck) {
      setPasswordCheckErrorText('비밀번호 확인을 입력해주세요');
      return;
    }

    if (inputPassword != inputPasswordCheck) {
      setPasswordCheckErrorText('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (inputPassword && !isPassword(inputPassword)) {
      setPasswordCheckErrorText(
        '8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합',
      );
      return;
    }
    if (
      inputPhoneNumber.length > 0 &&
      (inputPhoneNumber.length !== 13 ||
        inputPhoneNumber[3] !== '-' ||
        inputPhoneNumber[8] !== '-')
    ) {
      setNameErrorText('연락처를 올바르게 입력해주세요');
      return;
    }
    if (
      (!inputEmailHead && inputEmailSub) ||
      (inputEmailHead && !inputEmailSub)
    ) {
      setEmailErrorText('이메일을 입력 해주세요');
      return;
    }

    if (
      (addressInputValue != '주소' && !addressSubInputValue) ||
      (addressSubInputValue && addressInputValue == '주소')
    ) {
      setAddressErrorText('주소를 입력해주세요');
      return;
    }

    let addressInput;

    if (addressInputValue == '주소') {
      addressInput = null;
    } else {
      addressInput = addressInputValue + '/' + addressSubInputValue;
    }
    const data: any = {
      userId: user.userId,
    };
    if (inputPassword) data.password = inputPassword;
    if (addressInput) data.address = addressInput;
    if (inputEmailHead && inputEmailSub)
      data.email = inputEmailHead + '@' + inputEmailSub;
    if (inputPhoneNumber) data.phone_number = inputPhoneNumber;
    setIsSubmitLoading(true);
    await dispatch(UserInfoUpdateFetch(data));
    setIsSubmitLoading(false);
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
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          {isPostCode && (
            <Postcode
              setAddressInputValue={setAddressInputValue}
              setAddressErrorText={setAddressErrorText}
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
                  <b>{user?.nickname}</b>님의 회원정보
                </h4>
              </div>
              <div className="my-info-wrapper">
                {user && user?.nickname == user?.userId ? (
                  <div className="member-id-box">
                    <dl>
                      <dt>아이디</dt>
                      <dd>{user?.nickname}</dd>
                    </dl>
                  </div>
                ) : null}
                <form className="mb-3 mt-5">
                  <label>
                    <span className="text-[1rem]">비밀번호</span>
                    {user && user?.userId !== user?.nickname ? (
                      <input
                        disabled
                        name="password"
                        placeholder="8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합"
                        maxLength={16}
                        className="h-[50px] w-full outline-neutral-400 rounded px-3 border "
                        autoComplete="new-password"
                      />
                    ) : (
                      <BasicInput
                        setInputValue={setInputPassword}
                        setErrorText={setPasswordErrorText}
                        errorText={passwordErrorText}
                        inputValue={inputPassword}
                        type="password"
                        name="password"
                        placeholder="8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합"
                        maxLength={16}
                        style="h-[50px] w-full outline-neutral-400 rounded px-3 border "
                      />
                    )}
                  </label>
                </form>
                <form className="mb-2.5">
                  {user && user?.userId !== user?.nickname ? (
                    <input
                      disabled
                      name="password"
                      placeholder="비밀번호 확인"
                      maxLength={16}
                      className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
                      autoComplete="new-password"
                    />
                  ) : (
                    <BasicInput
                      setInputValue={setInputPasswordCheck}
                      errorText={passwordCheckErrorText}
                      setErrorText={setPasswordCheckErrorText}
                      inputValue={inputPasswordCheck}
                      type="password"
                      name="password"
                      placeholder="비밀번호 확인"
                      maxLength={16}
                      style="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
                    />
                  )}
                </form>

                <label className="mb-2.5">
                  <span className="text-[1rem]">연락처</span>
                  <input
                    type="text"
                    onChange={onChangePhoneNumber}
                    value={inputPhoneNumber}
                    maxLength={13}
                    placeholder="-을 제외하고 입력해주세요"
                    className="h-[50px] w-full mb-2.5 outline-neutral-400 border rounded px-3"
                    autoComplete="new-password"
                  />
                  {nameErrorText && (
                    <p className="error-text">{nameErrorText}</p>
                  )}
                </label>

                <label>
                  이메일
                  <div className="flex items-center">
                    <input
                      onChange={onChangeEmail}
                      value={inputEmailHead}
                      type="text"
                      name="email"
                      placeholder="이메일 앞자리"
                      maxLength={15}
                      className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
                      autoComplete="new-password"
                    />
                    <span className="px-2.5">@</span>
                    <input
                      onChange={onChangeSubEmail}
                      value={inputEmailSub}
                      type="text"
                      name="emailsub"
                      placeholder="이메일 뒷자리"
                      maxLength={15}
                      className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
                      autoComplete="new-password"
                    />
                  </div>
                  {emailErrorText && (
                    <p className="error-text">{emailErrorText}</p>
                  )}
                </label>

                <div className="option-container">
                  <select
                    className="border rounded outline-neutral-400 h-[50px] option-email-sub"
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
                          <p className="error-text">{addressErrorText}</p>
                        )}
                      </div>
                      <div className="payment-address-change">
                        <button onClick={onClickChangeAddress}>
                          배송지 변경
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="info-submit">
                    {isSubmitLoading ? (
                      <ClipLoader color={'#D3D3D3'} size={36} />
                    ) : (
                      <button onClick={onClickUserInfoUpdateBtn}>
                        저장 하기
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ProfileContainer>
        </>
      )}
    </>
  );
};

export default Profile;
