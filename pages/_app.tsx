import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
//import "../styles/black-dashboard/assets/css/black-dashboard.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import '../styles/custom.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
