import ProductsGridWrapper from '@components/ProductCardsGridWrapper';
import { useIsTablet } from '@utils/Hooks';
import { useRouter } from 'next/router';
import React from 'react';
import { SelectedTypeProductsContainer } from 'styles/page/product';

const SelectedTypeProducts = () => {
  const router: any = useRouter();
  const isTablet = useIsTablet();
  const { type } = router.query;

  return (
    <SelectedTypeProductsContainer>
      <div className="products-header-wrapper">
        <div>
          <h3 className="title">{type?.toUpperCase()}</h3>
          <p>Delivery Included / Free Shipping </p>

          <ProductsGridWrapper />
        </div>
      </div>
    </SelectedTypeProductsContainer>
  );
};

export default SelectedTypeProducts;
