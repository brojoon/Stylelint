import React from 'react';
import Link from 'next/link';
const PreHeader = () => {
  return (
    <div className="flex justify-end h-[45px] border-b items-center px-[4%] text-[0.7rem] text-[#88888f] font-semibold">
      <div className="flex items-center after:border-r after:m-[0.5rem] after:inline-block after:w-[1px] after:h-[0.6rem]">
        <Link href="/login">로그인</Link>
      </div>
      <div>
        <Link href="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default PreHeader;
