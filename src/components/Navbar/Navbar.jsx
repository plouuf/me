import React, {useState, useEffect} from 'react';
import {
  NavContainer,
  NavLink,
  NavLogoLink,
  // Bars,
  NavMenu,
  NavSocialButton,
  RoundNavLink,
  NavButton,
  NavButtonLink,
} from './NavbarElements';

import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);

  const navbarTransparencyHandler = () => {
    if (window.scrollY >= 85) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarTransparencyHandler)
  }, [])

  return (
    <NavContainer isScroll={isScroll}>
      <NavLogoLink to="/">Portfolio</NavLogoLink>
      {/* <Bars /> */}
      <NavMenu>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavSocialButton>
          <RoundNavLink
            href="https://www.linkedin.com/in/htsramasamy/"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </RoundNavLink>
          <RoundNavLink
            href="https://www.github.com/plouuf"
            target="_blank"
            title="GitHub"
          >
            <FiGithub />
          </RoundNavLink>
        </NavSocialButton>
        <NavButton>
          <NavButtonLink to="/contact">Let's Talk</NavButtonLink>
        </NavButton>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
