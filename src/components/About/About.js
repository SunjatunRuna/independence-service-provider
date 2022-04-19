import React from 'react';
import img from './110-1104699_woman-clipart-images-png-cartoon-business-woman-transparent.png';

const About = () => {
    return (
        <div className='text-secondary w-25 shadow my-5 p-5 mx-auto rounded'>
            <img src={img} className='img-fluid w-50' alt="" />
            <p className='mt-4'>Assalamualaikum!! This is Sunjatun Ahmed <span className='text-info fw-bold'>Runa</span>.
            Wish to see me a full stack developer. Now I am preparing myself to reach my goal soon. </p>
        </div>
    );
};

export default About;