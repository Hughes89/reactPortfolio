import React from 'react';
import { ProjectDesc } from './ProjectDesc/ProjectDesc'

import './Project.css';

export const Project = ({ project }) => (
  <div className="container">
    <div className="project">
      <div className="project-description">
        <ProjectDesc project={project} />
      </div>
      <img className="project-image" src={project.img} />
      </div>
    </div>
)