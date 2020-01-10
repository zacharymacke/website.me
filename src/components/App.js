import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Introduction from './Introduction';
import Social from './Social';
import DataItem from './DataItem';
import Section from './Section';
import disneyLogo from '../assests/disneyLogo.png';
import iowaLogo from '../assests/iowaLogo.png';
import collinsLogo from '../assests/collinsLogo.png';


function App() {
  return (
    <div className="App">
      <div className="landing">
        <Navbar />
        <Introduction />
        <Social />
        <Section 
          name="Experience."
          component={[<DataItem 
                        dataTitle="The Walt Disney Company - ESPN" 
                        website="https://Disney.com"
                        dataImage={disneyLogo} 
                        description="Front-End Software Engineering Intern: May 2019 to Aug. 2019"
                      />,
                      <DataItem
                        dataTitle="The University of Iowa" 
                        website="https://uiowa.edu"
                        dataImage={iowaLogo} 
                        description="Software Engineer (Web & Data Science): Aug. 2019 to Present"
                      />,
                      <DataItem
                        dataTitle="Collins Aerospace" 
                        website="https://www.rockwellcollins.com/"
                        dataImage={collinsLogo} 
                        description="Data Science Intern: May 2018 to Apr. 2019"
                      />
          ]}
        />
        <Section 
          name="Projects."
          component={[
                      <DataItem 
                        dataTitle="Website.me" 
                        description=" Personal website / portfolio 👨🏻‍💻" 
                        languages={["Javascript", "CSS", "HTML"]}
                        frameworks={["React", "Sass"]}
                        website="https://github.com/zacharymacke/website.me"
                      />,
                      <DataItem 
                        dataTitle="Rocket Pomodoro" 
                        description=" Rocket themed pomodoro timer. 🚀👨🏼‍🚀" 
                        languages={["Javascript", "CSS", "HTML"]}
                        frameworks={["Sass"]}
                        website="https://github.com/zacharymacke/Rocket-Pomodoro"
                      />,
                      <DataItem
                        dataTitle="Finger Game" 
                        description=" Hack ISU 2018 project / game that utilizes self-trained object detection. 🖐️"
                        languages={["Python", "Javascript", "HTML", "CSS"]}
                        frameworks={["Bulma", "Flask", "PyTorch"]}
                        website="https://github.com/zacharymacke/finger-game"
                      />,
                      <DataItem
                        dataTitle="Stackbot" 
                        description=" NLP chat-bot which responds with the highest rated Stack Overflow answer to input questions. 🤖"
                        languages={["Python"]}
                        frameworks={["Gensim"]}
                        website="https://github.com/zacharymacke/Stackbot"
                      />
          ]}
        />
      </div>
    </div>
  );
}

export default App;
