import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/Section.css';
import DataItem from "./DataItem"


function Section(props) {

  var arr = props.component;
  var renderedOutput = arr.map(item => <div className="data-item"> {item} </div>)


  return (
    <div className="section-container">

      <h1 className="section-title">{props.name}</h1>
      <div className="data-item">
        {renderedOutput}
      </div>

    </div>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired
};

export default Section;
