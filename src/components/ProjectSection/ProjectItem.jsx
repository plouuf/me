import React from 'react';
import {
  Project,
  ProjectContainer,
  ProjectContent,
  ProjectDetails,
  ProjectDetailsContainer,
  ProjectImage,
  ProjectImageContainer,
  ProjectLabel,
  ProjectList,
  ProjectListItem,
  ProjectTitle,
  ProjectIconContainer,
  ProjectBottomContainer,
} from './ProjectItemElements';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectItem = ({ label, title, details, technologies, image, imgStart, githubRepo, externalLink }) => {
  return (
    <>
      <ProjectContainer>
        <Project>
          <ProjectContent imgStart={imgStart}>
            <ProjectLabel>{label}</ProjectLabel>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDetailsContainer>
              <ProjectDetails imgStart={imgStart}>{details}</ProjectDetails>
              <ProjectBottomContainer>
                <ProjectList imgStart={imgStart}>
                  {technologies.map((technology) => (
                    <ProjectListItem key={technology} imgStart={imgStart}>
                      {technology}
                    </ProjectListItem>
                  ))}
                </ProjectList>
                <ProjectIconContainer imgStart={imgStart}>
                  {githubRepo && (
                    <a href={githubRepo} target='_blank' rel='noreferrer' title='Github Repo'>
                      <FiGithub style={{ color: '#eee' }} />
                    </a>
                  )}
                  {externalLink && (
                    <a href={externalLink} target='_blank' rel='noreferrer' title='Live Site'>
                      <FiExternalLink style={{ color: '#eee' }} />
                    </a>
                  )}
                </ProjectIconContainer>
              </ProjectBottomContainer>
            </ProjectDetailsContainer>
          </ProjectContent>

          <ProjectImageContainer imgStart={imgStart}>
            <ProjectImage src={image} alt='' />
          </ProjectImageContainer>
        </Project>
      </ProjectContainer>
    </>
  );
};

export default ProjectItem;
