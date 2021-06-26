import React from 'react';
import Navbar from '../../components/LandingPage/navbar/navbar';
import Head from '../../components/LandingPage/head/head';
import About from '../../components/LandingPage/about/about';
import Contactus from '../../components/LandingPage/contactus/contactus';
import Features from '../../components/LandingPage/features/features';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Head />
            <About />
            <Features />
            <Contactus />
        </div>
    )
}

export default Landing