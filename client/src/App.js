import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LoginForm from './Pages/Login';
import RegistrationForm from './Pages/Register';
import Emproidry from './Pages/Emproidry';
import Admin from './Pages/Admin';
import Salwar from './Pages/Salwar';
import Bridel from './Pages/Bridal';
import Simpleblouse from './Pages/Simpleblouse';
import Lehenga from './Pages/Lehenga';
import Zardosi from './Pages/Zardosi';
import UserProfile from './Pages/Userprofile';
import Popup from './Pages/Popup';
import Description from './Pages/Description';
import Payment from './Pages/Payment';
import Admin2 from './Pages/Admin2';
import Product from './Pages/product';
import Designtype from './Components/designstype';
import Booking from './Pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegistrationForm />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Emproidry" element={<Emproidry />} />
        <Route path="/Salwar" element={<Salwar />} />
        <Route path="/Bridel" element={<Bridel />} />
        <Route path="/Simpleblouse" element={<Simpleblouse />} />
        <Route path="/Zardosi" element={<Zardosi />} />
        <Route path="/Userprofile" element={<UserProfile />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/Lehenga" element={<Lehenga />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Admin2" element={<Admin2 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/designtype" element={<Designtype />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
