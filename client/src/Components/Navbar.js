import React from 'react';

import './Navbar.css';
import Logo from '../Assets/logo3.png'




import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav>
// <div class="logo">
//     Rare Fairy

// </div>


//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/AboutUs">About Us</Link></li>
//                 <li><Link to="/AriDesigns">Products</Link></li>
//                 <li><Link to="/ContactUs">Contact Us</Link></li>


//                 <li><Link to="/login"><button>Login</button></Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;


const Nav = () => {
    return (
        <>
            <nav class="navbar">


                <div class="logo">
                    <img src={Logo} alt="Logo" />

                </div>



                <ul class="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/AriDesignscard">Products</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    {/* <li><Link to="/Login">Logout</Link></li> */}

                </ul>
            </nav>
        </>

    )
}

export default Nav;