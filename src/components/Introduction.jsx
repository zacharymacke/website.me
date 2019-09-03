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
            let shouldUpdate = (prevState.seconds % 5) === 0 && prevState.seconds !== 0;
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
          " software engineering intern at Disney 👨🏻‍💻",
          " wannabe astronaut 👨🏼‍🚀 ",
          " former machine learning intern 🤖",
          " recreational rockclimber 🧗🏻‍♂️",
        ],
      //currText = text[state.textIndex];
      currText = text[0];
    return (currText);
  };

  return (
    <div className={Styles.base}>

      <div className="introduction">
        <h1 className="name">Hey!&nbsp;&nbsp;
          <span role="img" aria-label="hello">
            👋🏻
          </span>
             &nbsp; I'm Zach Macke
        </h1>
        <div className="subhead-container">
          <div className={'a a-text-settings'}>
            <p className="ptag">a</p>
          </div>

          <div className={'rotate text-settings'}>
            <span className="bracket-left">&#91;&nbsp;</span>
            <p className="rotate-ptag">{changeText()}</p>
            <span className="bracket-right">&nbsp;&#93;</span>
          </div>

        </div>
      </div>
    </div>
  );
}

Introduction.defaultProps = {};

export default Introduction;
