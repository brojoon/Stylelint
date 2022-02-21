import React, { useCallback, useEffect, useState, VFC } from 'react';
import { BasketProductContainer } from './style';

interface Props {
  index: number;
  setProductCardArr: any;
  productCardArr: number[];
}

const BasketProductCard: VFC<Props> = ({
  index,
  setProductCardArr,
  productCardArr,
}) => {
  const [productCount, setProductCount] = useState(1);

  const onClickProductDelete = useCallback(() => {
    setProductCardArr((prev: number[]) => {
      const tmp = [...prev];
      tmp[index] = 2;
      return tmp;
    });
  }, []);

  const onClickProductCheck = useCallback(
    (e) => {
      setProductCardArr((prev: number[]) => {
        const tmp = [...prev];
        tmp[index] = e.target.checked ? 1 : 0;
        return tmp;
      });
    },
    [index],
  );

  const onChangeProductCount = useCallback((e) => {
    if (e.target.value < 1) {
      alert('주문 가능한 최소 수량은 1개 입니다.');
      return;
    }
  }, []);

  const onClickProductAddCount = useCallback((e) => {
    setProductCount((prev) => prev + 1);
  }, []);

  const onClickProductSubstractCount = useCallback((e) => {
    setProductCount((prev) => {
      if (prev <= 1) {
        alert('개수가 0개입니다');
        return 1;
      }
      return prev - 1;
    });
  }, []);

  return (
    <BasketProductContainer IsChecked={productCardArr[index] ? true : false}>
      <ul>
        <li>
          <div className="basket-product-content">
            <div className="basket-product-info">
              <span>
                <label className="basket-product-card-label">
                  <input
                    onChange={onClickProductCheck}
                    id="product-check-box"
                    checked={productCardArr[index] == 1 ? true : false}
                    type="checkbox"
                  />
                </label>
              </span>
              <div>
                <img src="./img/product1/product_detail_2.jpg" />
              </div>
            </div>

            <div className="basket-product-desc">
              <span>3M 자동차 활성탄 에어컨필터 6285 SM6 QM6 에어컨필</span>
            </div>

            <div className="basket-product-count">
              <button onClick={onClickProductSubstractCount}></button>
              <input
                onChange={onChangeProductCount}
                type="number"
                value={productCount}
              />
              <button onClick={onClickProductAddCount}></button>
            </div>
            <div className="basket-justfy-between-div"></div>
            <div className="basket-product-price">
              <span>30,240원</span>
              <button onClick={onClickProductDelete}></button>
            </div>
          </div>
        </li>
      </ul>
    </BasketProductContainer>
  );
};

export default BasketProductCard;
