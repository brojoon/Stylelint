import styled from 'styled-components';

export const InputContainer = styled.section`
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
