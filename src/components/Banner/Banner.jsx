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
        <div className='my-8 flex gap-5 flex-col lg:flex-row'>
            <div className='grid grid-cols-4 gap-1 lg:block  w-full lg:w-[200px]'>
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={af_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={bg_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={in_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={ml_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={np_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={pk_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={sk_flag} alt="" />
                <img className='rounded mb-2 h-[50px] md:h-[80px] w-full' src={vt_flag} alt="" />

            </div>
            <div>
                <CarouselProvider></CarouselProvider>
            </div>
            <div className='w-full lg:w-[200px]'>
                <h1 className='font-bold text-xl text-white mb-8'>Upcoming Events</h1>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                <div className='flex items-center gap-3 bg-[#02173C] p-3 mb-2 hover:opacity-70'>
                    <img src={event} className="w-[25px] h-[25px]" />
                    <p className=''>here is event name</p>
                </div>
                {/* <a className='link text-green-500' href="">click me to show something</a> */}
            </div>
        </div>
    );
};

export default Banner;