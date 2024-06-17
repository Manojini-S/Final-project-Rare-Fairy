// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Logo from "../Assets/logo3.png";
// import { toast } from "react-toastify";

// const Nav = () => {
//   // State to track user login status
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Check for token in local storage when component mounts
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setLoggedIn(true);
//     }
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setLoggedIn(false);
//     toast.success("Logout successfully!");
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <ul className="nav-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/AboutUs">About Us</Link>
//           </li>
//           <li>
//             <Link to="/AriDesignscard">Products</Link>
//           </li>
//           <li>
//             <Link to="/ContactUs">Contact Us</Link>
//           </li>
//           {/* Conditionally render Logout link if user is logged in */}
//           {loggedIn ? (
//             <li>
//               <Link to="/login" onClick={handleLogout}>
//                 Logout
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/Login">Login</Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Nav;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Assets/logo3.png";
import { toast } from "react-toastify";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    toast.success("Logout successfully!");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/AriDesignscard">Products</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        {loggedIn ? (
          <li>
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <button className="btn-log" onClick={handleLogin}>
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
