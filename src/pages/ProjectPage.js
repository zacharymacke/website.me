import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import ExpandedDataItem from '../components/ExpandedDataItem';
import ExpandedSection from '../components/ExpandedSection';

function ProjectPage() {
  return (
    <div className="project-page">
          <Navbar />
          <ExpandedSection 
            name="Projects"
            link="/projects"
            component={[
                        <ExpandedDataItem 
                          dataTitle="Website.me" 
                          description=" Personal website / portfolio 👨🏻‍💻" 
                          languages={["Javascript", "CSS", "HTML"]}
                          frameworks={["React", "Sass"]}
                          longDescription="My personal website, which you are browsing right now, to showcase my work and experience. I used React and Sass to build out the site."
                          website="https://github.com/zacharymacke/website.me"
                        />,
                        <ExpandedDataItem 
                          dataTitle="Rocket Pomodoro" 
                          description=" Rocket themed pomodoro timer. 🚀👨🏼‍🚀" 
                          languages={["Javascript", "CSS", "HTML"]}
                          frameworks={["Sass"]}
                          longDescription="This was one of my first true projects in web development which taught fundamental skills such as DOM manipulation, styling, and more advanced Javascript techniques. I used vanilla Javascript, HTML, and Sass to build this."
                          website="https://github.com/zacharymacke/Rocket-Pomodoro"
                        />,
                        <ExpandedDataItem
                          dataTitle="Finger Game" 
                          description=" Hack ISU 2018 project / game that utilizes self-trained object detection. 🖐️"
                          languages={["Python", "Javascript", "HTML", "CSS"]}
                          frameworks={["Bulma", "Flask", "PyTorch"]}
                          longDescription="Finger Game is a simple web application/game that utilizes self-trained object detection and the Flask microframework to create a quirky, yet uniquely fun HackISU Fall 2018 project. We used Javascript, Python, Flask, and a variety of other frameworks and languages to accomplish this task."
                          website="https://github.com/zacharymacke/finger-game"
                        />,
                        <ExpandedDataItem
                          dataTitle="Stackbot" 
                          description=" NLP chat-bot that responds with best Stack Overflow answers to input question. 🤖"
                          languages={["Python"]}
                          frameworks={["Gensim"]}
                          longDescription="Stackbot is a Python question/answer terminal assistant. The goal was to create a tool which could use a database of questions and use NLP to read in the user's input and relay those similar questions and answers from Stack Overflow to the user."
                          website="https://github.com/zacharymacke/Stackbot"
                        />
                      ]}
          />
    </div>
  );
}

export default ProjectPage;

