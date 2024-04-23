import React, {useEffect} from 'react';
import Head from 'next/head';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider } from '../styles/GlobalComponents';
import { preventScroll } from '../styles/ScrollControl';
import Link from 'next/link';
import { NavLink } from '../components/Chemistry/ChemistryStyles';



const Home = () => {
  useEffect(() => {
    preventScroll(); // Call the preventScroll function when the component mounts
  }, []);

  return (
    <html>
      <Head>
        <title>Angela Novakovic Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout >
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Section>
        <div style={{
          paddingBottom:"100px",
        }}>
          <Link href="/MyTechPage">
            <NavLink>
              Learn More 
            </NavLink>
          </Link>
        </div>
        <SectionDivider colorAlt />
        </Section>
        <Timeline />
        <Acomplishments />
      </Layout>
    </html>



  );
}

export default Home;
