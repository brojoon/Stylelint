import MemberLogin from '@components/MemberLogin';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import fetcher from '@utils/utils/fetcher';
import { useQuery } from 'react-query';
import LoadingCircle from '@components/LoadingCircle';

function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: user } = useQuery('user', () => fetcher(`api/user/profile`));
  useEffect(() => {
    if (user == false) setIsLoading(false);
    else if (user) Router.push('/');
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <div className="flex flex-nowrap justify-center py-10 bg-[#f1f1f1]">
          <div className="flex flex-col items-center border-[#eceef2] border rounded-[4px] px-10 py-12 w-[400px] bg-[#ffffff]">
            <h2 className="font-bold text-xl mb-[20px]">로그인</h2>
            <section className="w-[100%]">
              {/* <div className="flex justify-center">
          <div className="flex justify-center items-center bg-[#f3f8ff] w-1/2 h-[50px] whitespace-nowrap py-1 px-10 font-semibold text-xl border rounded-l  border-[#d7dbe6]">
            <h3 className="">기존 회원</h3>
          </div>
          <div className="flex justify-center items-center w-1/2 h-[50px] whitespace-nowrap py-1 px-10 font-semibold text-xl border-r border-t border-b border-[#d7dbe6] rounded-r">
            <h3>비회원 주문조회</h3>
          </div>
        </div> */}
              <MemberLogin />
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
