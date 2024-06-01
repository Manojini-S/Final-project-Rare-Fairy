import React from 'react';
import './Description.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const Description = () => {
  const location = useLocation();
  const { title, price, image } = location.state || {};

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="heading-des">
          <h1>Image and <span>Description</span></h1>
          <p>{title}</p>
        </div>
        <div className="container-des">
          <section className="about2">
            {image && (
              <div className="about2-image">
                <img src={image.imageUrl || image} alt={title} />
                <div className="about-content2">
                  <p>
                    Tas tenetur necessitatibus perspiciatis quod ut soluta fugit eos est delectus autem. 
                    Aliquam, at consequuntur quaerat commodi perspiciatis voluptatibus accusamus ex facilis assumenda. 
                    Cupiditate, possimus quo. Laudantium, cum cupiditate. Expedita odit vitae ab dolor, incidunt labore 
                    necessitatibus architecto quidem id sapiente est consequatur iste ipsa, fuga hic quaerat? In autem 
                    incidunt, exercitationem sed officia numquam illo modi facere tempora debitis nisi delectus iusto 
                    voluptates labore.
                  </p>
                  <p>{image.Description}</p>
                  <h3>Price = {price}/=</h3>
                  {/* <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div> */}
                  <a href='/Booking'>
                    <button className="dash1" id="dash">Book Now</button>
                  </a>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Description;
