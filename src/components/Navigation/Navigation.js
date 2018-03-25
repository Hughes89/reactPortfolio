import React from 'react';

import './Navigation.scss';

export const Navigation = () => (
  <header id="header">
    <div className="content">
      <div id="logo"><a href="#slide0"> Michael Hughes </a></div>
      <nav id="nav">
        <ul>
          <li><a href="#slide1" title="Skills" >Skills</a></li>
          <li><a href="#slide2" title="Projects">Projects</a></li>
          <li><a href="#slide3" title="About">About</a></li>
          <li><a href="#slide4" title="Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
)