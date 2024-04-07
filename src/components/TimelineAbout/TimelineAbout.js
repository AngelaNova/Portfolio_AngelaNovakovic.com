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
        <Section id="research-experience">
          <SectionTitle>Research Experience:</SectionTitle>
          <TimelineItem title="Undergraduate Research Assistant - McGill University, Friščić Group (2018 - 2019)" date="2018">
            <SectionText>
              - Synthesized an organic cocrystal complex via mechanochemistry and analyzed it via VT PXRD where I discovered a new polymorph<br />
              - Analytical techniques utilized during the project - VT PXRD (Powder X-ray Diffraction ), IR (Infrared Spectroscopy), NMR (VT, solid and liquid), TGA (Thermogravimetric Analysis) and DSC (Differential Scanning Calorimetry)<br />
              - Manuscript in preparation
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Undergraduate Research Assistant - McGill University, Ariya Group (2019 - 2020)" date="2019">
            <SectionText>
              - Contributed to the optimization of TiO2 catalyst by doping for visible light photoactivation<br />
              - Designed an efficient experimental setup with pollutant injection, air conditioning module, and standardized processes to evaluate different materials and UV bulb settings for their efficacy as sorbents.<br />
              - Conducted systematic data collection and analysis through 24-hour randomized triplicate experiments, providing valuable insights into the behavior of the TiO2 catalyst under various conditions.
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Undergraduate Research Assistant - McGill University, Tsantrizos Group (2019 - 2020)" date="2019">
            <SectionText>
              - Medicinal chemistry project focused on a multistep pathway (8+ steps) of heterobicyclic molecules as bioisosteres of substrates used by GGPPS (geranyl geranyl pyrophosphate synthase) which would act as inhibitors<br />
              - Analytical techniques utilized during the project – LCMS, NMR, flash chromatography<br />
              - Worked towards investigating SAR (structure-activity-relationship) of the scaffold of interest, however COVID-19 halted the project<br />
              - For similar project reference, see: J. Med. Chem. 2022, 65, 2471−2496
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Research Assistant Intern - IntelliSyn R&D (2020)" date="2020">
            <SectionText>
              - Worked on the synthesis of heterocyclic compounds at a mg scale towards PROTACs (Proteolysis-targeting chimeras) with internal and external collaborations<br />
              - Worked on a large scale, sugar-based, formulation project (&gt;100g scale)<br />
              - Analytical instruments used - flash chromatography/biotage, NMR, LCMS, Smart Evaporator (for high boiling point solvent), lyophilizer
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Graduate Research Assistant - McGill University, Gleason Group (2020 - 2023)" date="2020">
            <SectionText>
              - Thesis title: “Development of Modular Syntheses towards Chiral Hydrazide Catalysts and Investigation of Organocatalytic Claisen Rearrangement Reactions” – Manuscript in preparation<br />
              - Screened amine organocatalysts and diazepane carboxylate towards iminium ion catalysis of the Claisen rearrangement<br />
              - Developed a modular synthesis towards new chiral hydrazide catalysts from inexpensive material with only two steps requiring flash column chromatography and analyzed with VT NMR<br />
              - Tested novel chiral catalysts in the Cope rearrangement and Diels-Alder reaction – iminium ion catalysis observed and 40%ee achieved<br />
              - Utilized HPLC and GC in order to determine enantiopurity of the formed product and assessed the induction of asymmetry of the novel catalysts<br />
              - Other analytical instruments used in the projects – HRMS, IR, Biotage
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Research Associate - NuChem Sciences (2023 - Present)" date="2023">
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
          <TimelineItem title="Private Organic Chemistry Tutor (Freelance, 2018 - Present)" date="">
            <SectionText>
              - Tutored students in introductory and advanced organic chemistry courses<br />
              - Improved students' understanding and grades with engaging teaching methods
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Graduate Teaching Assistant - McGill University (2021)" date="">
            <SectionText>
              - Advanced Organic-Inorganic Chemistry Laboratory demonstrator<br />
              - Taught laboratory skills to 15+ students for 4 hours per week<br />
              - Corrected lab reports and gave constructive feedback to 50+ students
            </SectionText>
          </TimelineItem>
          <TimelineItem title="Undergraduate Teaching Assistant - McGill University (2020 - 2021)" date="">
            <SectionText>
              - Clarified crucial concepts in introductory organic chemistry to a class of 600+ students<br />
              - Held three 1.5h zoom tutorial sessions with 20 students every week<br />
              - Promoted active discussion during zoom tutorials <br />
              - Corrected bi-weekly assignments for 100+ students
            </SectionText>
          </TimelineItem>
        </Section>

        {/* Presentations and Conferences section */}
        <Section id="presentations-and-conferences">
          <TimelineItem>
            <SectionTitle>Presentations and Conferences:</SectionTitle>
            <SectionText>
            - Presented posters at the 24th International Conference on the Chemistry of the Organic Solid State (ICCOSS XXIV, New York, USA, 2019) and the 6th Crystal Engineering and Emerging Materials Workshop of Ontario & Quebec (CEMWOQ-6, Concordia University, Montreal, 2019)<br />
            - Attended the 2023th edition of QOMSBOC where my master degree’s work on chiral hydrazide-based organocatalysts and Vanessa Watts’ contribution in furthering the project were presented by my labmate Vanessa from the Gleason Group at McGill University. From a first hit of 40%ee in the Diels-Alder reaction to now 70%ee thanks to Vanessa. Stay tuned for a 99%ee!
            </SectionText>
          </TimelineItem>
        </Section>

        {/* Education section */}
        <Section id="education">
          <TimelineItem>
            <SectionTitle>Education:</SectionTitle>
            <SectionText>
              <b>Master of Science - Synthetic Organic Chemistry & Catalysis, McGill University (2020 - 2023):</b><br />
              - Thesis title: "Development of Modular Syntheses towards Chiral Hydrazide Catalysts and Investigation of Organocatalytic Claisen Rearrangement Reactions"
            </SectionText>
            <SectionText>
              <b>Bachelor of Science - First Class Honours Bio-Organic Chemistry, McGill University (2016 - 2020):</b><br />
              - Graduated with a GPA of 3.53/4.00
            </SectionText>
          </TimelineItem>
        </Section>

        {/* Skills and Interests section */}
        <Section id="skills-and-interests">
          <SectionTitle>
            Skills and Interests:
          </SectionTitle>
          <SectionText>
            - Research and Development<br />
            - Wet lab techniques<br />
            - Analytical instrumentation (NMR, IR, Mass Spec, HPLC, GC-MS, LC-MS)<br />
            - Mechanochemistry<br />
            - Data analysis and interpretation<br />
            - Classroom management and tutoring<br />
            - Medicinal and synthetic organic chemistry<br />
            - Programming languages (Java, Python, C, Bash Shell, HTML, CSS)<br />
            - Multilingual: English (Fluent), French (Fluent), Serbian (Native), Spanish (Beginner)
          </SectionText>
        </Section>
      </>
    );
  }

export default AboutTimeline;
