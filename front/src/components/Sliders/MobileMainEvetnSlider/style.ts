import styled from 'styled-components';

export const MainEventSliderContainer = styled.div<{
  PaginationIndex: number;
  SlideIndex: number;
  posX: string;
  IsTransition: boolean;
}>`

  position: relative;
  margin: 0 auto;
  max-width: 1300px;
  height: 40vw;

  margin-top: 15px;
  overflow: hidden;
  margin-bottom: 100px;
  margin: 20px;

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

  #event-slide-radio-1: checked ~.pagination label:nth-child(1),
  #event-slide-radio-2: checked ~.pagination label:nth-child(2),
  #event-slide-radio-3: checked ~.pagination label:nth-child(3),
  #event-slide-radio-4: checked ~.pagination label:nth-child(4),
  #event-slide-radio-5: checked ~.pagination label:nth-child(5),
  #event-slide-radio-6: checked ~.pagination label:nth-child(6),
  #event-slide-radio-7: checked ~.pagination label:nth-child(7),
  #event-slide-radio-8: checked ~.pagination label:nth-child(8) {
    opacity: 0.8;
  }

.event-slide-wrapper { 
    width: 800%;
    height: 100%;
  
    transform: ${(props) => `translateX(${props.posX}%)`};
    transition: ${(props) =>
      props.IsTransition
        ? 'transform cubic-bezier(0.60, 0.20, 0.30, 1) 0.5s'
        : ''};
  }


.slide-img-wrapper1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: url(/img/main-event-slideImg/event_1.png) no-repeat;
    width: 12.5%;
    background-size: 100% 100%;
  }

.slide-img-wrapper2 {

  position: absolute;
  top: 0;
  left: 12.5%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_2.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;

  }

.slide-img-wrapper3 {

  position: absolute;
  top: 0;
  left: 25%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_3.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;
  }

.slide-img-wrapper4 {

  position: absolute;
  top: 0;
  left: 37.5%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_4.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;
  }

.slide-img-wrapper5 {

  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_5.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;
  }

.slide-img-wrapper6 {

  position: absolute;
  top: 0;
  left: 62.5%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_6.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;
  }

.slide-img-wrapper7 {

  position: absolute;
  top: 0;
  left: 75%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_7.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;
  }

.slide-img-wrapper8 {

  position: absolute;
  top: 0;
  left: 87.5%;
  height: 100%;
  background: url(/img/main-event-slideImg/event_8.png) no-repeat;
  width: 12.5%;
  background-size: 100% 100%;
  }
`;
