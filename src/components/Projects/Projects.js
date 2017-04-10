import React from 'react';
import projects from './projectList';
import { Project } from './Project/Project';

import './Projects.css';

export const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {projects.map((project, i) => 
        <Project key={i} project={project} />
        )}
    </div>
  )
}