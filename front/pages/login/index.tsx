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
              <MemberLogin />
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
