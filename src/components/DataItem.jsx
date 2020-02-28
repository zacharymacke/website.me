import React from 'react';
import PropTypes from 'prop-types';
import Styles from "../styles/DataItem.scss";

var isImg,
    isLink,
    isLang,
    langArr,
    frameArr,
    isFramework,
    renderedLang,
    renderedFrame,

function DataItem(props) {
  isImg =       props.dataImage;
  isLink =      props.website;
  isLang =      props.languages;
  isFramework = props.frameworks;
  langArr =     props.languages;
  frameArr =    props.frameworks;

  /*
   * TODO: 
   *  - Abstract this into a singular func to reduce redundancy
   */

  // don't add comma after last lang
  renderedLang = langArr ? langArr.map(function(item, index, ls){
    if(index === ls.length - 1){
      return <span className="string-accent"> ' {item} ' </span>;
    }
    else{
      return <React.Fragment> <span className="string-accent"> ' {item} ' </span><span> , </span> </React.Fragment>;
    }
  }) : null

  renderedFrame = langArr ? frameArr.map(function(item, index, ls){
    if(index === ls.length - 1){
      return <span className="string-accent"> ' {item} ' </span>;
    }
    else{
      return <React.Fragment> <span className="string-accent"> ' {item} ' </span><span> , </span> </React.Fragment>;
    }
  }) : null


  return (
    <div className="item-contents">
        <React.Fragment>
          {isImg ? <img className={"data-image inline"} src={props.dataImage} alt="supporting img" /> : null }
            <div className={"inline"}>
              {isLink ? 
              <a target="_blank" rel="noopener noreferrer" href={props.website}>
                <h3 className={"data-heading bold-text"}>{props.dataTitle}</h3>
              </a> : 
                <h3 className={"bold-text"}>{props.dataTitle}</h3>
              }
              {isLang ? 
                  <div>
                    <h4 className="project-sub-heading project">var &nbsp;</h4>
                    <span className="project-sub-heading">description = [ <span className="string-accent">'{props.description}' </span>] ,</span>
                    <span className="mobile-project-sub-heading">{props.description}</span>
                      {isFramework ? 
                        <React.Fragment>
                          <span className="project-sub-heading tech">&nbsp; &nbsp; &nbsp; &nbsp; languages = [ {renderedLang} ] , </span>
                          <span className="project-sub-heading tech">&nbsp; &nbsp; &nbsp; &nbsp; frameworks = [ {renderedFrame} ] ; </span>
                        </React.Fragment>
                          :
                        <span className="project-sub-heading tech">&nbsp; &nbsp; &nbsp; &nbsp; languages = [ {renderedLang} ] ; </span>
                      }
                  </div> : 
                  <h4 className="data-sub-heading regular-text">{props.description}</h4>
              }
            </div>
        </React.Fragment>
    </div>
  );
}

DataItem.defaultProps = {};

DataItem.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  description: PropTypes.string
};

export default DataItem;
