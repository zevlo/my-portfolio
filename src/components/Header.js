import React from 'react';
import './Header.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; // Icons from react-icons library.

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">Zachary Allen</h1>
        <p className="header-expertise">Cloud Security | Splunk</p>
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
            href="mailto:.com"
            className="header-icon"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
