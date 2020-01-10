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
      </div>
    </div>
  );
}

export default App;
