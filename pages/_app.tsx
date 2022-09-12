import "../styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux";
import Layout from "../layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
