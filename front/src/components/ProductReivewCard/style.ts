import styled from 'styled-components';

export const ProductReviewCardWrapper = styled.div<{ ReviewStarIndex: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ececec;

  .start-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .start-wrapper > span:nth-child(1) {
    background-image: url(/img/review-star-text.svg);
    background-size: 708px 690px;
    background-position: -601px -79px;
    width: 74px;
    height: 14px;
    display: inline-block;
    position: relative;
    vertical-align: top;
  }

  .start-wrapper > span:nth-child(1) > span {
    background-image: url(/img/review-star-text.svg);
    background-size: 708px 690px;
    background-position: -601px -101px;
    width: ${(props) => props.ReviewStarIndex * 20 + '%;'}
    height: 14px;
    display: block;
  }

  .start-wrapper > strong {
    margin-left: 5px;
  }
  & > div:nth-child(2) {
    display: flex;
    color: #999999;
    align-items: center;

  }

  .review-info > span {
    white-space: nowrap;
    font-size: 0.8rem;
    color: #999;
  }


  .review-info > span:nth-child(2):before {
    display: inline-block;
    width: 2px;
    height: 2px;
    margin: 0.8rem 5px 0 7px;
    background-color: #d8d8d8;
    vertical-align: top;
    content: '';
  }

  .review-text {
    margin-top 10px;
  }

  .review-text > span{
    color: #5f5f5f;  
  }
  
`;
