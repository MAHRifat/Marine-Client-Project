import React from 'react';

function Career_hover() {
    return (
        <>
            <table class="table table-bordered text-center career_table">
                <thead>
                    <tr>
                        <th colSpan={2}>Career</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table_hover'>
                        <td><a href="">Nautical Department</a></td>
                        <td><a href="">E.T.O</a></td>
                        
                    </tr>
                    <tr className='table_hover'>
                        <td><a href="">Engineering Department</a></td>
                        <td><a href="">Ratings</a></td>
                        
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Career_hover;