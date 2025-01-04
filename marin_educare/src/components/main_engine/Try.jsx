import React from 'react';
import './Try.css';
function Try() {
    return (
        <>
            <h1>Engine Basics</h1>

            <section>
                <h2>ENGINE:</h2>
                <p className='para'>An engine is Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Architecto tempore officiis temporibus blanditiis odio veniam error rem 
                    fugiat culpa alias, molestias adipisci vitae voluptatum laborum cupiditate 
                    aut doloribus, quasi odit. Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Exercitationem assumenda totam vitae doloremque iusto illo consequuntur.
                     Perspiciatis, repellendus? Amet similique 
                    aspernatur repudiandae necessitatibus sint autem, earum animi incidunt inventore 
                    ipsam? a machine designed to convert one form of energy into mechanical energy. 
                    It uses fuel or another energy source to produce motion or power that can perform
                     tasks such as propulsion, driving machinery, or generating electricity.
                     </p>
            </section>


            <section>
                <h2>DIESEL ENGINE:</h2>
                <p>The diesel engine, named after Rudolf Diesel, is an internal combustion engine in which ignition of the fuel is caused by the elevated temperature of the air in the cylinder due to the mechanical compression; thus, the diesel engine is a so-called compression-ignition engine.</p>
            </section>

            <section>
                <h2>ENGINE CLASSIFICATIONS:</h2>
                <ol>
                    <li>
                        <strong>Based on Source of Energy:</strong>
                        <ul>
                            <li>Heat Engines: Use thermal energy to produce mechanical work.</li>
                            <li>Internal Combustion (IC) Engines: Combustion occurs inside the engine cylinder.</li>
                            <li>External Combustion (EC) Engines: Combustion occurs outside the engine (e.g., steam engines).</li>
                            <li>Non-Heat Engines: Operate using other forms of energy.</li>
                            <li>Electric Motors: Use electrical energy.</li>
                            <li>Hydraulic Engines: Use fluid pressure.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Based on Combustion Location:</strong>
                        <ul>
                            <li>Internal Combustion Engine (IC Engine): Includes Diesel Engine, Petrol Engine, Gas Engine, Dual-Fuel Engine.</li>
                            <li>External Combustion Engine (EC Engine): Includes Steam Engine, Steam Turbine, Stirling Engine.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Based on Ignition Method:</strong>
                        <ul>
                            <li>Spark-Ignition (SI) Engine: Ignition via spark plug.</li>
                            <li>Compression-Ignition (CI) Engine: Fuel ignited by air compression.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Based on Number of Strokes:</strong>
                        <ul>
                            <li>Two-Stroke Engine: Power cycle completed in two strokes.</li>
                            <li>Four-Stroke Engine: Power cycle completed in four strokes.</li>
                            <li>Six-Stroke Engine: Experimental engine with additional strokes.</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2>THEORETICAL MARINE ENGINE CYCLES</h2>
                <article>
                    <h3>1.1. Marine Engine Cycles</h3>
                    <p>Internal combustion engines work on three thermodynamic cycles:</p>
                    <ul>
                        <li><strong>Otto Cycle:</strong> Used in spark-ignition engines.</li>
                        <li><strong>Diesel Cycle:</strong> Used in compression-ignition engines.</li>
                        <li><strong>Dual Combustion Cycle:</strong> Combines Otto and Diesel cycles.</li>
                    </ul>
                </article>
            </section>

            <section>
                <h2>MARINE ENGINE (2S & 4S)</h2>
                <h3>2.1. Basic Terms Related to Marine Engine Strokes</h3>
                <p>Details about engine strokes and related mechanisms.</p>
                <h3>2.2. 2S & 4S Engine Working Principle & Valve Timing Diagram</h3>
                <p>Description of two-stroke and four-stroke engine operations with timing diagrams.</p>
            </section>


        </>
    );
}

export default Try;