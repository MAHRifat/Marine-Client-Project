import React from 'react';

function Cour_hover() {
    return (
        <>
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Anciliary Courses</th>
                        <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table_hover'>
                        <td><a href="">Elementary First Aid</a></td>
                        <td><a href="">Tanker Fire Fighting</a></td>
                    </tr>
                    <tr className='table_hover'>
                        <td><a href="">Seafarer with Designated Security Duties</a></td>
                        <td><a href="">Basic Training for Liquefied Gas Tanker Cargo Operation</a></td>
                    </tr>
                    <tr className='table_hover'>
                        <td><a href="">Security Awareness Training</a></td>
                        <td><a href="">Basic Training for Oil and Chemical Tanker Cargo Operation</a></td>
                    </tr>
                    <tr className='table_hover'>
                        <td><a href="">Fire Prevention & Fire Fighting</a></td>
                        <td><a href="">COC 3</a></td>
                    </tr>
                    <tr className='table_hover'>
                        <td><a href="">Personal Safety & Social Responsibilities</a></td>
                        <td><a href="">COC 2</a></td>
                    </tr>
                    <tr className='table_hover'>
                        <td><a href="">Personal Survival Techniques</a></td>
                        <td><a href="">COC 1</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Cour_hover;