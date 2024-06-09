// import React from 'react';
// import './Contact.css';

// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Con from '../Assets/heavy.jpg';

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



// function ContactUs() {
//   return (
//     <>
//     <Navbar/>
//     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '110px' }}>
//       <h1 style={{ textAlign: 'center',color: 'black',width:'100%',fontSize:'50px',fontweight:'1000' }}>Contact <span>Us</span></h1>
      
//       <form style={{ marginTop: '90px' }}>
//         <label htmlFor="name" style={{color: 'black',}}>Name:</label><br />
//         <input type="text" id="name" name="name" style={{ width: '100%',color: 'white', padding: '10px', marginBottom: '10px' }} /><br />
        
//         <label htmlFor="email" style={{color: 'black'}}>Email:</label><br />
//         <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} /><br />
        
//         <label htmlFor="message" style={{color: 'black'}}>Message:</label><br />
//         <textarea id="message" name="message" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} rows="5"></textarea><br />
        
//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'palevioletred', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
//       </form>
      
//     </div>


  
//     </>
      
//   );
// }

// export default ContactUs;


// function ContactUs() {
//   return(
//     <>
//     <Navbar/>
//     <section class="contact">
//         <div class="contact-content">
//             <h2>Contact<span> Us</span></h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil odit adipisci illo inventore eum, corrupti commodi delectus.</p>
//         </div>
//         <div class="container-Us">
//             <div class="contactInfo">
//                 <div class="box">
//                     <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
//                     <div class="text1">
//                         <h3>Address</h3>
//                         <p>1234 Kurumankadu Road,<br/>Vavuniya,Sri lanka,<br/>14568</p>
//                     </div>
//                 </div>
//                 <div class="box">
//                     <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
//                     <div class="text1">
//                         <h3>Phone</h3>
//                         <p>12345678</p>
//                     </div>
//                 </div>
//                 <div class="box">
//                     <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
//                     <div class="text1">
//                         <h3>Email</h3>
//                         <p>rarefairy@gmail.com</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="contactForm">
//                 <form>
//                     <h2>Send Message</h2>
//                     <div class="inputBox">
//                         <input type="text1" required="required"/>
//                         <span>Full Name</span>
//                     </div>
//                     <div class="inputBox">
//                         <input type="text1" required="required"/>
//                         <span>Email</span>
//                     </div>
//                     <div class="inputBox">
//                         <textarea name="" id="" required="required"></textarea>
//                         <span>Type your Message...</span>
//                     </div>
//                     <div class="inputBox">
//                         <input type="submit" value="Send"/>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </section>
//     {/* <Footer/> */}
//     </>
//   )
// }

// export default ContactUs;





// import React, { useState } from 'react';
// import './Contact.css';

// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [result, setResult] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formDataToSend = new FormData(event.target);
//     formDataToSend.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formDataToSend
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div>
//         <form onSubmit={onSubmit}>
           
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
//           <button type="submit">Submit Form</button>
//         </form>
//         <span>{result}</span>
//       </div>
   
//     </>
//   );
// }

// export default ContactForm;




















// import React, { useState } from 'react';
// import './Contact.css';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [result, setResult] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formDataToSend = new FormData(event.target);
//     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formDataToSend
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return(
//     <>
//       <Navbar />
//       <section className="contact">
//         <div className="contact-content">
//           <h2>Contact<span> Us</span></h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil odit adipisci illo inventore eum, corrupti commodi delectus.</p>
//         </div>
//         <div className="container-Us">
//           <div className="contactInfo">
//             <div className="box">
//               <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
//               <div className="text1">
//                 <h3>Address</h3>
//                 <p>1234 Kurumankadu Road,<br/>Vavuniya, Sri Lanka,<br/>14568</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
//               <div className="text1">
//                 <h3>Phone</h3>
//                 <p>12345678</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
//               <div className="text1">
//                 <h3>Email</h3>
//                 <p>rarefairy@gmail.com</p>
//               </div>
//             </div>
//           </div>
//           <div className="contactForm">
//             <form onSubmit={onSubmit}>
//               <h2>Send Message</h2>
//               <div className="inputBox">
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 <span>Full Name</span>
//               </div>
//               <div className="inputBox">
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 <span>Email</span>
//               </div>
//               <div className="inputBox">
//                 <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
//                 <span>Type your Message...</span>
//               </div>
//               <div className="inputBox">
//                 <input type="submit" value="Send" />
//               </div>
//             </form>
//             <span>{result}</span>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default ContactUs;



import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "5e198b44-5c0b-4c23-85e9-3c61e955b627");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact-content">
          <h2>Let's Get In<span>Touch</span></h2>
          <h3>
If you have any comment or suggestions just leave us a message</h3>
        </div>
        <div className="container-Us">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text1">
                <h3>RARE FAIRY
SHOPPING ADDRESS</h3>
                <p>1234 Kurumankadu Road,<br />Vavuniya, Sri Lanka,<br />14568</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text1">
                <h3>SAY “HELLO“</h3>
                <p>12345678</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
              <div className="text1">
                <h3>EMAILING ADDRESS</h3>
                <p>rarefairy@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={onSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" />
              </div>
            </form>
            <h2>{result}</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;


