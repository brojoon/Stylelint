import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { pageNameState } from '@states/Atom';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';
import MainSlider from '@components/Sliders/MainSlider';
import ProductsGridWrapper from '@components/ProductCardsGridWrapper';
import ProductsCardSlider from '@components/Sliders/ProductCardsSlider';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <>
      <header>
        <PreHeader />
        <Header />
      </header>
      <MainSlider />
      <ProductsCardSlider />
      <ProductsCardSlider />
      <ProductsCardSlider />
      <ProductsCardSlider />
    </>
  );
};

export default IndexPage;
