import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from '../Components/Navbar';

function LoginForm() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!Email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(Email)) {
      errors.email = 'Email is not valid';
    }

    if (!Password) {
      errors.password = 'Password is required';
    } else if (Password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:3003/usercreate/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email, Password }),
      });

      const data = await response.json();
      const token = data.token; // Assuming your token is returned in the response
      const user = data.user;

      if (!response.ok) {
        throw new Error('An error occurred while logging in.');
      }

      if (user.Role === 'user') {
        navigate('/'); // Redirect to the home page for regular users
        toast.success(`${user.Name} login successful`);
        localStorage.setItem('token', token);
      } else if (user.Role === 'Admin') {
        navigate('/Dashboard'); // Redirect to the admin dashboard page
        toast.success(`${user.Name} login successful`);
        localStorage.setItem('token', token);
      } else {
        toast.error('Invalid role.');
      }

    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className='lo'>
      <Navbar />
      <div className='login-body'>
        <div className='log'>
          <div className="Login-center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="txt_field">
                <input
                  type="email"
                  required
                  value={Email}
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
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span></span>
                <label>Password</label>
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div className="pass">Forgot Password?</div>
              <input type="submit" value="Login" />
              <div className="signup_link">
                Not a member? <Link to="/Register">Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;







