import React from 'react';

const CompanyForm = () => {
    return (
        <div>
            <form className='md:w-1/2 mx-auto'>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="com_name">Company Name</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="com_name" id="com_name" placeholder="Enter Your Company Name" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="com_email">Company Email</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="email" name="com_email" id="com_email" placeholder="Email of Company" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="com_phone">Company Phone</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="number" name="com_phone" id="phone" placeholder="Phone of Company" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="industry">Industry of Company</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="industry" id="industry" placeholder="Type of the Company" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="responsible_per_name">Name (Responsible Person)</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="responsible_per_name" id="responsible_per_name" placeholder="Enter the Responsible Person Of Company" />
                </div>
                <div className='mb-2'>
                    <label className='text-white mb-2' htmlFor="com_address">Company Address</label>
                    <br />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none' type="text" name="com_address" id="com_address" placeholder="Line 1" />
                    <input className='text-white p-2 rounded w-full bg-black border-none outline-none mt-2' type="text" placeholder="Line 2" />
                </div>
                <button type='submit' className='px-8 py-4 font-bold text-white bg-black mb-8 mt-3 mx-auto block hover:opacity-80 le'>JOIN</button>
            </form>
        </div>
    );
};

export default CompanyForm;