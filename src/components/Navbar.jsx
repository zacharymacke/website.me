import React from 'react';
import styles from '../styles/Navbar.scss';


function Navbar() {
  return (

    <React.Fragment>
      <nav className="desk-nav">
        <div className="desk-nav-list">
          <a className="desk-nav-list__item" href="/">Home</a>
          <a className="desk-nav-list__item" href="/experience">Experience</a>
          <a className="desk-nav-list__item" href="/projects">Projects</a>
          <a className="desk-nav-list__item" href="/about">About</a>
        </div>
      </nav>
    </React.Fragment>
  );
}

Navbar.defaultProps = {};

Navbar.propTypes = {
};

export default Navbar;
