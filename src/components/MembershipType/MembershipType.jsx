import React from 'react';
import PaypalCheckoutBtn from '../PaypalCheckoutBtn/PaypalCheckoutBtn';
const MembershipType = () => {
    return (
        <>
            <div className='flex flex-col w-full gap-2 bg-gray-600  items-center'>
                <div><h1 className='text-center text-2xl uppercase my-4 font-bold text-white'>Membership Features</h1></div>
                <div className='my-8 grid grid-cols-1 lg:grid-cols-2 gap-5 p-2'>
                    <div className='w-full flex flex-col items-center gap-1 bg-white rounded'><h1 className='uppercase font-bold  text-center bg-sky-500/100 w-full text-white p-4'> SAAREP INDIVIDUAL MEMBERSHIP</h1>
                        <div>
                            <div className='grid grid-cols-3 gap-2 text-center p-2'>
                                <p className='bg-red-300 p-1 font-bold rounded m-w-[65px]'>GOLD</p>
                                <p className='bg-red-300 p-1 font-bold rounded'>$500 Annual</p>
                                    <PaypalCheckoutBtn product={{
                                        name: "GOLD",
                                        price: 500
                                    }}></PaypalCheckoutBtn>
                            </div>
                            <div className='grid grid-cols-3 gap-2 text-center p-2'>
                                <p className='bg-red-300 p-1 font-bold rounded'>SILVER</p>
                                <p className='bg-red-300 p-1 font-bold rounded'>$350 Annual</p>
                                <PaypalCheckoutBtn product={{
                                    name: "SILVER",
                                    price: 350
                                }}></PaypalCheckoutBtn>
                            </div>
                            <div className='grid grid-cols-3 gap-2 text-center p-2'>
                                <p className='bg-red-300 p-1 font-bold rounded'>BRONZE</p>
                                <p className='bg-red-300 p-1 font-bold rounded'>$100 Annual</p>
                                <PaypalCheckoutBtn product={{
                                    name: "BRONZE",
                                    price: 100
                                }}></PaypalCheckoutBtn>
                            </div>
                        </div>
                        <div>
                            <table className='m-2 table-compact border-separate' >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Gold</th>
                                        <th>Silver</th>
                                        <th>Bronze</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr className='bg-red-100'>
                                        <td >Business referrals exclusive for members</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className='bg-blue-100'>
                                        <td>Exclusive priority invitation to events</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className='bg-red-100'>
                                        <td >Advertise company logo on SAAREP website</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className='bg-blue-100'>
                                        <td>Addition to SAAREP directory</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-red-100'>
                                        <td >SAAREP endorsement certificate</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-blue-100'>
                                        <td>Advertise on SAAREP website</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-red-100'>
                                        <td >Promote on social media quarterly</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-blue-100'>
                                        <td>Member exclusive pricing for events</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-red-100'>
                                        <td >Personal/Business blog post on quarterly basis</td>
                                        <td>yes</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-blue-100'>
                                        <td>Ability to introduce & speak at SAAREP events</td>
                                        <td>yes</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className='bg-red-100'>
                                        <td >Distribution of swags and marketing material</td>
                                        <td>yes</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* second card */}
                    <div className='w-full flex flex-col items-center gap-1 bg-white rounded'>
                        <h1 className='uppercase font-bold  text-center bg-green-700 w-full text-white p-4'> SAAREP COMPANY MEMBERSHIP</h1>
                        <div className='flex flex-col justify-around gap-1'>
                            <div className='grid grid-cols-3 gap-2 text-center p-2'>
                                <p className='bg-red-300 p-1 font-bold rounded'>Annual Membership</p>
                                <p className='bg-red-300 p-1 font-bold rounded'>$2,999 Annual</p>
                                <PaypalCheckoutBtn product={{
                                    name: "Annual Membership",
                                    price: 2999
                                }}></PaypalCheckoutBtn>
                            </div>
                            <div className='grid grid-cols-3 gap-2 text-center p-2'>
                                <p className='bg-red-300 p-1 font-bold rounded'>Event Partnership</p>
                                <p className='bg-red-300 p-1 font-bold rounded'>$499 Annual</p>
                                <PaypalCheckoutBtn product={{
                                    name: "Event Partnership",
                                    price: 499
                                }}></PaypalCheckoutBtn>
                            </div>

                        </div>
                        <div>

                            <table className='m-2 table-compact border-separate'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Annual <br></br> Membership </th>
                                        <th>Event <br></br> Partnership</th>

                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr className=' bg-red-100'>
                                        <td >Access to database of participants of specific event</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className=' bg-blue-100'>
                                        <td >Access to SAAREP roster</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className=' bg-red-100'>
                                        <td >3 Bronze Individual Membership [values at $300]</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className=' bg-blue-100'>
                                        <td >Free access to all events for 1 designated individual
                                            [approx. $249 waived]</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className=' bg-red-100'>
                                        <td >Listed on SAAREP Website as ‘Preferred Partner’ for a
                                            year</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className=' bg-blue-100'>
                                        <td >Speaking at SAAREP’s all/specific events</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className=' bg-red-100'>
                                        <td >Distribution of swags and marketing materials</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className=' bg-blue-100'>
                                        <td >Promoting on the Welcome banner at the event</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                    <tr className=' bg-red-100'>
                                        <td >Video Promotion on SAAREP social page twice a year</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className=' bg-blue-100'>
                                        <td >Email marketing to SAAREP CRM twice a year</td>
                                        <td>yes</td>
                                        <td>-</td>
                                    </tr>
                                    <tr className=' bg-red-100'>
                                        <td >Quarterly evaluation on sponsorship</td>
                                        <td>yes</td>
                                        <td>yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            {/* <button>
                pay with paypal
                <PaypalCheckoutBtn product={product}></PaypalCheckoutBtn>
            </button> */}
        </>
    );
};


export default MembershipType;