import styled from '@emotion/styled';

export const MainEventSliderContainer = styled.div<{ PaginationIndex: number }>`

  position: relative;
  margin: 0 auto;
  max-width: 1300px;
  height: 18vw;
  max-height: 230px;
  margin-top: 100px;

  overflow: hidden;
  margin-bottom: 100px;

  .event-slide-wrapper {

    transform: ${(props) => {
      return `translateX(${(props.PaginationIndex - 1) * -50}%)`;
    }};
    width: 100%;
    transition: transform cubic-bezier(0.85, 0, 0.15, 1) 1s;
  }

  .slide-radio {
    display: none;
  }

  .pagination {
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    z-index: 1;
    justify-content: center;
    align-items: center
  }
  .pagination label {
    width: 10px;
    height: 10px;
    padding: 16px;
    opacity: 0.3;
    cursor: pointer;
    position: relative;
    transition: opacity 0.3s ease-in-out;
  
  }

  .pagination label:before
  {
    content: '';
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .pagination label:before {
    width: 10px;
    height: 10px;
    background: #000;
  }

  #event-slide-radio-1: checked ~.pagination label:nth-of-type(1),
  #event-slide-radio-2: checked ~.pagination label:nth-of-type(2),
  #event-slide-radio-3: checked ~.pagination label:nth-of-type(3),
  #event-slide-radio-4: checked ~.pagination label:nth-of-type(4),
  #event-slide-radio-5: checked ~.pagination label:nth-of-type(5),
  #event-slide-radio-6: checked ~.pagination label:nth-of-type(6),
  #event-slide-radio-7: checked ~.pagination label:nth-of-type(7) {
    opacity: 0.8;
  }

.slide-img-wrapper {
    position: absolute;
    width: 48%;
    margin: 0 1%;

  }

  .slide-img-wrapper img {
    width: 100%;

  }

.slide-img-wrapper:nth-of-type(1) {

    left: 0%;

  }

.slide-img-wrapper:nth-of-type(2) {
    left: 50%;

  }

.slide-img-wrapper:nth-of-type(3) {
    left: 100%;
  }

.slide-img-wrapper:nth-of-type(4) {
    left: 150%;
  }

.slide-img-wrapper:nth-of-type(5) {
    left: 200%;
  }

.slide-img-wrapper:nth-of-type(6) {
    left: 250%;
  }

.slide-img-wrapper:nth-of-type(7) {
    left: 300%;
  }

.slide-img-wrapper:nth-of-type(8) {
    left: 350%;
  }
`;
