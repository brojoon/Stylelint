import React from 'react';
import { FooterContainer } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <div>
          <ul className="footer-utility">
            <li>스타일린트 소개</li>
            <li>채용정보</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>청소년보호정책</li>
            <li>전자금융거래약관</li>
            <li>제휴·광고</li>
          </ul>
        </div>
        <div className="footer-info">
          <div>
            <p>
              <h3>스타일린트글로벌 유한책임회사</h3>
              서울특별시 강남구 테헤란로 155 (역삼동, 555)
              <br />
              사업자등록번호 : 101-345-5598 | 통신판매업신고 : 강남 558호
              <br />
              업무집행자 : 홍길동
            </p>
          </div>
          <div>
            <p>
              <h3>고객센터</h3>
              경기도 부천시 송파대로 잠실동 트리지움 (115)
              <br />
              Tel : 1577-1577 (평일 09:00 ~ 18:00) | 스타일린트 사업자 전용 Tel
              : 1577-1577 (365일 09:00 ~ 18:00)
              <br />
              Fax : 02-1111-4444 | Mail : stylelint@corp.stylelint.co.kr
            </p>
          </div>
        </div>
        <div className="footer-legal-info">
          <div>
            <ul>
              <li>전자금융분쟁처리</li>
              <li>
                Tel : 1577-1577 | Fax : 02-1111-4444 | Mail :
                stylelint@corp.stylelint.co.kr
              </li>
              <li>분쟁처리절차</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>오픈마켓 자율준수규약</li>
              <li>윤리경영</li>
              <li>사이버범죄 신고시스템</li>
              <li>VeRO Program</li>
              <li>안전거래센터</li>
              <li>저작권침해신고</li>
            </ul>
          </div>
        </div>
        <div className="footer-text-notice">
          <p>
            스타일린트는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            스타일린트는 상품·거래 정보 및 가격에 대하여 책임을 지지 않습니다.
            <br />본 사이트의 모든 정보, 콘텐츠, UI 등에 대한 무단 복제, 전송,
            배포, 스크래핑 등의 행위는 관련 법령에 의하여 엄격히 금지됩니다.
            <span className="content-notice">
              콘텐츠산업 진흥법에 따른 표시
            </span>
            <br /> Copyright Stylelint Global LLC All rights reserved.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
