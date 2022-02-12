import React from 'react';
import ProductCard from '@components/ProductCard';

const ProductsWrapper = () => {
  return (
    <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 gap-[20px] p-[15px]">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsWrapper;
