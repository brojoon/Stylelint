import styled from 'styled-components';

export const ResultContainer = styled.section`
  & .title-container {
    border-bottom: 1px solid #eeeeee;
  }

  & .title-wrapper {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
  }

  & .title {
    font-size: 2.375rem;
    color: #363636;
    font-weight: bold;
    letter-spacing: -1px;

    width: 100%;
    margin: 20px 0;

    background: url(/img/purchase_pagenation.png) right -208px no-repeat;
  }
`;
