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

export const ModalBasketContainer = styled.div<{ IsMobile: boolean }>`
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


  .modal-text-wrapper > strong {
    font-size: 1.1rem;
    color: #1e2732;
    letter-spacing: -0.5px;
    line-height: 38px;
    font-weight: bold;

  }


`;
