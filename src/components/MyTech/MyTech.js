import { Section, SectionText} from '../../styles/GlobalComponents'; 
import React from 'react';
import Technologies from '../Technologies/Technologies';


const MyTech = () => {
  return (
    <Section>
      <SectionText>
        This is my Techs
      </SectionText>
      <Technologies/>
    </Section>
  )
}

export default MyTech;
