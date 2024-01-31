import React from 'react';
import Typewriter from "typewriter-effect";
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='NavLeft'>
                <h2><Typewriter
                    options={{
                        strings: [
                            'Soumyadeep Sinha',
                            'सौम्यदीप सिन्हा',
                            'সৌম্যদীপ সিনহা',
                            'スミヤディープ・シンハ',
                            'Сумьядип Синха',
                            '苏米亚迪普·辛哈',
                            'سومیادیپ سنہا',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 100,
                        pauseFor: 3000,
                    }}
                /></h2>
            </div>
            <div className='NavRight'>
                <a href='#welcomesection'>Home</a>
                <a href='#About'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#project'>Projects</a>
                <a href='#contacts'>Contact</a>
                <a href='https://github.com/Soumyadeep-Sinha' target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
        </div>
    );
}

export default Navbar;