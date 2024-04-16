import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents'; 
import { NavLink } from './ChemistryStyles';
import Link from 'next/link';
import TimelineAbout from '../TimelineAbout/TimelineAbout';


const Chemistry = () => {
  return (
    <Section> 
      <SectionTitle style={{
        marginTop:"130px",
      }}>
        My Career in Organic Chemistry 
      </SectionTitle>
      <TimelineAbout/>
      <Link href="/AboutPage"marginBottom="500px">
        <NavLink>
          Software Development 
        </NavLink>
        <br/>
      </Link>
      <br/>
    </Section>
  )
}

export default Chemistry
