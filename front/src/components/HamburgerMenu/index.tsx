import Link from 'next/link';
import React, { useCallback, VFC } from 'react';
import { HamburgerMenuContainer } from './style';

interface Props {
  IsScrollTop: number;
  IsMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: VFC<Props> = ({
  IsScrollTop,
  IsMenuActive,
  setIsMenuActive,
}) => {
  const onClickBackground = useCallback(() => {
    setIsMenuActive((prev) => !prev);
  }, []);

  const onClickClose = useCallback(() => {
    setIsMenuActive(false);
  }, []);
  return (
    <HamburgerMenuContainer
      IsScrollTop={IsScrollTop}
      IsMenuActive={IsMenuActive}
    >
      <div className="menu-container">
        <div className="menu-wrapper">
          <ul>
            <li onClick={onClickClose}>
              <Link href="/product/blouse">블라우스</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/blouse/bs4691">베이직 셔츠</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/blouse/bs5039">코튼 셔츠</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/blouse/bs6704">오픈카라</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/blouse/bs6709">빅카라넥</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/blouse/bs6714">배색 리본 셔링</Link>
            </li>
          </ul>
          <ul>
            <li onClick={onClickClose}>
              <Link href="/product/jacket">자켓</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/jacket/jk1296">테일러드카라</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/jacket/jk1442">스커트 셋업</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/jacket/jk1962">라운드넥 트위드</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/jacket/jk1989">테일러드 트위드</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/jacket/jk2091">룩스 바이오워싱</Link>
            </li>
          </ul>
          <ul>
            <li onClick={onClickClose}>
              <Link href="/product/shirts">셔츠</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/shirts/ts1935">베이직 맨투맨</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/shirts/ts2747">슬림핏 라운드넥</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/shirts/ts2967">셔링 랩 디자인 티셔츠</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/shirts/ts2985">골지 U넥 니트 티셔츠</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/shirts/ts3097">루즈핏 맨투맨</Link>
            </li>
          </ul>
          <ul>
            <li onClick={onClickClose}>
              <Link href="/product/skirt">스커트</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/skirt/ps3732">뒷밴딩 미니 큐롯</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/skirt/ps3800">캉캉 미니 큐롯</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/skirt/sk5413">파스텔 컬러 플레어</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/skirt/sk5580">히든 뱅딩 생지</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/skirt/sk5592">엘리 에나멜 미니</Link>
            </li>
          </ul>
          <ul>
            <li onClick={onClickClose}>
              <Link href="/product/dress">원피스</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/dress/op13507">베이직 스트랩 미니 셔츠</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/dress/op13547">셔츠 배색 미니</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/dress/op13550">블라썸 쉬폰 플라워</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/dress/op13561">클라라 배색 플레어</Link>
            </li>
            <li onClick={onClickClose}>
              <Link href="/product/dress/op13616">플라워 언발셔링</Link>
            </li>
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
