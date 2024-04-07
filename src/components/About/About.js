import { Section, SectionTitle } from '../../styles/GlobalComponents'; 
import React from 'react';
import Timeline from '../TimeLine/TimeLine';
import { NavLink } from './AboutStyle';
import Link from 'next/link';


const AboutMe = () => {
  return (
    <Section>
      <SectionTitle>
        Towards Software Development 
      </SectionTitle>
      <Timeline/>
      <Link href="/ChemistryPage">
        <NavLink>
          Chemistry Career
        </NavLink>
      </Link>
    </Section>
  )
}

export default AboutMe;
