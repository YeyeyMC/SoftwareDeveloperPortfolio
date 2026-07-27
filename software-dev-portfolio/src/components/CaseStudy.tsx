import type {CaseStudyProps} from "../types/Types.ts";
import '../styles/CaseStudy.css';
import reactDOM from "react-dom";
import YoutubePlayer from "react-player";

const CaseStudy = ({caseStudy, onClose} : CaseStudyProps) => {
    return reactDOM.createPortal(
        <div className="case-study-container">
            <div className="case-study-container-no-overlay">
                <div className="case-study-title-container">
                    <h1>{caseStudy.title}</h1>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="case-study-image">
                    <img alt="Case Study Photo" src={caseStudy.img}></img>
                </div>
                <p>{caseStudy.description}</p>
                <p>{caseStudy.description}</p>
                <p>{caseStudy.description}</p>
                <p>{caseStudy.description}</p>
                <p>{caseStudy.description}</p>
                <div className="case-study-youtube-container">
                    <YoutubePlayer src={caseStudy.video} controls={true} width="100%" height="100%"/>
                </div>
            </div>,
        </div>,
        document.body
    )
}

export default CaseStudy;