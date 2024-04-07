import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents'; 
import { NavLink } from './ChemistryStyles';
import Link from 'next/link';
import TimelineAbout from '../TimelineAbout/TimelineAbout';


const Chemistry = () => {
  return (
    <Section>
      <SectionTitle>
        My Career in Organic Chemistry 
      </SectionTitle>
      <TimelineAbout/>
      <Link href="/AboutPage">
        <NavLink>
          Software Development 
        </NavLink>
      </Link>
    </Section>
  )
}

export default Chemistry
