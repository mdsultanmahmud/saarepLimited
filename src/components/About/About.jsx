import React from 'react';

const About = () => {
    return (
        <div id='about' className='my-4 p-4'>
            <h1 className='font-bold text-4xl my-4 text-center'>About us</h1>
            <div className='mb-4'>
                <h1 className='font-bold uppercase text-white text-4xl mb-3'>Mission.</h1>
                <p className='md:text-justify'>SAAREP’s mission is to empower South Asian Community through establishing an environment where everyone can grow and voice their opinion for an informed home ownership.</p>
            </div>
            <div className='mb-4'>
                <h1 className='font-bold uppercase text-white text-4xl mb-3'>Vision.</h1>
                <p className='md:text-justify'>A platform for the South Asian Real Estate community where seasoned and prospective South Asian RE Professionals affiliation will be instrumental for their growth.</p>
            </div>
        </div>
    );
};

export default About;