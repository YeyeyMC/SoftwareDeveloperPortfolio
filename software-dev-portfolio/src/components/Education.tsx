import type {EducationProps} from "../types/Types.ts";
import '../styles/Education.css';

const Education = ({education}: EducationProps) => {
    return (
        <div className="education-container">
            <div className="education-image-container">
                <img alt="Education Image" src={education.img}></img>
            </div>
            <section className="education-text-container">
                <h3>{education.title}</h3>
                <h4>{education.school}</h4>
                <p>{education.duration}</p>
                <p>{education.description}</p>
            </section>
        </div>
    )
}

export default Education;