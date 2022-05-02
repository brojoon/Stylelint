import HambergerMenuLinkWrapper from '@components/HambergerMenuLinkWrapper';
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
      <HambergerMenuLinkWrapper onClickClose={onClickClose} />
      <div className="bg-container" onClick={onClickBackground}>
        <div className="bg"></div>
      </div>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
