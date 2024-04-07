import React from 'react';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import About from '../components/About/About';

const AboutPage = () => {
  return (
    <html>
      <Head>
        <title>About | Angela Novakovic Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <About/>
      </Layout>
    </html>
  )
}

export default AboutPage;
