// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import zardosi3 from '../Assets/zardosi3.jpg';
// import bridal from '../Assets/blouse.jpg';
// import salwar from '../Assets/salwar.jpeg';
// import emproidryblouse from '../Assets/emp1.jpg';
// import SalwarImage from '../Assets/salwar2.png';
// import bridalimage from '../Assets/bridal3.png';
// import salwar4 from '../Assets/salwar5.png';
// // import Navbar from '../Components/Navbar'; 
// import './designstype.css'




// const Card = ({ imageUrl, title, buttonLink, altText }) => {
//     return (
//         <div className="card1">
//             <img src={imageUrl} alt={altText} />
//             <h4>{title}</h4>
//             <div className="fake">
//                 <a href={buttonLink}><button>Click here</button></a>
//             </div>
//         </div>
//     );
// };

// export default Card;


import React from 'react';
import './designstype';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>

    <button><a href="/Emproidry" className="button">View </a></button>
      </div>
    </div>
  );
};

export default Card;

