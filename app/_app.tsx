import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Adjust the path if needed
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Ensure favicon.ico is in the public directory */}
        <title>Your Site Title</title> {/* Optional: Add your site title */}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
