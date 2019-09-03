import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Navbar.css';


function Navbar() {
  return (
    <div className={styles.base}>
      <nav>
        <ul className="nav-list">
          <li className="nav-list__item"><button>Home</button></li>
          <li className="nav-list__item"><button>About</button></li>
          <li className="nav-list__item"><button>Work</button></li>
          <li className="nav-list__item"><button>Blog</button></li>
        </ul>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {};

Navbar.propTypes = {
};

export default Navbar;
