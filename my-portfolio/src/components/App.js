import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDownload, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import About from './About/About';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">
      <header className="Header">
        <h2
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ><a  className="Header-name" href='mailto:lekdup.dev@gmail.com'>Tenzin.dev {isHovered ? (
          <FontAwesomeIcon icon={ faEnvelope } bounce/>
        ) : (
          <FontAwesomeIcon icon={ faEnvelope } />
        )}</a></h2>
        <NavBar />
        <ul className="Header-social">
          <li><a href='https://www.linkedin.com/in/lekdup/' target='blank' title='LinkedIn' className='Header-social-linkedin'><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href='https://github.com/lekdup' target='blank' title='GitHub' className='Header-social-github'><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a id="cv" href="https://drive.google.com/file/d/1GZap1Ty7l6peQe_luh8qCJDTkCXqHzY0/view?usp=sharing" target='blank'>Resume <FontAwesomeIcon icon={faDownload} /></a></li>
        </ul>
      </header>
      <About />
      <Projects />
      <footer>
        <FontAwesomeIcon icon={ faCode } /> and Crafted with <FontAwesomeIcon icon={ faHeart } beat id="heart" /> by <a href="https://linkedin.com/in/lekdup/" target="_blank" rel="noreferrer">Tenzin SIVUKPA </a>
      </footer>
    </div>
  );
}

export default App;
