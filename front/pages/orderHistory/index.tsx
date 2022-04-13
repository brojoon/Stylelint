import OrderHistoryCard from '@components/OrderHistoryCard';
import fetcher from '@utils/utils/fetcher';
import React from 'react';
import { useQuery } from 'react-query';
import { OrderHistoryContainer } from './style';

const OrderHistory = () => {
  const { data, isLoading, error, refetch } = useQuery('paymentList', () =>
    fetcher(`/api/payment/done`),
  );
  console.log('done', data);
  return (
    <OrderHistoryContainer>
      {data?.length > 0 ? (
        <div className="order-history-wrapper">
          <h3 className="title">주문/배송 조회</h3>
          {[...data].reverse().map((history: any) => {
            return <OrderHistoryCard orderHistoryProduct={history} />;
          })}
        </div>
      ) : (
        <div className="empty-container">
          <h2>앗!</h2>
          <span>아직 주문내역이 없습니다.</span>
        </div>
      )}
    </OrderHistoryContainer>
  );
};

export default OrderHistory;
