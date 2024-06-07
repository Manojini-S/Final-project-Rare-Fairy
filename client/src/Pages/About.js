import React from 'react';
import './About.css';
import Navbar from '../Components/Navbar';
import ari from '../Assets/about.png';
import Footer from '../Components/Footer';
// import emp from '../Assets/frame1.png';
import service1 from '../Assets/service1.jpg';
import service2 from '../Assets/service2.jpg';
import service3 from '../Assets/service3.jpg';
import service4 from '../Assets/service4.jpg';
function About() {
  return (
    <>
      <Navbar />
      <div className='about-back'>
      <div className="about-us">
        <div className="about">
          <img src={ari} className="pic" alt="Logo" />
          <div className="about-text">
            <h2> </h2>
            <h5>Best Customized Designer <span>Rare Fairy At Vavuniya</span></h5>
            
            <p>
            If you're looking for something unique, Rare Fairy in Vavuniya has a wide range of collections to choose from, as well as courteous guidance. Aari embroidered blouses, Bridal blouses, Saree waist belts, Lehengas, and Readymade designer blouses are among our specialty and wholesale offerings. We have the most acceptable and exclusive stylish blouse designs on the market.

Our enthusiasm for precisely designed and personalized aari work blouses, bridal collections, and Zardosi has brought us the maximum happiness from our consumers. We are aware of our clients' needs and will make every effort to satisfy them. KP Boutique is a convenience store in Coimbatore that sells a wide selection of clothing brands. We have branded clothing and a variety of product styles for you to choose from.

If you have any queries regarding our products or want to check on their availability, please contact us.


            </p>
          </div>
        </div>
      </div>
      <div className='about-heading'>
        <h1>Why Choose Rare Fairy<span> ?</span></h1>
        <p> We use our imagination to combine design, colour, and texture to create a look that is unique to you. We help you visualize your outfit by sketching it in minute detail while staying within your budget. After you've approved the design, we'll work with our production team to make sure we keep our commitments!Rare fairy in Vavuniya is a good choice for a number of reasons. We are a one-stop bridal shop that provides a wide range of bridal products, saving you time and money. Since we offer Aari embroidery blouses, bridal blouses, saree waist belts, Lehengas, and Designer sarees at our store, we are able to meet the needs of our customers in one place.
          If you're looking for a boutique to order aari embroidery blouses, zardosi blouses,  saree waist belt then Rare fairy is the perfect place to buy them.
          Rare Fairy offers you the most fashionable suits at a reasonable price, ensuring that our experience is simple and enjoyable in making the finest first impression!</p>

      </div>
      {/* <div className='about-column'>
        <div className='column-container'>
          <div className='Box1'>
            <h1>Simplified Measuring</h1>
            <p>Whether it's a lehenga, bridal blouses, or Zardosi, whether it's a luxury or a necessity,
              you'll always look better if it's created to measure. Make no concessions to yourself.
              We'd be pleased to take your measurements and create a custom fit that complements your style and body type.</p>
          </div>

          <div className='Box2'>
            <h1>Convenient Time</h1>
            <p>Customers may place orders, get measurements, and buy Rare fairy in Vavuniya at any time that is convenient for them. 
              You can examine outfits from a variety of designer labels to help you establish your personal style while maintaining a grand appearance.</p>
          </div>

          <div className='Box3'>
            <h1>Dedicated Designers</h1>
            <p>Rare Fairy in Vavuniya has the best designers. Our designers work with utmost dedication and provide the product, 
              making us a one-stop shop for all types of bridal collections from professional designers. With client satisfaction as a top concern, our designers work with utmost dedication and deliver the product.</p>
          </div>


          <div className='Box4'>
            <h1>Online Order</h1>
            <p>We facilitate online orders with all types of collections for your wedding and fashion apparel with high quality fabric and finest embroidery work with the widest selection of clothes for you to choose from according to your taste and style.</p>
          </div>

          <div className='Box5'>
            <h1>Customization</h1>
            <p>Your patterns, fabrics, and measurements are all set to make you feel comfortable and enjoy every bit of your big day when you get a custom-made dress. Your Aari work blouse or Bridal blouse dreams might come true at KP Boutique.</p>
          </div>

          <div className='Box6'>
            <h1>On Time Delivery</h1>
            <p>Our hardworking team works tirelessly to ensure that all purchases are tailored and delivered on time. Your designed things will always come on time thanks to the most efficient and communicative workforce here.</p>
          </div>



        </div>

      </div> */}
      <div class="container">

        <h1 class="heading">Rare <span>Fairy</span></h1>

        <div class="box-container">

          {/* <div class="box">
            <!-- <img src="image/icon-1.png" alt=""> -->
            <h3>Simplified Measuring</h3>
            <p>Whether it's a lehenga, bridal blouses, or Zardosi, whether it's a luxury or a necessity, you'll always look better if it's created to measure. Make no concessions to yourself. We'd be pleased to take your measurements and create a custom fit that complements your style and body type.</p>

          </div> */}

          <div class="box">
            {/* <!-- <img src="image/icon-2.png" alt=""> --> */}
            <h3>Online Order</h3>
            <p>We facilitate online orders with all types of collections for your wedding and fashion apparel with high quality fabric and finest embroidery work with the widest selection of clothes for you to choose from according to your taste and style.
            </p>

          </div>

          <div class="box">
            {/* <!-- <img src="image/icon-3.png" alt=""> --> */}
            <h3>Dedicated Designers</h3>
            <p>We facilitate online orders with all types of collections for your wedding and fashion apparel with high quality fabric and finest embroidery work with the widest selection of clothes for you to choose from according to your taste and style.</p>

          </div>

          {/* <div class="box">
            <!-- <img src="image/icon-4.png" alt=""> -->
            <h3>Customization</h3>
            <p>Your patterns, fabrics, and measurements are all set to make you feel comfortable and enjoy every bit of your big day when you get a custom-made dress. Your Aari work blouse or Bridal blouse dreams might come true at Rare Fairy.</p>

          </div> */}

          {/* <div class="box">
            <!-- <img src="image/icon-4.png" alt=""> -->
            <h3>Customization</h3>
            <p>Your patterns, fabrics, and measurements are all set to make you feel comfortable and enjoy every bit of your big day when you get a custom-made dress. Your Aari work blouse or Bridal blouse dreams might come true at Rare Fairy.</p>

          </div> */}


          <div class="box">
            {/* <!-- <img src="image/icon-4.png" alt=""> --> */}
            <h3>On Time Delivery</h3>
            <p>Your patterns, fabrics, and measurements are all set to make you feel comfortable and enjoy every bit of your big day when you get a custom-made dress. Your Aari work blouse or Bridal blouse dreams might come true at rare fairy.</p>

          </div>

          {/* <div class="box">
        <!-- <img src="image/icon-4.png" alt=""> -->
        <h3>Customization</h3>
        <p>Your patterns, fabrics, and measurements are all set to make you feel comfortable and enjoy every bit of your big day when you get a custom-made dress. Your Aari work blouse or Bridal blouse dreams might come true at KP Boutique.</p>
      
    </div> */}

          {/* <div class="box">
        <img src="image/icon-5.png" alt="">
        <h3>On Time Delivery</h3>
        <p>Our hardworking team works tirelessly to ensure that all purchases are tailored and delivered on time. Your designed things will always come on time thanks to the most efficient and communicative workforce here.</p>
       
    </div> */}
          {/* 
    <div class="box">
        <!-- <img src="image/icon-6.png" alt=""> -->
        <h3>Online Order</h3>
        <p>We facilitate online orders with all types of collections for your wedding and fashion apparel with high quality fabric and finest embroidery work with the widest selection of clothes for you to choose from according to your taste and style.</p>
   
    </div> */}


        </div>

      </div>
      {/* <Footer/> */}

      <div>
      <div className="emp-head">OUR<span>SERVICESS</span></div>
      <div className="container-emp">
        <div className="card-emp">
          <img src={service2} alt="Embroidery Design " />
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p> */}
          {/* <a href="Description" className="button">View</a> */}
        </div>
        <div className="card-emp">
          <img src={service1} alt="Embroidery Design " />
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p> */}
          {/* <a href="Description" className="button">View</a> */}
        </div>
        <div className="card-emp">
          <img src={service4} alt="Embroidery-Design " />
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p> */}
          {/* <a href="Description" className="button">View</a> */}
        </div>
        <div className="card-emp">
          <img src={service3} alt="Embroidery-Design " />
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p> */}
          {/* <a href="Description" className="button">View</a> */}
        </div>
      </div>
    </div>
    </div>

    </>
  );
}

export default About;

