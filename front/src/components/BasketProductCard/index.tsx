import { RemoveBasketFetch } from '@store/modules/removeBasket';
import { IBasketProduct } from '@typings/db';
import { baseApiUrl } from '@utils/utils/const';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { BasketProductContainer } from './style';

interface Props {
  index: number;
  setProductCardArr: any;
  productCardArr: number[];
  basketProduct: IBasketProduct;
  refetch: any;
}

const BasketProductCard: VFC<Props> = ({
  index,
  setProductCardArr,
  productCardArr,
  basketProduct,
  refetch,
}) => {
  const [productCount, setProductCount] = useState(basketProduct.quantity);
  const dispatch = useDispatch();

  const onClickProductDelete = useCallback(async () => {
    await dispatch(RemoveBasketFetch(basketProduct.id));
    refetch();
  }, [basketProduct, RemoveBasketFetch, dispatch]);

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
                <img src={baseApiUrl + basketProduct?.image} />
              </div>
            </div>

            <div className="basket-product-desc">
              <span>{basketProduct.product_name}</span>
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
              <span>
                {(
                  basketProduct.price * basketProduct.quantity
                ).toLocaleString()}
                원
              </span>
              <button onClick={onClickProductDelete}></button>
            </div>
          </div>
        </li>
      </ul>
    </BasketProductContainer>
  );
};

export default BasketProductCard;
