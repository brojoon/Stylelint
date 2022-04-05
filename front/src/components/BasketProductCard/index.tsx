import { BasketCounterFetch } from '@store/modules/basketCounter';
import { BasketRemoveFetch } from '@store/modules/basketRemove';
import { IBasketProduct } from '@typings/db';
import { useIsTablet1024 } from '@utils/Hooks';
import { baseApiUrl } from '@utils/utils/const';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasketProductContainer } from './style';
import ClipLoader from 'react-spinners/ClipLoader';
import { asleep } from '@utils/utils/asleep';
import { refetchProductsArr } from '@store/modules/basketProductSelectArr';

interface Props {
  index: number;
  // setProductCardArr: any;
  // productCardArr: number[];
  basketProduct: IBasketProduct;
  refetch: any;
}

const BasketProductCard: VFC<Props> = ({ index, basketProduct, refetch }) => {
  const [productCount, setProductCount] = useState(basketProduct.quantity);
  const [isCountLoading, setIsCounterLoading] = useState(false);
  const dispatch = useDispatch();
  const isTablet1024 = useIsTablet1024();

  const { productCardArr } = useSelector((state: any) => ({
    productCardArr: state.basketProductsSelectArr.productCardArr,
  }));

  const onClickProductDelete = useCallback(async () => {
    await dispatch(BasketRemoveFetch([{ id: basketProduct.id }]));
    refetch();
  }, [basketProduct, BasketRemoveFetch, dispatch]);

  const onClickProductCheck = useCallback(
    (e) => {
      if (productCardArr) {
        const tmp = [...productCardArr];
        tmp[index] = e.target.checked ? 1 : 0;
        dispatch(refetchProductsArr(tmp));
      }
    },
    [index, productCardArr],
  );

  const onChangeProductCount = useCallback((e) => {
    if (e.target.value < 1) {
      alert('주문 가능한 최소 수량은 1개 입니다.');
      return;
    }
  }, []);

  const onClickProductAddCount = useCallback(
    async (e) => {
      setIsCounterLoading(true);
      const data = { id: basketProduct.id, quantity: productCount + 1 };
      const res: any = await dispatch(BasketCounterFetch(data));
      if (res.meta.requestStatus === 'fulfilled') {
        setProductCount((prev) => prev + 1);
      }
      await asleep(100, '성공');
      setIsCounterLoading(false);
      refetch();
    },
    [productCount, dispatch, BasketCounterFetch],
  );

  const onClickProductSubstractCount = useCallback(
    async (e) => {
      if (productCount <= 1) {
        alert('개수가 0개입니다');
        return;
      }

      setIsCounterLoading(true);
      const data = { id: basketProduct.id, quantity: productCount - 1 };
      const res: any = await dispatch(BasketCounterFetch(data));
      if (res.meta.requestStatus === 'fulfilled') {
        setProductCount((prev) => prev - 1);
      }
      await asleep(100, '성공');
      setIsCounterLoading(false);
      refetch();
    },
    [productCount, dispatch, BasketCounterFetch],
  );

  return (
    <BasketProductContainer
      IsChecked={productCardArr[index] ? true : false}
      IsTablet1024={isTablet1024}
    >
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
            {/* ${(props) => (props.IsTablet1024 ? 'align-items: center;' : '')} */}
            <div className="basket-product-desc">
              <span>{basketProduct.product_name}</span>
              <span>
                사이즈: {basketProduct.size} 색상: {basketProduct.color}{' '}
              </span>
            </div>

            <div className="basket-justfy-between-div"></div>

            <div className="basket-product-count">
              {isCountLoading ? (
                <ClipLoader color={'#36d7b7'} size={isTablet1024 ? 21 : 25} />
              ) : (
                <>
                  <button onClick={onClickProductSubstractCount}></button>
                  <input
                    onChange={onChangeProductCount}
                    type="number"
                    value={productCount}
                  />
                  <button onClick={onClickProductAddCount}></button>
                </>
              )}
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

export default React.memo(BasketProductCard);
