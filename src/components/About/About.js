import React from 'react';

import './About.scss';

export const About = () => (
  <div className="about-container">
    <h1>About</h1>
    <div className="about-content">
        I'm a full stack software engineer and a graduate of Hack Reactor, and am currently a Solutions Architect at <a href="https://www.feith.com/" target="blank">Feith Systems and Software</a>. With a passion for JavaScript I enjoy debugging problems, teaching, helping others, building applications, and expanding my knowledge of frameworks. I thrive in fast pace environments, and believe in growing as a team.
    </div>
    <div className="arrow-container">
      <a href="#slide4">
          <span className="arrow"></span>
        </a>
    </div>
  </div>
)