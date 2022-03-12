import BasicBtn from '@components/Basic/BasicBtn';
import BasicInput from '@components/Basic/BasicInput';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { LoginFetch } from '@store/modules/login';
import { useDispatch } from 'react-redux';

function MemberLogin() {
  const [userIdInputValue, setUserIdInputValue] = useState('');
  const [userPasswordInputValue, setUserPasswordInputValue] = useState('');
  const dispatch = useDispatch();

  const onSubmitLogin = useCallback(() => {
    dispatch(
      LoginFetch({
        userId: userIdInputValue,
        userPassword: userPasswordInputValue,
      }),
    );
    console.log('login!!');
  }, [userIdInputValue, userPasswordInputValue]);
  const onClickKakaoBtn = useCallback(() => {}, []);
  const onClickGoogleBtn = useCallback(() => {}, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <BasicInput
        setInputValue={setUserIdInputValue}
        inputValue={userIdInputValue}
        type="text"
        name="id"
        placeholder="아이디를 입력해 주세요."
        maxLength={20}
        style="h-[50px] w-full my-5 outline-neutral-400 border rounded px-3"
      />
      <BasicInput
        setInputValue={setUserPasswordInputValue}
        inputValue={userPasswordInputValue}
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요."
        maxLength={20}
        style="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
      />
      <div className="flex justify-between items-center w-[100%] mb-8">
        <label className="flex justify-center items-center cursor-pointer text-sm">
          <input
            className="cursor-pointer w-[20px] h-[20px]"
            type="checkbox"
            value="아이디 저장"
          />
          &nbsp;아이디 저장
        </label>
        <div className="flex justify-center items-betweem text-[0.75rem] ">
          <Link href="/id-password-retrieve">
            <span className="pr-1 cursor-pointer">아이디 · 비밀번호 찾기</span>
          </Link>
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
    </div>
  );
}

export default MemberLogin;
