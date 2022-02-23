import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExpandedDataItem from '../components/ExpandedDataItem';
import ExpandedSection from '../components/ExpandedSection';

import schwabLogo from '../assests/schwabLogo.png';
import disneyLogo from '../assests/disneyLogo.png';
import iowaLogo from '../assests/iowaLogo.png';
import collinsLogo from '../assests/collinsLogo.png';

function ExperiencePage() {
  return (
    <div className="experience-page">
          <Navbar />
          <ExpandedSection 
            name="Experience"
            component={[
                    <ExpandedDataItem 
                      dataTitle="Charles Schwab" 
                      company="schwab"
                      website="https://schwab.com"
                      dataImage={schwabLogo} 
                      description="Mobile Software Engineer: June 2020-Present"
                    />,
                    <ExpandedDataItem 
                      dataTitle="The Walt Disney Company - ESPN" 
                      company="disney"
                      website="https://Disney.com"
                      dataImage={disneyLogo} 
                      description="Software Engineering Intern: May 2019 to Aug. 2019"
                    />,
                   <ExpandedDataItem
                      dataTitle="The University of Iowa" 
                      company="iowa"
                      website="https://uiowa.edu"
                      dataImage={iowaLogo} 
                      description="Software Engineer (Web & Data Science): Aug. 2019 to Present"
                    />,
                    <ExpandedDataItem
                      dataTitle="Collins Aerospace" 
                      company="collins"
                      website="https://www.rockwellcollins.com/"
                      dataImage={collinsLogo} 
                      description="Data Science Intern: May 2018 to Apr. 2019"
                    />
                  ]}
          />
          <Footer />
    </div>
  );
}

export default ExperiencePage;

