import React from 'react';
import Avatar from './avatar';

function About() {
  return (
    <div className="container my-5">
      <Avatar />
      <div className="mx-auto my-3" style={{ width: 400 }}>
        <h2>I'm Bianca!</h2>
        <p>
          I am a Junior Web Developer based in Columbus, Ohio. I have passion
          for creativity, technology and a good cup of coffee.
        </p>
        <p>
          I grew up and attended university in Iowa but after graduating, I
          packed up and headed for the big city! I'm a few months shy of an
          amazing year of being a Buckeye. O-H-I-O!
        </p>
      </div>
    </div>
  );
}

export default About;
