import React from 'react';
import Header from '../components/Header';
import './Main.css';

function MainPage() {
    return (
        <div className="main-page">

            <div className="text-content">
                <h2>Hi!</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                </p>
            </div>
            <div class="images">
                <p>images</p>
            </div>
            <sidebar>
                <div className="sidebar-content">
                    <h2>resume</h2>
                    <p>[link to resume]</p>
                    <h2>contact</h2>
                    <p>[link to LinkedIn]</p>
                    <p>[link to github]</p>
                    <p>[email]</p>
                </div>
            </sidebar>
            
        </div>
    );
}

export default MainPage;