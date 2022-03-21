import React from 'react';
import ProductCard from '@components/ProductCard';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import router from 'next/router';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';

const ProductsGridWrapper = () => {
  const { type, code } = router.query;
  const { data, isLoading, error } = useQuery('products', () =>
    fetcher(`/api/product`),
  );

  return (
    <div>
      <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 gap-[20px] p-[15px] w-[100%} h-[100%]">
        {/* {data.map((product: any) => {
        if (product.type === type) return <ProductCard data={product} />;
      })} */}

        <ProductCard data={data[4]} />
        <ProductCard data={data[5]} />
        <ProductCard data={data[6]} />
        <ProductCard data={data[8]} />
      </div>
    </div>
  );
};

export default ProductsGridWrapper;
