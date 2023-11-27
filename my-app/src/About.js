import React from 'react';
import Typist from 'react-typist';
import { TypeAnimation } from 'react-type-animation';

import './About.css';


const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="header">
                <h2>
                  
                    <TypeAnimation
                        sequence={[
                            
                            "Hi, I'm Michael!",
                            1000
        
                        ]}
                        wrapper="span"
                        speed={10}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}

                    />
                    


                </h2>
            </div>
            <div className="content">
                <img
                    src="/path/to/your/image.jpg" // Replace with the path to your image
                    alt="Your Name"
                    className="profile-image"
                />
                <p>
                    Hi, I'm Michael. I'm a passionate [Your Profession] with a love for
                    [Your Interests]. I enjoy [Something Interesting] and always strive to
                    [Your Goal].
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
