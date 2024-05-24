import React from 'react';
import './Booking.css';
import Navbar from '../Components/Navbar';
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react';

const FormComponent = () => {

    const [product, setProduct] = useState({
        name: "Rare Fairy",  // Changed to lowercase 'name'
        price: 50,
        productBy: "Mano",
    });
    const makePayment = (token) => {
        const body = {
            token,
            product,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        return fetch("http://localhost:3000/payment", {  // Ensure the backend server is running on this port
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
        <div className='booking'>
          
            <div className="form-container">
                <form action="submit_form" method="post">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" name="name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">cloth color:</label>
                        <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">contact no:</label>
                        <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email" className="form-label">cloth color:</label> */}
                        {/* <input type="email" id="email" name="email" className="form-input" required /> */}
                    </div>
                    {/* <div className="form-group">
          <label htmlFor="dropdown" className="form-label">Select an option:</label>
          <select id="dropdown" name="dropdown" className="form-select" required>
            <option value="">Please select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div> */}
                    <div className="form-group">
                        <label htmlFor="file" className="form-label">Upload sample designs photos:</label>
                        <input type="file" id="file" name="file" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <StripeCheckout
                            stripeKey="pk_test_51PJFojP7PxWjIVya2Bv5APhoOZxJODD5GkAIoYedJdeC9AwkajgyMixKSxbyRKKPVhPWCScfkFAatKx4ztdPoMnS004kNjDNrJ"
                            token={makePayment}
                            name="Rare Fairy"
                            amount={product.price * 100}
                        >
                            <button className="dash" id="dash">Order Now</button>
                        </StripeCheckout>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default FormComponent;
