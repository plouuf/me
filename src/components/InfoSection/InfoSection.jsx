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
                I am currently a computer science student at Memorial University
                of Newfoundland. I have a huge interest for Web Development,
                Cyber Security and AI. I also love space and penguins.
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
                job={'Full Stack Developer (Internship)'}
                location={'totaliQ'}
                date={'Sept 2021 - Apr 2022'}
              />
              <InfoText>
                <br />
                • Designed, developed and modified 5 product features using
                React frontend and Node TypeScript backend with AWS.
                <br />
                <br />
                • Wrote python scripts as internal tools, participated in code reviews, bug fixing and testing.
                <br />
                <br />
                • Ensure quarterly goals are met using the OKR framework.
                <br />
                <br />
              </InfoText>
              <JobHeader
                job={'Survey Taker'}
                location={'BVA Datacall'}
                date={'Oct 2017 - Dec 2017'}
              />
              <InfoText>
                <br />
                • Used strong and eloquent speaking skills in delivering
                questions to survey participants by phone and prompting
                responses to complete questionnaires.
                <br />
                <br />
                • Entered responses from survey participants for target
                companies into internal database to later compile reports or
                conduct analysis.
                <br />
                <br />
              </InfoText>
            </>
          )}
          {active === ACTIVITIES && (
            <InfoText>
              <JobHeader
                location={'HackfrostNL'}
                date={'March 2023'}
              />
              <InfoText>
                <br />
                • Attended and made it to the Top 9 teams.
                <br />
              </InfoText>
              <JobHeader
                location={'HackfrostNL'}
                date={'Feb 2021'}
              />
              <InfoText>
                <br />
                • Attended, networked and gained experience with new technologies such as Jupyter Notebook, AWS and WebFlows.
                <br />
              </InfoText>
              <JobHeader
                location={'Avalon Holographics'}
                date={'May 2019'}
              />
              <InfoText>
                <br />
                • Volunteered as test subject to observe how to prevent collision of satellites in 3D.
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
