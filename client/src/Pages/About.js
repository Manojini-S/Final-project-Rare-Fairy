import React from 'react';
import './About.css';
import Navbar from '../Components/Navbar';
import ari from '../Assets/about.png';
// import Footer from '../Components/Footer';
function About() {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <div className="about">
          <img src={ari} className="pic" alt="Logo" />
          <div className="text">
            <h2><span></span> </h2>
            <h5>About Us</h5>
            <p>
              We KP Boutique in Coimbatore hope you will be delighted with our trending patterns and variations, whether you are a first-time visitor or a customer. Whether it's an Aari embroidery blouse or a Bridal blouse, Zardosi work, a Lehenga, a Designer saree, or readymade designer blouses, RF Ari creations has a variety of patterns and options to suit any woman's own sense of style.
              our Ari Creations makes every effort to make you appear your best. We strive to make every purchase a pleasant one. Excellent customer service, speedy order processing, and a no-hassle return policy are among our main goals.We offer a large range and variety of Aari embroidery , so take a look at our extensive range of collections and where we focus on product design, delivery, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;

