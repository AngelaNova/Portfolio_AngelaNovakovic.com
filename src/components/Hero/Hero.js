import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; 
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, GitHubLink } from './HeroStyles';
import Tooltip from '@mui/material/Tooltip';
import {useState} from 'react';

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
          <br></br>
          Hey, I'm Angela.<br></br> Welcome to my portfolio!
        </SectionTitle>
        <SectionText>
          <div className='mt-4 text-xl text-gray-700 md:mt-3'>
            <p>
              You will discover a curated collection showcasing my professional journey, creative endeavors, and passions, including fun facts such as that I've pushed&nbsp;
              <GitHubLink>
                <a href="https://github.com/AngelaNova">
                  144 commits to Github
                </a>
              </GitHubLink> 
              , watched&nbsp;
              <GitHubLink>
                <a href="https://www.youtube.com/playlist?list=PL5X764mf-V_MJzVhA4egDnbjBAdivzViz">
                  more than 76 hours of coding tutorials on YouTube
                </a>
              </GitHubLink>
              &nbsp;and listened to
              <GitHubLink>
                <a href="https://developer.spotify.com/documentation/web-api">
                  &nbsp;600 minutes of music on Spotify
                </a>
              </GitHubLink>
              &nbsp;in the past 30 days.
            </p>
          </div>
        </SectionText>
        <Button onClick={props.handleClick}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
