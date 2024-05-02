import React from 'react';
import './Register.css'; 

function RegistrationForm() {
  return (
    <div className="Register-center">
    <h1>Registration Form</h1>
    <form method="post">
      <div className="txt_field1">
        <input type="text" required />
        <span></span>
        <label>Full Name</label>
      </div>
      <div className="txt_field1">
        <input type="text" required />
        <span></span>
        <label>User Name</label>
      </div>
      <div className="txt_field1">
        <input type="Email" required />
        <span></span>
        <label>Email Address</label>
      </div>
      <div className="txt_field1">
        <input type="password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div className="txt_field1">
        <input type="password" required />
        <span></span>
        <label> Conform Password</label>
      </div>
      {/* <div className="pass">Forgot Password?</div> */}
      <input type="submit" value="Register Now" />
      <div className="signup_link">
        {/* <a href="Popup">Register</a> */}
      </div>
    </form>
  </div>
  );
}

export default RegistrationForm;

