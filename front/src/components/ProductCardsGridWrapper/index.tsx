import React, { useState } from 'react';
import ProductCard from '@components/ProductCard';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import router, { useRouter } from 'next/router';
import { ProductsGridContainer } from './style';
import { useIsTablet } from '@utils/Hooks';
import ModalBasket from '@components/Modals/ModalBasket';
import { IProducts } from '@typings/db';

const ProductsGridWrapper = () => {
  const [isModalBasket, setIsModalBasket] = useState(false);
  const router = useRouter();
  const { type, code } = router.query;
  const { data } = useQuery('products', () => fetcher(`/api/product`));

  const isTablet = useIsTablet();

  return (
    <>
      {isModalBasket && <ModalBasket setIsModalBasket={setIsModalBasket} />}
      <ProductsGridContainer IsTablet={isTablet}>
        {/* <div className=" grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 gap-[20px] p-[15px] w-[100%} h-[100%]"> */}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
        {data?.map((product: IProducts) => {
          if (product.type === type)
            return (
              <ProductCard
                key={product.id}
                data={product}
                setIsModalBasket={setIsModalBasket}
              />
            );
        })}
      </ProductsGridContainer>
    </>
  );
};

export default ProductsGridWrapper;
