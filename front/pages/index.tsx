import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { pageNameState } from '@states/Atom';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return (
    <>
      <header>
        <PreHeader />
        <Header />
      </header>
    </>
  );
};

export default IndexPage;
