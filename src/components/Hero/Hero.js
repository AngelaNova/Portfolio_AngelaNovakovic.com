import React, { useState, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; 
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, GitHubLink } from './HeroStyles';
import getSpotifyPlayHistory from '../../API/SpotifyAccess'; 





const Hero = (props) => {
  const [totalPlaybackTime, setTotalPlaybackTime] = useState(null);

  useEffect(() => {
    // Fetch the total playback time when the component mounts
    const fetchTotalPlaybackTime = async () => {
      const playbackTime = await getSpotifyPlayHistory();
      setTotalPlaybackTime(playbackTime);
    };

    fetchTotalPlaybackTime();
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, I'm Angela.<br /> Welcome to my portfolio!
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
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
