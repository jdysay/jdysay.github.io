import React from 'react';
import Header from '../components/Header';
import './Project.css';

function ProjectPage() {
    return (
        <div className="project-page">
            <div className="project-text">
                <h2>Current Projects</h2>
                <p>
                    [update when more projects are created] 
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <h2>Past Projects</h2>
                <p>
                    [update when more projects are created] 
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
            </div>
            <div className="images">
                <p>images</p>
            </div>
        </div>
    );
}

export default ProjectPage;