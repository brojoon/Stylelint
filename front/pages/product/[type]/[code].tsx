import ProductDetailDesc from '@components/ProductDetailDesc';
import ProductDetailSlider from '@components/Sliders/ProductDetailSlider';
import { days, months } from '@utils/utils/const';
import fetcher from '@utils/utils/fetcher';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductDetailContainer, ProductPurchaseWrapper } from './[code]style';

const productDetails = () => {
  const [isProductDibs, setIsProductDibs] = useState(false);
  const [productDescNavIndex, setProductDescNavIndex] = useState('1');
  const router = useRouter();
  const { type, code } = router.query;
  const { data, isLoading, error } = useQuery('productDetailInfo', () =>
    fetcher(`/api/product/${code}`),
  );

  const onClickProductDibs = useCallback(() => {
    setIsProductDibs((prev) => !prev);
  }, []);
  const onClickProductDescNav = useCallback((e) => {
    setProductDescNavIndex(e.target.dataset.index);
  }, []);
  return (
    <>
      <ProductDetailContainer>
        <div className="product-Deital-wrapper">
          <div className="flex justify-between">
            <div className="flex flex-col w-[50%]">
              <ProductDetailSlider />
            </div>
            <div className="w-[50%] flex justify-center ml-[1rem] ">
              <div>
                <h3 className="text-[1.125rem] text-[#7E7E7E] font-semibold">
                  스타일린트
                </h3>
                <p className="text-[1.5rem] text-[#333333] mb-[30px] font-bold">
                  {data?.name}
                </p>
                <p className="text-[1.15rem] text-[#9D9D9D] line-through ">
                  {data?.price?.toLocaleString()}
                </p>
                <div className="border-b-[1px] pb-[25px]">
                  <span className="text-[0.75rem] text-[#ff9995] mr-[0.5rem]">
                    10%쿠폰 적용시
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
                    <select className="option-size" name="사이즈">
                      <option disabled selected>
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
                    <select className="option-size" name="색상">
                      <option disabled selected>
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
                  <div className="product-purchase-payment">
                    <div className="purchase-result">
                      <span>총 상품금액</span>
                      {/* <span>결과</span> */}
                    </div>
                    <div className="purchase-button">
                      <button onClick={onClickProductDibs}>
                        <span className="product-dibs"></span>
                        <span className="product-dibs-count">{data?.dibs}</span>
                      </button>
                      <button>
                        <span>장바구니</span>
                      </button>
                      <button>
                        <span>구매하기</span>
                      </button>
                    </div>
                  </div>
                </ProductPurchaseWrapper>
              </div>
            </div>
          </div>
        </div>
      </ProductDetailContainer>
      <ProductDetailDesc />
    </>
  );
};

export default productDetails;
