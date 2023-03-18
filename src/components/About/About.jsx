import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-center text-white text-2xl font-bold my-4 uppercase'>About Us</h1>
            <div id='about' className='my-4 p-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='border border-3 h-[200px]'>Image</div>
                <div className='border border-3 h-[200px]'>Image</div>
                <div className='border border-3 h-[200px]'>Image</div>
                <div className='border border-3 h-[200px]'>Image</div>
                <div className='border border-3 h-[200px]'>Image</div>
                <div className='border border-3 h-[200px]'>Image</div>
            </div>
        </div>

    );
};

export default About;