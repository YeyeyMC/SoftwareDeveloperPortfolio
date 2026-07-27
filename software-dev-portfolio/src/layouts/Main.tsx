import react from 'react';
import '../styles/Main.css'
import Description from "../components/Description.tsx";
import Projects from "../components/Projects.tsx";

const Main = () => {
    return (
        <div className="main-container">
            <Description/>
            <Projects/>
        </div>
    )
}

export default Main;
