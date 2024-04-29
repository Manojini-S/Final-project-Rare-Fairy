// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Aridesigns from './Pages/Aridesigns';
import LoginForm from './Pages/Login';
import RegistrationForm from './Pages/Register';
// import Footer from './Pages/Footer';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/Contact-Us" element={<Contact />} />
      <Route path="/Aridesigns" element={<Aridesigns />} />
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/Register" element={<RegistrationForm/>} />
    



      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
