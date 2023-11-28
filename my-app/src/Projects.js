import React from 'react';
import './Projects.css';
import proj1 from './imgs/proj1.png'
import proj2 from './imgs/proj2.png'
import proj3 from './imgs/proj3.png'
import proj4 from './imgs/proj4.png'




const Projects = (projects) => {
    return (
        <section id= "projects" className="projects-section ">
            <h2 class="underLine">Projects</h2>
            <div className="project-item">
                <img
                    src={proj1} // Replace with the path to your project image
                    alt="Project 1"
                    className="project-image"
                />
                <div className="project-details">
                    <h3>Cine Booking</h3>
                    <p className="project-description">
                        • Developed a full-stack web application with Firebase serving a REST API with React as the frontend                    <br></br>

                        <br></br>

                        • Imitated a movie booking website with full functionality (search, seat selection, booking confirmations, etc)                    <br></br>

                        <br></br>

                        • Utilized Firebase to implement user authentication as well as email verification and promos                                     <br></br>

                           </p>
                </div>
            </div>
            <div className="project-item">
                <img
                    src={proj2} 
                    alt="Project 2"
                    className="project-image"
                />
                <div className="project-details">
                    <h3>Grammar quest</h3>
                    <p className="project-description">
                         • Developed a web application that allowed for elementary schoolers to practice their grammar                  <br></br>

                        <br></br>

                        • Featured multiple map selections as well as specific music for each individual map(search, seat selection, booking confirmations, etc)                    <br></br>

                        <br></br>

                        • Utilized for a 3rd grade class as part of a mini game at my old middle school                                     <br></br>

                    </p>
                </div>
            </div>

            <div className="project-item">
                <img
                    src={proj3}
                    alt="Project 3"
                    className="project-image"
                />
                <div className="project-details">
                    <h3>Strive (UGA HACKATHON)</h3>
                    <p className="project-description">
                        • Incorporated HTML/CSS, Javascript to build an interactive 6-page website to connect students with people that
                            need jobs done                  <br></br>

                        <br></br>

                        • Equipped with a contact, sign up, client/contractor page as well as a dynamic background                    <br></br>

                        <br></br>

                        • Served as a project team leader and delegated tasks to a team of 5 in order to meet a 36-hour deadline                                     <br></br>

                    </p>
                </div>
            </div>


            <div className="project-item">
                <img
                    src={proj4}
                    alt="Project 4"
                    className="project-image"
                />
                <div className="project-details">
                    <h3>MacroBuddy</h3>
                    <p className="project-description">
                        •A website enabling users to easily track and log their daily macronutrient intake. 

                       <br></br>

                        <br></br>

                        • Designed a user-friendly interface for seamless macro tracking, ensuring accessibility for users of all experience levels.                   <br></br>

                        <br></br>

                        • Built with the MERN stack, utilizing MongoDB, Express.js, React.js, and Node.js for a scalable and efficient web application.                 <br></br>

                    </p>
                </div>
            </div>




            {/* Add more project items as needed */}
        </section>
    );
};

export default Projects;
