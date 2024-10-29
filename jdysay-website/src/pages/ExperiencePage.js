import React from 'react';
import Header from '../components/Header';
import './Experience.css';

function ExperiencePage() {
    return (
        <div className="experience-page">
            <div className="experience-text">
                <h2>Work Experience</h2>
                <p>
                    <strong>
                        On-Call Activity Leader, &nbsp;
                        <a href="https://www.gv.ymca.ca" target="_blank" rel="noopener noreferrer">YMCA</a>
                    </strong> 2024 - present 
                    
                    <br></br>
                    
                    <strong>Group Leader, YMCA</strong> 2023 <br></br>
                    <strong>Early Learner Assistant, Kumon</strong> 2022 - 2023
                </p>
                <h2>Volunteer Experience</h2>
                <p>
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
            <sidebar>
                <div className="sidebar-content">
                    <h2>Skills</h2>
                </div>
            </sidebar>
        </div>
    );
}

export default ExperiencePage;