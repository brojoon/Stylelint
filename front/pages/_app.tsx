import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <header>
        <Header />
      </header>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
