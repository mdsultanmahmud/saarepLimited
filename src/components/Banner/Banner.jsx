import React from 'react';
import flag from '../../assets/flag.jpg'
import Carousel from '../Carousel/Carousel';
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center my-4 gap-8'>
            <div className='w-[200px]'>
                <img className='rounded mb-2' src={flag} alt="" />
                <img className='rounded mb-2' src={flag} alt="" />
                <img className='rounded mb-2' src={flag} alt="" />
                <img className='rounded mb-2' src={flag} alt="" />
            </div>
            <Carousel></Carousel>
            <div className='w-[250px]'>
                <h1 className='font-bold text-xl'>Here is our Events</h1>
                <p className='text-justify my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, accusantium, velit veniam nemo fuga officia odio iusto voluptas, ab voluptatum sequi laudantium commodi repellendus iste. Laboriosam obcaecati reprehenderit aspernatur laudantium possimus iusto rerum cumque, mollitia, corrupti, maxime dignissimos. Quas itaque dolorum vitae sint hic. Aliquam voluptates tempora iste? Cum, pariatur.</p>
                <a className='link text-green-500' href="">click me to show something</a>
            </div>
        </div>
    );
};

export default Banner; 