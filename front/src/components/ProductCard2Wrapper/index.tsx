import ProductCard2 from '@components/ProductCard2';
import { IProducts } from '@typings/db';
import { useIsTablet1024 } from '@utils/Hooks';
import React, { VFC } from 'react';
import { ProductCard2Container } from './style';

interface Props {
  products: IProducts[];
}

const ProductCard2Wrapper: VFC<Props> = ({ products }) => {
  const isTablet1024 = useIsTablet1024();
  return (
    <ProductCard2Container>
      {isTablet1024 ? (
        <div>
          <ProductCard2 data={products[0]} />
          <ProductCard2 data={products[1]} />
          <ProductCard2 data={products[2]} />

          <ProductCard2 data={products[3]} />
          <ProductCard2 data={products[4]} />
          <ProductCard2 data={products[2]} />
        </div>
      ) : (
        <>
          <div>
            <ProductCard2 data={products[0]} />
            <ProductCard2 data={products[1]} />
            <ProductCard2 data={products[2]} />
          </div>
          <div>
            <ProductCard2 data={products[3]} />
            <ProductCard2 data={products[4]} />
            <ProductCard2 data={products[2]} />
          </div>
        </>
      )}
    </ProductCard2Container>
  );
};

export default ProductCard2Wrapper;
