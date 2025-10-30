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
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  // Responsive offset based on screen size
  const getOffset = () => {
    if (window.innerWidth <= 480) return -80; // Small mobile
    if (window.innerWidth <= 768) return -90; // Mobile
    if (window.innerWidth <= 1024) return -100; // Tablet
    return -120; // Desktop
  };

  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
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
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} handleDrawer={handleDrawer} />
      <NavContainer isScroll={isScroll}>
        <NavLogoLink to='home' spy={true} smooth={true} offset={getOffset()} duration={500}>
          Portfolio
        </NavLogoLink>
        <Bars onClick={toggleSidebar} />
        <NavMenu>
          <NavLink to='about' spy={true} smooth={true} offset={getOffset()} duration={500}>
            About Me
          </NavLink>
          <NavLink to='projects' spy={true} smooth={true} offset={getOffset()} duration={500}>
            Projects
          </NavLink>
          <NavSocialButton>
            <RoundNavLink href='https://www.linkedin.com/in/htsramasamy/' target='_blank' title='LinkedIn'>
              <FaLinkedinIn />
            </RoundNavLink>
            <RoundNavLink href='https://www.github.com/plouuf' target='_blank' title='GitHub'>
              <FiGithub />
            </RoundNavLink>
          </NavSocialButton>
          <NavButton>
            <NavButtonLink onClick={handleDrawer} to='/contact'>
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
