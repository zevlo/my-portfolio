import React from 'react';
import './Header.css';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">Zachary Allen</h1>
        <p className="header-expertise">Cloud Security | Data Engineer | Splunk</p>
        <p className="header-about">
          I’m passionate about building impactful software solutions and crafting seamless user experiences.
        </p>
        <div className="header-icons">
          <a
            href="https://github.com/zevlo"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:zachallen21@gmail.com"
            className="header-icon"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-allen-13211a148/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
