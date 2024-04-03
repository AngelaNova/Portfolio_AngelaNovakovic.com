import styled from 'styled-components';

export const LeftSection = styled.div`
  margin-top:100px;
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
  display: stretch;
  color: rgba(189, 189, 192, 1); 
  text-decoration: underline;
  text-decoration-color: rgba(189, 189, 192, 1); 
`;


