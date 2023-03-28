import React from 'react';
import doc from '../assets/Frazier_Resume-23.pdf';

function Resume() {
  return (
    <div className="container my-5">
      <div style={{ width: 500 }}>
        <h1 class="display-6">Skills & Technologies:</h1>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">HTML, CSS, JavaScript</li>
          <li class="list-group-item">Bootstrap, Handlebars</li>
          <li class="list-group-item">Node.js, Express.js</li>
          <li class="list-group-item">MongoDB, MySQL</li>
          <li class="list-group-item">Git, GitHub, Heroku</li>
        </ul>
      </div>
      <div style={{ width: 500 }}>
        <p className="lead my-3">Click download to get a copy of my resume!</p>
        <button type="button" class="btn btn-light my-3">
          <a
            className="btn"
            href={doc}
            download="Bianca-Frazier-Resume"
            rel="noreferrer"
            target="_blank"
          >
            Download
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
