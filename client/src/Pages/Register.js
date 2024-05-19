// import React, { useState } from 'react';
// import './Register.css';
// import Navbar from '../Components/Navbar';
// import { Link } from 'react-router-dom';

// function RegistrationForm() {
//   const [fullname, setFullName] = useState('');
//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = { fullname, username, email, password }
//     // axios.post('http://localhost:3003/usercreate/signup', { fullname, username, email, password, confirmpassword })
//     await fetch('http://localhost:3003/user/post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(result),
//       })
//       .then(result => console.log(result))
//       .catch(err => console.log(err))
      
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="Register-center">
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="txt_field">
//           <input type="text" required value={fullname} onChange={(e) => setFullName(e.target.value)} />
//           <span></span>
//           <label>Full Name</label>
//         </div>
//         <div className="txt_field">
//           <input type="text" required value={username} onChange={(e) => setUserName(e.target.value)} />
//           <span></span>
//           <label>User Name</label>
//         </div>
//         <div className="txt_field">
//           <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//           <span></span>
//           <label>Email </label>
//         </div>
//         <div className="txt_field">
//           <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//           <span></span>
//           <label>Password</label>
//         </div>
//         <div className="txt_field">
//           <input type="password" required value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//           <span></span>
//           <label> Confirm Password</label>
//         </div> <input type="submit" value="Register Now" />
//         <Link to ="/Popup"></Link>
      
//         {/* <div className="signup_link">
//           <a href="Popup">Register</a>
//         </div> */}
//       </form>
//     </div>

//     </>
//   );
// }

// export default RegistrationForm;


import React, { useState } from 'react';
import './Register.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

// function RegistrationForm() {
//   const [fullname, setFullName] = useState('');
//   const [username, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = { fullname, username, email, password, confirmpassword };
    

//     try {
//       const response = await fetch('http://localhost:3003/user/post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(result),
//       });
      

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


function RegistrationForm() {
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmpassword) {
      return alert("Passwords do not match");
  }
  const result = { UserId: username, Name: fullname, Email: email, Password: password, Role: "user" };

  try {
      const response = await fetch('http://localhost:3003/signup', {
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
          </div>
          <input type="submit" value="Register Now" />
          <Link to="/Popup"></Link>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
