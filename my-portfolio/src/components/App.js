import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';
import About from './About/About';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">
      <header className="Header">
        <h2
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ><a  className="Header-name" href='mailto:lekdup.dev@gmail.com'>Tenzin Sivukpa {isHovered ? (
          <FontAwesomeIcon icon={ faEnvelope } bounce/>
        ) : (
          <FontAwesomeIcon icon={ faEnvelope } />
        )}</a></h2>
        <NavBar />
      </header>
      <main className="container">
        <Home />
        <About />
        <Projects />
      </main>
      <footer>
        <p><FontAwesomeIcon icon={ faCode } /> and Crafted with <FontAwesomeIcon icon={ faHeart } beat id="heart"/> by <a href="https://linkedin.com/in/lekdup/" target="_blank" rel="noreferrer">Tenzin SIVUKPA </a></p>
      </footer>
    </div>
  );
}

export default App;
