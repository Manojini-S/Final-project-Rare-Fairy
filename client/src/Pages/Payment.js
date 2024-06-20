// import React, { useState } from 'react';

// import './Payment.css';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const PaymentForm = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [district, setDistrict] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expMonth, setExpMonth] = useState('');
//   const [expYear, setExpYear] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', { fullName, email, address, city, district, cardNumber, expMonth, expYear, cvv });
 
//     setFullName('');
//     setEmail('');
//     setAddress('');
//     setCity('');
//     setDistrict('');
//     setCardNumber('');
//     setExpMonth('');
//     setExpYear('');
//     setCvv('');
//   };

//   return (
//     <>
//     <Navbar/>
//     <header className="Payment">
//       <div className="container-Payment">
//         <div className="left">
//           <h3>PAYER DETAILS</h3>
//           <form onSubmit={handleSubmit}>

//             <br /><br/><br/>
//             Full name
//             <input
//               className="input-1"
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Enter name"
//               required
//             /><br/>
//             Email
//             <input
//               className="input-1"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               required
//             /><br/>
//             <br/>
//             <br/>
//             Address
//             <input
//               className="input-1"
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter address"
//               required
//             />
//             Your Place
//             <input
//               className="input-1"
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               placeholder="Enter City"
//               required
//             />
//             <div id="zip">
//               <label>
//                 District
//                 <select
//                   value={district}
//                   onChange={(e) => setDistrict(e.target.value)}
//                   required
//                 >
//                   <option value="">Choose Your District..</option>
//                   <option value="Vavuniya">Vavuniya</option>
//                   <option value="Jaffna">Jaffna</option>
//                   <option value="Colombo">Colombo</option>
//                   <option value="Mannar">Mannar</option>
//                 </select>
//               </label>
//             </div>
//           </form>
//         </div>
//         <div className="right">
//           <h3>PAYMENT</h3>
//           <form onSubmit={handleSubmit}>
         
//             <br />
//             Credit card number
//             <input
//               className="input-1"
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               placeholder="Enter card number"
//               required
//             />
//             Exp month
//             <input
//               className="input-1"
//               type="text"
//               value={expMonth}
//               onChange={(e) => setExpMonth(e.target.value)}
//               placeholder="Enter Month"
//               required
//             />
//             <div id="zip">
//               <label>
//                 Exp year
//                 <select
//                   value={expYear}
//                   onChange={(e) => setExpYear(e.target.value)}
//                   required
//                 >
//                   <option value="">Choose Year..</option>
//                   <option value="2022">2022</option>
//                   <option value="2023">2023</option>
//                   <option value="2024">2024</option>
//                   <option value="2025">2025</option>
//                 </select>
//               </label>
//               <label>
//                 CVV
//                 <input
//                   className="input-1"
//                   type="number"
//                   value={cvv}
//                   onChange={(e) => setCvv(e.target.value)}
//                   placeholder="CVV"
//                   required
//                 />
//               </label>
//             </div>
//             <input className="input-1" type="submit" value="SUBMIT" />
//           </form>
//         </div>
//       </div>
//     </header>
//     <Footer/>
//     </>
//   );
// };

// export default PaymentForm;



// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import './Payment.css';

// const PaymentForm = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [district, setDistrict] = useState('');
//   const [zipCode, setZipCode] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expMonth, setExpMonth] = useState('');
//   const [expYear, setExpYear] = useState('');
//   const [cvv, setCvv] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const formData = {
//       fullName,
//       email,
//       address,
//       city,
//       district,
//       zipCode,
//       cardNumber,
//       expMonth,
//       expYear,
//       cvv,
//     };

//     fetch('https://localhost3002/payment', { 
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);

//     })
//     .catch((error) => {
//       console.error('Error:', error);
      
//     });

  
//     setFullName('');
//     setEmail('');
//     setAddress('');
//     setCity('');
//     setDistrict('');
//     setZipCode('');
//     setCardNumber('');
//     setExpMonth('');
//     setExpYear('');
//     setCvv('');
//   };

//   return (
//     <>
//     <Navbar/>
//     <header>
//     <div className="pay-container">
//       <div className="left">
//         <h3>BILLING ADDRESS</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Full name
//             <input
//             className="name"
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Enter name"
//               required
//             />
//           </label>
//           <label>
//             Email
//             <input
//              className="name"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               required
//             />
//           </label>
//           <label>
//             Address
//             <input
//              className="name"
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter address"
//               required
//             />
//           </label>
//           <label>
//             City
//             <input
//                className="name"
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               placeholder="Enter city"
//               required
//             />
//           </label>
//           <div id="zip">
//             <label>
//               District
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 required
//               >
//                 <option value="">Choose District</option>
//                 <option value="Vavuniya">Vavuniya</option>
//                 <option value="Jaffna">Jaffna</option>
//                 <option value="Mannar">Mannar</option>
//                 <option value="Kilinochi">Kilinochi</option>
//               </select>
//             </label>
//             <label>
//               Zip code
//               <input
//                  className="number"
//                 type="number"
//                 value={zipCode}
//                 onChange={(e) => setZipCode(e.target.value)}
//                 placeholder="Zip code"
//                 required
//               />
//             </label>
//           </div>
//         </form>
//       </div>
//       <div className="right">
//         <h3>PAYMENT</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Enter credit card number
//             <input
//                className="name"
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               placeholder="Enter number"
//               required
//             />
//           </label>
//           <label>
//             Exp month
//             <input
//                className="name"
//               type="text"
//               value={expMonth}
//               onChange={(e) => setExpMonth(e.target.value)}
//               placeholder="Enter Month"
//               required
//             />
//           </label>
//           <div id="zip">
//             <label>
//               Exp year
//               <select
//                  className="name"
//                 value={expYear}
//                 onChange={(e) => setExpYear(e.target.value)}
//                 required
//               >
//                 <option value="">Choose year..</option>
//                 <option value="2024">2024</option>
//                 <option value="2025">2025</option>
//                 <option value="2026">2026</option>
//                 <option value="2027">2027</option>
//               </select>
//             </label>
//             <label>
//               CVV
//               <input
//                  className="name"
//                 type="name"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 placeholder="CVV"
//                 required
//               /><br/>
//             </label>
//           </div>
//           <input type="submit" value="Submit  "  className="sub"/>
//         </form>
//       </div>
//     </div>
//     </header>
//     <Footer/>
//     </>
//   );
// };

// export default PaymentForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getPayment`);
        setPayment(response.data);
      } catch (error) {
        console.error('Error fetching Payment Details:', error);
      }
    };

    fetchPayment();
  }, []);


  return (
    <div className="head-payment">
      <h2>Payment List</h2>
      <table className="Payment">
        <thead>
          <tr>
          <th>Name</th>
            <th>User ID </th>
            <th>Paid Amount</th>
            <th>PaymentStatus</th>
            
          
          </tr>
        </thead>
        <tbody>
          {payment.map((payment) => (
            <tr key={order._id}>
               <td>{order.name}</td>
              <td>{payment._id}</td>
              <td>{payment.amount}</td>
              <td>{payment.paymentStatus}</td>
             
              <td>{payment.size}</td>

             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;




