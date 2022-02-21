import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #fafafa;
  border-top: 1px solid #e2e2e2;

  .footer-wrapper {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
  }
  .footer-wrapper > div {
    padding: 15px 0 17px;
    border-bottom: 1px solid #ececec;
  }

  .footer-utility {
    display: flex;
  }

  .footer-utility > li {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -1px;
    color: #5e636d;
    padding: 0 25px;
    font-weight: 600;
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
  }

  .footer-utility > li:nth-child(1) {
    padding-left: 0;
  }

  .footer-utility > li:nth-child(1):before {
    display: none;
  }

  .footer-utility > li:nth-child(4) {
    font-weight: 800;
  }

  .footer-info {
    display: flex;
    justify-content: space-between;
    color: #757c8a;
    font-size: 13px;
  }

  .footer-info > div {
    width: 50%;
  }

  .footer-info > div > p > h3 {
    font-weight: 700;
    font-size: 14px;
    color: #000000;
    margin-bottom: 5px;
  }

  .footer-legal-info > div > ul {
    display: flex;
  }

  .footer-legal-info > div > ul > li {
    margin-right: 30px;
    font-size: 13px;
    color: #94989f;
  }

  .footer-legal-info > div > ul > li:nth-child(1) {
    margin-right: 10px;
  }

  .footer-legal-info > div > ul > li:after {
    content: '';
    width: 5px;
    height: 10px;
    margin-left: 5px;
    display: inline-block;
    background: url(//pics.gmarket.co.kr/pc/sprite/kr/common/sprite__common.png)
      no-repeat;
    background-position: -238px -34px;
    background-size: 400px auto;
    text-indent: -9999px;
  }

  .footer-legal-info > div > ul > li:nth-child(2):after {
    display: none;
  }

  .footer-legal-info > div > ul:nth-child(1) {
    margin-bottom: 2px;
  }

  .footer-text-notice {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -1px;
    color: #94989f;
  }

  .content-notice {
    margin-left: 8px;
    margin-top: -1px;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -1px;
    color: #94989f;
    border: 0;
    text-decoration: underline;
    vertical-align: top;
  }
`;
