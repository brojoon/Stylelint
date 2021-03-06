import styled from '@emotion/styled';

export const ProductDetailDescWrapper = styled.section<{
  ProductDescNavIndex: string;
}>`
  margin-top: 100px;

  & .product-desc-nav {
    width: 100%;
    position: sticky;
    background: #a9b3bc;
    border-bottom: 1px solid #96a3ad;
    top: 66px;
    left: 0;
  }

  & .product-desc-nav-wrapper {
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
  }

  & .product-desc-nav-wrapper > ul {
    display: flex;
    margin: 0 1.6rem;
    padding: 16px 0;
    align-items: center;
  }

  & .product-desc-nav-wrapper > ul > li {
    margin-right: 0.6rem;
    color: #ffffff;
    cursor: pointer;
  }

  & .product-desc-nav-wrapper > ul > li > span {
    font-weight: bold;
    font-size: 1.25rem;

    padding: 0.4375rem 1.4375rem 0.5625rem;
  }

  & .product-desc-nav-wrapper > ul > li > span > span {
    font-size: 0.9rem;
    font-weight: 500;
    vertical-align: 0.125rem;
  }

  &
    .product-desc-nav-wrapper
    > ul
    > li:nth-of-type(${(props) => props.ProductDescNavIndex})
    > span {
    background: #858f9a;
    border-radius: 3.125rem;
  }

  & .product-desc-content-container {
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
  }

  & .product-desc-content-wrapper {
    width: 100%;
  }
`;
