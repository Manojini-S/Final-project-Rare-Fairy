import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Navbar from '../Components/Navbar';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3003/usercreate/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('An error occurred while logging in.');
      }

      const data = await response.json();
      console.log(data.Role);

      if (data.Role === 'user') {
        alert('User login successful');
        navigate('/');
      } else if (data.Role === 'admin') {
        alert('Admin login successful');
        navigate('/dashboard');
      } else {
        alert('Invalid role.');
      }

    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='login-body'>
        <div className='log'>
          <div className="Login-center">
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="txt_field">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <span></span>
                <label>Email</label>
              </div>
              <div className="txt_field">
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <span></span>
                <label>Password</label>
              </div>
              <div className="pass">Forgot Password?</div>
              <input type="submit" value="Login" />
              <div className="signup_link">
                Not a member? <a href="Register">Signup</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
