import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import './bookingpopup.css';
import './Booking.css';
import Navbar from '../Components/Navbar';

const BookingPopup = ({ message, onClose }) => {
    const [product] = useState({
        name: "Rare Fairy",
      
        productBy: "Mano",
    });

    const [formData, setFormData] = useState({
        name: "",
        clothColor: "",
        contactNo: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const makePayment = (token) => {
        const body = {
            token,
            product,
        };
        const headers = {
            "Content-Type": "application/json",
        };

        return fetch("https://final-project-rare-fairy-backend.onrender.com/payment", {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        })
        .then((response) => {
            console.log("Response:", response);
            const { status } = response;
            console.log("Status:", status);
        })
        .catch((error) => console.log(error));
    };

    return (
        <>
       <Navbar/>
        <div className="popup-box">
            <div className="popup">
                <h2>Success Message</h2>
                <h4>**Accepting the order **</h4>
                <h5>**Thank you for your order **</h5>
               
                <StripeCheckout
                    stripeKey="pk_test_51PJFojP7PxWjIVya2Bv5APhoOZxJODD5GkAIoYedJdeC9AwkajgyMixKSxbyRKKPVhPWCScfkFAatKx4ztdPoMnS004kNjDNrJ"
                    token={makePayment}
                    name={product.name}
                    amount={product.price * 100} 
                >
                    <button type="button" className="btn1" onClick={onClose}>
                    Pay Now
                </button>
                </StripeCheckout>
            </div>
        </div>
        </>
    );
};

export default BookingPopup;

