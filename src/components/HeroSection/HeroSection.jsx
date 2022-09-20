import React, { useState } from 'react';
import {
  HeroImage,
  HeroContainer,
  HeroWrapper,
  Column1,
  Column2,
  HeroHeader,
  HeroText,
  HeroButton,
} from './HeroSectionElements';

import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <Column1>
          <HeroImage />
        </Column1>
        <Column2>
          <HeroHeader>
            Hello, my name is{' '}
            <span style={{ font: 'inherit', color: '#7ab1ff' }}>Hans</span> 👋
          </HeroHeader>
          <HeroText>
            Welcome to my portfolio! I am a Junior Software Developer who enjoys
            building creative things that live on the web.
          </HeroText>
          <HeroButton
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
            to="about"
            spy={true}
            smooth={true}
            offset={-95}
          >
            Learn More {hover ? <AiOutlineArrowRight /> : <IoIosArrowForward />}
          </HeroButton>
        </Column2>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
