// Emproidry.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Emproidry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, cardImage } = location.state || {};

  const handleClick = () => {
    navigate("/Description", { state: { title, cardImage } });
  };

  return (
    <>
      <Navbar />
      <div className="emp-head">{title}<span> </span></div>
      <div className="container-emp">
        {cardImage && cardImage.map((image, index) => (
          <div key={index} className="card-emp">
            <h2>{title}</h2>
            <img src={image.imageUrl || image} alt={title} />
            <p>{image.Description}</p>
            <a className="button" onClick={handleClick}>View</a>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Emproidry;
