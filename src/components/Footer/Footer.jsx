import React from 'react';
import logo from '../../assets/logo.jpg'
const Footer = () => {
    return (
        <footer className="footer  grid grid-cols-1 md:grid-cols-3 p-10 md:px-20 bg-[#02173C] text-neutral-content">
            <div>
                <img className='w-1/4' src={logo} alt="" />
                <p className='text-white'>&copy; copyright@SAAREP</p>
            </div>
            <div>
                <span className="footer-title text-white text-xl">Quick Links</span>
                <div className='leading-6'>
                    <a href="#about">About</a> <br />
                    <a href="#whysaarep">Why SAAREP</a> <br />
                    <a href="#">Membership</a> <br />
                    <a href="#">Partner</a> <br />
                    <a href="#contact">Contact</a> <br />
                </div>
            </div>
            <div>
                <span className="footer-title text-white text-xl">Address</span>
                <div className='leading-6'>
                    <p><strong>Phone:</strong> 2023526142</p>
                    <p><strong>Email:</strong> Saarepus@gmail.com</p>
                    <p>1700 Rockville Pike <br />
                        Suite 275 <br />
                        Rockville MD 20852
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;