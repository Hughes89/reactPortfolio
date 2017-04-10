import React from 'react';

import './Project.css';

export const Project = ({ project }) => (
  <div className="project">
    <img className="project-image" src={project.img} />
  </div>
)