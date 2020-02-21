import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/ExpandedSection.scss';
import ExpandedDataItem from "./ExpandedDataItem"

var arr, 
    renderedOutput; 

function ExpandedSection(props) {

  arr = props.component;
  renderedOutput = arr.map(item => <div className="expanded-data-item"> {item} </div>)

      // <div className="section">
      //   {renderedOutput}
      // </div>
  return (
    <div className="expanded-section-container">
      <a href="/" className="back-button">‹ Back</a>
      <h2 className="expanded-section-title">{props.name}</h2>
      <div className="expanded-section">
          {renderedOutput}
      </div>
    </div>
  );
}

ExpandedSection.propTypes = {
  name: PropTypes.string.isRequired
};

export default ExpandedSection;

