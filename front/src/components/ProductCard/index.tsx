import { IProducts } from '@typings/db';
import { baseApiUrl, baseFrontUrl } from '@utils/utils/const';
import React, { useCallback, useState, VFC } from 'react';
import { ProductCardContainer, ProductCardIconWrapper } from './style';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AddBasketFetch } from '@store/modules/addBasket';

interface Props {
  data: IProducts;
}

const ProductCard: VFC<Props> = ({ data }) => {
  const [quickview, setQuickview] = useState(false);
  const [isProductDibs, setIsProductDibs] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onClickProductBasket = useCallback(() => {
    dispatch(
      AddBasketFetch({
        userId: '111',
        product_name: data.code,
        price: data.price,
        quantity: 1,
        size: 'S',
        color: 'Red',
        image: data.image,
      }),
    );
  }, []);
  const onClickProductDibs = useCallback(() => {
    setIsProductDibs((prev) => !prev);
  }, []);

  const onClickProductCardImg = useCallback(() => {
    router.push(baseFrontUrl + `/product/${data.type}/${data.code}`);
  }, [data, router, baseFrontUrl]);

  return (
    <ProductCardContainer>
      <div
        onClick={onClickProductCardImg}
        className="relative z-10 rounded-[10px] w-[100%]"
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
          <div className=" h-[34px] w-[120px] bg-[position:-113px_-229px] bg-no-repeat bg-[url('~@../../../public/img/imags.png')]"></div>
        </div>
      </div>
      <div>
        <div className="flex mt-[10px] mb-[5px]">
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#EBCBBD] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#4A8FA9] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#DA3737] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#B6E0EF] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#464646] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#923B55] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#79B0E4] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#E0A564] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#BF95C7] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#FFF5A0] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#FFFDF0] border border-[#efefef] rounded-[3px] block"></span>
          <span className="w-[17px] h-[9px] ml-[3px] bg-[#E4CBAD] border border-[#efefef] rounded-[3px] block"></span>
        </div>
        <h3 className="text-[#969696] text-[0.75rem]">스타일린트[자체제작]</h3>
        <div className="text-[#212121] text-[0.85rem] tracking-[-0.5px] product-desc">
          {data.name}
        </div>
        <div className="flex tracking-[-0.5px] justify-between my-[10px] py-[12px] border-b-[1px] border-[#F7F7F7]">
          <div className="">
            <span className="font-semibold">{data.price.toLocaleString()}</span>
            <span className="ml-[5px] text-[17px] text-[#FF9995]">35%</span>
          </div>
          <span>
            <span className="text-[0.75rem]">무료배송</span>
          </span>
        </div>
        <div className="flex justify-between items-center text-[#969696] text-[7.5px]">
          <div className="flex">
            <span className="flex items-center after:w-[1px] after:h-[6.25px] after:bg-[#e8e8e8] after:mx-[5px] after:inline-block">
              구매수 {data.perchase_quantity}
            </span>
            <span>리뷰수 207</span>
          </div>
          <ProductCardIconWrapper
            IsProductDibs={isProductDibs}
            className="flex items-center"
          >
            <span
              onClick={onClickProductDibs}
              className="w-[23px] h-[20px] bg-[position:-45px_-177px] bg-[url('~@../../../public/img/imags.png')] inline-block"
            ></span>
            <span
              onClick={onClickProductBasket}
              className="ml-[10px] w-[23px] h-[24px] bg-[position:-123px_-174px] bg-[url('~@../../../public/img/imags.png')] inline-block"
            ></span>
          </ProductCardIconWrapper>
        </div>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
function PutBasketFetch(arg0: {
  userId: string;
  product_name: string;
  price: number;
  quantity: number;
  image: string;
}): any {
  throw new Error('Function not implemented.');
}
