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
  text-decoration-color: rgba(255, 117, 67, 0.73);
  &:hover {
    color: rgba(255, 117, 67, 0.73); 
    transition: background-color 0.3s ease; 
    transition-delay: 0.04s;
    text-decoration-color: rgba(255, 117, 67, 0.73);
    background:rgba(255, 117, 67, 0.3);
  }
`;

export const YoutubeLink = styled.a`
  display: inline; 
  color: rgba(255, 255, 255, 0.5); 
  text-decoration: underline;
  text-decoration-color: rgba(255, 117, 67, 0.73);
  &:hover {
    color: rgba(255, 117, 67, 0.73); 
    transition: background-color 0.3s ease; 
    transition-delay: 0.04s;
    text-decoration-color: rgba(255, 117, 67, 0.73);
    background:rgba(255, 117, 67, 0.3);
  }
`;

export const SpotifyLink = styled.a`
  display: inline; 
  color: rgba(255, 255, 255, 0.5); 
  text-decoration: underline;
  text-decoration-color: rgba(255, 117, 67, 0.73);

  &:hover {
    color: rgba(255, 117, 67, 0.73); 
    transition: background-color 0.3s ease; 
    transition-delay: 0.04s;
    text-decoration-color: rgba(255, 117, 67, 0.73);
    background:rgba(255, 117, 67, 0.3);
  }
`;




