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
            caseStudy: {id: 1, title: "Rekindled - Case Study", img: rekindledImg, year: "2026", video: "https://www.youtube.com/watch?v=he_dPEEWeLY",
            descriptions: [
                {id: 1, title: "Problem", description: "During Rekindled production we wanted the player to be able to restart the game as soon as he clicks Restart in UI. However, the scene was causing a delay (normal delay because destruction and instantiation of all the objects in scene) until the scene loads. In optimization side, we wanted to enhance it so that it would happen almost instantly."},
                {id: 1, title: "Decisions", decisions: "1. My first though was not implementing manual reset because we would need to modify every script in the level to make them work with manual reset, causing major bugs without proper testing, but at the same time, the performance might get worse if the level gets bigger or contains more objects.\n\n" +
                        "2. Once all the systems and core mechanics were done in the game, almost near to alpha phase so after that, we wouldn’t have had to touch the restart system anymore, but that means more bugs for future milestones.\n\n" +
                        "3. What we finally decided was implementing it since Milestone 3 (1 month before Alpha) so all the systems created after that would be designed in the way that they fit with the manual restart, so we wouldn’t have to worry about a series of accumulated bugs at the end, which would be dangerous. This is the one we decided to do.\n\n"},
                {id: 2, title: "Results", description: "Performance got better going from 5-7 seconds of loading screen, to less than 1 second. That previous time would even increase if the set dressing were more complex, so we are avoiding those times reusing all the systems in scene instead of destroying and creating. What I would change would be the moment we designed that. If we had done that restart design before, we would have saved a lot of time fixing bugs later"}
            ]},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"}, 
                {id: 2, name: "Trailer", url: "https://www.youtube.com/watch?v=he_dPEEWeLY"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        },
        {id: 2, title: "Monster Route", img: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "games", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", img: rekindledImg, year: "2026", video: "#"},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"},
                {id: 2, name: "Trailer", url: "https://www.youtube.com/"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        },
        {id: 3, title: "Telemetry System", img: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "web", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", img: rekindledImg, year: "2026", video: "#"},
            links: [
                {id: 1, name: "Steam Page", url: "https://store.steampowered.com/app/4926530/Rekindled/"},
                {id: 2, name: "Trailer", url: "https://www.youtube.com/"}],
            tags: [
                {id: 1, name: "Unity"},
                {id: 2, name: "C#"}]
        },
        {id: 4, title: "PokeWalk", img: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "mobile", year: "2026",
            caseStudy: {id: 1, title: "Rekindled", img: rekindledImg, year: "2026", video: "#"},
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