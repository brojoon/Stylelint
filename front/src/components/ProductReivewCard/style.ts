import styled from 'styled-components';

export const ProductReviewCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  border-bottom: 1px solid #ececec;
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    color: #5e636d;
    margin-left: 10px;
  }

  & > div:nth-child(2) > div > span {
    white-space: nowrap;
    font-size: 0.9rem;
  }

  & > div:nth-child(2) > div > span:nth-child(1) {
    white-space: nowrap;
    color: #9ba0a8;
  }
`;
