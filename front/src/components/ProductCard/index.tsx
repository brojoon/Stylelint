import { IProducts } from '@typings/db';
import { baseApiUrl } from '@utils/utils/const';
import React, { useCallback, useEffect, useRef, useState, VFC } from 'react';
import { ProductCardContainer, ProductCardIconWrapper } from './style';
import Router, { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { BasketAddFetch } from '@store/modules/basketAdd';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

interface Props {
  data: IProducts;
  setIsModalBasket: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCard: VFC<Props> = ({ data, setIsModalBasket }) => {
  const [quickview, setQuickview] = useState(false);
  const [isClickProductImg, setIsClickProductImg] = useState(false);
  const [isDibLoading, setIsDibLoading] = useState(false);
  const [isBasketLoading, setIsBasketLoading] = useState(false);
  const [isProductDibs, setIsProductDibs] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  // const cardDecoColorRef = useRef([
  //   '#EBCBBD',
  //   '#4A8FA9',
  //   '#DA3737',
  //   '#B6E0EF',
  //   '#464646',
  //   '#923B55',
  //   '#79B0E4',
  //   '#E0A564',
  //   '#BF95C7',
  //   '#FFF5A0',
  //   '#FFFDF0',
  //   '#E4CBAD',
  // ]);

  const {
    data: user,
    isLoading,
    error,
  } = useQuery('user', () => fetcher(`api/user/profile`));

  const { data: dibs } = useQuery('user/dibs', () => fetcher(`api/user/dibs`));

  useEffect(() => {
    if (dibs) {
      for (let i = 0; i < dibs.length; i++) {
        if (dibs[i].product_name == data.name) setIsProductDibs(true);
      }
    }
  }, [dibs, data]);

  const onClickProductBasket = useCallback(async () => {
    if (!user) {
      alert('로그인 후 장바구니 이용이 가능합니다.');
      return;
    } else {
      setIsBasketLoading(true);
      const res: any = await dispatch(
        BasketAddFetch([
          {
            userId: user.userId,
            product_name: data.name,
            price: data.price,
            quantity: 1,
            size: 'S',
            color: 'Red',
            image: data.image,
          },
        ]),
      );
      if (res.meta.requestStatus === 'fulfilled') {
        setIsModalBasket(true);
      }
      setIsBasketLoading(false);
    }
  }, [user]);

  const onClickProductDibs = useCallback(async () => {
    if (!user) {
      alert('로그인 후 찜하기가 가능합니다.');
      return;
    }
    setIsDibLoading(true);
    if (isProductDibs) {
      const ret = await axios.post('api/user/dibs/delete', {
        userId: user.userId,
        product_name: data.name,
      });
      if (ret.status === 200) setIsProductDibs(false);
    } else {
      const ret = await axios.post('api/user/dibs/save', {
        userId: user.userId,
        product_name: data.name,
      });
      if (ret.status === 200) setIsProductDibs(true);
      // dibsRefetch();
    }
    setIsDibLoading(false);
  }, [isProductDibs, user, data]);

  // const onClickProductCardImg = useCallback(() => {
  //   router.push(baseFrontUrl + `/product/${data.type}/${data.code}`);
  // }, [data, router, baseFrontUrl]);

  const onMouseDownSlide = useCallback((e) => {
    setIsClickProductImg(true);
  }, []);

  const onMouseMoveSlide = useCallback((e) => {
    setIsClickProductImg(false);
  }, []);

  const onMouseUpSlide = useCallback(
    (e) => {
      if (isClickProductImg) router.push(`/product/${data.type}/${data.code}`);
    },
    [router, data, isClickProductImg],
  );

  // const CardDecoColor = [
  //   '#EBCBBD',
  //   '#4A8FA9',
  //   '#DA3737',
  //   '#B6E0EF',
  //   '#464646',
  //   '#923B55',
  //   '#79B0E4',
  //   '#E0A564',
  //   '#BF95C7',
  //   '#FFF5A0',
  //   '#FFFDF0',
  //   '#E4CBAD',
  // ];

  return (
    <>
      <ProductCardContainer>
        <div
          // onClick={onClickProductCardImg}
          className="relative z-10 rounded-[10px] w-[100%]"
          onMouseEnter={() => {
            setQuickview(true);
          }}
          onMouseLeave={() => {
            setQuickview(false);
          }}
          onMouseDown={onMouseDownSlide}
          onMouseMove={onMouseMoveSlide}
          onMouseUp={onMouseUpSlide}
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
            <div className=" h-[34px] w-[120px] bg-[position:-113px_-229px] bg-no-repeat bg-[url('~@../../../public/img/imags.png')]"></div>
          </div>
        </div>
        <div>
          <div className="flex mt-[10px] mb-[5px]">
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#EBCBBD] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#4A8FA9] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#DA3737] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#B6E0EF] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#464646] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#923B55] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#79B0E4] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#E0A564] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#BF95C7] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#FFF5A0] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#FFFDF0] border border-[#efefef] rounded-[3px] block`}
            ></span>
            <span
              className={`w-[17px] h-[9px] ml-[3px] bg-[#E4CBAD] border border-[#efefef] rounded-[3px] block`}
            ></span>
          </div>
          <h3 className="text-[#969696] text-[0.75rem]">
            스타일린트[자체제작]
          </h3>
          <div className="text-[#212121] text-[0.85rem] tracking-[-0.5px] product-desc">
            {data.name}
          </div>
          <div className="flex items-center tracking-[-0.5px] justify-between my-[10px] py-[12px] border-b-[1px] border-[#F7F7F7]">
            <div className="">
              <span className="font-semibold">
                {data.price.toLocaleString()}
              </span>
              <span className="ml-[5px] text-[17px] text-[#FF9995]">32%</span>
            </div>
            <span>
              <span className="text-[0.75rem]">무료배송</span>
            </span>
          </div>
          <div className="flex justify-between items-center text-[#969696] text-[7.5px]">
            <div className="flex">
              <span className="flex items-center after:w-[1px] after:h-[6.25px] after:bg-[#e8e8e8] after:mx-[5px] after:inline-block">
                판매수 {data.perchase_quantity}
              </span>
              <span>리뷰수 {data?.review_count}</span>
            </div>
            <ProductCardIconWrapper
              IsProductDibs={isProductDibs}
              className="flex items-center"
            >
              {isDibLoading ? (
                <ClipLoader color={'#36d7b7'} size={20} />
              ) : (
                <span
                  onClick={onClickProductDibs}
                  className="w-[23px] h-[20px] bg-[position:-45px_-177px] bg-[url('~@../../../public/img/imags.png')] inline-block"
                ></span>
              )}
              {isBasketLoading ? (
                <span className="ml-[13px]">
                  <ClipLoader color={'#36d7b7'} size={20} />
                </span>
              ) : (
                <span
                  onClick={onClickProductBasket}
                  className="ml-[10px] w-[23px] h-[24px] bg-[position:-123px_-174px] bg-[url('~@../../../public/img/imags.png')] inline-block"
                ></span>
              )}
            </ProductCardIconWrapper>
          </div>
        </div>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
