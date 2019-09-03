import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Introduction from './Introduction';
import Social from './Social'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Social />
    </div>
  );
}

export default App;
