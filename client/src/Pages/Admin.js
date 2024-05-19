import React from 'react';
import './Admin.css';
import customer01 from '../Assets/customer01.jpeg';
import customer02 from '../Assets/customer02.jpeg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// function Admin() {
//     return (
//         <>
//             <div className=" Admin-container">
//                 <div className="sidebar">
//                     <h2>Rare fairy</h2>        <ul>
//                         <li><a href="#">Dashboard</a></li>
//                         <li><button><a href="#">Users</a></button></li>
//                         <li><button><a href="#">Products</a></button></li>
//                         <li><button><a href="#">Settings</a></button></li>
//                         <li><button><a href="#">Logout</a></button></li>
//                     </ul>
//                 </div>
//                 <div className="main-content">
//                     <div className="header">
//                         <h1>Dashboard</h1>
//                     </div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>No</th>
//                                 <th>Name</th>
//                                 <th>Image</th>
//                                 <th>Email</th>
//                                 <th>Delete</th>
//                                 <th>Edit</th>
//                             </tr>

//                             <tbody>
//                                 <tr>
//                                 <td>01</td>
//                                     <td>Mano</td>
//                                     <td>Image</td>
//                                     <td>mano12@mail.com</td>
//                                     <td>Delete</td>
//                                     <td>Edit</td>

//                                 </tr>
//                                 <tr>
//                                 <td>02</td>
//                                     <td>Thanu</td>
//                                     <td>Image</td>
//                                     <td>mano12@mail.com</td>
//                                     <td>Delete</td>
//                                     <td>Edit</td>
//                                 </tr>
//                                 <tr>

//                                 <td>02</td>
//                                     <td>Alex</td>
//                                     <td>Image</td>

//                                     <td>mano12@mail.com</td>
//                                     <td>Delete</td>
//                                     <td>Edit</td>


//                                 </tr>
//                                 <tr>
//                                 <td>03</td>
//                                     <td>Alex</td>
//                                     <td>Image</td>

//                                     <td>mano12@mail.com</td>
//                                     <td>Delete</td>
//                                     <td>Edit</td>


//                                 </tr>

//                                 <tr>
//                                     <td>Mano</td>
//                                     <td>Alex</td>
//                                     <td>Image</td>

//                                     <td>mano12@mail.com</td>
//                                     <td>Delete</td>
//                                     <td>Edit</td>


//                                 </tr>
//                             </tbody>
//                         </thead>
//                     </table>



//                 </div>
//             </div>

//         </>
//     )
// }
// export default Admin;


function Admin() {
    return (
        <>
            <>
                <Navbar />
                <div className='Admin'>
                    <div class="Admin-container">
                        <div class="navigation">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            {/* <ion-icon name="logo-apple"></ion-icon> */}
                                        </span>
                                        <div class="title" style={{ fontsize: '50px' }} >Rare Fairy</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="home-outline"></ion-icon>
                                        </span>
                                        <a href='/Home'> <div class="title-3">Home</div></a>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="people-outline"></ion-icon>
                                        </span>
                                        <div class="title-2">Customers</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="chatbubble-outline"></ion-icon>
                                        </span>
                                        <div class="title-2">Products</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="help-outline"></ion-icon>
                                        </span>
                                        <div class="tit le-2">3.Settings</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="settings-outline"></ion-icon>
                                        </span>
                                        <div class="title-2">4.Sign Out</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="lock-closed-outline"></ion-icon>
                                        </span>
                                        {/* <div class="title-2">5.Password</div> */}
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <span class="icon">
                                            <ion-icon name="log-out-outline"></ion-icon>
                                        </span>
                                        {/* <div class="title">Sign Out</div> */}
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div class="main">
                            <div class="topbar">
                                <div class="toggle">
                                    <ion-icon name="menu-outline"></ion-icon>
                                </div>

                                <div class="search">
                                    <label>
                                        <input type="text" placeholder="Search here"></input>
                                        <ion-icon name="search-outline"></ion-icon>
                                    </label>
                                </div>

                                <div class="user">
                                    <img src={customer01} />
                                </div>
                            </div>


                            <div class="cardBox">
                                <div class="card">
                                    <div>
                                        <div class="numbers">1,504</div>
                                        <div class="cardName">Daily Views</div>
                                    </div>

                                    <div class="iconBx">
                                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                                    </div>
                                </div>

                                <div class="card">
                                    <div>
                                        <div class="numbers">80</div>
                                        <div class="cardName">Orders</div>
                                    </div>

                                    <div class="iconBx">
                                        <ion-icon name="cart-outline"></ion-icon>
                                    </div>
                                </div>

                                <div class="card">
                                    <div>
                                        <div class="numbers">284</div>
                                        <div class="cardName">Comments</div>
                                    </div>

                                    <div class="iconBx">
                                        <ion-icon name="chatbubbles-outline"></ion-icon>
                                    </div>
                                </div>

                                <div class="card">
                                    <div>
                                        <div class="numbers">$7,842</div>
                                        <div class="cardName">User Counts</div>
                                    </div>

                                    <div class="iconBx">
                                        <ion-icon name="cash-outline"></ion-icon>
                                    </div>
                                </div>
                            </div>


                            <div class="details">
                                <div class="recentOrders">
                                    <div class="cardHeader">
                                        <h2>Recent Orders</h2>
                                        {/* <a href="#" class="btn">View All</a> */}
                                    </div>

                                    <table>
                                        <thead>
                                            <tr>
                                                <td> Product Name</td>
                                                <td>Price</td>
                                                <td>Payment</td>
                                                <td>Status</td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Bridal designs</td>
                                                <td>$1200</td>
                                                <td>Paid</td>
                                                <td><span class="status delivered">Finish</span></td>
                                            </tr>

                                            <tr>
                                                <td>Salwar designs</td>
                                                <td>$110</td>
                                                <td>Due</td>
                                                <td><span class="status pending">Pending</span></td>
                                            </tr>

                                            <tr>
                                                <td>Zardosi designs</td>
                                                <td>$1200</td>
                                                <td>Paid</td>
                                                <td><span class="status return">Return</span></td>
                                            </tr>

                                            <tr>
                                                <td>Emproidry designs</td>
                                                <td>$620</td>
                                                <td>Due</td>
                                                <td><span class="status inProgress">In Progress</span></td>
                                            </tr>

                                            <tr>
                                                <td>Bridal Blouse</td>
                                                <td>$1200</td>
                                                <td>Paid</td>
                                                <td><span class="status delivered">Finish</span></td>
                                            </tr>

                                            <tr>
                                                <td>Bridal designs</td>
                                                <td>$110</td>
                                                <td>Due</td>
                                                <td><span class="status pending">Pending</span></td>
                                            </tr>

                                            <tr>
                                                <td>Emproidry designs</td>
                                                <td>$1200</td>
                                                <td>Paid</td>
                                                <td><span class="status return">Pending</span></td>
                                            </tr>

                                            <tr>
                                                <td>Zardosi designs</td>
                                                <td>$620</td>
                                                <td>Due</td>
                                                <td><span class="status inProgress">In Progress</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div class="recentCustomers">
                                    <div class="cardHeader">
                                        <h2>Recent Customers</h2>
                                    </div>

                                    <table>
                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer02} /></div>
                                            </td>
                                            <td>
                                                <h4>Daviya <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer02} /></div>
                                            </td>
                                            <td>
                                                <h4>Amirtha <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer01} /></div>
                                            </td>
                                            <td>
                                                <h4>Daviya <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer02} /></div>
                                            </td>
                                            <td>
                                                <h4>Amirtha <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer02} /></div>
                                            </td>
                                            <td>
                                                <h4>Daviya <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer01} /></div>
                                            </td>
                                            <td>
                                                <h4>Amirtha <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer02} /></div>
                                            </td>
                                            <td>
                                                <h4>Daviya <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="60px">
                                                <div class="imgBx"><img src={customer01} /></div>
                                            </td>
                                            <td>
                                                <h4>Amirtha <br /> <span>Vavuniya</span></h4>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </>
        </>


    )
}

export default Admin;