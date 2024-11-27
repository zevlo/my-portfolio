import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project One</h3>
          <p>A brief description of Project One.</p>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>A brief description of Project Two.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
