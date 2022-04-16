import BasicBtn from '@components/Basic/BasicBtn';
import BasicInput from '@components/Basic/BasicInput';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { LoginFetch } from '@store/modules/login';
import { useDispatch } from 'react-redux';
import { MemberLoginContainer } from './style';

import ModalNotice from '@components/Modals/ModalNotice';

function MemberLogin() {
  const [userIdInputValue, setUserIdInputValue] = useState('');
  const [userPasswordInputValue, setUserPasswordInputValue] = useState('');
  const [idErrorText, setIdErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [isModalNotice, setIsModalNotice] = useState(false);
  const dispatch = useDispatch();

  const onSubmitLogin = useCallback(() => {
    if (!userIdInputValue) {
      setIdErrorText('아이디를 입력해주세요.');
      return;
    }

    if (!userPasswordInputValue) {
      setPasswordErrorText('비밀번호를 입력해주세요.');
      return;
    }
    dispatch(
      LoginFetch({
        userId: userIdInputValue,
        password: userPasswordInputValue,
      }),
    );
    setIsModalNotice(true);
  }, [userIdInputValue, userPasswordInputValue]);

  const onChangePassword = useCallback(
    (e) => {
      setUserPasswordInputValue(e.target.value);
      if (passwordErrorText) setPasswordErrorText('');
    },
    [passwordErrorText],
  );

  const onKeyUpSubmit = useCallback(
    (e) => {
      if (e.keyCode == 13) onSubmitLogin();
    },
    [onSubmitLogin],
  );
  const onClickKakaoBtn = useCallback(() => {}, []);
  const onClickGoogleBtn = useCallback(() => {}, []);
  return (
    <>
      <MemberLoginContainer>
        {isModalNotice && (
          <ModalNotice
            setIsModalNotice={setIsModalNotice}
            noticeText={`
        로그인에 실패하였습니다.
        아이디 또는 패스워드를 확인해주세요.`}
          />
        )}
        <label className="w-full">
          <span className="text-[1rem]">아이디</span>
          <BasicInput
            setInputValue={setUserIdInputValue}
            errorText={idErrorText}
            setErrorText={setIdErrorText}
            inputValue={userIdInputValue}
            type="text"
            name="id"
            placeholder="아이디를 입력해 주세요."
            maxLength={15}
            style="h-[50px] w-full mb-2.5 outline-neutral-400 border rounded px-3"
          />
        </label>
        <label className="w-full">
          <span className="text-[1rem]">비밀번호</span>
          <input
            onChange={onChangePassword}
            value={userPasswordInputValue}
            onKeyUp={onKeyUpSubmit}
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            maxLength={16}
            className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border"
          />
          {passwordErrorText && (
            <p className="error-text">{passwordErrorText}</p>
          )}
        </label>

        <div className="flex justify-between items-center w-[100%] mb-8">
          <label className="flex justify-center items-center cursor-pointer text-sm">
            <input
              className="cursor-pointer w-[0.9rem] h-[0.9rem]"
              type="checkbox"
              value="아이디 저장"
            />
            &nbsp;아이디 저장
          </label>
          <div className="flex justify-center items-betweem text-[0.75rem] ">
            <span className="pr-1 cursor-pointer">아이디 · 비밀번호 찾기</span>

            <Link href="/signup">
              <span className="pl-1 cursor-pointer">회원가입</span>
            </Link>
          </div>
        </div>
        <BasicBtn
          onClickBtn={onSubmitLogin}
          Content="로그인"
          style="w-full bg-blue-600 rounded text-white py-3 font-semibold"
        />
        <BasicBtn
          onClickBtn={onClickKakaoBtn}
          Content="카카오 로그인"
          style="flex justify-center items-center w-full bg-[#fee500]  rounded text-black my-3 text-white py-3 font-semibold before:bg-[url('~@../../../public/img/kakao-logo.png')] before:w-[1.875rem] before:h-[1.875rem] before:bg-[length:60px_30px] before:inline-block"
        />
        <BasicBtn
          onClickBtn={onClickGoogleBtn}
          Content="구글 로그인"
          style="flex justify-center items-center w-full bg-indigo-50  border rounded text-black py-3 font-semibold before:bg-[url('~@../../../public/img/google-logo.png')] before:bg-cover before:w-[1.875rem] before:h-[1.875rem] before:inline-block"
        />
        <p className="font-medium text-[#8E929F] mt-10">© StyleLint Corp.</p>
      </MemberLoginContainer>
    </>
  );
}

export default MemberLogin;
