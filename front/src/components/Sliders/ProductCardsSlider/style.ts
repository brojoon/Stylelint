import styled from '@emotion/styled';

export const ProductCardSlideWrapper = styled.section<{
  PosX: string;
  IsTransition: boolean;
  IsMobile: boolean;
}>`
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  & > div {
    margin: 1.6rem;
    width: ${(props) => (props.IsMobile ? '800px' : '1300px')};
    height: 100%;
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(100, minmax(21%, auto));
    gap: 0.8rem;
    transform: ${(props) => `translateX(${props.PosX}%)`};
    transition: ${(props) =>
      props.IsTransition ? 'transform ease-in-out 0.5s' : ''};
  }
`;
