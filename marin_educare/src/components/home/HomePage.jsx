import React from 'react';
import Hero from './Hero';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer.jsx';
import Cards from './Cards';
import Community from './Community.jsx';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Cards/>
            <Community/>
            <Footer/>
        </>
     );
}

export default HomePage;