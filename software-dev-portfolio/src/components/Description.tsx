import react from 'react'
import '../styles/Description.css'
import profilePhoto from "../assets/profilephoto.jpeg"
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";

const Description = () => {
    return (
        <div className="description-container">
            <div className="description-text-container">
                <p>Personal Portfolio</p>
                <h1>Yeison Munoz</h1>
                <p>Software Engineer building polished and maintainable products across Games, Web, and Mobile.
                    I develop gameplay systems, responsive applications, and end-to-end features involving APIs,
                    authentication, databases, AI, and multiplayer.
                </p>
                <div className="description-skills-container">
                    <ul>
                        <li>Software Developer</li>
                        <li>Vancouver, Canada</li>
                        <li>Games - Web - Mobile</li>
                    </ul>
                </div>
            </div>
            <div className="description-photo-container">
                <img src={profilePhoto} alt="ProfilePhoto"></img>
            </div>
            <aside className="description-contact-section">
                <h3>Contact / Info</h3>
                <a href="mailto:munozceronyeisonandres@gmail.com">
                    <SiGmail size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/yeisonamunoz/">
                    <FaLinkedin size={30}/>
                </a>
                <a href="https://github.com/YeyeyMC">
                    <FaGithub size={30}/>
                </a>
                <a href="https://yeison-munoz.itch.io/">
                    <FaItchIo size={30}/>
                </a>
            </aside>
        </div>
    )
}

export default Description;