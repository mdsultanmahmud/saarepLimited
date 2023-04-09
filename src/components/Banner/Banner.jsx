import React from 'react';
import bg_flag from '../../assets/bd.webp'
import in_flag from '../../assets/in.webp'
import pk_flag from '../../assets/pk.webp'
import sk_flag from '../../assets/lk.webp'
import ml_flag from '../../assets/mv.webp'
import np_flag from '../../assets/np.webp'
import vt_flag from '../../assets/bt.webp'
import af_flag from '../../assets/af.webp'
import event from '../../assets/events.png'
import CarouselProvider from '../Carousel/CarouselProvider';
import './Banner.css'
const Banner = () => {
    return (
        <div className='my-8 flex gap-5 flex-col lg:flex-row pt-20'>
            <div className='grid grid-cols-4 gap-1 lg:block  w-full lg:w-[200px] md:place-items-center'>
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={af_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={bg_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={in_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={ml_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={np_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={pk_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={sk_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[68px] w-full md:w-3/5 lg:mx-auto' src={vt_flag} alt="" />

            </div>
            <div>
                <CarouselProvider></CarouselProvider>
            </div>
            <div className='w-full lg:w-[200px]'>
                <div>
                    <h1 className='font-bold text-xl text-black mb-8'>Upcoming Events</h1>
                    <div className='flex items-center gap-3 bg-gray-600 p-3 mb-2'>
                        <img src={event} className="w-[25px] h-[25px]" />
                        <p className=''>here is event name</p>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-600 p-3 mb-2'>
                        <img src={event} className="w-[25px] h-[25px]" />
                        <p className=''>here is event name</p>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-600 p-3 mb-2'>
                        <img src={event} className="w-[25px] h-[25px]" />
                        <p className=''>here is event name</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-xl text-black my-6'>Previous Events</h1>
                    <div className='flex items-center gap-3 bg-gray-600 p-3 mb-2'>
                        <img src={event} className="w-[25px] h-[25px]" />
                        <p className=''>here is event name</p>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-600 p-3 mb-2'>
                        <img src={event} className="w-[25px] h-[25px]" />
                        <p className=''>here is event name</p>
                    </div>
                    <div className='flex items-center gap-3 bg-gray-600 p-3 mb-2'>
                        <img src={event} className="w-[25px] h-[25px]" />
                        <p className=''>here is event name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;