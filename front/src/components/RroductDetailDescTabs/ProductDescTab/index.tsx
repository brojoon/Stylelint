import React, { useCallback, useState } from 'react';
import { ProductDescTabContainer } from './style';

const ProductDescTab = () => {
  const [isMoreProductInfo, setIsMoreProductInfo] = useState(false);
  const onClickInfoBtn = useCallback(() => {
    setIsMoreProductInfo((prev) => !prev);
  }, []);
  return (
    <ProductDescTabContainer IsMoreProductInfo={isMoreProductInfo}>
      <div className="info-body-container">
        <div>
          <img src="./img/product1/product_detail_1.jpg" />
        </div>
        <div className="flex justify-center">
          <img src="./img/product1/product_detail_2.jpg" />
        </div>
        <div>
          <img src="./img/product1/product_detail_3.jpg" />
        </div>
        <div>
          <img src="./img/product1/product_detail_4.jpg" />
        </div>
      </div>
      <div className="info-btn-wrapper" onClick={onClickInfoBtn}></div>
    </ProductDescTabContainer>
  );
};
export default ProductDescTab;
