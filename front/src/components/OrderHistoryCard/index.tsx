import { baseApiUrl } from '@utils/utils/const';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { OrderHistoryProductContainer } from './style';

interface Props {
  orderHistoryProduct: any;
  // refetch: any;
}

const OrderHistoryCard: VFC<Props> = ({ orderHistoryProduct }) => {
  return (
    <OrderHistoryProductContainer>
      <ul>
        <li>
          <div className="order-product-content">
            <div className="order-product-info">
              <div>
                <img src={baseApiUrl + orderHistoryProduct?.image} />
              </div>
            </div>
            <div className="order-product-desc">
              <span>{orderHistoryProduct?.product_name}</span>
              <span>
                사이즈: {orderHistoryProduct?.size} 색상:{' '}
                {orderHistoryProduct?.color}{' '}
              </span>
            </div>
            <div className="order-justfy-between-div"></div>

            <div className="order-product-price">
              <span>{orderHistoryProduct?.address}</span>
              <span>{orderHistoryProduct?.receiver}</span>
              <span>{orderHistoryProduct?.phone_number}</span>
              <span>배송중</span>
              <span>
                {(
                  orderHistoryProduct?.price * orderHistoryProduct?.quantity
                ).toLocaleString()}
                원
              </span>
            </div>
          </div>
        </li>
      </ul>
    </OrderHistoryProductContainer>
  );
};

export default OrderHistoryCard;
