import React from 'react';
import caroselOne from '../../assets/carousel-1.jpg'
import caroselTwo from '../../assets/carousel-2.jpg'
import caroselThree from '../../assets/carousel-3.jpg'
import caroselFour from '../../assets/carousel-4.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselProvider.css'
const CarouselProvider = () => {
    return (
        <Carousel autoPlay infiniteLoop>
                <div className='h-[400px] md:h-[505px]'>
                    <img src={caroselOne} className="h-full"/>
                    <p className='mt-2 font-bold uppercase text-2xl legend legend'>Building Dreams, Strengthening Communities.</p>
                </div>
                <div className='h-[400px] md:h-[505px]'>
                    <img src={caroselTwo} className="h-full"/>
                    <p className='mt-2 font-bold uppercase text-2xl legend'>Together with South Asian Professionals.</p>
                </div>
                <div className='h-[400px] md:h-[505px]'>
                    <img src={caroselThree} className="h-full"/>
                    <p className='mt-2 font-bold uppercase text-2xl legend'>Together with South Asian Professionals.</p>
                </div>
            </Carousel>
    );
};

export default CarouselProvider;