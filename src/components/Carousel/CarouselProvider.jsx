import React from 'react';
import caroselOne from '../../assets/carousel-1.jpg'
import caroselTwo from '../../assets/carousel-2.jpg'
import caroselThree from '../../assets/carousel-3.jpg'
import caroselFive from '../../assets/carousel-5.jpg'
import gala from '../../assets/gala.png'
import conf from '../../assets/conf.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselProvider.css'
import nightGala from '../../assets/nightGala.jpg'
const CarouselProvider = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={5000} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50}>
            {/* <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className="h-[194px] md:h-[250px] lg:h-[290px] mb-2 flex justify-center items-center  gap-2">
                    <img src={conf} className='h-4/5 flex-1' />
                    <div className='flex-1' >
                        <div className=" ">
                            <p className='text-center hidden md:block'>Jun 4</p>
                            <h2 className="card-title hidden md:block text-sm lg:text-lg">2023 SAAREP Annual Conference - REAL ESTATE & BEYOND</h2>
                            <div className="p-1">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-lg text-sm"><a href="https://www.eventbrite.com/e/2023-saarep-annual-conference-real-estate-beyond-tickets-617395515607" class="no-underline hover:underline">Register Here for Morning Session</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[194px] md:h-[250px] lg:h-[290px] flex  justify-center items-center gap-2">
                    <img src={gala} className='h-4/5 flex-1' />
                    <div className="flex-1">
                        <p className='text-center hidden md:block'>Jun 4</p>
                        <h2 className="card-title hidden md:block text-sm lg:text-lg">SAAREP AWARD GALA - A Black Tie Event</h2>
                        <div className="p-1">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-lg text-sm"><a href="https://www.eventbrite.com/e/saarep-award-gala-a-black-tie-event-tickets-618001738837" class="no-underline hover:underline">Register Here for Evening Session</a></button>
                        </div>

                    </div>

                </div>
            </div> */}
            {/* <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={caroselFive} className="h-full" />
                    <a className='text-white font-bold  bg-red-900 z-5 mb-2 py-2 px-4 rounded-lg opacity-1 absolute bottom-2 left-[43%]' href="https://www.eventbrite.com/e/saarep-award-gala-a-black-tie-event-tickets-618001738837 ">Register Here</a>
                </div>
            </div> */}
            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={nightGala} className="h-full" />
                    {/* <a className='text-white font-bold  bg-red-900 z-5 mb-2 py-2 px-4 rounded-lg opacity-1 absolute bottom-2 left-[43%]' href="https://www.eventbrite.com/e/saarep-award-gala-a-black-tie-event-tickets-618001738837 ">Register Here</a> */}
                </div>
            </div>
            <div className='h-[400px] md:h-[505px] lg:h-[600px]'>
                <div className='relative h-full'>
                    <img src={caroselOne} className="h-full" />
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-itmes-center'><span className='p-8'>SAAREP - A South Asian Professional's Networking Community that connects Professionals who directly or indirectly contribute to Real Estate Industry in DC, MD and VA</span></p>
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
                    <p className='font-bold uppercase text-xl md:text-2xl absolute top-0 left-0 bg-black opacity-80 text-white h-full w-full grid place-items-center'><span className='p-8'>SAAREP's objective of <span className='text-blue-600'>Informed Home Ownership</span> will only materialize when You are ready to contribute. Please click on 'Membership' tab to join. We are grateful to you.</span></p>
                </div>
            </div>
        </Carousel>
    );
};

export default CarouselProvider;