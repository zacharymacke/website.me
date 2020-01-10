import React from 'react';
import PropTypes from 'prop-types';
import Styles from "../styles/DataItem.css";


function DataItem(props) {
  let imgExist = props.dataImage;
  return (
    <React.Fragment>
      {imgExist ? <img className={"data-image inline"} src={props.dataImage} alt="supporting img" /> : null }
        <div className={"inline"}>
          <a href={props.website}>
            <h3 className={"data-heading bold-text"}>{props.dataTitle}</h3>
          </a>
          <h4 className="data-sub-heading regular-text">{props.description}</h4>
        </div>

    </React.Fragment>
  );
}

DataItem.defaultProps = {};

DataItem.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  description: PropTypes.string
};

export default DataItem;
