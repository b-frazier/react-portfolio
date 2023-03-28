import React from 'react';
import photo from '../assets/bianca-headshot-square-1mb.jpg';

function Avatar() {
  return (
    <img
      src={photo}
      alt=""
      className="img-thumbnail mx-auto d-block"
      style={{ width: 350, height: 350, borderRadius: 400 }}
    ></img>
  );
}

export default Avatar;
