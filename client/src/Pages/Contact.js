import React from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer'

// function ContactUs() {
//   return (
//     <>
//       <Navbar />
//       <div className="contact-us">

//         <h1>Contact Us</h1>
//         <form>

//           <h1>Contact Us</h1><br></br>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" required />
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" rows="4" required></textarea>
//           <button type="submit">Submit</button>
//         </form>

//       </div>


      
//       <Footer />
//     </>

//   );
// }


// export default ContactUs;

// import React from 'react';

function ContactUs() {
  return (
    <>
    <Navbar/>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '110px' }}>
      <h1 style={{ textAlign: 'center',color: 'black',width:'100%',fontSize:'50px' }}>Contact <span>Us</span></h1>
      
      <form style={{ marginTop: '90px' }}>
        <label htmlFor="name" style={{color: 'black',}}>Name:</label><br />
        <input type="text" id="name" name="name" style={{ width: '100%',color: 'white', padding: '10px', marginBottom: '10px' }} /><br />
        
        <label htmlFor="email" style={{color: 'black'}}>Email:</label><br />
        <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} /><br />
        
        <label htmlFor="message" style={{color: 'black'}}>Message:</label><br />
        <textarea id="message" name="message" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} rows="5"></textarea><br />
        
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'palevioletred', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
      
    </div>


  
    </>
      
  );
}

export default ContactUs;



