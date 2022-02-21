import { useScroll } from '@utils/Hooks';
import Link from 'next/link';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { MainHeader, BackgroundHeader, Banner } from './style';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { scrollY } = useScroll();

  const onClickMenuBtn = useCallback(() => {
    setIsMenuActive((prev) => !prev);
  }, []);
  return (
    <>
      <Banner>
        <span>
          스타일린트는 <b>당일배송</b>이 원칙입니다
        </span>
      </Banner>
      <BackgroundHeader />
      <MainHeader IsScrollTop={scrollY}>
        <div className="wrapper">
          <div className="container">
            <button
              className={`all-menu ${isMenuActive ? 'active' : 'none'}`}
              onClick={onClickMenuBtn}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="logo">
              <h1>STYLELINT</h1>
            </div>

            <ul className="category">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>

            <div className="info">
              <ul>
                <li>
                  <div>
                    <img width="26px" height="26px" src="/img/search.svg" />
                  </div>
                </li>
                <li>
                  <Link href="/basket">
                    <div>
                      <img width="26px" height="26px" src="/img/cart.svg" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <div>
                      <img width="26px" height="26px" src="/img/profile.svg" />
                    </div>
                  </Link>

                  <ul className="subBox">
                    <li>
                      <Link href="/profile">로그인</Link>
                    </li>
                    <li>
                      <Link href="/profile">회원가입</Link>
                    </li>
                    <li>
                      <Link href="/profile">배송조회</Link>
                    </li>
                  </ul>
                  {/* <ul className="subBox">
                  <li>
                    <Link href="/profile">회원정보</Link>
                  </li>
                  <li>
                    <Link href="/profile">배송조회</Link>
                  </li>
                  <li>
                    <Link href="/profile">로그아웃</Link>
                  </li>
                </ul> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MainHeader>
    </>
  );
};

export default Header;
