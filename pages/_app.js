import Head from "next/head";
import Script from "next/script";
import Navigation from "../layouts/Navigation";
import "../styles/globals.css";
import "../styles/helper.css";
import Footer from "../layouts/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script
      id="google-analytics-init"
      strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand/logo-1080x1080.png" />
      </Head>
      <main>
        {/* <Navigation />
        <Component {...pageProps} /> */}
        <Footer />
      </main>
    </>
  );
}
