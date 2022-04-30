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

  .menu-container {
    background: #ffffff;
    position: relative;
    width: 100%;
    z-index: 1000;
  }

  .menu-wrapper {
    padding: 0 15px;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .menu-wrapper > ul {
    display: flex;
    padding: 50px 5px;
    flex-direction: column;
  }

  .menu-wrapper > ul > li {
    position: relative;
    display: block;
    font-size: 0.8125rem;
    color: #636363;
    margin-bottom: 18px;
  }

  .menu-wrapper > ul > li:nth-of-type(1) {
    color: #000;
    font-size: 1.0625rem;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;
