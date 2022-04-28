import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3) !important;
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

  .modal-wrapper > button {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 28px;
    height: 28px;
    background-position: -442px -122px;
    background-image: url(/img/close-btn.png);
  }

  .modal-wrapper > div {
    display: flex;
    flex-direction: column;
  }

  .modal-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .modal-img-wrapper > img {
    width: 50px;
    height: 44px;
  }

  .modal-img-wrapper > strong {
    font-size: 1.25rem;
    color: #1e2732;
    letter-spacing: -0.5px;
    line-height: 50px;
    font-weight: bold;
  }

  .modal-button-wrapper {
  }

  .modal-button-wrapper > button {
    background: #a4a9b0;
    border: 1px solid #9ba0a8;
    cursor: pointer;
    height: 32px;
    padding: 0;
    width: 112px;
    text-align: center;
    letter-spacing: 0;
    margin-right: 8px;
    border-radius: 50px;
    display: inline-block;
    line-height: 32px;
    vertical-align: middle;
  }

  .modal-button-wrapper > button > strong {
    font-weight: bold;
    line-height: 10px;
    font-size: 1rem;
    color: #fff;
  }

  .modal-button-wrapper a {
    height: 32px;
    padding: 0;
    width: 112px;
    text-align: center;
    letter-spacing: 0;
    margin-right: 8px;
    border-radius: 50px;
    display: inline-block;
    line-height: 32px;
    vertical-align: middle;
    background: #2e8de5;
    border: 1px solid #217fd7;
  }

  .modal-button-wrapper a > strong {
    font-weight: bold;
    line-height: 10px;
    font-size: 1rem;
    color: #fff;
  }
`;
