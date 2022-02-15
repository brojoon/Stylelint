import styled from 'styled-components';

export const ProductCardSlideWrapper = styled.section<{
  PosX: string;
  IsTransition: boolean;
}>`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(100, minmax(20%, auto));
  gap: 0.8rem;
  transform: ${(props) => `translateX(${props.PosX}%)`};
  transition: ${(props) => (props.IsTransition ? 'ease-out' : '')};
  transition-duration: ${(props) => (props.IsTransition ? '0.5s' : '')};
`;
