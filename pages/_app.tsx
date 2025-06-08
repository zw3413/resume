import { AppProps } from "next/app";
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
//import "../styles/black-dashboard/assets/css/black-dashboard.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import '../styles/custom.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style jsx global>{`
          * {
            font-family: 'JetBrains Mono', 'Menlo', 'Meslo LG', monospace !important;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
