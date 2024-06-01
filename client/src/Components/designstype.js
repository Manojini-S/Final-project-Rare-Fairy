import React, { useState, useEffect } from 'react';
import './designstype.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, content, imageUrl }) => {
  const [cardImage, setCardImage] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCardImage = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/image/showimage/${title}`);
        setCardImage(response.data);
      } catch (error) {
        console.error('Error fetching card images:', error);
      }
    };

    fetchCardImage();
  }, [title]);

  const handleClick = () => {
    navigate("/Emproidry", { state: { title, cardImage } });
  };

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <button onClick={handleClick}>View Designs</button>
      </div>
    </div>
  );
};

export default Card;
