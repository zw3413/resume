import { AppProps } from "next/app";
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
//import "../styles/black-dashboard/assets/css/black-dashboard.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import '../styles/custom.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
