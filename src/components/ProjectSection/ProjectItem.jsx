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
} from './ProjectItemElements';

const ProjectItem = ({
  label = 'Featured Project',
  title = 'A Clash of Kings',
  details = "Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
  technologies = [
    'NodeJs',
    'Express',
    'JavaScript',
    'HTML5',
    'CSS3',
    'MongoDB',
  ],
  image = 'https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png',
  imgStart,
}) => {
  return (
    <>
      <ProjectContainer>
        <Project>
          <ProjectContent imgStart={imgStart}>
            <ProjectLabel>{label}</ProjectLabel>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDetailsContainer>
              <ProjectDetails imgStart={imgStart}>{details}</ProjectDetails>
              <ProjectList imgStart={imgStart}>
                {technologies.map((technology) => (
                  <ProjectListItem key={technology} imgStart={imgStart}>
                    {technology}
                  </ProjectListItem>
                ))}
              </ProjectList>
            </ProjectDetailsContainer>
          </ProjectContent>

          <ProjectImageContainer imgStart={imgStart}>
            <ProjectImage src={image} alt="" />
          </ProjectImageContainer>
        </Project>
      </ProjectContainer>
    </>
  );
};

export default ProjectItem;
