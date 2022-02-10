import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { pageNameState } from '@states/Atom';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';
import Slider from '@components/Slider';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <>
      <header>
        <PreHeader />
        <Header />
      </header>
      <Slider />
    </>
  );
};

export default IndexPage;
