import React, { useState } from 'react';
import lavina from '../../assets/Lavina Photo.jpg'
import tanvir from '../../assets/Tanvir Headshot.jpg'
import atul from '../../assets/atul gupta_photo.jpeg'
import Modal from '../Modal/Modal';
const About = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <h1 className='text-center text-black text-2xl font-bold my-4 uppercase'>About Us</h1>
            <div id='about' className='my-4 p-4 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded shadow-lg p-4 text-center'>
                    <img src={lavina} alt="" className='rounded-full mb-3 h-[220px] w-[220px] mx-auto' />
                    <div>
                        <h3 className='font-bold capitalize text-gray-500'>Lavina Samtani</h3>
                        <h4 className='font-bold capitalize text-gray-500'>Member Relations</h4>
                        <button onClick={() =>setName('Lavina Samtani')}  className='my-4'><label htmlFor="see-bio-modal" className="px-6 py-2 rounded text-white uppercase text-sm bg-gray-800 hover:bg-gray-900 font-bold cursor-pointer">view bio</label></button>
                    </div>
                </div>
                <div className='rounded shadow-lg p-4 text-center'>
                    <img src={tanvir} alt="" className='rounded-full mb-3 h-[220px] w-[220px] mx-auto' />
                    <div>
                        <h3 className='font-bold capitalize text-gray-500'>Tanvir Aziz</h3>
                        <h4 className='font-bold capitalize text-gray-500'>President</h4>
                        <button onClick={() =>setName('Tanvir Aziz')} className='my-4'><label htmlFor="see-bio-modal" className="px-6 py-2 rounded text-white uppercase text-sm bg-gray-800 hover:bg-gray-900 font-bold cursor-pointer">view bio</label></button>
                    </div>
                </div>
                <div className='rounded shadow-lg p-4 text-center'>
                    <img src={atul} alt="" className='rounded-full mb-3 h-[220px] w-[220px] mx-auto' />
                    <div>
                        <h3 className='font-bold capitalize text-gray-500'>Atul Gulta</h3>
                        <h4 className='font-bold capitalize text-gray-500'>Treasurer</h4>
                        <button onClick={() =>setName('Atul Gulta')} className='my-4'><label htmlFor="see-bio-modal" className="px-6 py-2 rounded text-white uppercase text-sm bg-gray-800 hover:bg-gray-900 font-bold cursor-pointer">view bio</label></button>
                    </div>

                </div>
            </div>
            {
                name.length>0 && <Modal names = {name}></Modal>
            }
           
        </div>

    );
};

export default About;