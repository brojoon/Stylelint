import Link from 'next/link';

import Header from '@components/layouts/Header';
import MainSlider from '@components/Sliders/MainSlider';
import ProductsGridWrapper from '@components/ProductCardsGridWrapper';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';
import { HomeContainer } from './style';
import MainEventSlider from '@components/Sliders/MainEventSlider';
import axios from 'axios';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';

const IndexPage = () => {
  // const { data, isLoading, error } = useQuery('queryKey1', () =>
  //   fetcher(`/api/product/${code}`),
  // );

  return (
    <HomeContainer>
      <MainSlider />
      <div>
        <Link href="/test1">
          <h3>단 하나만 사도 배송비 무료</h3>
        </Link>
      </div>
      <ProductsCardSlider />
      <div className="product-more-btn">
        <Link href="/product/coat">
          <a>더보기</a>
        </Link>
      </div>
      <div>
        <Link href="/test3">
          <h3>단 하나만 사도 배송비 무료</h3>
        </Link>
      </div>
      <ProductsCardSlider />
      <div className="product-more-btn">
        <Link href="/test">
          <a>더보기</a>
        </Link>
      </div>
      <div>
        <Link href="/test4">
          <h3>단 하나만 사도 배송비 무료</h3>
        </Link>
      </div>
      <ProductsCardSlider />
      <div className="product-more-btn">
        <Link href="/test">
          <a>더보기</a>
        </Link>
      </div>
      <div>
        <Link href="/test5">
          <h3>단 하나만 사도 배송비 무료</h3>
        </Link>
      </div>
      <ProductsCardSlider />
      <div className="product-more-btn">
        <Link href="/test">
          <a>더보기</a>
        </Link>
      </div>

      <MainEventSlider />
    </HomeContainer>
  );
};

export default IndexPage;
