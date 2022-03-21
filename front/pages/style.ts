import styled from 'styled-components';

export const HomeContainer = styled.section`
  & > div h3 {
    font-weight: 600;

    display: inline-block;
    margin: 20px 0 15px 20px;
    font-size: 20px;
  }

  .product-more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0 45px;
  }

  .product-more-btn > a {
    border: 1px solid #cdcdcd;
    border-radius: 6px;
    color: #8d8d8d;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    padding: 11px 53px;
    color: #8d8d8d;
    font-size: 14px;
  }
`;
