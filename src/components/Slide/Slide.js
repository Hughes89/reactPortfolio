import React from 'react';

export const Slide = ({color, image, i, children}) => {
  // color = color || 'white';
  console.log(i)
  const styles = {
    width: '100%',
    height: '80%',
    margin: '0',
    padding: '110px 0 260px 0',
    background: image ? `url(${image}) 50% 0 no-repeat fixed` : '50% 0 no-repeat fixed',
    backgroundSize: 'cover',
    backgroundColor: color
  };
  return (
    <div id={`slide${i}`} style={styles}>{children}</div>
  )
}