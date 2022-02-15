import styled from 'styled-components';

export const SlideWrapper = styled.section<{
  posX: string;
  IsTransition: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${(props) => `translateX(${props.posX}%)`};
  transition: ${(props) => (props.IsTransition ? 'ease-in-out' : '')};
  transition-duration: ${(props) => (props.IsTransition ? '0.5s' : '')};
`;
