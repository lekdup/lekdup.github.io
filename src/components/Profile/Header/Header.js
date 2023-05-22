import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Header() {
    const downloadFileAtURL=() => {

    }
    return (
        <div className="Header">
            <h1 className="Header-name">Tenzin SIVUKPA</h1>
            <ul className="Header-social-media">
                <li><a href='https://www.linkedin.com/in/lekdup/' target='blank' title='LinkedIn' className='Header-social-media-linkedin'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href='https://github.com/lekdup' target='blank' title='GitHub' className='Header-social-media-github'><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href='https://twitter.com/BaguetteBride' target='blank' title='Twitter' className='Header-social-media-twitter'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><button onClick={() =>{
                    
                }}>Resume <FontAwesomeIcon icon={faDownload} /></button></li>
            </ul>
        </div>
    );
}

export default Header;