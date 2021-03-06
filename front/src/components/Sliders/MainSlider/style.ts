import styled from '@emotion/styled';

export const SlideContainer = styled.div`
  margin-bottom: 30px;

  .slide-radio {
    display: none;
  }

  .pagination {
    position: absolute;
    left: 7%;
    transform: translateX(-50%);
    bottom: 3%;
    z-index: 50;
  }
  .pagination label {
    width: 24px;
    height: 24px;
    padding: 16px;
    opacity: 0.3;
    cursor: pointer;
    position: relative;
    transition: opacity 0.3s ease-in-out;
  }

  .pagination label:before,
  .pagination label:after {
    content: '';
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .pagination label:before {
    width: 12px;
    height: 12px;
    background: #000;
  }


  #slide-radio-1: checked ~.pagination label:nth-of-type(1),
  #slide-radio-2: checked ~.pagination label:nth-of-type(2),
  #slide-radio-3: checked ~.pagination label:nth-of-type(3),
  #slide-radio-4: checked ~.pagination label:nth-of-type(4),
  #slide-radio-5: checked ~.pagination label:nth-of-type(5) {
    opacity: 0.8;
  }



`;

export const SlideWrapper = styled.section<{
  posX: string;
  IsTransition: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${(props) => `translateX(${props.posX}%)`};
  transition: ${(props) =>
    props.IsTransition ? 'transform cubic-bezier(0.85, 0, 0.15, 1) 1s' : ''};

  .slide-img-bg-1 {
    background: url(/img/page1.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide-img-bg-2 {
    background: url(/img/page2.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide-img-bg-3 {
    background: url(/img/page3.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide-img-bg-4 {
    background: url(/img/page4.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide-img-bg-5 {
    background: url(/img/page5.webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .active {
    opacity: 1;
    transform: translateY(-5%);
    transition: all ease-in 0.4s;
    transition-delay: 0.6s;
  }
`;
