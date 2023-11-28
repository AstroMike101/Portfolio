import React from 'react';
import './Navbar.css';




const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('experience')}>Experience</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;