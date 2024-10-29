import React from 'react';
import Header from '../components/Header';
import './Main.css';
import myImage from './images/headshot.png';

function MainPage() {
    return (
        <div className="main-page">

            <div className="text-content">
                <h2>Hi!</h2>
                <p>
                    My name is Jaycie Say and I am a second year student at SFU in Software Systems.
                    Some of my interests outside of school and coding include music, baking and exploring
                    the outdoors. I was a part of concert and jazz band in high school playing
                    the drum kit and percussion. In addition I learned how to play the piano when I was 4 
                    years old! During midterm and final season you can find me stres baking bookies, 
                    muffins and scones. I have also started learning how to make fresh bread. Finally, in the summer
                    I love hiking and kayaking. My favourite spot is to kayak at Rocky Point in 
                    Port Moody as there are so many seals there in the summer!
                    
                </p>
                <h2>Education</h2>
                <p><strong>Simon Fraser University</strong></p>
                <p>Bachelor of Computer Science - Software Systems 2023 - present</p>
            </div>
            <div class="images">
                <img src={myImage} alt="headshot photo"></img>
            </div>
            <sidebar>
                <div className="sidebar-content">
                    <h2>resume</h2>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        download my resume
                    </a>
                    <h2>contact</h2>
                    <p>
                        <a href="www.linkedin.com/in/jaycie-say-923611274" target="_blank" rel="noopener noreferrer">
                            link to my LinkedIn
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/jdysay" target="_blank" rel="noopener noreferrer">
                            link to my github
                        </a>
                        
                    </p>
                    <p><strong>Email: </strong> jaycie.say@outlook.com</p>
                    <p><strong>School Email: </strong> jds34@sfu.ca</p>
                </div>
            </sidebar>
            
        </div>
    );
}

export default MainPage;