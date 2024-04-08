import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index'; // Importing Section components
import theme from '../../themes/default'; 
import TimelineItem from './TimelineItem'; 


  function AboutTimeline() {
    const { colors } = theme; // Destructuring colors from theme
    return (
      <>
        {/* Profile section */}
        <Section id="profile" style={{
          marginLeft:"0px",
          }}>
          <SectionTitle>Profile:</SectionTitle>
            <SectionText >
              I am an innovative synthetic organic chemist with a strong interest in software engineering. My skills span across medicinal and process chemistry, with expertise in designing and synthesizing complex molecules. I possess strong teaching and mentoring skills, coupled with a passion for computer science.
            </SectionText>
        </Section>
        
        {/* Research Experience section */}
        <Section id="Journey-in-Chemistry">
          <SectionTitle>My Journey in Chemistry:</SectionTitle>
          <br/>
          <TimelineItem title="Bachelor of Science - First Class Honours Bio-Organic Chemistry, McGill University " date=" 2016">
            <SectionText>
              <br />
              I started my Bachelor at McGill University, in Montreal, Canada.
            </SectionText>
          </TimelineItem>
        <Section>
          <img src="/images/McGill.jpg" width="90%"  style={{
            marginBottom:"15px",
            borderRadius:"3%",
          }
            }/> <div/>
        </Section>
       
          <TimelineItem title="Undergraduate Research Assistant - McGill University, Friščić Group (2018 - 2019)" date=" March 2018">
            <SectionText>
              In my first research experience with the Friščić Group, I synthesized an organic cocrystal complex via mechanochemistry and discovered a new polymorph. This experience made me realize that my passion lies in solution chemistry, specifically organic chemistry.
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Undergraduate Research Assistant - McGill University, Ariya Group (2019 - 2020)" date=" September 2019">
            <SectionText>
            I optimized TiO<sub>2</sub> catalysts by doping for visible light photoactivation and designed an efficient experimental setup for evaluating materials' efficacy as sorbents. Through systematic analysis, I provided valuable insights into the catalyst's behavior.
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Undergraduate Research Assistant - McGill University, Tsantrizos Group (2019 - 2020)" date=" September 2019">
            <SectionText>
            I participated in a medicinal chemistry project focusing on synthesizing heterobicyclic molecules as potential inhibitors for geranyl geranyl pyrophosphate synthase. My involvement with the Tsantrizos group marked my initial foray into organic chemistry research within a medicinal or synthetic group.
            </SectionText>
          </TimelineItem>

          <img src="/images/MedChem.png" width="90%"  style={{
            marginBottom:"15px",
            borderRadius:"3%",
          }}/> <div/>

          <TimelineItem title="Research Assistant Intern - IntelliSyn R&D (2020)" date=" May 2020">
            <SectionText>
              During my professional journey, I've embarked on my first industrial experience, delving into synthesizing heterocyclic compounds for PROTACs at a milligram scale and contributing to a large-scale formulation project focused on sugar-based compounds. These endeavors involved internal and external collaborations, showcasing my ability to work effectively within multidisciplinary teams.
              (IntelliSyn has become X-Chem)
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Graduate Research Assistant - McGill University, Gleason Group (2020 - 2023)" date=" September 2020">
            <SectionText>
              Durign my master degree, I conducted screening of amine organocatalysts and diazepane carboxylate for iminium ion catalysis of the Claisen rearrangement. Subsequently, I developed a modular synthesis approach for new chiral hydrazide catalysts which were tested in the Cope rearrangement and Diels-Alder reaction, successfully achieving iminium ion catalysis with 40% enantiomeric excess.  
            </SectionText>
          </TimelineItem>

          <img src="/images/MyThesisProject.png" width="80%"  style={{
            marginBottom:"10px",
            borderRadius:"3%",
          }}/> <div/>
          
          <TimelineItem title="Research Associate - NuChem Sciences (2023 - Present)" date="October 2023">
            <SectionText>
              I tackled the synthesis of intricate molecules with scarce literature references, leading initial scale-up efforts and optimizing processes. Enhancing both yield and reproducibility, I optimized an oxidation step and significantly improved a Diels-Alder reaction. Additionally, I effectively communicated recent synthetic advancements to clients and collaborated with colleagues to devise innovative solutions. 
              (NuChem Sciences has become Sygnature Discovery)
            </SectionText>
          </TimelineItem>
        </Section>
        
      </>
    );
  }

export default AboutTimeline;
