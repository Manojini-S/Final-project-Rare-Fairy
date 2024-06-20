


import "./Booking.css";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import Modal from "../Components/Modal";
import { toast } from "react-toastify";

const FormComponent = () => {
	const [product] = useState({
		name: "Rare Fairy",
		price: 0,
		productBy: "Mano",
	});

	const [formData, setFormData] = useState({
		name: "",
		contactNumber: "",
		email: "",
		address: "",
		deadline: "",
	});

	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const [nameError, setNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [contactNumberError, setContactNumberError] = useState(null);
	const [addressError, setAddressError] = useState(null);
	const [deadlineError, setDeadlineError] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		let isValid = true;

		if (!formData.name.trim()) {
			setNameError("Name is required");
			isValid = false;
		} else {
			setNameError(null);
		}

		if (!formData.email.trim()) {
			setEmailError("Email is required");
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			setEmailError("Email is invalid");
			isValid = false;
		} else {
			setEmailError(null);
		}

		if (!formData.contactNumber.trim()) {
			setContactNumberError("Contact number is required");
			isValid = false;
		} else if (!/^\d+$/.test(formData.contactNumber)) {
			setContactNumberError("Contact number should contain digits only");
			isValid = false;
		} else if (formData.contactNumber.trim().length !== 10) {
			setContactNumberError("Contact number should be 10 digits");
			isValid = false;
		} else {
			setContactNumberError(null);
		}

		if (!formData.address.trim()) {
			setAddressError("Address is required");
			isValid = false;
		} else {
			setAddressError(null);
		}

		if (!formData.deadline.trim()) {
			setDeadlineError("Deadline is required");
			isValid = false;
		} else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.deadline)) {
			setDeadlineError("Deadline should be in YYYY-MM-DD format");
			isValid = false;
		} else {
			setDeadlineError(null);
		}

		return isValid;
	};

	const handleOrderNow = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			const response = await fetch("http://localhost:3003/order/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			console.log(data);

			if (response.ok) {
				setShowSuccessModal(true);
				toast.success("Order is Processing!");
			} else {
				console.error("Order submission failed:", data);
				toast.error("Order submission failed. Please try again.");
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("An error occurred. Please try again.");
		}
	};

	const closeModal = () => {
		setShowSuccessModal(false);
	};

	return (
		<>
			<Navbar />
			<div className="booking">
				<div className="form-container">
					<h1 className="order">Designs order</h1>
					<form onSubmit={handleOrderNow}>
						<div className="book">
							<label htmlFor="name" className="book-name">
								Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="book-input"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							{nameError && <p className="error">{nameError}</p>}
						</div>
						<div className="book">
							<label htmlFor="email" className="book-name">
								Email:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="book-input"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							{emailError && <p className="error">{emailError}</p>}
						</div>
						<div className="book">
							<label htmlFor="contactNumber" className="book-name">
								Contact No:
							</label>
							<input
								type="text"
								id="contactNumber"
								name="contactNumber"
								className="book-input"
								value={formData.contactNumber}
								onChange={handleChange}
								required
							/>
							{contactNumberError && (
								<p className="error">{contactNumberError}</p>
							)}
						</div>
						<div className="book">
							<label htmlFor="address" className="book-name">
								Address:
							</label>
							<input
								type="text"
								id="address"
								name="address"
								className="book-input"
								value={formData.address}
								onChange={handleChange}
								required
							/>
							{addressError && <p className="error">{addressError}</p>}
						</div>
						<div className="book">
							<label htmlFor="deadline" className="book-name">
								Deadline:
							</label>
							<input
								type="date"
								id="deadline"
								name="deadline"
								className="book-input"
								value={formData.deadline}
								onChange={handleChange}
								required
							/>
							{deadlineError && <p className="error">{deadlineError}</p>}
						</div>

						<div className="book">
							<button className="dash" id="dash" type="submit">
								Order Now
							</button>
						</div>
					</form>
				</div>
			</div>
			<a href="/Bookingpopup"><Modal
				isOpen={showSuccessModal}
				message="Order is processing! "
				onClose={closeModal}
			/>
			</a>
		</>
	);
};

export default FormComponent;



