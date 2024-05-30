import React, { useState } from 'react';
import './Register.css';
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = "Full Name is required";
    if (!username) newErrors.username = "User Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
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

    const result = { UserId: username, Name: fullname, Email: email, Password: password, Role: "user" };

    try {
      const response = await fetch('http://localhost:3003/usercreate/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
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
          <div className="txt_field">
            <input 
              type="text" 
              required 
              value={username} 
              onChange={(e) => setUserName(e.target.value)} 
            />
            <span></span>
            <label>User Name</label>
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
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
            {errors.confirmpassword && <span className="error">{errors.confirmpassword}</span>}
          </div>
          <input type="submit" value="Register Now" />
          <Link to="/Popup"></Link>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;

