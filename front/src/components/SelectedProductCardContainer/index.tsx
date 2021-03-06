import { ISelecedProduct } from '@pages/product/[type]/[code]';
import React, { useCallback, VFC } from 'react';
import { Container } from './style';

interface Props {
  selectedProductArr: ISelecedProduct[];
  setSelectedProductArr: React.Dispatch<
    React.SetStateAction<ISelecedProduct[]>
  >;
}

const SelectedProductCardContainer: VFC<Props> = ({
  selectedProductArr,
  setSelectedProductArr,
}) => {
  const onClickDeleteProduct = useCallback(
    (e) => {
      selectedProductArr.splice(e.target.dataset.index, 1);
      setSelectedProductArr([...selectedProductArr]);
    },
    [selectedProductArr],
  );
  return (
    <Container>
      <ul>
        {selectedProductArr?.map((product: ISelecedProduct, index) => {
          return (
            <li
              key={product.size + product.color + product.price + index}
              className="selected-list"
            >
              <div>
                <span>
                  {product.product_name + ' ' + product.quantity + '개'}{' '}
                </span>
                <div className="product-info">
                  <div className="product-option">
                    <span>사이즈: {product.size} </span>
                    <span>색상: {product.color}</span>
                  </div>
                  <div>
                    <span>
                      {(product.quantity * product.price).toLocaleString()}원
                    </span>
                    <button
                      data-index={index}
                      className="close"
                      onClick={onClickDeleteProduct}
                    ></button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default SelectedProductCardContainer;
