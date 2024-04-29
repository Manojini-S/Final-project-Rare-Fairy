import React from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

function ContactUs() {
  return (
    <>
    <Navbar/>
    <div className="contact-us">
      <div></div>
      <h1>Contact Us</h1>
      <form>
       
        {/* <h1>Contact Us</h1><br></br> */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Submit</button>
      </form>
     
    </div>
    <Footer/>
    </>

  );
}

export default ContactUs;


