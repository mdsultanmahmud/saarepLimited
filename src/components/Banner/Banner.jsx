import React from 'react';
import bg_flag from '../../assets/bd.webp'
import in_flag from '../../assets/in.webp'
import pk_flag from '../../assets/pk.webp'
import sk_flag from '../../assets/lk.webp'
import ml_flag from '../../assets/mv.webp'
import np_flag from '../../assets/np.webp'
import vt_flag from '../../assets/bt.webp'
import af_flag from '../../assets/af.webp'
import Carousel from '../Carousel/Carousel';
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center my-4 gap-8 p-2'>
            <div className='w-full lg:w-[180px] grid grid-cols-2 md:grid-cols-3 gap-3 lg:block'>
                <img className='rounded mb-2 h-[90px] w-full' src={bg_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={in_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={pk_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={sk_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={ml_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={np_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={vt_flag} alt="" />
                <img className='rounded mb-2 h-[90px] w-full' src={af_flag} alt="" />
            </div>
            <div className='flex-1'>
                <Carousel></Carousel>
            </div>

            <div className='w-full lg:w-[200px]'>
                <h1 className='font-bold text-xl'>Here is our Events</h1>
                <p className='my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, accusantium, velit veniam nemo fuga officia odio iusto voluptas, ab voluptatum sequi laudantium commodi repellendus iste. Laboriosam obcaecati reprehenderit aspernatur laudantium possimus iusto rerum cumque, mollitia, corrupti, maxime dignissimos. Quas itaque dolorum vitae sint hic. Aliquam voluptates tempora iste? Cum, pariatur.</p>
                <a className='link text-green-500' href="">click me to show something</a>
            </div>
        </div>
    );
};

export default Banner; 