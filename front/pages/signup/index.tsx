import BasicBtn from '@components/Basic/BasicBtn';
import BasicInput from '@components/Basic/BasicInput';
import React, { useCallback, useState } from 'react';
import { SignupContainer } from './style';

const signup = () => {
  const [select, setSelect] = useState('');
  const onSubmitSinup = useCallback(() => {}, []);
  const onChangeEmailSelect = useCallback((e) => {
    setSelect(e.target.value);
  }, []);

  return (
    <SignupContainer className="flex justify-center items-center bg-[#f1f1f1] py-[150px] ">
      <div className="flex justify-center items-center flex-col bg-[#ffffff] p-[50px] w-[600px]">
        <h2 className="font-extrabold text-[2rem] mb-5">STYLELINT</h2>
        <section className="flex flex-col">
          <label>
            <span className="text-[1rem]">아이디</span>
            <BasicInput
              type="text"
              name="id"
              placeholder="영문 혹은 영문+숫자, 4~20자."
              maxLength={20}
              style="h-[50px] w-full mb-5 outline-neutral-400 border rounded px-3"
            />
          </label>
          <label className="mb-2.5">
            <span className="text-[1rem]">비밀번호</span>
            <BasicInput
              type="password"
              name="password"
              placeholder="영어, 숫자, 특수문자 중 2가지 이상 10~20자"
              maxLength={20}
              style="h-[50px] w-full outline-neutral-400 rounded px-3 border "
            />
          </label>
          <BasicInput
            type="password"
            name="password"
            placeholder="비밀번호 확인"
            maxLength={20}
            style="h-[50px] w-full mb-5 outline-neutral-400 rounded px-3 border "
          />
          <label>
            이메일
            <div className="flex items-center">
              <BasicInput
                type="text"
                name="email"
                placeholder="이메일 앞자리"
                maxLength={20}
                style="h-[50px] w-full  outline-neutral-400 rounded px-3 border "
              />
              <span className="px-2.5">@</span>
              <BasicInput
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
              className="border rounded outline-neutral-400 mt-5 h-[50px] option-email-sub"
              name="email"
              onChange={onChangeEmailSelect}
            >
              <option>직접입력</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="nate.com">nate.com</option>
              <option value="daum.com">daum.com</option>
            </select>
            <span className="icoArrow">
              <img src="./img/select_dropdown.png" alt="" />
            </span>
          </div>
          <BasicBtn
            onClickBtn={onSubmitSinup}
            Content="회원가입"
            style="w-full  mt-20 bg-blue-600 rounded text-white py-3 font-semibold"
          />
        </section>
      </div>
    </SignupContainer>
  );
};

export default signup;
