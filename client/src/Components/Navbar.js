import React from 'react';
// import './Components/navbar.css'; 
import './Navbar.css';
// import Logo from '../Assets/logo.png'



 
     
 

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <p>Rare Fairy</p>
                {/* <img src={Logo} alt="" /> */}
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
                <li><Link to="/AriDesigns">Products</Link></li>
                <li><Link to="/AriDesigns">Gallery</Link></li>
                <li><Link to="/Login"><button>Login</button></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
