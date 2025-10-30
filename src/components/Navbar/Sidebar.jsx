import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarSocialButton,
  RoundSidebarLink,
} from './SidebarElements';

import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle, handleDrawer }) => {
  // Responsive offset based on screen size
  const getOffset = () => {
    if (window.innerWidth <= 480) return -80; // Small mobile
    if (window.innerWidth <= 768) return -90; // Mobile
    if (window.innerWidth <= 1024) return -100; // Tablet
    return -120; // Desktop
  };

  const handleClick = () => {
    toggle();
  };

  const handleContactClick = () => {
    toggle();
    handleDrawer();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={handleClick} spy={true} smooth={true} offset={getOffset()} duration={500}>
            About Me
          </SidebarLink>
          <SidebarLink to='projects' onClick={handleClick} spy={true} smooth={true} offset={getOffset()} duration={500}>
            Projects
          </SidebarLink>
        </SidebarMenu>

        <SidebarSocialButton>
          <RoundSidebarLink href='https://www.linkedin.com/in/htsramasamy/' target='_blank' title='LinkedIn'>
            <FaLinkedinIn />
          </RoundSidebarLink>
          <RoundSidebarLink href='https://www.github.com/plouuf' target='_blank' title='GitHub'>
            <FiGithub />
          </RoundSidebarLink>
        </SidebarSocialButton>

        <SideBtnWrap>
          <SidebarRoute onClick={handleContactClick}>Let's Talk</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
