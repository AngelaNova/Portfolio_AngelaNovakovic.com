import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index'; // Importing Section components
import theme from '../../themes/default'; 
import TimelineItem from './TimelineItem'; 


  function AboutTimeline() {
    const { colors } = theme; // Destructuring colors from theme
    return (
      <>
        {/* Profile section */}
        <Section id="profile">
          <SectionTitle>Profile:</SectionTitle>
            <SectionText>
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
            marginBottom:"15px",}
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
              - Medicinal chemistry project focused on a multistep pathway (8+ steps) of heterobicyclic molecules as bioisosteres of substrates used by GGPPS (geranyl geranyl pyrophosphate synthase) which would act as inhibitors<br />
              - Analytical techniques utilized during the project – LCMS, NMR, flash chromatography<br />
              - Worked towards investigating SAR (structure-activity-relationship) of the scaffold of interest, however COVID-19 halted the project<br />
              - For similar project reference, see: J. Med. Chem. 2022, 65, 2471−2496
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Research Assistant Intern - IntelliSyn R&D (2020)" date=" May 2020">
            <SectionText>
              - Worked on the synthesis of heterocyclic compounds at a mg scale towards PROTACs (Proteolysis-targeting chimeras) with internal and external collaborations<br />
              - Worked on a large scale, sugar-based, formulation project (&gt;100g scale)<br />
              - Analytical instruments used - flash chromatography/biotage, NMR, LCMS, Smart Evaporator (for high boiling point solvent), lyophilizer
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Graduate Research Assistant - McGill University, Gleason Group (2020 - 2023)" date=" September 2020">
            <SectionText>
              - Thesis title: “Development of Modular Syntheses towards Chiral Hydrazide Catalysts and Investigation of Organocatalytic Claisen Rearrangement Reactions” – Manuscript in preparation<br />
              - Screened amine organocatalysts and diazepane carboxylate towards iminium ion catalysis of the Claisen rearrangement<br />
              - Developed a modular synthesis towards new chiral hydrazide catalysts from inexpensive material with only two steps requiring flash column chromatography and analyzed with VT NMR<br />
              - Tested novel chiral catalysts in the Cope rearrangement and Diels-Alder reaction – iminium ion catalysis observed and 40%ee achieved<br />
              - Utilized HPLC and GC in order to determine enantiopurity of the formed product and assessed the induction of asymmetry of the novel catalysts<br />
              - Other analytical instruments used in the projects – HRMS, IR, Biotage
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Research Associate - NuChem Sciences (2023 - Present)" date="October 2023">
            <SectionText>
              - Synthesizing complex small molecules possessing challenging motifs with scarce data about it in the literature<br />
              - Performing the first attempts to scaleups of the intermediates<br />
              - Optimizing the scaleup and supplying key intermediates to the team in an efficient and productive manner.<br />
              - Optimized an oxidation step in terms of reproducibility and yield<br />
              - Improved the yield of a Diels-Alder reaction to 80% from 30% yield<br />
              - Discussing with clarity the recent synthetic efforts to the clients<br />
              - Suggesting solutions in collaboration with colleagues
            </SectionText>
          </TimelineItem>
        </Section>

        {/* Teaching Experience section */}
        <Section id="teaching-experience">
          <SectionTitle>Teaching Experience:</SectionTitle>
          <TimelineItem title="Private Organic Chemistry Tutor (Freelance, 2018 - Present)" date=" September 2018">
            <SectionText>
              - Tutored students in introductory and advanced organic chemistry courses<br />
              - Improved students' understanding and grades with engaging teaching methods
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Graduate Teaching Assistant - McGill University (2021)" date=" September 2021">
            <SectionText>
              - Advanced Organic-Inorganic Chemistry Laboratory demonstrator<br />
              - Taught laboratory skills to 15+ students for 4 hours per week<br />
              - Corrected lab reports and gave constructive feedback to 50+ students
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Undergraduate Teaching Assistant - McGill University (2020 - 2021)" date=" September 2021">
            <SectionText>
              - Clarified crucial concepts in introductory organic chemistry to a class of 600+ students<br />
              - Held three 1.5h zoom tutorial sessions with 20 students every week<br />
              - Promoted active discussion during zoom tutorials <br />
              - Corrected bi-weekly assignments for 100+ students
            </SectionText>
          </TimelineItem>
        </Section>

        {/* Education section */}
        <Section id="education">
            <SectionTitle>Education:</SectionTitle>
            <TimelineItem title="Master of Science - Synthetic Organic Chemistry & Catalysis, McGill University" date=" 2020 - 2023">
              <SectionText>
              <br />
              - Thesis title: "Development of Modular Syntheses towards Chiral Hydrazide Catalysts and Investigation of Organocatalytic Claisen Rearrangement Reactions"
              </SectionText>
            </TimelineItem>
           
        </Section>

        
      </>
    );
  }

export default AboutTimeline;
