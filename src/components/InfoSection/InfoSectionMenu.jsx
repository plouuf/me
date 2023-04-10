import React from 'react';
import { ABOUT, EXPERIENCE, ACTIVITIES } from '../../constants/constants';
import {
  InfoSectionMenuContainer,
  InfoSectionMenuItem,
} from './InfoSectionElements';

const InfoSectionMenu = ({ setTab, active }) => {
  return (
    <>
      <InfoSectionMenuContainer>
        <InfoSectionMenuItem active={active === ABOUT} onClick={() => setTab(ABOUT)}>
          About Me
        </InfoSectionMenuItem>
        <InfoSectionMenuItem active={active === EXPERIENCE} onClick={() => setTab(EXPERIENCE)}>
          Experience
        </InfoSectionMenuItem>
        <InfoSectionMenuItem active={active === ACTIVITIES} onClick={() => setTab(ACTIVITIES)}>
          Activities
        </InfoSectionMenuItem>
      </InfoSectionMenuContainer>
    </>
  );
};

export default InfoSectionMenu;

