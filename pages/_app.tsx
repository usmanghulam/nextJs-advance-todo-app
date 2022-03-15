import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import Layout from "../components/Layout/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document?.querySelector("#jss-server-side");
    if (jssStyles) jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
