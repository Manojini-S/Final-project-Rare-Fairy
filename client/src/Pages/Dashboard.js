import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Admin from "../Pages/Admin";
import customer02 from "../Assets/customer02.jpeg";
import Modal from "../Components/Modal";
import ProductForm from "./Addproduct";
import Logo from "../Assets/logo3.png";

const AdminDashboard = () => {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [usersCount, setUsersCount] = useState(0);
    const [ordersCount, setOrdersCount] = useState(0);
    const [productsCount, setProductsCount] = useState(0);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successfully!");
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const fetchUsersCount = async () => {
        try {
            const response = await fetch("https://final-project-rare-fairy-backend.onrender.com/user/count");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setUsersCount(data.count);
        } catch (error) {
            console.error("Error fetching users count:", error);
        }
    };

    const fetchOrdersCount = async () => {
        try {
            const response = await fetch("https://final-project-rare-fairy-backend.onrender.com/order/count");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setOrdersCount(data.count);
        } catch (error) {
            console.error("Error fetching orders count:", error);
        }
    };

    const fetchProductsCount = async () => {
        try {
            const response = await fetch("https://final-project-rare-fairy-backend.onrender.com/image/count");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setProductsCount(data.count);
        } catch (error) {
            console.error("Error fetching products count:", error);
        }
    };

    useEffect(() => {
        fetchUsersCount();
        fetchOrdersCount();
        fetchProductsCount();
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="sidebar">
                    <div className="sidebar-header">
                       
                        <h2>Rare Fairy</h2>
                    </div>
                    <ul className="sidebar-menu">
                        <li>
                            <Link to="/Dashboard">
                                <i className="fas fa-tachometer-alt"></i> Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/OrderList">
                                <i className="fas fa-shopping-cart"></i> Order
                            </Link>
                        </li>
                        <li>
                            <Link to="/Admin">
                                <i className="fas fa-users"></i> Users
                            </Link>
                        </li>
                        <li>
                            <a href="/product">
                                <i className="fas fa-box-open"></i> Product{" "}
                            </a>
                        </li>
                        <li>
                            <Link to="/Payment">
                                <i className="fas fa-credit-card"></i> Payment
                            </Link>
                        </li>
                        <li>
                            <Link className="a" to="/login" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    <div className="header">
                        <div className="header-left">
                            <h1>Welcome to Admin</h1>
                        </div>
                        <div className="header-right">
                            <div className="search-bar">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div className="notification">
                                <i className="fas fa-bell"></i>
                            </div>
                            <div className="profile">
                                <img src={customer02} alt="Profile" />
                                <span>Manojini Suthakar</span>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="card-dash">
                            <h3>Users</h3>
                            <p>Number of active users: {usersCount}</p>
                            
                        </div>
                        <div className="card-dash">
                            <h3>Order</h3>
                            <p>Number of orders: {ordersCount}</p>
                        </div>
                        <div className="card-dash">
                            <Link to="/Addproduct" onClick={handleShow}>
                                <h3>Add product</h3>
                                <p>Number of products: {productsCount}</p>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Modal show={showModal} handleClose={handleClose}>
                <ProductForm />
            </Modal>
        </>
    );
};

export default AdminDashboard;
