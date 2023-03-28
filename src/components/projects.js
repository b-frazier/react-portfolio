import React from 'react';
import api from '../assets/project-photos/api.jpg';
import blog from '../assets/project-photos/blog.jpg';
import employee from '../assets/project-photos/employee.jpg';
import generator from '../assets/project-photos/generator.jpg';
import team from '../assets/project-photos/team.jpg';
import weather from '../assets/project-photos/weather.jpg';

function Projects() {
  return (
    <div className="container my-5">
      <h1 className="display-5 my-3">Projects</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* one */}
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src={blog} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tech Blog</h5>
              <p className="card-text">
                This is a full stack CMS style blog website to sign up, login
                and post content related to technology.
              </p>
              <a
                href="https://frozen-plains-03732.herokuapp.com/login"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See it in action!
              </a>
              <a
                href="https://github.com/b-frazier/tech-blog"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See the code!
              </a>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src={api} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Social Network API</h5>
              <p className="card-text">
                A MongoDB API for a social network. The API contains Users,
                their friends, thoughts (posts) and reactions to thoughts.
              </p>
              <a
                href="https://github.com/b-frazier/social-network"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See the code!
              </a>
            </div>
          </div>
        </div>
        {/* three */}
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src={team} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Team Profile Generator</h5>
              <p className="card-text">
                A command line application that takes in information about a
                team (in this case, a fictional engineering team) and outputs it
                to an HTML page.
              </p>
              <a
                href="https://drive.google.com/file/d/1zRQsW5sG7LlzWtscHE-LY7IKqbaOsHPJ/view"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See it in action!
              </a>
              <a
                href="https://github.com/b-frazier/team-profile-generator"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See the code!
              </a>
            </div>
          </div>
        </div>
        {/* four */}
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src={employee} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p className="card-text">
                This is a CLI that allows the user to view, add and update a
                company employee database. This is done by interacting with the
                data in the terminal.
              </p>
              <a
                href="https://github.com/b-frazier/employee-tracker"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See the code!
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src={weather} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">
                A weather forecast app using data retrieved from OpenWeather
                API.
              </p>
              <a
                href="https://b-frazier.github.io/weather-forecast/"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See it in action!
              </a>
              <a
                href="https://github.com/b-frazier/weather-forecast"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See the code!
              </a>
            </div>
          </div>
        </div>
        {/* six */}
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src={generator} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">README Generator</h5>
              <p className="card-text">
                A command line application that generates a professional README
                file based on prompt inputs from the user.
              </p>
              <a
                href="https://github.com/b-frazier/readme-gen"
                className="btn btn-primary my-2"
                rel="noreferrer"
                target="_blank"
              >
                See the code!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
