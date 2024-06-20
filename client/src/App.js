import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginForm from "./Pages/Login";
import RegistrationForm from "./Pages/Register";
import Emproidry from "./Pages/Emproidry";
import Admin from "./Pages/Admin";
import Salwar from "./Pages/Salwar";
import Bridel from "./Pages/Bridal";
import Simpleblouse from "./Pages/Simpleblouse";
import Lehenga from "./Pages/Lehenga";
import Zardosi from "./Pages/Zardosi";
import UserProfile from "./Pages/Userprofile";
import Description from "./Pages/Description";
import Addproduct from "./Pages/Addproduct";
import AdminDashboard from "./Pages/Dashboard";
import Product from "./Pages/product";
import Designtype from "./Components/designstype";
import Booking from "./Pages/Booking";
import Aridesignscard from "./Pages/Aridesignscard";
import Designs from "./Pages/designs";
import Paymentadmin from "./Pages/Paymentadmin";
import Popup from "./Pages/bookingpopup";
import Landingpage from "./Pages/Landingpage";
import OrderList from "./Pages/OrderDashboard";


function App() {
	return (
		<>
			<ToastContainer />
			<Router>
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
					<Route path="/Lehenga" element={<Lehenga />} />
					<Route path="/Zardosi" element={<Zardosi />} />
					<Route path="/Userprofile" element={<UserProfile />} />
					<Route path="/Description" element={<Description />} />
					<Route path="/Addproduct" element={<Addproduct />} />
					<Route path="/Dashboard" element={<AdminDashboard />} />
					<Route path="/product" element={<Product />} />
					<Route path="/designtype" element={<Designtype />} />
					<Route path="/Booking" element={<Booking />} />
					<Route path="/Aridesignscard" element={<Aridesignscard />} />
					<Route path="/Designs" element={<Designs />} />
					<Route path="/Paymentadmin" element={<Paymentadmin />} />
					<Route path="/Landingpage" element={<Landingpage />} />
					<Route path="/OrderList" element={<OrderList />} />
					<Route path="/Payment" element={<Paymentadmin />} />
					<Route path="/Bookingpopup" element={<Popup />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
