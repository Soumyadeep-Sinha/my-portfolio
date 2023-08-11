import React from 'react';
import Typewriter from "typewriter-effect";
import logo from '../image/myavatar.png'
import github from '../image/github.png'
import instagram from '../image/instagram.png'
import linkedin from '../image/linkedin.svg'
// import twitter from '../image/twitter.png'
import cv from '../static/Resume-2.pdf'

const Welcome = () => {
    return (
        <div className='Welcome' id='welcomesection'>
            <div className='WelcomeLeft'>
                <h1>Hi, I am Soumyadeep</h1>
                <h2>I am a&nbsp;<Typewriter
                    options={{
                        strings: [
                            'Programmer .',
                            'Web Developer .',
                            'Tech Enthusiast .',
                            'Creative Thinker .',
                            'Gamer .'
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                /></h2>
                <h3>I am ready to learn something new :)</h3>
                <div className='profileLinks'>
                    <a href='https://github.com/Soumyadeep-Sinha'><img src={github} alt='instalink' /></a>
                    <a href='https://www.linkedin.com/in/soumyadeep-sinha-2a25b1234/'><img src={linkedin} alt='instalink' /></a>
                    <a href='https://www.instagram.com/deep0842/'><img src={instagram} alt='instalink' /></a>
                </div>
                <div className='cvbtn'>
                    <a href={cv} download>Download CV</a>
                </div>
            </div>
            <div className='WelcomeRight'>
                <img src={logo} alt='myphoto' />
                <div className='imageshadow'></div>
            </div>
        </div>
    );
}

export default Welcome;