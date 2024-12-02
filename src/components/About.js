import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am a Splunk Core Certified Power User and Splunk Enterprise Certified Admin (2023) with hands-on
        cybersecurity experience, including completing the TryHackMe Advent of Cyber 2024.
      </p>
      <h3>Core Skills</h3>
      <ul className="core-skills">
        <li>Cloud Security</li>
        <li>Log Analysis</li>
        <li>Penetration Testing</li>
        <li>Splunk</li>
      </ul>
    </section>
  );
};

export default About;
