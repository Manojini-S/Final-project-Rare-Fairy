import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Modal from '../Components/Modal'; // Assuming Modal.js is in the correct directory
import './productadmin.css';
import AdminDashboard from './Dashboard';

function Admin() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditConfirmationOpen, setEditConfirmationOpen] = useState(false);
    const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        axios.get('https://final-project-rare-fairy-backend.onrender.com/image/getImg')
            .then(response => setProducts(response.data))
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('An error occurred while fetching products. Please try again later.');
            });
    }, []);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setEditConfirmationOpen(true);
    };

    const handleEditConfirm = () => {
        setIsEditModalOpen(true);
        setEditConfirmationOpen(false);
    };

    const handleEditCancel = () => {
        setEditConfirmationOpen(false);
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        
       
        const updatedProducts = products.map(product => 
            product._id === selectedProduct._id ? selectedProduct : product
        );
        setProducts(updatedProducts);
        setIsEditModalOpen(false); 
    };

    const handleDelete = (productId) => {
        setSelectedProduct(products.find(product => product._id === productId));
        setDeleteConfirmationOpen(true);
    };

    const handleDeleteConfirm = () => {
       
        setProducts(products.filter(product => product._id !== selectedProduct._id));
        setDeleteConfirmationOpen(false); // Close the delete confirmation modal
    };

    const handleDeleteCancel = () => {
        setDeleteConfirmationOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedProduct({
            ...selectedProduct,
            [name]: value
        });
    };

    return (
        <>
        <div>
        <h1 className="order">Rare Fairy Product</h1>
            {error ? (
                <div className="error">Error: {error}</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product.CategoryName}</td>
                                <td>{product.ProductName}</td>
                                <td>{product.Description}</td>
                                <td>
                                    <CloudinaryContext cloudName="your_cloud_name">
                                        <Image publicId={product.imageUrl} alt={product.ProductName} style={{ height:"60px", width:"60px",borderRadius: "30%" }}>
                                            <Transformation width="50" crop="scale" />
                                        </Image>
                                    </CloudinaryContext>
                                </td>
                                <td>
                                    <button className="edit" onClick={() => handleEdit(product)}>Edit</button>
                                </td>
                                <td>
                                    <button className="delete" onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <h2>Edit Product</h2>
                {selectedProduct && (
                    <form onSubmit={handleEditSave}>
                        <label>
                            Category Name:
                            <input
                                type="text"
                                name="CategoryName"
                                value={selectedProduct.CategoryName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Product Name:
                            <input
                                type="text"
                                name="ProductName"
                                value={selectedProduct.ProductName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                name="Description"
                                value={selectedProduct.Description}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setModalIsOpen(false)}>Cancel</button>
                    </form>
                )}
            </Modal>

            <div className="container-box">
                {isEditConfirmationOpen && (
                    <div className="confirmation-modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleEditCancel}>&times;</span>
                            <h2>Confirm Edit</h2>
                            <p>Are you sure you want to edit this product?</p>
                            <button onClick={handleEditConfirm}>Yes</button>
                            <button onClick={handleEditCancel}>No</button>
                        </div>
                    </div>
                )}
                {isDeleteConfirmationOpen && (
                    <div className="confirmation-modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleDeleteCancel}>&times;</span>
                            <h2>Confirm Delete</h2>
                            <p>Are you sure you want to delete this product?</p>
                            <button onClick={handleDeleteConfirm}>Yes</button>
                            <button onClick={handleDeleteCancel}>No</button>
                        </div>
                    </div>
                )}
                {isEditModalOpen && selectedProduct && (
                    <div className="edit-modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setIsEditModalOpen(false)}>&times;</span>
                            <h2>Edit Product</h2>
                            <form onSubmit={handleEditSave}>
                                <label>Category Name:</label>
                                <input
                                    type="text"
                                    name="CategoryName"
                                    value={selectedProduct.CategoryName}
                                    onChange={handleInputChange}
                                />
                                <label>Product Name:</label>
                                <input
                                    type="text"
                                    name="ProductName"
                                    value={selectedProduct.ProductName}
                                    onChange={handleInputChange}
                                />
                                <label>Description:</label>
                                <input
                                    type="text"
                                    name="Description"
                                    value={selectedProduct.Description}
                                    onChange={handleInputChange}
                                />
                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Admin;


