import React from 'react';

const Partner = () => {
    return (
        <div id='partner' className='my-12'>
            <h1 className='text-center font-bold my-4 text-2xl text-black'>Our Partner</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5'>
                <div className='border h-[220px] w-[220px] rounded-full flex justify-center items-center'>Partner-1</div>
                <div className='border h-[220px] w-[220px] rounded-full flex justify-center items-center'>Partner-2</div>
                <div className='border h-[220px] w-[220px] rounded-full flex justify-center items-center'>Partner-3</div>
                <div className='border h-[220px] w-[220px] rounded-full flex justify-center items-center'>partner-4</div>
            </div>
        </div>
    );
};

export default Partner;