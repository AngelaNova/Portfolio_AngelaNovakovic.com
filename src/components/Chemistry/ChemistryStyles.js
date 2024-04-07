import styled from 'styled-components';



export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    text-decoration:underline;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;