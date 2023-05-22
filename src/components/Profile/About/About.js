import './About.scss';
import myVideo from '../../../assets/Profile_video.mp4';
import ReactPlayer from 'react-player';

function About() {
    console.log(myVideo);
    const videoSrc = myVideo;
    return (
        <div className="About">
            <p>I'm a Web Developer student from Paris.</p>
            <div className="About-profile-video">
                {/* <ReactPlayer
                    src={videoSrc}
                    width="100%"
                    height="100%"
                /> */}
                <video loop controls>
                    <source src={myVideo} type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
}

export default About;