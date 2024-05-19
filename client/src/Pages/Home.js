import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
// import hero from '../Assets/hero.jpg';
import About from '../Pages/About';
import ari from '../Assets/image copy 4.png';
import home from '../Assets/logo.png'
import ContactUs from '../Pages/Contact';
import Aridesigns from '../Pages/Aridesigns';
// import La ding from '../Assets/Landing.jpg'

import Footer from '../Components/Footer';






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
      
      <Aridesigns />
      <ContactUs />
      {/* <Footer /> */}

    </>
  );
}

export default Home;
