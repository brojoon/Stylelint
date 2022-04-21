import HamburgerMenu from '@components/HamburgerMenu';
import { useIsMobile, useIsTablet1024, useScroll } from '@utils/Hooks';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { MainHeader, BackgroundHeader, Banner } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutFetch } from '@store/modules/logout';
import { removeToken } from '@store/modules/login';
import { useQuery } from 'react-query';
import Router from 'next/router';
import fetcher from '@utils/utils/fetcher';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMobileProfileBar, setIsMobileProfileBar] = useState(false);
  const [isSearchModal, setIsSearchModal] = useState(false);
  const { scrollY } = useScroll();
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const isTablet1024 = useIsTablet1024();

  const { data: user, refetch } = useQuery('user', () =>
    fetcher(`api/user/profile`),
  );

  useEffect(() => {
    if (!isTablet1024) setIsMobileProfileBar(false);
  }, [isTablet1024]);

  const onClickMenuBtn = useCallback(() => {
    setIsMenuActive((prev) => !prev);
  }, []);

  const onClickSearch = useCallback(() => {
    setIsSearchModal(true);
  }, []);

  const onClickProfile = useCallback(() => {
    if (isTablet1024) {
      setIsMobileProfileBar((prev) => !prev);
      return;
    }

    if (user) {
      Router.push('/profile');
    } else {
      Router.push('/login');
    }
  }, [isTablet1024, user, isMobileProfileBar]);

  const onClickSubProfile = useCallback(() => {
    if (isTablet1024) {
      setIsMobileProfileBar(false);
    }
    if (user) {
      Router.push('/profile');
    } else {
      Router.push('/login');
    }
  }, [isTablet1024, user]);

  const onClickLoginBtn = useCallback(() => {
    if (isTablet1024) {
      setIsMobileProfileBar(false);
    }
    Router.push('/login');
  }, [isTablet1024, user]);

  const onClickSignup = useCallback(() => {
    if (isTablet1024) {
      setIsMobileProfileBar(false);
    }
    Router.push('/signup');
  }, [isTablet1024]);

  const onClickOrderHistory = useCallback(() => {
    if (isTablet1024) {
      setIsMobileProfileBar(false);
    }
    Router.push('/orderHistory');
  }, [isTablet1024]);

  const onClickLogout = useCallback(async () => {
    await dispatch(LogoutFetch());
    setIsMobileProfileBar(false);
    refetch();
  }, [dispatch, LogoutFetch, removeToken, useQuery]);

  return (
    <>
      <>
        <Banner>
          <span>
            스타일린트는 <b>당일배송</b>이 원칙입니다
          </span>
        </Banner>
        <BackgroundHeader />
        <MainHeader
          IsScrollTop={scrollY}
          IsMobile={isMobile}
          IsTablet1024={isTablet1024}
          IsMobileProfileBar={isMobileProfileBar}
        >
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
                    <div onClick={onClickProfile}>
                      <img width="26px" height="26px" src="/img/profile.svg" />
                    </div>

                    {user ? (
                      <ul className="subBox">
                        <li onClick={onClickSubProfile}>회원정보</li>
                        <li onClick={onClickOrderHistory}>배송조회</li>
                        <li>
                          <button onClick={onClickLogout}>로그아웃</button>
                        </li>
                      </ul>
                    ) : (
                      <ul className="subBox">
                        <li onClick={onClickLoginBtn}>로그인</li>
                        <li onClick={onClickSignup}>회원가입</li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href={user ? '/basket' : '/login'}>
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
    </>
  );
};

export default Header;
