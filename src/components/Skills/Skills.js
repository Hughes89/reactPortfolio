import React from 'react';
import skills from './skillList';
import Skill from './Skill/Skill';

import './Skills.scss';

export const Skills = () => {
  let count = 0;
  return (
    <div className="skill-content">
      <h1>Skills</h1>
      <div className="skill-list">
        <div className="skill-list-one">
          {skills.map((skill, i) => {
            count++
            return <Skill key={count} skill={skill} />
          })}
        </div>
      </div>
    </div>
  )
}