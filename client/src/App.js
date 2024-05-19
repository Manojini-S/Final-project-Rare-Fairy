import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Aridesigns from './Pages/Aridesigns';
import LoginForm from './Pages/Login';
import RegistrationForm from './Pages/Register';

import Emproidry from './Pages/Emproidry';
import Admin from './Pages/Admin';
import Salwar from './Pages/Salwar';
import { Routes, Route } from 'react-router-dom';
import Bridel from './Pages/Bridal';
import Simpleblouse from './Pages/Simpleblouse';
import Lehenga from './Pages/Lehenga';
import Zardosi from './Pages/Zardosi';
import UserProfile from './Pages/Userprofile';
// import Popup from './Pages/Popup';
import Popup from './Pages/Popup';
import Description from './Pages/Description';
import Payment from './Pages/Payment';


function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Aridesigns" element={<Aridesigns />} />
        {/* <Route path="/Gallery" element={<Gallery />} /> */}
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegistrationForm />} />
        <Route path="/Login" element={<RegistrationForm/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Emproidry" element={<Emproidry/>} />
        <Route path="/Salwar" element={<Salwar/>} />
        <Route path="/Bridel" element={<Bridel/>} />
        <Route path="/Simpleblouse" element={<Simpleblouse/>} />
        <Route path="/Zardosi" element={<Zardosi/>} />
        <Route path="/Userprofile" element={<UserProfile/>} />
        <Route path="/Popup" element={<Popup/>} />
        <Route path="/Description" element={<Description/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Lehenga" element={<Lehenga/>} />
        <Route path="/Payment" element={<Payment/>} />


      
      </Routes>
    </div>
  );
}

export default App;
