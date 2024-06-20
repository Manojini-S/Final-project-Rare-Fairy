// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Addproduct.css";
// import Navbar from "../Components/Navbar";

// const ProductForm = () => {
// 	const [productName, setProductName] = useState("");
// 	const [description, setDescription] = useState("");
// 	const [categoryName, setCategoryName] = useState("");
// 	const [photo, setPhoto] = useState(null);
// 	const [errors, setErrors] = useState({});
// 	const [categories, setCategories] = useState([]);

// 	const dummyCategories = [
// 		{ id: 1, name: "Emproidry" },
// 		{ id: 2, name: "Salwar designs" },
// 		{ id: 3, name: "Bridel" },
// 		{ id: 4, name: "Zardosi design" },
// 		{ id: 5, name: "Legenha designs" },
// 		{ id: 5, name: "Simple blouse designs" },
// 	];

// 	useEffect(() => {
		
// 		setCategories(dummyCategories);
// 	}, []);

// 	const validate = () => {
// 		const newErrors = {};
// 		if (!productName) newErrors.productName = "Product Name is required";
// 		if (!description) newErrors.description = "Description is required";
// 		if (!categoryName) newErrors.categoryName = "Category Name is required";
// 		if (!photo) newErrors.photo = "Photo is required";
// 		return newErrors;
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const newErrors = validate();
// 		if (Object.keys(newErrors).length > 0) {
// 			setErrors(newErrors);
// 			return;
// 		}

// 		const formData = new FormData();
// 		formData.append("ProductName", productName);
// 		formData.append("Description", description);
// 		formData.append("CategoryName", categoryName);
// 		formData.append("photo", photo);

// 		try {
// 			const response = await fetch("http://localhost:3003/image/upload", {
// 				method: "POST",
// 				body: formData,
// 			});

// 			if (!response.ok) {
// 				const errorText = await response.text();
// 				throw new Error(
// 					`HTTP error! Status: ${response.status}, Message: ${errorText}`
// 				);
// 			}

// 			const data = await response.json();
// 			toast.success("Product added successfully!");

// 			// Clear the form
// 			setProductName("");
// 			setDescription("");
// 			setCategoryName("");
// 			setPhoto(null);
// 			setErrors({});
// 		} catch (error) {
// 			console.error("Error:", error);
// 			toast.error("Failed to add product. Please try again.");
// 		}
// 	};

// 	return (
// 		<>
// 			<Navbar />

// 			<div className="product-form-container">
// 				<ToastContainer />

// 				<h2 className="add">Add Product</h2>
// 				<form onSubmit={handleSubmit} className="product-form">
// 					<div className="form-group">
// 						<label htmlFor="categoryName">Category Name:</label>
// 						<select
// 							id="categoryName"
// 							value={categoryName}
// 							onChange={(e) => setCategoryName(e.target.value)}
// 							className="form-control"
// 						>
// 							<option value="">Select category</option>
// 							{categories.map((category) => (
// 								<option key={category.id} value={category.name}>
// 									{category.name}
// 								</option>
// 							))}
// 						</select>
// 						{errors.categoryName && (
// 							<span className="error">{errors.categoryName}</span>
// 						)}
// 					</div>
// 					<div className="form-group">
// 						<label htmlFor="productName">Product Name:</label>
// 						<input
// 							type="text"
// 							id="productName"
// 							value={productName}
// 							onChange={(e) => setProductName(e.target.value)}
// 							className="form-control"
// 							placeholder="Enter product name"
// 						/>
// 						{errors.productName && (
// 							<span className="error">{errors.productName}</span>
// 						)}
// 					</div>
// 					<div className="form-group">
// 						<label htmlFor="description">Description:</label>
// 						<input
// 							type="text"
// 							id="description"
// 							value={description}
// 							onChange={(e) => setDescription(e.target.value)}
// 							className="form-control"
// 							placeholder="Enter description"
// 						/>
// 						{errors.description && (
// 							<span className="error">{errors.description}</span>
// 						)}
// 					</div>

// 					<div className="form-group">
// 						<label htmlFor="photo">Photo:</label>
// 						<input
// 							type="file"
// 							id="photo"
// 							onChange={(e) => setPhoto(e.target.files[0])}
// 							className="form-control"
// 						/>
// 						{errors.photo && <span className="error">{errors.photo}</span>}
// 					</div>
// 					<button type="submit" className="btn-submit">
// 						Add Product
// 					</button>
// 				</form>
// 			</div>
// 		</>
// 	);
// };

// export default ProductForm;



import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Addproduct.css";
import Navbar from "../Components/Navbar";

const ProductForm = () => {
	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [categoryName, setCategoryName] = useState("");
	const [photo, setPhoto] = useState(null);
	const [errors, setErrors] = useState({});
	const [categories, setCategories] = useState([]);

	const dummyCategories = [
		{ id: 1, name: "Emproidry" },
		{ id: 2, name: "Salwar designs" },
		{ id: 3, name: "Bridel" },
		{ id: 4, name: "Zardosi design" },
		{ id: 5, name: "Legenha designs" },
		{ id: 5, name: "Simple blouse designs" },
	];

	useEffect(() => {
		// Simulate fetching categories from an API
		// Replace with actual API call in your application
		setCategories(dummyCategories);
	}, []);

	const validate = () => {
		const newErrors = {};
		if (!productName) newErrors.productName = "Product Name is required";
		if (!description) newErrors.description = "Description is required";
		if (!categoryName) newErrors.categoryName = "Category Name is required";
		if (!photo) newErrors.photo = "Photo is required";
		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		const formData = new FormData();
		formData.append("ProductName", productName);
		formData.append("Description", description);
		formData.append("CategoryName", categoryName);
		formData.append("photo", photo);

		try {
			const response = await fetch("http://localhost:3003/image/upload", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(
					`HTTP error! Status: ${response.status}, Message: ${errorText}`
				);
			}

			const data = await response.json();
			toast.success("Product added successfully!");

			// Clear the form
			setProductName("");
			setDescription("");
			setCategoryName("");
			setPhoto(null);
			setErrors({});
		} catch (error) {
			console.error("Error:", error);
			toast.error("Failed to add product. Please try again.");
		}
	};

	return (
		<>
			<Navbar />

			<div className="product-form-container">
				<ToastContainer />

				<h2 className="add">Add Product</h2>
				<form onSubmit={handleSubmit} className="product-form">
					<div className="form-group">
						<label htmlFor="categoryName">Category Name:</label>
						<select
							id="categoryName"
							value={categoryName}
							onChange={(e) => setCategoryName(e.target.value)}
							className="form-control"
						>
							<option value="">Select category</option>
							{categories.map((category) => (
								<option key={category.id} value={category.name}>
									{category.name}
								</option>
							))}
						</select>
						{errors.categoryName && (
							<span className="error">{errors.categoryName}</span>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="productName">Product Name:</label>
						<input
							type="text"
							id="productName"
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
							className="form-control"
							placeholder="Enter product name"
						/>
						{errors.productName && (
							<span className="error">{errors.productName}</span>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="description">Description:</label>
						<input
							type="text"
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="form-control"
							placeholder="Enter description"
						/>
						{errors.description && (
							<span className="error">{errors.description}</span>
						)}
					</div>

					<div className="form-group">
						<label htmlFor="photo">Photo:</label>
						<input
							type="file"
							id="photo"
							onChange={(e) => setPhoto(e.target.files[0])}
							className="form-control"
						/>
						{errors.photo && <span className="error">{errors.photo}</span>}
					</div>
					<button type="submit" className="btn-submit">
						Add Product
					</button>
				</form>
			</div>
		</>
	);
};

export default ProductForm;






