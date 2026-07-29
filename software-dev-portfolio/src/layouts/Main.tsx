import react from 'react';
import '../styles/Main.css'
import Description from "../components/Description.tsx";
import Projects from "../components/Projects.tsx";
import Educations from "../components/Educations.tsx";

const Main = () => {
    return (
        <div className="main-container">
            <Description/>
            <Projects/>
            <Educations/>
        </div>
    )
}

export default Main;
