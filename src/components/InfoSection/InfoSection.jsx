import React, { useState } from 'react';
import {
  InfoContainer,
  InfoText,
  Column1,
  Column2,
  InfoWrapper,
  InfoList,
  InfoListItem,
  InfoHeader,
  JobHeader,
} from './InfoSectionElements';
import InfoSectionMenu from './InfoSectionMenu';
import { ABOUT, EXPERIENCE, ACTIVITIES } from '../../constants/constants';

const InfoSection = ({ id }) => {
  const [title, setTitle] = useState('About Me');
  const [active, setActive] = useState(ABOUT);

  const setTab = (tab) => {
    switch (tab) {
      case ABOUT:
        setActive(ABOUT);
        setTimeout(() => setTitle('About Me'), 75);
        break;
      case EXPERIENCE:
        setActive(EXPERIENCE);
        setTimeout(() => setTitle('Experience'), 75);
        break;
      case ACTIVITIES:
        setActive(ACTIVITIES);
        setTimeout(() => setTitle('Activities'), 75);
        break;
      default:
        setTitle('About Me');
        break;
    }
  };

  return (
    <InfoContainer id={id}>
      <InfoHeader>{title}</InfoHeader>
      <InfoWrapper>
        <Column1 key={title}>
          {active === ABOUT && (
            <>
              <InfoText>
                I have recently completed my studies at Memorial University of
                Newfoundland, where I majored in Computer Science. I have a huge
                interest for Web Development, Cyber Security and AI. I also love
                space and penguins.
                <br />
                <br /> I am enthusiastic with attention to detail and excellent
                organizational skills. Motivated to learn, grow and excel in the
                software industry.
                <br />
                <br /> Here are some of the technologies I've been working with
                recently:
              </InfoText>
              <InfoList>
                <InfoListItem>JavaScript / TypeScript</InfoListItem>
                <InfoListItem>Python</InfoListItem>
                <InfoListItem>React / React Native</InfoListItem>
                <InfoListItem>NodeJS</InfoListItem>
                <InfoListItem>HTML5 & CSS3</InfoListItem>
                <InfoListItem>AWS</InfoListItem>
              </InfoList>
            </>
          )}
          {active === EXPERIENCE && (
            <>
              <JobHeader
                job={'Full Stack Developer (Co-op)'}
                location={'totaliQ'}
                date={'Sept 2021 - Apr 2022'}
              />
              <InfoText>
                <br />
                Quickly adapted to the codebase, becoming proficient in React.js
                for frontend and Node.js TypeScript with AWS for backend,
                contributing effectively to feature development.
                <br />
                <br />
                Implemented features, optimizing performance and user
                experience.
                <br />
                <br />
                Collaborated cross-functionally, ensuring a 100% on-time feature
                delivery rate.
                <br />
                <br />
                Engaged in code reviews and actively learned from peers,
                fostering improved code quality through shared knowledge.
                <br />
                <br />
              </InfoText>
            </>
          )}
          {active === ACTIVITIES && (
            <InfoText>
              <JobHeader location={'HackfrostNL'} date={'March 2023'} />
              <InfoText>
                <br />
                Attended and made it to the Top 9 teams.
                <br />
              </InfoText>
              <JobHeader location={'HackfrostNL'} date={'Feb 2021'} />
              <InfoText>
                <br />
                Attended, networked and gained experience with new technologies
                such as Jupyter Notebook, AWS and WebFlows.
                <br />
              </InfoText>
              <JobHeader location={'Avalon Holographics'} date={'May 2019'} />
              <InfoText>
                <br />
                Volunteered as test subject to observe how to prevent collision
                of satellites in 3D.
                <br />
              </InfoText>
            </InfoText>
          )}
        </Column1>
        <Column2>
          <InfoSectionMenu setTab={setTab} active={active} />
        </Column2>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
