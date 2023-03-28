import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <nav
      className="navbar bg-light footer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex' }}>
        <a
          className="nav-link"
          href="https://github.com/b-frazier"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={github}
            style={{ width: 30, margin: 4 }}
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
            style={{ width: 30, margin: 4 }}
            alt="github logo"
          ></img>
        </a>
      </div>
      <div>
        <p style={{ margin: 0 }}>Find me on my socials.</p>
      </div>
    </nav>
  );
}

export default Footer;
