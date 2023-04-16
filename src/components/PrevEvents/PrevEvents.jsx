import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import prevOne from '../../assets/preEvents/prev-event-1.jpg'
import prevTwo from '../../assets/preEvents/prev-event-2.jpg'
import prevThree from '../../assets/preEvents/prev-event-3.jpg'
import prevFour from '../../assets/preEvents/prev-event-4.jpg'
import prevFive from '../../assets/preEvents/prev-event-5.jpg'
import prevSix from '../../assets/preEvents/prev-event-6.jpg'
import prevSeven from '../../assets/preEvents/prev-event-7.jpg'
import prevEight from '../../assets/preEvents/prev-event-8.jpg'
import prevNine from '../../assets/preEvents/prev-event-9.jpg'
import prevTen from '../../assets/preEvents/prev-event-10.jpg'
import prevEle from '../../assets/preEvents/prev-event-11.jpg'
import prevTwel from '../../assets/preEvents/prev-event-12.jpg'
import prevThirt from '../../assets/preEvents/prev-event-13.jpg'
import prevForth from '../../assets/preEvents/prev-event-14.jpg'
import prevFifth from '../../assets/preEvents/prev-event-15.jpg'
import prevsixth from '../../assets/preEvents/prev-event-16.jpg'
import prevEith from '../../assets/preEvents/prev-event-18.jpg'
import prevNinth from '../../assets/preEvents/prev-event-19.jpg'
import prevTwenty from '../../assets/preEvents/prev-event-20.jpg'
import prevThenOne from '../../assets/preEvents/prev-event-21.jpg'

const PrevEvents = () => {
    const events = [
        {
            img: prevOne
        },
        {
            img: prevTwo
        },
        {
            img: prevThree
        },
        {
            img: prevFour
        },
        {
            img: prevFive
        },
        {
            img: prevSix
        },
        {
            img: prevSeven
        },
        {
            img: prevEight
        },
        {
            img: prevNine
        },
        {
            img: prevTen
        },
        {
            img: prevEle
        },
        {
            img: prevTwel
        },
        {
            img: prevThirt
        },
        {
            img: prevForth
        },
        {
            img: prevFifth
        },
        {
            img: prevsixth
        },
        {
            img: prevEith
        },
        {
            img: prevNinth
        },
        {
            img: prevTwenty
        },
        {
            img: prevThenOne
        },
    ]
    return (
        <PhotoProvider>
            <div className='grid grid-cols-4 gap-2'>
            {
                events.map((evt, index) => <PhotoView key={index} src={evt.img}>
                    <img className={`w-full h-full cursor-pointer ${index > 3 ? 'hidden': ''}`} src={evt.img} alt="" />
                </PhotoView>)
            }
            </div>
        </PhotoProvider>
    );
};

export default PrevEvents;