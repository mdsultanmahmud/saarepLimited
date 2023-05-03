import React from 'react';
import caroselOne from '../../assets/carousel-1.jpg'
import caroselTwo from '../../assets/carousel-2.jpg'
import caroselThree from '../../assets/carousel-3.jpg'
import gala from '../../assets/gala.png'
import conf from '../../assets/conf.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselProvider.css'
const CarouselProvider = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={5000}>
            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={gala} className="h-full" />
                    <div className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>
                        <p>Jun 4</p>
                        <h2 className="card-title hidden lg:block md:block">SAAREP AWARD GALA - A Black Tie Event</h2>
                        <div className=" justify-start ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-2 py-2 px-4 rounded-full text-sm"><a href="https://www.eventbrite.com/e/saarep-award-gala-a-black-tie-event-tickets-618001738837" class="no-underline hover:underline">Register Here for Evening Session</a></button>
                        </div>
                    </span></div>
                </div>
            </div>

            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={conf} className="h-full" />
                    <div className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>
                        <p className=''>Jun 4</p>
                        <h2 className="card-title hidden lg:block md:block">2023 SAAREP Annual Conference - REAL ESTATE & BEYOND</h2>
                        <div className=" justify-start ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-2 py-2 px-4 rounded-full text-sm"><a href="https://www.eventbrite.com/e/2023-saarep-annual-conference-real-estate-beyond-tickets-617395515607" class="no-underline hover:underline">Register Here for Morning Session</a></button>
                        </div>
                    </span></div>
                </div>
            </div>
            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={caroselOne} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>SAAREP - A South Asian Professional's Networking Community that connects Professionals who directly or indirectly contribute to Real Estate Industry in DC, MD and VA</span></p>
                </div>
            </div>
            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={caroselTwo} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>Building Dreams, Strengthening Communities. <br /> Together with South Asian Professionals.</span></p>
                </div>
            </div>
            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={caroselThree} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>SAAREP's objective of Informed Home Ownership will only materialize when You are ready to contribute. Please click on 'Membership' tab to join. We are grateful to you.</span></p>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselProvider;