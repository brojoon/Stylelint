import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { pageNameState } from '@states/Atom';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';
import Slider from '@components/Slider';
import ProductsWrapper from '@components/ProductsWrapper';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <>
      <header>
        <PreHeader />
        <Header />
      </header>
      <Slider />
      <ProductsWrapper />
      <ProductsWrapper />
    </>
  );
};

export default IndexPage;
