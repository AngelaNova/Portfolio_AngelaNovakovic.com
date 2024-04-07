// pages/portfolio-project.js
import React from 'react';
import Head from 'next/head';
import {Layout} from '../layout/Layout';
import PortfolioProject from '../components/PortfolioProject/PortfolioProject';

const PortfolioProjectPage = () => {
  return (
    <html>
      <Head>
        <title>Portfolio Project | Angela Novakovic Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <PortfolioProject />
      </Layout>
    </html>
  );
}

export default PortfolioProjectPage;
