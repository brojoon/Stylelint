import styled from 'styled-components';

export const Banner = styled.div`
  position: fixed;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: white;
  z-index: 50;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const BackgroundHeader = styled.div`
  height: 125px;
`;

export const MainHeader = styled.header<{ IsScrollTop: number }>`

  position: fixed;
  top: 0;
  left: 0;
  height: ${(props) => (props.IsScrollTop > 60 ? '66px' : '90px')};
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eeeeee;
  z-index: 2000;
  transition: all 500ms ease;
  transform: ${(props) =>
    props.IsScrollTop > 60 ? 'translateY(0)' : 'translateY(35px)'};
  .wrapper {

    max-width: 1330px;
    margin: 0 auto;
    padding: 0 1%;
    background: #fff;
    height: ${(props) => (props.IsScrollTop > 60 ? '65px' : '89px')};
    transition: all 500ms ease;
    align-items: center;
  }

  .container {
    width: 1320px;
    display: flex;
    align-items: center;
    justify-content: between;
  }

  .all-menu {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  button.all-menu span {
    display: block;
    position: absolute;

    width: 1.3rem;
    height: 0.1875rem;
    background: #3c3c3c;
    transition-duration: 0.4s;
  }

  button.all-menu.active span:nth-child(1) {
    top: 19px;

    width: 23px;
    transform: rotate(45deg);
  }

  button.all-menu.active span:nth-child(2) {
    opacity: 0;
    transform: translateX(-30px);
  }

  button.all-menu.active span:nth-child(3) {
    top: 19px;

    width: 23px;
    transform: rotate(-45deg);
  }

  button.all-menu span:nth-child(1) {
    top: 11px;
  }

  button.all-menu span:nth-child(2) {
    top: 19px;
  }

  button.all-menu span:nth-child(3) {
    top: 27px;
  }

  .logo {

    width: 11%;
    font-weight: 700;
  }
  .logo h1 {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .category {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  .category > li {
    position: relative;
    display: inline-block;
    color: #111;
    padding: 0 1.3%;
  }

  .info {
    position: relative;
    display: flex;
    align-items: center;
    width: 8%;
    min-width: 176px;
  }

  .info > ul {
    display: flex;
    justify-centent: center;
    align-items: center;
  }

  .info > ul > li {
    cursor: pointer;
  }

  .info > ul > li:nth-child(2) {
    margin-left: 2rem;
  }

  .info > ul > li:nth-child(3) {
    margin-left: 2rem;
    position: relative;
    padding: ${(props) => (props.IsScrollTop > 60 ? '19px 0' : '32px 0')};

  }

  .info > ul > li:nth-child(3):hover {
    .subBox {
      display: flex;
    }
  }

  .subBox:hover {
    display: flex;
  }

  .subBox {
    position: absolute;
    width: 6.25rem;
    z-index: 40;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    transition: all 500ms ease;
    transform: ${(props) =>
      props.IsScrollTop > 60
        ? 'translate(40%, 20px);'
        : 'translate(40%, 32px);'}
    background: #fff;
    padding: 0.8rem;
    border: 1px solid #eeeeee;
    font-size: 0.875rem;
    font-weight: 600;
    color: #111111;
  }

  .subBox li {
    white-space: nowrap;
    margin: 0.45rem 0;
  }


`;
