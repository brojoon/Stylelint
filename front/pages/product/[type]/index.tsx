import ProductsGridWrapper from '@components/ProductCardsGridWrapper';
import React from 'react';
import { SelectedTypeProductsContainer } from './style';

const SelectedTypeProducts = () => {
  return (
    <SelectedTypeProductsContainer>
      <div className="products-header-wrapper">
        <div>
          <h3 className="title">BLOUSE</h3>
          <p>Delivery Included / Free Shipping </p>

          <ProductsGridWrapper />
        </div>
      </div>
      <div className="products-products-wrapper">
        <ProductsGridWrapper />
        <ProductsGridWrapper />
        <ProductsGridWrapper />
      </div>
    </SelectedTypeProductsContainer>
  );
};

export default SelectedTypeProducts;
