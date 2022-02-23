import React from 'react';
import PropTypes from 'prop-types';
import "../styles/ExpandedDataItem.scss";

var isImg,
    isLink,
    isLang,
    company,
    isAbout,
    longDescrip;
  

function DataItem(props) {
  isImg =       props.dataImage;
  isLink =      props.website;
  isLang =      props.languages;
  company =     props.company;
  isAbout =     props.about;
  longDescrip = props.longDescription;


  const description = () => {
    switch(company) {
      case "schwab": return(
        <React.Fragment>
          <p>At Schwab, I am on the Mobile Development Team as a 
              <b> Software Engineer</b>.
              The position has me working with the various mobile applications on their platform working to develop and maintain new and existing features.
          </p>
        </React.Fragment>
      );
      case "disney": return(
        <React.Fragment>
          <p>At Disney, I was part of the Site Development / Consumer Products team working on&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://espn.com">ESPN.com.</a>
            &nbsp;On the consumer products team I was a 
              <b> Front-end Software Engineering Intern</b>.
              The position had me working in <b>ReactJS</b> across various parts of the website from the homepage to scoreboards, player cards, and more.
          </p>
          <p>Some things I worked on here are:</p>
            <ul>
              <li>Implemented a redesign of the ESPN article page; refactoring the page to ReactJS across the data flow from data parsing to content display.</li>
              <li>Assisted the Site Development/Consumer Products team with the development and maintenance of ESPN.com and its editions.</li>
            </ul>
        </React.Fragment>
      );

      case "iowa": return (
        <React.Fragment>
          <p>Part-time software engineer, utilizing JavaScript, ReactJS, HTML, CSS, and some PHP / Python on the server-side, at the 
            <a target="_blank" rel="noopener noreferrer" href="https://hydroinformatics.uiowa.edu/"> University of Iowa Hydroinformatics Lab (UIHI Lab)</a>.
          </p>
          <p>Some things I work on here are:</p>
            <ul>
              <li>Refactoring the Clear Creek Watershed Information System (iowawatersheds.org) from Angular to React and converting ArcGIS API’s to utilize Google Maps Platform.</li>
              <li>Assisting in the development and design, both client and server side, of the information system’s decomposition.</li>
            </ul>
        </React.Fragment>
      );

      case "collins": return (
        <React.Fragment>
          <p>At
            <a target="_blank" rel="noopener noreferrer" href="https://www.collinsaerospace.com/"> Collins Aerospace </a>
            I was a 
              <b> Data Science Intern </b> 
                and somewhat of a jack of all trades working on many things different things touching machine learning / AI.
          </p>
          <p>Some things I worked on here are:</p>
            <ul>
              <li>Automated the creation of a data dictionary/metadata repository from SAP/HANA to aid an automated data science system.</li>
              <li>Implemented and trained Convolutional Neural Network architectures in Tensorflow.</li>
              <li>Developed an internal tool which utilized facial recognition in Tensorflow, Google Calendar, and Gmail API's.</li>
            </ul>
        </React.Fragment>
      );

      default: return ;
    }
  }


  return (

    (isAbout ? 
      <React.Fragment>
        <div className="expanded-item-contents about">
          <img className={"expanded-inline-about"} src={props.dataImage} alt="supporting img" />
            <div className={"expanded-inline"}>
              <p>
                I am <b>Zach</b>, a software engineer with a passion for working on high impact, large scale applications utilized by many.
              </p>

              <p>
                I've done a bit of everything including mobile development, front-end development, data cleaning / analytics, scripting, and data science.
              </p>
                <p>Some Languages / Tools I've worked with are:</p>
                <ul>
                  <li><b>Proficient:</b> [ Python, Javascript, ReactJS, HTML, CSS / SCSS, Haskell, Kotlin and Tableau ]</li>
                    <li><b>Familiar:</b> [ NodeJS (Express), Redux, SQL, C /C++, Java, PHP, Google Cloud Services, and AWS ]</li>
                </ul>
              <p>
                Please reach out in any way from the links provided on the home page, thanks for taking the time to check out the site! <b>&nbsp;&nbsp;&nbsp;&nbsp;:wq</b>
              </p>
            </div> 
        </div>
      </React.Fragment>

    : (

    <React.Fragment>
      <div className="expanded-item-contents">
            {isImg ? <img className={"expanded-data-image expanded-inline"} src={props.dataImage} alt="supporting img" /> : null }
            <div className={"expanded-inline"}>
              {isLink ? 
              <a target="_blank" rel="noopener noreferrer" href={props.website}>
                <h3 className={"expanded-data-heading bold-text"}>{props.dataTitle}</h3>
              </a> : 
                <h3 className={"bold-text"}>{props.dataTitle}</h3>
              }
              <h4 className="data-sub-heading regular-text">{props.description}</h4>
          </div>
      </div>

      <div className="position-description">
        {isLang ? 
            <p>{longDescrip}</p>
          : <p>{ description() }</p>
        }
      </div>
    </React.Fragment>
    ))
  );
}

DataItem.defaultProps = {};

DataItem.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  description: PropTypes.string
};

export default DataItem;
