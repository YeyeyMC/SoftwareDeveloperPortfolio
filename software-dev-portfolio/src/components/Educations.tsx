import Education from "./Education.tsx";
import type {EducationData} from "../types/Types.ts";
import upbImg from "../assets/upb.png";
import vfsImg from "../assets/vfs.jpg";
import '../styles/Educations.css';

const Educations = () => {
    const educations: EducationData[] = [
        {id: 1, title: "Programming for games, Web & Mobile", school: "Vancouver Film School", 
            duration: "September 2025 - August 2026", description: "This is the description for VFS", img: vfsImg},
        {id: 2, title: "Digital Entertainment Design Engineering", school: "Pontifician Bolivarian University", 
            duration: "January 2021 - May 2025", description: "This is the description for UPB", img: upbImg}
    ];
    
    return (
        <div className="educations-container">
            <h1>Education</h1>
            <div className="educations-section-container">
                {educations.map((education) => (
                    <Education 
                        key={education.id}
                        education={education}/>
                ))}
            </div>
        </div>
    )
}

export default Educations