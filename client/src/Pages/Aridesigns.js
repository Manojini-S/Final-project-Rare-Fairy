import React from 'react';
import './Aridesigns.css';
import Navbar from '../Components/Navbar';
// import zardosi1 from '../Assets/zardosi1.png';
// import zardosi2 from '../Assets/zardosi2.png';
import zardosi3 from '../Assets/zardosi3.jpg';
import bridal from '../Assets/blouse.jpg';
import emproidryblouse from '../Assets/emp1.jpg';


function Cards() {
  return (
    <div className='aari'>
      <Navbar />
      <div className='Aridesign-heding'>
        <h1>Rare Fairy<span> Products</span></h1></div>
      <div className="card">
        <div className="image1">
          <img src={emproidryblouse} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1>  Embroidery Design Blouses</h1>
        </div>
        <div className="des">
          {/* <p>You can add description here...</p> */}
          <button><a href='/Login'>click here</a></button>
        </div>
      </div>

      <div className="card">
        <div className="image1">
          <img src={bridal} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1> Bridal blouse designers</h1>
        </div>
        <div className="des">

          <button><a href='/'>click here</a></button>
        </div>
      </div>

      <div className="card">
        <div className="image1">
          <img src={emproidryblouse} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1> Zaridosi Work Blouse</h1>
        </div>
        <div className="des">

          <button className='Ari'><a href='/'>click here </a></button>
        </div>
      </div>






      <div className="card">
        <div className="image1">
          <img src={bridal} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1> Lehengas</h1>
        </div>
        <div className="des">

          <button><a href='/Login'>Click here</a></button>
        </div>
      </div>

    </div>
  );
}

export default Cards;
