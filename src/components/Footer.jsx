import React from 'react';
import styles from '../styles/Footer.scss';

function Footer({  }) {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="link-container">
          View website <a className="t-bold" target="_blank" rel="noopener noreferrer" href="https://github.com/zacharymacke/website.me">source on Github ❤️</a>
        </div>
      </footer>
    </div>
  );
}

Footer.defaultProps = {};

Footer.propTypes = {
};

export default Footer;
