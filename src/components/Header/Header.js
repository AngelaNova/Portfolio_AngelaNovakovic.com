import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Div1, Div2, NavLink } from './HeaderStyles';

const Header = () => {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const toggleProjectsMenu = () => {
    setShowProjectsMenu(!showProjectsMenu);
  };

  return (
    <Container>
      <Div1>
        <Link href="/" legacyBehavior>
          <a style={{ display: 'flex', alignItems: 'center', color: "rgba(255, 255, 255, 0.75)", fontFamily: 'Verdana', fontSize: "28px", marginLeft: "20px" }}>
            <span>AngelaNovakovic</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink onClick={toggleProjectsMenu}>Projects</NavLink>
          {showProjectsMenu ? (
            <>
              <img width="18px" style={{ paddingLeft: "5px" }} src="/images/arrowDownIcon.png" alt="Arrow Down Icon" />
              <ul>
                <li>
                  <Link href="/PortfolioPage" legacyBehavior>
                    <a><NavLink>Portfolio Project</NavLink></a>
                  </Link>
                </li>
                <li>
                  <Link href="./" legacyBehavior>
                    <a><NavLink>TBD Project</NavLink></a>
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
          <Link href="/MyTechPage" legacyBehavior>
            <a><NavLink>Technologies</NavLink></a>
          </Link>
        </li>
        <li>
          <Link href="/AboutPage" legacyBehavior>
            <a><NavLink>About</NavLink></a>
          </Link>
        </li>
        <li>
          <Link href="#Footer" legacyBehavior>
            <a><NavLink>Contact</NavLink></a>
          </Link>
        </li>
        <li>
          <Link href="Resume/CV_Angela_Novakovic-2024.pdf" legacyBehavior>
            <a>
              <NavLink>
                Resume
                &#160;
                <img src="images/cloudDownload.png" height="25px" />
              </NavLink>
            </a>
          </Link>
        </li>
      </Div2>
    </Container>
  );
};

export default Header;
