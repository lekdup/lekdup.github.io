import About from './About/About';
import Header from './Header/Header';
import './Profile.scss';

function Profile() {
    return (
        <div className="Profile">
            <Header />
            <About />
        </div>
    )
}

export default Profile;