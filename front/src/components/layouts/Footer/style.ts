import styled from '@emotion/styled';

export const FooterContainer = styled.footer<{ IsMobile: boolean }>`
  background-color: #fafafa;
  border-top: 1px solid #e2e2e2;

  .footer-wrapper {
    padding: 0 15px;
    max-width: 1300px;
    margin: 0 auto;
  }
  .footer-wrapper > div {
    padding: 15px 0 17px;
    border-bottom: 1px solid #ececec;
  }

  .footer-utility {
    display: flex;
    flex-direction: ${(Props) => (Props.IsMobile ? 'column' : 'row')};
  }

  .footer-utility > li {
    position: relative;
    font-size: 0.875rem;
    line-height: 20px;
    letter-spacing: -1px;
    color: #5e636d;
    padding: ${(Props) => (Props.IsMobile ? '0' : '25px')};

    font-weight: 600;
    text-align: ${(Props) => (Props.IsMobile ? 'center' : '')};
  }
  .footer-utility > li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 12px;
    margin-top: -6px;
    background-color: #dadde1;
    display: ${(Props) => (Props.IsMobile ? 'none' : '')};
  }

  .footer-utility > li:nth-of-type(1) {
    padding-left: 0;
  }

  .footer-utility > li:nth-of-type(1):before {
    display: none;
  }

  .footer-utility > li:nth-of-type(4) {
    font-weight: 800;
  }

  .footer-info {
    display: flex;
    justify-content: space-between;
    color: #757c8a;
    font-size: 0.8125rem;
  }

  .footer-info > div {
    width: 50%;
  }

  .footer-info > div > h3 {
    font-weight: 700;
    font-size: 0.875rem;
    color: #000000;
    margin-bottom: 5px;
  }

  .footer-legal-info > div > ul {
    display: flex;
  }

  .footer-legal-info > div > ul > li {
    margin-right: 30px;
    font-size: 0.8125rem;
    color: #94989f;
  }

  .footer-legal-info > div > ul:nth-of-type(1) > li:nth-of-type(1) {
    margin-right: 10px;
  }

  .footer-legal-info > div > ul > li:after {
    content: '';
    width: 5px;
    height: 10px;
    margin-left: 5px;
    display: inline-block;
    background: url('/img/footer_arrow.png') no-repeat;
    background-position: -238px -34px;
    background-size: 400px auto;
    text-indent: -9999px;
  }

  .footer-legal-info > div:nth-of-type(1) > ul > li:nth-of-type(2):after {
    display: none;
  }

  .footer-legal-info > div:nth-of-type(1) > ul {
    margin-bottom: 2px;
  }

  .footer-text-notice {
    font-size: 0.75rem;
    line-height: 20px;
    letter-spacing: -1px;
    color: #94989f;
  }

  .content-notice {
    margin-left: 8px;
    margin-top: -1px;
    font-size: 0.75rem;
    line-height: 20px;
    letter-spacing: -1px;
    color: #94989f;
    border: 0;
    text-decoration: underline;
    vertical-align: top;
  }
`;
