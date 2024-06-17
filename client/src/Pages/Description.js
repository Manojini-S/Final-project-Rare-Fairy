import React from 'react';
import './Description.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const Description = () => {
  const location = useLocation();
  const { title, price, image, Description } = location.state || {};

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
                  If you're looking for something unique, KP Boutique in Coimbatore has a wide range of collections to choose from, as well as courteous guidance. Aari embroidered blouses, Bridal blouses, Saree waist belts, Lehengas, and Readymade designer blouses are among our specialty and wholesale offerings. We have the most acceptable and exclusive stylish blouse designs on the market.

Our enthusiasm for precisely designed and personalized aari work blouses, bridal collections, and Zardosi has brought us the maximum happiness from our consumers. We are aware of our clients' needs and will make every effort to satisfy them. KP Boutique is a convenience store in Coimbatore that sells a wide selection of clothing brands. We have branded clothing and a variety of product styles for you to choose from.

If you have any queries regarding our products or want to check on their availability, please contact us.
                  </p>
                  <p>{Description}</p>
                  <h3>Price = {price}/=</h3>
                
                  <a href='/Booking'>
                    <button className="dash1" id="dash">Book Now</button>
                    {/* <button className="dash1" id="dash">Pay Now</button> */}

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






















// import React from 'react';
// import './Description.css';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { useLocation } from 'react-router-dom';

// const Description = () => {
//   const location = useLocation();
//   const { title, price, image } = location.state || {};

//   return (
//     <>
//       <Navbar />
//       <div className="body">
//         <div className="heading-des">
//           <h1>Image and <span>Description</span></h1>
//           <p>{title}</p>
//         </div>
//         <div className="container-des">
//           <section className="about2">
//             {image && (
//               <div className="about2-image">
//                 <img src={image.imageUrl || image} alt={title} />
//                 <div className="about-content2">
//                   <p>
//                     Tas tenetur necessitatibus perspiciatis quod ut soluta fugit eos est delectus autem. 
//                     Aliquam, at consequuntur quaerat commodi perspiciatis voluptatibus accusamus ex facilis assumenda. 
//                     Cupiditate, possimus quo. Laudantium, cum cupiditate. Expedita odit vitae ab dolor, incidunt labore 
//                     necessitatibus architecto quidem id sapiente est consequatur iste ipsa, fuga hic quaerat? In autem 
//                     incidunt, exercitationem sed officia numquam illo modi facere tempora debitis nisi delectus iusto 
//                     voluptates labore.
//                   </p>
//                   <p>{image.Description}</p>
//                   <h3>Price = {price}/=</h3>
                
//                   <a href='/Booking'>
//                     <button className="dash1" id="dash">Book Now</button>
//                     {/* <button className="dash1" id="dash">Pay Now</button> */}

//                   </a>
//                 </div>
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Description;








