import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; 
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, GitHubLink, YoutubeLink, SpotifyLink } from './HeroStyles';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const handleImageClick = () => {
  window.open('https://www.linkedin.com/in/angela-novakovic/', '_blank');
};

const Hero = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section row nopadding>
      <LeftSection>
        <Tooltip 
          title="Angela's LinkedIn" 
          arrow
        >
          <img
            src='../../../images/anpic.jpg'
            alt="Angela's Profile Picture"
            onClick={handleImageClick}
            style={{
              width: isHovered ? '220px' : '200px',
              borderRadius: isHovered ? '110px' : '100px',
              border: isHovered ? '2px solid darkblue' : 'none',
              height: 'auto',
              marginBottom: '-30px',
              paddingBottom: '0',
              marginTop: '-80px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Tooltip>
        <SectionTitle main center>
          <br />
          Hey, I'm Angela.<br /> Welcome to my portfolio!
        </SectionTitle>
        <SectionText>
          <div className='mt-4 text-xl text-gray-700 md:mt-3'>
            <p>
              You will discover a curated collection showcasing my professional journey, creative endeavors, and passions, including fun facts such as that I've pushed&nbsp;
              <GitHubLink href="https://github.com/AngelaNova">
                144 commits to Github
              </GitHubLink> 
              , watched&nbsp;
              <YoutubeLink href="https://www.youtube.com/playlist?list=PL5X764mf-V_MJzVhA4egDnbjBAdivzViz"> 
                more than 76 hours of coding tutorials on YouTube
              </YoutubeLink>
              &nbsp;and listened to &nbsp;
              <SpotifyLink href="https://developer.spotify.com/documentation/web-api">
                600 minutes of music on Spotify 
              </SpotifyLink>
              &nbsp;in the past 30 days.
            </p>
          </div>
        </SectionText>
       
          <Button href="/AboutPage"> Learn More </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
