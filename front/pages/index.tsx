import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { pageNameState } from '@states/Atom';

const IndexPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  return <div></div>;
};

export default IndexPage;
