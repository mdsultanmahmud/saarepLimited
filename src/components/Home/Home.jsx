import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MemberShip from '../MemberShip/MemberShip';
import Navbar from '../Navbar/Navbar';
import Partner from '../Partner/Partner';
import WhySaarep from '../WhySaarep/WhySaarep';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <WhySaarep></WhySaarep>
            <MemberShip></MemberShip>
            <Partner></Partner>
            <Contact></Contact>
        </div>
    );
};

export default Home;