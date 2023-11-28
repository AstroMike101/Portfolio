import React from 'react';
import './Experience.css';
const Experience = () => {
    return (
        <section className="experience-section">
            <h2 class= 'underLine'>Experience</h2>
            <div className="experience-item">
                <div className="experience-details">
                    <h3>Software Engineer Intern</h3>
                    <p>Kohls | Milwaukee, WI</p>
                    <p className="experience-date">June 2023 - August 2023</p>
                </div>
                <p className="experience-description">
                    • Worked within A/B testing code to dissect user behavior nuances to refine digital experiences with precision <br></br>
                    <br></br>
                    • Developed live spotlight pages, product matrix pages, and department pages <br></br>
                    <br></br>
                    • Utilized React, SASS, Javascript, and Adobe Experience Manager to create dynamic webpages that went live to
                    over 65 million customers
                </p>
            </div>
            {/* Add more experience items as needed */}
        </section>
    );
};

export default Experience;
