import React from 'react';
import Head from 'next/head';
import Chemistry from '../components/Chemistry/Chemistry';
import { Layout } from '../layout/Layout';

const ChemistryPage = () => {
  return (
    <html>
      <Head>
        <title>Chemistry | Angela Novakovic Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Chemistry/>
      </Layout>
    </html>
  )
}

export default ChemistryPage
