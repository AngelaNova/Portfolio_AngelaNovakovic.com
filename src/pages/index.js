import React, { useEffect } from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { useRouter } from 'next/router';
import PortfolioPage from './PortfolioPage';

const Home = () => {
  useEffect(() => {
    document.title = "Angela's Portfolio"; // Set your desired title here
  }, []);

  const router = useRouter();
  const portfolioProjectPath = './PortfolioPage'; 
  // Check if the current route pathname matches the portfolio project path
  const shouldRenderPortfolioProject = router.pathname === portfolioProjectPath;

  return (
    <Layout>
      {shouldRenderPortfolioProject ? (
        <PortfolioPage />
      ) : (
        <>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </>
      )}
    </Layout>
  );
};

export default Home;
