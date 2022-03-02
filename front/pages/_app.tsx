import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PreHeader from '@components/layouts/PreHeader';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
