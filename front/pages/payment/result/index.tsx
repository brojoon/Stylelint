import LoadingCircle from '@components/LoadingCircle';
import { useIsMobile } from '@utils/Hooks';
import fetcher from '@utils/utils/fetcher';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ResultContainer } from './style';

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: recentPaymemt } = useQuery('userRecentPayment', () =>
    fetcher(`/api/user/payment/recent`),
  );
  const { data: user } = useQuery('user', () => fetcher(`/api/user/profile`));

  const isMobile = useIsMobile();

  useEffect(() => {
    if (user == false) Router.push('/login');
    else if (user) setIsLoading(false);
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <ResultContainer IsMobile={isMobile}>
          <div>
            <div className="title-container">
              <div className="title-wrapper">
                <h3 className="title">주문완료</h3>
              </div>
            </div>
            <div className="body-container">
              <div className="body-wrapper">
                <div className="body-info">
                  <p>
                    <span>{recentPaymemt?.receiver} 님</span>이 주문하신 소중한
                    상품을 곧 보내 드릴게요!
                  </p>
                  <p>
                    <span>{recentPaymemt?.address?.replace('/', ' ')}</span>
                  </p>
                </div>
                <div className="shopping-info-btn">
                  <Link href="/orderHistory">
                    <button>나의배송정보</button>
                  </Link>
                </div>
                <div className="order-info-table-container">
                  <table>
                    <colgroup>
                      <col width="25%" />
                      <col width="*" />
                    </colgroup>
                    <tbody className="order-table-tbody">
                      <tr>
                        <td rowSpan={2}>
                          <p>
                            <span>결제정보</span>
                          </p>
                        </td>
                        <td>
                          <div>
                            <p>체크/신용카드</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <span>
                              {recentPaymemt?.total_price?.toLocaleString()}
                            </span>
                            <span>원</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>배송정보</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>이름 : {recentPaymemt?.receiver}</span>
                            <span>
                              주소 : {recentPaymemt?.address?.replace('/', ' ')}
                            </span>
                            <span>연락처 : {recentPaymemt?.phone_number}</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="note-tip">
                  <p>꼭 알아두세요!</p>
                  <ul>
                    <li>
                      스타일린트는 통신판매중개자이며 통신판매의 당사자가
                      아닙니다. 따라서 스타일린트는 상품, 거래정보 및 거래에
                      대하여 책임을 지지 않습니다.
                    </li>

                    <li>
                      구매주문내역 , 배송상태 확인 , 구매영수증 출력 ,
                      구매취소/반품/교환은 사이트 상단의 주문/배송조회에서 확인
                      할 수 있습니다.
                    </li>
                    <li>
                      고객님의 주문이 체결된 후 상품품절 및 단종 등에 의해
                      배송이 불가능할 경우 , 전자상거래등에서의 소비자 보호에
                      관한 법률 제15조 2항에 의거하여 3영업일(공휴일제외) 이내에
                      자동으로 취소될 수 있으며, 이 경우 취소 안내 메일이
                      고객님께 발송되오니 양지 바랍니다.
                    </li>
                    <li>
                      극히 일부 상품의 경우, 상품페이지의 주문수량이 해당 상품의
                      실제 재고수량과 다를 수 있는 점 양해바랍니다.
                    </li>
                    <li>
                      일부상품에 대해 수량부족, 카드결제승인 오류등의 사례가
                      간혹 있을 수 있으니 나의쇼핑정보 에서 다시 한번 확인해
                      주세요.
                    </li>
                    <li>
                      배송주소를 추가하거나 변경,삭제 등의 관리는 나의쇼핑정보
                      나의정보 에서 가능합니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ResultContainer>
      )}
    </>
  );
};

export default Result;
