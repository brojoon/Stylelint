import { BasketCounterFetch } from '@store/modules/basketCounter';
import { BasketRemoveFetch } from '@store/modules/basketRemove';
import { IBasketProduct } from '@typings/db';
import { useIsTablet1024 } from '@utils/Hooks';
import { baseApiUrl } from '@utils/utils/const';
import React, { useCallback, useState, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasketProductContainer } from './style';
import ClipLoader from 'react-spinners/ClipLoader';
import { asleep } from '@utils/utils/asleep';
import { refetchProductsArr } from '@store/modules/basketProductSelectArr';

interface Props {
  index: number;
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
    setProductCount(e.target.value);
  }, []);

  const onClickProductAddCount = useCallback(
    async (e) => {
      if (productCount >= 99) {
        alert('99개를 초과할수 없습니다.');
        return;
      }
      setIsCounterLoading(true);
      const data = { id: basketProduct.id, quantity: +productCount + 1 };
      const res: any = await dispatch(BasketCounterFetch(data));
      if (res.meta.requestStatus === 'fulfilled') {
        setProductCount((prev) => +prev + 1);
      }
      setIsCounterLoading(false);
      refetch();
    },
    [productCount, dispatch, BasketCounterFetch],
  );

  const onClickProductSubstractCount = useCallback(
    async (e) => {
      if (productCount <= 1) {
        alert('1개 미만이 될수 없습니다.');
        return;
      }

      setIsCounterLoading(true);
      const data = { id: basketProduct.id, quantity: +productCount - 1 };
      const res: any = await dispatch(BasketCounterFetch(data));
      if (res.meta.requestStatus === 'fulfilled') {
        setProductCount((prev) => +prev - 1);
      }
      setIsCounterLoading(false);
      refetch();
    },
    [productCount, dispatch, BasketCounterFetch],
  );

  const onFocustOut = useCallback(
    async (e) => {
      if (e.target.value > 99) {
        alert('99개를 초과할수 없습니다.');
        setIsCounterLoading(true);
        const data = { id: basketProduct.id, quantity: 99 };
        const res: any = await dispatch(BasketCounterFetch(data));
        setProductCount(99);

        setIsCounterLoading(false);
        refetch();
      } else if (e.target.value < 1) {
        alert('1개 미만이 될수 없습니다.');
        setIsCounterLoading(true);
        const data = { id: basketProduct.id, quantity: 1 };
        const res: any = await dispatch(BasketCounterFetch(data));
        setProductCount(1);

        setIsCounterLoading(false);
        refetch();
      } else if (e.target.value[0] == 0) {
        alert('올바른 값을 입력해주세요');
        setProductCount(1);
      } else {
        setIsCounterLoading(true);
        const data = { id: basketProduct.id, quantity: e.target.value };
        const res: any = await dispatch(BasketCounterFetch(data));
        if (res.meta.requestStatus === 'fulfilled') {
          setProductCount(e.target.value);
        }

        setIsCounterLoading(false);
        refetch();
      }
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
                    autoComplete="new-password"
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
                    autoComplete="new-password"
                    value={productCount}
                    onBlur={onFocustOut}
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
