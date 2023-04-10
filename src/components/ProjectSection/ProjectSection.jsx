import React from 'react';
import { ProjectContainer } from './ProjectSectionElements';
import ProjectItem from '../ProjectSection/ProjectItem';

const ProjectSection = ({ id }) => {
  return (
    <ProjectContainer id={id}>
      <ProjectItem imgStart={true}/>
      <ProjectItem />
      <ProjectItem imgStart={true} />
      <ProjectItem />
    </ProjectContainer>
  );
};

export default ProjectSection;
