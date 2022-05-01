import styled from '@emotion/styled';

export const ProductCardContainer = styled.div<{ IsMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  padding: 15px 20px;
  margin: 15px 15px 15px 0;
  border-radius: 6px;

  .purchase-info-wrapper {
    flex-direction: ${(props) => (props.IsMobile ? 'column' : 'row')};
  }

  .purchase-info-wrapper > span:nth-of-type(1):after {
    content: '';
    width: 1px;
    background-color: #e8e8e8;
    height: 0.39rem;
    margin: 0 5px;
    display: ${(props) => (props.IsMobile ? 'none' : 'inline-block')};
  }

  & > div:nth-of-type(1) {
    width: 100%;
    display: flex;
  }
  & > div:nth-of-type(1) > div {
    max-width: 150px;
    max-height: 171px;
    margin-right: 10px;
  }

  & .btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .btn-wrapper > span:nth-of-type(1) {
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

  & .btn-wrapper > span:nth-of-type(2) {
    background-position: -530px -167px;
    width: 60px;
    height: 60px;
    display: block;
    cursor: pointer;
    background-image: url(/img/imags.png) !important;
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

  & > span:nth-of-type(1) {
    ${(props) =>
      props.IsProductDibs
        ? `    background-position: -85px -177px;
        animation-name: scale2;
        animation-duration: 1s;`
        : ''}
  }
`;
