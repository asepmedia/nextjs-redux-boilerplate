import Layout from "@/components/organism/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
