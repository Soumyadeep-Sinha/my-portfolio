import React from 'react';
import certificate1 from '../image/certificate1.png';
import certificate3 from '../image/certificate3.png';
import certificate4 from '../image/certificate4.png';
import certificate6 from '../image/certificate6.png';

const Languages = () => {
    return (
        <div className='skillSection'>
            <h2>Some of my skills and certifications</h2>
            <div className="skill_cerif">
                <div className='skillPanel'>
                    <div className='skillSet'>
                        <p className='skillTitle'>Problem Solving using JAVA</p>
                        
                    </div>

                    <div className='skillSet'>
                        <p>Javascript / Web Development</p>
                    </div>

                    <div className='skillSet'>
                        <p>DBMS / MySQL / MongoDB / mongoose</p>
                    </div>

                </div>

                <div className="certification">
                    <h3>Some Certifications</h3>
                    <div className='certi-images'>
                        <img src={certificate1} alt='certificate' />
                        <img src={certificate3} alt='certificate' />
                        <img src={certificate4} alt='certificate' />
                        <img src={certificate6} alt='certificate' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Languages