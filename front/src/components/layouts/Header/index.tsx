import BasicInput from '@components/Basic/BasicInput';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between px-[4%] items-center h-[70px] border-b ">
      <div className="flex items-center font-bold cursor-pointer before:bg-[url('/img/햄버거바.png')] text-[1rem] text-[#73675c] before:mr-[2px] before:bg-cover before:w-[1.2rem] before:h-[1.2rem] before:inline-block">
        전체 카테고리
      </div>
      <h1 className="flex flex-col items-center text-[1.5rem] font-bold">
        STYLELINT
      </h1>
      <nav className="flex items-center">
        {/* <div className="mr-[1.5rem]">
          <form className="flex">
            <BasicInput
              type="text"
              name="search"
              placeholder="상품명으로 찾아보세요"
              maxLength={20}
              style="w-full bg-[url('~@../../../public/img/search.svg')] bg-[#f6f6f6] bg-[center_left_0.3rem] bg-[length:1.3rem_1.3rem] bg-no-repeat border outline-none pl-[2rem] pr-[0.3rem] py-[6px] text-[0.9rem] text-[#73675c] text-justify"
            />
          </form>
        </div> */}
        <ul className="flex items-center text-[0.6rem]">
          <li className="ml-[1rem]">
            <Link href="/profile">
              <div className="flex justify-center items-center flex-col">
                <img width="24px" height="24px" src="/img/profile.svg" />
                <span>내정보</span>
              </div>
            </Link>
          </li>
          <div className="after:border-r after:inline-block after:w-[1px] mx-[0.5rem] after:h-[1rem]"></div>
          <li>
            <Link href="/cart">
              <div className="flex justify-center items-center flex-col">
                <img width="24px" height="24px" src="/img/cart.svg" />
                <span>장바구니</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
