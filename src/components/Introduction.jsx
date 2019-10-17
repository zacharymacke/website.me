import React, {useState, useEffect} from 'react';
import Styles from '../styles/Introduction.scss';


function Introduction() {
  const INITIAL_STATE = {seconds: 0, textIndex: 0};
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        return({
          ...prevState,
          seconds: prevState.seconds + 1,
          textIndex: (function(){
            let shouldUpdate = (prevState.seconds % 3) === 0 && prevState.seconds !== 0;
            if(shouldUpdate){
              if(prevState.textIndex === 3){
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

  const changeText = () =>{
    let text = [
          " software eng intern at Disney 👨🏻‍💻",
          " wannabe astronaut 👨🏼‍🚀 ",
          " software engineer @ U. Iowa 🐥",
          " recreational rockclimber 🧗🏻‍"
        ],
      currText = text[state.textIndex];
      //currText = text[0];
    return (currText);
  };

  return (
    <div className={Styles.base}>

      <div className="introduction">
        <div className="name-container">
          <h1 className="wave">Hey!&nbsp;&nbsp;
            <span role="img" aria-label="hello">
              👋🏻
            </span>
          </h1>
          <h1 className="name">
             &nbsp; I'm Zach
          </h1>
        </div>
        <div className="subhead-container">
          <div className='a-text-settings'>
            <p className="ptag">a</p>
          </div>
          <div className={'rotate text-settings'}>
            <span className="bracket">&#91;&nbsp;</span>
            <p className="rotate-ptag">{changeText()}</p>
            <span className="bracket">&nbsp;&#93;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Introduction.defaultProps = {};

export default Introduction;
