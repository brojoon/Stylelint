import styled from 'styled-components';

export const SignupContainer = styled.section`
  & .option-container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  & .option-email-sub {
    border-radius: 5px;
    height: 52px;
    padding-left: 15px;
    appearance: none;
    border: 1px solid #e0e0e0;
  }

  & .option-email-sub:focus {
    outline-color: #a3a3a3;
  }

  & .option-email-sub:focus + .icoArrow img {
    transform: rotate(180deg);
  }

  & .icoArrow {
    position: absolute;
    right: 5px;
    z-index: 1;
    width: 35px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 35px;
  }

  & .icoArrow img {
    width: 50%;
    transition: 0.3s;
  }
`;
