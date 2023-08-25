import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div className="Header">
            <h2><a  className="Header-name" href='mailto:lekdup.dev@gmail.com'>Tenzin.dev</a></h2>
            <ul className="Header-social">
                <li><a href='https://www.linkedin.com/in/lekdup/' target='blank' title='LinkedIn' className='Header-social-linkedin'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href='https://github.com/lekdup' target='blank' title='GitHub' className='Header-social-github'><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href='https://twitter.com/BaguetteBride' target='blank' title='Twitter' className='Header-social-twitter'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a id="cv" href="https://drive.google.com/file/d/1GZap1Ty7l6peQe_luh8qCJDTkCXqHzY0/view?usp=sharing" target='blank'>Resume <FontAwesomeIcon icon={faDownload} /></a></li>
            </ul>
        </div>
    );
}

export default Header;
