import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 25px;
  margin-bottom: 700px;
  position: fixed;
  left:0;
  right:0;
  top:0;
  background:linear-gradient(91deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 1, 60, 0.65) 100%);
  z-index:2000;
  
  

  

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 4 / 4 / span 5; /* Update to span from column 2 to 6 */
  display: flex;
  justify-content: space-around;
  align-content:right;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 4 / 4 / span 5; 
  }
`;

/*
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 7; /* Update to span from column 5 to 7 
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 7;  Update to span from column 4 to 7 
  }
`;
*/

// Navigation Links
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

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  justify: center;
  
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 
export const SocialIcons = styled.a`
color: white;
border-radius: 50px;
  padding: 6px;
&:hover {
    background-color: #D1D4DA30;
    cursor: pointer;
  }
`