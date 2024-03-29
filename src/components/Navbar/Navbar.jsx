import React, { useState, useEffect } from 'react';
import {
  NavContainer,
  NavLink,
  NavLogoLink,
  Bars,
  NavMenu,
  NavSocialButton,
  RoundNavLink,
  NavButton,
  NavButtonLink,
} from './NavbarElements';

import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import ContactDrawer from '../ContactDrawer/ContactDrawer';


const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const offsetY = -95;

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navbarTransparencyHandler = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarTransparencyHandler);

    return () => {
      window.removeEventListener('scroll', navbarTransparencyHandler);
    };
  }, []);

  return (
    <>
      <NavContainer isScroll={isScroll}>
        <NavLogoLink to="home" spy={true} smooth={true} offset={offsetY}>
          Portfolio
        </NavLogoLink>
        <Bars />
        <NavMenu>
          <NavLink to="about" spy={true} smooth={true} offset={offsetY}>
            About Me
          </NavLink>
          <NavLink to="projects" spy={true} smooth={true} offset={offsetY}>
            Projects
          </NavLink>
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
            <NavButtonLink onClick={handleDrawer} to="/contact">
              Let's Talk
            </NavButtonLink>
          </NavButton>
        </NavMenu>
      </NavContainer>
      <ContactDrawer isOpen={isOpen} handleDrawer={handleDrawer} />
    </>
  );
};

export default Navbar;
