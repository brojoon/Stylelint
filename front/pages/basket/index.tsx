import BasketProductCard from '@components/BasketProductCard';
import LoadingCircle from '@components/LoadingCircle';
import { refetchProductsArr } from '@store/modules/basketProductSelectArr';
import { BasketRemoveFetch } from '@store/modules/basketRemove';
import { PaymentSaveFetch } from '@store/modules/paymentSave';
import { IBasketProduct } from '@typings/db';
import { useIsMobile, useIsTablet1024 } from '@utils/Hooks';
import fetcher from '@utils/utils/fetcher';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { BasketContainer } from 'styles/page/basket';

interface IDeleteProductsId {
  id: number;
}

const Basket = () => {
  const [isCheckedAll, setIsCheckedAllSelct] = useState(false);
  const [totalPrice, setStateTotalPrice] = useState(0);
  const [totalMany, setTotalMany] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { data, refetch } = useQuery('basketList', () =>
    fetcher(`/api/basket`),
  );
  const { data: user, refetch: userRefetch } = useQuery('user', () =>
    fetcher(`api/user/profile`),
  );
  const router = useRouter();
  const isTablet1024 = useIsTablet1024();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  const { productCardArr } = useSelector((state: any) => ({
    productCardArr: state.basketProductsSelectArr.productCardArr,
  }));

  useEffect(() => {
    if (user == false) Router.push('/login');
    else if (user) setIsLoading(false);
  }, [user]);

  useEffect(() => {
    if (data) {
      if (data.length != productCardArr.length)
        dispatch(refetchProductsArr(new Array(data.length).fill(0)));
    }
  }, [data, productCardArr]);

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

      setTotalMany(totalMany);
      setStateTotalPrice(totalPrice);
    }
  }, [data, productCardArr]);

  const onCheckedAllSelect = useCallback(
    (e) => {
      setIsCheckedAllSelct(e.target.checked);
      dispatch(
        refetchProductsArr(
          productCardArr?.map((value: number) => {
            return e.target.checked ? 1 : 0;
          }),
        ),
      );
    },
    [data, productCardArr],
  );

  const onClickProductDelete = useCallback(async () => {
    if (data) {
      const postArr: IDeleteProductsId[] = [];
      for (let i = 0; i < data.length; i++) {
        if (productCardArr[i] == 1) postArr.push({ id: data[i].id });
      }

      await dispatch(BasketRemoveFetch(postArr));
      // dispatch(
      //   refetchProductsArr(
      //     productCardArr?.((value: number) => {
      //       return 0;
      //     }),
      //   ),
      // );
      refetch();
    }
  }, [productCardArr, data, refetch]);

  const onClickPurchase = useCallback(async () => {
    refetch().then(async (refetched: any) => {
      const ret = refetched.data.filter(
        (product: IBasketProduct, index: number) => {
          if (productCardArr[index]) return true;
          else false;
        },
      );
      if (ret.length < 1) return;
      let ret2 = [];
      for (let i = 0; i < ret.length; i++) {
        ret2.push({
          userId: user.userId,
          product_name: ret[i].product_name,
          price: ret[i].price,
          quantity: ret[i].quantity,
          size: ret[i].size,
          color: ret[i].color,
          image: ret[i].image,
          basket_number: ret[i].id,
          state: false,
        });
      }
      const res: any = await dispatch(PaymentSaveFetch(ret2));
      if (res.meta.requestStatus === 'fulfilled') {
        router.push('/payment');
      }
    });
  }, [data, productCardArr, user]);
  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <BasketContainer
          IsCheckedAll={isCheckedAll}
          IsTablet1024={isTablet1024}
          IsMobile={isMobile}
          className="basket-container"
        >
          <div>
            <div className="title-container">
              <div className="title-wrapper">
                <h3 className="title">장바구니</h3>
              </div>
            </div>
            {data?.length > 0 ? (
              <>
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
                                autoComplete="new-password"
                                type="checkbox"
                                id="전체선택"
                              />
                              전체선택
                            </label>
                          </span>
                        </li>
                        <li>
                          <button onClick={onClickProductDelete}>
                            선택삭제
                          </button>
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
                            key={product.id}
                            index={index}
                            refetch={refetch}
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
                        <button onClick={onClickPurchase}>구매하기</button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <div className="empty-container">
                <h2>앗!</h2>
                <span>장바구니가 텅~</span>
              </div>
            )}
          </div>
        </BasketContainer>
      )}
    </>
  );
};

export default Basket;
