import ProductDetailDesc from '@components/ProductDetailDesc';
import SelectedProductCardContainer from '@components/SelectedProductCardContainer';
import ProductDetailSlider from '@components/Sliders/ProductDetailSlider';
import { BasketAddFetch } from '@store/modules/basketAdd';
import { PaymentSaveFetch } from '@store/modules/paymentSave';
import { IProductDetailInfo } from '@typings/db';
import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';
import { baseApiUrl, baseFrontUrl, days, months } from '@utils/utils/const';
import fetcher from '@utils/utils/fetcher';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { ProductDetailContainer, ProductPurchaseWrapper } from './[code]style';

export interface ISelecedProduct {
  userId: string;
  image: string;
  color: string;
  size: string;
  product_name: string;
  quantity: number;
  price: number;
  state: boolean;
}

export interface Props {
  ssrProductData: IProductDetailInfo;
}

const ProductDetails: VFC<Props> = ({ ssrProductData }) => {
  const [isProductDibs, setIsProductDibs] = useState(false);
  const [isDibLoading, setIsDibLoading] = useState(false);
  const [productDescNavIndex, setProductDescNavIndex] = useState('1');
  const [productCount, setProductCount] = useState(1);
  const [selectSize, setSelectSize] = useState('default');
  const [selectColor, setSelectColor] = useState('default');
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProductArr, setSelectedProductArr] = useState<
    ISelecedProduct[]
  >([]);

  const router = useRouter();
  const { type, code } = router.query;
  const {
    data,
    isLoading,
    error,
    refetch: productDetailInfoRefetch,
  } = useQuery('productDetailInfo', () => fetcher(`api/product/${code}`), {
    initialData: ssrProductData,
  });
  const { data: user, refetch: userRefetch } = useQuery('user', () =>
    fetcher(`api/user/profile`),
  );

  const { data: dibs, refetch: dibsRefetch } = useQuery('user/dibs', () =>
    fetcher(`api/user/dibs`),
  );

  const isTablet1024 = useIsTablet1024();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedProductArr.length) {
      let sum = 0;
      for (let i = 0; i < selectedProductArr.length; i++) {
        sum += selectedProductArr[i].price * selectedProductArr[i].quantity;
      }
      setTotalPrice(sum);
    } else {
      setTotalPrice(0);
    }
  }, [selectedProductArr]);
  useEffect(() => {
    if (dibs && data) {
      for (let i = 0; i < dibs.length; i++) {
        if (dibs[i].product_name == data.name) {
          setIsProductDibs(true);
          break;
        }
        if (i === dibs.length - 1) setIsProductDibs(false);
      }
    }
  }, [dibs, data]);

  useEffect(() => {
    if (code) {
      productDetailInfoRefetch().then(() => dibsRefetch());
      userRefetch();
      setSelectSize('default');
      setSelectColor('default');
      setTotalPrice(0);
      setSelectedProductArr([]);
      setProductDescNavIndex('1');
    }
  }, [code]);

  const onClickProductDibs = useCallback(async () => {
    if (!user) {
      Router.push('/login');
      return;
    }
    setIsDibLoading(true);
    if (isProductDibs) {
      const ret = await axios.post('api/user/dibs/delete', {
        userId: user.userId,
        product_name: data.name,
      });
      if (ret.status === 200) setIsProductDibs(false);
      await dibsRefetch();
      await productDetailInfoRefetch();
    } else {
      const ret = await axios.post('api/user/dibs/save', {
        userId: user.userId,
        product_name: data.name,
      });
      if (ret.status === 200) setIsProductDibs(true);
      await dibsRefetch();
      await productDetailInfoRefetch();
    }
    setIsDibLoading(false);
  }, [isProductDibs, user, data]);

  // const onClickProductDescNav = useCallback((e) => {
  //   setProductDescNavIndex(e.target.dataset.index);
  // }, []);

  const onChangeProductCount = useCallback((e) => {
    setProductCount(e.target.value);
  }, []);

  const onClickProductSubstractCount = useCallback(
    (e) => {
      if (productCount <= 1) {
        alert('1개 미만이 될수 없습니다.');
        return;
      }
      setProductCount((prev) => +prev - 1);
    },
    [productCount],
  );

  const onClickProductAddCount = useCallback(
    (e) => {
      if (productCount >= 99) {
        alert('99개를 초과할수 없습니다.');
        return;
      }
      setProductCount((prev) => +prev + 1);
    },
    [productCount],
  );

  const onFocustOut = useCallback((e) => {
    if (e.target.value > 99) {
      alert('99개를 초과할수 없습니다.');
      setProductCount(99);
    } else if (e.target.value < 1) {
      alert('1개 미만이 될수 없습니다.');
      setProductCount(1);
    } else if (e.target.value[0] == 0) {
      alert('올바른 값을 입력해주세요');
      setProductCount(1);
    } else {
      setProductCount(e.target.value);
    }
  }, []);

  const onChangeSelectSize = useCallback((e) => {
    setSelectSize(e.target.value);
  }, []);

  const onChangeSelectColor = useCallback((e) => {
    setSelectColor(e.target.value);
  }, []);

  const onClickSelectBtn = useCallback(() => {
    if (selectColor && selectSize && productCount >= 1) {
      setSelectedProductArr((prev) =>
        prev.concat([
          {
            userId: user?.userId,
            product_name: data.name,
            price: data.price,
            quantity: productCount,
            size: selectSize,
            color: selectColor,
            image: data.image,
            state: false,
          },
        ]),
      );
    }
    setSelectColor('default');
    setSelectSize('default');
    setProductCount(1);
  }, [selectColor, selectSize, productCount, data]);

  const onClickProductsBasket = useCallback(async () => {
    if (!user) {
      Router.push('/login');
      return;
    }
    if (selectedProductArr) {
      for (let i = 0; i < selectedProductArr.length; i++) {
        await dispatch(
          BasketAddFetch([
            {
              userId: user.userId,
              product_name: data.name,
              price: data.price,
              quantity: selectedProductArr[i].quantity,
              size: selectedProductArr[i].size,
              color: selectedProductArr[i].color,
              image: data.image,
            },
          ]),
        );
      }
      setSelectedProductArr([]);
    }
  }, [selectedProductArr, user, BasketAddFetch]);

  const onClickPurchase = useCallback(async () => {
    if (!user) {
      Router.push('/login');
      return;
    }
    if (selectedProductArr) {
      await dispatch(PaymentSaveFetch(selectedProductArr));

      router.push(baseFrontUrl + '/payment');
    }
  }, [selectedProductArr, baseFrontUrl, dispatch, user, PaymentSaveFetch]);

  return (
    <>
      <ProductDetailContainer IsTablet1024={isTablet1024} IsTablet={isTablet}>
        <div className="product-Deital-wrapper">
          <div className="product-slide-wrapper flex flex-col w-[50%]">
            <ProductDetailSlider ssrProductData={ssrProductData} />
          </div>
          <div className="product-purchase-wrapper ">
            <div>
              <h3 className="text-[1.125rem] text-[#7E7E7E] font-semibold">
                스타일린트
              </h3>
              <p className="text-[1.5rem] text-[#333333] mb-[30px] font-bold">
                {data?.name}
              </p>
              <p className="text-[1.15rem] text-[#9D9D9D] line-through ">
                {data && Math.floor(data?.price * 1.5).toLocaleString()}
              </p>
              <div className="border-b-[1px] pb-[25px]">
                <span className="text-[0.75rem] text-[#ff9995] mr-[0.5rem]">
                  32% 할인 적용시
                </span>
                <span className="text-[1.5625rem] font-semibold">
                  {data?.price?.toLocaleString()}
                </span>
                <strong>원</strong>
              </div>
              <table className="mt-[25px]">
                <tbody className="text-[#333333] text-[0.875rem]">
                  <tr>
                    <th className="pr-[1.75rem] pr-[1.75rem]">구매자수</th>
                    <td>{data?.perchase_quantity}</td>
                  </tr>
                  <tr>
                    <th className="pr-[1.75rem] pt-[10px] ">배송구분</th>
                    <td className="pt-[10px]">무료배송</td>
                  </tr>
                  <tr>
                    <th className="pr-[1.75rem] pt-[10px]">배송예상</th>
                    <td className="pt-[10px]">
                      {months[new Date().getMonth()] +
                        new Date().getDate() +
                        '일 ' +
                        days[new Date().getDay()] +
                        ' 오후 3시 이전 주문시'}
                    </td>
                  </tr>
                </tbody>
              </table>
              <ProductPurchaseWrapper IsProductDibs={isProductDibs}>
                <div className="option-container">
                  <span className="option-header">옵션선택</span>
                  <select
                    className="option-size"
                    onChange={onChangeSelectSize}
                    value={selectSize}
                    name="사이즈"
                  >
                    <option disabled value="default" selected>
                      사이즈
                    </option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <span className="icoArrow arrow1">
                    <img src="/img/select_dropdown.png" alt="" />
                  </span>
                </div>
                <div className="option-container">
                  <select
                    className="option-size"
                    onChange={onChangeSelectColor}
                    value={selectColor}
                    name="색상"
                  >
                    <option disabled value="default" selected>
                      색상
                    </option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                  <span className="icoArrow arrow2">
                    <img src="/img/select_dropdown.png" alt="" />
                  </span>
                </div>
                {selectSize !== 'default' && selectColor !== 'default' && (
                  <div className="basket-product-select">
                    <h2>수량</h2>
                    <div className="basket-product-select-wrapper">
                      <div className="basket-product-count">
                        <button onClick={onClickProductSubstractCount}></button>
                        <input
                          onChange={onChangeProductCount}
                          type="number"
                          value={productCount}
                          onBlur={onFocustOut}
                        />
                        <button onClick={onClickProductAddCount}></button>
                      </div>
                      <button
                        className="basket-product-select-btn"
                        onClick={onClickSelectBtn}
                      >
                        선택
                      </button>
                    </div>
                  </div>
                )}

                <SelectedProductCardContainer
                  selectedProductArr={selectedProductArr}
                  setSelectedProductArr={setSelectedProductArr}
                />
                <div className="product-purchase-payment">
                  <div className="purchase-result">
                    <span>총 상품금액</span>
                    <span>{totalPrice.toLocaleString()}원</span>
                  </div>
                  <div className="purchase-button">
                    {isDibLoading ? (
                      <span className="clip-loader-wrapper">
                        <ClipLoader color={'#36d7b7'} size={30} />
                      </span>
                    ) : (
                      <button onClick={onClickProductDibs}>
                        <span className="product-dibs"></span>
                        <span className="product-dibs-count">{data?.dibs}</span>
                      </button>
                    )}

                    <button onClick={onClickProductsBasket}>
                      <span>장바구니</span>
                    </button>
                    <button onClick={onClickPurchase}>
                      <span>구매하기</span>
                    </button>
                  </div>
                </div>
              </ProductPurchaseWrapper>
            </div>
          </div>
        </div>
      </ProductDetailContainer>
      <ProductDetailDesc />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { code } = ctx.query;
  const ssrProductData = await fetcher(`${baseApiUrl}/api/product/${code}`);

  // data 없을 땐 리턴값을 달리함
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  //pageProps로 넘길 데이터
  return { props: { ssrProductData } };
};

export default ProductDetails;
