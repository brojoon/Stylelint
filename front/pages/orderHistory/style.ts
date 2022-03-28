import styled from 'styled-components';

export const OrderHistoryContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1%;

  .order-history-wrapper {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    padding: 30px 0px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;
    width: 100%;
    font-size: 28px;
    line-height: 29px;
    font-weight: 700;
  }

  .empty-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
  }

  .empty-container h2 {
    font-size: 62px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .empty-container > span {
    margin-top: 18px;
    font-size: 22px;
    font-weight: 500;
  }
`;
