import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './About.css';
import profilePic from './imgs/img1.png'
import profilePic2 from './imgs/img2.png'



const About = () => {
    return (
        <div className="about-me">
            <div className="header">
                <h2>
                    <TypeAnimation
                        sequence={["Hi, I'm Michael!", 1000]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                        style={{ color: "#52796F" }}



                    />
                </h2>
            </div>
            <div className="content">
                <img className="profile-image" src={profilePic2} alt="picture of me" />

                <div className="text">

                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Michael, a senior studying computer science at The University of Georgia. I'm a aspiring software engineer with a love for full stack development. In my free time, I enjoy playing the guitar,  playing tennis, and exploring!",
                            1000, 
                            <br></br>,

                         
                        ]}
                        wrapper="span"
                        speed={75}
                    />



                    {/* <p>
                        Hi, I'm Michael. <br></br>
                        <br></br>
                        I'm a aspiring software engineer with a love for
                        full stack development. <br></br>
                        <br></br>
                        In my free time, I enjoy playing the guitar,
                        playing tennis, and traveling!
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default About;
