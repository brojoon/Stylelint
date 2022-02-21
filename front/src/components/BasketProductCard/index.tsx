import React, { useCallback, useState } from 'react';

import { BasketProductContainer } from './style';

const BasketProductCard = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const onClickProductCheck = useCallback((e) => {
    setIsChecked(e.target.checked);
  }, []);

  const onClickProductAddCount = useCallback((e) => {
    setProductCount((prev) => prev + 1);
  }, []);

  const onClickProductSubstractCount = useCallback((e) => {
    setProductCount((prev) => {
      if (prev == 1) {
        alert('개수가 이미 0개입니다');
        return prev;
      }
      return prev - 1;
    });
  }, []);

  return (
    <BasketProductContainer IsChecked={isChecked}>
      <ul>
        <li>
          <div className="basket-product-content">
            <div className="basket-product-info">
              <span>
                <label htmlFor="product-check-box">
                  <input
                    onChange={onClickProductCheck}
                    id="product-check-box"
                    checked={isChecked}
                    type="checkbox"
                  />
                </label>
              </span>
              <div>
                <img
                  src="./img/product1/product_detail_2.jpg"
                  style={{ width: '60px', height: '60px' }}
                />
              </div>
            </div>

            <div className="basket-product-desc">
              <span>3M 자동차 활성탄 에어컨필터 6285 SM6 QM6 에어컨필</span>
            </div>

            <div className="basket-product-count">
              <button onClick={onClickProductSubstractCount}></button>
              <input type="number" value={productCount} />
              <button onClick={onClickProductAddCount}></button>
            </div>
            <div style={{ flex: '1' }}></div>
            <div className="basket-product-price">
              <span>30,240원</span>
              <button></button>
            </div>
          </div>
        </li>
      </ul>
    </BasketProductContainer>
  );
};

export default BasketProductCard;
