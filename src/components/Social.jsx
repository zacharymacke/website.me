import React from 'react';
import styles from '../styles/Social.css';
import gitLogo from "../assests/gray-git.png";
import twitterLogo from "../assests/gray-twitter.png";
import mailLogo from "../assests/gray-mail.png";
import linkedInLogo from "../assests/gray-linkeding.png";

function Social() {
  return (
    <div className={styles.base}>
      <div className='social-container'>
        <ul className="social-list">
          <li className="social-list-elem"><img src={gitLogo} alt="git" width={40} height={30}></img></li>
          <li className="social-list-elem"><img src={twitterLogo} alt="twitter" width={40} height={30}></img></li>
          <li className="social-list-elem"><img src={linkedInLogo} alt="linkedIn" width={40} height={30}></img></li>
          <li className="social-list-elem"><img src={mailLogo} alt="mail" width={40} height={30}></img></li>
        </ul>
      </div>
    </div>
  );
}

Social.defaultProps = {};


export default Social;
