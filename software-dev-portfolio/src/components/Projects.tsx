import react, {useState} from 'react';
import Project from "./Project.tsx";
import '../styles/Projects.css';
import monsterRouteImg from '../assets/monsterroute.png'
import rekindledImg from '../assets/rekindled.jpg'
import type {Link, ProjectData, Tag, CaseStudyData} from "../types/Types.ts";

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const projectsArray: ProjectData[] = [
        {id: 1, title: "Rekindled", img: rekindledImg, description: "Rekindled is a 3D Third Person game", category: "games", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", description: "Case study for Rekindled", img: rekindledImg, year: "2026", video: "https://www.youtube.com/watch?v=he_dPEEWeLY"},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"}, 
                {id: 2, name: "Trailer", url: "https://www.youtube.com/watch?v=he_dPEEWeLY"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        },
        {id: 2, title: "Monster Route", img: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "games", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", description: "Case study for Rekindled", img: rekindledImg, year: "2026", video: "#"},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"},
                {id: 2, name: "Trailer", url: "https://www.youtube.com/"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        },
        {id: 3, title: "Telemetry System", img: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "web", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", description: "Case study for Rekindled", img: rekindledImg, year: "2026", video: "#"},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"},
                {id: 2, name: "Trailer", url: "https://www.youtube.com/"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        },
        {id: 4, title: "PokeWalk", img: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "mobile", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", description: "Case study for Rekindled", img: rekindledImg, year: "2026", video: "#"},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"},
                {id: 2, name: "Trailer", url: "https://www.youtube.com/"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        }, 
    ]
    
    const filteredProjects = filter === "all" ? projectsArray : 
        projectsArray.filter(item => item.category === filter);
    
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-selectors-container">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('games')}>Games</button>
                <button onClick={() => setFilter('web')}>Web</button>
                <button onClick={() => setFilter('mobile')}>Mobile</button>
            </div>
            <div className="project-components-container">
                {filteredProjects.map(project => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;