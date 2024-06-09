 



import React, { useState } from 'react';
import './Dashboard.css';
import Admin from '../Pages/Admin';
import customer02 from '../Assets/customer02.jpeg';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminDashboard = () => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    

    return (
        <>
       
        <div className="dashboard">
          
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Rare Fairy</h2>
                </div>
                <ul className="sidebar-menu">
                    <li><a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                    <li><a href="/Admin"><i className="fas fa-users"></i> Users</a></li>
                    <li><a href="#"><i className="fas fa-cogs"></i> Settings</a></li>
                    <li><a href="/product"><i className="fas fa-box-open"></i> Product</a></li>
                    <li><a href="/payment"><i className="fas fa-credit-card"></i> Payment</a></li>
                 
                    <li><a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
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
                            {/* <button><i className="fas fa-search"></i></button> */}
                        </div>
                        <div className="notification">
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className="profile">
                            <img src={customer02} alt="Profile Picture" />
                            {/* <img itemprop="thumbnail"  class="lazy lst_img loaded" width="350" height="308" data-was-processed="true"></img> */}
                            <span>Manojini Suthakar</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="card-dash">
                        <h3>Users</h3>
                        <p>Number of active users: 09</p>
                    </div>
                    <div className="card-dash">
                        <h3>Order</h3>
                        <p>Number of orders:12</p>
                    </div>
                    {/* <div className="card-dash">
                        <h3>Order</h3>
                        <p>Reports generated: 567</p>
                    </div> */}
                 
                </div>
                <Admin/>
            </div>
        </div>
        </>
    );
};

export default AdminDashboard;



