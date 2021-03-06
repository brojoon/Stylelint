import Link from 'next/link';
import MainSlider from '@components/Sliders/MainSlider';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';
import { HomeContainer } from '../public/style';
import MainEventSlider from '@components/Sliders/MainEventSlider';
import { useQuery } from 'react-query';
import fetcher from '@utils/utils/fetcher';
import { GetServerSideProps } from 'next';
import { baseApiUrl } from '@utils/utils/const';
import { VFC } from 'react';
import { useIsTablet, useIsTablet1024 } from '@utils/Hooks';
import MobileMainEventSlider from '@components/Sliders/MobileMainEvetnSlider';
import ProductCard2Wrapper from '@components/ProductCard2Wrapper';
import { IProducts } from '@typings/db';

interface Props {
  ssrProducstData: IProducts[];
}

const IndexPage: VFC<Props> = ({ ssrProducstData }) => {
  const { data, isLoading, error } = useQuery(
    'products',
    () => fetcher(`/api/product`),
    {
      initialData: ssrProducstData,
    },
  );

  const isTablet = useIsTablet();
  const isTablet1024 = useIsTablet1024();

  return (
    <HomeContainer>
      {data && (
        <>
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
            {!isTablet1024 && (
              <>
                <div>
                  <h3>어떤 걸 구매해도 실패 없는 자체브랜드🙆‍♀️</h3>
                </div>
                <ProductsCardSlider products={data?.slice(15, 20)} />
                <div className="product-more-btn">
                  <Link href="/product/skirt">
                    <a>더보기</a>
                  </Link>
                </div>
              </>
            )}
            {isTablet ? <MobileMainEventSlider /> : <MainEventSlider />}

            <div>
              <h3>이게 꿈이야 생일이야?! 타임세일⏰ </h3>
            </div>
            <ProductCard2Wrapper products={data?.slice(20, 25)} />
            <div className="product-more-btn-last">
              <Link href="/product/dress">
                <a>더보기</a>
              </Link>
            </div>
          </div>
        </>
      )}
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
