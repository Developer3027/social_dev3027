import React from 'react';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectText,
} from './style/project.style';

const ProjectCard = ({ image, anchor, title, text }) => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <a href={anchor} target='_blank' rel='noreferrer'>
          <ProjectImage src={image} alt='card image of site' />
        </a>
      </ProjectHeader>
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectText>{text}</ProjectText>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectCard;
