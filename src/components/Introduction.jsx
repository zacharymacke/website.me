/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Pdf from "../assests/MackeResume.pdf";
import '../styles/Introduction.scss'

var redirect;

function Introduction(props) {
  const INITIAL_STATE = {seconds: 0, textIndex: 0};
  const [state, setState] = useState(INITIAL_STATE);

  redirect = props.link;

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        return({
          ...prevState,
          seconds: prevState.seconds + 1,
          textIndex: (function(){
            let shouldUpdate = (prevState.seconds % 4) === 0 && prevState.seconds !== 0;
            if(shouldUpdate){
              if(prevState.textIndex === 4){
                return 0
              }else{
                return prevState.textIndex + 1;
              }
            }else{
              return prevState.textIndex
            }
          })(),
        });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setState]);

  // Add jsx-a11y <Emoji /> component
  const changeText = () => {
    let text = [
          " software eng @ Charles Schwab 👨🏻‍💻",
          " wannabe astronaut 👨🏼‍🚀 ",
          " former intern at Disney 👨🏻‍💻",
          " recreational golfer 🏌️ ",
          " University Iowa alum 🐥"
        ],
      currText = text[state.textIndex];
    return (currText);
  };

  return (
    <div className="intro-container">

      <div className="introduction">
        <div className="name-container">
          <h1 className="wave">Hey! 👋🏻 I'm Zach Macke</h1>
        </div>
        <div className="subhead-container regular-text">
          <div className='a-text-settings'>
            <p>a</p>
          </div>
          <div className={'rotate text-settings'}>
            <span className="bracket">&#91;&nbsp;</span>
            <p className="rotate-ptag">{changeText()}</p>
            <span className="bracket">&nbsp;&#93;</span>
          </div>
        </div>
        <div className="two-button">
          <a target="_blank" rel="noopener noreferrer" href={Pdf}>
            <button className="lrg-btn-green">Resume</button>
          </a>
          <Link to={redirect}>
            <button className="lrg-btn-red">About</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

Introduction.defaultProps = {};

export default Introduction;
