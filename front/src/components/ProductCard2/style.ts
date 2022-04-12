import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  padding: 15px 20px;
  margin: 15px 15px 15px 0;
  border-radius: 6px;

  & > div:nth-child(1) {
    width: 100%;
    display: flex;
  }
  & > div:nth-child(1) > div {
    max-width: 150px;
    max-height: 171px;
    margin-right: 10px;
  }

  & .btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .btn-wrapper > span:nth-child(1) {
    color: #9f9f9f;
    border-color: #9f9f9f;
    font-size: 0.7rem;
    border: 1px solid #b5cfb2;
    border-radius: 5px;
    white-space: nowrap;
    padding: 8px 12px;
    font-weight: 600;
    margin-left: auto;
  }

  & .btn-wrapper > span:nth-child(2) {
    background-position: -530px -167px;
    width: 60px;
    height: 60px;
    display: block;
    cursor: pointer;
    background-image: url(https://atimg.sonyunara.com/2021/renewal/main/main_icon_pc.png?a=16) !important;
    background-repeat: no-repeat;
    margin-left: auto;
  }

  .product-desc {
  }
`;

export const ProductCardIconWrapper = styled.div<{ IsProductDibs: boolean }>`
  @keyframes scale2 {
    0% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.5, 1.5);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  & > span:nth-child(1) {
    ${(props) =>
      props.IsProductDibs
        ? `    background-position: -85px -177px;
        animation-name: scale2;
        animation-duration: 1s;`
        : ''}
  }
`;
