import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function RegistrationForm() {
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/register', { fullname, username, email, password, confirmpassword })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="Register-center">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field1">
          <input type="text" required value={fullname} onChange={(e) => setFullName(e.target.value)} />
          <span></span>
          <label>Full Name</label>
        </div>
        <div className="txt_field1">
          <input type="text" required value={username} onChange={(e) => setUserName(e.target.value)} />
          <span></span>
          <label>User Name</label>
        </div>
        <div className="txt_field1">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <span></span>
          <label>Email </label>
        </div>
        <div className="txt_field1">
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field1">
          <input type="password" required value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <span></span>
          <label> Confirm Password</label>
        </div>
        <input type="submit" value="Register Now" />
        <div className="signup_link">
          {/* <a href="Popup">Register</a> */}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
