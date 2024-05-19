import React, { useState } from 'react';
// import React from 'react';
import './Payment.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PaymentForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend or process payment)
    console.log('Form submitted:', { fullName, email, address, city, district, cardNumber, expMonth, expYear, cvv });
    // Reset form fields
    setFullName('');
    setEmail('');
    setAddress('');
    setCity('');
    setDistrict('');
    setCardNumber('');
    setExpMonth('');
    setExpYear('');
    setCvv('');
  };

  return (
    <>
    <Navbar/>
    <header className="Payment">
      <div className="container-Payment">
        <div className="left">
          <h3>PAYER DETAILS</h3>
          <form onSubmit={handleSubmit}>

            <br /><br/><br/>
            Full name
            <input
              className="input-1"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter name"
              required
            /><br/>
            Email
            <input
              className="input-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            /><br/>
            <br/>
            <br/>
            Address
            <input
              className="input-1"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              required
            />
            Your Place
            <input
              className="input-1"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
              required
            />
            <div id="zip">
              <label>
                District
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                >
                  <option value="">Choose Your District..</option>
                  <option value="Vavuniya">Vavuniya</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Mannar">Mannar</option>
                </select>
              </label>
            </div>
          </form>
        </div>
        <div className="right">
          <h3>PAYMENT</h3>
          <form onSubmit={handleSubmit}>
            {/* Accepted Card <br /> */}
            <br />
            Credit card number
            <input
              className="input-1"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              required
            />
            Exp month
            <input
              className="input-1"
              type="text"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
              placeholder="Enter Month"
              required
            />
            <div id="zip">
              <label>
                Exp year
                <select
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                  required
                >
                  <option value="">Choose Year..</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </label>
              <label>
                CVV
                <input
                  className="input-1"
                  type="number"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                  required
                />
              </label>
            </div>
            <input className="input-1" type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </header>
    <Footer/>
    </>
  );
};

export default PaymentForm;



// import React, { useState } from 'react';
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
//       <Navbar />
//       <header style={{ backgroundColor: 'white', padding: '20px' }}>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <div style={{ margin: '0 auto', width: '50%' }}>
//             <div style={{ marginBottom: '20px' }}>
//               <h3 style={{ textAlign: 'center' }}>PAYER DETAILS</h3>
//               <form onSubmit={handleSubmit}>
//                 Full name
//                 <input
//                   style={{ display: 'block', width: '100%', padding: '5px' }}
//                   type="text"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   placeholder="Enter name"
//                   required
//                 />
//                 Email
//                 <input
//                   style={{ display: 'block', width: '100%', padding: '5px' }}
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter email"
//                   required
//                 />
//                 Address
//                 <input
//                   style={{ display: 'block', width: '100%', padding: '5px' }}
//                   type="text"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   placeholder="Enter address"
//                   required
//                 />
//                 Your Place
//                 <input
//                   style={{ display: 'block', width: '100%', padding: '5px' }}
//                   type="text"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   placeholder="Enter City"
//                   required
//                 />
//                 <div>
//                   <label>
//                     District
//                     <select
//                       style={{ display: 'block', width: '100%', padding: '5px' }}
//                       value={district}
//                       onChange={(e) => setDistrict(e.target.value)}
//                       required
//                     >
//                       <option value="">Choose Your District..</option>
//                       <option value="Vavuniya">Vavuniya</option>
//                       <option value="Jaffna">Jaffna</option>
//                       <option value="Colombo">Colombo</option>
//                       <option value="Mannar">Mannar</option>
//                     </select>
//                   </label>
//                 </div>
//               </form>
//             </div>
//             <div>
//               <h3 style={{ textAlign: 'center' }}>PAYMENT</h3>
//               <form onSubmit={handleSubmit}>
//                 Credit card number
//                 <input
//                   style={{ display: 'block', width: '100%', padding: '5px' }}
//                   type="text"
//                   value={cardNumber}
//                   onChange={(e) => setCardNumber(e.target.value)}
//                   placeholder="Enter card number"
//                   required
//                 />
//                 Exp month
//                 <input
//                   style={{ display: 'block', width: '100%', padding: '5px' }}
//                   type="text"
//                   value={expMonth}
//                   onChange={(e) => setExpMonth(e.target.value)}
//                   placeholder="Enter Month"
//                   required
//                 />
//                 <div>
//                   <label>
//                     Exp year
//                     <select
//                       style={{ display: 'block', width: '100%', padding: '5px' }}
//                       value={expYear}
//                       onChange={(e) => setExpYear(e.target.value)}
//                       required
//                     >
//                       <option value="">Choose Year..</option>
//                       <option value="2022">2022</option>
//                       <option value="2023">2023</option>
//                       <option value="2024">2024</option>
//                       <option value="2025">2025</option>
//                     </select>
//                   </label>
//                   <label>
//                     CVV
//                     <input
//                       style={{ display: 'block', width: '100%', padding: '5px' }}
//                       type="number"
//                       value={cvv}
//                       onChange={(e) => setCvv(e.target.value)}
//                       placeholder="CVV"
//                       required
//                     />
//                   </label>
//                 </div>
//                 <input style={{ display: 'block', width: '100%', padding: '5px', marginTop: '10px' }} type="submit" value="SUBMIT" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </header>
//       <Footer />
//     </>
//   );
// };

// export default PaymentForm;



