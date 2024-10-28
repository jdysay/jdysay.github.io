import React from 'react';

function Header({title}) {
    return (
        <header className="header"> 
            <h1>{title}</h1>
            <nav>
               <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ExperiencePage">Experience</Link></li>
                    <li><Link to="/ProjectPage">Projects</Link></li>
               </ul>
            </nav>
        </header>
    );
}

export default Header;