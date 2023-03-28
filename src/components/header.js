import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#/">
          Bianca Frazier
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={
                currentPage === 'About' ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={
                currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </a>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={
                currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={
                currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
