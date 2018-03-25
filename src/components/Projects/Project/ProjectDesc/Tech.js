import React from 'react';

export const Tech = ({ tech }) => {
  const names = tech.reduce((acc, ele) => acc = acc.concat(Object.keys(ele)), []);
  return (
    <div>
      {tech.map((ele, i) => 
        <i key={i} title={names[i]} className={ele[names[i]]} id="tech-icon"></i>
        )}
    </div>
  )
}