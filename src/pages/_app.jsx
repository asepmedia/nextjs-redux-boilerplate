import Spinner from '@/components/molecules/Spinner';
import Layout from '@/components/organism/layout';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Spinner />}>
          <AnimatePresence mode={'wait'}>{getLayout(<Component {...pageProps} />)}</AnimatePresence>
        </Suspense>
      </Provider>
    </>
  );
}
