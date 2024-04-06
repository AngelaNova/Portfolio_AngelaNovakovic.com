import { Section, SectionTitle } from '../../styles/GlobalComponents'; 
import React from 'react';
import Timeline from '../TimeLine/TimeLine';

const AboutMe = () => {
  return (
    <Section>
      <SectionTitle>
        About Me
      </SectionTitle>
      <Timeline/>
    </Section>
  )
}

export default AboutMe;
