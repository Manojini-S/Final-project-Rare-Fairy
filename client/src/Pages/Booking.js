
import './Booking.css';
import Navbar from '../Components/Navbar';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';


const FormComponent = () => {
    const [product, setProduct] = useState({
        name: "Rare Fairy",
        price: 500,
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

        return fetch("http://localhost:3003/payment", {
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
            <Navbar />
            <div className='booking'>
                <div className="form-container"><h1 className='order'>Designs  order</h1>
                    <form action="submit_form" method="post">
                        <div className="book">
                            <label htmlFor="name" className="book-name">Name:</label>
                            <input type="text" id="name" name="name" className="book-input" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="book">
                            <label htmlFor="clothColor" className="book-name">Contact No:</label>
                            <input type="text" id="clothColor" name="clothColor" className="book-input" value={formData.clothColor} onChange={handleChange} required />
                        </div>
                        <div className="book">
                            <label htmlFor="contactNo" className="book-name">Address:</label>
                            <input type="text" id="contactNo" name="contactNo" className="book-input" value={formData.contactNo} onChange={handleChange} required />
                        </div>
                        <div className="book">
                        <button className="dash" id="dash">Order Now</button>
                        </div>
                        
                        <div className="book">
                            <StripeCheckout
                                stripeKey="pk_test_51PJFojP7PxWjIVya2Bv5APhoOZxJODD5GkAIoYedJdeC9AwkajgyMixKSxbyRKKPVhPWCScfkFAatKx4ztdPoMnS004kNjDNrJ"
                                token={makePayment}
                                name="Rare Fairy"
                                amount={product.price * 0}
                            >
                                <button className="dash" id="dash">Pay Now</button>
                              
                            </StripeCheckout>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormComponent;





