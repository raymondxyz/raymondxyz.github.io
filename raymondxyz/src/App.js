import React from 'react';
import Welcome from './components/welcome/Welcome';
import AboutMe from './components/about_me/AboutMe';
import Skills from './components/skills/Skills';
import History from './components/history/History';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './styling/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        scrollDown="skills"
        tooltipDown="Skills"
        scrollUp="welcome"
        tooltipUp="Welcome"
        id="aboutme"
      >

      </AboutMe>

      <Skills
        scrollDown="history"
        tooltipDown="History"
        scrollUp="aboutme"
        tooltipUp="About Me"
        id="skills"
      >

      </Skills>

      <History
        scrollDown="projects"
        tooltipDown="Projects"
        scrollUp="skills"
        tooltipUp="Skills"
        id="history"
      >

      </History>

      <Projects
        scrollUp="history"
        tooltipUp="History"
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
