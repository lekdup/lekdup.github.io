import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

function Header() {
    return (
        <div className="Header">
            <h1 className="Header-name">Tenzin SIVUKPA</h1>
            <ul className="Header-social-media">
                <li>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
                </li>
            </ul>
        </div>
    );
}

export default Header;