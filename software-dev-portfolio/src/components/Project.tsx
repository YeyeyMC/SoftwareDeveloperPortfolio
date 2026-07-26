import react from 'react'
import '../styles/Project.css'

const Project = ({title, image, description, tags, links}) => {
    return (
        <div className="project-container">
            <div className="project-photo-container">
                <img alt="Project Photo" src={image}></img>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    <li>Tag 1</li>
                </ul>
                <a href="#">Project Link</a>
            </div>
        </div>
    )
}

export default Project;