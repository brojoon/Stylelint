import styled from '@emotion/styled';

export const HamburgerMenuContainer = styled.div<{
  IsScrollTop: number;
  IsMenuActive: boolean;
}>`
  visibility: ${(props) => (props.IsMenuActive ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.IsMenuActive ? '1' : '0')};

  z-index: 2000;
  width: 100%;
  position: absolute;
  top: ${(props) => (props.IsScrollTop > 60 ? '66px' : '90px')};
  height: 100vh;
  transition: all 500ms ease;

  .bg-container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  .bg {
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
