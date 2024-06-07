// import React, { useEffect, useState } from 'react';

// function Cards() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3003/image/getImg') 
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching products:', error);
//             });
//     }, []);

//     return (
//         <div>
//             {products.length > 0 ? (
//                 products.map((product) => (
//                     <div key={product._id}>
//                         <h3>{product.CategoryName}</h3>
//                         <p>{product.Description}</p>
//                         <img src={product.imageUrl} alt={product.CategoryName} />
//                     </div>
//                 ))
//             ) : (
//                 <p>No products available.</p>
//             )}
//         </div>
//     );
// }

// export default Cards;

import React, { useState } from 'react';
import './Addproduct.css';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!productName) newErrors.productName = "Product Name is required";
    if (!description) newErrors.description = "Description is required";
    if (!price) newErrors.price = "Price is required";
    else if (isNaN(price) || price <= 0) newErrors.price = "Price must be a positive number";
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
    formData.append('name', productName);
    formData.append('description', description);
    formData.append('price', parseFloat(price));
    formData.append('photo', photo);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      // Clear the form
      setProductName('');
      setDescription('');
      setPrice('');
      setPhoto(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="ProductForm">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input 
            type="text" 
            required 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
          <span></span>
          <label>Product Name</label>
          {errors.productName && <span className="error">{errors.productName}</span>}
        </div>
        <div className="txt_field">
          <input 
            type="text" 
            required 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <span></span>
          <label>Description</label>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div className="txt_field">
          <input 
            type="text" 
            required 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
          <span></span>
          <label>Price</label>
          {errors.price && <span className="error">{errors.price}</span>}
        </div>
        <div className="txt_field">
          <input 
            type="file" 
            required 
            onChange={(e) => setPhoto(e.target.files[0])} 
          />
          <span></span>
          <label>Photo</label>
          {errors.photo && <span className="error">{errors.photo}</span>}
        </div>
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}

export default ProductForm;
