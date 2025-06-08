import { AppProps } from "next/app";
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
//import "../styles/black-dashboard/assets/css/black-dashboard.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import '../styles/custom.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style jsx global>{`
          :root {
            --font-jetbrains-mono: ${jetbrainsMono.style.fontFamily};
          }
          * {
            font-family: var(--font-jetbrains-mono), 'Menlo', 'Meslo LG', monospace !important;
          }
        `}</style>
      </Head>
      <main className={jetbrainsMono.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
