import React from 'react';

const IndividualForm = () => {
    return (
        <div>
            <form className='md:w-1/2 mx-auto' action="https://formsubmit.co/06fb2f72169a32f9d840779b856c4b56" method="POST">
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="first_name">First Name</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="first_name" id="first_name"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="last_name">Last Name</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="last_name" id="last_name"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="email">Your Email</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="email" name="email" id="email"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="phone">Your Phone</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="number" name="phone" id="phone"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="occupation">Your Occupation</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="occupation" id="occupation"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="com_name">Company Name</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="com_name" id="com_name"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="address">Address-1</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="address" id="address"/>
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="address2">Address-2</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="address2" id="address2"/>
                </div>

                <button type='submit' className='px-8 py-4 font-bold text-white bg-black hover:bg-red-300 hover:text-black mb-8 mt-3 mx-auto block hover:opacity-80 le'>JOIN</button>
            </form>
        </div>
    );
};

export default IndividualForm;