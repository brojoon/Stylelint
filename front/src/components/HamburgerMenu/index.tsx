import React, { useCallback, VFC } from 'react';
import { HamburgerMenuContainer } from './style';

interface Props {
  IsScrollTop: number;
  IsMenuActive: boolean;
  setIsMenuActive: (e: any) => void;
}

const HamburgerMenu: VFC<Props> = ({
  IsScrollTop,
  IsMenuActive,
  setIsMenuActive,
}) => {
  const onClickBackground = useCallback(() => {
    setIsMenuActive((prev: boolean) => !prev);
  }, []);
  return (
    <HamburgerMenuContainer
      IsScrollTop={IsScrollTop}
      IsMenuActive={IsMenuActive}
    >
      <div className="menu-container">
        <div className="menu-wrapper">
          <ul>
            <li>상의</li>
            <li>하의</li>
            <li>코트</li>
            <li>치마</li>
            <li>니트</li>
          </ul>
          <ul>
            <li>상의</li>
            <li>하의</li>
            <li>코트</li>
            <li>치마</li>
            <li>니트</li>
          </ul>
          <ul>
            <li>상의</li>
            <li>하의</li>
            <li>코트</li>
            <li>치마</li>
            <li>니트</li>
          </ul>
          <ul>
            <li>상의</li>
            <li>하의</li>
            <li>코트</li>
            <li>치마</li>
            <li>니트</li>
          </ul>
          <ul>
            <li>상의</li>
            <li>하의</li>
            <li>코트</li>
            <li>치마</li>
            <li>니트</li>
          </ul>
        </div>
      </div>
      <div className="bg-container" onClick={onClickBackground}>
        <div className="bg"></div>
      </div>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
