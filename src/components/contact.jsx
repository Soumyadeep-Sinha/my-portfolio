import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import github from '../image/github.png'
import instagram from '../image/instagram.png'
import linkedin from '../image/linkedin.svg'
import twitter from '../image/twitter.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fw3n1ph', 'template_miqiw1s', form.current, '_XfIV9Ct2J5ZVp7Ww')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                alert("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contactSection" id='contacts'>
            <div className="contactMe">
                <h3>Contact Me</h3>
                <p><span role='img' aria-label='email'>📧</span> deepsnewmail@gmail.com</p>
                <p><span role='img' aria-label='telephone'>☎️</span> +91 1234567890</p>
                <div className='profileLinks'>
                    <a href='https://github.com/Soumyadeep-Sinha'><img src={github} alt='instalink' /></a>
                    <a href='https://www.linkedin.com/in/soumyadeep-sinha-2a25b1234/'><img src={linkedin} alt='instalink' /></a>
                    <a href='https://twitter.com/PantherX84'><img src={twitter} alt='instalink' /></a>
                    <a href='https://www.instagram.com/deep0842/'><img src={instagram} alt='instalink' /></a>
                </div>
                <a href='mailto:deepsnewmail@gmail.com'><button className='helpBtn'>Need my help ?</button></a>
            </div>
            <div className="ContactForm">
                <form ref={form} onSubmit={sendEmail} className='contact'>
                    <h3>Get in touch</h3>
                    <input type="text" name="user_name" className='iputArea' placeholder='Enter your name' />
                    <input type="email" name="user_email" className='iputArea' placeholder='Enter your Email' />
                    <textarea name="message" className='textArea' rows={5} placeholder='Enter Message' />
                    <button type="submit" value="Send">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;