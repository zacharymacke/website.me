import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Social from '../components/Social';
import DataItem from '../components/DataItem';
import Section from '../components/Section';
import disneyLogo from '../assests/disneyLogo.png';
import schwabLogo from '../assests/schwabLogo.png';
import iowaLogo from '../assests/iowaLogo.png';
import collinsLogo from '../assests/collinsLogo.png';


function HomePage() {
  return (
    <div className="App">
      <div className="page">
        <div className="landing">
          <Navbar />
          <Introduction 
            link="/about"
          />
          <Social />
        </div>
        <Section 
          name="Experience"
          link="/experience"
          component={[
                     <DataItem 
                        dataTitle="Charles Schwab" 
                        website="https://schwab.com"
                        dataImage={schwabLogo} 
                        description="Mobile Software Engineer: June 2020"
                      />,
                     <DataItem 
                        dataTitle="The Walt Disney Company - ESPN" 
                        website="https://Disney.com"
                        dataImage={disneyLogo} 
                        description="Front-End Software Engineering Intern: May 2019 to Aug. 2019"
                      />,
                     <DataItem
                        dataTitle="The University of Iowa" 
                        website="https://uiowa.edu"
                        dataImage={iowaLogo} 
                        description="Software Engineer (Web & Data Science): Aug. 2019 to Apr. 2019"
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
          name="Projects"
          link="/projects"
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
                        description=" NLP chat-bot that responds with best Stack Overflow answers to input question. 🤖"
                        languages={["Python"]}
                        frameworks={["Gensim"]}
                        website="https://github.com/zacharymacke/Stackbot"
                      />
          ]}
        />
      <Footer />
      </div>
    </div>
  );
}

export default HomePage;
