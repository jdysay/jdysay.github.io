import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

function Header({title}) {
    return (
        <header className="header">
        <h1>{title}</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;