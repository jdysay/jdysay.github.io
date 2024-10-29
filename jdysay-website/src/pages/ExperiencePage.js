import React from 'react';
import './Experience.css';
import experienceImage from './images/trycatch_volunteer.jpg'

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
                    <strong>Group Leader,&nbsp;
                        <a href="https://www.gv.ymca.ca" target="_blank" rel="noopener noreferrer">YMCA</a>
                    </strong> 2023 <br></br>
                    <strong>Early Learner Assistant,&nbsp;
                        <a href="https://www.kumon.com/ca-en/" target="_blank" rel="noopener noreferrer">Kumon</a>
                    </strong> 2022 - 2023
                </p>
                <h2>Volunteer Experience</h2>
                <p>
                    <strong>Try/Catch 2024 hosted by WiCS SFU</strong> <br></br>
                    <strong>
                        Second Year Representative for &nbsp;
                        <a href="https://sfussss.org" target="_blank" rel="noopener noreferrer">Software System Student Society</a>
                    </strong>
                </p>
            </div>
            <div className="images">
                <img src={experienceImage} alt="try-catch volunteering"></img>
            </div>
            <sidebar>
                <div className="sidebar-content">
                    <h2>Skills</h2>
                    <ul>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </sidebar>
        </div>
    );
}

export default ExperiencePage;