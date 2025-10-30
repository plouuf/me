import React, { useState } from 'react';
import { scroller } from 'react-scroll';
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
    // Responsive offset based on screen size for smooth scrolling
    const getOffset = () => {
      if (window.innerWidth <= 480) return -80; // Small mobile
      if (window.innerWidth <= 768) return -90; // Mobile
      if (window.innerWidth <= 1024) return -100; // Tablet
      return -120; // Desktop
    };

    // Scroll to the About section smoothly
    scroller.scrollTo('about', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: getOffset(),
    });

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
                I graduated in 2023 from Memorial University of Newfoundland with a degree in Computer Science. Since then, I've been
                working as a software developer, gaining valuable experience in full-stack development and building production-ready
                applications. I have a huge passion for Web Development, Cyber Security, and AI. I also love space and penguins.
                <br />
                <br /> I am a detail-oriented developer with excellent problem-solving skills and a strong foundation in modern web
                technologies. I'm always eager to learn new technologies and take on challenging projects that push me to grow as a
                developer.
                <br />
                <br /> Here are some of the technologies I've been working with recently:
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
              <JobHeader job={'Software Developer'} location={'Final POS (Start-up)'} date={'2024 - Present'} />
              <InfoText>
                <br />
                Drove end-to-end development and ownership of the POS system powering both web and mobile platforms, ensuring seamless
                performance, scalability, and cross-device consistency.
                <br />
                <br />
                Integrated UI/UX designs into production-ready React applications, transforming static layouts into dynamic, interactive
                components with real-time data and multi-step workflows.
                <br />
                <br />
                Implemented and optimized core POS features including order creation, refunds, product search, and payment workflows for a
                robust, business-critical solution.
                <br />
                <br />
                Collaborated with cross-functional teams to align technical delivery with business goals, driving continuous improvement and
                feature innovation.
                <br />
                <br />
              </InfoText>

              <JobHeader job={'Full Stack Developer (Co-op)'} location={'totaliQ (Start-up)'} date={'Sept 2021 - Apr 2022'} />
              <InfoText>
                <br />
                Quickly adapted to the codebase, becoming proficient in React.js for frontend and Node.js TypeScript with AWS for backend,
                contributing effectively to feature development.
                <br />
                <br />
                Delivered new features and performance optimizations, enhancing overall usability and reliability of the platform.
                <br />
                <br />
                Collaborated in code reviews and agile sprints, strengthening code quality and accelerating team delivery while learning
                from experienced developers.
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
                Attended, networked and gained experience with new technologies such as Jupyter Notebook, AWS and WebFlows.
                <br />
              </InfoText>
              <JobHeader location={'Avalon Holographics'} date={'May 2019'} />
              <InfoText>
                <br />
                Volunteered as test subject to observe how to prevent collision of satellites in 3D.
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
