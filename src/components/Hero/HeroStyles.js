import styled from 'styled-components';

export const LeftSection = styled.div`
  margin-top:170px;
  font-size:25px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const GitHubLink = styled.a`
  display: inline; 
  color: rgba(255, 255, 255, 0.5); 
  text-decoration: underline;
  text-decoration-color: rgba(120, 108, 108, 0.16);
  &:hover {
    color: rgbargba(120, 108, 108, 0.16); 
    text-decoration-color: rgba(120, 108, 108, 0.16);
    background:rgba(120, 108, 108, 0.37); 
  }
`;

export const YoutubeLink = styled.a`
  display: inline; 
  color: rgba(255, 255, 255, 0.5);
  text-decoration: underline;
  text-decoration-color: red;
  &:hover {
    color: darkred; 
    text-decoration-color: darktred;
    background:red; 
  }
`;

export const SpotifyLink = styled.a`
  display: inline; 
  color: rgba(255, 255, 255, 0.5);
  text-decoration: underline;
  text-decoration-color: green;
  &:hover {
    color: lightgreen; 
    text-decoration-color: lightgreen;
    background:green; 
  }
`;




