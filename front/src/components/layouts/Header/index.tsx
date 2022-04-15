import HamburgerMenu from '@components/HamburgerMenu';
import { useIsMobile, useScroll } from '@utils/Hooks';
import Link from 'next/link';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { MainHeader, BackgroundHeader, Banner } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutFetch } from '@store/modules/logout';
import { removeToken } from '@store/modules/login';
import { useAppDispatch } from '@store/index';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { scrollY } = useScroll();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.login.token);
  const isMobile = useIsMobile();

  const onClickMenuBtn = useCallback(() => {
    alert('hi');
    setIsMenuActive((prev) => !prev);
  }, []);

  const onClickLogout = useCallback(() => {
    dispatch(LogoutFetch());
  }, [dispatch, LogoutFetch, removeToken, useQuery]);
  return (
    <>
      <Banner>
        <span>
          스타일린트는 <b>당일배송</b>이 원칙입니다
        </span>
      </Banner>
      <BackgroundHeader />
      <MainHeader IsScrollTop={scrollY} IsMobile={isMobile}>
        <div className="wrapper">
          <div className="container">
            <div className="logo-wrapper">
              <button
                className={`all-menu ${isMenuActive ? 'active' : 'none'}`}
                onClick={onClickMenuBtn}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="logo">
                <Link href="/">
                  <h1>
                    <img src="/img/logo.png" />
                  </h1>
                </Link>
              </div>
            </div>
            <div className="info">
              <ul>
                <li>
                  {!isMobile && (
                    <div>
                      <img width="26px" height="26px" src="/img/search.svg" />
                    </div>
                  )}
                </li>
                <li>
                  <Link href={isLogin ? '/profile' : '/login'}>
                    <div>
                      <img width="26px" height="26px" src="/img/profile.svg" />
                    </div>
                  </Link>
                  {isLogin ? (
                    <ul className="subBox">
                      <li>
                        <Link href="/profile">회원정보</Link>
                      </li>
                      <li>
                        <Link
                          href="/orderHistory
                        "
                        >
                          배송조회
                        </Link>
                      </li>
                      <li>
                        <button onClick={onClickLogout}>로그아웃</button>
                      </li>
                    </ul>
                  ) : (
                    <ul className="subBox">
                      <li>
                        <Link href="/login">로그인</Link>
                      </li>
                      <li>
                        <Link href="/signup">회원가입</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href={isLogin ? '/basket' : '/login'}>
                    <div>
                      <img width="26px" height="26px" src="/img/cart.svg" />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <HamburgerMenu
          IsScrollTop={scrollY}
          IsMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      </MainHeader>
    </>
  );
};

export default Header;
