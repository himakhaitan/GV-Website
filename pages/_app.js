import Head from "next/head";
import Navigation from "../layouts/Navigation";
import "../styles/globals.css";
import "../styles/helper.css";
import Footer from "../layouts/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/brand/logo-1080x1080.png' />
      </Head>
      <main>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
