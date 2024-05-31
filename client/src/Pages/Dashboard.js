// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserTable = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         axios.get('http://localhost:3003/user/getUser')
//             .then(response => setUsers(response.data))
//             .catch(error => {
//                 console.error('Error fetching users:', error);
//                 setError('An error occurred while fetching users. Please try again later.');
//             });
//     }, []);

//     return (
//         <div>
//             {error ? (
//                 <div>Error: {error}</div>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th> 
//                             <th>Email</th>
//                             <th>CRUD</th>
//                             {/* <th>Product Types</th> */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map(user => (
//                             <tr key={user._UserId}>
//                                 <td>{user.Name}</td>
//                                 <td>{user.Email}</td>
//                                 <td>
//                                     <button className='edit' type='button'>Edit</button>
//                                     <button className='delete' type='button'>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserTable;





// // import React from 'react';
// import './Admin.css';
// import customer01 from '../Assets/customer01.jpeg';
// import customer02 from '../Assets/customer02.jpeg';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import axios from 'axios';


// // function Admin() {
// //     return (
// //         <>
// //             <div className=" Admin-container">
// //                 <div className="sidebar">
// //                     <h2>Rare fairy</h2>        <ul>
// //                         <li><a href="#">Dashboard</a></li>
// //                         <li><button><a href="#">Users</a></button></li>
// //                         <li><button><a href="#">Products</a></button></li>
// //                         <li><button><a href="#">Settings</a></button></li>
// //                         <li><button><a href="#">Logout</a></button></li>
// //                     </ul>
// //                 </div>
// //                 <div className="main-content">
// //                     <div className="header">
// //                         <h1>Dashboard</h1>
// //                     </div>
// //                     <table>
// //                         <thead>
// //                             <tr>
// //                                 <th>No</th>
// //                                 <th>Name</th>
// //                                 <th>Image</th>
// //                                 <th>Email</th>
// //                                 <th>Delete</th>
// //                                 <th>Edit</th>
// //                             </tr>

// //                             <tbody>
// //                                 <tr>
// //                                 <td>01</td>
// //                                     <td>Mano</td>
// //                                     <td>Image</td>
// //                                     <td>mano12@mail.com</td>
// //                                     <td>Delete</td>
// //                                     <td>Edit</td>

// //                                 </tr>
// //                                 <tr>
// //                                 <td>02</td>
// //                                     <td>Thanu</td>
// //                                     <td>Image</td>
// //                                     <td>mano12@mail.com</td>
// //                                     <td>Delete</td>
// //                                     <td>Edit</td>
// //                                 </tr>
// //                                 <tr>

// //                                 <td>02</td>
// //                                     <td>Alex</td>
// //                                     <td>Image</td>

// //                                     <td>mano12@mail.com</td>
// //                                     <td>Delete</td>
// //                                     <td>Edit</td>


// //                                 </tr>
// //                                 <tr>
// //                                 <td>03</td>
// //                                     <td>Alex</td>
// //                                     <td>Image</td>

// //                                     <td>mano12@mail.com</td>
// //                                     <td>Delete</td>
// //                                     <td>Edit</td>


// //                                 </tr>

// //                                 <tr>
// //                                     <td>Mano</td>
// //                                     <td>Alex</td>
// //                                     <td>Image</td>

// //                                     <td>mano12@mail.com</td>
// //                                     <td>Delete</td>
// //                                     <td>Edit</td>


// //                                 </tr>
// //                             </tbody>
// //                         </thead>
// //                     </table>



// //                 </div>
// //             </div>

// //         </>
// //     )
// // }
// // export default Admin;

// import React, { useState, useEffect } from 'react';

// function Admin() {
//     const [users, setUsers] = useState([]);
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch users and orders dataser
//         const fetchData = async () => {
//             try {
//                 const usersResponse = await fetch('/user/users'); 
//                 const ordersResponse = await fetch('/Aridesigner/orders'); 
//                 const usersData = await usersResponse.json();
//                 const ordersData = await ordersResponse.json();
//                 setUsers(usersData);
//                 setOrders(ordersData);
//             } catch (error) {
//                 console.error("Error fetching data", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//             <>
//                 {/* <Navbar /> */}
//                 <div className='Admin'>
//                     <div class="Admin-container">
//                         <div class="navigation">
//                             <ul>
//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             {/* <ion-icon name="logo-apple"></ion-icon> */}
//                                         </span>
//                                         <div class="title-3" style={{ fontsize: '50px' }} >Rare Fairy</div>
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="home-outline"></ion-icon>
//                                         </span>
//                                         <a href='/Home'> <div class="title-2">Home</div></a>
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="people-outline"></ion-icon>
//                                         </span>
//                                         <div class="title-2"><a href="/Userprofile">Users</a></div>
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="chatbubble-outline"></ion-icon>
//                                         </span>
//                                         <div class="title-2">Products</div>
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="people-outline"></ion-icon>
//                                         </span>
//                                         <div class="title-2"><a href="/Userprofile">Payment</a></div>
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="help-outline"></ion-icon>
//                                         </span>
                                      
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="settings-outline"></ion-icon>
//                                         </span>
//                                         {/* <div class="title-2">4.Sign Out</div> */}
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="lock-closed-outline"></ion-icon>
//                                         </span>
//                                         {/* <div class="title-2">5.Password</div> */}
//                                     </a>
//                                 </li>

//                                 <li>
//                                     <a href="#">
//                                         <span class="icon">
//                                             <ion-icon name="log-out-outline"></ion-icon>
//                                         </span>
//                                         {/* <div class="title">Sign Out</div> */}
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>


//                         <div class="main">
//                             <div class="topbar">
//                                 <div class="toggle">
//                                     <ion-icon name="menu-outline"></ion-icon>
//                                 </div>

//                                 <div class="search">
//                                     <label>
//                                         <input type="text" placeholder="Search here"></input>
//                                         <ion-icon name="search-outline"></ion-icon>
//                                     </label>
//                                 </div>

//                                 <div class="user">
//                                     <img src={customer01} />
//                                 </div>
//                             </div>


//                             <div class="cardBox">
//                                 <div class="card">
//                                     <div>
//                                         <div class="numbers">1,504</div>
//                                         <div class="cardName">Daily Views</div>
//                                     </div>

//                                     <div class="iconBx">
//                                         {/* <ion-icon name="eye-outline"></ion-icon> */}
//                                     </div>
//                                 </div>

//                                 <div class="card">
//                                     <div>
//                                         <div class="numbers">80</div>
//                                         <div class="cardName">Orders</div>
//                                     </div>

//                                     <div class="iconBx">
//                                         <ion-icon name="cart-outline"></ion-icon>
//                                     </div>
//                                 </div>

//                                 <div class="card">
//                                     <div>
//                                         <div class="numbers">284</div>
//                                         <div class="cardName">Comments</div>
//                                     </div>

//                                     <div class="iconBx">
//                                         <ion-icon name="chatbubbles-outline"></ion-icon>
//                                     </div>
//                                 </div>

//                                 <div class="card">
//                                     <div>
//                                         <div class="numbers">$7,842</div>
//                                         <div class="cardName">User Counts</div>
//                                     </div>

//                                     <div class="iconBx">
//                                         <ion-icon name="cash-outline"></ion-icon>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div class="details">
//                                 <div class="recentOrders">
//                                     <div class="cardHeader">
//                                         <h2>Recent Orders</h2>
//                                         {/* <a href="#" class="btn">View All</a> */}
//                                     </div>

//                                     <table>
//                                         <thead>
//                                             <tr>
//                                                 <td> Product Types</td>
//                                                 <td>Price</td>
//                                                 <td>Payment</td>
//                                                 <td>Status</td>
//                                             </tr>
//                                         </thead>

//                                         <tbody>
//                                             <tr>
//                                                 <td>Bridal designs</td>
//                                                 <td>$1200</td>
//                                                 <td>Paid</td>
//                                                 <td><span class="status delivered">Finish</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Salwar designs</td>
//                                                 <td>$110</td>
//                                                 <td>Due</td>
//                                                 <td><span class="status pending">Pending</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Zardosi designs</td>
//                                                 <td>$1200</td>
//                                                 <td>Paid</td>
//                                                 <td><span class="status return">Return</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Emproidry designs</td>
//                                                 <td>$620</td>
//                                                 <td>Due</td>
//                                                 <td><span class="status inProgress">In Progress</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Bridal Blouse</td>
//                                                 <td>$1200</td>
//                                                 <td>Paid</td>
//                                                 <td><span class="status delivered">Finish</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Bridal designs</td>
//                                                 <td>$110</td>
//                                                 <td>Due</td>
//                                                 <td><span class="status pending">Pending</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Emproidry designs</td>
//                                                 <td>$1200</td>
//                                                 <td>Paid</td>
//                                                 <td><span class="status return">Pending</span></td>
//                                             </tr>

//                                             <tr>
//                                                 <td>Zardosi designs</td>
//                                                 <td>$620</td>
//                                                 <td>Due</td>
//                                                 <td><span class="status inProgress">In Progress</span></td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>




// {/* 
//                                 <div class="recentCustomers">
//                                     <div class="cardHeader">
//                                         <h2>Recent Customers</h2>
//                                     </div>

//                                     <table>
//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer02} /></div>
//                                             </td>
//                                             <td>
//                                                 <h4>Daviya <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer02} /></div>
//                                             </td>
//                                             <td>
//                                             <h4>Amirtha <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer01} /></div>
//                                             </td>
//                                             <td>
//                                             <h4>Daviya <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer02} /></div>
//                                             </td>
//                                             <td>
//                                             <h4>Amirtha <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer02} /></div>
//                                             </td>
//                                             <td>
//                                             <h4>Daviya <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer01} /></div>
//                                             </td>
//                                             <td>
//                                                 <h4>Amirtha <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer02} /></div>
//                                             </td>
//                                             <td>
//                                             <h4>Daviya <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td width="60px">
//                                                 <div class="imgBx"><img src={customer01} /></div>
//                                             </td>
//                                             <td>
//                                             <h4>Amirtha <br /><br /> Vavuniya</h4>
//                                             </td>
//                                         </tr>
//                                     </table>
//                                 </div> */}





//                             </div>
//                         </div>
//                     </div>


//                 </div>

//             </>
//         </>


//     )
// }

// export default Admin;









//final

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';

// import customer01 from '../Assets/customer01.jpeg';
// import customer02 from '../Assets/customer02.jpeg';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Admin() {
//     const [users, setUsers] = useState([]);
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const usersResponse = await axios.get('http://localhost:3003/user/getUser');
//                 const ordersResponse = await axios.get('http://localhost:3003/orders'); 
//                 setUsers(usersResponse.data);
//                 setOrders(ordersResponse.data);
//             } catch (error) {
//                 console.error("Error fetching data", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='Admin'>
//             <div className="Admin-container">
//                 <div className="navigation">
//                     <ul>
//                         <li>
//                             <a href="#">
//                                 <span className="icon"></span>
//                                 <div className="title-3" style={{ fontSize: '30px',paddingBottom:'100px' }}>Rare Fairy</div>
//                             </a>
//                         </li>
//                         <li>
//                             <Link to="/Admin2">
//                                 <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
//                                 <div className="title-2">DashBoards</div>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/Admin">
//                                 <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
//                                 <div className="title-2">Users</div>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/product">
//                                 <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
//                                 <div className="title-2">Products</div>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/Paymentadmin">
//                                 <span className="icon"><ion-icon name="cash-outline"></ion-icon></span>
//                                 <div className="title-2">Payment</div>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/Log out">
//                                 <span className="icon"><ion-icon name="cash-outline"></ion-icon></span>
//                                 <div className="title-2">Log out</div>
//                             </Link>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="main">
//                     <div className="topbar">
//                         <div className="toggle">
//                             <ion-icon name="menu-outline"></ion-icon>
//                         </div>
//                         <div className="search">
                           
//                         </div>
//                         <div>Manojini suthakar</div>
//                         <div className="user">
//                             <img src={customer01} alt="User" />
//                         </div>
//                     </div>
//                     <h2>Welcome to Album</h2>
//                     <div className="cardBox">
//                         {/* <div className="card">
//                             <div>
//                                 <div className="numbers">1,504</div>
//                                 <div className="cardName">Daily Views</div>
//                             </div>
//                             <div className="iconBx"></div>
//                         </div> */}
//                         <div className="card">
//                             <div>
//                                 <div className="numbers">80</div>
//                                 <div className="cardName">Orders</div>
//                             </div>
//                             <div className="iconBx">
//                                 <ion-icon name="cart-outline"></ion-icon>
//                             </div>
//                         </div>
//                         {/* <div className="card">
//                             <div>
//                                 <div className="numbers">284</div>
//                                 <div className="cardName">Comments</div>
//                             </div>
//                             <div className="iconBx">
//                                 <ion-icon name="chatbubbles-outline"></ion-icon>
//                             </div>
//                         </div> */}
//                         <div className="card">
//                             <div>
//                                 <div className="numbers">$7,842</div>
//                                 <div className="cardName">User Counts</div>
//                             </div>
//                             <div className="iconBx">
//                                 <ion-icon name="cash-outline"></ion-icon>
//                             </div>
//                         </div>
//                     </div>
                   

//                     <div className="details">
//                         <div className="recentOrders">
//                             <div className="cardHeader">
//                                 <h2>Recent Orders</h2>
//                             </div>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <td>Product Types</td>
//                                         <td>Price</td>
//                                         <td>Payment</td>
//                                         <td>Status</td>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {orders.map((order, index) => (
//                                         <tr key={index}>
//                                             <td>{order.productType}</td>
//                                             <td>{order.price}</td>
//                                             <td>{order.payment}</td>
//                                             <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
                      
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Admin;









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
                    <div className="card-dash">
                        <h3>Order</h3>
                        <p>Reports generated: 567</p>
                    </div>
                 
                </div>
                <Admin/>
            </div>
        </div>
        </>
    );
};

export default AdminDashboard;



