import React from 'react';

import './projects.styles.scss';

import CardLad from '../card-lad/card-lad.component';
import CardPhoto from '../card-photo/card-photo.component';
import CardStadium from '../card-stadium/card-stadium.component';

const Projects = () => (
  <div id='projects' className='projects'>
    <div className='project-info'>
      <h1>AUGMENTED REALITY FEATURES</h1>
      <span>In order to enhance the experience of the fan, BBox Sports has developed AR features,
      increasing the level of excitement towards the sports team</span>
    </div>
    <div className='project-cards'>
      <CardLad />
      <CardPhoto />
      <CardStadium />
    </div>
  </div>
);

export default Projects;