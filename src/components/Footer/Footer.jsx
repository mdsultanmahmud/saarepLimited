import React from 'react';
import logo from '../../assets/logo.jpg'
const Footer = () => {
    return (
        <footer className="footer  p-10 md:px-20 bg-[#02173C] text-neutral-content">
            <div>
                <img className='w-1/4' src={logo} alt="" />
                <p className='text-white'>&copy; copyright@SAARE</p>
            </div>
            <div>
                <span className="footer-title text-white text-xl">Address</span>
                <div className='leading-6'>
                    <p className='text-white'><strong>Phone:</strong> 2023526142</p>
                    <p className='text-white'><strong>Email:</strong> Saarepus@gmail.com</p>
                    <p className='text-white'>1700 Rockville Pike <br />
                        Suite 275 <br />
                        Rockville MD 20852
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;