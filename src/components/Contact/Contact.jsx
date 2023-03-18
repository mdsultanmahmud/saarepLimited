import React from 'react';

const Contact = () => {
    return (
        <div className='p-4 bg-[#010E25] my-8'>
            <h1 className='text-white uppercase'>Get  in touch</h1>
            <h2 className='text-center text-white text-2xl uppercase'>Contact.</h2>
            <form className='md:w-1/2 mx-auto'>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="name">Your Name</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-[#02173C] border-none outline-none' type="text" name="name" id="name" placeholder="What's Your Good Name" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="email">Your Email</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-[#02173C] border-none outline-none' type="email" name="email" id="email" placeholder="What's Your Email Address" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="text-area">Your Message</label>
                    <br />
                    <textarea className='text-white p-2 rounded w-full bg-[#02173C] border-none outline-none' name="text-area" id="text-area" cols="30" rows="10" placeholder='What You Want to Say?'></textarea>
                </div>
            </form>
        </div>
    );
};

export default Contact;