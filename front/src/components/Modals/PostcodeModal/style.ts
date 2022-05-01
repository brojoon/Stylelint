import styled from '@emotion/styled';
import DaumPostcode from 'react-daum-postcode';

export const DaumPostcodeContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9901;
  background-color: rgba(200, 200, 200, 0.5);
`;

export const CustomDaumPostCode = styled(DaumPostcode)<{
  IsMobile: boolean;
  IsTablet: boolean;
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9910;
  transform: translate(-50%, -50%);
`;
