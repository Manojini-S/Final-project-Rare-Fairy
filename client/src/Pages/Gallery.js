import React from 'react';
import './Gallery.css'; 
import emp from '../Assets/emp1.jpg';
import BridalImage from '../Assets/gallery.jpeg';


function ServiceCard({ imageUrl, title, description }) {
  return (
      <div className="gatogory">
          <img src={imageUrl} alt="gatogory" className="service-image"/>
          <div className="service-info">
              <h3 className="service-title" style={{fontSize:'20px'}}>{title}</h3>
              <p className="service-description">{description}</p>
              {/* <a href="#" className="service-link">Learn More</a> */}
          </div>
      </div>
  )
}

export default ServiceCard;

