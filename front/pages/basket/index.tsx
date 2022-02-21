import BasketProductCard from '@components/BasketProductCard';
import React, { useCallback, useState } from 'react';
import { BasketContainer } from './style';

const Basket = () => {
  const [isCheckedAll, setIsCheckedAllSelct] = useState(false);
  const onCheckedAllSelect = useCallback((e) => {
    setIsCheckedAllSelct(e.target.checked);
  }, []);
  return (
    <BasketContainer IsCheckedAll={isCheckedAll} className="basket-container">
      <div>
        <div className="title-container">
          <div className="title-wrapper">
            <h3 className="title">장바구니</h3>
          </div>
        </div>
        <div className="basket-tab-container">
          <div className="basket-tab-wrapper">
            <span>전체</span>
            <span className="basket-count">
              <em>7</em>
            </span>
          </div>
        </div>
        <div className="basket-option">
          <div className="basket-option-conatiner">
            <div className="basket-option-wrapper">
              <ul>
                <li>
                  <span className="basket-option-select-wrapper">
                    <label htmlFor="전체선택">
                      <input
                        onChange={onCheckedAllSelect}
                        checked={isCheckedAll}
                        type="checkbox"
                        id="전체선택"
                      />
                      전체선택
                    </label>
                  </span>
                </li>
                <li>
                  <button>선택삭제</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="basket-products-container">
          <div className="basket-products-wrapper">
            <div>
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
              <BasketProductCard />
            </div>
            <div className="basket-product-order-container">
              <div className="basket-product-order-wrapper">
                <ul>
                  <li>
                    <span>상품수</span>
                    <div>
                      <span>0</span>
                      <span>개</span>
                    </div>
                  </li>
                  <li>
                    <span>전체 주문금액</span>
                    <div>
                      <span>59,160</span>
                      <span>원</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="basket-product-order-btn">
                <button>구매하기</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BasketContainer>
  );
};

export default Basket;
