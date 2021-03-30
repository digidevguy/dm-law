import { CssBaseline } from "@material-ui/core";
import Head from "next/head";

import Layout from "../components/layouts/main-layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
