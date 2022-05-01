import styled from '@emotion/styled';

export const MemberLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: cetner;

  .kakao-logo {
    width: 1.875rem;
    height: 1.875rem;
    background: url(./img/kakao-logo.png) no-repeat;
    background-size: 3.75rem 1.875rem;
  }

  .error-text {
    color: #f45452;
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
