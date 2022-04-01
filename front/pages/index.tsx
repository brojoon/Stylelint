import Link from 'next/link';

import Header from '@components/layouts/Header';
import MainSlider from '@components/Sliders/MainSlider';
import ProductsGridWrapper from '@components/ProductCardsGridWrapper';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';
import { HomeContainer } from '../public/style';
import MainEventSlider from '@components/Sliders/MainEventSlider';
import axios from 'axios';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import { GetServerSideProps } from 'next';
import { baseApiUrl } from '@utils/utils/const';
import { VFC } from 'react';
import { useIsMobile, useIsTablet } from '@utils/Hooks';
import MobileMainEventSlider from '@components/Sliders/MobileMainEvetnSlider';

interface Props {
  ssrProducstData: any;
}

const IndexPage: VFC<Props> = ({ ssrProducstData }) => {
  const { data, isLoading, error } = useQuery(
    'products',
    () => fetcher(`/api/product`),
    {
      initialData: ssrProducstData,
    },
  );
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <HomeContainer>
      <MainSlider />
      <div className="home-wrapper">
        <div>
          <h3>단 하나만 사도 배송비 무료 🚚</h3>
        </div>
        <ProductsCardSlider products={data?.slice(0, 5)} />
        <div className="product-more-btn">
          <Link href="/product/blouse">
            <a>더보기</a>
          </Link>
        </div>
        <div>
          <h3>러블리한 봄신상!🌷 할인까지!?</h3>
        </div>
        <ProductsCardSlider products={data?.slice(5, 10)} />
        <div className="product-more-btn">
          <Link href="/product/jacket">
            <a>더보기</a>
          </Link>
        </div>
        <div>
          <h3>내일 뭐 입지? 역대급 빠른배송🤩</h3>
        </div>
        <ProductsCardSlider products={data?.slice(10, 15)} />
        <div className="product-more-btn">
          <Link href="/product/shirts">
            <a>더보기</a>
          </Link>
        </div>
        <div>
          <h3>어떤 걸 구매해도 실패 없는 자체브랜드🙆‍♀️</h3>
        </div>
        <ProductsCardSlider products={data?.slice(15, 20)} />
        <div className="product-more-btn">
          <Link href="/product/skirt">
            <a>더보기</a>
          </Link>
        </div>
      </div>
      {isTablet ? <MobileMainEventSlider /> : <MainEventSlider />}
    </HomeContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const ssrProducstData = await fetcher(`${baseApiUrl}/api/product`);

  // data 없을 땐 리턴값을 달리함
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  //pageProps로 넘길 데이터
  return { props: { ssrProducstData } };
};

export default IndexPage;
