import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am a Splunk Core Certified Power User and Splunk Enterprise Certified Admin (2023) with hands-on
        cybersecurity experience, including completing the TryHackMe Advent of Cyber 2024. I specialize in solving
        problems, improving processes with DMAIC, and helping organizations strengthen their security posture to meet
        industry standards.
      </p>
      <h3>Core Skills</h3>
      <ul className="core-skills">
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 & CSS3</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default About;
