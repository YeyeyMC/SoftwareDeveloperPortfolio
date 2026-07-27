import react, {useEffect, useState} from 'react'
import '../styles/Project.css'
import type {Link, ProjectData, Tag, ProjectProps} from "../types/Types.ts";
import CaseStudy from "./CaseStudy.tsx";

const Project = ({project}: ProjectProps) => {
    const [caseStudyOpen, setCaseStudyOpen] = useState(false);
    const { title, description, img, year, links = [], tags = []} = project;
    
    useEffect(() => {
        if (caseStudyOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [caseStudyOpen]);
    
    return (
        <>
            <div className="project-container">
                <div className="project-photo-container">
                    <img alt="Project Photo" src={img}></img>
                </div>
                <div>
                    <div className = "project-title-container">
                        <h2>{title}</h2>
                        <h3>{year}</h3>
                    </div>
                    <p>{description}</p>
                    <ul>
                        {tags.map(tag => (
                            <li key={tag.id}>{tag.name}</li>
                        ))}
                    </ul>
                    <div className="project-buttons-container">
                        <ul>
                            {links.map(link => (
                                <li key={link.id}><a href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                        <button onClick={() => setCaseStudyOpen(!caseStudyOpen)}>Case Study</button>
                    </div>
                </div>
            </div>
            {caseStudyOpen && 
                <CaseStudy caseStudy={project.caseStudy} onClose={() => setCaseStudyOpen(false)}></CaseStudy>
            }
        </>
    )
}

export default Project;