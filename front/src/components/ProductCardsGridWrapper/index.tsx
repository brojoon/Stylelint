import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '@components/ProductCard';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import router, { useRouter } from 'next/router';
import { ProductsGridContainer } from './style';
import { useIsTablet, useScroll } from '@utils/Hooks';
import ModalBasket from '@components/Modals/ModalBasket';
import { IProducts } from '@typings/db';

const ProductsGridWrapper = () => {
  const [isModalBasket, setIsModalBasket] = useState(false);
  const [ProductCount, setProductCount] = useState(1);
  const router = useRouter();
  const { scrollY } = useScroll();
  const { type, code } = router.query;
  const { data } = useQuery('products', () => fetcher(`/api/product`));
  const scrollHeight = useRef(450);
  const isTablet = useIsTablet();

  useEffect(() => {
    if (ProductCount < 10) {
      if (scrollY > scrollHeight.current) {
        scrollHeight.current = scrollHeight.current + 800;
        setProductCount((prev) => prev + 1);
      }
    }
  }, [scrollY, scrollHeight, ProductCount]);

  return (
    <>
      {isModalBasket && <ModalBasket setIsModalBasket={setIsModalBasket} />}
      <ProductsGridContainer IsTablet={isTablet}>
        {/* <div className=" grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 gap-[20px] p-[15px] w-[100%} h-[100%]"> */}
        {data &&
          [...new Array(ProductCount)].map((_, index) => {
            return data?.map((product: IProducts) => {
              if (product.type === type)
                return (
                  <ProductCard
                    key={product.id}
                    data={product}
                    setIsModalBasket={setIsModalBasket}
                  />
                );
            });
          })}
      </ProductsGridContainer>
    </>
  );
};

export default ProductsGridWrapper;

// {data?.map((product: IProducts) => {
//   if (product.type === type)
//     return (
//       <ProductCard
//         key={product.id}
//         data={product}
//         setIsModalBasket={setIsModalBasket}
//       />
//     );
// })} */}
