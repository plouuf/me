import React from 'react';
import { ProjectContainer } from './ProjectSectionElements';
import ProjectItem from '../ProjectSection/ProjectItem';

const ProjectSection = ({ id, data }) => {
  return (
    <ProjectContainer id={id}>
      {data.map((project) => (
        <ProjectItem
          label={project.label}
          title={project.title}
          details={project.details}
          technologies={project.technologies}
          imgStart={project.imgStart}
          image={project.image}
          key={project.title}
        />
      ))}
    </ProjectContainer>
  );
};

export default ProjectSection;
