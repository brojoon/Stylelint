import styled from 'styled-components';

export const ProductCardIconWrapper = styled.div<{ IsProductDibs: boolean }>`
  ${(props) => (props.IsProductDibs ? '' : '')};

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
