import styled from 'styled-components';

export const DaumPostcodeContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9000;
  background-color: rgba(200, 200, 200, 0.5);

  .post-code {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
