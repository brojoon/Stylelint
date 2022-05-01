import BasicBtn from '@components/Basic/BasicBtn';
import BasicInput from '@components/Basic/BasicInput';
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { LoginFetch } from '@store/modules/login';
import { useDispatch } from 'react-redux';
import { MemberLoginContainer } from './style';

import { baseApiUrl } from '@utils/utils/const';
import BasicInputFocus from '@components/Basic/BasicInputFocus';

function MemberLogin() {
  const [userIdInputValue, setUserIdInputValue] = useState('');
  const [userPasswordInputValue, setUserPasswordInputValue] = useState('');
  const [idErrorText, setIdErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  // const [isModalNotice, setIsModalNotice] = useState(false);
  const dispatch = useDispatch();

  const inputFocus = useRef<any>(null);

  useEffect(() => {
    inputFocus?.current?.focus();
  }, [inputFocus]);

  const onSubmitLogin = useCallback(async () => {
    if (!userIdInputValue) {
      setIdErrorText('아이디를 입력해주세요.');
      return;
    }

    if (!userPasswordInputValue) {
      setPasswordErrorText('비밀번호를 입력해주세요.');
      return;
    }
    const res: any = await dispatch(
      LoginFetch({
        userId: userIdInputValue,
        password: userPasswordInputValue,
      }),
    );

    if (res.meta.requestStatus == 'rejected')
      setIdErrorText('아이디 또는 패스워드를 확인해주세요');
  }, [userIdInputValue, userPasswordInputValue]);

  const onChangePassword = useCallback(
    (e) => {
      setUserPasswordInputValue(e.target.value);
      if (passwordErrorText) setPasswordErrorText('');
      if (idErrorText) setIdErrorText('');
    },
    [passwordErrorText, idErrorText],
  );

  const onKeyDown = useCallback((e) => {
    if (e.keyCode == 13) e.preventDefault();
  }, []);

  const onKeyUpSubmit = useCallback(
    (e) => {
      if (e.keyCode == 13) onSubmitLogin();
    },
    [onSubmitLogin],
  );
  const onClickKakaoBtn = useCallback(() => {
    window.location.href = `${baseApiUrl}/api/auth/kakao`;
  }, []);
  const onClickGoogleBtn = useCallback(() => {
    window.location.href = `${baseApiUrl}/api/auth/google`;
  }, []);
  return (
    <>
      <MemberLoginContainer>
        {/* {isModalNotice && (
          <ModalNotice
            setIsModalNotice={setIsModalNotice}
            noticeText={`
        로그인에 실패하였습니다.
        아이디 또는 패스워드를 확인해주세요.`}
          />
        )} */}
        <label className="w-full">
          <span className="text-[1rem]">아이디</span>
          <BasicInputFocus
            type="text"
            name="id"
            placeholder="아이디를 입력해 주세요."
            maxLength={15}
            inputValue={userIdInputValue}
            setInputValue={setUserIdInputValue}
            setErrorText={setIdErrorText}
            errorText={idErrorText}
            style="h-[50px] w-full mb-2.5 outline-neutral-400 border rounded px-3"
          />
        </label>
        <form>
          <label className="w-full">
            <span className="text-[1rem]">비밀번호</span>
            <input
              onChange={onChangePassword}
              value={userPasswordInputValue}
              onKeyUp={onKeyUpSubmit}
              onKeyDown={onKeyDown}
              type="password"
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              maxLength={16}
              className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border"
              autoComplete="new-password"
            />
            {passwordErrorText && (
              <p className="error-text">{passwordErrorText}</p>
            )}
          </label>
        </form>

        <div className="flex justify-between items-center w-[100%] mb-8">
          <label className="flex justify-center items-center cursor-pointer text-sm">
            <input
              className="cursor-pointer w-[0.9rem] h-[0.9rem]"
              autoComplete="new-password"
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

        <button
          onClick={onClickKakaoBtn}
          className="flex justify-center items-center w-full bg-[#fee500]  rounded text-black my-3 text-white py-3 font-semibold"
        >
          <span className="kakao-logo"></span>
          <span className="kakao-text">카카오 로그인</span>
        </button>
        {/* <BasicBtn onClickBtn={onClickKakaoBtn} Content="카카오 로그인" /> */}
        <BasicBtn
          onClickBtn={onClickGoogleBtn}
          Content="구글 로그인"
          style="flex justify-center items-center w-full bg-indigo-50  border rounded text-black py-3 font-semibold before:bg-[url('~@../../../public/img/google-logo.png')] before:bg-cover before:w-[1.875rem] before:h-[1.875rem] before:inline-block"
        />
        <p className="font-medium text-[#8E929F] text-center mt-10">
          © StyleLint Corp.
        </p>
      </MemberLoginContainer>
    </>
  );
}

export default MemberLogin;
