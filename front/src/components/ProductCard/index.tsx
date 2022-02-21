import React, { useCallback, useState } from 'react';
import { ProductCardIconWrapper } from './style';

const ProductCard = () => {
  const [quickview, setQuickview] = useState(false);
  const [isProductDibs, setIsProductDibs] = useState(false);
  const onClickProductDibs = useCallback(() => {
    setIsProductDibs((prev) => !prev);
  }, []);
  return (
    <div>
      <div
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
          src="/img/product3.gif"
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
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="text-[#969696] text-[0.75rem]">스타일린트[자체제작]</h3>
        <p className="text-[#212121] text-[0.85rem] tracking-[-0.5px]">
          bs5437 리리 언발란스 코튼 셔츠
        </p>
        <div className="flex tracking-[-0.5px] justify-between my-[10px] py-[12px] border-b-[1px] border-[#F7F7F7]">
          <div className="">
            <span className="font-semibold">43,900</span>
            <span className="ml-[5px] text-[17px] text-[#FF9995]">35%</span>
          </div>
          <span>
            <span className="text-[0.75rem]">무료배송</span>
          </span>
        </div>
        <div className="flex justify-between items-center text-[#969696] text-[7.5px]">
          <div className="flex">
            <span className="flex items-center after:w-[1px] after:h-[6.25px] after:bg-[#e8e8e8] after:mx-[5px] after:inline-block">
              구매수 3,716
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
            <span className="ml-[10px] w-[23px] h-[24px] bg-[position:-123px_-174px] bg-[url('~@../../../public/img/imags.png')] inline-block"></span>
          </ProductCardIconWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
