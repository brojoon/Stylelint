import { IProducts } from '@typings/db';
import { baseApiUrl, baseFrontUrl } from '@utils/utils/const';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import { ProductCardContainer, ProductCardIconWrapper } from './style';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { BasketAddFetch } from '@store/modules/basketAdd';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import axios from 'axios';
import { ModalBasketContainer } from '@components/Modals/ModalBasket/style';
import ModalBasket from '@components/Modals/ModalBasket';
import { asleep } from '@utils/utils/asleep';
import { ClipLoader } from 'react-spinners';
import { useIsMobile, useIsTablet, useIsTablet1024 } from '@utils/Hooks';

interface Props {
  data: IProducts;
}

const ProductCard2: VFC<Props> = ({ data }) => {
  const [quickview, setQuickview] = useState(false);
  const [isClickProductImg, setIsClickProductImg] = useState(false);
  const [isDibLoading, setIsDibLoading] = useState(false);
  const [isBasketLoading, setIsBasketLoading] = useState(false);
  const [isProductDibs, setIsProductDibs] = useState(false);
  const router = useRouter();
  const IsTablet = useIsTablet();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery('user', () => fetcher(`api/user/profile`));

  const onClickProductCardImg = useCallback(() => {
    router.push(baseFrontUrl + `/product/${data.type}/${data.code}`);
  }, [data, router, baseFrontUrl]);

  return (
    <>
      <ProductCardContainer>
        <div>
          <div
            onClick={onClickProductCardImg}
            className="relative z-10 rounded-[10px]"
            onMouseEnter={() => {
              setQuickview(true);
            }}
            onMouseLeave={() => {
              setQuickview(false);
            }}
          >
            <img
              className=" w-[100%] h-[100%] rounded-[10px] bg-contain"
              src={`${baseApiUrl}${data.image}`}
            />
            <div
              className={`${
                quickview ? 'flex' : 'hidden'
              } items-center justify-center absolute left-[0] top-[0] w-[100%] h-[100%] rounded-[10px] bg-white-rgba`}
            >
              <div className=" h-[34px] w-[120px] bg-[position:-113px_-229px] bg-no-repeat bg-[url('/img/imags.png')]"></div>
            </div>
          </div>
          <div>
            {/* <h3 className="text-[#969696] text-[0.75rem]">
            스타일린트[자체제작]
          </h3> */}
            <div className="text-[#212121] text-[0.85rem] tracking-[-0.5px] product-desc">
              {data.name}
            </div>
            <div className="flex tracking-[-0.5px] justify-between my-[10px] py-[12px] border-b-[1px] border-[#F7F7F7]">
              <div className="">
                <span className="font-semibold">
                  {data.price.toLocaleString()}
                </span>
                <span className="ml-[5px] text-[17px] text-[#FF9995]">32%</span>
              </div>
              {IsTablet ? (
                ''
              ) : (
                <span>
                  <span className="text-[0.75rem]">무료배송</span>
                </span>
              )}
            </div>
            <div className="text-[#969696] text-[7.5px]">스타일린트</div>
            <div className="flex justify-between items-center text-[#969696] text-[7.5px]">
              <div className="flex">
                <span className="flex items-center after:w-[1px] after:h-[6.25px] after:bg-[#e8e8e8] after:mx-[5px] after:inline-block">
                  구매수 {data.perchase_quantity}
                </span>
                <span>리뷰수 207</span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <span>특가 종료</span>
          <span onClick={onClickProductCardImg}></span>
        </div>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard2;
