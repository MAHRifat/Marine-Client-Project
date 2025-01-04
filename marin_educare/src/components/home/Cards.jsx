import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
    return ( 
        <>
            <div className="">
                <div className="row">
                    <h1 className='ms'>Explore</h1>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card1">
                        <Link className='links link1' to={'/main_engine/blockchain-tutorial'}>
                        <div className="block1">
                            <h1>Main Engine</h1>
                            <button>View more</button>
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card2">
                        <Link className='links link2' to={'/auxiliary_machineries'}>
                        <div className="block2">
                            <h1>Auxiliary Machineries</h1>
                            <button>View more</button>
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card3">
                        <Link className='links link3' to={'/marine_electrical_and_electronics'}>
                        <div className="block3">
                            <h1>Marine Electrical and Electronics</h1>
                            <button>View more</button>
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card4">
                        <Link className='links link4' to={'/naval_architecture'}>
                        <div className="block4">
                            <h1>Naval Architecture</h1>
                            <button>View more</button>
                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card5">
                        <Link className='links link5' to={'/all_line_diagram'}>
                        <div className="block5">
                            <h1>All Line Diagram</h1>
                            <button>View more</button>

                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card6">
                        <Link className='links link6' to={'/maintenance_of_machineries'}>
                        <div className="block6">
                            <h1>Maintenance of Machineries</h1>
                            <button>View more</button>

                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card7">
                        <Link className='links link7' to={'/marine_encyclopaedia'}>
                            <div className="block7">
                                <h1>Marine Encyclopaedia </h1>
                                <button>View more</button>

                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card8">
                        <Link className='links link8' to={'/safely_practices_onboard'}>
                            <div className="block8">
                                <h1>Safety Practices Onboard</h1>
                                <button>View more</button>

                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-10 col-md-5 col-lg-3 cards card9">
                        <Link className='links link9' to={'/free_notes'}>
                            <div className="block9">
                                <h1>Free Notes</h1>
                                <button>View more</button>

                            </div>
                        </Link>
                    </div>
                    
                   
                    
                </div>
            </div>
        </>
     );
}

export default Cards;