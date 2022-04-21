import LoadingCircle from '@components/LoadingCircle';
import OrderHistoryCard from '@components/OrderHistoryCard';
import { IPaymentsDoneInfo, IUser } from '@typings/db';
import fetcher from '@utils/utils/fetcher';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { OrderHistoryContainer } from './style';

const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useQuery('paymentList', () => fetcher(`/api/payment/done`));
  const { data: user } = useQuery<IUser | false | null>('user', () =>
    fetcher(`/api/user/profile`),
  );

  useEffect(() => {
    if (user == false) Router.push('/login');
    else if (user) setIsLoading(false);
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <OrderHistoryContainer>
          {data?.length > 0 ? (
            <div className="order-history-wrapper">
              <h3 className="title">주문/배송 조회</h3>
              {[...data].reverse().map((history: IPaymentsDoneInfo, index) => {
                return (
                  <OrderHistoryCard key={index} orderHistoryProduct={history} />
                );
              })}
            </div>
          ) : (
            <div className="empty-container">
              <h2>앗!</h2>
              <span>아직 주문내역이 없습니다.</span>
            </div>
          )}
        </OrderHistoryContainer>
      )}
    </>
  );
};

export default OrderHistory;
