import React from 'react';
import './Navbar.css';
import Cal_hover from './Cal_hover';
import Ser_hover from './Ser_hover';
import Career_hover from './Career_hover';
import Cour_hover from './Cour_hover';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <img className='mx-3 nav_icon' src="/media/logo.png" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item mx-3">
                                <a className="nav-link nav_color" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link nav_color" href="#">Courses <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div class="dropdown-table"><Cour_hover/></div>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link nav_color" href="#">Career <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div class="dropdown-table career_dropdown"><Career_hover/></div>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link nav_color" href="#">Services <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div class="dropdown-table"><Ser_hover/></div>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link nav_color" href="#">Calculators <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <div class="dropdown-table"><Cal_hover/></div>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link nav_color" href="/about_us">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;