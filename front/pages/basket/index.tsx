import BasketProductCard from '@components/BasketProductCard';
import { BasketRemoveFetch } from '@store/modules/basketRemove';
import { IBasketProduct } from '@typings/db';
import fetcher from '@utils/utils/fetcher';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { BasketContainer } from './style';

const Basket = () => {
  const [isCheckedAll, setIsCheckedAllSelct] = useState(false);
  const [productCardArr, setProductCardArr] = useState<number[]>(
    new Array(1).fill(0),
  );
  const [totalPrice, setStateTotalPrice] = useState(0);
  const [totalMany, setTotalMany] = useState(0);
  const { data, isLoading, error, refetch } = useQuery('basketList', () =>
    fetcher(`/api/basket`),
  );

  useEffect(() => {
    if (data) setProductCardArr(new Array(data.length).fill(0));
  }, [data]);

  useEffect(() => {
    if (data) {
      let totalPrice = 0;
      let totalMany = 0;
      for (let i = 0; i < data.length; i++) {
        if (productCardArr[i] == 1) {
          totalPrice += data[i].price * data[i].quantity;
          totalMany += data[i].quantity;
        }
      }
      console.log('totalPrice: ', totalPrice);
      setTotalMany(totalMany);
      setStateTotalPrice(totalPrice);
    }
  }, [data, productCardArr]);

  const dispatch = useDispatch();
  console.log(data);

  const onCheckedAllSelect = useCallback(
    (e) => {
      setIsCheckedAllSelct(e.target.checked);
      setProductCardArr((prev) => {
        return prev.map((value) => {
          return e.target.checked ? 1 : 0;
        });
      });
    },
    [data],
  );

  const onClickProductDelete = useCallback(async () => {
    await Promise.all(
      productCardArr.map(async (arr, index) => {
        if (arr === 1 && data.length > index) {
          await dispatch(BasketRemoveFetch(data[index].id));
          console.log('deleting: ', index);
        }
      }),
    );
    setProductCardArr((prev) => {
      return prev.map((value) => {
        return 0;
      });
    });
    console.log('delete Done');
    refetch();
  }, [productCardArr, data, refetch]);
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
              <em>{data?.length}</em>
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
                  <button onClick={onClickProductDelete}>선택삭제</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="basket-products-container">
          <div className="basket-products-wrapper">
            <div>
              {data?.map((product: IBasketProduct, index: number) => {
                return (
                  <BasketProductCard
                    key={index}
                    index={index}
                    refetch={refetch}
                    setProductCardArr={setProductCardArr}
                    productCardArr={productCardArr}
                    basketProduct={product}
                  />
                );
              })}
            </div>
            <div className="basket-product-order-container">
              <div className="basket-product-order-wrapper">
                <ul>
                  <li>
                    <span>상품수</span>
                    <div>
                      <span>{totalMany}</span>
                      <span>개</span>
                    </div>
                  </li>
                  <li>
                    <span>전체 주문금액</span>
                    <div>
                      <span>{totalPrice.toLocaleString()}</span>
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
