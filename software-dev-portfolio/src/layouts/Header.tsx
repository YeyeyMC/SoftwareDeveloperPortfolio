import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div>
                <h1>Yeison Munoz</h1>
            </div>
            <nav>
                <ul className="header-nav-container">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;