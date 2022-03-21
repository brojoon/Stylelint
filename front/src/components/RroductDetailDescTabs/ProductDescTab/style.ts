import styled from 'styled-components';

export const ProductDescTabContainer = styled.section<{
  IsMoreProductInfo: boolean;
}>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  & .info-body-container {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: ${(props) => (props.IsMoreProductInfo ? 'inherit' : '1000px')};
  }

  & .info-btn-wrapper {
    margin: 30px 0;
    background: ${(props) =>
        props.IsMoreProductInfo
          ? 'url(/img/product-info-btn1.png)'
          : 'url(/img/product-info-btn2.png)'}
      no-repeat center;
    width: 100%;
    height: 120px;
    position: relative;
    cursor: pointer;
  }

  & .info-btn-wrapper:before {
    content: '';
    position: absolute;
    top: -96px;
    left: 0;
    display: ;
    width: 100%;
    height: 96px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8) 66%,
      rgba(255, 255, 255, 0.94) 83%,
      rgba(255, 255, 255, 0.98) 91%,
      #ffffff
    );
  }
`;
