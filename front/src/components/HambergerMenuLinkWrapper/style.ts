import styled from '@emotion/styled';

export const ProductLinkContainer = styled.div`
  background: #ffffff;
  position: relative;
  width: 100%;
  z-index: 1000;

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
