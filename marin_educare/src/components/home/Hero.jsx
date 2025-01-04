import React from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Hero() {
    return (
        <>
            <div className='hero text-center'>
                <div className=" hero_bankground ">
                    <div className="search">
                <       h1>Hello, What Do You Want To Learn?</h1>
                        <input className='input' type="text" placeholder='developing.....' aria-label="Search"/>
                        <button type='button' className='search_btn'><i className="fa fa-search " aria-hidden="true"></i> Search</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;