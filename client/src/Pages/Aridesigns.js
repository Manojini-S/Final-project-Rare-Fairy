import React from 'react';
import './Aridesigns.css';
import Navbar from '../Components/Navbar';
import ari from '../Assets/ari1.jpg';

function Cards() {
  return (
    <>
    <Navbar/>
    <div className="main">
      {/* Card 1 */}
      <div className="card">
        <div className="image">
          <img src={ari}alt="Card Image" />
        </div>
        <div className="title">
          <h1>Write title Here</h1>
        </div>
        <div className="des">
          <p>You can Add Description Here...</p>
          <button>View Profile</button>
        </div>
      </div>

     
      <div className="card">
        <div className="image">
          <img src={ari }alt="Card Image" />
        </div>
        <div className="title">
          <h1>Write title Here</h1>
        </div>
        <div className="des">
          <p>You can Add Description Here...</p>
          <button>View Profile</button>
        </div>
      </div>


      <div className="card">
        <div className="image">
          <img src={ari }alt="Card Image" />
        </div>
        <div className="title">
          <h1>Write title Here</h1>
        </div>
        <div className="des">
          <p>You can Add Description Here...</p>
          <button>View Profile</button>
        </div>
      </div>


      <div className="card">
        <div className="image">
          <img src={ari }alt="Card Image" />
        </div>
        <div className="title">
          <h1>Write title Here</h1>
        </div>
        <div className="des">
          <p>You can Add Description Here...</p>
          <button>View Profile</button>
        </div>
      </div>

      

    </div>
    </>
  );
}

export default Cards;
