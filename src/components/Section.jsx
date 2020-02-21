import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/Section.scss';
import DataItem from "./DataItem"
import { Link } from 'react-router-dom'

var arr, 
    redirect,
    renderedOutput;

function Section(props) {

  arr = props.component;
  renderedOutput = arr.map(item => <div className="data-item"> {item} </div>)

  redirect = props.link;

  return (
    <div className="section-container">

      <h1 className="section-title">{props.name}</h1>
      <div className="section">
        {renderedOutput}
      </div>

        <div className="learnmore-button">
          <Link to={redirect}>
            <button className="learn-btn-green">Learn More</button>
          </Link>
        </div>

    </div>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired
};

export default Section;
