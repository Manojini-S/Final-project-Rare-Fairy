import React from 'react';
import './Footer.css'; 
// import Navbar from '../Components/Navbar';

function Footer() {
  return (
  <>
 
    <footer>
      <div className="footer-col">
        <h4>Ari designs</h4>
        <ul>
          <li><a href="#">Blouse designs</a></li>
          <li><a href="#">Legenha designs</a></li>
          <li><a href="#">Kurti designs</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Events</h4>
        <ul>
          <li><a href="#">Wedding</a></li>
          <li><a href="#">Birthday</a></li>
          <li><a href="#">Cerimony</a></li>
          <li><a href="#">Reseption</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="Products">Products</a></li>
          <li><a href="contactUs">contact us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="links">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;