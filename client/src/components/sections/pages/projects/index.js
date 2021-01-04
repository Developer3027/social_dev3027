import React from 'react';
import { DarkBox } from '../../style/common.style';

import ProjectCard from '../../../projectcard';
import data from '../../../../data/projects';

const Projects = () => {
  return (
    <DarkBox>
      {data.map((item) => (
        <ProjectCard
          key={item.id}
          image={item.img}
          anchor={item.anchor}
          title={item.title}
          text={item.body}
        />
      ))}
    </DarkBox>
  );
};
export default Projects;
