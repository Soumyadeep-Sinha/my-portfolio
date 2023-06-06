import React from 'react';
import profile from '../image/profile.jpg'
const About = () => {
    return (
        <div className="Aboutsection">
            <h2>About Me</h2>
            <div className="abouts">
                <img src={profile} alt='profilepic' />
                <p>Thank you for visiting my website. I am an engineering student pursuing B.Tech in Engineering Mathematics and Computing from Madhav Institute of Technology, Gwalior, India. I am currently living in Bhopal, India. I Like to build creative things and learn about new technologies. I am currently learning Full Stack Web Development on the MERN stack.I am open to work and internships.</p>
            </div>
        </div>
    );
}

export default About;