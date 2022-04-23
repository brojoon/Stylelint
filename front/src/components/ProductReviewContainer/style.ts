import styled from 'styled-components';

export const ProductReviewWrapper = styled.div`
  padding: 50px 20px 50px;
  width: 100%;

  .header-wrapper {
    height: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #a4a9b0;
  }

  .header-wrapper > h3 {
    font-size: 1.4rem;
    letter-spacing: -1px;
    color: #1e2732;
    font-weight: 600;
  }

  .header-wrapper > h3 > span {
    margin-left: 3px;
    font-weight: 400;
    color: #2e8de5;
    vertical-align: baseline;
  }

  .review-modal-btn {
    display: block;
    text-align: center;
    border: 1px solid #ddd;
    width: 80px;
    height: 29px;
    color: #424242;
    font-size: 13px;
  }
`;
