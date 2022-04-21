import BasicBtn from '@components/Basic/BasicBtn';
import BasicInput from '@components/Basic/BasicInput';
import React, { useCallback, useEffect, useState } from 'react';
import { SignupContainer } from './style';
import { useDispatch } from 'react-redux';
import { SignupFetch } from '@store/modules/signup';
import isPassword from '@utils/utils/regexPassword';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import Router from 'next/router';
import LoadingCircle from '@components/LoadingCircle';

// interface signupRequest {
//   userId: string;
//   password: string;
//   email: string;
// }

const signup = () => {
  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordCheck, setInputPasswordCheck] = useState('');
  const [inputEmailHead, setInputEmailHead] = useState('');
  const [inputEmailSub, setInputEmailSub] = useState('');
  const [idErrorText, setIdErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [passwordCheckErrorText, setPasswordCheckErrorText] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { data: user } = useQuery('user', () => fetcher(`api/user/profile`));
  const dispatch = useDispatch();

  // const isLogin = useSelector((state: any) => state.login.token);

  // useEffect(() => {
  //   if (!isLogin) Router.push('/');
  // }, [isLogin]);

  useEffect(() => {
    if (user == false) setIsLoading(false);
    else if (user) Router.push('/');
  }, [user]);

  const onSubmitSinup = useCallback(async () => {
    if (!inputIdValue) {
      setIdErrorText('아이디를 입력해주세요');
      return;
    }
    if (!inputPassword) {
      setPasswordErrorText('비밀번호를 입력해주세요');
      return;
    }
    if (!inputPasswordCheck) {
      setPasswordCheckErrorText('비밀번호 확인을 입력해주세요');
      return;
    }
    if (inputPassword !== inputPasswordCheck) {
      setPasswordCheckErrorText('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isPassword(inputPassword)) {
      setPasswordCheckErrorText(
        '8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합해서 입력해주세요',
      );
      return;
    }

    if (!inputEmailHead) {
      setEmailErrorText('이메일을 입력 해주세요');
      return;
    }

    if (!inputEmailSub) {
      setEmailErrorText('이메일 뒷자리를 입력해주세요');
      return;
    }
    const res: any = await dispatch(
      SignupFetch({
        userId: inputIdValue,
        password: inputPassword,
        email: inputEmailHead + '@' + inputEmailSub,
        address: '',
      }),
    );

    if (res?.error?.message == 'Request failed with status code 403')
      setIdErrorText('이미 사용중인 아이디 입니다.');
  }, [
    inputIdValue,
    inputPassword,
    inputPasswordCheck,
    inputEmailHead,
    inputEmailSub,
  ]);

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
  const onChangeEmailSelect = useCallback((e) => {
    setInputEmailSub(e.target.value);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <SignupContainer className="flex justify-center items-center bg-[#f1f1f1] py-[150px] ">
          <div className="flex justify-center items-center flex-col bg-[#ffffff] p-[50px] w-[600px]">
            <h2 className="font-extrabold text-[2rem] mb-5">STYLELINT</h2>
            <section className="flex flex-col">
              <label>
                <span className="text-[1rem]">아이디</span>
                <BasicInput
                  setInputValue={setInputIdValue}
                  errorText={idErrorText}
                  setErrorText={setIdErrorText}
                  inputValue={inputIdValue}
                  type="text"
                  name="id"
                  placeholder="아이디를 입력해주세요"
                  maxLength={15}
                  style="h-[50px] w-full mb-2.5 outline-neutral-400 border rounded px-3"
                />
              </label>
              <form>
                <label>
                  <span className="text-[1rem]">비밀번호</span>
                  <BasicInput
                    setInputValue={setInputPassword}
                    errorText={passwordErrorText}
                    setErrorText={setPasswordErrorText}
                    inputValue={inputPassword}
                    type="password"
                    name="password"
                    placeholder="8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합"
                    maxLength={16}
                    style="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
                  />
                </label>
              </form>
              <form>
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
              </form>
              <label>
                이메일
                <div className="flex items-center">
                  <input
                    onChange={onChangeEmail}
                    value={inputEmailHead}
                    autoComplete="new-password"
                    type="text"
                    name="email"
                    placeholder="이메일 앞자리"
                    maxLength={15}
                    className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
                  />
                  <span className="px-2.5">@</span>
                  <input
                    onChange={onChangeSubEmail}
                    value={inputEmailSub}
                    autoComplete="new-password"
                    type="text"
                    name="emailsub"
                    placeholder="이메일 뒷자리"
                    maxLength={15}
                    className="h-[50px] w-full mb-2.5 outline-neutral-400 rounded px-3 border "
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
                  <img src="./img/select_dropdown.png" alt="select-arrow" />
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
      )}
    </>
  );
};

export default signup;
