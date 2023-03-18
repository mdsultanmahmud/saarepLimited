import React from 'react';
import logo from '../../assets/logo.jpg'
const Navbar = () => {
    const menuList = <>
        <li><a href="#about">About</a></li>
        <li><a href="#whysaarep">Why SAAREP</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#">Partner</a></li>
        <li><a href="#contact">Contact</a></li>
    </>
    return (
        <div className="navbar bg-[#02173C] shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#02173C] rounded-box w-52">
                       {menuList}
                    </ul>
                </div>
                <a href='/'><img src={logo} className="w-[150px]" alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;