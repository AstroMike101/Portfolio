import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="copyright">
                    &copy; Michael Chen
                </div>
                <div className="social-links">
                    <a href="https://github.com/AstroMike101/" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/michael-chen-219b89223/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:astromike101@gmail.com" target="_blank">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
