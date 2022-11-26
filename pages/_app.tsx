import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(pageProps);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
