import React from 'react';
import Welcome from './components/welcome/Welcome';
import AboutMe from './components/about_me/AboutMe';
import Skills from './components/skills/Skills';
import History from './components/history/History';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './styling/App.css';

function App() {
  return (
    <div>
      <Welcome
        scrollDown="aboutme"
        tooltipDown="About Me"
        id="welcome"
      >

      </Welcome>

      <AboutMe
        id="aboutme"
      >

      </AboutMe>

      <Skills
        id="skills"
      >

      </Skills>

      <History
        id="history"
      >

      </History>

      <Projects
        id="projects"
      >

      </Projects>

      <Footer
        id="footer"
      >
        
      </Footer>
    </div>
  )
}

export default App;
