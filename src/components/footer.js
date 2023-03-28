import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <nav className="navbar fixed-bottom bg-light">
      <div className="container" style={{ justifyContent: 'center' }}>
        <a
          className="nav-link"
          href="https://github.com/b-frazier"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={github}
            style={{ width: 30, marginRight: 5 }}
            alt="github logo"
          ></img>
        </a>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/bianca-frazier-ba6170172/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={linkedin}
            style={{ width: 30, marginLeft: 5 }}
            alt="github logo"
          ></img>
        </a>
      </div>
      <div
        className="container"
        style={{ justifyContent: 'center', marginTop: 3 }}
      >
        <p style={{ margin: 0 }}>Find me on my socials.</p>
      </div>
    </nav>
  );
}

export default Footer;
