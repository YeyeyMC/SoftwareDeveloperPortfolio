import react, {useState} from 'react';
import Project from "./Project.tsx";
import '../styles/Projects.css';
import monsterRouteImg from '../assets/monsterroute.png'
import rekindledImg from '../assets/rekindled.jpg'

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const projectsArray = [
        {id: 1, title: "Rekindled", image: rekindledImg, description: "Rekindled is a 3D Third Person game", category: "games"},
        {id: 2, title: "Monster Route", image: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "games"},
        {id: 3, title: "Telemetry System", image: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "web"},
        {id: 4, title: "PokeWalk", image: monsterRouteImg, description: "Monster Route is a 2D First person game", category: "mobile"},
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
                    <Project 
                        key = {project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;