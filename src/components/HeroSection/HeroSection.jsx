import React, { useState } from 'react';
import { HeroImage, HeroContainer, HeroWrapper, Column1, Column2, HeroHeader, HeroText, HeroButton } from './HeroSectionElements';

import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const HeroSection = ({ id }) => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover(!hover);
  };

  // Responsive offset based on screen size
  const getOffset = () => {
    if (window.innerWidth <= 480) return -80; // Small mobile
    if (window.innerWidth <= 768) return -90; // Mobile
    if (window.innerWidth <= 1024) return -100; // Tablet
    return -120; // Desktop
  };

  return (
    <HeroContainer id={id}>
      <HeroWrapper>
        <Column1>
          <HeroImage rel='preload' />
        </Column1>
        <Column2>
          <HeroHeader>
            Hello, my name is <span style={{ font: 'inherit', color: '#0fb8f6' }}>Hans</span>
          </HeroHeader>
          <HeroText>
            Welcome to my portfolio! I am a Software Developer who enjoys building creative things that live on the web or on my machine{' '}
            <span style={{ fontSize: '1.25rem', wordBreak: 'none' }}>😅</span>
          </HeroText>
          <HeroButton
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
            to='about'
            spy={true}
            smooth={true}
            offset={getOffset()}
            duration={500}
          >
            Learn More {hover ? <AiOutlineArrowRight /> : <IoIosArrowForward />}
          </HeroButton>
        </Column2>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
