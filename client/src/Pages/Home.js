import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
// import hero from '../Assets/hero.jpg';
import About from '../Pages/About';
import ContactUs from '../Pages/Contact';
import Footer from '../Components/Footer';
import Card from '../Pages/Aridesignscard'

function Home() {
  return (
    <>
    <Navbar/>
      <>
        <div className=" Home-container">
          <div className="title">
          </div>
          <div className="Home-content">
            <div className="article">
              <h2>Hi Hello! Welcome to Rare  Fairy Designs World </h2>
              {/* <img src={home} className="picture" alt="Logo" /> */}
              <p></p>
              <a href="Register" className="button">Register Now</a>
            </div>
          </div>
        </div>  
      </>
      <About />   
      <Card/>
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
