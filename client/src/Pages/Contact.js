
import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

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

    try {
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
        toast.success("Form submitted successfully!"); // Toast notification for success
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error(data.message); // Toast notification for error
      }
    } catch (error) {
      console.error('Error:', error);
      setResult("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later."); // Toast notification for error
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer /> {/* ToastContainer to display the toasts */}
      <section className="contact">
        <div className="contact-content">
          <h2>Let's Get In <span>Touch</span></h2>
          <h3>If you have any comment or suggestions just leave us a message</h3>
        </div>
        <div className="container-Us">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text1">
                <h3>RARE FAIRY SHOPPING ADDRESS</h3>
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



