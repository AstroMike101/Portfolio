import React from 'react';
import './Projects.css';
import proj1 from './imgs/proj1.png'

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-item">
                <img
                    src={proj1} // Replace with the path to your project image
                    alt="Project 1"
                    className="project-image"
                />
                <div className="project-details">
                    <h3>Cine Booking</h3>
                    <p className="project-description">
                        Developed a full-stack web application with Firebase serving a REST API with React as the frontend                    <br></br>

                        <br></br>

                        • Imitated a movie booking website with full functionality (search, seat selection, booking confirmations, etc)                    <br></br>

                        <br></br>

                        • Utilized Firebase to implement user authentication as well as email verification and promos                                     <br></br>

                           </p>
                </div>
            </div>
            {/* Add more project items as needed */}
        </section>
    );
};

export default Projects;
