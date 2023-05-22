import './About.scss';
import myVideo from '../../../assets/Profile_video.mp4';
import { useRef } from 'react';

function About() {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    }
    const handleMouseLeave = () => {
        videoRef.current.pause();
    }

    return (
        <section className="container">
            <div className="About">
                <article className="About-me">
                    <h2 className="About-me-title">Front-End React Developer. </h2>
                    <p className="About-me-text">Hello world !<br/> I'm Tenzin. A passionate Front-end React Developer from Paris, France !</p>
                </article>
                <div className="About-profile-video">
                    <video
                        loop
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={videoRef}
                    >
                        <source src={myVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="skills">
                <p>Tech Stack</p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </section>
    );
}

export default About;