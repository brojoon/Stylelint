import styled from '@emotion/styled';

export const ProductCardContainer = styled.div<{ IsMobile: boolean }>`
  .product-desc {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

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
