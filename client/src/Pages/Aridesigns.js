import React from 'react';
import './Aridesigns.css';
import Navbar from '../Components/Navbar';
// import zardosi1 from '../Assets/zardosi1.png';
// import zardosi2 from '../Assets/zardosi2.png';
import zardosi3 from '../Assets/zardosi3.jpg';
import bridal from '../Assets/blouse.jpg';
import salwar from '../Assets/salwar.jpeg'
import emproidryblouse from '../Assets/emp1.jpg';


function Cards() {
  return (
    <div className='aari'>
      <Navbar />
      <div className='Aridesign-heding'>
        <h1>Rare Fairy<span> Products</span></h1>
        <p>Rare Fairy is a clothes store in Vavuniya,  that offers a wide range of designs.
Customers can work directly with our embroidery staff to design their bridal goods, whether it's Aari embroidery, zardozi embroidery, Lehenga or Readymade designer blouses, till it's the ideal fit. Personalized work is handled by our team, which ensures that it is completed on time for delivery.
We pride ourselves on providing high-quality, low-cost products to our customers.Rare Fairy is a reputable and fashionable women's clothing store that offers high-quality items at reasonable prices, as well as the most up-to-date and appealing designs.</p>
        </div>
      <div className="card">
        <div className="image1">
          <img src={emproidryblouse} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1>  Embroidery Design Blouses</h1>
        </div>
        <div className="des">
          {/* <p>You can add description here...</p> */}
          <a href='/Login'><button>Click here</button></a>
        </div>
      </div>

      <div className="card">
        <div className="image1">
          <img src={emproidryblouse} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1>  Salwar designs</h1>
        </div>
        <div className="des">
          {/* <p>You can add description here...</p> */}
          <a href='/Login'><button>Click here</button></a>
        </div>
      </div>

      <div className="card">
        <div className="image1">
          <img src={emproidryblouse} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1>  Bridal Design Blouses</h1>
        </div>
        <div className="des">
          {/* <p>You can add description here...</p> */}
          <a href='/Login'><button>Click here</button></a>
        </div>
      </div>

      <div className="card">
        <div className="image1">
          <img src={bridal} alt="Card Image" />
        </div>
        <div className="card-title">
          <h1> Simple blouse designes</h1>
        </div>
        <div className="des">

        <a href='/Login'><button>Click here</button></a>
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

        <a href='/Login'><button>Click here</button></a>
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

        <a href='/Login'><button>Click here</button></a>
        </div>
      </div>


     

    </div>
  );
}

export default Cards;
