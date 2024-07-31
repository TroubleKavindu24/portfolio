import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Intro from './components/Intro/intro.js';
import Skills from './components/Skills/skills.js';
import Works from './components/Works/works.js';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';
import './App.css'; // Import your CSS file

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? 'white' : 'black',
    color: isDarkMode ? 'black' : 'white',
  };

  return (
    <div className="main-container" style={containerStyle}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
