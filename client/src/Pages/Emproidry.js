// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const Emproidry = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { title, cardImage } = location.state || {};

//   const handleClick = (image) => {
//     navigate("/Description", { state: { title, price: "5000", image } });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="emp-head">{title}<span> </span></div>
//       <div className="container-emp">
//         {cardImage && cardImage.map((image, index) => (
//           <div key={index} className="card-emp">
//             <h2>{title}</h2>
//             <img src={image.imageUrl || image} alt={title} />
//             <p>{image.Description}</p>
//             <button className="button" onClick={() => handleClick(image)}>View</button>
//           </div>
//         ))}
//       </div>
//       {/* <div className="container-emp">
//         {cardImage && cardImage.map((image, index) => (
//           <div key={index} className="card-emp">
//             <h2>{title}</h2>
//             <img src={image.imageUrl || image} alt={title} />
//             <p>{image.Description}</p>
//             <button className="button" onClick={() => handleClick(image)}>View</button>
//           </div>
//         ))}
//       </div> */}
//       <Footer />
//     </>
//   );
// };

// export default Emproidry;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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

