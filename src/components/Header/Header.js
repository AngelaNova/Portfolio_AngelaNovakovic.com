import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Div1, Div2, NavLink } from './HeaderStyles';

const Header = () =>  {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false); 
  const toggleProjectsMenu = () => {
    setShowProjectsMenu(!showProjectsMenu);
  };

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color:"white", fontFamily:'Verdana' , fontSize:"30px", marginLeft:"30px"}}>
            <span>AngelaNova</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
        <NavLink onClick={toggleProjectsMenu}>Projects</NavLink>
          {showProjectsMenu ? (
            <>
              <img width="18px" style={{ paddingLeft: "5px" }} paddingLeft="5px" src="/images/arrowDownIcon.png" alt="Arrow Down Icon" />
              <ul>
                <li>
                  <Link href="/PortfolioPage">
                    <NavLink>Portfolio Project</NavLink>
                  </Link>
                </li>
                <li>
                  <Link href="./">
                    <NavLink>TBD Project</NavLink>
                  </Link>
                </li>
                {/* Add more projects here */}
              </ul>
            </>
          ) : (
            <img width="18px" style={{ paddingLeft: "5px" }} src="/images/arrowUpIcon.png" alt="Arrow Up Icon" />
          )}
            
        </li>
        <li>
          <Link href="/MyTechPage">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>        
        <li>
          <Link href="/AboutPage">
            <NavLink>About</NavLink>
          </Link>
        </li>  
        <li>
          <Link href="#Contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>   
        <li>
          <Link href="#Resume">
            <NavLink>Resume</NavLink>
          </Link>
        </li>      
      </Div2>
    </Container>
  );
};

export default Header;
