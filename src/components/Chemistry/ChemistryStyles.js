import styled from 'styled-components';



export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.4s ease; 
  border-radius: 32px;
  border: 1.4px solid rgba(255,255,255,0.2);
  padding: 1rem 1.2rem;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    opacity: 1;
    cursor: pointer;
    background: rgba(255,255,255,0.3);
    border: 1.4px offset rgba(255,255,255,0.3);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

