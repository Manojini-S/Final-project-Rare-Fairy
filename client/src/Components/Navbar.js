import React from 'react';
// import './Components/navbar.css'; 
import './Navbar.css';
// import Logo from '../Assets/logo.png'



const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <p>Rare Fairy</p>
                {/* <img src={Logo} alt="" /> */}
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="/Contact Us">Contact Us</a></li>
                <li><a href="/Ari Designs">Ari designs</a></li>
                <li><button><a href="/Login">Login</a></button></li>
            </ul>
        </nav>
    );
}

export default Navbar;

