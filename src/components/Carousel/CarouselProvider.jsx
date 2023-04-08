import React from 'react';
import caroselOne from '../../assets/carousel-1.jpg'
import caroselTwo from '../../assets/carousel-2.jpg'
import caroselThree from '../../assets/carousel-3.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselProvider.css'
const CarouselProvider = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={5000}>
            <div className='h-[400px] md:h-[505px] lg:h-[605px]'>
                <div className='relative h-full'>
                    <img src={caroselOne} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>SAAREP - A South Asian Professional's Networking Community that connects Professionals who directly or indirectly contribute to Real Estate Industry in DC, MD and VA</span></p>
                </div>
            </div>
            <div className='h-[400px] md:h-[505px] lg:h-[605px]'>
                <div className='relative h-full'>
                    <img src={caroselTwo} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>Building Dreams, Strengthening Communities. <br /> Together with South Asian Professionals.</span></p>
                </div>
            </div>
            <div className='h-[400px] md:h-[505px] lg:h-[605px]'>
                <div className='relative h-full'>
                    <img src={caroselThree} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>SAAREP's objective of Informed Home Ownership will only materialize when You are ready to contribute. Please click on 'Membership' tab to join. We are grateful to you.</span></p>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselProvider;