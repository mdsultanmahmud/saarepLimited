import React, { useState } from 'react';
import CompanyForm from '../CompanyForm/CompanyForm';
import IndividualForm from '../IndividualForm/IndividualForm';

const MemberShip = () => {
    const [isIndividual, setIsIndividual] = useState(true)
    console.log(isIndividual)
    return (
        <div id='membership' className='my-10 p-4 min-h-[500px] shadow-lg bg-gray-600'>
            <h1 className='text-center text-2xl uppercase my-4 font-bold text-white'>Membership</h1>
            <div className='my-8 grid grid-cols-2  w-3/4 mx-auto bg-black'>
                <h2 onClick={() => setIsIndividual(true)} className={`uppercase font-semibold  text-center cursor-pointer w-full p-4 text-white ${isIndividual ? "bg-red-300":""}`}>Individual</h2>
                <h2 onClick={() => setIsIndividual(false)} className={`uppercase font-semibold text-center  cursor-pointer w-full p-4 text-white ${!isIndividual ? "bg-red-300":""}`}>Company</h2>
            </div>
            <div>
                {
                    isIndividual ?
                        <IndividualForm></IndividualForm>
                        :
                        <CompanyForm></CompanyForm>
                }


            </div>
        </div>
    );
};

export default MemberShip;