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
            <li>블라우스</li>
            <li>베이직 셔츠</li>
            <li>코튼 셔츠</li>
            <li>오픈카라</li>
            <li>빅카라넥</li>
            <li>배색 리본 셔링</li>
          </ul>
          <ul>
            <li>자켓</li>
            <li>테일러드카라</li>
            <li>스커트 셋업</li>
            <li>라운드넥 트위드</li>
            <li>테일러드 트위드</li>
            <li>룩스 바이오워싱</li>
          </ul>
          <ul>
            <li>셔츠</li>
            <li>베이직 맨투맨</li>
            <li>슬림핏 라운드넥</li>
            <li>셔링 랩 디자인 티셔츠</li>
            <li>골지 U넥 니트 티셔츠</li>
            <li>루즈핏 맨투맨</li>
          </ul>
          <ul>
            <li>스커트</li>
            <li>뒷밴딩 미니 큐롯</li>
            <li>캉캉 미니 큐롯</li>
            <li>파스텔 컬러 플레어</li>
            <li>히든 뱅딩 생지</li>
            <li>엘리 에나멜 미니</li>
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
