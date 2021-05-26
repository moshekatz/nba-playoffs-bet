import '../styles/globals.css';
import React from 'react';
import { useAnalytics } from '../lib/analytics';

function MyApp({ Component, pageProps }) {
  useAnalytics();

  return <Component {...pageProps} />;
}

export default MyApp;
