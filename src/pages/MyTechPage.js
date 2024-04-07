import React from 'react';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import MyTech from '../components/MyTech/MyTech';

const MyTechPage = () => {
  return (
    <html>
      <Head>
        <title>Technologies | Angela Novakovic Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <MyTech/>
      </Layout>
    </html>
  );
}

export default MyTechPage;
