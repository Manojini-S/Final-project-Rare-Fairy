
import './Booking.css';
import Navbar from '../Components/Navbar';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';


const FormComponent = () => {
    const [product, setProduct] = useState({
        name: "Rare Fairy",
        price: 50,
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
                <div className="form-container">
                    <form action="submit_form" method="post">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clothColor" className="form-label">Contact No:</label>
                            <input type="text" id="clothColor" name="clothColor" className="form-input" value={formData.clothColor} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNo" className="form-label">Address:</label>
                            <input type="text" id="contactNo" name="contactNo" className="form-input" value={formData.contactNo} onChange={handleChange} required />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="file" className="form-label">Upload Sample Designs Photos:</label>
                            <input type="file" id="file" name="file" className="form-input" onChange={handleFileChange} required />
                        </div> */}
                        <div className="form-group">
                            <StripeCheckout
                                stripeKey="pk_test_51PJFojP7PxWjIVya2Bv5APhoOZxJODD5GkAIoYedJdeC9AwkajgyMixKSxbyRKKPVhPWCScfkFAatKx4ztdPoMnS004kNjDNrJ"
                                token={makePayment}
                                name="Rare Fairy"
                                amount={product.price * 10000}
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
