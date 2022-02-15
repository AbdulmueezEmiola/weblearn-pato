import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from 'react';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
