import { Section, SectionTitle } from '../../styles/GlobalComponents'; 
import React from 'react';
import Timeline from '../TimeLine/TimeLine';
import TimelineSoftware from '../TimelineSoftware/TimelineSoftware';
import { NavLink } from './AboutStyle';
import Link from 'next/link';


const About = () => {
  return (
    <Section>
      <SectionTitle style={{
        marginTop:"130px",
      }}>
        Towards Software Development 
      </SectionTitle>
      <TimelineSoftware/>
      <Link href="/ChemistryPage">
        <NavLink>
          Chemistry Career
        </NavLink>
        <br/>
      </Link>
      <br/>
    </Section>
  )
}

export default About;
