import styled from '@emotion/styled';

export const ProductsGridContainer = styled.div<{ IsTablet: boolean }>`
  display: grid;

  grid-template-columns: repeat(auto-fill, ${(props) =>
    props.IsTablet
      ? 'minmax(calc(50% - 1rem)'
      : 'minmax(calc(33% - 1rem)'}, auto));
  grid-gap: 2.3rem 1rem;
`;
