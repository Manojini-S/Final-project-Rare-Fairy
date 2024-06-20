


import React, { useState } from 'react';
import './Register.css';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

function RegistrationForm() {
  const [fullname, setFullName] = useState('');
  // const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = "Full Name is required";
    // if (!username) newErrors.username = "User Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    else if (!/[A-Z]/.test(password)) newErrors.password = "Password must contain at least one uppercase letter";
    else if (!/[a-z]/.test(password)) newErrors.password = "Password must contain at least one lowercase letter";
    else if (!/[0-9]/.test(password)) newErrors.password = "Password must contain at least one number";
    if (!confirmpassword) newErrors.confirmpassword = "Confirm Password is required";
    else if (password !== confirmpassword) newErrors.confirmpassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const result = { Name: fullname, Email: email, Password: password, Role: "user" };

    try {
      const response = await fetch('https://final-project-rare-fairy-backend.onrender.com/usercreate/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({ apiError: errorData.message });
        setIsSubmitting(false);
        toast.error(errorData.message); // Toast notification for API error
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      setIsModalOpen(true); // Open the modal on successful registration
      toast.success("Registration successful!"); // Toast notification for success
    } catch (error) {
      console.error('Error:', error);
      setErrors({ apiError: 'An error occurred. Please try again later.' });
      setIsSubmitting(false);
      toast.error('An error occurred. Please try again later.'); // Toast notification for error
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/login'); // Redirect to login page after closing the modal
  };

  return (
    <>
      <Navbar />
      <ToastContainer /> {/* ToastContainer to display the toasts */}
      <div className="Register-center">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input 
              type="text" 
              required 
              value={fullname} 
              onChange={(e) => setFullName(e.target.value)} 
            />
            <span></span>
            <label>Full Name</label>
            {errors.fullname && <span className="error">{errors.fullname}</span>}
          </div>
          {/* <div className="txt_field">
            <input 
              type="text" 
              required 
              value={username} 
              onChange={(e) => setUserName(e.target.value)} 
            />
            <span></span>
            <label>User Name</label>
            {errors.username && <span className="error">{errors.username}</span>}
          </div> */}
          
          <div className="txt_field">
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <span></span>
            <label>Email</label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="txt_field">
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <span></span>
            <label>Password</label>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="txt_field">
            <input 
              type="password" 
              required 
              value={confirmpassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <span></span>
            <label>Confirm Password</label>
            {errors.confirmpassword && <h1 className="error">{errors.confirmpassword}</h1>}
          </div>
          <input type="submit" value="Register Now" disabled={isSubmitting} />
          {/* {isSubmitting && <span className="loading">Registering...</span>} */}
          {errors.apiError && <span className="error">{errors.apiError}</span>}
          <Link to="/Popup"></Link>
        </form>
        <Modal isOpen={isModalOpen} message="Registration successful!" onClose={closeModal} />
      </div>
    </>
  );
}

export default RegistrationForm;



