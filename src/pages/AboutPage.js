import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import ExpandedSection from '../components/ExpandedSection'
import ExpandedDataItem from '../components/ExpandedDataItem'

import profilePicture from '../assests/about_picture.jpeg';



function AboutPage() {
  return (
    <div className="about-page">
          <Navbar />
          <ExpandedSection 
            name="About"
            link="/about"
            component={[<ExpandedDataItem 
                      about={true}
                      dataImage={profilePicture} 
                    />
              ]}
          />
    </div>
  );
}

export default AboutPage;

