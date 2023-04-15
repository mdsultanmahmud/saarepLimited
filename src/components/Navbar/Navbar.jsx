import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.jpg'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
const Navbar = () => {
    const [showDrop, setShowDrop] = useState(false)
    const menuList = <>
        <li onClick={() => setShowDrop(false)}><a href="#about">About Us</a></li>
        <li onClick={() => setShowDrop(false)}><a href="#whysaarep">Why SAAREP</a></li>
        <li onClick={() => setShowDrop(false)}><a href="#membership">Membership</a></li>
        <li onClick={() => setShowDrop(false)}><a href="#partner">Partner</a></li>
        <li onClick={() => setShowDrop(false)}><a href="#contact">Contact</a></li>
    </>
    useEffect(() => {
        const handleIcon = () => {
            if (!event.target.className.baseVal) {
                setShowDrop(false)
            }
        }
        document.addEventListener("click", handleIcon)
        return () => {
            document.removeEventListener('click', handleIcon);
        };
    }, [!showDrop])
    return (
        <div className="navbar bg-[#FEF5E7] shadow-2xl fixed top-0 left-0 z-10 mt-[-2px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden fixed top-5 right-3">
                        {
                            !showDrop ?
                                <FaBars className='logo' onClick={() => setShowDrop(true)} size={24} />
                                :
                                <ImCross className='logo' onClick={() => setShowDrop(false)} size={24} />
                        }
                    </label>
                    <ul tabIndex={0} className={`menu menu-compact dropdown-content p-2 shadow bg-gray-600 text-white rounded-box mt-7 ${!showDrop && 'hidden'}`} style={{ width: "100vw" }}>
                        {menuList}
                    </ul>
                </div>
                <a href='/'>
                    <img src={logo} className="w-[80px] md:w-[150px]" alt="" />
                </a>
            </div>
            <div className='navbar-center mr-16 md:mr-32 lg:mr-16 mt-4'>
                <h1 className='text-[8px] md:text-sm'>South Asian Association of Real Estate Professionals</h1>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 menu-list">
                    {menuList}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;