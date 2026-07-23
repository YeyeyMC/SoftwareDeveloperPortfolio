import react from 'react'
import '../styles/Description.css'
import profilePhoto from "../assets/profilephoto.jpeg"

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
        </div>
    )
}

export default Description;