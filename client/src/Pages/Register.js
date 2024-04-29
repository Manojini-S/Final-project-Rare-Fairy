import React from 'react';
import './Register.css'; 

function RegistrationForm() {
  return (
    <div className="center">
      <h1>REGISTRATION FORM</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>First Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Last Name</label>
        </div>
        <div className="txt_field">
          <input type="email" required />
          <span></span>
          <label>Email Address</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <div className="pass"></div>
        <input type="submit" value="Register" />
        <div className="signup_link">
           <a href="#"></a>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

