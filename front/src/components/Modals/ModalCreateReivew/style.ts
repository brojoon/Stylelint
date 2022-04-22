import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1) !important;
  z-index: 6000 !important;
`;

export const ModalBasketContainer = styled.div<{
  IsMobile: boolean;
  ReviewStarIndex: number;
}>`
  .modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6200;
    width: ${(props) => (props.IsMobile ? '300px;' : '400px;')}
    


    padding: 40px 20px 32px 20px;
    text-align: center;
    background-color: white;
    border-radius: 8px;
  }

  .top-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    background-position: -442px -122px;
    background-image: url(/img/close-btn.png);
  }

  .bottom-close-btn {
    position: absolute;
    bottom: 12px;
    right: 22px;
    display: inline-block;
    font-size: 1.1rem;
    color: #1e2732;
    letter-spacing: -0.5px;

  }

  .modal-wrapper > div {
    display: flex;
    flex-direction: column;
    
  }

  .start-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
  }

  .start-img-wrapper  > span {
    margin: 0 5px;
  }

  .start-img-wrapper > span:nth-child(1) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${(props) =>
      props.ReviewStarIndex >= 1 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
    

  }

  .start-img-wrapper > span:nth-child(2) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${(props) =>
      props.ReviewStarIndex >= 2 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }

  .start-img-wrapper > span:nth-child(3) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${(props) =>
      props.ReviewStarIndex >= 3 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }

  .start-img-wrapper > span:nth-child(4) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${(props) =>
      props.ReviewStarIndex >= 4 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }

  .start-img-wrapper > span:nth-child(5) {
    background-image: url(/img/reivew-star-modal.svg);
    background-size: 293px 282px;
    background-position: ${(props) =>
      props.ReviewStarIndex >= 5 ? '-128px -112px' : '-76px -112px'};
    width: 44px;
    height: 44px;
    display: block;
  }



  .modal-wrapper > div > h3 {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.3rem;
  }


  .modal-text-wrapper{

  }

  .modal-text-wrapper > textarea {
    width: 100%;
    border: 1px solid #c5c5c5;
    height: 100px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  .review-start-text-wrapper {
    margin: 8px 0 12px;    
    color: #fd0303;
  }
  
  .review-start-text-wrapper > .start-score {
    font-weight: 600;
  }


  .modal-wrapper > div > button {
    margin-top: 20px;
    background-color: #2563EB;
    color: white;
    border-radius: 5px;
    font-weight: 600;
    height: 50px;
  }

 
  

`;
