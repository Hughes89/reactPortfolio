import React from 'react';
import { Tech }  from './Tech';

export const ProjectDesc = ({ project }) => (
  <div className="description">
    <p>{project.title}</p>
    <p>{project.description}</p>
    <Tech tech={project.tech} />
      { (project.site) ? (<span className="icon-link"><a href={project.site} target="blank"><i className="fa fa-globe" aria-hidden="true"></i></a></span>) : (<span></span>) }
    <span className="icon-link">
      <a href={project.github} target="blank"><i className="fa fa-github" aria-hidden="true"></i></a>
    </span>
  </div>
)