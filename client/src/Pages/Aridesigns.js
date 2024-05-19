// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Aridesigns.css';
import Navbar from '../Components/Navbar';
// import zardosi1 from '../Assets/zardosi1.png';
// import zardosi2 from '../Assets/zardosi2.png';
import zardosi3 from '../Assets/zardosi3.jpg';
import bridal from '../Assets/blouse.jpg';
import salwar from '../Assets/salwar.jpeg'
import emproidryblouse from '../Assets/emp1.jpg';
import axios from 'axios';
import SalwarImage from '../Assets/salwar2.png';
import bridalimage from '../Assets/bridal3.png';
import salwar4 from '../Assets/salwar5.png';
import Footer from '../Components/Footer';
// import leh from '..Assets/leh.png'




// function Cards() {
  // const Products = () => {
  //   const [products, setProducts] = useState([]);
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     // Fetch products from API
  //     axios.get('/api/products')
  //       .then(response => {
  //         setProducts(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching products:', error);
  //       });
  //   }, []);

  //   const nextProduct = () => {
  //     setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  //   };

  //   const previousProduct = () => {
  //     setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  //   };


//   return (
//     <div className='aari'>
//       <Navbar />
//       <div className='Aridesign-heding'>
//         <h1>Rare Fairy<span> Products</span></h1>
//         <p>Rare Fairy is a clothes store in Vavuniya,  that offers a wide range of designs.
//           Customers can work directly with our embroidery staff to design their bridal goods, whether it's Aari embroidery, zardozi embroidery, Lehenga or Readymade designer blouses, till it's the ideal fit. Personalized work is handled by our team, which ensures that it is completed on time for delivery.
//           We pride ourselves on providing high-quality, low-cost products to our customers.Rare Fairy is a reputable and fashionable women's clothing store that offers high-quality items at reasonable prices, as well as the most up-to-date and appealing designs.</p>
//       </div>
//       <div className="card">
//         <div className="image1">
//           <img src={emproidryblouse} alt="Card Image" />
//         </div>
//         <div className="card-title">
//           <h1>  Embroidery Design Blouses</h1>
//         </div>
//         <div className="des">
//           <p>You can add description here...</p>
//           <a href='/Emproidry'><button>Click </button></a>
//         </div>
//       </div>

//       <div className="card">
//         <div className="image1">
//           <img src={ SalwarImage} alt="Card Image" />
//         </div>
//         <div className="card-title">
//           <h1>  Salwar designs</h1>
//         </div>
//         <div className="des">
//           <p>You can add description here...</p>
//           <a href='/Salwar'><button>Click </button></a>
//         </div>
//       </div>

//       <div className="card">
//         <div className="image1">
//           <img src={ bridalimage} alt="Card Image" />
//         </div>
//         <div className="card-title">
//           <h1>  Bridal Design Blouses</h1>
//         </div>
//         <div className="des">
//           <p>You can add description here...</p>
//           <a href='/Bridal'><button>Click </button></a>
//         </div>
//       </div>

//       <div className="card">
//         <div className="image1">
//           <img src={bridal} alt="Card Image" />
//         </div>
//         <div className="card-title">
//           <h1> Simple blouse designes</h1>
//         </div>
//         <div className="des">

//           <a href='/Simpleblouse'><button>Click </button></a>
//         </div>
//       </div>

//       <div className="card">
//         <div className="image1">
//           <img src={emproidryblouse} alt="Card Image" />
//         </div>
//         <div className="card-title">
//           <h1> Zaridosi Work Blouse</h1>
//         </div>
//         <div className="des">

//           <a href='/Zardosi'><button>Click </button></a>
//         </div>
//       </div>


//       <div className="card">
//         <div className="image1">
//           <img src={bridal} alt="Card Image" />
//         </div>
//         <div className="card-title">
//           <h1> Lehengas</h1>
//         </div>
//         <div className="des">

//           <a href='/Login'><button>Click </button></a>
//         </div>
//       </div>




//     </div>
//   );
// }

// export default Cards;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// function ProductList() {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetchProducts();
//     }, []);
//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:3002/Aridesigner');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };
//     return (
//         <div>
//             <h1>Product List</h1>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.AriId}>
//                         <h2>{product.ImageId}</h2>
//                         <p>{product.Tittle}</p>
//                         <strong>Price: ${product.Price.toFixed(2)}</strong>
//                         <p>Status: {product.Type}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default ProductList;


// import React, { useEffect, useState } from 'react';
// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetch('http://localhost:3002/Aridesigner')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         console.log(response)
//         return response.json();
//       })
//       .then(data => {
//         setProducts(data);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//         setIsLoading(false);
//       });
//   }, []);
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.AriId}>
//             <h2>{product.ImageId}</h2>
//             <p>{product.Tittle}</p>

//             <p>Status: {product.Type}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default ProductList;

// function cards() {
//   return(
//       <div>
//         <div className='Aridesign-heding'>
// //         <h1>Rare Fairy<span> Products</span></h1>
// //         <p>Rare Fairy is a clothes store in Vavuniya,  that offers a wide range of designs.
// //           Customers can work directly with our embroidery staff to design their bridal goods, whether it's Aari embroidery, zardozi embroidery, Lehenga or Readymade designer blouses, till it's the ideal fit. Personalized work is handled by our team, which ensures that it is completed on time for delivery.
// //           We pride ourselves on providing high-quality, low-cost products to our customers.Rare Fairy is a reputable and fashionable women's clothing store that offers high-quality items at reasonable prices, as well as the most up-to-date and appealing designs.</p>
// //       </div>

//         <div className="card-container">
// <div className="card">
// <img src={bridal} alt="Card Image" />
// <div className="card-content">
//   <h1>Tittle One</h1>
//   <p>ibuytgwcvdtyvdt5</p>
//   <a href="" className="card-button">Click here</a>

// </div>
 

// </div>
//         </div>
//       </div>
//   )
// }


function cards() {

//     const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3003/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the products!", error);
//       });
//   }, []);
  return(

    
<>
 <Navbar/>
     <div class="body">
        <div class="type-container">
            <div class="row1">
                <div class="header1">
                    <h1>Rare Fairy <span>Products</span></h1>
                    <p>Rare Fairy is a clothes store in Vavuniya,  that offers a wide range of designs.
          Customers can work directly with our embroidery staff to design their bridal goods, whether it's Aari embroidery, zardozi embroidery, Lehenga or Readymade designer blouses, till it's the ideal fit. Personalized work is handled by our team, which ensures that it is completed on time for delivery.
          We pride ourselves on providing high-quality, low-cost products to our customers.Rare Fairy is a reputable and fashionable women's clothing store that offers high-quality items at reasonable prices, as well as the most up-to-date and appealing designs.</p>

                </div>
                <div class="type-content">
                    <div class="card1">
                        <img src={emproidryblouse}/>
                        <h4>Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy</h4>
                     
                            <div class="fake">
                       <a href='/Emproidry'> <button >Click here</button></a>
                       </div>
                    </div>
                    <div class="card1">
                    <img src={SalwarImage}/>
                        <h4>Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy</h4>
                      
                            <div class="fake">
                            <a href='/Lehenga'> <button >Click here</button></a>
                            </div>
                    </div>
                    <div class="card1">
                    <img src={salwar4}/>
                        <h4>Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy </h4>
                        <div class="fake">
                            <a href='/Salwar'> <button  >Click here</button></a>
                            </div>
                    </div>




                </div>

                <div class="type-content">
                    <div class="card1">
                    <img src={bridalimage }/>
                        <h4>Happy In Introducing Aari Bridal Design Blouses At Best Price In Rare Fairy</h4>
                      
                           <div class="fake">
                            <a href='/Bridel'> <button  >Click here</button></a>
                            </div>
                    </div>
                    <div class="card1">
                    <img src={bridal}/>
                        <h4>Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy</h4>
                      
                              <div class="fake">
                            <a href='/Simpleblouse'> <button  >Click here</button></a>
                            </div>
                    </div>
                    <div class="card1">
                    <img src={ zardosi3}/>
                        <h4>Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy</h4>
                        
                             <div class="fake">
                            <a href='/Zardosi'> <button  >Click here</button></a>
                            </div>
                    </div>



                </div>

            </div>
        </div>

    </div>

    
    </>
  )
}

export default cards;

