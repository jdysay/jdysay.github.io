import React from 'react';
import './Project.css';
import projectImage from './images/umi.png'

function ProjectPage() {
    return (
        <div className="project-page">
            <div className="project-text">
                <h2>Current Projects</h2>
                <p>
                   <strong>Umi</strong> - task management and music all in one to help student increase focus and productivity!
                </p>
                <h2>Past Projects</h2>
                <p>
                    [update when more projects are created] 
                </p>
            </div>
            <div className="images">
                <img src={projectImage} alt="our project icon"></img>
            </div>
        </div>
    );
}

export default ProjectPage;