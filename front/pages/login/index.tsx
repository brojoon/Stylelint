import MemberLogin from '@components/MemberLogin';
import NonMemberOrder from '@components/NonMemberOrder';
import React from 'react';

import cookies from 'next-cookies';

function Login() {
  return (
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
  );
}

export default Login;
