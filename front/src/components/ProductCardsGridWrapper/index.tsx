import React from 'react';
import ProductCard from '@components/ProductCard';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import router, { useRouter } from 'next/router';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';
import { ProductsGridContainer } from './style';
import { useIsTablet } from '@utils/Hooks';

const ProductsGridWrapper = () => {
  const router = useRouter();
  const { type, code } = router.query;
  const { data, isLoading, error } = useQuery('products', () =>
    fetcher(`/api/product`),
  );

  const isTablet = useIsTablet();

  return (
    <ProductsGridContainer IsTablet={isTablet}>
      {/* <div className=" grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 gap-[20px] p-[15px] w-[100%} h-[100%]"> */}

      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
      {data?.map((product: any) => {
        if (product.type === type)
          return <ProductCard data={product} setIsModalBasket={false} />;
      })}
    </ProductsGridContainer>
  );
};

export default ProductsGridWrapper;
