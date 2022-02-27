import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { pageNameState } from '@states/Atom';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';
import MainSlider from '@components/Sliders/MainSlider';
import ProductsGridWrapper from '@components/ProductCardsGridWrapper';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';
import { HomeContainer } from './style';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

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
    </HomeContainer>
  );
};

export default IndexPage;
