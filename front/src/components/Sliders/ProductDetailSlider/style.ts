import styled from 'styled-components';

export const ProductDetailSlide = styled.div`
  width: 100%;

  position: relative;
  background-color: #000;
  & > img {
    border-radius: 0.625rem;
  }

  & > div {
    position: absolute;
    top: 50%;
    width: 100%;
  }

  & > div > img:nth-child(1) {
    width: 30px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  & > div > img:nth-child(2) {
    width: 30px;
    height: 40px;
    left: auto;
    right: 10px !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const ProductDetailSubSlide = styled.div<{
  ProductSubSlidePosX: string;
  ProductSlideIndex: number;
}>`
  margin-top: 5px;

  & .sub-slide-container {
    width: calc(100% + 10px);
    margin-left: -5px;
  }

  & .sub-slide-wrapper {
    position: relative;
    width: 100%;
  }

  & .sub-slide-img-container {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
  }

  & .sub-slide-img-wrapper {
    opacity: 1;
    width: 160%;
    transform: ${(props) => `translateX(${props.ProductSubSlidePosX}%)`};
    transition: transform ease 0.5s;
    position: relative;
    display: flex;
    top: 0;
    left: 0;
  }

  & .sub-slide-img-wrapper > div {
    width: 100%;
    margin: 5px;
    position: relative;
  }

  & .sub-slide-img-wrapper > div > img {
    width: 100%;
    height: auto;
    margin-left: 0;
    border-radius: 0.625rem;
    z-index: 50;
  }

  &
    .sub-slide-img-wrapper
    > div:nth-child(${(props) => props.ProductSlideIndex - 1}):after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff70;
    border-radius: 0.625rem;
    outline: 2px solid #925fff;
  }
  & .product-sub-slide-left {
    display: ${(props) =>
      `${props.ProductSubSlidePosX == '0' ? 'none' : 'block'}`};
    width: 48px;
    height: 48px;
    position: absolute;
    background-image: url(/img/product_sub_slide_left.png);
    background-repeat: no-repeat;
    left: 10px;
    top: 50%;
    z-index: 40;
    transform: translateY(-50%);
  }

  & .product-sub-slide-right {
    display: ${(props) =>
      `${props.ProductSubSlidePosX == '0' ? 'block' : 'none'}`};

    width: 48px;
    height: 48px;
    transform: translateY(-50%) scale(1, 1);
    position: absolute;
    background-image: url(/img/product_sub_slide_right.png);
    background-repeat: no-repeat;
    right: 10px;
    top: 50%;
    z-index: 40;
  }
`;
