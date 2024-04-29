import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import hero from '../Assets/hero.jpg';
import About from '../Pages/About';
import ari from '../Assets/about.png';
import ContactUs from './Contact';
import Footer from '../Components/Footer';





function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title">
          {/* <h1>Ari </h1> */}
        </div>
        <div className="content">
          <div className="article">
            <h2>Hi Hello! Aari Embroidery Blouses  Expensive And Stylish , lehenga and bridel blouse On A Budget</h2>
            <p></p>
            <a href="Register" className="button">Register Now</a>
          </div>
          <div className="jaanu">
            <img src={hero} alt="my website" />
          </div>
        </div>
        <About/>
        <ContactUs/>
        {/* <Footer/> */}

</div>

    </>
  );
}

export default Home;
