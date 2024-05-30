import React from 'react';
import './designs.css';
import Navbar from '../Components/Navbar';


function designs() {
    return (
        <>

            {/* <Navbar /> */}

            <div className='search'>
            <div class="search-container">
                <input type="text" placeholder="Search..." class="search-input" />
                {/* <button class="search-button">Search</button> */}
            </div>
            </div>

        </>
    )
}

export default designs;