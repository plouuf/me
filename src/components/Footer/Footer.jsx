import React from 'react';

import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterAuthor,
  BeatingHeart,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo to="/">Portfolio</FooterLogo>
        <FooterAuthor>
          Built with <BeatingHeart /> by ploouf
        </FooterAuthor>
        <WebsiteRights>
          © {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
