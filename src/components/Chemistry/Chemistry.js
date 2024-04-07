import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents'; 
import { NavLink } from './ChemistryStyles';
import Link from 'next/link';


const Chemistry = () => {
  return (
    <Section>
      <SectionTitle>
        My Career in Organic Chemistry 
      </SectionTitle>
      
      <Link href="/AboutPage">
        <NavLink>
          Software Development 
        </NavLink>
      </Link>
    </Section>
  )
}

export default Chemistry
