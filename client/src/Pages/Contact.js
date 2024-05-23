import React from 'react';
import './Contact.css';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
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

// import React from 'react';

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


function ContactUs() {
  return(
    <>
    <Navbar/>
    <section class="contact">
        <div class="contact-content">
            <h2>Contact<span> Us</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil odit adipisci illo inventore eum, corrupti commodi delectus.</p>
        </div>
        <div class="container-Us">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                    <div class="text1">
                        <h3>Address</h3>
                        <p>1234 Kurumankadu Road,<br/>Vavuniya,Sri lanka,<br/>14568</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                    <div class="text1">
                        <h3>Phone</h3>
                        <p>12345678</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div class="text1">
                        <h3>Email</h3>
                        <p>arefairy@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text1" required="required"/>
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text1" required="required"/>
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea name="" id="" required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
    {/* <Footer/> */}
    </>
  )
}

export default ContactUs;


