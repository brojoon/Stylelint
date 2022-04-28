import styled from '@emotion/styled';

export const MemberLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items; cetner;
  
  .error-text {
   color: #F45452;
   font-size: 12px;
   display: flex;
   align-items: center;
   margin-bottom: 3px;

  }

  .error-text::before {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
    background: url(/img/icon_error.png) center center no-repeat;
    background-size: 100% auto;
    display: inline-block;
    content: '';
  }
`;
