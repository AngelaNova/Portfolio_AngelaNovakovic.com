import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons} from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, LinkUp } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Message Me on LinkedIn</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/angela-novakovic/"> Send Message - LinkedIn</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:angela.novakovic.SD@gmail.com">
            angela.novakovic.SD@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkUp href="/">
            &#8593; UP
          </LinkUp>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/AngelaNova">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/angela-novakovic/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:angela.novakovic.SD@gmail.com">
            <img src="images/email.png"  style= {{height:"40px",
              weight:"40px",
            }}
            />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
